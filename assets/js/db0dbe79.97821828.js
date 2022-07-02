"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9367],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return u}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(o),u=n,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var m=2;m<a;m++)i[m]=o[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},66103:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return k}});var r=o(87462),n=o(63366),a=(o(67294),o(3905)),i=["components"],l={title:"Room templates"},s=void 0,m={unversionedId:"3d/basics/room-templates",id:"version-2.0.4/3d/basics/room-templates",title:"Room templates",description:"Room templates are one of the main concepts of the generator. They describe how individual rooms in the dungeon look and how they can be connected to one another.",source:"@site/versioned_docs/version-2.0.4/3d/basics/room-templates.md",sourceDirName:"3d/basics",slug:"/3d/basics/room-templates",permalink:"/Edgar-Unity/docs/3d/basics/room-templates",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.4/3d/basics/room-templates.md",tags:[],version:"2.0.4",frontMatter:{title:"Room templates"},sidebar:"3d",previous:{title:"Generator settings",permalink:"/Edgar-Unity/docs/3d/basics/generator-settings"},next:{title:"Level graphs",permalink:"/Edgar-Unity/docs/3d/basics/level-graphs"}},p=[{value:"Creating room templates",id:"creating-room-templates",children:[{value:"Generator settings",id:"generator-settings",children:[],level:3},{value:"Room template structure",id:"room-template-structure",children:[],level:3}],level:2},{value:"Designing room templates",id:"designing-room-templates",children:[{value:"Outline",id:"outline",children:[{value:"<em>OutlineMode</em> - <code>FromColliders</code>",id:"outlinemode---fromcolliders",children:[],level:4},{value:"<em>OutlineMode</em> - <code>Custom</code>",id:"outlinemode---custom",children:[],level:4}],level:3}],level:2},{value:"Doors",id:"doors",children:[{value:"Door sockets",id:"door-sockets",children:[],level:3},{value:"Door directions",id:"door-directions",children:[],level:3}],level:2},{value:"Repeat mode",id:"repeat-mode",children:[],level:2},{value:"Rotation",id:"rotation",children:[],level:2},{value:"Corridors",id:"corridors",children:[],level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},c=d("Image"),u=d("Path"),h=d("Gallery"),g={toc:p};function k(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Room templates are one of the main concepts of the generator. They describe how individual rooms in the dungeon look and how they can be connected to one another."),(0,a.kt)(c,{src:"3d/room_templates/example.png",caption:"Example of a simple room template. Outline of the room template is highlighted with yellow double line and possible door positions are red.",mdxType:"Image"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," If this is your first time working with the 3D version of Edgar, I recommend starting with the ",(0,a.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/3d/examples/basics"},"Basics")," tutorial.")),(0,a.kt)("h2",{id:"creating-room-templates"},"Creating room templates"),(0,a.kt)("p",null,"To create a new room template:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"navigate to the folder where the room template prefab should be saved"),(0,a.kt)("li",{parentName:"ul"},"right click in the ",(0,a.kt)("em",{parentName:"li"},"Project window")," and choose ",(0,a.kt)(u,{path:"3d:Dungeon room template",mdxType:"Path"})),(0,a.kt)("li",{parentName:"ul"},"(optional) rename the prefab file to anything you want")),(0,a.kt)("h3",{id:"generator-settings"},"Generator settings"),(0,a.kt)("p",null,"If you open a newly created room template, it will greet you with a message that you must assign the ",(0,a.kt)("inlineCode",{parentName:"p"},"GeneratorSettings")," field. ",(0,a.kt)("inlineCode",{parentName:"p"},"GeneratorSettings")," is a scriptable object that lets you configure some of the properties of the dungeon generator. Right now, its main function is to configure the grid size of your room templates and generated levels."),(0,a.kt)("p",null,"If you do not have an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"GeneratorSettings")," yet, go to ",(0,a.kt)(u,{path:"3d:Generator settings",mdxType:"Path"})," and create one. If you open the file, you should see a ",(0,a.kt)("inlineCode",{parentName:"p"},"CellSize")," field in which you can configure the grid size. When you are happy with the configuration, assign the file to the ",(0,a.kt)("inlineCode",{parentName:"p"},"GeneratorSettings")," field of your room template."),(0,a.kt)("p",null,"The same instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"GeneratorSettings")," is meant to be shared across all your room templates."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," If you do not plan to generate levels with different grid sizes, you can open your instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"GeneratorSettings")," and click the ",(0,a.kt)("em",{parentName:"p"},"Mark as default generator settings")," button. After that, this instance will be assigned automatically if you create a new room template.")),(0,a.kt)("h3",{id:"room-template-structure"},"Room template structure"),(0,a.kt)("p",null,"Below you can see the room template structure after it is created:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Components")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RoomTemplateSettings")," component attached to the root game object",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"this component is used to configure the room template and also show you the status of the room template")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Game objects")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Blocks")," - container for all the blocks (floors, walls, etc.) of the room template"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Doors")," - container for all the doors of the room template")),(0,a.kt)("h2",{id:"designing-room-templates"},"Designing room templates"),(0,a.kt)("p",null,"You can use any Unity tool to create/design your room templates. The only things that you need to care about are the ",(0,a.kt)("strong",{parentName:"p"},"outline")," of the room template and also the ",(0,a.kt)("strong",{parentName:"p"},"doors")," (which are described in the next section)."),(0,a.kt)("h3",{id:"outline"},"Outline"),(0,a.kt)("p",null,"The core generator algorithm works with a grid of blocks/tiles, so you have to make sure that the outline of the room template is aligned to the underlying grid. The size of the grid is dictated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"GeneratorSettings")," object which was described in the previous sections. The outline of a room template is denoted with a yellow double-line when inside the prefab."),(0,a.kt)("p",null,"There are currently two ways of computing the outline of a room template (controlled by the ",(0,a.kt)("inlineCode",{parentName:"p"},"OutlineMode")," field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"RoomTemplateSettings")," component)."),(0,a.kt)("h4",{id:"outlinemode---fromcolliders"},(0,a.kt)("em",{parentName:"h4"},"OutlineMode")," - ",(0,a.kt)("inlineCode",{parentName:"h4"},"FromColliders")),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"FromColliders")," outline mode is selected. With this mode, the generator looks for all the colliders inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"Blocks")," game object. For each such collider, the generator computes all the grid cells that are at least partially covered by the collider. From these grid cell, the outline of the room template is computed."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Sometimes the colliders might also partially cover neighbouring blocks which are not intended to be included in the outline computation. For this purpose, the ",(0,a.kt)("inlineCode",{parentName:"p"},"GeneratorSettings")," object contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"ColliderSizeTolerance")," field which controls how tolerant should the algorithm be when computing the outline from each collider.")),(0,a.kt)("h4",{id:"outlinemode---custom"},(0,a.kt)("em",{parentName:"h4"},"OutlineMode")," - ",(0,a.kt)("inlineCode",{parentName:"h4"},"Custom")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Custom")," mode is not yet implemented."),(0,a.kt)("h2",{id:"doors"},"Doors"),(0,a.kt)("p",null,"Right now, the best place to learn about doors is the ",(0,a.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/3d/examples/basics"},"Basics")," tutorial which goes through the recommended setup."),(0,a.kt)("h3",{id:"door-sockets"},"Door sockets"),(0,a.kt)("p",null,"By default, when the generator computes how can two room templates be connected, it looks for doors with the same length. If you want to have more control over this process, you can use ",(0,a.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/3d/guides/door-sockets"},"Door sockets"),"."),(0,a.kt)("h3",{id:"door-directions"},"Door directions"),(0,a.kt)("p",null,"By default, all doors are undirected, meaning that they can be used both as an entrance or as an exit. It is also possible to configure doors as entrance-only or exit-only. When combined with directed level graphs, it gives you more control over generated levels. See the ",(0,a.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/3d/guides/directed-level-graphs"},"Directed level graphs")," guide for more information and examples."),(0,a.kt)("h2",{id:"repeat-mode"},"Repeat mode"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"RoomTemplateSettings")," component has a field called ",(0,a.kt)("em",{parentName:"p"},"Repeat Mode")," that is initially set to ",(0,a.kt)("em",{parentName:"p"},"Allow Repeat"),". Using this field, you can tell the algorithm whether the room template can be used more than once in generated levels. There are the following possibilities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Allow repeat")," - The room template may repeat in generated levels."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"No immediate")," - Neighbors of the room template must be different."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"No repeat")," - The room template can be used at most once.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Instead of setting the ",(0,a.kt)("em",{parentName:"p"},"Repeat mode")," on a per room template basis, you can use global override which is configured directly in the dungeon generator.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," If you provide too few room templates, they may repeat in generated levels even if you choose the ",(0,a.kt)("strong",{parentName:"p"},"No immediate")," or ",(0,a.kt)("strong",{parentName:"p"},"No repeat")," options. To make sure that the repeat mode is satisfied, please provide enough room templates to choose from.")),(0,a.kt)("h2",{id:"rotation"},"Rotation"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"RoomTemplateSettings")," component has a checkbox called ",(0,a.kt)("em",{parentName:"p"},"Allow Rotation")," which is checked by default. This field controls whether a room template can be rotated in generated levels. Because the whole level is placed on a grid, only rotations which are multiples of 90 degrees are considered."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Make sure that corridor room templates have this checkbox enabled otherwise you might get timeout errors.")),(0,a.kt)("h2",{id:"corridors"},"Corridors"),(0,a.kt)("p",null,"The algorithm distinguishes two types of room templates - basic room templates and room templates for corridor rooms. In theory, you can use any room template with at least two doors to act as a corridor room template. ",(0,a.kt)("strong",{parentName:"p"},"However, to make the algorithm fast, you should follow these recommendations"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"There should be exactly two door positions."),(0,a.kt)("li",{parentName:"ol"},"The two doors should be on the opposite sides of the room template."),(0,a.kt)("li",{parentName:"ol"},"The corridor should not be too long or too wide.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Screenshots are from top-down view.")),(0,a.kt)(h,{cols:2,fixedHeight:!0,mdxType:"Gallery"},(0,a.kt)(c,{src:"3d/room_templates/corr_ok.png",caption:"Recommended - narrow straight corridor",mdxType:"Image"}),(0,a.kt)(c,{src:"3d/room_templates/corr_wide.png",caption:"OK - little too wide but should be ok",mdxType:"Image"}),(0,a.kt)(c,{src:"3d/room_templates/corr_corner.png",caption:"Not recommended - doors not on opposite sides",mdxType:"Image"}),(0,a.kt)(c,{src:"3d/room_templates/corr_door_positions.png",caption:"Not recommended - more than 2 door positions",mdxType:"Image"})))}k.isMDXComponent=!0}}]);