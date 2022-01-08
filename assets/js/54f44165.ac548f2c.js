"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[152],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},681:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={sidebar_position:1},s="Installation",u={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"Simply can be install like a WordPress plugin or via Composer. Even though simply is not really a plugin it can be installed as such.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Configure your WordPress",permalink:"/docs/getting-started/config-wordpress"}},p=[{value:"Install with the boilerplate (recommended)",id:"install-with-the-boilerplate-recommended",children:[{value:"Tree of your main project folder",id:"tree-of-your-main-project-folder",children:[],level:3}],level:2},{value:"You have a WordPress environment already installed",id:"you-have-a-wordpress-environment-already-installed",children:[],level:2},{value:"Next",id:"next",children:[],level:2}],c={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Simply can be install like a WordPress plugin or via Composer. Even though simply is not really a plugin it can be installed as such.\nOr if you don't install WordPress at all you can install it with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Amorfx/simply"},"the boilerplate"),"."),(0,a.kt)("p",null,"The only tool you required is Composer."),(0,a.kt)("h2",{id:"install-with-the-boilerplate-recommended"},"Install with the boilerplate (recommended)"),(0,a.kt)("p",null,"Only one command is required to install a complete WordPress."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"composer create-project clementdecou/simply your-project\n")),(0,a.kt)("p",null,"The boilerplate does not just allow you to install a WordPress and the framework but brings some additional features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The use of .env files"),(0,a.kt)("li",{parentName:"ul"},"Management of WordPress, plugins and theme via Composer"),(0,a.kt)("li",{parentName:"ul"},"Add CLI to create some WordPress features (Hooks, plugins, themes...)")),(0,a.kt)("h3",{id:"tree-of-your-main-project-folder"},"Tree of your main project folder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 your-project\n\u2502   \u251c\u2500\u2500 vendor\n\u2502   \u251c\u2500\u2500 wordpress\n\u2502   \u251c\u2500\u2500 composer.json\n\u2502   \u251c\u2500\u2500 composer.lock\n\u2502   \u2514\u2500\u2500 README.md\n\u2514\u2500\u2500\n")),(0,a.kt)("h2",{id:"you-have-a-wordpress-environment-already-installed"},"You have a WordPress environment already installed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Amorfx/simply-framework/releases"},"Download the latest release")," of the framework"),(0,a.kt)("li",{parentName:"ul"},'Unzip into your mu-plugins directory and rename the directory to "simply-framework"'),(0,a.kt)("li",{parentName:"ul"},"To load the framework create a PHP file at the root of mu-plugins directory")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:"title='wp-content/mu-plugins/load.php'",title:"'wp-content/mu-plugins/load.php'"},"<?php\n/*\n * Plugin Name: Load Simply framework\n */\nrequire __DIR__ . '/simply-framework/simply-framework.php';\n")),(0,a.kt)("p",null,"Your mu-plugins folder should have a structure like this : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 mu-plugins\n\u2502   \u251c\u2500\u2500 simply-framework\n\u2502   \u2514\u2500\u2500 load.php\n\u2514\u2500\u2500\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go into the simply-framework directory and exec ",(0,a.kt)("inlineCode",{parentName:"li"},"composer install")),(0,a.kt)("li",{parentName:"ul"},"That's it \ud83c\udf8a")),(0,a.kt)("h2",{id:"next"},"Next"),(0,a.kt)("p",null,"Now you need to ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/config-wordpress"},"configure your WordPress"),"."))}d.isMDXComponent=!0}}]);