"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7653],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>d});var t=n(67294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=l,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||r;return n?t.createElement(m,i(i({ref:a},c),{},{components:n})):t.createElement(m,i({ref:a},c))}));function d(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,a,n)=>{n.d(a,{Z:()=>i});var t=n(67294),l=n(86010);const r="tabItem_Ymn6";function i(e){var a=e.children,n=e.hidden,i=e.className;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},a)}},65488:(e,a,n)=>{n.d(a,{Z:()=>d});var t=n(87462),l=n(67294),r=n(86010),i=n(72389),o=n(67392),p=n(7094),s=n(12466);const c="tabList__CuJ",g="tabItem_LNqP";function u(e){var a,n,i=e.lazy,u=e.block,d=e.defaultValue,m=e.values,h=e.groupId,k=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),y=(0,o.l)(f,(function(e,a){return e.value===a.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(a=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?a:v[0].props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,p.U)(),q=x.tabGroupChoices,G=x.setTabGroupChoices,N=(0,l.useState)(b),L=N[0],S=N[1],T=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=q[h];null!=C&&C!==L&&f.some((function(e){return e.value===C}))&&S(C)}var w=function(e){var a=e.currentTarget,n=T.indexOf(a),t=f[n].value;t!==L&&(D(a),S(t),null!=h&&G(h,String(t)))},Q=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t,l=T.indexOf(e.currentTarget)+1;n=null!=(t=T[l])?t:T[0];break;case"ArrowLeft":var r,i=T.indexOf(e.currentTarget)-1;n=null!=(r=T[i])?r:T[T.length-1]}null==(a=n)||a.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},k)},f.map((function(e){var a=e.value,n=e.label,i=e.attributes;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:L===a?0:-1,"aria-selected":L===a,key:a,ref:function(e){return T.push(e)},onKeyDown:Q,onFocus:w,onClick:w},i,{className:(0,r.Z)("tabs__item",g,null==i?void 0:i.className,{"tabs__item--active":L===a})}),null!=n?n:a)}))),i?(0,l.cloneElement)(v.filter((function(e){return e.props.value===L}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map((function(e,a){return(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==L})}))))}function d(e){var a=(0,i.Z)();return l.createElement(u,(0,t.Z)({key:String(a)},e))}},5668:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>g,toc:()=>d});var t=n(87462),l=n(63366),r=(n(67294),n(3905)),i=n(65488),o=n(85162),p=["components"],s={id:"gradle-plugin-usage",title:"Gradle Plugin Usage",sidebar_label:"Usage"},c=void 0,g={unversionedId:"plugins/gradle-plugin-usage",id:"version-4.x.x/plugins/gradle-plugin-usage",title:"Gradle Plugin Usage",description:"Downloading Schema SDL",source:"@site/versioned_docs/version-4.x.x/plugins/gradle-plugin-usage.mdx",sourceDirName:"plugins",slug:"/plugins/gradle-plugin-usage",permalink:"/graphql-kotlin/docs/4.x.x/plugins/gradle-plugin-usage",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/plugins/gradle-plugin-usage.mdx",tags:[],version:"4.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1670127400,formattedLastUpdatedAt:"Dec 4, 2022",frontMatter:{id:"gradle-plugin-usage",title:"Gradle Plugin Usage",sidebar_label:"Usage"},sidebar:"version-4.x.x/docs",previous:{title:"Tasks",permalink:"/graphql-kotlin/docs/4.x.x/plugins/gradle-plugin-tasks"},next:{title:"Goals",permalink:"/graphql-kotlin/docs/4.x.x/plugins/maven-plugin-goals"}},u={},d=[{value:"Downloading Schema SDL",id:"downloading-schema-sdl",level:2},{value:"Introspecting Schema",id:"introspecting-schema",level:2},{value:"Generating Client",id:"generating-client",level:2},{value:"Generating Client with Custom Scalars",id:"generating-client-with-custom-scalars",level:2},{value:"Generating Client using Kotlinx Serialization",id:"generating-client-using-kotlinx-serialization",level:2},{value:"Generating Test Client",id:"generating-test-client",level:2},{value:"Minimal Client Configuration Example",id:"minimal-client-configuration-example",level:2},{value:"Complete Client Configuration Example",id:"complete-client-configuration-example",level:2},{value:"Generating Multiple Clients",id:"generating-multiple-clients",level:2},{value:"Generating SDL Example",id:"generating-sdl-example",level:2},{value:"Generating SDL with Custom Hooks Provider Example",id:"generating-sdl-with-custom-hooks-provider-example",level:2}],m={toc:d};function h(e){var a=e.components,n=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"downloading-schema-sdl"},"Downloading Schema SDL"),(0,r.kt)("p",null,"GraphQL endpoints are often public and as such many servers might disable introspection queries in production environment.\nSince GraphQL schema is needed to generate type safe clients, as alternative GraphQL servers might expose private\nendpoints (e.g. accessible only from within network, etc) that could be used to download schema in Schema Definition\nLanguage (SDL) directly. ",(0,r.kt)("inlineCode",{parentName:"p"},"graphqlDownloadSDL")," task requires target GraphQL server ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," to be specified and can\nbe executed directly from the command line by explicitly passing ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," parameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ gradle graphqlDownloadSDL --endpoint="http://localhost:8080/sdl"\n')),(0,r.kt)("p",null,"Task can also be explicitly configured in your Gradle build file"),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLDownloadSDLTask\n\nval graphqlDownloadSDL by tasks.getting(GraphQLDownloadSDLTask::class) {\n    endpoint.set("http://localhost:8080/sdl")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlDownloadSDL {\n    endpoint = "http://localhost:8080/sdl"\n}\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This task does not automatically configure itself to be part of your build lifecycle. You will need to explicitly\ninvoke it OR configure it as a dependency of some other task.")),(0,r.kt)("h2",{id:"introspecting-schema"},"Introspecting Schema"),(0,r.kt)("p",null,"Introspection task requires target GraphQL server ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," to be specified. Task can be executed directly from the\ncommand line by explicitly passing endpoint parameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ gradle graphqlIntrospectSchema --endpoint="http://localhost:8080/graphql"\n')),(0,r.kt)("p",null,"Task can also be explicitly configured in your Gradle build file"),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlIntrospectSchema by tasks.getting(GraphQLIntrospectSchemaTask::class) {\n    endpoint.set("http://localhost:8080/graphql")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlIntrospectSchema {\n    endpoint = "http://localhost:8080/graphql"\n}\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This task does not automatically configure itself to be part of your build lifecycle. You will need to explicitly\ninvoke it OR configure it as a dependency of some other task.")),(0,r.kt)("h2",{id:"generating-client"},"Generating Client"),(0,r.kt)("p",null,"GraphQL Kotlin client code is generated based on the provided queries that will be executed against target GraphQL ",(0,r.kt)("inlineCode",{parentName:"p"},"schemaFile"),".\nSeparate class is generated for each provided GraphQL query and are saved under specified ",(0,r.kt)("inlineCode",{parentName:"p"},"packageName"),". When using default\nconfiguration and storing GraphQL queries under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources")," directories, task can be executed directly from the\ncommand line by explicitly providing required properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ gradle graphqlGenerateClient --schemaFileName"mySchema.graphql" --packageName="com.example.generated"\n')),(0,r.kt)("p",null,"Task can also be explicitly configured in your Gradle build file"),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFileName.set("mySchema.graphql")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlGenerateClient {\n    packageName = "com.example.generated"\n    schemaFileName = "mySchema.graphql"\n}\n')))),(0,r.kt)("p",null,"This will process all GraphQL files located under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources")," and generate corresponding GraphQL Kotlin client\ndata models. Generated classes will be automatically added to the project compile sources."),(0,r.kt)("h2",{id:"generating-client-with-custom-scalars"},"Generating Client with Custom Scalars"),(0,r.kt)("p",null,"By default, all custom GraphQL scalars will be serialized as Strings. You can override this default behavior by specifying\ncustom ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/clients/graphql-kotlin-client/src/main/kotlin/com/expediagroup/graphql/client/converter/ScalarConverter.kt"},"scalar converter"),"."),(0,r.kt)("p",null,"For example given following custom scalar in our GraphQL schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar UUID\n")),(0,r.kt)("p",null,"We can create a custom converter to automatically convert this custom scalar to ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.UUID")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"package com.example\n\nimport com.expediagroup.graphql.client.converter.ScalarConverter\nimport java.util.UUID\n\nclass UUIDScalarConverter : ScalarConverter<UUID> {\n    override fun toScalar(rawValue: Any): UUID = UUID.fromString(rawValue.toString()\n    override fun toJson(value: UUID): String = value.toString()\n}\n")),(0,r.kt)("p",null,"Afterwards we need to configure our plugin to use this custom converter"),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFileName.set("mySchema.graphql")\n  customScalars.add(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\n\ngraphqlGenerateClient {\n    packageName = "com.example.generated"\n    schemaFileName = "mySchema.graphql"\n    customScalars.add(new GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n}\n')))),(0,r.kt)("h2",{id:"generating-client-using-kotlinx-serialization"},"Generating Client using Kotlinx Serialization"),(0,r.kt)("p",null,"GraphQL Kotlin plugins default to generate client data models that are compatible with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson"},"Jackson"),".\nWe can change this default behavior by explicitly specifying serializer type (in the extension or explicitly in the generate\nclient task) and configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," compiler plugin. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization"},"kotlinx.serialization documentation"),"\nfor details."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFileName.set("mySchema.graphql")\n  serializer.set(GraphQLSerializer.KOTLINX)\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"//build.gradle\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\n\nplugins {\n    id 'org.jetbrains.kotlin.plugin.serialization' version '$kotlinVersion'\n}\n\ngraphqlGenerateClient {\n    packageName = \"com.example.generated\"\n    schemaFileName = \"mySchema.graphql\"\n    serializer = GraphQLSerializer.KOTLINX\n}\n")))),(0,r.kt)("h2",{id:"generating-test-client"},"Generating Test Client"),(0,r.kt)("p",null,"GraphQL Kotlin test client code is generated based on the provided queries that will be executed against target GraphQL ",(0,r.kt)("inlineCode",{parentName:"p"},"schemaFile"),".\nSeparate class is generated for each provided GraphQL query and are saved under specified ",(0,r.kt)("inlineCode",{parentName:"p"},"packageName"),". When using default\nconfiguration and storing GraphQL queries under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/test/resources")," directories, task can be executed directly from the\ncommand line by explicitly providing required properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ gradle graphqlGenerateTestClient --schemaFileName"mySchema.graphql" --packageName="com.example.generated"\n')),(0,r.kt)("p",null,"Task can also be explicitly configured in your Gradle build file"),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlGenerateTestClient by tasks.getting(GraphQLGenerateTestClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFileName.set("mySchema.graphql")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlGenerateTestClient {\n    packageName = "com.example.generated"\n    schemaFileName = "mySchema.graphql"\n}\n')))),(0,r.kt)("p",null,"This will process all GraphQL queries located under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/test/resources")," and generate corresponding GraphQL Kotlin clients.\nGenerated classes will be automatically added to the project test compile sources."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"graphqlGenerateTestClient")," cannot be configured through the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql")," extension and has to be explicitly configured.")),(0,r.kt)("h2",{id:"minimal-client-configuration-example"},"Minimal Client Configuration Example"),(0,r.kt)("p",null,"Following is the minimal configuration that runs introspection query against a target GraphQL server and generates a\ncorresponding schema. This generated schema is subsequently used to generate GraphQL client code based on the queries\nprovided under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources")," directory."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n  }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLIntrospectSchemaTask\n\nval graphqlIntrospectSchema by tasks.getting(GraphQLIntrospectSchemaTask::class) {\n  endpoint.set("http://localhost:8080/graphql")\n}\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFile.set(graphqlIntrospectSchema.outputFile)\n  dependsOn("graphqlIntrospectSchema")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'graphql {\n    client {\n        endpoint = "http://localhost:8080/graphql"\n        packageName = "com.example.generated"\n    }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\ngraphqlIntrospectSchema {\n    endpoint = "http://localhost:8080/graphql"\n}\ngraphqlGenerateClient {\n    packageName = "com.example.generated"\n    schemaFile = graphqlIntrospectSchema.outputFile\n    dependsOn graphqlIntrospectSchema\n}\n')))),(0,r.kt)("h2",{id:"complete-client-configuration-example"},"Complete Client Configuration Example"),(0,r.kt)("p",null,"Following is a configuration example that downloads schema SDL from a target GraphQL server that is then used to generate\nthe GraphQL client data models using ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," that are based on the provided query."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\ngraphql {\n  client {\n    sdlEndpoint = "http://localhost:8080/sdl"\n    packageName = "com.example.generated"\n    // optional configuration\n    allowDeprecatedFields = true\n    customScalars = listOf(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n    headers = mapOf("X-Custom-Header" to "My-Custom-Header")\n    queryFiles = listOf(file("${project.projectDir}/src/main/resources/queries/MyQuery.graphql"))\n    serializer = GraphQLSerializer.KOTLINX\n    timeout {\n        connect = 10_000\n        read = 30_000\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.config.TimeoutConfiguration\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLDownloadSDLTask\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\nval graphqlDownloadSDL by tasks.getting(GraphQLDownloadSDLTask::class) {\n    endpoint.set("http://localhost:8080/sdl")\n    headers.put("X-Custom-Header", "My-Custom-Header")\n    timeoutConfig.set(TimeoutConfiguration(connect = 10_000, read = 30_000))\n}\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n    packageName.set("com.example.generated")\n    schemaFile.set(graphqlDownloadSDL.outputFile)\n    // optional\n    allowDeprecatedFields.set(true)\n    customScalars.add(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MyQuery.graphql")\n    serializer.set(GraphQLSerializer.KOTLINX)\n\n    dependsOn("graphqlDownloadSDL")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\n\nplugins {\n    id \'org.jetbrains.kotlin.plugin.serialization\' version \'$kotlinVersion\'\n}\n\ngraphql {\n    client {\n        sdlEndpoint = "http://localhost:8080/sdl"\n        packageName = "com.example.generated"\n        // optional configuration\n        allowDeprecatedFields = true\n        customScalars = [new GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter")]\n        headers = ["X-Custom-Header" : "My-Custom-Header"]\n        queryFiles = [file("${project.projectDir}/src/main/resources/queries/MyQuery.graphql")]\n        serializer = GraphQLSerializer.KOTLINX\n        timeout { t ->\n            t.connect = 10000\n            t.read = 30000\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.config.TimeoutConfiguration\n\nplugins {\n    id \'org.jetbrains.kotlin.plugin.serialization\' version \'$kotlinVersion\'\n}\n\ngraphqlDownloadSDL {\n    endpoint = "http://localhost:8080/sdl"\n    headers["X-Custom-Header"] = "My-Custom-Header"\n    timeoutConfig = new TimeoutConfiguration(10000, 30000)\n}\ngraphqlGenerateClient {\n    packageName = "com.example.generated"\n    schemaFile = graphqlDownloadSDL.outputFile\n    // optional\n    allowDeprecatedFields = true\n    customScalars.add(new GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MyQuery.graphql")\n    serializer = GraphQLSerializer.KOTLINX\n\n    dependsOn graphqlDownloadSDL\n}\n')))),(0,r.kt)("h2",{id:"generating-multiple-clients"},"Generating Multiple Clients"),(0,r.kt)("p",null,"GraphQL Kotlin Gradle Plugin registers tasks for generation of a client queries targeting single GraphQL endpoint. You\ncan generate queries targeting additional endpoints by explicitly creating and configuring additional tasks."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLDownloadSDLTask\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlDownloadSDL by tasks.getting(GraphQLDownloadSDLTask::class) {\n    endpoint.set("http://localhost:8080/sdl")\n}\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n    packageName.set("com.example.generated.first")\n    schemaFile.set(graphqlDownloadSDL.outputFile)\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MyFirstQuery.graphql")\n    dependsOn("graphqlDownloadSDL")\n}\n\nval graphqlDownloadOtherSDL by tasks.creating(GraphQLDownloadSDLTask::class) {\n    endpoint.set("http://localhost:8081/sdl")\n}\nval graphqlGenerateOtherClient by tasks.creating(GraphQLGenerateClientTask::class) {\n    packageName.set("com.example.generated.second")\n    schemaFile.set(graphqlDownloadOtherSDL.outputFile)\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MySecondQuery.graphql")\n    dependsOn("graphqlDownloadOtherSDL")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLDownloadSDLTask\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\ngraphqlDownloadSDL {\n    endpoint = "http://localhost:8080/sdl"\n}\ngraphqlGenerateClient {\n    packageName = "com.example.generated.first"\n    schemaFile = graphqlDownloadSDL.outputFile\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MyFirstQuery.graphql")\n\n    dependsOn graphqlDownloadSDL\n}\n\ntask graphqlDownloadOtherSDL(type: GraphQLDownloadSDLTask) {\n    endpoint = "http://localhost:8081/sdl"\n}\ntask graphqlGenerateOtherClient(type: GraphQLGenerateClientTask) {\n    packageName = "com.other.generated.second"\n    schemaFile = graphqlDownloadOtherSDL.outputFile\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MySecondQuery.graphql")\n\n    dependsOn graphqlDownloadOtherSDL\n}\n')))),(0,r.kt)("h2",{id:"generating-sdl-example"},"Generating SDL Example"),(0,r.kt)("p",null,"GraphQL schema can be generated directly from your source code using reflections. ",(0,r.kt)("inlineCode",{parentName:"p"},"graphqlGenerateSDL")," will scan your\nclasspath looking for classes implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Mutation")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscription")," marker interfaces and then generates the\ncorresponding GraphQL schema using ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and default ",(0,r.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks"),". In order to\nlimit the amount of packages to scan, this task requires users to provide a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," that can contain GraphQL\ntypes."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ngraphql {\n  schema {\n    packages = listOf("com.example")\n  }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following task definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateSDLTask\n\nval graphqlGenerateSDL by tasks.getting(GraphQLGenerateSDLTask::class) {\n    packages.set(listOf("com.example"))\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\ngraphql {\n  schema {\n    packages = ["com.example"]\n  }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following task definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlGenerateSDL {\n    packages = ["com.example"]\n}\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This task does not automatically configure itself to be part of your build lifecycle. You will need to explicitly\ninvoke it OR configure it as a dependency of some other task.")),(0,r.kt)("h2",{id:"generating-sdl-with-custom-hooks-provider-example"},"Generating SDL with Custom Hooks Provider Example"),(0,r.kt)("p",null,"Plugin will default to use ",(0,r.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks")," to generate target GraphQL schema. If your project uses custom hooks\nor needs to generate the federated GraphQL schema, you will need to provide an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider"),"\nservice provider that will be used to create an instance of your custom hooks."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"graphqlGenerateSDL")," utilizes ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nmechanism to dynamically load available ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," service providers from the classpath. Service provider\ncan be provided as part of your project, included in one of your project dependencies or through explicitly provided artifact.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/plugins/hooks-provider"},"Schema Generator Hooks Provider")," for additional details on how to create custom hooks service provider.\nConfiguration below shows how to configure GraphQL Kotlin plugin with explicitly provided artifact to generate federated\nGraphQL schema."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ngraphql {\n  schema {\n    packages = listOf("com.example")\n  }\n}\n\ndependencies {\n    graphqlSDL("com.expediagroup:graphql-kotlin-federated-hooks-provider:$graphQLKotlinVersion")\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following task definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateSDLTask\n\nval graphqlGenerateSDL by tasks.getting(GraphQLGenerateSDLTask::class) {\n    packages.set(listOf("com.example"))\n}\n\ndependencies {\n    graphqlSDL("com.expediagroup:graphql-kotlin-federated-hooks-provider:$graphQLKotlinVersion")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\ngraphql {\n  schema {\n    packages = ["com.example"]\n  }\n}\n\ndependencies {\n    graphqlSDL "com.expediagroup:graphql-kotlin-federated-hooks-provider:$DEFAULT_PLUGIN_VERSION"\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following task definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlGenerateSDL {\n    packages = ["com.example"]\n}\n\ndependencies {\n    graphqlSDL "com.expediagroup:graphql-kotlin-federated-hooks-provider:$DEFAULT_PLUGIN_VERSION"\n}\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This task does not automatically configure itself to be part of your build lifecycle. You will need to explicitly\ninvoke it OR configure it as a dependency of some other task.")))}h.isMDXComponent=!0}}]);