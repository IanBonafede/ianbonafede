(this.webpackJsonpianbonafede=this.webpackJsonpianbonafede||[]).push([[0],{62:function(e,t,a){e.exports=a(75)},67:function(e,t,a){},68:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(6),l=a.n(o),c=(a(67),a(20)),s=a(21),i=a(36),m=a(24),p=a(22),y=(a(3),a(68),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={theme:{light:"#A3A3A3",main:"#828282",dark:"#686868",contrastText:"#fff"}},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("h1",null,"Home")}}]),a}(n.a.Component)),u=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("h1",null,"Bio")}}]),a}(n.a.Component),h=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("h1",null,"Projects")}}]),a}(n.a.Component),f=a(55),b=a(8),d=a(114),E=a(111),w=a(115),g=a(112),x=a(42),k=a(113),T=a(51),v=a.n(T),j=a(52),O=a.n(j),B=a(53),L=a.n(B),C=a(54),D=a.n(C),A=a(106),N=a(110),I=a(116),G=a(109),F=a(26),H=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).toggleLeftDrawer=function(t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&(e.state.drawers.left=t,e.setState({left:t}))}},e.state={pallete:{primary:{light:"#A3A3A3",main:"#828282",dark:"#686868",contrastText:"#fff"},secondary:{light:"#A3A3A3",main:"#828282",dark:"#686868",contrastText:"#fff"}},styles:{root:{flexGrow:1},title:{flexGrow:1},toolbarButton:{height:50},listButton:{width:200},fullList:{width:"auto"},paper:{background:"#828282"}},drawers:{left:!1,right:!1}},e.toggleLeftDrawer=e.toggleLeftDrawer.bind(Object(i.a)(e)),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;document.body.style.background=this.state.pallete.primary.dark;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:this.state.styles.root},n.a.createElement(E.a,{position:"static",style:{background:this.state.pallete.primary.main}},n.a.createElement(g.a,{variant:"dense"},n.a.createElement(k.a,{onClick:this.toggleLeftDrawer(!0),edge:"start",className:this.state.styles.toolbarButton},n.a.createElement(v.a,{style:{color:this.state.pallete.primary.contrastText}})),n.a.createElement(w.a,{style:{background:this.state.pallete.primary.main},classes:{paper:this.state.styles.paper},open:this.state.drawers.left,onClose:this.toggleLeftDrawer(!1),onOpen:this.toggleLeftDrawer(!0)},n.a.createElement("div",{style:{width:200},role:"presentation",onClick:e.toggleLeftDrawer(!1),onKeyDown:e.toggleLeftDrawer(!1)},n.a.createElement(A.a,null,n.a.createElement(I.a,null,n.a.createElement(G.a,{primary:"Quick Links",style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(N.a,null),n.a.createElement(I.a,{button:!0,component:"a",href:"https://www.linkedin.com/in/ian-bonafede/"},n.a.createElement(G.a,{primary:"LinkedIn",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(F.e,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(I.a,{button:!0,component:"a",href:"https://www.facebook.com/ian.bonafede"},n.a.createElement(G.a,{primary:"Facebook",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(F.b,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(I.a,{button:!0,component:"a",href:"https://twitter.com/bonafede_ian"},n.a.createElement(G.a,{primary:"Twitter",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(F.f,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(I.a,{button:!0,component:"a",href:"https://www.youtube.com/channel/UCKibLpiwfT9Ju9PC0d9pQog?view_as=subscriber"},n.a.createElement(G.a,{primary:"Youtube",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(F.g,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(I.a,{button:!0,component:"a",href:"https://www.instagram.com/ianbonafede/"},n.a.createElement(G.a,{primary:"Instagram",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(F.d,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(I.a,{button:!0,component:"a",href:"https://discord.gg/H4XhXqw"},n.a.createElement(G.a,{primary:"Discord",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(F.a,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(I.a,{button:!0,component:"a",href:"https://github.com/IanBonafede"},n.a.createElement(G.a,{primary:"GitHub",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(F.c,{style:{color:e.state.pallete.primary.contrastText}}))))),n.a.createElement(k.a,{href:"/ianbonafede/#/",className:this.state.styles.toolbarButton,style:{fontFamily:"Merienda One",color:this.state.pallete.primary.contrastText,margin:0}},"Ian Bonafede"),n.a.createElement(x.a,{style:{flexGrow:1}}),n.a.createElement(k.a,{href:"/ianbonafede/#/bio",className:this.state.styles.toolbarButton},n.a.createElement(O.a,{style:{color:this.state.pallete.primary.contrastText}})),n.a.createElement(k.a,{href:"/ianbonafede/#/projects",className:this.state.styles.toolbarButton},n.a.createElement(L.a,{style:{color:this.state.pallete.primary.contrastText}})),n.a.createElement(k.a,{className:this.state.styles.toolbarButton,edge:"end"},n.a.createElement(D.a,{style:{color:this.state.pallete.primary.contrastText}}))))),n.a.createElement(d.a,{style:{backgroundColor:this.state.pallete.primary.main},maxWidth:"lg"},n.a.createElement(f.a,{basename:"".concat("/ianbonafede")},n.a.createElement(b.c,null,n.a.createElement(b.a,{exact:!0,path:"/",component:y}),n.a.createElement(b.a,{exact:!0,path:"/bio",component:u}),n.a.createElement(b.a,{exact:!0,path:"/Projects",component:h})))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.d998fc17.chunk.js.map