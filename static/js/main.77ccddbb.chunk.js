(this.webpackJsonpianbonafede=this.webpackJsonpianbonafede||[]).push([[0],{142:function(e,t,a){e.exports=a(317)},147:function(e,t,a){},313:function(e,t,a){},317:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(8),o=a.n(l),c=(a(147),a(29)),i=a(30),s=a(39),m=a(33),p=a(31),y=a(51),h=(a(313),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={theme:{light:"#A3A3A3",main:"#828282",dark:"#686868",contrastText:"#fff"}},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("h1",null,"Home")}}]),a}(n.a.Component)),u=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("h1",null,"Bio")}}]),a}(n.a.Component),g=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("h1",null,"Projects")}}]),a}(n.a.Component),E=a(136),f=a(10),d=a(355),b=a(352),w=a(356),k=a(353),x=a(69),T=a(354),C=a(132),v=a.n(C),D=a(133),j=a.n(D),O=a(134),L=a.n(O),R=a(135),P=a.n(R),I=a(347),M=a(351),B=a(357),S=a(350),A=a(35),F=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleMainColorChange=function(t,a){e.setState({pallete:{primary:{light:e.state.pallete.primary.light,main:t.hex,dark:e.state.pallete.primary.dark,contrastText:e.state.pallete.primary.contrastText}}})},e.toggleLeftDrawer=function(t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&e.setState({drawers:{left:t}})}},e.toggleRightDrawer=function(t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&e.setState({drawers:{right:t}})}},e.state={pallete:{primary:{light:"#CCCCCC",main:"#808080",dark:"#666666",contrastText:"#ffffff"}},drawers:{left:!1,right:!1}},e.toggleLeftDrawer=e.toggleLeftDrawer.bind(Object(s.a)(e)),e.toggleRightDrawer=e.toggleRightDrawer.bind(Object(s.a)(e)),e.handleMainColorChange=e.handleMainColorChange.bind(Object(s.a)(e)),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;document.body.style.background=this.state.pallete.primary.dark;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{flexGrow:1}},n.a.createElement(b.a,{position:"static",style:{background:this.state.pallete.primary.main}},n.a.createElement(k.a,{variant:"dense"},n.a.createElement(T.a,{onClick:this.toggleLeftDrawer(!0),edge:"start",style:{height:50}},n.a.createElement(v.a,{style:{color:this.state.pallete.primary.contrastText}})),n.a.createElement(w.a,{anchor:"left",open:this.state.drawers.left,onClose:this.toggleLeftDrawer(!1),onOpen:this.toggleLeftDrawer(!0)},n.a.createElement("div",{className:"leftDrawerDiv",style:{background:e.state.pallete.primary.main},role:"presentation",onClick:e.toggleLeftDrawer(!1),onKeyDown:e.toggleLeftDrawer(!1)},n.a.createElement(I.a,null,n.a.createElement(B.a,null,n.a.createElement(S.a,{primary:"Quick Links",style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(M.a,null),n.a.createElement(B.a,{button:!0,component:"a",href:"https://www.linkedin.com/in/ian-bonafede/"},n.a.createElement(S.a,{primary:"LinkedIn",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(A.e,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(B.a,{button:!0,component:"a",href:"https://www.facebook.com/ian.bonafede"},n.a.createElement(S.a,{primary:"Facebook",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(A.b,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(B.a,{button:!0,component:"a",href:"https://twitter.com/bonafede_ian"},n.a.createElement(S.a,{primary:"Twitter",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(A.f,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(B.a,{button:!0,component:"a",href:"https://www.youtube.com/channel/UCKibLpiwfT9Ju9PC0d9pQog?view_as=subscriber"},n.a.createElement(S.a,{primary:"Youtube",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(A.g,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(B.a,{button:!0,component:"a",href:"https://www.instagram.com/ianbonafede/"},n.a.createElement(S.a,{primary:"Instagram",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(A.d,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(B.a,{button:!0,component:"a",href:"https://discord.gg/H4XhXqw"},n.a.createElement(S.a,{primary:"Discord",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(A.a,{style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(B.a,{button:!0,component:"a",href:"https://github.com/IanBonafede"},n.a.createElement(S.a,{primary:"GitHub",style:{color:e.state.pallete.primary.contrastText}}),n.a.createElement(A.c,{style:{color:e.state.pallete.primary.contrastText}}))))),n.a.createElement(T.a,{href:"/ianbonafede/#/",style:{height:50,fontFamily:"Merienda One",color:this.state.pallete.primary.contrastText,margin:0}},"Ian Bonafede"),n.a.createElement(x.a,{style:{flexGrow:1}}),n.a.createElement(T.a,{href:"/ianbonafede/#/bio",style:{height:50}},n.a.createElement(j.a,{style:{color:this.state.pallete.primary.contrastText}})),n.a.createElement(T.a,{href:"/ianbonafede/#/projects",style:{height:50}},n.a.createElement(L.a,{style:{color:this.state.pallete.primary.contrastText}})),n.a.createElement(T.a,{onClick:this.toggleRightDrawer(!0),style:{height:50},edge:"end"},n.a.createElement(P.a,{style:{color:this.state.pallete.primary.contrastText}})),n.a.createElement(w.a,{anchor:"right",open:this.state.drawers.right,onClose:this.toggleRightDrawer(!1),onOpen:this.toggleRightDrawer(!0)},n.a.createElement("div",{className:"rightDrawerDiv",style:{background:e.state.pallete.primary.main},role:"presentation",onClick:e.toggleRightDrawer(!1),onKeyDown:e.toggleRightDrawer(!1)},n.a.createElement(I.a,null,n.a.createElement(B.a,null,n.a.createElement(S.a,{primary:"Colors",style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(M.a,null),n.a.createElement(B.a,null,n.a.createElement(S.a,{primary:"Light",style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(B.a,null,n.a.createElement(y.CompactPicker,{color:e.state.pallete.primary.light})),n.a.createElement(M.a,null),n.a.createElement(B.a,null,n.a.createElement(S.a,{primary:"Main",style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(B.a,null,n.a.createElement(y.CompactPicker,{name:"main",onChange:e.handleMainColorChange,color:e.state.pallete.primary.main})),n.a.createElement(M.a,null),n.a.createElement(B.a,null,n.a.createElement(S.a,{primary:"Dark",style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(B.a,null,n.a.createElement(y.CompactPicker,{color:e.state.pallete.primary.dark})),n.a.createElement(M.a,null),n.a.createElement(B.a,null,n.a.createElement(S.a,{primary:"Text/Icons",style:{color:e.state.pallete.primary.contrastText}})),n.a.createElement(B.a,null,n.a.createElement(y.CompactPicker,{color:e.state.pallete.primary.contrastText})))))))),n.a.createElement(d.a,{style:{backgroundColor:this.state.pallete.primary.main},maxWidth:"lg"},n.a.createElement(E.a,{basename:"".concat("/ianbonafede")},n.a.createElement(f.c,null,n.a.createElement(f.a,{exact:!0,path:"/",component:h}),n.a.createElement(f.a,{exact:!0,path:"/bio",component:u}),n.a.createElement(f.a,{exact:!0,path:"/Projects",component:g})))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[142,1,2]]]);
//# sourceMappingURL=main.77ccddbb.chunk.js.map