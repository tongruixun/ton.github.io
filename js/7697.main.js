(self.webpackChunktoy=self.webpackChunktoy||[]).push([[7697,9782,7928,5085,9254,6276,7387,9238],{514:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>D});var r=n(9713),a=n.n(r),o=n(3038),l=n.n(o),c=n(7294),i=n(5697),u=n.n(i),s=n(9502),m=n(7428),d=n(3944),f=n(4210),p=n(1382),g=n(5779),y=n(8222),h=n(7049),v=n(8835),E=n(5498),I=n(7359),Z=n(7387),b=(n(6946),n(7928)),k=n(438),j=n(8316);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=s.Z.Option,P=m.Z.TabPane,A={0:"请先先进行登录",1:"已登录",2:"登录态过期"},O=["秒","分","时","日"],C=function(e){return e.map((function(e,t){return c.createElement(T,{key:t,value:e},e)}))};function F(e,t){for(var n=[],r=0;r<t;r++)n.push(Z.deviceApi.getGenerateId(e));return new Promise((function(e){Promise.all(n).then((function(t){e(t.map((function(e){return e.data})))}))}))}const D=function(){var e=d.Z.useForm(),t=l()(e,1)[0],n=(0,c.useState)(""),r=l()(n,2),a=r[0],o=r[1],i=(0,c.useState)({}),u=l()(i,2),s=u[0],v=u[1],E=(0,c.useState)(0),k=l()(E,2),j=k[0],S=k[1],w=(0,c.useState)(!1),T=l()(w,2),O=T[0],C=T[1];function F(){Z.deviceApi.getBaseTerminals().then((function(e){var t=e.data;v(t)})).catch((function(e){S(0),f.ZP.error(e.message)}))}return(0,c.useEffect)((function(){I.default.getToken()&&(S(1),F())}),[]),c.createElement(p.Z,{spinning:O},c.createElement("div",{className:b.default.wrap},c.createElement(d.Z,{form:t,onFinish:function(e){I.default.setToken(e.token),S(1),o(e.projectId),I.default.getToken()&&F()},layout:"inline"},c.createElement(d.Z.Item,{label:"token",name:"token",rules:[{required:!0,message:"token"}]},c.createElement(g.Z,{style:{width:300},placeholder:"token"})),c.createElement(d.Z.Item,{label:"项目ID",name:"projectId",rules:[{required:!0,message:"请输入projectId"}]},c.createElement(g.Z,{placeholder:"项目ID"})),c.createElement(d.Z.Item,null,c.createElement(y.Z,{htmlType:"submit",type:"primary"},"设置配置项")),c.createElement(d.Z.Item,null,"当前登录状态: ",c.createElement("strong",{style:{color:1===j?"black":"red"}},A[j])),c.createElement(d.Z.Item,null,"当前项目ID: ",c.createElement("strong",{style:{color:a?"black":"red"}},a||"需设置项目id"))),c.createElement(h.Z,null),c.createElement(m.Z,{defaultActiveKey:"1"},c.createElement(P,{tab:"添加终端",key:"1"},c.createElement(M,{setLoading:C,projectId:a,baseTerminals:s})),c.createElement(P,{tab:"添加传感器",key:"2"},c.createElement(x,{setLoading:C,projectId:a})),c.createElement(P,{tab:"添加测点",key:"3"},c.createElement(V,{setLoading:C,projectId:a})))))};function M(e){var t=e.setLoading,n=e.projectId,r=e.baseTerminals,a=d.Z.useForm(),o=l()(a,1)[0],i=(0,c.useState)({factory:[],device:[],model:[]}),u=l()(i,2),m=u[0],p=u[1],I=(0,c.useState)({params:[],overView:[]}),b=l()(I,2),k=b[0],j=b[1];function S(e,t){if("factory"===e&&(o.resetFields(["device","model"]),p((function(e){return w(w({},e),{},{device:Object.keys(r[t])})}))),"device"===e){o.resetFields(["model"]);var n=o.getFieldValue("factory");p((function(e){return w(w({},e),{},{model:Object.keys(r[n][t])})}))}}function P(e){t(!0);var a=e.factory,o=e.device,l=e.model,c=e.collectInterval,i=e.number,u=e.frequencyUnit,s=r[a][o][l],m=[],d=[];return new Promise((function(e){F("terminal",i).then((function(r){r.forEach((function(e){m.push({baseTerminalId:s,collectInterval:c,customName:o,frequencyUnit:u,projectId:n,terminalId:e}),d.push({factory:a,device:o,model:l,terminalId:e,collectInterval:c,frequencyUnit:u})})),t(!1),e({params:m,overView:d})}))}))}(0,c.useEffect)((function(){Object.keys(r).length>0&&p((function(e){return w(w({},e),{},{factory:Object.keys(r)})}))}),[r]);var A={width:160};return c.createElement("div",null,c.createElement(d.Z,{form:o,onFinish:function(e){t(!0),new Promise((function(t){k.params.length>0?t(k.params):P(e).then((function(e){t(e.params)}))})).then((function(e){return Z.deviceApi.addTerminals(e).then((function(){t(!1),f.ZP.success("操作成功")}))})).catch((function(e){t(!1),f.ZP.error(e.message)}))},layout:"inline"},c.createElement(d.Z.Item,{label:"设备厂家",name:"factory",rules:[{required:!0,message:"请选择设备厂家"}]},c.createElement(s.Z,{style:A,onSelect:function(e){return S("factory",e)},placeholder:"请选择设备厂家"},C(m.factory))),c.createElement(d.Z.Item,{label:"设备名称",name:"device",rules:[{required:!0,message:"请选择设备名称"}]},c.createElement(s.Z,{style:A,onSelect:function(e){return S("device",e)},placeholder:"请选择设备名称"},C(m.device))),c.createElement(d.Z.Item,{label:"设备型号",name:"model",rules:[{required:!0,message:"请选择设备型号"}]},c.createElement(s.Z,{style:A,placeholder:"请选择设备型号"},C(m.model))),c.createElement(d.Z.Item,{label:"采集间隔",name:"collectInterval",initialValue:10,rules:[{pattern:/^\d*$/g,message:"请输入整数"},{required:!0,message:"请输入采集间隔!"}]},c.createElement(g.Z,{addonAfter:c.createElement(d.Z.Item,{name:"frequencyUnit",initialValue:1,noStyle:!0},c.createElement(s.Z,{style:{width:60}},O.map((function(e,t){return c.createElement(T,{key:t,value:t},e)})))),style:A})),c.createElement(d.Z.Item,{label:"数量",name:"number"},c.createElement(v.Z,{style:A,min:1,max:20})),c.createElement(d.Z.Item,null,c.createElement(y.Z,{htmlType:"submit",type:"primary"},"添加终端")),c.createElement(d.Z.Item,null,c.createElement(y.Z,{onClick:function(){o.validateFields().then((function(e){P(e).then((function(e){j(e)})).catch((function(){t(!1)}))}))},type:"primary"},"预览")),c.createElement(d.Z.Item,null,c.createElement(y.Z,{onClick:function(){o.resetFields(),p((function(e){return w(w({},e),{},{device:[],model:[]})})),j({params:[],overView:[]})},danger:!0,type:"primary"},"重置"))),c.createElement(h.Z,null),c.createElement(E.Z,{rowKey:"terminalId",size:"small",pagination:!1,columns:[{title:"设备厂家",dataIndex:"factory"},{title:"设备名称",dataIndex:"device"},{title:"设备型号",dataIndex:"model"},{title:"设备编号",dataIndex:"terminalId"},{title:"采集间隔",render:function(e,t){var n=t.collectInterval,r=t.frequencyUnit;return"".concat(n," ").concat(O[r])}}],dataSource:k.overView}))}function x(e){var t=e.projectId,n=e.setLoading,r=d.Z.useForm(),a=l()(r,1)[0],o=d.Z.useForm(),i=l()(o,1)[0],u=(0,c.useState)(""),m=l()(u,2),p=m[0],I=m[1],b=(0,c.useState)({}),k=l()(b,2),j=k[0],S=k[1],T=(0,c.useState)({factory:[],device:[],model:[]}),P=l()(T,2),A=P[0],O=P[1],D=(0,c.useState)({params:[],overView:[]}),M=l()(D,2),x=M[0],V=M[1];function N(e){var n=e.factory,r=e.device,a=e.model,o=e.number,l=e.terminalChannel,c=e.sensorAddr,i=e.timingFactor,u=j[n][r][a],s=[],m=[];return new Promise((function(e){F("sensor",o).then((function(o){o.forEach((function(e){var o,d;s.push({baseSensorId:u,customName:r,terminalId:p,projectId:t,sensorId:e,sensorAddr:(o=c,d=o,(d=Number(d).toString(16).toLocaleUpperCase()).length%2==1&&(d="0".concat(d)),d),terminalChannel:l,timingFactor:i}),m.push({factory:n,device:r,model:a,sensorId:e,terminalChannel:l,sensorAddr:c,timingFactor:i})})),e({params:s,overView:m})}))}))}function B(e,t){if("factory"===e&&(a.resetFields(["device","model"]),O((function(e){return w(w({},e),{},{device:Object.keys(j[t])})}))),"device"===e){a.resetFields(["model"]);var n=a.getFieldValue("factory");O((function(e){return w(w({},e),{},{model:Object.keys(j[n][t])})}))}}var L={width:160};return c.createElement("div",null,c.createElement(d.Z,{form:i,onFinish:function(e){var t,n=e.terminalId;I(n),t=n,Z.deviceApi.getTerminalDetail(t).then((function(e){var t;t=e.data.baseTerminalId,Z.deviceApi.getBaseSensor(t).then((function(e){var t=e.data;O((function(e){return w(w({},e),{},{factory:Object.keys(t)})})),S(t)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))},layout:"inline"},c.createElement(d.Z.Item,{label:"终端编号",name:"terminalId",rules:[{required:!0,message:"请输入projectId"}]},c.createElement(g.Z,{placeholder:"终端编号"})),c.createElement(d.Z.Item,null,c.createElement(y.Z,{htmlType:"submit",type:"primary"},"设置配置项")),c.createElement(d.Z.Item,null,"当前终端编号:",c.createElement("strong",{style:{color:p?"black":"red"}},p||"需设置终端编号"))),c.createElement(h.Z,null),c.createElement(d.Z,{form:a,onFinish:function(e){n(!0),new Promise((function(t){x.params.length>0?t(x.params):N(e).then((function(e){t(e.params)}))})).then((function(e){return Z.deviceApi.addSensors(e).then((function(){n(!1),f.ZP.success("操作成功")}))})).catch((function(e){n(!1),f.ZP.error(e.message)}))},layout:"inline"},c.createElement(d.Z.Item,{label:"设备厂家",name:"factory",rules:[{required:!0,message:"请选择设备厂家"}]},c.createElement(s.Z,{style:L,onSelect:function(e){return B("factory",e)},placeholder:"请选择设备厂家"},C(A.factory))),c.createElement(d.Z.Item,{label:"设备名称",name:"device",rules:[{required:!0,message:"请选择设备名称"}]},c.createElement(s.Z,{style:L,onSelect:function(e){return B("device",e)},placeholder:"请选择设备名称"},C(A.device))),c.createElement(d.Z.Item,{label:"设备型号",name:"model",rules:[{required:!0,message:"请选择设备型号"}]},c.createElement(s.Z,{style:L,placeholder:"请选择设备型号"},C(A.model))),c.createElement(h.Z,null),c.createElement(d.Z.Item,{label:"通道号",name:"terminalChannel",rules:[{required:!0,message:"请输入通道号"},{pattern:/^[0-9]{1,2}$/g,message:"请输入长度小于2的整数"}],initialValue:1},c.createElement(g.Z,{placeholder:"请输入通道号"})),c.createElement(d.Z.Item,{label:"传感器地址",name:"sensorAddr",rules:[{pattern:/^[0-9]+$/g,message:"请输入长度小于2的整数"}],initialValue:1},c.createElement(g.Z,{style:L,placeholder:"示例:1234"})),c.createElement(d.Z.Item,{label:"标定系数",name:"timingFactor",rules:[{required:!0,message:"请输入标定系数"},{pattern:/^([0-9]$)|(^[0-9]\.[0-9]{1,8})$/g,message:"请输入小于10的数字"}],initialValue:1},c.createElement(g.Z,{style:L,placeholder:"请输入标定系数"})),c.createElement(d.Z.Item,{label:"数量",name:"number"},c.createElement(v.Z,{style:L,min:1,max:20})),c.createElement(d.Z.Item,null,c.createElement(y.Z,{htmlType:"submit",type:"primary"},"添加传感器")),c.createElement(d.Z.Item,null,c.createElement(y.Z,{onClick:function(){a.validateFields().then((function(e){n(!0),N(e).then((function(e){V(e),n(!1)})).catch((function(){n(!1)}))}))},type:"primary"},"预览")),c.createElement(d.Z.Item,null,c.createElement(y.Z,{onClick:function(){a.resetFields(),V({params:[],overView:[]}),O((function(e){return w(w({},e),{},{device:[],model:[]})}))},danger:!0,type:"primary"},"重置"))),c.createElement(h.Z,null),c.createElement(E.Z,{rowKey:"sensorId",size:"small",pagination:!1,columns:[{title:"设备厂家",dataIndex:"factory"},{title:"设备名称",dataIndex:"device"},{title:"设备型号",dataIndex:"model"},{title:"设备编号",dataIndex:"sensorId"},{title:"通道号",dataIndex:"terminalChannel"},{title:"传感器地址",dataIndex:"sensorAddr"},{title:"传感器标定系数",dataIndex:"timingFactor"}],dataSource:x.overView}))}function V(e){var t=e.projectId,n=e.setLoading,r=d.Z.useForm(),a=l()(r,1)[0],o=(0,c.useState)([]),i=l()(o,2),u=i[0],m=i[1],p=(0,c.useState)([]),v=l()(p,2),E=v[0],I=v[1],b=(0,c.useState)([]),S=l()(b,2),w=S[0],P=S[1],A=(0,j.debounce)((function(e){var t=e.split(",");m(t)}),500);(0,c.useEffect)((function(){t?Z.monitorItemPoint.getMonitorItems(t).then((function(e){var t=e.data;I(t)})).catch((function(e){console.log(e)})):f.ZP.error("请设置项目id")}),[t]);var O={width:160};return c.createElement("div",null,c.createElement("div",null,c.createElement("div",null,c.createElement("strong",null,"方式一:")," 读取",c.createElement("strong",{style:{color:"red"}},"Excel表格第一行"),"的数据作为测点名称 ",c.createElement("br",null),c.createElement(k.default,{onChange:function(e){e[0]&&m(e[0])}})),c.createElement(h.Z,null),c.createElement("strong",null,"方式二:")," 手动输入,各测点名称用逗号分隔(例: 测点名1,测点名2,测点名3)",c.createElement(g.Z,{onChange:function(e){return A(e.target.value)}}),c.createElement(h.Z,null),c.createElement("div",{style:{padding:24,backgroundColor:"#fff"}},c.createElement("strong",{style:{color:"red"}},"将添加的测点名称:")," ",u.join(","))),c.createElement(h.Z,null),c.createElement(d.Z,{form:a,onFinish:function(e){if(u.length<1)f.ZP.error("请录入测点");else{var r=e.collectionType,a=e.groupName,o=e.monitorItemId,c=l()(a,2);!function(e){var r=e.monitorItemId,a=e.groupId,o=e.groupName,l=e.collectionType;n(!0),new Promise((function(e,n){Z.monitorItemPoint.getSensorByMonitorItem({projectId:t,monitorItemId:r}).then((function(c){var i=c.data;i.length<u.length&&n(new Error("设备数少于测点数;设备数为".concat(i.length,";要添加的测点数为").concat(u.length,";")));var s=[];u.forEach((function(e,n){var c=JSON.stringify([{deviceId:i[n].sensorId}]),u=new FormData;u.append("pointName",e),u.append("groupId",a),u.append("groupName",o),u.append("monitorItem",r),u.append("collectionType",l),u.append("projectId",t),u.append("deviceVOs",c),s.push(Z.monitorItemPoint.addPoint(u))})),e(s)})).catch((function(e){n(e)}))})).then((function(e){return Promise.all(e).then((function(){f.ZP.success("操作成功"),n(!1)}))})).catch((function(e){f.ZP.error(e.message),n(!1)}))}({monitorItemId:o,groupName:c[0],groupId:c[1],collectionType:r})}},layout:"inline"},c.createElement(d.Z.Item,{label:"监测测项",name:"monitorItemId",rules:[{required:!0,message:"请选择监测测项"}]},c.createElement(s.Z,{onSelect:function(e){return n=e,void Z.monitorItemPoint.getGroupNameByMonitorItem({projectId:t,itemId:n}).then((function(e){var t=e.data;P(t)})).catch((function(e){console.log(e)}));var n},style:O,placeholder:"请选择监测测项"},E.map((function(e){var t=e.itemName,n=e.monitorItemId;return c.createElement(T,{key:n,value:n},t)})))),c.createElement(d.Z.Item,{label:"数据采集方式",name:"collectionType",rules:[{required:!0,message:"请选择数据采集方式"}],initialValue:"设备采集"},c.createElement(s.Z,{style:O,placeholder:"请选择数据采集方式"},c.createElement(T,{value:"设备采集"},"设备采集"),"))")),c.createElement(d.Z.Item,{label:"分组名称",name:"groupName",rules:[{required:!0,message:"请选择分组"}]},c.createElement(s.Z,{style:O,placeholder:"请选择分组"},w.map((function(e){var t=e.mgId,n=e.groupName;return c.createElement(T,{key:t,value:[n,t]},n)})))),c.createElement(h.Z,null),c.createElement(d.Z.Item,null,c.createElement(y.Z,{htmlType:"submit",type:"primary"},"添加测点")),c.createElement(d.Z.Item,null,c.createElement(y.Z,{onClick:function(){},type:"primary"},"预览")),c.createElement(d.Z.Item,null,c.createElement(y.Z,{onClick:function(){},danger:!0,type:"primary"},"重置"))))}M.propTypes={setLoading:u().bool,projectId:u().string,baseTerminals:u().object},x.propTypes={setLoading:u().bool,projectId:u().string},V.propTypes={setLoading:u().bool,projectId:u().string}},5085:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(7294),a=n(9254),o=n(8686);const l=function(){return r.createElement("div",{className:a.default.wrap},r.createElement(o.PageLoading,null))}},438:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(7294),a=n(7869);const o=function(e){var t=e.onChange;return r.createElement("input",{type:"file",accept:".xlsx, .xls",onChange:function(e){var n=e.target.files,r=new FileReader;r.onload=function(e){try{var n=e.target.result,r=a.read(n,{type:"binary"}),o=[];for(var l in r.Sheets)if(r.Sheets.hasOwnProperty(l)){o=o.concat(a.utils.sheet_to_json(r.Sheets[l],{header:1}));break}t(o)}catch(e){return void console.log("文件类型不正确")}},r.readAsBinaryString(n[0])}})}},398:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var r=n(3038),a=n.n(r),o=n(7294),l=n(2897),c=n(4025),i=l.ZP;i.Header=l.h4,i.Footer=l.$_,i.Content=l.VY,i.Sider=c.Z;const u=i;var s=n(9210);const m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 518H506V160c0-4.4-3.6-8-8-8h-26a398.46 398.46 0 00-282.8 117.1 398.19 398.19 0 00-85.7 127.1A397.61 397.61 0 0072 552a398.46 398.46 0 00117.1 282.8c36.7 36.7 79.5 65.6 127.1 85.7A397.61 397.61 0 00472 952a398.46 398.46 0 00282.8-117.1c36.7-36.7 65.6-79.5 85.7-127.1A397.61 397.61 0 00872 552v-26c0-4.4-3.6-8-8-8zM705.7 787.8A331.59 331.59 0 01470.4 884c-88.1-.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552c0-88.7 34.5-172.1 97.2-234.8 54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8zM952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6A399.4 399.4 0 00589 74.6L560.7 72c-4.7-.4-8.7 3.2-8.7 7.9V464c0 4.4 3.6 8 8 8l384-1c4.7 0 8.4-4 8-8.6zm-332.2-58.2V147.6a332.24 332.24 0 01166.4 89.8c45.7 45.6 77 103.6 90 166.1l-256.4.7z"}}]},name:"pie-chart",theme:"outlined"};var d=n(65),f=function(e,t){return o.createElement(d.Z,Object.assign({},e,{ref:t,icon:m}))};f.displayName="PieChartOutlined";const p=o.forwardRef(f),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 140H96c-17.7 0-32 14.3-32 32v496c0 17.7 14.3 32 32 32h380v112H304c-8.8 0-16 7.2-16 16v48c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-48c0-8.8-7.2-16-16-16H548V700h380c17.7 0 32-14.3 32-32V172c0-17.7-14.3-32-32-32zm-40 488H136V212h752v416z"}}]},name:"desktop",theme:"outlined"};var y=function(e,t){return o.createElement(d.Z,Object.assign({},e,{ref:t,icon:g}))};y.displayName="DesktopOutlined";const h=o.forwardRef(y),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};var E=function(e,t){return o.createElement(d.Z,Object.assign({},e,{ref:t,icon:v}))};E.displayName="UserOutlined";const I=o.forwardRef(E),Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"}}]},name:"team",theme:"outlined"};var b=function(e,t){return o.createElement(d.Z,Object.assign({},e,{ref:t,icon:Z}))};b.displayName="TeamOutlined";const k=o.forwardRef(b),j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"}}]},name:"file",theme:"outlined"};var S=function(e,t){return o.createElement(d.Z,Object.assign({},e,{ref:t,icon:j}))};S.displayName="FileOutlined";const w=o.forwardRef(S);n(6946);var T=n(5085),P=n(514),A=n(8686),O=u.Header,C=u.Content,F=u.Footer,D=u.Sider,M=s.Z.SubMenu,x=[{key:"functionTest",title:"功能测试",icon:o.createElement(p,null),children:[{key:"loading",title:"加载状态"}]},{key:"dataEnter",title:"数据录入",icon:o.createElement(h,null)},{key:"sub1",title:"账号管理",icon:o.createElement(I,null),children:[{key:"sub11",title:"sub11"},{key:"sub12",title:"sub12"},{key:"sub13",title:"sub13"}]},{key:"sub2",title:"权限控制",icon:o.createElement(k,null),children:[{key:"sub21",title:"sub21"},{key:"sub22",title:"sub22"}]},{key:"sub3",title:"文件管理",icon:o.createElement(w,null)}],V={functionTest:o.createElement(T.default,null),dataEnter:o.createElement(P.default,null),loading:o.createElement(A.PageLoading,null)};const N=function(){var e=(0,o.useState)(!1),t=a()(e,2),n=t[0],r=t[1],l=(0,o.useState)("dataEnter"),c=a()(l,2),i=c[0],m=c[1],d=(0,o.useState)(!0),f=a()(d,2),p=f[0],g=f[1];return(0,o.useEffect)((function(){g(!1)}),[]),o.createElement(u,{style:{minHeight:"100vh"}},o.createElement(D,{collapsible:!0,collapsed:n,onCollapse:function(e){r(e)}},o.createElement("div",{style:{width:200}},o.createElement(A.NavLogo,null)),o.createElement(s.Z,{onSelect:function(e){m(e.key)},theme:"dark",defaultSelectedKeys:[i],mode:"inline"},function e(t){return t.map((function(t){return t.children?o.createElement(M,{key:t.key,icon:t.icon,title:t.title},e(t.children)):o.createElement(s.Z.Item,{key:t.key,icon:t.icon},t.title)}))}(x))),o.createElement(u,null,o.createElement(O,{style:{padding:0}}),o.createElement(C,{style:{margin:"16px"}},o.createElement(A.SpinPage,{spinning:p},V[i]?V[i]:null)),o.createElement(F,{style:{textAlign:"center"}},"Ant Design ©2018 Created by Ant UED")))}},7387:(e,t,n)=>{"use strict";n.r(t),n.d(t,{accountLogin:()=>a,deviceApi:()=>o,monitorItemPoint:()=>l});var r=n(9238);function a(e){return r.login.post("/monitor/oauth/oauth/token",null,{params:e})}var o={getBaseTerminals:function(){return(0,r.default)({url:"/monitor/project/terminal/baseTerminals",method:"get"})},getGenerateId:function(e){return(0,r.default)({url:"/monitor/project/terminal/generate/usableNumber",method:"get",params:{deviceType:e}})},addTerminals:function(e){return(0,r.default)({url:"/monitor/project/terminal/addTerminals",method:"post",data:e})},getTerminalDetail:function(e){return(0,r.default)({url:"/monitor/project/terminal/detail",method:"get",params:{terminalId:e}})},getBaseSensor:function(e){return(0,r.default)({url:"/monitor/project/sensor/baseSensors",method:"get",params:{baseTerminalId:e}})},addSensors:function(e){return(0,r.default)({url:"/monitor/project/sensor/addSensors",method:"post",data:e})}},l={getMonitorItems:function(e){return(0,r.default)({url:"/monitor/project/v2/pointManage/item/".concat(e),method:"get"})},getGroupNameByMonitorItem:function(e){return(0,r.default)({url:"/monitor/project/v2/pointManage/groupName",method:"get",params:e})},getSensorByMonitorItem:function(e){return(0,r.default)({url:"/monitor/project/formula/sensorInfo",method:"get",params:e})},addPoint:function(e){return(0,r.default)({url:"/monitor/project/v2/pointManage/point",method:"post",data:e})}}},9238:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i,login:()=>u});var r=n(9669),a=n.n(r),o=n(7359),l={BASIC_AUTH_HEADER:"Basic dGVzdF9jbGllbnQ6c2NyaXQ=",API_BASE_URL:"http://gateway.zdjcyun.com"},c=a().create({baseURL:l.API_BASE_URL});c.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(o.default.getToken()),e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data,n=t.code,r=t.msg;if(console.log(n,r),"401"==="".concat(n))return Promise.reject(new Error("登录过期"));if("403"==="".concat(n))return Promise.reject(new Error("无权限访问"));if("200"!=="".concat(n)){var a=new Error(r||"请求错误");return a.response=e,Promise.reject(a)}return e.data}),(function(e){return Promise.reject(e)}));const i=c;var u=a().create({baseURL:l.API_BASE_URL,headers:{Authorization:l.BASIC_AUTH_HEADER}});u.interceptors.response.use((function(e){var t=e.data.code;return"401"==="".concat(t)?(o.default.removeToken(),Promise.reject(new Error("登录过期"))):e.data}),(function(e){return Promise.reject(e)}))},7359:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(4575),a=n.n(r),o=n(3913),l=n.n(o),c="zy_token";const i=function(){function e(){a()(this,e)}return l()(e,null,[{key:"getToken",value:function(){return sessionStorage.getItem(c)}},{key:"setToken",value:function(e){sessionStorage.setItem(c,e)}},{key:"removeToken",value:function(){sessionStorage.removeItem(c)}}]),e}()},8316:(e,t,n)=>{"use strict";n.r(t),n.d(t,{changeThemeColor:()=>m,formatDate:()=>d,renderTime:()=>p,getRemainingDate:()=>g,keyBy:()=>h,debounce:()=>v,throttle:()=>E});var r=n(319),a=n.n(r),o=n(7484),l=n.n(o),c=n(2997);l().extend(c);var i=n(5183);l().extend(i);var u=n(1869),s=n(423);function m(e){document.getElementById("theme").innerHTML=":root{--bgColor:".concat(e,";}")}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD";return l()(e).format(t)}l().extend(u),l().extend(s);var f=["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];function p(){var e=l()(),t=[];return t[0]=e.format("YYYY"),t[1]=e.format("MM"),t[2]=e.format("DD"),t[3]=e.format("HH:mm:ss"),t[4]=f[e.get("day")],t}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=l()(),n=[{title:"周五",endDate:t.day(5)},{title:t.add(1,"month").format("MM 月"),endDate:t.endOf("month")},{title:t.add(1,"year").format("YYYY 年"),endDate:t.endOf("year")}];return[].concat(n,a()(e)).map((function(e){return y(e,t)}))}function y(e,t){var n=e.title,r=e.endDate;r instanceof l()||(r=l()(r));var a={};return a.remainingDays=r.diff(t,"day"),a.unit="days",0===a.remainingDays&&(a.remainingDays=r.diff(t,"hour"),a.unit="hours"),a.remainingDays<0&&(a.remainingDays="",a.unit="TIMEOUT"),a.title=n,a.endTime={week:f[r.get("day")],date:r.format("YYYY-MM-DD")},a}function h(e,t,n){var r={};return e.forEach((function(e){r[e[t]]||(r[e[t]]=n?e[n]:e)})),r}function v(e,t){var n=null;return function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];clearTimeout(n),n=setTimeout((function(){e.apply(void 0,a)}),t)}}function E(e,t){var n=null;return function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];n||(n=setTimeout((function(){e.apply(void 0,a),clearTimeout(n),n=null}),t))}}},9405:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"",""]);const o=a},4313:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".src-page-about-FunctionTest-index__wrap {\n  width: 100%;\n  height: 100%;\n}\n",""]),a.locals={wrap:"src-page-about-FunctionTest-index__wrap"};const o=a},7928:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(3379),a=n.n(r),o=n(9405);a()(o.Z,{insert:"head",singleton:!1});const l=o.Z.locals||{}},9254:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(3379),a=n.n(r),o=n(4313);a()(o.Z,{insert:"head",singleton:!1});const l=o.Z.locals||{}},3906:()=>{},2993:()=>{},791:()=>{}}]);