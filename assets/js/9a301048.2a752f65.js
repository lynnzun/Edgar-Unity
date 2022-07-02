"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4109],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||o;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86253:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"(PRO) Custom input"},s=void 0,p={unversionedId:"generators/custom-input",id:"generators/custom-input",title:"(PRO) Custom input",description:"In the free version of the asset, the input for the generator is fixed. That means that we create a level graph in the GUI and give it directly to the generator. However, there are situations where we might want to alter the level graph. For example, we may want to add a secret room that is connected to a random room in the level.",source:"@site/docs/generators/custom-input.md",sourceDirName:"generators",slug:"/generators/custom-input",permalink:"/Edgar-Unity/docs/next/generators/custom-input",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/docs/generators/custom-input.md",tags:[],version:"current",frontMatter:{title:"(PRO) Custom input"},sidebar:"docs",previous:{title:"(PRO) Platformer generator",permalink:"/Edgar-Unity/docs/next/generators/platformer-generator"},next:{title:"Example 1",permalink:"/Edgar-Unity/docs/next/examples/example-1"}},c=[{value:"<code>LevelGraph</code> and <code>LevelDescription</code>",id:"levelgraph-and-leveldescription",children:[],level:2},{value:"Custom input implementation",id:"custom-input-implementation",children:[],level:2},{value:"Typical use cases",id:"typical-use-cases",children:[{value:"Add rooms to the level graph",id:"add-rooms-to-the-level-graph",children:[],level:3},{value:"Assign room templates automatically",id:"assign-room-templates-automatically",children:[],level:3},{value:"Procedural graphs",id:"procedural-graphs",children:[],level:3}],level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},m=d("ExternalCode"),h=d("Path"),u={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the free version of the asset, the input for the generator is fixed. That means that we create a level graph in the GUI and give it directly to the generator. However, there are situations where we might want to alter the level graph. For example, we may want to add a secret room that is connected to a random room in the level."),(0,o.kt)("p",null,"In this tutorial, we will learn how to implement custom inputs in order to have more control over the input for the generator."),(0,o.kt)("h2",{id:"levelgraph-and-leveldescription"},(0,o.kt)("inlineCode",{parentName:"h2"},"LevelGraph")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"LevelDescription")),(0,o.kt)("p",null,"The first thing that we need to understand is the difference between ",(0,o.kt)("inlineCode",{parentName:"p"},"LevelGraph")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"LevelDescription")," classes. If you are reading this tutorial, you probably know what is a level graph. It is a collection of rooms and connections, and it describes the high-level structure of generated levels. With each level graph is associated an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"LevelGraph")," scriptable object. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"LevelDescription")," class has a different suffix based on if it is used in the 2D version (",(0,o.kt)("inlineCode",{parentName:"p"},"LevelDescriptionGrid2D"),") or in the 3D version (",(0,o.kt)("inlineCode",{parentName:"p"},"LevelDescriptionGrid3D"),"). The same also applies to ",(0,o.kt)("inlineCode",{parentName:"p"},"DungeonGeneratorInputBase"),", while ",(0,o.kt)("inlineCode",{parentName:"p"},"LevelGraph")," is the same in both versions.")),(0,o.kt)("p",null,"However, level graphs are not directly given to the generator as an input. First, we need to convert the ",(0,o.kt)("inlineCode",{parentName:"p"},"LevelGraph")," to an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"LevelDescription")," class. The reason for that is that level graphs are made primarily for the GUI editor, and we need to convert them to a real graph data structure."),(0,o.kt)("p",null,"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"LevelGraph")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"LevelDescription")," revolve around rooms and connections. The following code should demonstrate the basic API of both classes and how to convert one to the other one:"),(0,o.kt)(m,{name:"2d_customInput_full",mdxType:"ExternalCode"}),(0,o.kt)("h2",{id:"custom-input-implementation"},"Custom input implementation"),(0,o.kt)("p",null,"Custom inputs are quite similar to ",(0,o.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/next/generators/post-process"},"Custom post-processing")," logic. We have to create a class that inherits from ",(0,o.kt)("inlineCode",{parentName:"p"},"DungeonGeneratorInputBase"),". And because the base class is a ScriptableObject, we need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateAssetMenu")," attribute, so we are able to create an instance of that ScriptableObject. The ",(0,o.kt)("inlineCode",{parentName:"p"},"DungeonGeneratorInputBase")," class has one abstract method that we need to implement - ",(0,o.kt)("inlineCode",{parentName:"p"},"LevelDescription GetLevelDescription()"),":"),(0,o.kt)(m,{name:"2d_customInput_simple",mdxType:"ExternalCode"}),(0,o.kt)("p",null,"After we implement the logic, we have to create an instance of that ScriptableObject by right-clicking in the project view and ",(0,o.kt)(h,{path:"2d:Examples/Docs/My custom input",mdxType:"Path"}),". And the last step is to switch the ",(0,o.kt)("em",{parentName:"p"},"Input Type")," in the generator inspector to ",(0,o.kt)("em",{parentName:"p"},"Custom Input")," and drag and drop the ScriptableObject instance to the ",(0,o.kt)("em",{parentName:"p"},"Custom Input Task")," field."),(0,o.kt)("h2",{id:"typical-use-cases"},"Typical use cases"),(0,o.kt)("h3",{id:"add-rooms-to-the-level-graph"},"Add rooms to the level graph"),(0,o.kt)("p",null,"One typical use case is adding additional rooms (for example a random secret room) to an existing level graph. The workflow is usually as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create the static part of the level graph in the GUI"),(0,o.kt)("li",{parentName:"ol"},"Create a custom input task with a public level graph field that we will assign our level graph to"),(0,o.kt)("li",{parentName:"ol"},"Convert the ",(0,o.kt)("inlineCode",{parentName:"li"},"LevelGraph")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"LevelDescription")," (as discussed above)"),(0,o.kt)("li",{parentName:"ol"},"Create additional rooms and connect them to existing rooms in the level description")),(0,o.kt)("p",null,"To make it easier to work with the graph of rooms and connections, ",(0,o.kt)("inlineCode",{parentName:"p"},"LevelDescription")," has a ",(0,o.kt)("inlineCode",{parentName:"p"},"IGraph<RoomBase> GetGraph()")," method to get the current graph of rooms. The graphs contain all the expected methods like getting all rooms or checking if two rooms are neighbours."),(0,o.kt)("p",null,"For an example of how can this be implemented, see the ",(0,o.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/next/examples/enter-the-gungeon"},"Enter the Gungeon")," example where we connect a secret room to a random room in the graph."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The graph which is returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"GetGraph()")," method currently does not get updated when you modify the level description. You need to call the method again to get a new graph.")),(0,o.kt)("h3",{id:"assign-room-templates-automatically"},"Assign room templates automatically"),(0,o.kt)("p",null,"Another typical use case is implementing custom logic for assigning room templates to individual rooms. For example, if we use ",(0,o.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/next/basics/level-graphs#pro-custom-rooms-and-connections"},"custom rooms"),", we may want to assign room templates based on the type of the room instead of manually assigning room templates to individual rooms. This can be seen both in ",(0,o.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/next/examples/enter-the-gungeon"},"Enter the Gungeon")," and ",(0,o.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/next/examples/dead-cells"},"Dead Cells")," examples."),(0,o.kt)("h3",{id:"procedural-graphs"},"Procedural graphs"),(0,o.kt)("p",null,"It is also possible to have a completely procedural structure of levels by creating the whole level description on the fly without any static parts."))}g.isMDXComponent=!0}}]);