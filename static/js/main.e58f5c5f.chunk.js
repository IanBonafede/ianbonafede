(this.webpackJsonpianbonafede=this.webpackJsonpianbonafede||[]).push([[0],{62:function(e,t,a){e.exports=a(75)},67:function(e,t,a){},68:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(6),l=a.n(o),c=(a(67),a(20)),s=a(21),i=a(36),m=a(24),p=a(22),y=a(3),u=(a(68),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={theme:{light:"#A3A3A3",main:"#828282",dark:"#686868",contrastText:"#fff"}},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("h1",null,"Home")}}]),a}(n.a.Component)),h=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("h1",null,"Bio")}}]),a}(n.a.Component),f=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("h1",null,"Projects")}}]),a}(n.a.Component),b=a(55),d=a(8),E=a(114),g=a(111),w=a(115),x=a(112),k=a(42),T=a(113),v=a(51),j=a.n(v),O=a(52),L=a.n(O),B=a(53),C=a.n(B),D=a(54),A=a.n(D),N=a(106),I=a(110),G=a(116),F=a(109),H=a(26),J=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).toggleLeftDrawer=function(t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&(e.state.drawers.left=t,e.setState({left:t}))}},e.state={pallete:{primary:{light:"#A3A3A3",main:"#828282",dark:"#686868",contrastText:"#fff"},secondary:{light:"#A3A3A3",main:"#828282",dark:"#686868",contrastText:"#fff"}},styles:{root:{flexGrow:1},title:{flexGrow:1},toolbarButton:{height:50},list:{width:200},fullList:{width:"auto"},paper:{background:"#828282"}},drawers:{left:!1,right:!1}},e.toggleLeftDrawer=e.toggleLeftDrawer.bind(Object(i.a)(e)),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;document.body.style.background=this.state.pallete.primary.dark;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:this.state.styles.root},n.a.createElement(g.a,{position:"static",style:{background:this.state.pallete.primary.main}},n.a.createElement(x.a,{variant:"dense"},n.a.createElement(T.a,{onClick:this.toggleLeftDrawer(!0),edge:"start",className:this.state.styles.toolbarButton},n.a.createElement(j.a,{style:{color:this.state.pallete.primary.contrastText}})),n.a.createElement(w.a,{classes:{paper:this.state.styles.paper},open:this.state.drawers.left,onClose:this.toggleLeftDrawer(!1),onOpen:this.toggleLeftDrawer(!0)},n.a.createElement("div",{className:Object(y.a)(e.state.styles.list),role:"presentation",onClick:e.toggleLeftDrawer(!1),onKeyDown:e.toggleLeftDrawer(!1)},n.a.createElement(N.a,{style:{background:e.state.pallete.primary.main}},n.a.createElement(G.a,null,n.a.createElement(F.a,{primary:"Quick Links",style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(I.a,null),n.a.createElement(G.a,{button:!0,component:"a",href:"https://www.linkedin.com/in/ian-bonafede/"},n.a.createElement(F.a,{primary:"LinkedIn",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(H.e,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(G.a,{button:!0,component:"a",href:"https://www.facebook.com/ian.bonafede"},n.a.createElement(F.a,{primary:"Facebook",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(H.b,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(G.a,{button:!0,component:"a",href:"https://twitter.com/bonafede_ian"},n.a.createElement(F.a,{primary:"Twitter",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(H.f,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(G.a,{button:!0,component:"a",href:"https://www.youtube.com/channel/UCKibLpiwfT9Ju9PC0d9pQog?view_as=subscriber"},n.a.createElement(F.a,{primary:"Youtube",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(H.g,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(G.a,{button:!0,component:"a",href:"https://www.instagram.com/ianbonafede/"},n.a.createElement(F.a,{primary:"Instagram",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(H.d,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(G.a,{button:!0,component:"a",href:"https://discord.gg/H4XhXqw"},n.a.createElement(F.a,{primary:"Discord",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(H.a,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(G.a,{button:!0,component:"a",href:"https://github.com/IanBonafede"},n.a.createElement(F.a,{primary:"GitHub",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(H.c,{style:{color:e.state.pallete.primary.contrastText}}))))),n.a.createElement(T.a,{href:"/ianbonafede/#/",className:this.state.styles.toolbarButton,style:{fontFamily:"Merienda One",color:this.state.pallete.primary.contrastText,margin:0}},"Ian Bonafede"),n.a.createElement(k.a,{style:{flexGrow:1}}),n.a.createElement(T.a,{href:"/ianbonafede/#/bio",className:this.state.styles.toolbarButton},n.a.createElement(L.a,{style:{color:this.state.pallete.primary.contrastText}})),n.a.createElement(T.a,{href:"/ianbonafede/#/projects",className:this.state.styles.toolbarButton},n.a.createElement(C.a,{style:{color:this.state.pallete.primary.contrastText}})),n.a.createElement(T.a,{className:this.state.styles.toolbarButton,edge:"end"},n.a.createElement(A.a,{style:{color:this.state.pallete.primary.contrastText}}))))),n.a.createElement(E.a,{style:{backgroundColor:this.state.pallete.primary.main},maxWidth:"lg"},n.a.createElement(b.a,{basename:"".concat("/ianbonafede")},n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/",component:u}),n.a.createElement(d.a,{exact:!0,path:"/bio",component:h}),n.a.createElement(d.a,{exact:!0,path:"/Projects",component:f})))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.e58f5c5f.chunk.js.map