"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8457],{4689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>h});var a=r(7462),n=r(3366),s=(r(7294),r(3905)),o=(r(8561),["components"]),i={id:"graphql-request-handler",title:"GraphQLRequestHandler"},l=void 0,p={unversionedId:"server/graphql-request-handler",id:"version-6.x.x/server/graphql-request-handler",title:"GraphQLRequestHandler",description:"The GraphQLRequestHandler is an open and extendable class that contains the basic logic to get a GraphQLResponse.",source:"@site/versioned_docs/version-6.x.x/server/graphql-request-handler.md",sourceDirName:"server",slug:"/server/graphql-request-handler",permalink:"/graphql-kotlin/docs/server/graphql-request-handler",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/server/graphql-request-handler.md",tags:[],version:"6.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1675875061,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"graphql-request-handler",title:"GraphQLRequestHandler"},sidebar:"docs",previous:{title:"GraphQLContextFactory",permalink:"/graphql-kotlin/docs/server/graphql-context-factory"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/server/server-subscriptions"}},d={},h=[],c={toc:h};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLRequestHandler")," is an open and extendable class that contains the basic logic to get a ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLResponse"),"."),(0,s.kt)("p",null,"It requires a ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," and a ",(0,s.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/data-loader/"},"KotlinDataLoaderRegistryFactory")," in the constructor.\nFor each request, it accepts a ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLRequest")," and an optional ",(0,s.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/graphql-context-factory"},"GraphQLContext"),",\nand calls the ",(0,s.kt)("inlineCode",{parentName:"p"},"KotlinDataLoaderRegistryFactory")," to generate a new ",(0,s.kt)("inlineCode",{parentName:"p"},"KotlinDataLoaderRegistry"),". Then all of these objects are sent to the schema for\nexecution and the result is mapped to a ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLResponse"),"."),(0,s.kt)("p",null,"There shouldn't be much need to change this class but if you wanted to add custom logic\nor logging it is possible to override it or just create your own."))}u.isMDXComponent=!0}}]);