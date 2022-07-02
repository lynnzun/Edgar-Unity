"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3781],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return c}});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(o),c=a,h=m["".concat(i,".").concat(c)]||m[c]||u[c]||n;return o?r.createElement(h,l(l({ref:t},p),{},{components:o})):r.createElement(h,l({ref:t},p))}));function c(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<n;d++)l[d]=o[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},58215:function(e,t,o){var r=o(67294);t.Z=function(e){var t=e.children,o=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:o,className:a},t)}},9877:function(e,t,o){o.d(t,{Z:function(){return p}});var r=o(87462),a=o(67294),n=o(72389),l=o(29548),s=o(86010),i="tabItem_LplD";function d(e){var t,o,n,d=e.lazy,p=e.block,u=e.defaultValue,m=e.values,c=e.groupId,h=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===u?u:null!=(t=null!=u?u:null==(o=g.find((function(e){return e.props.default})))?void 0:o.props.value)?t:null==(n=g[0])?void 0:n.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.UB)(),b=v.tabGroupChoices,x=v.setTabGroupChoices,w=(0,a.useState)(y),T=w[0],I=w[1],N=[],_=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var C=b[c];null!=C&&C!==T&&f.some((function(e){return e.value===C}))&&I(C)}var E=function(e){var t=e.currentTarget,o=N.indexOf(t),r=f[o].value;r!==T&&(_(t),I(r),null!=c&&x(c,r))},O=function(e){var t,o=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;o=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;o=N[a]||N[N.length-1]}null==(t=o)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},h)},f.map((function(e){var t=e.value,o=e.label,n=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:E,onClick:E},n,{className:(0,s.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":T===t})}),null!=o?o:t)}))),d?(0,a.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,n.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},28712:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return v}});var r=o(87462),a=o(63366),n=(o(67294),o(3905)),l=o(9877),s=o(58215),i=["components"],d={title:"Dungeon 1"},p=void 0,u={unversionedId:"3d/examples/dungeon-1",id:"3d/examples/dungeon-1",title:"Dungeon 1",description:"The goal of this tutorial is to show you a more realistic setup of the 3D generator. You can also see a GIF of this setup in this tweet.",source:"@site/docs/3d/examples/dungeon-1.md",sourceDirName:"3d/examples",slug:"/3d/examples/dungeon-1",permalink:"/Edgar-Unity/docs/next/3d/examples/dungeon-1",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/docs/3d/examples/dungeon-1.md",tags:[],version:"current",frontMatter:{title:"Dungeon 1"},sidebar:"3d",previous:{title:"Basics (step-by-step tutorial)",permalink:"/Edgar-Unity/docs/next/3d/examples/basics"},next:{title:"Different room/door elevations",permalink:"/Edgar-Unity/docs/next/3d/guides/different-elevations"}},m=[{value:"Simple example",id:"simple-example",children:[{value:"Models",id:"models",children:[],level:3},{value:"Blocks",id:"blocks",children:[],level:3},{value:"Generator settings",id:"generator-settings",children:[],level:3},{value:"Room template",id:"room-template",children:[],level:3},{value:"Door prefab",id:"door-prefab",children:[],level:3},{value:"Corridor",id:"corridor",children:[],level:3},{value:"Level graph",id:"level-graph",children:[],level:3},{value:"Results",id:"results",children:[],level:3}],level:2},{value:"Real-life example",id:"real-life-example",children:[{value:"Additional room templates",id:"additional-room-templates",children:[],level:3},{value:"Custom input setup",id:"custom-input-setup",children:[],level:3},{value:"Level graph",id:"level-graph-1",children:[],level:3},{value:"Results",id:"results-1",children:[],level:3}],level:2},{value:"Extra stuff",id:"extra-stuff",children:[{value:"Disable corridors between some rooms",id:"disable-corridors-between-some-rooms",children:[{value:"Results",id:"results-2",children:[],level:4}],level:3},{value:"Skyrim-like shortcut",id:"skyrim-like-shortcut",children:[{value:"Modified Boss and Boss entrance room templates",id:"modified-boss-and-boss-entrance-room-templates",children:[],level:4},{value:"Intermediate results",id:"intermediate-results",children:[],level:4},{value:"Better performance and cave room templates",id:"better-performance-and-cave-room-templates",children:[],level:4},{value:"Level graph",id:"level-graph-2",children:[],level:4},{value:"Results",id:"results-3",children:[],level:4}],level:3}],level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)}},h=c("Gallery"),g=c("Image"),f=c("Path"),k=c("ExternalCode"),y={toc:m};function v(e){var t=e.components,o=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The goal of this tutorial is to show you a more realistic setup of the 3D generator. You can also see a GIF of this setup in ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/OndrejNepozitek/status/1507377003200233472"},"this tweet"),"."),(0,n.kt)(h,{cols:2,fixedHeight:!0,mdxType:"Gallery"},(0,n.kt)(g,{src:"3d/examples/dungeon1/result_2_4.png",caption:"Example result",mdxType:"Image"}),(0,n.kt)(g,{src:"3d/examples/dungeon1/result_5_4.png",caption:"Example result",mdxType:"Image"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",(0,n.kt)(f,{path:"3de:Dungeon1",mdxType:"Path"}),".")),(0,n.kt)("h2",{id:"simple-example"},"Simple example"),(0,n.kt)("h3",{id:"models"},"Models"),(0,n.kt)("p",null,"For this tutorial, I am going to use the ",(0,n.kt)("a",{parentName:"p",href:"https://quaternius.com/packs/modulardungeon.html"},"Modular Dungeons Pack")," by ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/quaternius"},"@Quaternius"),". Be sure to check them out if you like the models."),(0,n.kt)(g,{src:"3d/examples/dungeon1/models.png",mdxType:"Image"}),(0,n.kt)("h3",{id:"blocks"},"Blocks"),(0,n.kt)("p",null,"The first step that I always do is I create prefabs for the base building blocks - floors and walls. The main goal is to make sure that they interact well together and that they can be snapped to the grid easily."),(0,n.kt)(g,{src:"3d/examples/dungeon1/blocks.png",caption:"Floor block, wall block, and how they interact together",mdxType:"Image"}),(0,n.kt)("h3",{id:"generator-settings"},"Generator settings"),(0,n.kt)("p",null,"The next step is to create an instance of the ",(0,n.kt)("inlineCode",{parentName:"p"},"GeneratorSettings")," scriptable object to configure the size of the grid that will be used for the level. The sizes of the floor tile model is ",(0,n.kt)("inlineCode",{parentName:"p"},"2x2")," units, therefore, I am going to configure the grid to be ",(0,n.kt)("inlineCode",{parentName:"p"},"2x2")," units wide."),(0,n.kt)(g,{src:"3d/examples/dungeon1/generator_settings.png",caption:"Setup of the Generator settings object",mdxType:"Image"}),(0,n.kt)("h3",{id:"room-template"},"Room template"),(0,n.kt)("p",null,"The next step is to create the first room template. I usually start with something simple to make sure that all the blocks work together."),(0,n.kt)(g,{src:"3d/examples/dungeon1/room_2_no_doors.png",caption:"Basic room template",mdxType:"Image"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," The yellow outline gizmo is shown below the room template because the floor blocks are positioned with ",(0,n.kt)("inlineCode",{parentName:"p"},"y < 0"),", thus being part of another layer of tiles.")),(0,n.kt)("p",null,"As always, make sure to leave enough holes for doors to be added in the next step."),(0,n.kt)("h3",{id:"door-prefab"},"Door prefab"),(0,n.kt)("p",null,"The next step is to create a prefab for our doors. I am going to use the Arch model that you can see below."),(0,n.kt)(g,{src:"3d/examples/dungeon1/arch.png",caption:"The Arch model that will be used for doors",mdxType:"Image"}),(0,n.kt)("p",null,"The Arch is 4 units longs which means that our door should be 2 tiles wide. Create a new door prefab ",(0,n.kt)(f,{path:"3d:Door",par:!0,mdxType:"Path"}),", assign the generator settings, set the width to 2 tiles. Next, create a child game object, call it ",(0,n.kt)("em",{parentName:"p"},"Connector")," and place the arch inside it. Align the arch properly. And finally, assign the ",(0,n.kt)("em",{parentName:"p"},"Connector")," object to the ",(0,n.kt)("em",{parentName:"p"},"Connectors")," section of the door inspector. The result should look like this: (check the ",(0,n.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/next/3d/examples/basics"},"Basics")," example if this part is too fast for you)"),(0,n.kt)(g,{src:"3d/examples/dungeon1/door_connector.png",caption:"Door setup with the arch connector",mdxType:"Image"}),(0,n.kt)("p",null,"It is important to align the connector properly. This is what works for this setup:"),(0,n.kt)(h,{cols:2,fixedHeight:!0,mdxType:"Gallery"},(0,n.kt)(g,{src:"3d/examples/dungeon1/door_side.png",caption:"Alignment side view",mdxType:"Image"}),(0,n.kt)(g,{src:"3d/examples/dungeon1/door_top.png",caption:"Alignment top view",mdxType:"Image"})),(0,n.kt)("p",null,"Next, it is time to add a door blocker. I am going to set up the wall block to be used when a door opening was not chosen by the generator. Make sure to align the blocker inside the green door gizmo."),(0,n.kt)(g,{src:"3d/examples/dungeon1/door_blocker.png",caption:"Complete door setup",mdxType:"Image"}),(0,n.kt)("p",null,"Next, place the door prefab inside all the holes that we left in the room template. Make sure to adjust the ",(0,n.kt)("inlineCode",{parentName:"p"},"Repeat")," parameter so that each door covers the whole hole inside the wall."),(0,n.kt)(g,{src:"3d/examples/dungeon1/room_2.png",caption:"Room template with doors",mdxType:"Image"}),(0,n.kt)("h3",{id:"corridor"},"Corridor"),(0,n.kt)("p",null,"The next step is to create a corridor. Now that we have the door prefab prepared, it is just a matter of building/designing the actual corridor and placing the doors."),(0,n.kt)(g,{src:"3d/examples/dungeon1/corridor_1.png",caption:"Basic corridor room template",mdxType:"Image"}),(0,n.kt)("h3",{id:"level-graph"},"Level graph"),(0,n.kt)("p",null,"The last step in this basic setup is to create a simple level graph and use the two room templates that we created. As I mentioned previously, it is a good idea to start simple to make sure that the base setup works, any only add more complexity later."),(0,n.kt)(g,{src:"3d/examples/dungeon1/level_graph.png",caption:"Very simple level graph",mdxType:"Image"}),(0,n.kt)("h3",{id:"results"},"Results"),(0,n.kt)("p",null,"We are now ready to generate our first levels. The resulting levels are relatively simple, but there is already happening quite a lot under the hood. We can see that the door connectors are aligned properly, unused door positions are filled with door blockers, and the generator should be quite fast because the level is really simple."),(0,n.kt)(g,{src:"3d/examples/dungeon1/result.png",caption:"Generated level",mdxType:"Image"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," I know that the shadows and lightning do not make sense if it is an underground dungeon, but I think it is good enough for the purposes of this tutorial.")),(0,n.kt)("h2",{id:"real-life-example"},"Real-life example"),(0,n.kt)("p",null,"For the next part of this tutorial, I want to make the levels more realistic by adding additional room template and improving the level graph structure. "),(0,n.kt)("h3",{id:"additional-room-templates"},"Additional room templates"),(0,n.kt)("p",null,"Below are some of the room templates that I created for this part of the tutorial. Note how I add door openings to all places where it makes sense, because I need the generator perform really well as I plan to increase the complexity of the level in the ",(0,n.kt)("a",{parentName:"p",href:"#extra-stuff"},"Extra stuff")," section."),(0,n.kt)(h,{cols:2,fixedHeight:!0,mdxType:"Gallery"},(0,n.kt)(g,{src:"3d/examples/dungeon1/bedroom.png",caption:"Bedroom",mdxType:"Image"}),(0,n.kt)(g,{src:"3d/examples/dungeon1/prison.png",caption:"Prison",mdxType:"Image"}),(0,n.kt)(g,{src:"3d/examples/dungeon1/hub.png",caption:"Hub",mdxType:"Image"}),(0,n.kt)(g,{src:"3d/examples/dungeon1/treasure.png",caption:"Treasure",mdxType:"Image"})),(0,n.kt)("h3",{id:"custom-input-setup"},"Custom input setup"),(0,n.kt)("p",null,"When working on any non-trivial level with Edgar, I recommend using ",(0,n.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/next/basics/level-graphs#pro-custom-rooms-and-connections"},"Custom rooms and connection")," together with ",(0,n.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/next/generators/custom-input"},"Custom input setup"),". By using these 2 features, you get much more control of the whole generator setup. For example, when working with a larger number of room templates, it is a good idea to not assign room templates to rooms directly, but rather assign a type to each room and control room templates based on that type. By doing so, you can introduce more variation to individual room types without having to configure rooms individually."),(0,n.kt)("p",null,"The first step is creating classes for the custom rooms and connection. You can see the code below. Once you have these classes ready, you have to open your level graph and configure it so that it uses your custom implementation. If you already have some rooms in your level graph, it is a good idea to delete all of them as they were created with the default rooms and connections implementation. "),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"room",label:"Custom room",default:!0,mdxType:"TabItem"},(0,n.kt)(k,{name:"3d_dungeon1_room",mdxType:"ExternalCode"})),(0,n.kt)(s.Z,{value:"connection",label:"Custom connection",default:!0,mdxType:"TabItem"},(0,n.kt)(k,{name:"3d_dungeon1_connection",mdxType:"ExternalCode"}))),(0,n.kt)("p",null,"Once your custom rooms and connections are ready, you should be able to pick a room type when you configure a room in the level graph editor window."),(0,n.kt)(g,{src:"3d/examples/dungeon1/room_type.png",caption:"Room type dropdown when configuring a room in the level graph editor",mdxType:"Image"}),(0,n.kt)("p",null,"Next, we need the logic that decides which set of room templates is used for a given room type. I use a simple switch statement here, but you can use anything you want."),(0,n.kt)(k,{name:"3d_dungeon1_roomTemplates",mdxType:"ExternalCode"}),(0,n.kt)("p",null,"The last step is to put everything together and implement a custom input setup logic by creating a class that inherits from ",(0,n.kt)("inlineCode",{parentName:"p"},"DungeonGeneratorInputBaseGrid3D"),". The implementation below might look intimidating, but there is not really that much going on. The main idea is that you:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"go through all the rooms in the level graph,"),(0,n.kt)("li",{parentName:"ul"},"cast each room to our custom room implementation type,"),(0,n.kt)("li",{parentName:"ul"},"compute room templates for a given room based on its type,"),(0,n.kt)("li",{parentName:"ul"},"and add the room to the level description which is later given to the dungeon generator.")),(0,n.kt)("p",null,"Something similar also happens with the corridor rooms and room templates."),(0,n.kt)(k,{name:"3d_dungeon1_inputSetup",mdxType:"ExternalCode"}),(0,n.kt)("p",null,"When the implementation is ready, you have to create an instance of the input setup scriptable object. Then, inside the dungeon generator component, switch input type to ",(0,n.kt)("em",{parentName:"p"},"Custom Input")," and assign the scriptable object there. The result should look like this:"),(0,n.kt)(g,{src:"3d/examples/dungeon1/input_setup.png",caption:"Custom input setup inside the dungeon generator component",mdxType:"Image"}),(0,n.kt)("h3",{id:"level-graph-1"},"Level graph"),(0,n.kt)("p",null,"Now, we can come up with a more realistic level structure. The main idea is as follows: you enter the dungeon, have to make your way around a trap, then you arrive at a large hub with multiple exits. Two of the exists lead to social rooms like bedroom, storage or kitchen. Another exit leads to a branch which contains two rooms like treasure or prison. The last exit leads to the entrance of the boss room and then to the boss room itself, where you are going to face the bandit boss."),(0,n.kt)(g,{src:"3d/examples/dungeon1/level_graph_2.png",caption:"More realistic level graph",mdxType:"Image"}),(0,n.kt)("h3",{id:"results-1"},"Results"),(0,n.kt)("p",null,"The generated levels are starting to look quite nice."),(0,n.kt)(g,{src:"3d/examples/dungeon1/result_2_2.png",caption:"Generated level",mdxType:"Image"}),(0,n.kt)(g,{src:"3d/examples/dungeon1/result_2_3.png",caption:"Generated level",mdxType:"Image"}),(0,n.kt)("h2",{id:"extra-stuff"},"Extra stuff"),(0,n.kt)("p",null,"For this last section, I want to showcase some of the advanced stuff that you can do with the generator:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"disable corridors between some rooms"),(0,n.kt)("li",{parentName:"ol"},"add a Skyrim-like shortcut from the boss room back to the entrance")),(0,n.kt)("h3",{id:"disable-corridors-between-some-rooms"},"Disable corridors between some rooms"),(0,n.kt)("p",null,"The default behaviour is that you either have corridors between all rooms or not have corridors at all. But if you are using custom input setup, there is no one stopping you from having corridors between some rooms and direct connections between other rooms."),(0,n.kt)("p",null,"Any why would you want that? For example, the boss entrance room is already something like a corridor, so why have another corridor between it and the boss room? Another example might be the area of social rooms in the level graph. I decided that I would like them better if they were closer to one another."),(0,n.kt)("p",null,"The setup is relatively simple because most of it was already done in the custom connection and custom input setup. In the custom connection, you just have to make sure that there is a checkbox that lets use choose if a connection should use a corridor or not."),(0,n.kt)(k,{name:"3d_dungeon1_connection",mdxType:"ExternalCode"}),(0,n.kt)("p",null,"And in the input setup, we need a condition that either adds a corridor or a direct connection."),(0,n.kt)(k,{name:"3d_dungeon1_inputSetupCorridors",mdxType:"ExternalCode"}),(0,n.kt)("h4",{id:"results-2"},"Results"),(0,n.kt)("p",null,"In the generated level below, you can see that there are no corridors between some neighbouring rooms."),(0,n.kt)(g,{src:"3d/examples/dungeon1/result_3_1.png",caption:"Generated level",mdxType:"Image"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," When generating levels without corridors, you must make sure that it is possible to connect the rooms without the use of corridors.")),(0,n.kt)("h3",{id:"skyrim-like-shortcut"},"Skyrim-like shortcut"),(0,n.kt)("p",null,"The next thing I wanted to experiment with was adding a Skyrim-like shortcut that would lead from the boss room back to the entrance."),(0,n.kt)("h4",{id:"modified-boss-and-boss-entrance-room-templates"},"Modified Boss and Boss entrance room templates"),(0,n.kt)("p",null,"The first step is to make sure that we can add additional exits to the Boss room while still making sure that the entrance uses the central door. To do this, I decided to create a special ",(0,n.kt)("em",{parentName:"p"},"Boss")," door socket (orange colour in the screenshot below) so that the rooms connect properly. "),(0,n.kt)(h,{cols:2,fixedHeight:!0,mdxType:"Gallery"},(0,n.kt)(g,{src:"3d/examples/dungeon1/boss.png",caption:"Boss room with special socket",mdxType:"Image"}),(0,n.kt)(g,{src:"3d/examples/dungeon1/bossentrance.png",caption:"Boss entrance room with special socket",mdxType:"Image"})),(0,n.kt)("h4",{id:"intermediate-results"},"Intermediate results"),(0,n.kt)("p",null,"Below we can see some intermediate results using this new setup with the shortcut from the Boss room. ",(0,n.kt)("em",{parentName:"p"},"Spoiler alert"),": this setup does not perform very well because it is quite hard for the generator to find a suitable layout for the loop/cycle that was formed by adding the shortcut path. "),(0,n.kt)(h,{cols:2,fixedHeight:!0,mdxType:"Gallery"},(0,n.kt)(g,{src:"3d/examples/dungeon1/level_graph_4.png",caption:"Level graph with a new path from Boss to Entrance",mdxType:"Image"}),(0,n.kt)(g,{src:"3d/examples/dungeon1/result_4_1.png",caption:"Generated level",mdxType:"Image"})),(0,n.kt)("h4",{id:"better-performance-and-cave-room-templates"},"Better performance and cave room templates"),(0,n.kt)("p",null,"The intermediate results have 2 problems:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the generator sometimes timeouts"),(0,n.kt)("li",{parentName:"ul"},"I want the shortcut rooms to be in a different style than the ordinary rooms")),(0,n.kt)("p",null,"The reason why the performance is not the best is that there is not much freedom in the loop that we are trying to lay out. The loop always starts with a small trap room, then a large hub room, then boss entrance, boss room and finally the two shortcut rooms. Aside from the shortcut rooms, all the other rooms have a fixed shape - there is only a single room template for each one. One approach to improve the performance would be to add more room templates with different shapes so that the algorithm has more options. But in this tutorial, I want to show you a different approach - optimizing the shortcut rooms in order to improve the performance."),(0,n.kt)("p",null,"First, I created a couple of darker cave-like corridors. They are just like normal corridor, but with a single difference - they use a different door socket so that they can be only connected to other cave-like rooms. Because the corridor use different walls, you also have to create a new door prefab for them."),(0,n.kt)(h,{cols:2,fixedHeight:!0,mdxType:"Gallery"},(0,n.kt)(g,{src:"3d/examples/dungeon1/dcorridor_1.png",caption:"Cave corridor room template",mdxType:"Image"}),(0,n.kt)(g,{src:"3d/examples/dungeon1/dcorridor_2.png",caption:"Cave corridor room template",mdxType:"Image"})),(0,n.kt)("p",null,"Next, I created cave-like room templates for normal rooms. These room template might look quite weird at first as they do not have any walls - they have doors all over the outline. There are two reasons for that:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"higher number of possible door positions improves the performance of the generator"),(0,n.kt)("li",{parentName:"ol"},"it fits the style of a more organic cave as it will be harder to distinguish room borders")),(0,n.kt)("p",null,"This approach works because all the unused door positions will be filled by door blockers."),(0,n.kt)(h,{cols:2,fixedHeight:!0,mdxType:"Gallery"},(0,n.kt)(g,{src:"3d/examples/dungeon1/croom_1.png",caption:"Cave room template",mdxType:"Image"}),(0,n.kt)(g,{src:"3d/examples/dungeon1/croom_2.png",caption:"Cave room template",mdxType:"Image"})),(0,n.kt)("p",null,"The last room template that we need is a corridor that can connect a normal room to a cave room:"),(0,n.kt)(g,{src:"3d/examples/dungeon1/corridortransition.png",caption:"Transition corridor from a normal room to a cave room",mdxType:"Image"}),(0,n.kt)("h4",{id:"level-graph-2"},"Level graph"),(0,n.kt)("p",null,"Next, the level graph has to be changed so that the new cave rooms are used. All the corridors can be put into a single pool of corridor room templates because the door sockets will make sure that the correct corridor is always used."),(0,n.kt)(g,{src:"3d/examples/dungeon1/level_graph_5.png",caption:"Final level graph containing 2 cave rooms",mdxType:"Image"}),(0,n.kt)("h4",{id:"results-3"},"Results"),(0,n.kt)("p",null,"You can see some final results below. The performance is now quite good, the generator is usually able to produce a level in under a second."),(0,n.kt)(g,{src:"3d/examples/dungeon1/result_5_1.png",caption:"Generated level",mdxType:"Image"}),(0,n.kt)(g,{src:"3d/examples/dungeon1/result_5_2.png",caption:"Generated level",mdxType:"Image"}))}v.isMDXComponent=!0}}]);