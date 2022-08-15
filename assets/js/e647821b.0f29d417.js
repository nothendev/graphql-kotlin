"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8389],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"advanced-features",title:"Advanced Features"},c=void 0,d={unversionedId:"schema-generator/customizing-schemas/advanced-features",id:"version-4.x.x/schema-generator/customizing-schemas/advanced-features",title:"Advanced Features",description:"Adding Custom Additional Types",source:"@site/versioned_docs/version-4.x.x/schema-generator/customizing-schemas/advanced-features.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/advanced-features",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/advanced-features",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/customizing-schemas/advanced-features.md",tags:[],version:"4.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1660582317,formattedLastUpdatedAt:"Aug 15, 2022",frontMatter:{id:"advanced-features",title:"Advanced Features"},sidebar:"version-4.x.x/docs",previous:{title:"Restricting Input and Output Types",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/restricting-input-output"},next:{title:"Fetching Data",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/fetching-data"}},l={},p=[{value:"Adding Custom Additional Types",id:"adding-custom-additional-types",level:2},{value:"<code>SchemaGenerator::generateSchema</code>",id:"schemageneratorgenerateschema",level:3},{value:"<code>SchemaGenerator::addAdditionalTypesWithAnnotation</code>",id:"schemageneratoraddadditionaltypeswithannotation",level:3}],m={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"adding-custom-additional-types"},"Adding Custom Additional Types"),(0,o.kt)("p",null,"There are a couple ways you can add more types to the schema without having them be directly consumed by a type in your schema.\nThis may be required for ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/federation/apollo-federation"},"Apollo Federation"),", or maybe adding other interface implementations that are not picked up."),(0,o.kt)("h3",{id:"schemageneratorgenerateschema"},(0,o.kt)("inlineCode",{parentName:"h3"},"SchemaGenerator::generateSchema")),(0,o.kt)("p",null,"When generating a schema you can optionally specify additional types and input types to be included in the schema. This will\nallow you to link to those types from your custom ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks")," implementation using GraphQL reference instead of\nmanually creating the underlying GraphQL type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val myConfig = SchemaGeneratorConfig(supportedPackages = listOf("com.example"))\nval generator = SchemaGenerator(myConfig)\n\nval schema = generator.generateSchema(\n    queries = myQueries,\n    additionalTypes = setOf(MyCustomObject::class.createType()),\n    additionalInputTypes = setOf(MyCustomInputObject::class.createType())\n)\n')),(0,o.kt)("h3",{id:"schemageneratoraddadditionaltypeswithannotation"},(0,o.kt)("inlineCode",{parentName:"h3"},"SchemaGenerator::addAdditionalTypesWithAnnotation")),(0,o.kt)("p",null,"This method is protected so if you override the ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGenerator")," used you can call this method to add types that have a specific annotation.\nYou can see how this is used in ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/FederatedSchemaGenerator.kt"},"an example"),"."))}u.isMDXComponent=!0}}]);