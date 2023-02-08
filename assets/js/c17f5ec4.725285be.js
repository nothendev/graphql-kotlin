"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4913],{5237:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>h,toc:()=>p});var n=t(7462),o=t(3366),r=(t(7294),t(3905)),i=(t(8561),["components"]),s={id:"graphql-java-comparison",title:"GraphQL Java Comparison"},l=void 0,h={unversionedId:"graphql-java-comparison",id:"version-3.x.x/graphql-java-comparison",title:"GraphQL Java Comparison",description:"graphql-java is one of the most popular JVM based GraphQL implemenations. GraphQL Kotlin is",source:"@site/versioned_docs/version-3.x.x/graphql-java-comparison.md",sourceDirName:".",slug:"/graphql-java-comparison",permalink:"/graphql-kotlin/docs/3.x.x/graphql-java-comparison",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/graphql-java-comparison.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1675875061,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"graphql-java-comparison",title:"GraphQL Java Comparison"}},c={},p=[{value:"GraphQL Java Schema",id:"graphql-java-schema",level:3},{value:"GraphQL Kotlin Schema",id:"graphql-kotlin-schema",level:3}],m={toc:p};function d(a){var e=a.components,t=(0,o.Z)(a,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://graphql-java.com/"},"graphql-java")," is one of the most popular JVM based GraphQL implemenations. GraphQL Kotlin is\nbuilt on top of ",(0,r.kt)("inlineCode",{parentName:"p"},"grahpql-java")," as it can be easily extended with additional functionality and this implementation\nhas been used and tested by many users."),(0,r.kt)("h3",{id:"graphql-java-schema"},"GraphQL Java Schema"),(0,r.kt)("p",null,"The most common way to create the schema in ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-java")," is to first manually write the SDL file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"\nschema {\n    query: Query\n}\n\ntype Query {\n    bookById(id: ID): Book\n}\n\ntype Book {\n    id: ID!\n    name: String!\n    pageCount: Int!\n    author: Author\n}\n\ntype Author {\n    id: ID!\n    firstName: String!\n    lastName: String!\n}\n\n")),(0,r.kt)("p",null,"Then write the runtime code that matches this schema to build the ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n// Internal DB class, not schema class\nclass Book(\n    val id: ID,\n    val name: String,\n    val totalPages: Int, // This needs to be renamed to pageCount\n    val authorId: ID // This is not in the schema\n)\n\n// Internal DB class, not schema class\nclass Author(\n    val id: ID,\n    val firstName: String,\n    val lastName: String\n)\n\nclass GraphQLDataFetchers {\n    private val books: List<Book> = booksFromDB()\n    private val authors: List<Author> = authorsFromDB()\n\n    fun getBookByIdDataFetcher() = DataFetcher { dataFetchingEnvironment ->\n        val bookId: String = dataFetchingEnvironment.getArgument("id")\n        return books.firstOrNull { it.id == bookId }\n    }\n\n    fun getAuthorDataFetcher() = DataFetcher { dataFetchingEnvironment ->\n        val book: Book = dataFetchingEnvironment.getSource() as Book\n        return authors.firstOrNull { it.id == book.authorId }\n    }\n\n    fun getPageCountDataFetcher() = DataFetcher { dataFetchingEnvironment ->\n        val book: Book = dataFetchingEnvironment.getSource() as Book\n        return book.totalPages\n    }\n}\n\nval schemaParser = SchemaParser()\nval schemaGenerator = SchemaGenerator()\nval schemaFile = loadSchema("schema.graphqls")\nval typeRegistry = schemaParser.parse(schemaFile)\nval graphQLDataFetchers = GraphQLDataFetchers()\n\nval runtimeWiring = RuntimeWiring.newRuntimeWiring()\n    .type(\n        newTypeWiring("Query")\n            .dataFetcher("bookById", graphQLDataFetchers.getBookByIdDataFetcher())\n    )\n    .type(\n        newTypeWiring("Book")\n            .dataFetcher("author", graphQLDataFetchers.getAuthorDataFetcher())\n            .dataFetcher("pageCount", graphQLDataFetchers.getPageCountDataFetcher())\n    )\n    .build()\n\n// Combine the types and runtime code together to make a schema\nval graphQLSchema: GraphQLSchema = schemaGenerator.makeExecutableSchema(typeDefinitionRegistry, runtimeWiring)\n\n')),(0,r.kt)("p",null,"This means that there are two sources of truth for your schema and changes in either have to be reflected in both locations.\nAs your schema scales to hundreds of types and many different resolvers, it can get more difficult to track what code needs to be changed if you want to add a new field,\ndeprecate or delete an existing one, or fix a bug in the resolver code."),(0,r.kt)("p",null,"These errors will hopefully be caught by your build or automated tests, but it is another layer your have to be worried about when creating your API."),(0,r.kt)("h3",{id:"graphql-kotlin-schema"},"GraphQL Kotlin Schema"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," aims to simplify this process by using Kotlin reflection to generate the schema for you.\nAll you need to do is write your schema code in a Kotlin class with public functions or properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nprivate val books: List<Book> = booksFromDB()\nprivate val authors: List<Author> = authorsFromDB()\n\nclass Query {\n    fun bookById(id: ID): Book? = books.find { it.id == id }\n}\n\nclass Book(\n    val id: ID,\n    val name: String,\n    private val totalPages: Int,\n    private val authorId: ID\n) {\n    fun author(): Author? = authors.find { it.id == authorId }\n    fun pageCount(): Int = totalPages\n}\n\nclass Author(\n    val id: ID,\n    val firstName: String,\n    val lastName: String\n)\n\nval config = SchemaGeneratorConfig(supportedPackages = "com.example")\nval queries = listOf(TopLevelObject(Query()))\nval schema: GraphQLSchema = toSchema(config, queries)\n\n')),(0,r.kt)("p",null,"This makes changes in code directly reflect to your schema and you can still produce the ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," to print and export an SDL file."))}d.isMDXComponent=!0}}]);