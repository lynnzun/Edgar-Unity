﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Assets.ProceduralLevelGenerator.Scripts.Data.Graphs;
using Assets.ProceduralLevelGenerator.Scripts.GeneratorPipeline.Payloads.Interfaces;
using Assets.ProceduralLevelGenerator.Scripts.GeneratorPipeline.Payloads.PayloadInitializers;
using Assets.ProceduralLevelGenerator.Scripts.GeneratorPipeline.PrecomputedLevels;
using Assets.ProceduralLevelGenerator.Scripts.Pipeline;
using Assets.ProceduralLevelGenerator.Scripts.Utils;
using MapGeneration.Benchmarks;
using MapGeneration.Benchmarks.ResultSaving;
using MapGeneration.Interfaces.Benchmarks;
using MapGeneration.MetaOptimization.Evolution.DungeonGeneratorEvolution;
using MapGeneration.Utils.MapDrawing;
using UnityEngine;
using Debug = UnityEngine.Debug;

namespace Assets.ProceduralLevelGenerator.Scripts.GeneratorPipeline.DungeonGenerators
{
    /// <summary>
    ///     MonoBehaviour script that holds the whole generator pipeline.
    /// </summary>
    public class DungeonGeneratorPipeline : MonoBehaviour
    {
        public int BenchmarkRuns = 20;

        public float CameraSize = 60;

        [HideInInspector]
        public bool IsPrecomputeRunning;

        public int LevelsToPrecompute = 20;

        [ExpandableNotFoldable]
        public AbstractPayloadInitializer PayloadInitializer;

        [HideInInspector]
        [ExpandableNotFoldable]
        public List<PipelineItem> PipelineItems;

        public AbstractPrecomputedLevelsHandler PrecomputedLevelsHandler;

        [HideInInspector]
        public int PrecomputeProgress;

        public Camera ScreenshotCamera;

        public void Generate()
        {
            var stopwatch = new Stopwatch();
            stopwatch.Start();
            Debug.Log("--- Pipeline started ---");

            var pipelineRunner = new PipelineRunner();
            pipelineRunner.Run(PipelineItems, PayloadInitializer.InitializePayload());

            Debug.Log($"--- Pipeline completed. {stopwatch.ElapsedMilliseconds / 1000f:F} s ---");
        }

        // TODO: maybe make this with live preview? Would it need to do the benchmark manually?
        public void RunBenchmark()
        {
            StartCoroutine(RunBenchmarkCoroutine());
        }

        // TODO: maybe make this with live preview? Would it need to do the benchmark manually?
        public IEnumerator RunBenchmarkCoroutine()
        {
            Debug.Log("Run Benchmark");

            var layoutDrawer = new SVGLayoutDrawer<Room>();
            var pipelineRunner = new PipelineRunner();
            var runs = new List<GeneratorRun<AdditionalRunData>>();

            for (var i = 0; i < BenchmarkRuns; i++)
            {
                var stopwatch = new Stopwatch();
                stopwatch.Start();

                var payload = PayloadInitializer.InitializePayload();
                pipelineRunner.Run(PipelineItems, payload);

                if (payload is IBenchmarkInfoPayload benchmarkInfoPayload)
                {
                    var screenshot = RTImage(ScreenshotCamera);
                    var png = screenshot.EncodeToPNG();
                    var base64 = Convert.ToBase64String(png);

                    var additionalData = new AdditionalUnityData
                    {
                        GeneratedLayoutSvg = layoutDrawer.DrawLayout(benchmarkInfoPayload.GeneratedLevel.GetInternalLayoutRepresentation(), 800,
                            forceSquare: true),
                        ImageBase64 = base64
                    };

                    var generatorRun = new GeneratorRun<AdditionalRunData>(benchmarkInfoPayload.GeneratedLevel.GetInternalLayoutRepresentation() != null,
                        stopwatch.ElapsedMilliseconds, benchmarkInfoPayload.Iterations, additionalData);

                    runs.Add(generatorRun);
                }
                else
                {
                    throw new InvalidOperationException($"Payload must implement {nameof(IBenchmarkInfoPayload)}");
                }

                yield return null;
            }

            var scenarioResult = new BenchmarkScenarioResult("Test", new List<BenchmarkResult>
            {
                new BenchmarkResult("Test", runs.Cast<IGeneratorRun>().ToList())
            });
            var resultSaver = new BenchmarkResultSaver();
            resultSaver.SaveResult(scenarioResult, directory: "Benchmarks/");
        }

        // Take a "screenshot" of a camera's Render Texture.
        private Texture2D RTImage(Camera camera)
        {
            var size = ScreenshotCamera.orthographicSize;
            ScreenshotCamera.orthographicSize = CameraSize;

            Debug.Log(Screen.width);
            Debug.Log(Screen.height);

            var width = 500;
            var height = 500;

            var rect = new Rect(0, 0, width, height);
            var renderTexture = new RenderTexture(width, height, 24);
            var screenShot = new Texture2D(width, height, TextureFormat.RGBA32, false);

            ScreenshotCamera.targetTexture = renderTexture;
            ScreenshotCamera.Render();

            RenderTexture.active = renderTexture;
            screenShot.ReadPixels(rect, 0, 0);

            ScreenshotCamera.targetTexture = null;
            RenderTexture.active = null;

            DestroyImmediate(renderTexture);
            renderTexture = null;
            ScreenshotCamera.orthographicSize = size;
            return screenShot;
        }

        public void PrecomputeLevels()
        {
            Debug.Log("Precompute levels");
            StartCoroutine(PrecomputeLevelsCoroutine());
        }

        private IEnumerator PrecomputeLevelsCoroutine()
        {
            var payloads = new List<object>();
            var pipelineRunner = new PipelineRunner();
            IsPrecomputeRunning = true;

            PrecomputedLevelsHandler.OnComputationStarted();

            for (var i = 0; i < LevelsToPrecompute; i++)
            {
                var payload = PayloadInitializer.InitializePayload();
                pipelineRunner.Run(PipelineItems, payload);

                PrecomputedLevelsHandler.SaveLevel(payload);
                PrecomputeProgress = i + 1;
                yield return null;
            }

            // TODO: check if not null
            PrecomputedLevelsHandler.OnComputationEnded();
        }

        private class AdditionalUnityData : AdditionalRunData
        {
            public string ImageBase64 { get; set; }
        }
    }
}