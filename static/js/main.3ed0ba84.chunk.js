(this.webpackJsonpianbonafede=this.webpackJsonpianbonafede||[]).push([[0],{142:function(e,t,a){e.exports=a(317)},147:function(e,t,a){},313:function(e,t,a){},317:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(8),o=a.n(r),c=(a(147),a(125)),s=a(126),i=a(28),m=a(136),h=a(135),g=a(47),p=(a(313),a(347)),d=function(e){var t=e.pallete,a=e.fonts;return n.a.createElement(p.a,{style:{backgroundColor:t.main},maxWidth:"lg"},n.a.createElement("h1",{style:{fontFamily:a.title,color:t.contrastText}},"Home"))},f=function(e){var t=e.pallete,a=e.fonts;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{style:{fontFamily:a.title,color:t.contrastText}},"Bio"))},u=function(e){var t=e.pallete,a=e.fonts;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{style:{fontFamily:a.title,color:t.contrastText}},"Projects"))},E=a(134),y=a(10),b=a(353),C=a(356),w=a(354),x=a(65),k=a(355),T=a(130),D=a.n(T),v=a(131),j=a.n(v),L=a(132),O=a.n(L),F=a(133),S=a.n(F),P=a(350),R=a(352),I=a(357),M=a(351),B=a(32),G=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).handleLightColorChange=function(e){l.setState({pallete:{light:e.hex,main:l.state.pallete.main,dark:l.state.pallete.dark,contrastText:l.state.pallete.contrastText}})},l.handleMainColorChange=function(e){l.setState({pallete:{light:l.state.pallete.light,main:e.hex,dark:l.state.pallete.dark,contrastText:l.state.pallete.contrastText}})},l.handleDarkColorChange=function(e){l.setState({pallete:{light:l.state.pallete.light,main:l.state.pallete.main,dark:e.hex,contrastText:l.state.pallete.contrastText}})},l.handleTextColorChange=function(e){l.setState({pallete:{light:l.state.pallete.light,main:l.state.pallete.main,dark:l.state.pallete.dark,contrastText:e.hex}})},l.toggleLeftDrawer=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&l.setState({drawers:{left:e}})}},l.toggleRightDrawer=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&l.setState({drawers:{right:e}})}},l.state={pallete:{light:"#CCCCCC",main:"#808080",dark:"#666666",contrastText:"#ffffff"},fonts:{title:"Merienda One"},drawers:{left:!1,right:!1}},l.toggleLeftDrawer=l.toggleLeftDrawer.bind(Object(i.a)(l)),l.toggleRightDrawer=l.toggleRightDrawer.bind(Object(i.a)(l)),l.handleLightColorChange=l.handleLightColorChange.bind(Object(i.a)(l)),l.handleMainColorChange=l.handleMainColorChange.bind(Object(i.a)(l)),l.handleDarkColorChange=l.handleDarkColorChange.bind(Object(i.a)(l)),l.handleTextColorChange=l.handleTextColorChange.bind(Object(i.a)(l)),l}return Object(s.a)(a,[{key:"render",value:function(){var e=this;document.body.style.background=this.state.pallete.dark;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{flexGrow:1}},n.a.createElement(b.a,{position:"static",style:{background:this.state.pallete.main},elevation:0},n.a.createElement(w.a,{variant:"dense"},n.a.createElement(k.a,{onClick:this.toggleLeftDrawer(!0),edge:"start",style:{height:50}},n.a.createElement(D.a,{style:{color:this.state.pallete.contrastText}})),n.a.createElement(C.a,{anchor:"left",open:this.state.drawers.left,onClose:this.toggleLeftDrawer(!1),onOpen:this.toggleLeftDrawer(!0)},n.a.createElement("div",{className:"leftDrawerDiv",style:{background:e.state.pallete.main},role:"presentation",onClick:e.toggleLeftDrawer(!1),onKeyDown:e.toggleLeftDrawer(!1)},n.a.createElement(P.a,{style:{background:e.state.pallete.main}},n.a.createElement(I.a,null,n.a.createElement(M.a,{primary:"Quick Links",style:{color:e.state.pallete.contrastText}})),n.a.createElement(R.a,null),n.a.createElement(I.a,{button:!0,component:"a",href:"https://www.linkedin.com/in/ian-bonafede/"},n.a.createElement(M.a,{primary:"LinkedIn",style:{color:e.state.pallete.contrastText}}),n.a.createElement(B.e,{style:{color:e.state.pallete.contrastText}})),n.a.createElement(I.a,{button:!0,component:"a",href:"https://www.facebook.com/ian.bonafede"},n.a.createElement(M.a,{primary:"Facebook",style:{color:e.state.pallete.contrastText}}),n.a.createElement(B.b,{style:{color:e.state.pallete.contrastText}})),n.a.createElement(I.a,{button:!0,component:"a",href:"https://twitter.com/bonafede_ian"},n.a.createElement(M.a,{primary:"Twitter",style:{color:e.state.pallete.contrastText}}),n.a.createElement(B.f,{style:{color:e.state.pallete.contrastText}})),n.a.createElement(I.a,{button:!0,component:"a",href:"https://www.youtube.com/channel/UCKibLpiwfT9Ju9PC0d9pQog?view_as=subscriber"},n.a.createElement(M.a,{primary:"Youtube",style:{color:e.state.pallete.contrastText}}),n.a.createElement(B.g,{style:{color:e.state.pallete.contrastText}})),n.a.createElement(I.a,{button:!0,component:"a",href:"https://www.instagram.com/ianbonafede/"},n.a.createElement(M.a,{primary:"Instagram",style:{color:e.state.pallete.contrastText}}),n.a.createElement(B.d,{style:{color:e.state.pallete.contrastText}})),n.a.createElement(I.a,{button:!0,component:"a",href:"https://discord.gg/H4XhXqw"},n.a.createElement(M.a,{primary:"Discord",style:{color:e.state.pallete.contrastText}}),n.a.createElement(B.a,{style:{color:e.state.pallete.contrastText}})),n.a.createElement(I.a,{button:!0,component:"a",href:"https://github.com/IanBonafede"},n.a.createElement(M.a,{primary:"GitHub",style:{color:e.state.pallete.contrastText}}),n.a.createElement(B.c,{style:{color:e.state.pallete.contrastText}}))))),n.a.createElement(k.a,{href:"/ianbonafede/#/",style:{height:50,fontFamily:this.state.fonts.title,color:this.state.pallete.contrastText,margin:0}},"Ian Bonafede"),n.a.createElement(x.a,{style:{flexGrow:1}}),n.a.createElement(k.a,{href:"/ianbonafede/#/bio",style:{height:50}},n.a.createElement(j.a,{style:{color:this.state.pallete.contrastText}})),n.a.createElement(k.a,{href:"/ianbonafede/#/projects",style:{height:50}},n.a.createElement(O.a,{style:{color:this.state.pallete.contrastText}})),n.a.createElement(k.a,{onClick:this.toggleRightDrawer(!0),style:{height:50},edge:"end"},n.a.createElement(S.a,{style:{color:this.state.pallete.contrastText}})),n.a.createElement(C.a,{anchor:"right",open:this.state.drawers.right,onClose:this.toggleRightDrawer(!1),onOpen:this.toggleRightDrawer(!0)},n.a.createElement("div",{className:"rightDrawerDiv",style:{background:e.state.pallete.main},role:"presentation",onKeyDown:e.toggleRightDrawer(!1)},n.a.createElement(P.a,{style:{background:e.state.pallete.main}},n.a.createElement(I.a,null,n.a.createElement(M.a,{primary:"Colors",style:{color:e.state.pallete.contrastText}})),n.a.createElement(R.a,null),n.a.createElement(I.a,null,n.a.createElement(M.a,{primary:"Light",style:{color:e.state.pallete.contrastText}})),n.a.createElement(I.a,null,n.a.createElement(g.ChromePicker,{onChange:e.handleLightColorChange,color:e.state.pallete.light})),n.a.createElement(R.a,null),n.a.createElement(I.a,null,n.a.createElement(M.a,{primary:"Main",style:{color:e.state.pallete.contrastText}})),n.a.createElement(I.a,null,n.a.createElement(g.ChromePicker,{onChange:e.handleMainColorChange,color:e.state.pallete.main})),n.a.createElement(R.a,null),n.a.createElement(I.a,null,n.a.createElement(M.a,{primary:"Dark",style:{color:e.state.pallete.contrastText}})),n.a.createElement(I.a,null,n.a.createElement(g.ChromePicker,{onChange:e.handleDarkColorChange,color:e.state.pallete.dark})),n.a.createElement(R.a,null),n.a.createElement(I.a,null,n.a.createElement(M.a,{primary:"Text/Icons",style:{color:e.state.pallete.contrastText}})),n.a.createElement(I.a,null,n.a.createElement(g.ChromePicker,{onChange:e.handleTextColorChange,color:e.state.pallete.contrastText})))))))),n.a.createElement(E.a,{basename:"".concat("/ianbonafede")},n.a.createElement(y.c,null,n.a.createElement(y.a,{exact:!0,path:"/",render:function(t){return n.a.createElement(d,Object.assign({},t,{pallete:e.state.pallete,fonts:e.state.fonts}))}}),n.a.createElement(y.a,{exact:!0,path:"/bio",render:function(t){return n.a.createElement(f,Object.assign({},t,{pallete:e.state.pallete,fonts:e.state.fonts}))}}),n.a.createElement(y.a,{exact:!0,path:"/Projects",render:function(t){return n.a.createElement(u,Object.assign({},t,{pallete:e.state.pallete,fonts:e.state.fonts}))}}))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[142,1,2]]]);
//# sourceMappingURL=main.3ed0ba84.chunk.js.map