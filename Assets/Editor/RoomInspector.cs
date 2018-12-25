﻿namespace Assets.Editor
{
	using System;
	using System.Linq;
	using LayoutGraphEditor;
	using Scripts.Data.Graphs;
	using UnityEditor;
	using UnityEngine;

	[CustomEditor(typeof(Room))]
	public class RoomInspector : Editor
	{
		public override void OnInspectorGUI()
		{
			serializedObject.Update();
		
			DrawDefaultInspector();

			var layoutGraph = LayoutGraphWindow.StaticData; 
			var room = (Room)target;

			if (layoutGraph != null)
			{
				var roomsGroups = layoutGraph.RoomsGroups;
				var options = roomsGroups.Select(x => x.Name).Prepend("None").ToArray();
				var selected = 0;

				if (room.RoomsGroupGuid != Guid.Empty)
				{
					selected = roomsGroups.FindIndex(x => x.Guid == room.RoomsGroupGuid) + 1;
				}

				selected = EditorGUILayout.Popup("Rooms group", selected, options);

				if (selected == 0)
				{
					room.RoomsGroupGuid = Guid.Empty;
				}
				else
				{
					room.RoomsGroupGuid = roomsGroups[selected - 1].Guid;
				}
			}

			serializedObject.ApplyModifiedProperties(); 
			EditorUtility.SetDirty(target);
		}
	}
}