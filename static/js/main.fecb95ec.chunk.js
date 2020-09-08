(this["webpackJsonpfinanza-react"]=this["webpackJsonpfinanza-react"]||[]).push([[0],{16:function(e,t,a){e.exports=a(26)},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(14),r=a.n(i),c=a(2),s=a(3),o=a(1),d=a(5),u=a(4),m=a(9),h=a.n(m);a(22);h.a.initializeApp({apiKey:"AIzaSyCE5pA2JSdfAPD5qnWsEEvOXEx-pI4aeLk",authDomain:"finanza-react.firebaseapp.com",databaseURL:"https://finanza-react.firebaseio.com",projectId:"finanza-react",storageBucket:"finanza-react.appspot.com",messagingSenderId:"88000701371",appId:"1:88000701371:web:9b451832ac2b498fea1a9e"});var p=h.a,g=a(15),E=a(7),b=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={category:"",date:"",amount:"",notes:""},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e){e!==this.props&&this.setState(this.props.editEntry)}},{key:"handleChange",value:function(e){var t=e.target,a="radio"===t.type?t.id:t.value,n=t.name;this.setState(Object(E.a)({},n,a))}},{key:"handleSubmit",value:function(e){if(13===e.keyCode){var t=Object(g.a)({},this.state);return t.date||(t.date=String(new Date)),console.log(t),this.props.isEditing?(p.database().ref("expenses/"+this.props.editId).set(t),this.props.toggleEditing(!1)):p.database().ref("expenses").push(t),this.setState({category:"",date:"",amount:"",notes:""})}}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{id:"entry-form",onKeyDown:this.handleSubmit},l.a.createElement("div",{className:"display crt"},l.a.createElement("div",null,l.a.createElement("input",{value:this.state.notes,onChange:this.handleChange,type:"text",placeholder:"Notes",name:"notes"}),l.a.createElement("input",{value:this.state.date,onChange:this.handleChange,type:"text",placeholder:"Date",name:"date"})),l.a.createElement("input",{value:this.state.amount,onChange:this.handleChange,id:"display-amount",type:"number",placeholder:"$",autoFocus:!0,name:"amount"})),l.a.createElement("div",{className:"categories-selector"},j.map((function(t){var a=Object.keys(t)[0],n=t[a];return l.a.createElement("label",{htmlFor:a,key:a,className:e.state.category===n?"highlighted":void 0},l.a.createElement("span",{role:"img","aria-label":"Emoji of "+a},n),l.a.createElement("input",{checked:e.state.category===a,onChange:e.handleChange,type:"radio",id:n,name:"category"}))}))))}}]),a}(l.a.Component);function v(e){var t=new Date(e);return"".concat(t.getMonth()+1," / ").concat(t.getDate())}var y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n.handleClick=n.handleClick.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleClick",value:function(e){var t=e.target.parentElement.id;this.props.toggleEditing(!0,t)}},{key:"render",value:function(){for(var e=this,t=this.props.database||[],a={},n=0,i=Object.keys(t);n<i.length;n++){var r=i[n];new Date(t[r].date).getMonth()===(new Date).getMonth()&&(a[r]=t[r])}return l.a.createElement("div",{className:"element"},l.a.createElement("h2",null,"This Month"),l.a.createElement("ol",null,l.a.createElement("p",null,"Category"),l.a.createElement("p",null,"Date"),l.a.createElement("p",null,"Amount"),l.a.createElement("p",null,"Notes")),l.a.createElement("div",{className:"list"},Object.keys(a).map((function(a){return l.a.createElement("div",{key:a},l.a.createElement("div",{className:"entry",id:a,onClick:e.handleClick},l.a.createElement("span",{className:"icon"},t[a].category),l.a.createElement("p",null,v(t[a].date)),l.a.createElement("p",null,t[a].amount),l.a.createElement("p",null,t[a].notes)))}))))}}]),a}(l.a.Component),f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n.handleClick=n.handleClick.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleClick",value:function(e){var t=e.target.parentElement.id;this.props.toggleEditing(!0,t)}},{key:"render",value:function(){for(var e=this,t=this.props.database||{},a={},n=0,i=Object.keys(t);n<i.length;n++){var r=i[n];new Date(t[r].date).getMonth()===(new Date).getMonth()-1&&(a[r]=t[r])}return l.a.createElement("div",{className:"element"},l.a.createElement("h2",null,"Last Month"),l.a.createElement("ol",null,l.a.createElement("p",null,"Category"),l.a.createElement("p",null,"Date"),l.a.createElement("p",null,"Amount"),l.a.createElement("p",null,"Notes")),l.a.createElement("div",{className:"list"},Object.keys(a).map((function(a){return l.a.createElement("div",{key:a},l.a.createElement("div",{className:"entry",id:a,onClick:e.handleClick},l.a.createElement("span",{className:"icon"},t[a].category),l.a.createElement("p",null,v(t[a].date)),l.a.createElement("p",null,t[a].amount),l.a.createElement("p",null,t[a].notes)))}))))}}]),a}(l.a.Component),k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n.handleClick=n.handleClick.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleClick",value:function(e){var t=e.target.parentElement.id;this.props.toggleEditing(!0,t)}},{key:"render",value:function(){for(var e=this,t=this.props.database||{},a={},n=0,i=Object.keys(t);n<i.length;n++){var r=i[n];new Date(t[r].date).getMonth()<(new Date).getMonth()-1&&(a[r]=t[r])}return l.a.createElement("div",{className:"element"},l.a.createElement("h2",null,"Previous Months"),l.a.createElement("ol",null,l.a.createElement("p",null,"Category"),l.a.createElement("p",null,"Date"),l.a.createElement("p",null,"Amount"),l.a.createElement("p",null,"Notes")),l.a.createElement("div",{className:"list"},Object.keys(a).map((function(a){return l.a.createElement("div",{key:a},l.a.createElement("div",{className:"entry",id:a,onClick:e.handleClick},l.a.createElement("span",{className:"icon"},t[a].category),l.a.createElement("p",null,v(t[a].date)),l.a.createElement("p",null,t[a].amount),l.a.createElement("p",null,t[a].notes)))}))))}}]),a}(l.a.Component),j=[{pizza:"\ud83c\udf55"},{gas:"\u26fd\ufe0f"},{utility:"\u2699\ufe0f"},{groceries:"\ud83e\udd51"}],C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={database:{},isEditing:!1,editId:null},n.toggleEditing=n.toggleEditing.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.database().ref("expenses").on("value",(function(t){e.setState({database:t.val()})}))}},{key:"toggleEditing",value:function(e,t){return!0===e&&t?this.setState({isEditing:e,editId:t}):this.setState({isEditing:!1,editId:null})}},{key:"render",value:function(){var e=this.state.editId?this.state.database[this.state.editId]:null;return l.a.createElement("div",{className:"App"},l.a.createElement(b,{database:this.state.database,toggleEditing:this.toggleEditing,isEditing:this.state.isEditing,editEntry:e,editId:this.state.editId}),l.a.createElement(y,{database:this.state.database,toggleEditing:this.toggleEditing}),l.a.createElement(f,{database:this.state.database,toggleEditing:this.toggleEditing}),l.a.createElement(k,{database:this.state.database,toggleEditing:this.toggleEditing}))}}]),a}(l.a.Component);a(25);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fecb95ec.chunk.js.map