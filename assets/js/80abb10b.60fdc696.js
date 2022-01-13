"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[879],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,d=p["".concat(c,".").concat(f)]||p[f]||l[f]||a;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6510:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={sidebar_position:4,title:"Create a custom navigation menu"},c="Create a custom navigation menu",s={unversionedId:"wp-features/create-nav-menu",id:"wp-features/create-nav-menu",title:"Create a custom navigation menu",description:"You can create a taxonomy using registernavmenu function.",source:"@site/docs/wp-features/create-nav-menu.md",sourceDirName:"wp-features",slug:"/wp-features/create-nav-menu",permalink:"/simply-documentation/docs/wp-features/create-nav-menu",editUrl:"https://github.com/Amorfx/simply-documentation/tree/main/documentation/docs/wp-features/create-nav-menu.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Create a custom navigation menu"},sidebar:"tutorialSidebar",previous:{title:"Create a custom taxonomy",permalink:"/simply-documentation/docs/wp-features/create-taxonomy"},next:{title:"Introduction",permalink:"/simply-documentation/docs/models/intro"}},m=[{value:"Using CLI",id:"using-cli",children:[],level:2}],l={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-custom-navigation-menu"},"Create a custom navigation menu"),(0,a.kt)("p",null,"You can create a taxonomy using ",(0,a.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/register_nav_menu/"},(0,a.kt)("inlineCode",{parentName:"a"},"register_nav_menu"))," function.\nSimply also allows you to directly configure your menu in the config folder like this :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title='config/nav-menu/menus.yaml'",title:"'config/nav-menu/menus.yaml'"},"nav_menu:\n  header: Header menu\n")),(0,a.kt)("h2",{id:"using-cli"},"Using CLI"),(0,a.kt)("p",null,"Coming soon."))}p.isMDXComponent=!0}}]);