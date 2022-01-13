"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[132],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(7462),a=t(7294),o=t(2389),i=t(9443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(3616),c=t(6010),u="tabItem_vU9c";function p(e){var n,t,o,i=e.lazy,p=e.block,m=e.defaultValue,d=e.values,f=e.groupId,h=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,s.lx)(b,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(n=null!=m?m:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),w=g.tabGroupChoices,N=g.setTabGroupChoices,T=(0,a.useState)(k),C=T[0],S=T[1],O=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=w[f];null!=x&&x!==C&&b.some((function(e){return e.value===x}))&&S(x)}var E=function(e){var n=e.currentTarget,t=O.indexOf(n),r=b[t].value;r!==C&&(P(n),S(r),null!=f&&N(f,r))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;t=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},h)},b.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:E,onClick:E},o,{className:(0,c.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function m(e){var n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},3587:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(6396),l=t(8215),s=["components"],c={sidebar_position:1,title:"Create a Hook"},u="Add WordPress hook",p={unversionedId:"wp-features/create-hook",id:"wp-features/create-hook",title:"Create a Hook",description:"Developing with WordPress will certainly require you to add hooks in order to modify the basic behavior. With Simply it is possible to add hooks in different ways :",source:"@site/docs/wp-features/create-hook.mdx",sourceDirName:"wp-features",slug:"/wp-features/create-hook",permalink:"/simply-documentation/docs/wp-features/create-hook",editUrl:"https://github.com/Amorfx/simply-documentation/tree/main/documentation/docs/wp-features/create-hook.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Create a Hook"},sidebar:"tutorialSidebar",previous:{title:"Delete cache",permalink:"/simply-documentation/docs/getting-started/delete-cache"},next:{title:"Create a custom post type",permalink:"/simply-documentation/docs/wp-features/create-post-type"}},m=[{value:"Using a class implement an interface",id:"using-a-class-implement-an-interface",children:[],level:2},{value:"Using PHP attribute",id:"using-php-attribute",children:[],level:2},{value:"Automatically register hook class",id:"automatically-register-hook-class",children:[],level:2},{value:"Using dependency injection in Hook class",id:"using-dependency-injection-in-hook-class",children:[],level:2}],d={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-wordpress-hook"},"Add WordPress hook"),(0,o.kt)("p",null,"Developing with WordPress will certainly require you to add hooks in order to modify the basic behavior. With Simply it is possible to add hooks in different ways :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-a-class-implement-an-interface"},"Using a class implement an interface")),(0,o.kt)("li",{parentName:"ul"},"The modern way (with php 8) ",(0,o.kt)("a",{parentName:"li",href:"#using-php-attribute"},"using PHP attribute"))),(0,o.kt)("h2",{id:"using-a-class-implement-an-interface"},"Using a class implement an interface"),(0,o.kt)("p",null,"By implementing HookableInterface you need to implement ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," function. In this function add all hooks you want to add.\nThe service container automatically call this function after WordPress is setup."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace ClementCore\\Hook;\n\nuse Simply\\Core\\Contract\\HookableInterface;\n\nclass Excerpt implements HookableInterface {\n    public function register() {\n        add_action('excerpt_length', function($length) {\n            if (is_home()) {\n                return 20;\n            }\n           return $length;\n        });\n\n        add_action('excerpt_more', function($more) {\n            if (is_home()) {\n                return '...';\n            }\n            return $more;\n        });\n    }\n}\n")),(0,o.kt)("h2",{id:"using-php-attribute"},"Using PHP attribute"),(0,o.kt)("p",null,"PHP 8 add internal attribute. Simply have two attributes to add filter or action."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"action",label:"Action",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace MyPlugin;\n\nuse Simply\\Core\\Attributes\\Action;\n\nclass SimpleHook {\n    #[Action('init')]\n    public function myInit() {\n    }\n}\n"))),(0,o.kt)(l.Z,{value:"filter",label:"Filter",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace MyPlugin;\n\nuse Simply\\Core\\Attributes\\Filter;\n\nclass SimpleHook {\n    #[Filter('the_content')]\n    public function myTheContentFilter($content) {\n        // Do your things\n        return $content;\n    }\n}\n")))),(0,o.kt)("h2",{id:"automatically-register-hook-class"},"Automatically register hook class"),(0,o.kt)("p",null,"Simply can register hooks automatically : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you register your plugin with registerPlugin function the class has automatically register"),(0,o.kt)("li",{parentName:"ul"},'You can register your class as hook service by added service tags "wp.hook"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  ClementCore\\Admin\\Admin:\n    tags: ['wp.hook']\n\n  ClementCore\\Api\\OnLiveEndpoint:\n    tags: ['wp.hook']\n")),(0,o.kt)("h2",{id:"using-dependency-injection-in-hook-class"},"Using dependency injection in Hook class"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A hook class is ",(0,o.kt)("strong",{parentName:"p"},"instanciated")," on ",(0,o.kt)("strong",{parentName:"p"},"each request"),".\nBe carefull and use ",(0,o.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/service_container/service_subscribers_locators.html"},"Service Subscribers & Locators")," if you want to use dependency injection with hook classes."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace ClementCore\\Api;\n\nuse Simply\\Core\\Contract\\HookableInterface;\nuse Symfony\\Contracts\\Service\\ServiceSubscriberInterface;\nuse Symfony\\Contracts\\Service\\ServiceSubscriberTrait;\n\nclass OnLiveEndpoint implements HookableInterface, ServiceSubscriberInterface {\n    use ServiceSubscriberTrait;\n\n    public function register() {\n        add_action( 'rest_api_init', [$this, 'registerEndpoint']);\n    }\n\n   // ...\n\n    public function getTokenGenerator(): TokenGenerator {\n        return $this->container->get(TokenGenerator::class);\n    }\n\n    public static function getSubscribedServices(): array {\n        return [TokenGenerator::class => TokenGenerator::class];\n    }\n}\n")))}f.isMDXComponent=!0}}]);