"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2590],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(t),d=a,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2270:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={id:"spring-schema",title:"Writing Schemas with Spring",original_id:"spring-schema"},p=void 0,l={unversionedId:"spring-server/spring-schema",id:"version-3.x.x/spring-server/spring-schema",title:"Writing Schemas with Spring",description:"In order to expose your queries, mutations and/or subscriptions in the GraphQL schema you need to create beans that",source:"@site/versioned_docs/version-3.x.x/spring-server/spring-schema.md",sourceDirName:"spring-server",slug:"/spring-server/spring-schema",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-schema",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/spring-schema.md",tags:[],version:"3.x.x",lastUpdatedBy:"Mervyn McCreight",lastUpdatedAt:1651526959,formattedLastUpdatedAt:"5/2/2022",frontMatter:{id:"spring-schema",title:"Writing Schemas with Spring",original_id:"spring-schema"},sidebar:"version-3.x.x/docs",previous:{title:"Configuration Properties",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-properties"},next:{title:"Generating GraphQL Context",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context"}},c={},u=[{value:"Spring Query Beans",id:"spring-query-beans",level:2},{value:"Spring Data Fetcher",id:"spring-data-fetcher",level:2},{value:"Spring BeanFactoryAware",id:"spring-beanfactoryaware",level:2}],g={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to expose your queries, mutations and/or subscriptions in the GraphQL schema you need to create beans that\nimplement corresponding marker interface and they will be automatically picked up by ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),"\nauto-configuration library."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass MyAwesomeQuery : Query {\n  fun myAwesomeQuery(): Widget { ... }\n}\n\n@Component\nclass MyAwesomeMutation : Mutation {\n  fun myAwesomeMutation(widget: Widget): Widget { ... }\n}\n\n@Component\nclass MyAwesomeSubscription : Subscription {\n  fun myAwesomeSubscription(): Publisher<Widget> { ... }\n}\n\ndata class Widget(val id: Int, val value: String)\n")),(0,i.kt)("p",null,"will result in a Spring Boot reactive GraphQL web application with following schema."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Query\n  mutation: Mutation\n  subscription: Subscription\n}\n\ntype Query {\n  myAwesomeQuery: Widget!\n}\n\ntype Mutation {\n  myAwesomeMutation(widget: WidgetInput!): Widget!\n}\n\ntype Subscription {\n  myAwesomeSubscription: Widget!\n}\n\ntype Widget {\n  id: Int!\n  value: String!\n}\n\ninput WidgetInput {\n  id: Int!\n  value: String!\n}\n")),(0,i.kt)("h2",{id:"spring-query-beans"},"Spring Query Beans"),(0,i.kt)("p",null,"Spring will automatically autowire dependent beans to our Spring query beans. Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/"},"Spring Documentation")," for details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass WidgetQuery(private val repository: WidgetRepository) : Query {\n    fun getWidget(id: Int): Widget = repository.findWidget(id)\n}\n")),(0,i.kt)("h2",{id:"spring-data-fetcher"},"Spring Data Fetcher"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides Spring aware data fetcher that automatically autowires Spring beans when they are\nspecified as function arguments. ",(0,i.kt)("inlineCode",{parentName:"p"},"@Autowired")," arguments should be explicitly excluded from the GraphQL schema by also\nspecifying ",(0,i.kt)("inlineCode",{parentName:"p"},"@GraphQLIgnore"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass SpringQuery : Query {\n    fun getWidget(@GraphQLIgnore @Autowired repository: WidgetRepository, id: Int): Widget = repository.findWidget(id)\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: if you are using custom data fetcher make sure that you extend ",(0,i.kt)("inlineCode",{parentName:"p"},"SpringDataFetcher")," instead of a base ",(0,i.kt)("inlineCode",{parentName:"p"},"FunctionDataFetcher"),".")),(0,i.kt)("h2",{id:"spring-beanfactoryaware"},"Spring BeanFactoryAware"),(0,i.kt)("p",null,"You can use Spring beans to wire different objects together at runtime. Instead of autowiring specific beans as properties,\nyou can also dynamically resolve beans by using bean factories. There is an example of how to set this up in the example\napp in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/TopLevelBeanFactoryQuery.kt"},"TopLevelBeanFactoryQuery.kt"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Component\nclass UsersQuery : Query, BeanFactoryAware {\n    private lateinit var beanFactory: BeanFactory\n\n    @GraphQLIgnore\n    override fun setBeanFactory(beanFactory: BeanFactory) {\n        this.beanFactory = beanFactory\n    }\n\n    fun findUser(id: String): SubQuery = beanFactory.getBean(User::class.java, id)\n}\n\n@Component\n@Scope("prototype")\nclass User @Autowired(required = false) constructor(private val userId: String) {\n\n    @Autowired\n    private lateinit var service: PhotoService\n\n    fun photos(numberOfPhotos: Int): List<Photo> = service.findPhotos(userId, numberOfPhotos)\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We have examples of these techniques implemented in Spring boot in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/NestedQueries.kt"},"example\napp"),"."))}d.isMDXComponent=!0}}]);