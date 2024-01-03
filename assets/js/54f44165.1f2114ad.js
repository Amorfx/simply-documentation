"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[152],{9145:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(5893),o=r(1151);const i={sidebar_position:1},s="Installation",l={id:"getting-started/installation",title:"Installation",description:"Simply can be install like a WordPress plugin or via Composer. Even though simply is not really a plugin it can be installed as such.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/simply-documentation/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/Amorfx/simply-documentation/tree/main/documentation/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/simply-documentation/"},next:{title:"Configure your WordPress",permalink:"/simply-documentation/getting-started/config-wordpress"}},a={},d=[{value:"Install with the boilerplate (recommended)",id:"install-with-the-boilerplate-recommended",level:2},{value:"Tree of your main project folder",id:"tree-of-your-main-project-folder",level:3},{value:"You have a WordPress environment already installed",id:"you-have-a-wordpress-environment-already-installed",level:2},{value:"Next",id:"next",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["Simply can be install like a WordPress plugin or via Composer. Even though simply is not really a plugin it can be installed as such.\r\nOr if you don't install WordPress at all you can install it with ",(0,t.jsx)(n.a,{href:"https://github.com/Amorfx/simply",children:"the boilerplate"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The only tool you required is Composer."}),"\n",(0,t.jsx)(n.h2,{id:"install-with-the-boilerplate-recommended",children:"Install with the boilerplate (recommended)"}),"\n",(0,t.jsx)(n.p,{children:"Only one command is required to install a complete WordPress."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"composer create-project clementdecou/simply your-project\n"})}),"\n",(0,t.jsx)(n.p,{children:"The boilerplate does not just allow you to install a WordPress and the framework but brings some additional features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The use of .env files"}),"\n",(0,t.jsx)(n.li,{children:"Management of WordPress, plugins and theme via Composer"}),"\n",(0,t.jsx)(n.li,{children:"Add CLI to create some WordPress features (Hooks, plugins, themes...)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"tree-of-your-main-project-folder",children:"Tree of your main project folder"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:".\r\n\u251c\u2500\u2500 your-project\r\n\u2502   \u251c\u2500\u2500 vendor\r\n\u2502   \u251c\u2500\u2500 wordpress\r\n\u2502   \u251c\u2500\u2500 composer.json\r\n\u2502   \u251c\u2500\u2500 composer.lock\r\n\u2502   \u2514\u2500\u2500 README.md\r\n\u2514\u2500\u2500\n"})}),"\n",(0,t.jsx)(n.h2,{id:"you-have-a-wordpress-environment-already-installed",children:"You have a WordPress environment already installed"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Amorfx/simply-framework/releases",children:"Download the latest release"})," of the framework"]}),"\n",(0,t.jsx)(n.li,{children:'Unzip into your mu-plugins directory and rename the directory to "simply-framework"'}),"\n",(0,t.jsx)(n.li,{children:"To load the framework create a PHP file at the root of mu-plugins directory"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",metastring:"title='wp-content/mu-plugins/load.php'",children:"<?php\r\n/*\r\n * Plugin Name: Load Simply framework\r\n */\r\nrequire __DIR__ . '/simply-framework/simply-framework.php';\n"})}),"\n",(0,t.jsx)(n.p,{children:"Your mu-plugins folder should have a structure like this :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:".\r\n\u251c\u2500\u2500 mu-plugins\r\n\u2502   \u251c\u2500\u2500 simply-framework\r\n\u2502   \u2514\u2500\u2500 load.php\r\n\u2514\u2500\u2500\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Go into the simply-framework directory and exec ",(0,t.jsx)(n.code,{children:"composer install"})]}),"\n",(0,t.jsxs)(n.li,{children:["That's it ","\ud83c\udf8a"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"next",children:"Next"}),"\n",(0,t.jsxs)(n.p,{children:["Now you need to ",(0,t.jsx)(n.a,{href:"/simply-documentation/getting-started/config-wordpress",children:"configure your WordPress"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var t=r(7294);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);