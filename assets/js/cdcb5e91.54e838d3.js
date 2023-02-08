"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1595],{9037:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),r=(t(8561),["components"]),l={id:"apollo-federation",title:"Apollo Federation",original_id:"apollo-federation"},s=void 0,d={unversionedId:"federated/apollo-federation",id:"version-3.x.x/federated/apollo-federation",title:"Apollo Federation",description:"In many cases, exposing single GraphQL API that exposes unified view of all the available data provides tremendous value",source:"@site/versioned_docs/version-3.x.x/federated/apollo-federation.md",sourceDirName:"federated",slug:"/federated/apollo-federation",permalink:"/graphql-kotlin/docs/3.x.x/federated/apollo-federation",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/federated/apollo-federation.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1675875061,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"apollo-federation",title:"Apollo Federation",original_id:"apollo-federation"},sidebar:"version-3.x.x/docs",previous:{title:"Introspection",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/introspection"},next:{title:"Federated Schemas",permalink:"/graphql-kotlin/docs/3.x.x/federated/federated-schemas"}},p={},c=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>toFederatedSchema</code>",id:"tofederatedschema",level:3},{value:"Example",id:"example",level:2}],h={toc:c};function m(e){var a=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In many cases, exposing single GraphQL API that exposes unified view of all the available data provides tremendous value\nto their clients. As the underlying graph scales, managing single monolithic GraphQL server might become less and less\nfeasible making it much harder to manage and leading to unnecessary bottlenecks. Migrating towards federated model with\nan API gateway and a number of smaller GraphQL services behind it alleviates some of those problems and allows teams to\nscale their graphs more easily."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/"},"Apollo Federation")," is an architecture for\ncomposing multiple GraphQL services into a single graph. Federated schemas rely on a number of custom directives to\ninstrument the behavior of the underlying graph and convey the relationships between different schema types. Each individual\nGraphQL server generates a valid GraphQL schema and can be run independently. This is in contrast with traditional schema\nstitching approach where relationships between individual services, i.e. linking configuration, is configured at the GraphQL\nGateway level."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Using a JVM dependency manager, link ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," to your project."),(0,i.kt)("p",null,"With Maven:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-federation</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n\n")),(0,i.kt)("p",null,"With Gradle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nimplementation("com.expediagroup", "graphql-kotlin-federation", latestVersion)\n\n')),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," build on top of ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and adds a few extra methods and class to use to generate federation\ncompliant schemas."),(0,i.kt)("h3",{id:"tofederatedschema"},(0,i.kt)("inlineCode",{parentName:"h3"},"toFederatedSchema")),(0,i.kt)("p",null,"Just like the basic ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/schema-generator-getting-started"},"toSchema"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"toFederatedSchema")," accepts four parameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mutations")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"subscriptions"),".\nThe difference is that the ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," class is of type ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/FederatedSchemaGeneratorConfig.kt"},"FederatedSchemaGeneratorConfig"),".\nThis class extends the ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config"},"base configuration class")," and adds some default logic. You can override the logic if needed, but do so with caution as you may no longer generate a spec compliant schema."),(0,i.kt)("p",null,"You can see the definition for ",(0,i.kt)("inlineCode",{parentName:"p"},"toFederatedSchema")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/toFederatedSchema.kt"},"in the\nsource")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n@KeyDirective(fields = FieldSet("id"))\ndata class User(\n  val id: ID,\n  val name: String\n)\n\nclass Query {\n  fun getUsers(): List<User> = getUsersFromDB()\n}\n\nval config = FederatedSchemaGeneratorConfig(\n  supportedPackages = "com.example"\n)\n\ntoFederatedSchema(\n  config = config,\n  queries = listOf(TopLevelObject(Query()))\n)\n\n')),(0,i.kt)("p",null,"will generate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'\ntype Query {\n getUsers: [User!]!\n}\n\ntype User @key(fields : "id") {\n id: ID!\n name: String!\n}\n\n')))}m.isMDXComponent=!0}}]);