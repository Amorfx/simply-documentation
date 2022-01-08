"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9726:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:2},l="Configure your WordPress",u={unversionedId:"getting-started/config-wordpress",id:"getting-started/config-wordpress",title:"Configure your WordPress",description:"Now that you have everything installed, you need to configure your WordPress. As for the installation you have two possibilities:",source:"@site/docs/getting-started/config-wordpress.md",sourceDirName:"getting-started",slug:"/getting-started/config-wordpress",permalink:"/docs/getting-started/config-wordpress",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/config-wordpress.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Create your first plugin",permalink:"/docs/getting-started/create-plugin"}},c=[{value:"Configure with the boilerplate (use .env files)",id:"configure-with-the-boilerplate-use-env-files",children:[{value:"Table prefix",id:"table-prefix",children:[],level:3},{value:"Security Keys",id:"security-keys",children:[],level:3},{value:"Database character set",id:"database-character-set",children:[],level:3}],level:2},{value:"Next",id:"next",children:[],level:2}],d={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-your-wordpress"},"Configure your WordPress"),(0,o.kt)("p",null,"Now that you have everything installed, you need to configure your WordPress. As for the installation you have two possibilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You first installed WordPress then the framework separately (so configure your wordpress with ",(0,o.kt)("a",{parentName:"li",href:"https://wordpress.org/support/article/editing-wp-config-php/"},"the wp-config.php file"),")"),(0,o.kt)("li",{parentName:"ul"},"You have installed your environment from the boilerplate")),(0,o.kt)("h2",{id:"configure-with-the-boilerplate-use-env-files"},"Configure with the boilerplate (use .env files)"),(0,o.kt)("p",null,"Open the .env file in your main folder of your project and edit it :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dotenv",metastring:"title='wordpress/.env'",title:"'wordpress/.env'"},"APP_ENV=dev\nAPP_DEBUG=true\n\nDB_NAME=wordpress\nDB_USER=root\nDB_PASSWORD=root\nDB_HOST=127.0.0.1\nDB_PREFIX=wp_\nDB_CHARSET=utf8\n\nAUTH_KEY='generateme'\nSECURE_AUTH_KEY='generateme'\nLOGGED_IN_KEY='generateme'\nNONCE_KEY='generateme'\nAUTH_SALT='generateme'\nSECURE_AUTH_SALT='generateme'\nLOGGED_IN_SALT='generateme'\nNONCE_SALT='generateme'\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"APP_ENV"),": not use into the framework but you can use it in your code if you want"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"APP_DEBUG"),': it\'s your "WP_DEBUG" constant and permit to disable cache for twig and the container'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DB_NAME"),": set Database Name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DB_PASSWORD"),": set Database Password"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DB_HOST"),": set Database Host "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DB_PREFIX"),": set the ",(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/config-wordpress#table-prefix"},"table prefix")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DB_CHARSET"),": set ",(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/config-wordpress#database-character-set"},"the charset"))),(0,o.kt)("h3",{id:"table-prefix"},"Table prefix"),(0,o.kt)("p",null,"The $table",(0,o.kt)("em",{parentName:"p"},"prefix is the value placed in the front of your database tables. Change the value if you want to use something other than wp")," for your database prefix. Typically this is changed if you are installing multiple WordPress blogs in the same database, as is done with the multisite feature.\nIt is possible to have multiple installations in one database if you give each a unique prefix. Keep security in mind if you choose to do this.\nChange this with the DB_PREFIX env var."),(0,o.kt)("h3",{id:"security-keys"},"Security Keys"),(0,o.kt)("p",null,"You don\u2019t have to remember the keys, just make them long, random and complicated \u2014 or better yet, use ",(0,o.kt)("a",{parentName:"p",href:"https://roots.io/salts.html"},"the online generator"),". You can change these at any point in time to invalidate all existing cookies. This does mean that all users will have to login again.\nA secret key makes your site harder to successfully attack by adding random elements to the password."),(0,o.kt)("p",null,"In simple terms, a secret key is a password with elements that make it harder to generate enough options to break through your security barriers. A password like \u201cpassword\u201d or \u201ctest\u201d is simple and easily broken. A random, long password which uses no dictionary words, such as \u201c88a7da62429ba6ad3cb3c76a09641fc\u201d would take a brute force attacker millions of hours to crack. A \u2018salt is used to further enhance the security of the generated result."),(0,o.kt)("p",null,"The four keys are required for the enhanced security. The four salts are recommended, but are not required, because WordPress will generate salts for you if none are provided. They are included in wp-config.php by default for inclusiveness."),(0,o.kt)("h3",{id:"database-character-set"},"Database character set"),(0,o.kt)("p",null,"DB_CHARSET was made available to allow designation of the database character set (e.g. tis620 for TIS620 Thai) to be used when defining the MySQL database tables."),(0,o.kt)("p",null,"The default value of utf8 (Unicode UTF-8) is almost always the best option. UTF-8 supports any language, so you typically want to leave DB_CHARSET at utf8 and use the DB_COLLATE value for your language instead."),(0,o.kt)("p",null,"This example shows utf8 which is considered the WordPress default value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dotenv"},"DB_CHARSET=utf8\n")),(0,o.kt)("p",null,"There usually should be no reason to change the default value of DB_CHARSET. If your blog needs a different character set, please read Character Sets and Collations MySQL Supports for valid DB_CHARSET values. WARNING: Those performing upgrades."),(0,o.kt)("h2",{id:"next"},"Next"),(0,o.kt)("p",null,"Now you can ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/create-plugin"},"create your first plugin"),"."))}p.isMDXComponent=!0}}]);