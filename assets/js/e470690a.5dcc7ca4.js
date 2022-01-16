"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[994],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5077:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:2,title:"Create a custom post type"},s="Create a custom post type",c={unversionedId:"wp-features/create-post-type",id:"wp-features/create-post-type",title:"Create a custom post type",description:"You can create a post type using registerposttype function.",source:"@site/docs/wp-features/create-post-type.md",sourceDirName:"wp-features",slug:"/wp-features/create-post-type",permalink:"/simply-documentation/wp-features/create-post-type",editUrl:"https://github.com/Amorfx/simply-documentation/tree/main/documentation/docs/wp-features/create-post-type.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Create a custom post type"},sidebar:"tutorialSidebar",previous:{title:"Create a Hook",permalink:"/simply-documentation/wp-features/create-hook"},next:{title:"Create a custom taxonomy",permalink:"/simply-documentation/wp-features/create-taxonomy"}},l=[{value:"Using translation method in Yaml files",id:"using-translation-method-in-yaml-files",children:[],level:2},{value:"Using CLI",id:"using-cli",children:[],level:2}],u={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-custom-post-type"},"Create a custom post type"),(0,o.kt)("p",null,"You can create a post type using ",(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/register_post_type/"},(0,o.kt)("inlineCode",{parentName:"a"},"register_post_type"))," function.\nSimply also allows you to directly configure your post types in the config folder like this :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title='config/post-types/project.yaml'",title:"'config/post-types/project.yaml'"},"post_type:\n  project:\n    public: true\n    labels:\n      name: Projets\n      singular_name: Projet\n    supports:\n      - thumbnail\n      - editor\n      - title\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All the available parameters are the same of ",(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/register_post_type/"},(0,o.kt)("inlineCode",{parentName:"a"},"register_post_type"))," function."))),(0,o.kt)("h2",{id:"using-translation-method-in-yaml-files"},"Using translation method in Yaml files"),(0,o.kt)("p",null,"You can translate using ",(0,o.kt)("inlineCode",{parentName:"p"},"trans(words, domain)"),", Simply translate it to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/__/"},(0,o.kt)("inlineCode",{parentName:"a"},"__()"))," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title='config/post-types/project.yaml'",title:"'config/post-types/project.yaml'"},"post_type:\n  project:\n    public: true\n    labels:\n      name: trans(Projects, mydomain)\n      singular_name: trans(Project, mydomain)\n    supports:\n      - thumbnail\n      - editor\n      - title\n")),(0,o.kt)("h2",{id:"using-cli"},"Using CLI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"php bin/console simply:make:post-type\n")),(0,o.kt)("p",null,"Respond to all the question and the yaml will be created."))}m.isMDXComponent=!0}}]);