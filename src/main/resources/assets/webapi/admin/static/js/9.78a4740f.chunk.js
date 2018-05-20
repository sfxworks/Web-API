webpackJsonp([9],{1027:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),i=(n.n(o),n(72)),a=n(73),s=n(51),l=n(150),c=n(1065),p=n(95),u=n(1037),h=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=Object(u.a)("nucleus/jail","name"),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return h(t,e),t.prototype.componentDidMount=function(){this.props.requestWorlds()},t.prototype.render=function(){var e=this.props.t;return o.createElement(f,{canDelete:!0,icon:"wrench",title:e("Jails"),filterTitle:e("FilterJails"),createTitle:e("CreateJail"),fields:{name:{label:e("Name"),create:!0,filter:!0,required:!0,wide:!0},world:{label:e("World"),view:!1,create:!0,createName:"location.world",filter:!0,filterName:"location.world.uuid",options:Object(p.h)(this.props.worlds),required:!0},position:{label:e("Location"),isGroup:!0,wide:!0,view:function(e){return o.createElement(c.a,{location:e.location})},create:function(e){return o.createElement(s.e.Group,{inline:!0},o.createElement("label",null,"Position"),o.createElement(s.e.Input,{type:"number",width:6,name:"location.position.x",placeholder:"X",value:e.state["location.position.x"],onChange:e.handleChange}),o.createElement(s.e.Input,{type:"number",width:6,name:"location.position.y",placeholder:"Y",value:e.state["location.position.y"],onChange:e.handleChange}),o.createElement(s.e.Input,{type:"number",width:6,name:"location.position.z",placeholder:"Z",value:e.state["location.position.z"],onChange:e.handleChange}))}}}})},t}(o.Component);t.default=Object(a.b)(function(e){return{worlds:e.world.list}},function(e){return{requestWorlds:function(){return e(Object(l.f)("world",!0))}}})(Object(i.c)("Integrations.Nucleus")(d))},1033:function(e,t,n){"use strict";var r,o=n(96),i=(n.n(o),n(0)),a=(n.n(i),n(72)),s=n(51),l=n(95),c=n(1034),p=n(1035),u=n(1036),h=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d=function(e){function t(t){var n=e.call(this,t)||this;return n.state={page:0,newData:{}},n.changePage=n.changePage.bind(n),n.doHandleChange=n.doHandleChange.bind(n),n.handleChange=l.f.bind(n,n.doHandleChange),n}return h(t,e),t.prototype.doHandleChange=function(e,t){var n;this.setState({newData:f({},this.state.newData,(n={},n[e]=t,n))})},t.prototype.changePage=function(e,t){e.preventDefault(),this.setState({page:t})},t.prototype.onEdit=function(e,t){var n=this,r={};e&&Object.keys(this.props.fields).forEach(function(t){n.props.fields[t].edit&&(r[t]=o.get(e,t))}),this.setState({newData:r}),this.props.onEdit&&this.props.onEdit(e,t)},t.prototype.shouldComponentUpdate=function(e,t){return e.fields!==this.props.fields||e.list!==this.props.list||t.page!==this.state.page||t.newData!==this.state.newData},t.prototype.render=function(){var e=this,t=this.props,n=t.icon,r=t.title,a=t.list,l=t.canEdit,h=t.canDelete,d=t.actions,m=Object.keys(this.props.fields).map(function(t){return e.props.fields[t]}).filter(function(e){return e.view}),y=Math.ceil(a.length/20),g=Math.min(this.state.page,y-1),v=a.slice(20*g,20*(g+1)),b={handleChange:this.handleChange,state:this.state.newData,setState:function(t){return e.setState({newData:f({},e.state.newData,t)})}},E=this.props.t;return i.createElement("div",{style:{marginTop:"2em"}},r&&i.createElement(s.g,null,i.createElement(s.h,{fitted:!0,name:n})," ",r),i.createElement(s.w,{striped:!0,stackable:!0},i.createElement(p.a,{fields:m,hasActions:"undefined"!==typeof d,canEdit:o.some(a,l),canDelete:o.some(a,h),t:E}),i.createElement(s.w.Body,null,v.map(function(t,n){return i.createElement(u.a,{key:e.props.idFunc(t),obj:t,tableRef:b,canEdit:l,canDelete:h,editing:e.props.isEditing(t),fields:m,onEdit:function(t,n){return e.onEdit(t,n)},onSave:e.props.onSave,onDelete:e.props.onDelete,actions:d,newData:e.state.newData,handleChange:e.handleChange,t:E})}))),i.createElement(c.a,{page:g,maxPage:y,changePage:function(t,n){return e.changePage(t,n)}}))},t}(i.Component);t.a=Object(a.c)("DataTable")(d)},1034:function(e,t,n){"use strict";var r,o=n(0),i=(n.n(o),n(51)),a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.page!==this.props.page||e.maxPage!==this.props.maxPage},t.prototype.render=function(){var e=this;if(this.props.maxPage<=1)return null;for(var t=this.props,n=t.page,r=t.maxPage,a=Math.max(0,n-4),s=Math.min(r,n+5),l=[],c=a;c<s;c++)l.push(c);return o.createElement(i.n,{pagination:!0},n>4?o.createElement(i.n.Item,{onClick:function(t){return e.props.changePage(t,0)}},"1"):null,n>5?o.createElement(i.n.Item,{onClick:function(t){return e.props.changePage(t,n-5)}},"..."):null,l.map(function(t){return o.createElement(i.n.Item,{key:t,onClick:function(n){return e.props.changePage(n,t)},active:t===n},t+1)}),n<r-6?o.createElement(i.n.Item,{onClick:function(t){return e.props.changePage(t,n+5)}},"..."):null,n<r-5?o.createElement(i.n.Item,{onClick:function(t){return e.props.changePage(t,r-1)}},r):null)},t}(o.Component);t.a=s},1035:function(e,t,n){"use strict";var r,o=n(0),i=(n.n(o),n(51)),a=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.fields!==this.props.fields},t.prototype.render=function(){var e=this;return o.createElement(i.w.Header,null,o.createElement(i.w.Row,null,Object.keys(this.props.fields).map(function(t){var n=e.props.fields[t];return o.createElement(i.w.HeaderCell,{key:t},n.label?n.label:"<"+n.name+">")}),this.props.hasActions||this.props.canEdit||this.props.canDelete?o.createElement(i.w.HeaderCell,null,this.props.t("Actions")):null))},t}(o.Component);t.a=s},1036:function(e,t,n){"use strict";var r,o=n(0),i=(n.n(o),n(51)),a=n(95),s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.obj!==this.props.obj||e.editing!==this.props.editing||e.fields!==this.props.fields||this.props.editing&&e.newData!==this.props.newData},t.prototype.renderEdit=function(e,t){return t.options?o.createElement(i.e.Field,{fluid:!0,selection:!0,search:!0,control:i.d,name:t.name,placeholder:t.label,options:t.options,value:this.props.newData[t.name],onChange:this.props.handleChange}):o.createElement(i.e.Input,{name:t.name,type:t.type?t.type:"text",placeholder:t.label,value:this.props.newData[t.name],onChange:this.props.handleChange})},t.prototype.render=function(){var e=this,t=this.props,n=t.actions,r=t.fields,s=t.obj,l=t.canEdit,c=t.canDelete,p=t.editing,u=t.tableRef,h="function"===typeof l?l(s):l,f="function"===typeof c?c(s):l;return o.createElement(i.w.Row,null,r.map(function(t,n){return o.createElement(i.w.Cell,{key:n,collapsing:!t.wide},t.edit&&p?"function"===typeof t.edit?t.edit(s,u):e.renderEdit(s,t):"function"===typeof t.view?t.view(s,u):Object(a.e)(s,t.name))}),n||l||c?o.createElement(i.w.Cell,{collapsing:!0},h&&p?[o.createElement(i.b,{key:"save",primary:!0,disabled:s.updating,loading:s.updating,onClick:function(){e.props.onSave&&e.props.onSave(s,e.props.newData,u)}},o.createElement(i.h,{name:"save"})," ",this.props.t("Save")),o.createElement(i.b,{key:"cancel",secondary:!0,disabled:s.updating,loading:s.updating,onClick:function(){return e.props.onEdit(null,u)}},o.createElement(i.h,{name:"cancel"})," ",this.props.t("Cancel"))]:h?o.createElement(i.b,{primary:!0,disabled:s.updating,loading:s.updating,onClick:function(){return e.props.onEdit(s,u)}},o.createElement(i.h,{name:"edit"})," ",this.props.t("Edit")):null,f&&o.createElement(i.b,{negative:!0,disabled:s.updating,loading:s.updating,onClick:function(){e.props.onDelete&&e.props.onDelete(s,u)}},o.createElement(i.h,{name:"trash"})," ",this.props.t("Remove")),n&&n(s,u)):null)},t}(o.Component);t.a=l},1037:function(e,t,n){"use strict";t.a=function(e,t,n){t||(t="id");var r="function"===typeof t?t:function(e){return o.get(e,t)};return Object(a.b)(function(e,t){return function(n,r){var i=o.get(n,e.replace(/\//g,"_").replace("-",""));return{creating:!!i&&i.creating,filter:i&&i.filter?i.filter:{},list:i?i.list:[],types:n.api.types,idFunc:t,perm:e.split("/"),perms:n.api.permissions}}}(e,r),function(e,t,n){return function(r){return{requestList:function(){return r(Object(l.f)(e,!n))},requestDetails:function(n){return r(Object(l.e)(e,t,n))},requestCreate:function(n){return r(Object(l.c)(e,t,n))},requestChange:function(n,o){return r(Object(l.b)(e,t,n,o))},requestDelete:function(n){return r(Object(l.d)(e,t,n))},setFilter:function(t,n){return r(Object(l.l)(e,t,n))},equals:function(e,n){return null!=e&&null!=n&&t(e)===t(n)}}}}(e,r,!!n))(m)};var r,o=n(96),i=(n.n(o),n(0)),a=(n.n(i),n(73)),s=n(51),l=n(150),c=n(1038),p=n(1033),u=n(1039),h=n(95),f=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},m=function(e){function t(t){var n=e.call(this,t)||this;return n.state={page:0,data:void 0},n.details=n.details.bind(n),n.create=n.create.bind(n),n.edit=n.edit.bind(n),n.endEdit=n.endEdit.bind(n),n.save=n.save.bind(n),n.delete=n.delete.bind(n),n}return f(t,e),t.prototype.createTable=function(){return p.a},t.prototype.componentDidMount=function(){this.props.static||(this.props.requestList(),this.interval=setInterval(this.props.requestList,1e4))},t.prototype.componentWillUnmount=function(){this.interval&&clearInterval(this.interval)},t.prototype.shouldComponentUpdate=function(e,t){return e.creating!==this.props.creating||e.filter!==this.props.filter||e.fields!==this.props.fields||e.list!==this.props.list||t.data!==this.state.data},t.prototype.create=function(e){this.props.requestCreate(e)},t.prototype.details=function(e){this.props.requestDetails(e)},t.prototype.edit=function(e){this.setState({data:e})},t.prototype.save=function(e,t){this.props.requestChange(e,t),this.endEdit()},t.prototype.endEdit=function(){this.setState({data:void 0})},t.prototype.delete=function(e){this.props.requestDelete(e)},t.prototype.render=function(){var e=this,t=this.props,n=t.filter,r=t.canEdit,a=t.canDelete,l=t.onCreate,p=t.onEdit,f=t.onDelete,m=t.onSave,y=t.perm,g=t.perms,v=t.title,b=t.createTitle,E=t.filterTitle,C=t.checkCreatePerm,_=[],w=!1,O=function(t){return d({},t,{create:e.create,details:e.details,save:e.save,edit:e.edit,endEdit:e.endEdit,delete:e.delete})},j=o.mapValues(this.props.fields,function(e,t){var n={name:t,view:!0};if("string"===typeof e)n.label=e;else if("function"===typeof e)n.view=function(t,n){return e(t,O(n))};else if("object"===typeof e&&(n=d({},n,e),"function"===typeof e.view)){var r=e.view;n.view=function(e,t){return r(e,O(t))}}return n}),D={},k={};Object.keys(j).forEach(function(e){j[e].create&&(D[e]=j[e]),j[e].filter&&(k[e]=j[e])});try{Object.keys(n).forEach(function(e){var t=n[e],r=Object.keys(k).map(function(e){return k[e]}).find(function(t){return t.filterName===e})||k[e],i=function(t){return o.get(t,e)};if("function"===typeof r.filterValue&&(i=r.filterValue),o.isArray(t)){if(0===t.length)return;_.push(function(e){var n=i(e);return t.indexOf(n)>=0})}else _.push(function(e){return new RegExp(t,"i").test(i(e))})}),w=!0}catch(e){w=!1}var P=this.props.list.filter(function(e){return!w||_.every(function(t){return t(e)})}),x=b&&E?2:1,q=this.props.actions,F=q;"function"===typeof q&&(F=function(e,t){return q(e,O(t))});var S=this.createTable();return i.createElement(s.t,{basic:!0},i.createElement(s.f,{stackable:!0,doubling:!0,columns:x},b&&(!C||Object(h.a)(g,y.concat("create")))&&i.createElement(s.f.Column,null,i.createElement(c.a,{title:b,button:this.props.createButton,creating:this.props.creating,fields:D,onCreate:function(t,n){return l?l(t,O(n)):e.create(t)}})),E&&i.createElement(s.f.Column,null,i.createElement(u.a,{title:E,fields:k,valid:w,values:n,onFilterChange:this.props.setFilter}))),i.createElement(S,{title:v,icon:this.props.icon,list:P,t:this.props.t,idFunc:this.props.idFunc,fields:j,onEdit:function(t,n){return p?p(t,O(n)):e.edit(t)},onSave:function(t,n,r){return m?m(t,n,O(r)):e.save(t,n)},onDelete:function(t,n){return f?f(t,O(n)):e.delete(t)},canEdit:function(e){return("function"===typeof r?r(e):!!r)&&Object(h.a)(g,y.concat("modify"))},canDelete:function(e){return("function"===typeof a?a(e):!!a)&&Object(h.a)(g,y.concat("delete"))},actions:F,isEditing:function(t){return e.props.equals(t,e.state.data)}}))},t}(i.Component)},1038:function(e,t,n){"use strict";var r,o=n(96),i=(n.n(o),n(0)),a=(n.n(i),n(72)),s=n(51),l=n(95),c=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u=function(e){function t(t){var n=e.call(this,t)||this;return n.state={open:!1,newData:{}},n.doHandleChange=n.doHandleChange.bind(n),n.handleChange=l.f.bind(n,n.doHandleChange),n.create=n.create.bind(n),n}return c(t,e),t.prototype.doHandleChange=function(e,t){var n;this.setState({newData:p({},this.state.newData,(n={},n[e]=t,n))})},t.prototype.shouldComponentUpdate=function(e,t){return e.creating!==this.props.creating||e.fields!==this.props.fields||t.newData!==this.state.newData||t.open!==this.state.open},t.prototype.create=function(){var e=this,t={};Object.keys(this.state.newData).forEach(function(n){o.set(t,n,e.state.newData[n])}),this.props.onCreate(t,{state:this.state.newData,setState:this.setState,handleChange:this.handleChange})},t.prototype.canCreate=function(){var e=this;return Object.keys(this.props.fields).every(function(t){var n=e.props.fields[t],r=n.createName?n.createName:t;return"string"===typeof n||!n.required||e.state.newData[r]})},t.prototype.handleClick=function(){this.setState({open:!this.state.open})},t.prototype.render=function(){var e=this,t=this.props,n=t.title,r=t.creating,o=t.fields,a=this.props.t,l=[];return Object.keys(o).forEach(function(e){var t=o[e],n=p({},t,{name:t.createName?t.createName:e});n.isGroup?l.push({only:n}):l.length&&!l[l.length-1].second?l[l.length-1].second=n:l.push({first:n})}),i.createElement(s.a,{styled:!0,fluid:!0},i.createElement(s.a.Title,{active:this.state.open,onClick:function(){return e.handleClick()}},i.createElement(s.h,{fitted:!0,name:"plus"})," ",n),i.createElement(s.a.Content,{active:this.state.open},i.createElement(s.e,{loading:r},l.map(function(t,n){return t.only?i.createElement("div",{key:n},e.renderField(t.only)):i.createElement(s.e.Group,{key:n,widths:"equal"},t.first&&e.renderField(t.first),t.second&&e.renderField(t.second))}),i.createElement(s.b,{primary:!0,onClick:this.create,disabled:!this.canCreate()},this.props.button||a("Create")))))},t.prototype.renderField=function(e){var t=this.state.newData;return"function"===typeof e.create?e.create({state:t,setState:this.setState,handleChange:this.handleChange,value:t[e.name]}):e.options?i.createElement(s.e.Field,{fluid:!0,selection:!0,search:!0,required:e.required,control:s.d,name:e.name,label:e.label,placeholder:e.label,onChange:this.handleChange,value:t[e.name],options:e.options}):i.createElement(s.e.Input,{required:e.required,type:e.type?e.type:"text",name:e.name,label:e.label,placeholder:e.label,onChange:this.handleChange,value:t[e.name]})},t}(i.Component);t.a=Object(a.c)("CreateForm")(u)},1039:function(e,t,n){"use strict";var r,o=n(96),i=(n.n(o),n(0)),a=(n.n(i),n(51)),s=n(95),l=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},p=function(e){function t(t){var n=e.call(this,t)||this;return n.state={open:!1},n.handleChange=s.f.bind(n,n.props.onFilterChange),n}return l(t,e),t.prototype.shouldComponentUpdate=function(e,t){return e.values!==this.props.values||e.fields!==this.props.fields||e.valid!==this.props.valid||t.open!==this.state.open},t.prototype.handleClick=function(){this.setState({open:!this.state.open})},t.prototype.render=function(){var e=this,t=this.props,n=t.title,r=t.fields,s=t.values,l=t.valid,p=[];return Object.keys(r).forEach(function(e){var t=r[e],n=c({},t,{name:t.filterName?t.filterName:e});n.isGroup?p.push({only:n}):p.length&&!p[p.length-1].second?p[p.length-1].second=n:p.push({first:n})}),i.createElement(a.a,{styled:!0,fluid:!0},i.createElement(a.a.Title,{active:this.state.open,onClick:function(){return e.handleClick()}},i.createElement(a.h,{name:"filter",fitted:!0})," ",n),i.createElement(a.a.Content,{active:this.state.open},i.createElement(a.e,null,p.map(function(t,n){return t.only?e.renderField(t.only,o.get(s,t.only.name),!l):i.createElement(a.e.Group,{key:n,widths:"equal"},t.first&&e.renderField(t.first,o.get(s,t.first.name),!l),t.second&&e.renderField(t.second,o.get(s,t.second.name),!l))}),i.createElement(a.o,{error:!0,visible:!l,content:"Search term must be a valid regex"}))))},t.prototype.renderField=function(e,t,n){return"function"===typeof e.filter?e.filter({state:this.props.values,setState:this.setState,handleChange:this.handleChange,value:t}):e.options?(t||(t=[]),i.createElement(a.e.Field,{fluid:!0,selection:!0,search:!0,multiple:!0,control:a.d,name:e.name,label:e.label,placeholder:e.label,options:e.options,value:t,error:n,onChange:this.handleChange})):i.createElement(a.e.Input,{name:e.name,type:e.type?e.type:"text",label:e.label,placeholder:e.label,value:t,error:n,onChange:this.handleChange})},t}(i.Component);t.a=p},1065:function(e,t,n){"use strict";var r=n(0),o=(n.n(r),n(51));t.a=function(e){var t=e.location;return t?r.createElement(o.k,{color:"blue"},r.createElement(o.h,{name:"globe"}),t.world.name,"\xa0 \xa0",t.position.x.toFixed(0)," |\xa0",t.position.y.toFixed(0)," |\xa0",t.position.z.toFixed(0)):r.createElement(o.k,{color:"red"},"Invalid location")}}});
//# sourceMappingURL=9.78a4740f.chunk.js.map