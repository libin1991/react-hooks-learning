(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),l=n(4),u=n(3),r=n(5),o=n(0),i=n.n(o),s=n(6),m=n.n(s),E=n(7),f=function(e){function t(){var e,n;Object(a.a)(this,t);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={count:0},n.countUp=function(){var e=n.state.count;n.setState({count:e+1})},n.countDown=function(){var e=n.state.count;n.setState({count:e-1})},n}return Object(r.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;setTimeout(function(){console.log(e.state.count)},2e3)}},{key:"render",value:function(){var e=this.state.count;return i.a.createElement("div",null,i.a.createElement("h4",null,"class Component:"),i.a.createElement("button",{onClick:this.countUp},"+"),i.a.createElement("h1",null,e),i.a.createElement("button",{onClick:this.countDown},"-"))}}]),t}(o.Component);function b(){var e=Object(o.useState)(0),t=Object(E.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)(function(){setTimeout(function(){console.log(n)},2e3)},[n]),i.a.createElement("div",null,i.a.createElement("h4",null,"useEffect:"),i.a.createElement("button",{onClick:function(){return a(n+1)}},"+"),i.a.createElement("h1",null,n),i.a.createElement("button",{onClick:function(){return a(n-1)}},"-"))}function v(){var e=Object(o.useState)(0),t=Object(E.a)(e,2),n=t[0],a=t[1],c=i.a.useRef(n);return Object(o.useEffect)(function(){c.current=n,setTimeout(function(){console.log(c.current)},2e3)}),i.a.createElement("div",null,i.a.createElement("h4",null,"useRef:"),i.a.createElement("button",{onClick:function(){return a(n+1)}},"+"),i.a.createElement("h1",null,n),i.a.createElement("button",{onClick:function(){return a(n-1)}},"-"))}var h=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("span",null,"\u5feb\u901f\u70b9\u51fb\u770b\u63a7\u5236\u53f0"),i.a.createElement(b,null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(v,null))},p=function(e){function t(){var e,n;Object(a.a)(this,t);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={count:0},n.countUp=function(){var e=n.state.count;n.setState({count:e+1})},n.countDown=function(){var e=n.state.count;n.setState({count:e-1})},n}return Object(r.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;setTimeout(function(){console.log(e.state.count)},2e3)}},{key:"render",value:function(){this.state.count;return i.a.createElement("div",null,i.a.createElement("h4",null,"\u6211\u7684\u6d4b\u8bd5"),i.a.createElement(h,null))}}]),t}(i.a.Component);m.a.render(i.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(14)}},[[9,2,1]]]);
//# sourceMappingURL=main.f53af2d6.chunk.js.map