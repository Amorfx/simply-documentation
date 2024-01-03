"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58],{1110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(5893),s=r(1151);const i={sidebar_position:2},a="Configure your WordPress",o={id:"getting-started/config-wordpress",title:"Configure your WordPress",description:"Now that you have everything installed, you need to configure your WordPress. As for the installation you have two possibilities:",source:"@site/docs/getting-started/config-wordpress.md",sourceDirName:"getting-started",slug:"/getting-started/config-wordpress",permalink:"/simply-documentation/getting-started/config-wordpress",draft:!1,unlisted:!1,editUrl:"https://github.com/Amorfx/simply-documentation/tree/main/documentation/docs/getting-started/config-wordpress.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/simply-documentation/getting-started/installation"},next:{title:"Create your first plugin",permalink:"/simply-documentation/getting-started/create-plugin"}},l={},d=[{value:"Configure with the boilerplate (use .env files)",id:"configure-with-the-boilerplate-use-env-files",level:2},{value:"Table prefix",id:"table-prefix",level:3},{value:"Security Keys",id:"security-keys",level:3},{value:"Database character set",id:"database-character-set",level:3},{value:"Next",id:"next",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"configure-your-wordpress",children:"Configure your WordPress"}),"\n",(0,n.jsx)(t.p,{children:"Now that you have everything installed, you need to configure your WordPress. As for the installation you have two possibilities:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["You first installed WordPress then the framework separately (so configure your wordpress with ",(0,n.jsx)(t.a,{href:"https://wordpress.org/support/article/editing-wp-config-php/",children:"the wp-config.php file"}),")"]}),"\n",(0,n.jsx)(t.li,{children:"You have installed your environment from the boilerplate"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"configure-with-the-boilerplate-use-env-files",children:"Configure with the boilerplate (use .env files)"}),"\n",(0,n.jsx)(t.p,{children:"Open the .env file in your main folder of your project and edit it :"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dotenv",metastring:"title='wordpress/.env'",children:"APP_ENV=dev\r\nAPP_DEBUG=true\r\n\r\nDB_NAME=wordpress\r\nDB_USER=root\r\nDB_PASSWORD=root\r\nDB_HOST=127.0.0.1\r\nDB_PREFIX=wp_\r\nDB_CHARSET=utf8\r\n\r\nAUTH_KEY='generateme'\r\nSECURE_AUTH_KEY='generateme'\r\nLOGGED_IN_KEY='generateme'\r\nNONCE_KEY='generateme'\r\nAUTH_SALT='generateme'\r\nSECURE_AUTH_SALT='generateme'\r\nLOGGED_IN_SALT='generateme'\r\nNONCE_SALT='generateme'\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"APP_ENV"}),": not use into the framework but you can use it in your code if you want"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"APP_DEBUG"}),': it\'s your "WP_DEBUG" constant and permit to disable cache for twig and the container']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"DB_NAME"}),": set Database Name"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"DB_PASSWORD"}),": set Database Password"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"DB_HOST"}),": set Database Host"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"DB_PREFIX"}),": set the ",(0,n.jsx)(t.a,{href:"/simply-documentation/getting-started/config-wordpress#table-prefix",children:"table prefix"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"DB_CHARSET"}),": set ",(0,n.jsx)(t.a,{href:"/simply-documentation/getting-started/config-wordpress#database-character-set",children:"the charset"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"table-prefix",children:"Table prefix"}),"\n",(0,n.jsx)(t.p,{children:"The $table_prefix is the value placed in the front of your database tables. Change the value if you want to use something other than wp_ for your database prefix. Typically this is changed if you are installing multiple WordPress blogs in the same database, as is done with the multisite feature.\r\nIt is possible to have multiple installations in one database if you give each a unique prefix. Keep security in mind if you choose to do this.\r\nChange this with the DB_PREFIX env var."}),"\n",(0,n.jsx)(t.h3,{id:"security-keys",children:"Security Keys"}),"\n",(0,n.jsxs)(t.p,{children:["You don\u2019t have to remember the keys, just make them long, random and complicated \u2014 or better yet, use ",(0,n.jsx)(t.a,{href:"https://roots.io/salts.html",children:"the online generator"}),". You can change these at any point in time to invalidate all existing cookies. This does mean that all users will have to login again.\r\nA secret key makes your site harder to successfully attack by adding random elements to the password."]}),"\n",(0,n.jsx)(t.p,{children:"In simple terms, a secret key is a password with elements that make it harder to generate enough options to break through your security barriers. A password like \u201cpassword\u201d or \u201ctest\u201d is simple and easily broken. A random, long password which uses no dictionary words, such as \u201c88a7da62429ba6ad3cb3c76a09641fc\u201d would take a brute force attacker millions of hours to crack. A \u2018salt is used to further enhance the security of the generated result."}),"\n",(0,n.jsx)(t.p,{children:"The four keys are required for the enhanced security. The four salts are recommended, but are not required, because WordPress will generate salts for you if none are provided. They are included in wp-config.php by default for inclusiveness."}),"\n",(0,n.jsx)(t.h3,{id:"database-character-set",children:"Database character set"}),"\n",(0,n.jsx)(t.p,{children:"DB_CHARSET was made available to allow designation of the database character set (e.g. tis620 for TIS620 Thai) to be used when defining the MySQL database tables."}),"\n",(0,n.jsx)(t.p,{children:"The default value of utf8 (Unicode UTF-8) is almost always the best option. UTF-8 supports any language, so you typically want to leave DB_CHARSET at utf8 and use the DB_COLLATE value for your language instead."}),"\n",(0,n.jsx)(t.p,{children:"This example shows utf8 which is considered the WordPress default value:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dotenv",children:"DB_CHARSET=utf8\n"})}),"\n",(0,n.jsx)(t.p,{children:"There usually should be no reason to change the default value of DB_CHARSET. If your blog needs a different character set, please read Character Sets and Collations MySQL Supports for valid DB_CHARSET values. WARNING: Those performing upgrades."}),"\n",(0,n.jsx)(t.h2,{id:"next",children:"Next"}),"\n",(0,n.jsxs)(t.p,{children:["Now you can ",(0,n.jsx)(t.a,{href:"/simply-documentation/getting-started/create-plugin",children:"create your first plugin"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var n=r(7294);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);