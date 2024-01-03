"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[994],{3345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var s=n(5893),o=n(1151);const r={sidebar_position:2,title:"Create a custom post type"},i="Create a custom post type",a={id:"wp-features/create-post-type",title:"Create a custom post type",description:"You can create a post type using registerposttype function.",source:"@site/docs/wp-features/create-post-type.md",sourceDirName:"wp-features",slug:"/wp-features/create-post-type",permalink:"/simply-documentation/wp-features/create-post-type",draft:!1,unlisted:!1,editUrl:"https://github.com/Amorfx/simply-documentation/tree/main/documentation/docs/wp-features/create-post-type.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Create a custom post type"},sidebar:"tutorialSidebar",previous:{title:"Create a Hook",permalink:"/simply-documentation/wp-features/create-hook"},next:{title:"Create a custom taxonomy",permalink:"/simply-documentation/wp-features/create-taxonomy"}},c={},p=[{value:"Using translation method in Yaml files",id:"using-translation-method-in-yaml-files",level:2},{value:"Using CLI",id:"using-cli",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-a-custom-post-type",children:"Create a custom post type"}),"\n",(0,s.jsxs)(t.p,{children:["You can create a post type using ",(0,s.jsx)(t.a,{href:"https://developer.wordpress.org/reference/functions/register_post_type/",children:(0,s.jsx)(t.code,{children:"register_post_type"})})," function.\nSimply also allows you to directly configure your post types in the config folder like this :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",metastring:"title='config/post-types/project.yaml'",children:"post_type:\n  project:\n    public: true\n    labels:\n      name: Projets\n      singular_name: Projet\n    supports:\n      - thumbnail\n      - editor\n      - title\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["All the available parameters are the same of ",(0,s.jsx)(t.a,{href:"https://developer.wordpress.org/reference/functions/register_post_type/",children:(0,s.jsx)(t.code,{children:"register_post_type"})})," function."]})}),"\n",(0,s.jsx)(t.h2,{id:"using-translation-method-in-yaml-files",children:"Using translation method in Yaml files"}),"\n",(0,s.jsxs)(t.p,{children:["You can translate using ",(0,s.jsx)(t.code,{children:"trans(words, domain)"}),", Simply translate it to ",(0,s.jsx)(t.a,{href:"https://developer.wordpress.org/reference/functions/__/",children:(0,s.jsx)(t.code,{children:"__()"})})," function."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",metastring:"title='config/post-types/project.yaml'",children:"post_type:\n  project:\n    public: true\n    labels:\n      name: trans(Projects, mydomain)\n      singular_name: trans(Project, mydomain)\n    supports:\n      - thumbnail\n      - editor\n      - title\n"})}),"\n",(0,s.jsx)(t.h2,{id:"using-cli",children:"Using CLI"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"php bin/console simply:make:post-type\n"})}),"\n",(0,s.jsx)(t.p,{children:"Respond to all the question and the yaml will be created."})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(7294);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);