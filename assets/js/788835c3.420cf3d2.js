"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1694],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(v,i(i({ref:n},u),{},{components:t})):a.createElement(v,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(86010);const l="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),r=t(67294),l=t(86010),i=t(72389),o=t(67392),s=t(7094),p=t(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var n,t,i=e.lazy,d=e.block,m=e.defaultValue,v=e.values,f=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,o.l)(h,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(n=null!=m?m:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:g[0].props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var I=(0,s.U)(),N=I.tabGroupChoices,S=I.setTabGroupChoices,C=(0,r.useState)(b),U=C[0],w=C[1],D=[],x=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var O=N[f];null!=O&&O!==U&&h.some((function(e){return e.value===O}))&&w(O)}var z=function(e){var n=e.currentTarget,t=D.indexOf(n),a=h[t].value;a!==U&&(x(n),w(a),null!=f&&S(f,String(a)))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=D.indexOf(e.currentTarget)+1;t=null!=(a=D[r])?a:D[0];break;case"ArrowLeft":var l,i=D.indexOf(e.currentTarget)-1;t=null!=(l=D[i])?l:D[D.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},h.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:U===n?0:-1,"aria-selected":U===n,key:n,ref:function(e){return D.push(e)},onKeyDown:j,onFocus:z,onClick:z},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":U===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===U}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==U})}))))}function m(e){var n=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},84297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=t(65488),o=t(85162),s=["components"],p={id:"client-features",title:"Client Features"},u=void 0,c={unversionedId:"client/client-features",id:"client/client-features",title:"Client Features",description:"Jackson and Kotlinx Serialization Support",source:"@site/docs/client/client-features.mdx",sourceDirName:"client",slug:"/client/client-features",permalink:"/graphql-kotlin/docs/client/client-features",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/client/client-features.mdx",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1670127400,formattedLastUpdatedAt:"Dec 4, 2022",frontMatter:{id:"client-features",title:"Client Features"},sidebar:"docs",previous:{title:"Client Overview",permalink:"/graphql-kotlin/docs/client/client-overview"},next:{title:"Client Customization",permalink:"/graphql-kotlin/docs/client/client-customization"}},d={},m=[{value:"Jackson and Kotlinx Serialization Support",id:"jackson-and-kotlinx-serialization-support",level:2},{value:"Polymorphic Types Support",id:"polymorphic-types-support",level:2},{value:"Custom Scalar Support",id:"custom-scalar-support",level:2},{value:"Default Enum Values",id:"default-enum-values",level:2},{value:"Auto Generated Documentation",id:"auto-generated-documentation",level:2},{value:"Native Support for Coroutines",id:"native-support-for-coroutines",level:2},{value:"Batch Operation Support",id:"batch-operation-support",level:2},{value:"Optional Input Support",id:"optional-input-support",level:2}],v={toc:m};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"jackson-and-kotlinx-serialization-support"},"Jackson and Kotlinx Serialization Support"),(0,l.kt)("p",null,"GraphQL Kotlin supports generation of client data models that are compatible with both ",(0,l.kt)("inlineCode",{parentName:"p"},"Jackson")," (default) and ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization"),"\nformats. Build plugins and ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-client")," default to use ",(0,l.kt)("inlineCode",{parentName:"p"},"Jackson")," whereas ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-ktor-client"),"\ndefaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization"),"."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/client/client-serialization"},"client serialization documentation")," for additional details."),(0,l.kt)("h2",{id:"polymorphic-types-support"},"Polymorphic Types Support"),(0,l.kt)("p",null,"GraphQL supports polymorphic types through unions and interfaces which can be represented in Kotlin as marker and\nregular interfaces. In order to ensure generated objects are not empty, GraphQL queries referencing polymorphic types\nwill automatically generate fallback implementations that will be used if there is no match. Polymorphic queries have to\nexplicitly request ",(0,l.kt)("inlineCode",{parentName:"p"},"__typename")," field as it is used by serializers to correctly distinguish between different implementations."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx-serialization")," currently does not provide mechanism to automatically register polymorphic fallbacks. Fallbacks\nhave to be explicitly configured when creating your ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClientKotlinxSerializer"),"."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val serializerWithFallback = GraphQLClientKotlinxSerializer(jsonBuilder = {\n    serializersModule = SerializersModule {\n        polymorphic(BasicInterface::class) {\n            defaultDeserializer { DefaultBasicInterfaceImplementation.serializer() }\n        }\n    }\n})\nval client = GraphQLKtorClient(url = URL("http://localhost:8080/graphql"), serializer = serializerWithFallback)\n')),(0,l.kt)("p",{parentName:"admonition"},"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization/issues/1575"},"https://github.com/Kotlin/kotlinx.serialization/issues/1575")," for details.")),(0,l.kt)("p",null,"Given example schema"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  interfaceQuery: BasicInterface!\n}\n\ninterface BasicInterface {\n  id: Int!\n  name: String!\n}\n\ntype FirstInterfaceImplementation implements BasicInterface {\n  id: Int!\n  intValue: Int!\n  name: String!\n}\n\ntype SecondInterfaceImplementation implements BasicInterface {\n  floatValue: Float!\n  id: Int!\n  name: String!\n}\n")),(0,l.kt)("p",null,"We can query interface field as"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query PolymorphicQuery {\n  interfaceQuery {\n    __typename\n    id\n    name\n    ... on FirstInterfaceImplementation {\n      intValue\n    }\n    ... on SecondInterfaceImplementation {\n      floatValue\n    }\n  }\n}\n")),(0,l.kt)("p",null,"Which will generate following data models"),(0,l.kt)(i.Z,{defaultValue:"jackson",values:[{label:"Jackson",value:"jackson"},{label:"kotlinx.serialization",value:"kotlinx"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"jackson",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Generated\n@JsonTypeInfo(\n  use = JsonTypeInfo.Id.NAME,\n  include = JsonTypeInfo.As.PROPERTY,\n  property = "__typename",\n  defaultImpl = DefaultBasicInterfaceImplementation::class\n)\n@JsonSubTypes(value = [com.fasterxml.jackson.annotation.JsonSubTypes.Type(value =\n    FirstInterfaceImplementation::class,\n    name="FirstInterfaceImplementation"),com.fasterxml.jackson.annotation.JsonSubTypes.Type(value\n    = SecondInterfaceImplementation::class, name="SecondInterfaceImplementation")])\ninterface BasicInterface {\n  abstract val id: Int\n  abstract val name: String\n}\n\n@Generated\ndata class FirstInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val intValue: Int\n) : BasicInterface\n\n@Generated\ndata class SecondInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val floatValue: Float\n) : BasicInterface\n\n@Generated\ndata class DefaultBasicInterfaceImplementation(\n  override val id: Int,\n  override val name: String\n) : BasicInterface\n'))),(0,l.kt)(o.Z,{value:"kotlinx",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Generated\n@Serializable\nsealed class BasicInterface {\n  abstract val id: Int\n  abstract val name: String\n}\n\n@Generated\n@Serializable\n@SerialName(value = "FirstInterfaceImplementation")\ndata class FirstInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val intValue: Int\n) : BasicInterface()\n\n@Generated\n@Serializable\n@SerialName(value = "SecondInterfaceImplementation")\ndata class SecondInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val floatValue: Float\n) : BasicInterface()\n\n@Generated\n@Serializable\ndata class DefaultBasicInterfaceImplementation(\n  override val id: String\n  override val name: String\n) : BasicInterface()\n')))),(0,l.kt)("h2",{id:"custom-scalar-support"},"Custom Scalar Support"),(0,l.kt)("p",null,"By default, custom GraphQL scalars are serialized and ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/type-aliases.html"},"type-aliased"),"\nto a String. GraphQL Kotlin plugins also support custom serialization based on provided configuration."),(0,l.kt)("p",null,"In order to automatically convert between custom GraphQL ",(0,l.kt)("inlineCode",{parentName:"p"},"UUID")," scalar type and ",(0,l.kt)("inlineCode",{parentName:"p"},"java.util.UUID"),", we first need to create\nour custom ",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarConverter"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"package com.example.client\n\nimport com.expediagroup.graphql.client.converter.ScalarConverter\nimport java.util.UUID\n\nclass UUIDScalarConverter : ScalarConverter<UUID> {\n    override fun toScalar(rawValue: Any): UUID = UUID.fromString(rawValue.toString())\n    override fun toJson(value: UUID): Any = value.toString()\n}\n")),(0,l.kt)("p",null,"And then configure build plugin by specifying"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Custom GraphQL scalar name"),(0,l.kt)("li",{parentName:"ul"},"Target JVM class name"),(0,l.kt)("li",{parentName:"ul"},"Converter that provides logic to map between GraphQL and Kotlin type")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'graphql {\n    packageName = "com.example.generated"\n    endpoint = "http://localhost:8080/graphql"\n    customScalars = listOf(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n}\n')),(0,l.kt)("p",null,"Custom scalar fields will then be automatically converted to a ",(0,l.kt)("inlineCode",{parentName:"p"},"java.util.UUID")," type using appropriate converter/serializer."),(0,l.kt)(i.Z,{defaultValue:"jackson",values:[{label:"Jackson",value:"jackson"},{label:"kotlinx.serialization",value:"kotlinx"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"jackson",mdxType:"TabItem"},(0,l.kt)("p",null,"Following converters will be generated under ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.generated.scalars")," package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Generated\npublic class AnyToUUIDConverter : StdConverter<Any, UUID>() {\n  private val converter: UUIDScalarConverter = UUIDScalarConverter()\n\n  public override fun convert(`value`: Any): UUID = converter.toScalar(value)\n}\n\n@Generated\npublic class UUIDToAnyConverter : StdConverter<UUID, Any>() {\n  private val converter: UUIDScalarConverter = UUIDScalarConverter()\n\n  public override fun convert(`value`: UUID): Any = converter.toJson(value)\n}\n")),(0,l.kt)("p",null,"Custom scalars fields will then be annotated with Jackson annotations referencing the above converters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Generated\npublic data class Result(\n  @JsonSerialize(converter = UUIDToAnyConverter::class)\n  @JsonDeserialize(converter = AnyToUUIDConverter::class)\n  public val custom: UUID,\n  @JsonSerialize(contentConverter = UUIDToAnyConverter::class)\n  @JsonDeserialize(contentConverter = AnyToUUIDConverter::class)\n  public val customList: List<UUID>\n)\n"))),(0,l.kt)(o.Z,{value:"kotlinx",mdxType:"TabItem"},(0,l.kt)("p",null,"Following serializer will be generated under ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.generated.scalars")," package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Generated\npublic object UUIDSerializer : KSerializer<UUID> {\n  private val converter: UUIDScalarConverter = UUIDScalarConverter()\n\n  public override val descriptor: SerialDescriptor = PrimitiveSerialDescriptor("UUID", STRING)\n\n  public override fun serialize(encoder: Encoder, `value`: UUID): Unit {\n    val encoded = converter.toJson(value)\n    encoder.encodeString(encoded.toString())\n  }\n\n  public override fun deserialize(decoder: Decoder): UUID {\n    val jsonDecoder = decoder as JsonDecoder\n    val element = jsonDecoder.decodeJsonElement()\n    val rawContent = element.jsonPrimitive.content\n    return converter.toScalar(rawContent)\n  }\n}\n')),(0,l.kt)("p",null,"Custom scalars fields will then be annotated with ",(0,l.kt)("inlineCode",{parentName:"p"},"@Serializable")," annotation referencing the above serializer."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Generated\n@Serializable\npublic data class Result(\n  @Serializable(with = UUIDSerializer::class)\n  public val custom: UUID,\n  public val customList: List<@Serializable(with = UUIDSerializer::class) UUID>\n)\n")))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/gradle-plugin-tasks"},"Gradle")," and ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/maven-plugin-goals"},"Maven")," plugin documentation for additional details."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"While custom scalars are most commonly represented using some primitive values (e.g. serializing UUID as String), it is\npossible to use arbitrary objects representation as custom scalar. For example Apollo Federation relies on ",(0,l.kt)("inlineCode",{parentName:"p"},"_Any")," scalar\nto accept federated entity representations which is a JSON map containing ",(0,l.kt)("inlineCode",{parentName:"p"},"__typename")," information and a number of additional\nfields used to uniquely identify the target object."),(0,l.kt)(i.Z,{defaultValue:"jackson",values:[{label:"Jackson",value:"jackson"},{label:"kotlinx.serialization",value:"kotlinx"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"jackson",mdxType:"TabItem"},(0,l.kt)("p",{parentName:"admonition"},"Jackson uses reflection to automatically serialize the objects. In order to rely on this behavior for custom scalars,\nwe simply need to implement a pass-through converter."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class AnyScalarConverter : ScalarConverter<Any> {\n    override fun toScalar(rawValue: Any): Any = rawValue\n    override fun toJson(value: Any): Any = value\n}\n")),(0,l.kt)("p",{parentName:"admonition"},"This will allow us to pass arbitrary objects as custom scalar inputs. Given following Federation type and ",(0,l.kt)("inlineCode",{parentName:"p"},"_entities")," query"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},'type Product @key(fields : "id") {\n    id: String!\n    name: String!\n}\n\nquery EntitiesQuery($representations: [_Any!]!) {\n    _entities(representations: $representations) {\n        __typename\n        ...on Product { name }\n        }\n    }\n}\n')),(0,l.kt)("p",{parentName:"admonition"},"We can create corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"ProductEntityRepresentation")," data class and use it in our generated query."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class ProductEntityRepresentation(val id: String) {\n    val __typename: String = "Product"\n}\n\nval entityData = client.execute(EntitiesQuery(variables = EntitiesQuery.Variables(representations = listOf(ProductEntityRepresentation(id = "apollo-federation")))))\n'))),(0,l.kt)(o.Z,{value:"kotlinx",mdxType:"TabItem"},(0,l.kt)("p",{parentName:"admonition"},"Using kotlinx-serialization we can use ",(0,l.kt)("inlineCode",{parentName:"p"},"JsonObject")," to represent arbitrary objects as custom scalars."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class AnyScalarConverter : ScalarConverter<JsonObject> {\n    override fun toScalar(rawValue: Any): JsonObject = Json.parseToJsonElement(rawValue.toString()).jsonObject\n    override fun toJson(value: JsonObject): Any = value\n}\n")),(0,l.kt)("p",{parentName:"admonition"},"This will allow us to pass arbitrary objects as custom scalar inputs. Given following Federation type and ",(0,l.kt)("inlineCode",{parentName:"p"},"_entities")," query"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},'type Product @key(fields : "id") {\n    id: String!\n    name: String!\n}\n\nquery EntitiesQuery($representations: [_Any!]!) {\n    _entities(representations: $representations) {\n        __typename\n        ...on Product { name }\n        }\n    }\n}\n')),(0,l.kt)("p",{parentName:"admonition"},"We can then represent product entity representation as ",(0,l.kt)("inlineCode",{parentName:"p"},"JsonObject")," and use it in our generated query."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val entity = Json.decodeFromString<JsonObject>(\n    """\n    |{\n    |  "__typename": "Product",\n    |  "id": "apollo-federation"\n    |}\n    """.trimMargin()\n)\n\nval entityData = client.execute(EntitiesQuery(variables = EntitiesQuery.Variables(representations = listOf(entity))))\n'))))),(0,l.kt)("h2",{id:"default-enum-values"},"Default Enum Values"),(0,l.kt)("p",null,"Enums represent predefined set of values. Adding additional enum values could be a potentially breaking change as your\nclients may not be able to process it. GraphQL Kotlin Client automatically adds default ",(0,l.kt)("inlineCode",{parentName:"p"},"__UNKNOWN_VALUE")," to all generated\nenums as a catch all safeguard for handling new enum values."),(0,l.kt)("h2",{id:"auto-generated-documentation"},"Auto Generated Documentation"),(0,l.kt)("p",null,"GraphQL Kotlin build plugins automatically pull in GraphQL descriptions of the queried fields from the target schema and\nadd it as KDoc to corresponding data models."),(0,l.kt)("p",null,"Given simple GraphQL object definition"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'"Some basic description"\ntype BasicObject {\n  "Unique identifier"\n  id: Int!\n  "Object name"\n  name: String!\n}\n')),(0,l.kt)("p",null,"Will result in a corresponding auto generated data class"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"/**\n * Some basic description\n */\n @Generated\ndata class BasicObject(\n  /**\n   * Unique identifier\n   */\n  val id: Int,\n  /**\n   * Object name\n   */\n  val name: String\n)\n")),(0,l.kt)("h2",{id:"native-support-for-coroutines"},"Native Support for Coroutines"),(0,l.kt)("p",null,"GraphQL Kotlin Client is a generic interface that exposes ",(0,l.kt)("inlineCode",{parentName:"p"},"execute")," methods that will suspend your GraphQL operation until\nit gets a response back without blocking the underlying thread. Reference Ktor and Spring WebClient based implementations\noffer fully asynchronous communication through Kotlin coroutines. In order to fetch data asynchronously you should wrap\nyour client execution in ",(0,l.kt)("inlineCode",{parentName:"p"},"launch")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"async")," coroutine builder and explicitly ",(0,l.kt)("inlineCode",{parentName:"p"},"await")," for their results."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/coroutines-overview.html"},"Kotlin coroutines documentation")," for additional details."),(0,l.kt)("h2",{id:"batch-operation-support"},"Batch Operation Support"),(0,l.kt)("p",null,"GraphQL Kotlin Clients provide out of the box support for batching multiple client operations into a single GraphQL request.\nBatch requests are sent as an array of individual GraphQL requests and clients expect the server to respond with a corresponding\narray of GraphQL responses. Each response is then deserialized to a corresponding result type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLKtorClient(url = URL("http://localhost:8080/graphql"))\nval firstQuery = FirstQuery(variables = FirstQuery.Variables(foo = "bar"))\nval secondQuery = SecondQuery(variables = SecondQuery.Variables(foo = "baz"))\n\nval results: List<GraphQLResponse<*>> = client.execute(listOf(firstQuery, secondQuery))\n')),(0,l.kt)("h2",{id:"optional-input-support"},"Optional Input Support"),(0,l.kt)("p",null,"In the GraphQL world, input types can be optional which means that the client can specify a value, specify a ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," value\nOR don't specify any value. This is in contrast with the JVM world where objects can either have some specific value or\ndon't have any value (i.e. are ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"). By default, GraphQL Kotlin Client treats ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," Kotlin values as unspecified, which\nmeans they will skip all ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," values when serializing the request, e.g. given following query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query OptionalInputQuery($optionalValue: String) {\n  optional(value: $optionalValue)\n")),(0,l.kt)("p",null,"GraphQL Kotlin plugins will generate corresponding POJO that defines ",(0,l.kt)("inlineCode",{parentName:"p"},"Variables")," as"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"public data class Variables(\n  public val optionalValue: String? = null\n)\n")),(0,l.kt)("p",null,"Regardless whether we specify ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalValue")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," or rely on the default value, this field won't be serialized,\ni.e. variables will be serialized as an empty JSON object ",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,l.kt)("p",null,"By specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"useOptionalInputWrapper = true")," plugin configuration option, we can opt-in to a behavior that supports\nthree states - defined, ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," or undefined. Generated code will then use ",(0,l.kt)("inlineCode",{parentName:"p"},"OptionalInput")," wrapper to represent those states.\nSee ",(0,l.kt)("a",{parentName:"p",href:"../plugins/gradle-plugin-tasks"},"Gradle")," and ",(0,l.kt)("a",{parentName:"p",href:"../plugins/maven-plugin-goals"},"Maven")," plugin for configuration details."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'public data class Variables(\n  public val optionalValue: OptionalInput<String> = OptionalInput.Undefined\n)\n\n// usage\n// - same behavior as default null, serialized as {}\nval undefinedVariables = Variables(optionalValue = OptionalInput.Undefined)\n\n// - serialized as {"optionalValue": null}\nval nullVariables = Variables(optionalValue = OptionalInput.Defined(null))\n\n// - serialized as {"optionalValue": "foo"}\nval definedVariables = Variables(optionalValue = OptionalInput.Defined("foo")\n')))}f.isMDXComponent=!0}}]);