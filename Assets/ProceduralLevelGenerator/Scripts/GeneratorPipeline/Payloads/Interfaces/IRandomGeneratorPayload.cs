﻿using System;

namespace Assets.ProceduralLevelGenerator.Scripts.GeneratorPipeline.Payloads.Interfaces
{
    /// <summary>
    ///     Represents a payload with an instance of a random numbers generator.
    /// </summary>
    public interface IRandomGeneratorPayload
    {
        Random Random { get; set; }
    }
}