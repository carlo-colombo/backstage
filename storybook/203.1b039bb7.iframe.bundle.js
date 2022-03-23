(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{"../plugins/home/src/homePageComponents/RandomJoke/Actions.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return Actions}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@material-ui/core/esm/Button/Button.js"),_Context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../plugins/home/src/homePageComponents/RandomJoke/Context.tsx");var enterModule;(enterModule=__webpack_require__("../node_modules/react-hot-loader/index.js").enterModule)&&enterModule(module);const Actions=()=>{const{rerollJoke:rerollJoke}=Object(_Context__WEBPACK_IMPORTED_MODULE_2__.b)();return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.a,{variant:"contained",color:"primary",onClick:()=>rerollJoke(),__self:void 0,__source:{fileName:"/home/runner/work/backstage/backstage/plugins/home/src/homePageComponents/RandomJoke/Actions.tsx",lineNumber:25}},"Reroll")};var reactHotLoader,leaveModule;reactHotLoader=__webpack_require__("../node_modules/react-hot-loader/index.js").default,leaveModule=__webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule,reactHotLoader&&(reactHotLoader.register(Actions,"Actions","/home/runner/work/backstage/backstage/plugins/home/src/homePageComponents/RandomJoke/Actions.tsx"),leaveModule(module))}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"../plugins/home/src/homePageComponents/RandomJoke/Content.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return Content}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../plugins/home/src/homePageComponents/RandomJoke/Context.tsx");const _jsxFileName="/home/runner/work/backstage/backstage/plugins/home/src/homePageComponents/RandomJoke/Content.tsx";var enterModule;(enterModule=__webpack_require__("../node_modules/react-hot-loader/index.js").enterModule)&&enterModule(module);const Content=()=>{const{joke:joke,loading:loading}=Object(_Context__WEBPACK_IMPORTED_MODULE_1__.b)();return loading?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{__self:void 0,__source:{fileName:_jsxFileName,lineNumber:23}},"Loading..."):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{__self:void 0,__source:{fileName:_jsxFileName,lineNumber:26}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{__self:void 0,__source:{fileName:_jsxFileName,lineNumber:27}},joke.setup),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{__self:void 0,__source:{fileName:_jsxFileName,lineNumber:28}},joke.punchline))};var reactHotLoader,leaveModule;reactHotLoader=__webpack_require__("../node_modules/react-hot-loader/index.js").default,leaveModule=__webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule,reactHotLoader&&(reactHotLoader.register(Content,"Content","/home/runner/work/backstage/backstage/plugins/home/src/homePageComponents/RandomJoke/Content.tsx"),leaveModule(module))}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"../plugins/home/src/homePageComponents/RandomJoke/Context.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return ContextProvider})),__webpack_require__.d(__webpack_exports__,"b",(function(){return useRandomJoke}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var enterModule;(enterModule=__webpack_require__("../node_modules/react-hot-loader/index.js").enterModule)&&enterModule(module);const Context=Object(react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),getNewJoke=type=>fetch(`https://official-joke-api.appspot.com/jokes${"any"!==type?`/${type}`:""}/random`).then((res=>res.json())).then((data=>Array.isArray(data)?data[0]:data)),ContextProvider=({children:children,defaultCategory:defaultCategory})=>{const[loading,setLoading]=react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(!0),[joke,setJoke]=react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({setup:"",punchline:""}),[type,setType]=react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(defaultCategory||"programming"),rerollJoke=react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback((()=>{setLoading(!0),getNewJoke(type).then((newJoke=>setJoke(newJoke)))}),[type]);react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect((()=>{setLoading(!1)}),[joke]),react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect((()=>{rerollJoke()}),[rerollJoke]);const value={loading:loading,joke:joke,type:type,rerollJoke:rerollJoke,handleChangeType:newType=>{setType(newType)}};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider,{value:value,__self:void 0,__source:{fileName:"/home/runner/work/backstage/backstage/plugins/home/src/homePageComponents/RandomJoke/Context.tsx",lineNumber:86}},children)},useRandomJoke=()=>{const value=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(Context);if(void 0===value)throw new Error("useRandomJoke must be used within a RandomJokeProvider");return value};let _default;var reactHotLoader,leaveModule;_default=Context;reactHotLoader=__webpack_require__("../node_modules/react-hot-loader/index.js").default,leaveModule=__webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule,reactHotLoader&&(reactHotLoader.register(Context,"Context","/home/runner/work/backstage/backstage/plugins/home/src/homePageComponents/RandomJoke/Context.tsx"),reactHotLoader.register(getNewJoke,"getNewJoke","/home/runner/work/backstage/backstage/plugins/home/src/homePageComponents/RandomJoke/Context.tsx"),reactHotLoader.register(ContextProvider,"ContextProvider","/home/runner/work/backstage/backstage/plugins/home/src/homePageComponents/RandomJoke/Context.tsx"),reactHotLoader.register(useRandomJoke,"useRandomJoke","/home/runner/work/backstage/backstage/plugins/home/src/homePageComponents/RandomJoke/Context.tsx"),reactHotLoader.register(_default,"default","/home/runner/work/backstage/backstage/plugins/home/src/homePageComponents/RandomJoke/Context.tsx"),leaveModule(module));try{ContextProvider.displayName="ContextProvider",ContextProvider.__docgenInfo={description:"",displayName:"ContextProvider",props:{defaultCategory:{defaultValue:null,description:"",name:"defaultCategory",required:!1,type:{name:"enum",value:[{value:'"any"'},{value:'"programming"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/homePageComponents/RandomJoke/Context.tsx#ContextProvider"]={docgenInfo:ContextProvider.__docgenInfo,name:"ContextProvider",path:"../plugins/home/src/homePageComponents/RandomJoke/Context.tsx#ContextProvider"})}catch(__react_docgen_typescript_loader_error){}}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"../plugins/home/src/homePageComponents/RandomJoke/Settings.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return Settings}));var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@material-ui/core/esm/FormControl/FormControl.js"),_material_ui_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@material-ui/core/esm/FormLabel/FormLabel.js"),_material_ui_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/@material-ui/core/esm/RadioGroup/RadioGroup.js"),_material_ui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js"),_material_ui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/@material-ui/core/esm/Radio/Radio.js"),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Context__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../plugins/home/src/homePageComponents/RandomJoke/Context.tsx"),lodash_upperFirst__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../node_modules/lodash/upperFirst.js"),lodash_upperFirst__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(lodash_upperFirst__WEBPACK_IMPORTED_MODULE_7__);const _jsxFileName="/home/runner/work/backstage/backstage/plugins/home/src/homePageComponents/RandomJoke/Settings.tsx";var enterModule;(enterModule=__webpack_require__("../node_modules/react-hot-loader/index.js").enterModule)&&enterModule(module);const Settings=()=>{const{type:type,handleChangeType:handleChangeType}=Object(_Context__WEBPACK_IMPORTED_MODULE_6__.b)();return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.a,{component:"fieldset",__self:void 0,__source:{fileName:_jsxFileName,lineNumber:31}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.a,{component:"legend",__self:void 0,__source:{fileName:_jsxFileName,lineNumber:32}},"Joke Type"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{"aria-label":"joke type",value:type,onChange:e=>handleChangeType(e.target.value),__self:void 0,__source:{fileName:_jsxFileName,lineNumber:33}},["any","programming"].map((t=>react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{key:t,value:t,control:react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{__self:void 0,__source:{fileName:_jsxFileName,lineNumber:42}}),label:lodash_upperFirst__WEBPACK_IMPORTED_MODULE_7___default()(t),__self:void 0,__source:{fileName:_jsxFileName,lineNumber:39}})))))};var reactHotLoader,leaveModule;reactHotLoader=__webpack_require__("../node_modules/react-hot-loader/index.js").default,leaveModule=__webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule,reactHotLoader&&(reactHotLoader.register(Settings,"Settings","/home/runner/work/backstage/backstage/plugins/home/src/homePageComponents/RandomJoke/Settings.tsx"),leaveModule(module))}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"../plugins/home/src/homePageComponents/RandomJoke/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _Actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../plugins/home/src/homePageComponents/RandomJoke/Actions.tsx");__webpack_require__.d(__webpack_exports__,"Actions",(function(){return _Actions__WEBPACK_IMPORTED_MODULE_0__.a}));var _Content__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../plugins/home/src/homePageComponents/RandomJoke/Content.tsx");__webpack_require__.d(__webpack_exports__,"Content",(function(){return _Content__WEBPACK_IMPORTED_MODULE_1__.a}));var _Settings__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../plugins/home/src/homePageComponents/RandomJoke/Settings.tsx");__webpack_require__.d(__webpack_exports__,"Settings",(function(){return _Settings__WEBPACK_IMPORTED_MODULE_2__.a}));var enterModule,reactHotLoader,leaveModule,_Context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../plugins/home/src/homePageComponents/RandomJoke/Context.tsx");__webpack_require__.d(__webpack_exports__,"ContextProvider",(function(){return _Context__WEBPACK_IMPORTED_MODULE_3__.a})),(enterModule=__webpack_require__("../node_modules/react-hot-loader/index.js").enterModule)&&enterModule(module),reactHotLoader=__webpack_require__("../node_modules/react-hot-loader/index.js").default,leaveModule=__webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule,reactHotLoader&&leaveModule(module)}.call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))}}]);