"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[989],{6839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(5893),o=n(1151);const l={sidebar_position:1},i="Use MVC pattern",s={id:"advanced/mvc-pattern",title:"Use MVC pattern",description:"With model and View (with template engine) all that's missing is the controller.",source:"@site/docs/advanced/mvc-pattern.md",sourceDirName:"advanced",slug:"/advanced/mvc-pattern",permalink:"/simply-documentation/advanced/mvc-pattern",draft:!1,unlisted:!1,editUrl:"https://github.com/Amorfx/simply-documentation/tree/main/documentation/docs/advanced/mvc-pattern.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Use Simply CLI",permalink:"/simply-documentation/simply-cli/intro"},next:{title:"Extended Simply Framework",permalink:"/simply-documentation/advanced/extended-simply"}},a={},c=[{value:"Install the extension",id:"install-the-extension",level:2},{value:"Using Composer",id:"using-composer",level:3},{value:"Manually",id:"manually",level:3},{value:"Load the extension",id:"load-the-extension",level:2},{value:"MVC with example",id:"mvc-with-example",level:2},{value:"Create your Controller",id:"create-your-controller",level:3},{value:"Create your first Route",id:"create-your-first-route",level:3},{value:"Argument Resolver",id:"argument-resolver",level:3},{value:"Return Response and render view",id:"return-response-and-render-view",level:3},{value:"Advanced",id:"advanced",level:2},{value:"Route attribute",id:"route-attribute",level:3},{value:"Register your controller without extends AbstractController",id:"register-your-controller-without-extends-abstractcontroller",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"use-mvc-pattern",children:"Use MVC pattern"}),"\n",(0,r.jsxs)(t.p,{children:["With model and View (with template engine) all that's missing is the controller.\nSimply, ",(0,r.jsx)(t.a,{href:"/simply-documentation/#philosophy",children:"because of its philosophy"}),", does not directly allow you to use the pattern.\nBut an extension has been created in order to have the magic of the Symfony controller in Simply."]}),"\n",(0,r.jsx)(t.h2,{id:"install-the-extension",children:"Install the extension"}),"\n",(0,r.jsx)(t.h3,{id:"using-composer",children:"Using Composer"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Into your project main directory"',children:"composer require clementdecou/simply-mvc\n"})}),"\n",(0,r.jsx)(t.h3,{id:"manually",children:"Manually"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'Unzip into your mu-plugins directory and rename the directory to "simply-mvc"'}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"load-the-extension",children:"Load the extension"}),"\n",(0,r.jsx)(t.p,{children:"To load the extension modify your muplugin load file :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",metastring:"title='wp-content/mu-plugins/load.php'{6}",children:"<?php\n/*\n * Plugin Name: Load Simply framework\n */\nrequire __DIR__ . '/simply-framework/simply-framework.php';\nrequire __DIR__ . '/simply-mvc/entrypoint.php';\n"})}),"\n",(0,r.jsx)(t.p,{children:"And that's it the extension will be loaded !"}),"\n",(0,r.jsx)(t.h2,{id:"mvc-with-example",children:"MVC with example"}),"\n",(0,r.jsxs)(t.p,{children:["Let's explain how routes work with one more example.\nWe have our projects post type. But i want to develop the project page (single-project.php int a WordPress theme) using the MVC pattern. So i want a ",(0,r.jsx)(t.code,{children:"ProjectController"})," and a ",(0,r.jsx)(t.code,{children:"single-project.html.twig"})," view."]}),"\n",(0,r.jsx)(t.h3,{id:"create-your-controller",children:"Create your Controller"}),"\n",(0,r.jsxs)(t.p,{children:["To auto register a Controller let's create a ",(0,r.jsx)(t.code,{children:"ProjectController.php"})," into our ",(0,r.jsx)(t.code,{children:"src"})," directory of your plugin and extends the ",(0,r.jsx)(t.code,{children:"AbstractController"})," to have directly twig injected.\nAnd add a ",(0,r.jsx)(t.code,{children:"single"})," method. It will be main entrypoint for a single project page."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",metastring:"title='your-plugin/src/Controller/ProjectController'",children:"<?php\nnamespace MyPlugin;\n\nuse Simply\\Mvc\\Controller\\AbstractController;\n\nclass ProjectController extends AbstractController {\n    public function single() {\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"create-your-first-route",children:"Create your first Route"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Routing in Simply MVC use the WordPress template hierarchy. Added Route with custom url is impossible because of the philosophy of the framework.\nRead the documention of WordPress template hierarchy to understand. So ",(0,r.jsx)(t.a,{href:"https://developer.wordpress.org/themes/basics/template-hierarchy/",children:"read the full WordPress documentation about the template hierarchy to understant routing with Simply"}),".\nAll possible routes are all possible template-hierarchy."]})}),"\n",(0,r.jsxs)(t.p,{children:["We want a route for ",(0,r.jsx)(t.code,{children:"single project page"}),". To correspond of the template hierarchy we see that in theme we normally use ",(0,r.jsx)(t.code,{children:"single-project.php"})," template file. But here, with Simply, the route corresponding of the hierarchy is ",(0,r.jsx)(t.code,{children:"single-project"}),". So let's apply it into our file."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",metastring:"title='your-plugin/src/Controller/ProjectController' {8}",children:"<?php\nnamespace MyPlugin;\n\nuse Simply\\Mvc\\Attribute\\Route;\nuse Simply\\Mvc\\Controller\\AbstractController;\n\nclass ProjectController extends AbstractController {\n    #[Route('single-project')]\n    public function single() {\n\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"argument-resolver",children:"Argument Resolver"}),"\n",(0,r.jsxs)(t.p,{children:["Simply add argument resolver into its Controller. It's like ",(0,r.jsx)(t.a,{href:"https://symfony.com/doc/current/controller/argument_value_resolver.html",children:"Symfony argument resolver"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Passing Service into method arguments"}),"\n",(0,r.jsx)(t.li,{children:"Passing Request object into arguments"}),"\n",(0,r.jsx)(t.li,{children:"And more coming soon (like directly models etc.)"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"return-response-and-render-view",children:"Return Response and render view"}),"\n",(0,r.jsx)(t.p,{children:"Back to our example. We have a controller and the route. So let's return a response. For example a simple JSON."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",metastring:"title='your-plugin/src/Controller/ProjectController' {11}",children:"<?php\nnamespace MyPlugin;\n\nuse Simply\\Mvc\\Attribute\\Route;\nuse Simply\\Mvc\\Controller\\AbstractController;\nuse Symfony\\Component\\HttpFoundation\\JsonResponse;\n\nclass ProjectController extends AbstractController {\n    #[Route('single-project')]\n    public function single() {\n        return new JsonResponse(array('a project'));\n    }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Or a twig template"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",metastring:"title='your-plugin/src/Controller/ProjectController' {13-15}",children:"<?php\nnamespace MyPlugin;\n\nuse Simply\\Core\\Query\\SimplyQuery;\nuse Simply\\Mvc\\Attribute\\Route;\nuse Simply\\Mvc\\Controller\\AbstractController;\nuse Simply\\Mvc\\Request;\n\nclass ProjectController extends AbstractController {\n    #[Route('single-project')]\n    public function single(Request $request) {\n        // Do your thing with $request\n        $this->renderView('single/project.html.twig', [\n            'project' => SimplyQuery::getCurrentObject()\n            // ...\n        ]);\n    }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"And that's it. You add MVC pattern into your WordPress project without theme templating !"}),"\n",(0,r.jsx)(t.h2,{id:"advanced",children:"Advanced"}),"\n",(0,r.jsx)(t.h3,{id:"route-attribute",children:"Route attribute"}),"\n",(0,r.jsx)(t.p,{children:"Route attribute has several arguments :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"wpCondition"})," : it's the main condition of your route, see ",(0,r.jsx)(t.a,{href:"#create-your-first-route",children:"Template hierarchy section"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"methods"})," : HTTP method condition of your route (default is array with ",(0,r.jsx)(t.code,{children:"GET"})," and ",(0,r.jsx)(t.code,{children:"POST"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"customCondition"})," : php function called to add condition of your route. Example you want a route only if a post has a meta with specific value."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"register-your-controller-without-extends-abstractcontroller",children:"Register your controller without extends AbstractController"}),"\n",(0,r.jsxs)(t.p,{children:["If you don't want to extends AbstractController you can register your controller by add your class into the service container with ",(0,r.jsx)(t.code,{children:"simply.controller"})," tag."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var r=n(7294);const o={},l=r.createContext(o);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);