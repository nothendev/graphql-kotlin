"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[703],{4205:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=(r(8561),["components"]),p={id:"spring-graphql-context",title:"Generating GraphQL Context"},s=void 0,l={unversionedId:"server/spring-server/spring-graphql-context",id:"server/spring-server/spring-graphql-context",title:"Generating GraphQL Context",description:"graphql-kotlin-spring-server provides a Spring specific implementation of GraphQLContextFactory",source:"@site/docs/server/spring-server/spring-graphql-context.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-graphql-context",permalink:"/graphql-kotlin/docs/7.x.x/server/spring-server/spring-graphql-context",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/spring-server/spring-graphql-context.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1675875061,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"spring-graphql-context",title:"Generating GraphQL Context"},sidebar:"docs",previous:{title:"Writing Schemas with Spring",permalink:"/graphql-kotlin/docs/7.x.x/server/spring-server/spring-schema"},next:{title:"HTTP Request and Response",permalink:"/graphql-kotlin/docs/7.x.x/server/spring-server/spring-http-request-response"}},c={},d=[{value:"Federated Context",id:"federated-context",level:2}],g={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides a Spring specific implementation of ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/server/graphql-context-factory"},"GraphQLContextFactory"),"\nand the context."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SpringGraphQLContextFactory")," - Generates GraphQL context map with federated tracing information per request")),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),", you should extend ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultSpringGraphQLContextFactory")," to automatically\nsupport federated tracing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Component\nclass MyGraphQLContextFactory : DefaultSpringGraphQLContextFactory() {\n    override suspend fun generateContext(request: ServerRequest): GraphQLContext =\n        super.generateContext(request) + mapOf(\n            "myCustomValue" to (request.headers().firstHeader("MyHeader") ?: "defaultContext")\n        )\n}\n')),(0,o.kt)("p",null,"Once your application is configured to build your custom GraphQL context, you can then access it through a data fetching\nenvironment argument. While executing the query, data fetching environment will be automatically injected to the function input arguments.\nThis argument will not appear in the GraphQL schema."),(0,o.kt)("p",null,"For more details, see the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/execution/contextual-data"},"Contextual Data Documentation"),"."),(0,o.kt)("h2",{id:"federated-context"},"Federated Context"),(0,o.kt)("p",null,"If you need ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/federation/federation-tracing"},"federation tracing support"),", you can set the appropriate ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/server/spring-server/spring-properties"},"configuration properties"),".\nThe provided ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultSpringGraphQLContextFactory")," populates the required information for federated tracing, so as long as\nyou extend this context class you will maintain feature support."))}u.isMDXComponent=!0}}]);