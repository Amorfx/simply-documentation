"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82],{737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(5893),a=n(1151);const r={sidebar_position:3,title:"Create a custom taxonomy"},i="Create a custom taxonomy",s={id:"wp-features/create-taxonomy",title:"Create a custom taxonomy",description:"You can create a taxonomy using registertaxonomy function.",source:"@site/docs/wp-features/create-taxonomy.md",sourceDirName:"wp-features",slug:"/wp-features/create-taxonomy",permalink:"/simply-documentation/wp-features/create-taxonomy",draft:!1,unlisted:!1,editUrl:"https://github.com/Amorfx/simply-documentation/tree/main/documentation/docs/wp-features/create-taxonomy.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Create a custom taxonomy"},sidebar:"tutorialSidebar",previous:{title:"Create a custom post type",permalink:"/simply-documentation/wp-features/create-post-type"},next:{title:"Create a custom navigation menu",permalink:"/simply-documentation/wp-features/create-nav-menu"}},c={},l=[{value:"Using translation method in Yaml files",id:"using-translation-method-in-yaml-files",level:2},{value:"Using CLI",id:"using-cli",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"create-a-custom-taxonomy",children:"Create a custom taxonomy"}),"\n",(0,o.jsxs)(t.p,{children:["You can create a taxonomy using ",(0,o.jsx)(t.a,{href:"https://developer.wordpress.org/reference/functions/register_taxonomy/",children:(0,o.jsx)(t.code,{children:"register_taxonomy"})})," function.\nSimply also allows you to directly configure your taxonomies in the config folder like this :"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yml",metastring:"title='config/taxonomies/project-tag.yaml'",children:"taxonomy:\n  project_tag:\n    object_type: project\n    args:\n      labels:\n        name: Technologies\n        singular_name: Technologie\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["All the available parameters are the same of ",(0,o.jsx)(t.a,{href:"https://developer.wordpress.org/reference/functions/register_taxonomy/",children:(0,o.jsx)(t.code,{children:"register_taxonomy"})})," function."]})}),"\n",(0,o.jsx)(t.h2,{id:"using-translation-method-in-yaml-files",children:"Using translation method in Yaml files"}),"\n",(0,o.jsxs)(t.p,{children:["You can translate using ",(0,o.jsx)(t.code,{children:"trans(words, domain)"}),", Simply translate it to ",(0,o.jsx)(t.a,{href:"https://developer.wordpress.org/reference/functions/__/",children:(0,o.jsx)(t.code,{children:"__()"})})," function."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yml",metastring:"title='config/taxonomies/project-tag.yaml'",children:"taxonomy:\n  project_tag:\n    object_type: project\n    args:\n      labels:\n        name: Technologies\n        singular_name: trans(Technologie, mydomain)\n"})}),"\n",(0,o.jsx)(t.h2,{id:"using-cli",children:"Using CLI"}),"\n",(0,o.jsx)(t.p,{children:"Coming soon."})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var o=n(7294);const a={},r=o.createContext(a);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);