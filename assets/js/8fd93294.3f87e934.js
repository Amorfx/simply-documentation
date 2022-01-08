"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[803],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,m=d["".concat(u,".").concat(g)]||d[g]||s[g]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7321:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:3},u="Create your first plugin",c={unversionedId:"getting-started/create-plugin",id:"getting-started/create-plugin",title:"Create your first plugin",description:"A plugin created with Simply is only a WordPress plugin with some filters.",source:"@site/docs/getting-started/create-plugin.md",sourceDirName:"getting-started",slug:"/getting-started/create-plugin",permalink:"/docs/getting-started/create-plugin",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/create-plugin.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configure your WordPress",permalink:"/docs/getting-started/config-wordpress"},next:{title:"Create your first theme",permalink:"/docs/getting-started/create-theme"}},p=[{value:"Plugin Tree",id:"plugin-tree",children:[],level:2},{value:"Plugin entrypoint configuration",id:"plugin-entrypoint-configuration",children:[],level:2},{value:"Create plugin with the CLI",id:"create-plugin-with-the-cli",children:[],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-your-first-plugin"},"Create your first plugin"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A plugin created with Simply is only a WordPress plugin with some filters."))),(0,o.kt)("p",null,"You have two possibilities to create a plugin with Simply : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Register directly all the plugin to Simply and autoconfigure all files to services, hook, controller etc."),(0,o.kt)("li",{parentName:"ul"},"Register only specifics files to simply with WordPress filters")),(0,o.kt)("h2",{id:"plugin-tree"},"Plugin Tree"),(0,o.kt)("p",null,"With Simply you only must have a config directory and a src directory if you want to use the Symfony dependency injection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 your-plugin\n\u2502   \u251c\u2500\u2500 config\n\u2502   \u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 your-plugin.php\n\u2514\u2500\u2500\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config"),": add your yaml files into this folder,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src"),": add your other files for your plugin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"your-plugin.php"),": add some configuration code.")),(0,o.kt)("h2",{id:"plugin-entrypoint-configuration"},"Plugin entrypoint configuration"),(0,o.kt)("p",null,"Simply look into some directories to load configuration file for the Symfony dependency injection.\nIn ",(0,o.kt)("inlineCode",{parentName:"p"},"your-plugin.php")," you have to add some filters to add your config directory into the lists of configuration files."),(0,o.kt)("p",null,"But to automatize all the things (add class to service container, configure hooks) add only one line :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='plugins/your-plugin/your-plugin.php'",title:"'plugins/your-plugin/your-plugin.php'"},"<?php\n/*\nPlugin Name: My custom plugin\nDescription: Description of my plugin\nAuthor: John Doe\nVersion: 1.0\n*/\n\n// require your autoload here\n\nSimply::registerPlugin(__DIR__, 'MyCustomPlugin');\n")),(0,o.kt)("p",null,"It informs the framework :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"that all classes into the namespace are services by default"),(0,o.kt)("li",{parentName:"ul"},"autoconfigure hooks classes, controllers and other WordPress features that Simply can understand"),(0,o.kt)("li",{parentName:"ul"},"add config directory to the list of directories for the service container")),(0,o.kt)("h2",{id:"create-plugin-with-the-cli"},"Create plugin with the CLI"),(0,o.kt)("p",null,"In your project directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"php bin/console simply:make:plugin\n")),(0,o.kt)("p",null,"Then respond to all the questions to finalize plugin creation."))}d.isMDXComponent=!0}}]);