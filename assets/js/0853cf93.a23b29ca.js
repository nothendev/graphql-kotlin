"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9240],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),s=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=s(r),m=a,c=u["".concat(o,".").concat(m)]||u[m]||g[m]||l;return r?n.createElement(c,i(i({ref:e},d),{},{components:r})):n.createElement(c,i({ref:e},d))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8616:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>g});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],p={id:"spring-properties",title:"Configuration Properties"},o=void 0,s={unversionedId:"server/spring-server/spring-properties",id:"server/spring-server/spring-properties",title:"Configuration Properties",description:"graphql-kotlin-spring-server relies on GraphQLConfigurationProperties",source:"@site/docs/server/spring-server/spring-properties.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-properties",permalink:"/graphql-kotlin/docs/server/spring-server/spring-properties",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/spring-server/spring-properties.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1660582317,formattedLastUpdatedAt:"Aug 15, 2022",frontMatter:{id:"spring-properties",title:"Configuration Properties"},sidebar:"docs",previous:{title:"Automatically Created Beans",permalink:"/graphql-kotlin/docs/server/spring-server/spring-beans"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/server/spring-server/spring-subscriptions"}},d={},g=[],u={toc:g};function m(t){var e=t.components,r=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," relies on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/servers/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/server/spring/GraphQLConfigurationProperties.kt"},"GraphQLConfigurationProperties"),"\nto provide various customizations of the auto-configuration library. All applicable configuration properties expose ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/configuration-metadata.html"},"configuration\nmetadata")," that provide\ndetails on the supported configuration properties."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL server endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"graphql")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.packages"),(0,l.kt)("td",{parentName:"tr",align:null},"List of supported packages that can contain GraphQL schema type definitions"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.federation.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether to generate federated GraphQL model"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.federation.optInV2"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether to generate Federation v2 GraphQL model"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.federation.tracing.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether add federated tracing data to the extensions"),(0,l.kt)("td",{parentName:"tr",align:null},"true (if federation enabled)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.federation.tracing.debug"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag to log debug info in the federated tracing"),(0,l.kt)("td",{parentName:"tr",align:null},"false (if federation enabled)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.introspection.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether introspection queries are enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.playground.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether to enabled Prisma Labs Playground GraphQL IDE"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.playground.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"Prisma Labs Playground GraphQL IDE endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"playground")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.sdl.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether to expose SDL endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.sdl.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL SDL endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"sdl")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.subscriptions.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL subscriptions endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"subscriptions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.subscriptions.keepAliveInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"Keep the websocket alive and send a message to the client every interval in ms. Defaults to not sending messages"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.batching.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether to enable custom dataloader instrumentations for 1 or more GraphQL Operations"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphql.batching.strategy"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure which custom dataloader instrumentation will be used (LEVEL_DISPATCHED or SYNC_EXHAUSTION)"),(0,l.kt)("td",{parentName:"tr",align:null},"LEVEL_DISPATCHED")))))}m.isMDXComponent=!0}}]);