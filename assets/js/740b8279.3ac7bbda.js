"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[783],{1922:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=r(5893),o=r(1151),a=r(4866),l=r(5162);const s={sidebar_position:3},i="Register your model into Simply",u={id:"models/register-models",title:"Register your model into Simply",description:"After creating all of your models you have to register the models into Simply.",source:"@site/docs/models/register-models.mdx",sourceDirName:"models",slug:"/models/register-models",permalink:"/simply-documentation/models/register-models",draft:!1,unlisted:!1,editUrl:"https://github.com/Amorfx/simply-documentation/tree/main/documentation/docs/models/register-models.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create your custom models",permalink:"/simply-documentation/models/create-model"},next:{title:"Repositories",permalink:"/simply-documentation/models/repository"}},c={},d=[{value:"Why ?",id:"why-",level:2},{value:"How ?",id:"how-",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"register-your-model-into-simply",children:"Register your model into Simply"}),"\n",(0,n.jsx)(t.p,{children:"After creating all of your models you have to register the models into Simply."}),"\n",(0,n.jsx)(t.h2,{id:"why-",children:"Why ?"}),"\n",(0,n.jsxs)(t.p,{children:["To inject automatically the good model with ",(0,n.jsx)(t.code,{children:"ModelFactory"}),". The ",(0,n.jsx)(t.code,{children:"ModelFactory"})," allows you to return the correct model according to the injecting object.\nLike when you use hook you don't know which post type is the current object queried."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"<?php\n\nglobal $post;\n\n// $post->post_type is project\n$project = ModelFactory::create($post);\n// $project will be an instance of Project model after registered into Simply\n"})}),"\n",(0,n.jsx)(t.h2,{id:"how-",children:"How ?"}),"\n",(0,n.jsx)(t.p,{children:"With the good filter provides by Simply :"}),"\n",(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(l.Z,{value:"post-type",label:"Post type",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"add_filter('simply/model/post_type_mapping', function(array $mapping) {\n    $mapping[] = Project::class;\n    return $mapping;\n});\n"})})}),(0,n.jsx)(l.Z,{value:"taxonomy",label:"Taxonomy",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"// Add model for project tag\nadd_filter('simply/model/term_mapping', function(array $mapping) {\n    $mapping[] = ProjectTag::class;\n    return $mapping;\n});\n"})})})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"$mapping"})," array has basic object for post and category and tag. You can remove or replace it."]})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>l});r(7294);var n=r(512);const o={tabItem:"tabItem_Ymn6"};var a=r(5893);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7294),o=r(512),a=r(2466),l=r(6550),s=r(469),i=r(1980),u=r(7392),c=r(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const o=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,a=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[u,d]=h({queryString:r,groupId:o}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,c.Nk)(r);return[o,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:o}),y=(()=>{const e=u??f;return m({value:e,tabValues:a})?e:null})();(0,s.Z)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function v(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),o=s[r].value;o!==n&&(u(t),l(o))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,o.Z)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:o}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",y.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>l});var n=r(7294);const o={},a=n.createContext(o);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);