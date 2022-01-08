"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[790],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3960:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],p={sidebar_position:2},s="Create your custom models",l={unversionedId:"models/create-model",id:"models/create-model",title:"Create your custom models",description:"Each models has a constructor with the object it decorates. WPPost for PostTypeObject, WPTerm for TermObject etc.",source:"@site/docs/models/create-model.md",sourceDirName:"models",slug:"/models/create-model",permalink:"/simply-documentation/docs/models/create-model",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/models/create-model.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/simply-documentation/docs/models/intro"},next:{title:"Register your model into Simply",permalink:"/simply-documentation/docs/models/register-models"}},c=[{value:"For Post types",id:"for-post-types",children:[{value:"Post",id:"post",children:[],level:3},{value:"Custom Post types",id:"custom-post-types",children:[],level:3}],level:2},{value:"For Taxonomies",id:"for-taxonomies",children:[{value:"Category",id:"category",children:[],level:3},{value:"Tag",id:"tag",children:[],level:3}],level:2},{value:"For Users",id:"for-users",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-your-custom-models"},"Create your custom models"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Each models has a constructor with the object it decorates. ",(0,a.kt)("inlineCode",{parentName:"p"},"WP_Post")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"PostTypeObject"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WP_Term")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"TermObject")," etc."))),(0,a.kt)("h2",{id:"for-post-types"},"For Post types"),(0,a.kt)("h3",{id:"post"},"Post"),(0,a.kt)("p",null,"Simply provides you with a basic model for type ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"PostTypeObject"),". It provides some basic function like ",(0,a.kt)("inlineCode",{parentName:"p"},"getTitle"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"getPermalink")," etc. But you can extends or replace this model with your model if you want. Read ",(0,a.kt)("a",{parentName:"p",href:"#register-your-model-into-simply"},"how register your model")," to know how to do this."),(0,a.kt)("h3",{id:"custom-post-types"},"Custom Post types"),(0,a.kt)("p",null,"After ",(0,a.kt)("a",{parentName:"p",href:"/simply-documentation/docs/wp-features/create-post-type"},"creating your custom post type")," you will have to create a corresponding model.\nLet's take the example again with project post type.\nMy project post type has multiple metas : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Project subtitle,"),(0,a.kt)("li",{parentName:"ul"},"Grid position in my portfolio"),(0,a.kt)("li",{parentName:"ul"},"A grid size")),(0,a.kt)("p",null,"In basic WordPress development you have to write this code into your theme (multiple times or create a dedicated function) :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nglobal $post;\n\nif ($post->post_type === 'project') {\n    $size = get_post_meta($post->ID, 'grid_size', true); // or get_field if you use ACF plugin\n}\n")),(0,a.kt)("p",null,"But in your project we want a Project model to do this : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nglobal $post;\n\n$project = new Project($post);\n$size = $project->getGridSize();\n")),(0,a.kt)("p",null,"Let's create our Model : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='src/Model/Project.php'",title:"'src/Model/Project.php'"},"<?php\n\nclass Project {\n    private WP_Post $post;\n    \n    public function __construct(WP_Post $post) {\n        $this->post = $post;\n    }\n    \n    public function getGridSize() {\n        return get_post_meta($this->post->ID, 'grid_size', true);\n    }\n}\n")),(0,a.kt)("p",null,"This is a simple class that decorate WP_Post. But here Simply can not reconize which post type the model is related. To do that you have to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelInterface")," with the function ",(0,a.kt)("inlineCode",{parentName:"p"},"getType")," which will return the linked post type."),(0,a.kt)("p",null,"So let's update our class : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:"{16-18} title='src/Model/Project.php'","{16-18}":!0,title:"'src/Model/Project.php'"},"<?php\n\nuse Simply\\Core\\Contract\\ModelInterface;\n\nclass Project implements ModelInterface {\n    private WP_Post $post;\n    \n    public function __construct(WP_Post $post) {\n        $this->post = $post;\n    }\n    \n    public function getGridSize() {\n        return get_post_meta($this->post->ID, 'grid_size', true);\n    }\n    \n    public static function getType() {\n        return 'project';\n    }\n}\n")),(0,a.kt)("p",null,"If you want to have basic function like ",(0,a.kt)("inlineCode",{parentName:"p"},"getTitle")," etc. let's extends ",(0,a.kt)("inlineCode",{parentName:"p"},"PostTypeObject")," : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:"{5} title='src/Model/Project.php'","{5}":!0,title:"'src/Model/Project.php'"},"<?php\n\nuse Simply\\Core\\Model\\PostTypeObject;\n\nclass Project extends PostTypeObject {\n    private WP_Post $post;\n    \n    public function __construct(WP_Post $post) {\n        $this->post = $post;\n    }\n    \n    public function getGridSize() {\n        return get_post_meta($this->post->ID, 'grid_size', true);\n    }\n    \n    public static function getType() {\n        return 'project';\n    }\n}\n")),(0,a.kt)("h2",{id:"for-taxonomies"},"For Taxonomies"),(0,a.kt)("p",null,"After ",(0,a.kt)("a",{parentName:"p",href:"/simply-documentation/docs/wp-features/create-taxonomy"},"creating your custom taxonomy")," its the same thing like Post type but you have to extends the abstract class ",(0,a.kt)("inlineCode",{parentName:"p"},"TermObject")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='src/Model/ProjectTag.php'",title:"'src/Model/ProjectTag.php'"},"<?php\n\nuse Simply\\Core\\Model\\TermObject;\n\nclass ProjectTag extends TermObject {\n    public static function getType() {\n        return 'project_tag';\n    }\n}\n")),(0,a.kt)("h3",{id:"category"},"Category"),(0,a.kt)("p",null,"Simply provides you with a basic model for ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"CategoryObject"),"."),(0,a.kt)("h3",{id:"tag"},"Tag"),(0,a.kt)("p",null,"Simply provides you with a basic model for ",(0,a.kt)("inlineCode",{parentName:"p"},"tag")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"TagObject"),"."),(0,a.kt)("h2",{id:"for-users"},"For Users"),(0,a.kt)("p",null,"Coming soon. But the basic model registered is ",(0,a.kt)("inlineCode",{parentName:"p"},"UserObject"),";"))}d.isMDXComponent=!0}}]);