(this.webpackJsonpianbonafede=this.webpackJsonpianbonafede||[]).push([[0],{148:function(e,t,a){e.exports=a(324)},153:function(e,t,a){},319:function(e,t,a){},324:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),o=a.n(r),s=(a(153),a(131)),c=a(132),i=a(22),m=a(142),h=a(141),p=a(49),g=a(50),d=(a(319),a(32)),u=function(e){var t=e.pallete,n=e.fonts;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{style:{fontFamily:n.title,color:t.contrastText}},"Featured"),l.a.createElement(d.a,{style:{height:400}},l.a.createElement(d.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:a(89),alt:"First slide"}),l.a.createElement(d.a.Caption,null,l.a.createElement("h3",null,"First slide label"),l.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),l.a.createElement(d.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:a(89),alt:"Third slide"}),l.a.createElement(d.a.Caption,null,l.a.createElement("h3",null,"Second slide label"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),l.a.createElement(d.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:a(89),alt:"Third slide"}),l.a.createElement(d.a.Caption,null,l.a.createElement("h3",null,"Third slide label"),l.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))))},E=function(e){var t=e.pallete,a=e.fonts;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{style:{fontFamily:a.title,color:t.contrastText}},"Bio"))},f=function(e){var t=e.pallete,a=e.fonts;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{style:{fontFamily:a.title,color:t.contrastText}},"Projects"))},y=a(140),C=a(12),b=a(360),x=a(364),T=a(362),k=a(68),w=a(363),S=a(136),F=a.n(S),v=a(137),D=a.n(v),O=a(138),L=a.n(O),j=a(139),I=a.n(j),P=a(355),M=a(359),A=a(365),N=a(358),U=(a(320),a(361)),B=a(33),R=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleLightColorChange=function(e){n.setState({pallete:{light:e.hex,main:n.state.pallete.main,dark:n.state.pallete.dark,contrastText:n.state.pallete.contrastText}})},n.handleMainColorChange=function(e){n.setState({pallete:{light:n.state.pallete.light,main:e.hex,dark:n.state.pallete.dark,contrastText:n.state.pallete.contrastText}})},n.handleDarkColorChange=function(e){n.setState({pallete:{light:n.state.pallete.light,main:n.state.pallete.main,dark:e.hex,contrastText:n.state.pallete.contrastText}})},n.handleTextColorChange=function(e){n.setState({pallete:{light:n.state.pallete.light,main:n.state.pallete.main,dark:n.state.pallete.dark,contrastText:e.hex}})},n.handleLogoFontChange=function(e){n.setState({fonts:{logo:e.family,title:n.state.fonts.title,section:n.state.fonts.section,paragraph:n.state.fonts.paragraph}})},n.handleTitleFontChange=function(e){n.setState({fonts:{logo:n.state.fonts.logo,title:e.family,section:n.state.fonts.section,paragraph:n.state.fonts.paragraph}})},n.handleSectionFontChange=function(e){n.setState({fonts:{logo:n.state.fonts.logo,title:n.state.fonts.title,section:e.family,paragraph:n.state.fonts.paragraph}})},n.handleParagraphFontChange=function(e){n.setState({fonts:{logo:n.state.fonts.logo,title:n.state.fonts.title,section:n.state.fonts.section,paragraph:e.family}})},n.toggleLeftDrawer=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&n.setState({drawers:{left:e}})}},n.toggleRightDrawer=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&n.setState({drawers:{right:e}})}},n.state={pallete:{light:"#CCCCCC",main:"#808080",dark:"#666666",contrastText:"#ffffff"},fonts:{logo:"Open Sans",title:"Open Sans",section:"Open Sans",paragraph:"Open Sans"},drawers:{left:!1,right:!1}},n.toggleLeftDrawer=n.toggleLeftDrawer.bind(Object(i.a)(n)),n.toggleRightDrawer=n.toggleRightDrawer.bind(Object(i.a)(n)),n.handleLightColorChange=n.handleLightColorChange.bind(Object(i.a)(n)),n.handleMainColorChange=n.handleMainColorChange.bind(Object(i.a)(n)),n.handleDarkColorChange=n.handleDarkColorChange.bind(Object(i.a)(n)),n.handleTextColorChange=n.handleTextColorChange.bind(Object(i.a)(n)),n.handleLogoFontChange=n.handleLogoFontChange.bind(Object(i.a)(n)),n.handleTitleFontChange=n.handleTitleFontChange.bind(Object(i.a)(n)),n.handleSectionFontChange=n.handleSectionFontChange.bind(Object(i.a)(n)),n.handleParagraphFontChange=n.handleParagraphFontChange.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;document.body.style.background=this.state.pallete.dark;var t=["Merienda One","Charmonman","Condiment","Tangerine","Euphoria Script","Srisakdi","Pirata One","Mogra","Modak","Stylish","Gabriela","Marmelad","DM Mono","Calligraffitti","Averia Serif Libre","Asul","Amita","Milonga","IM Fell English SC","Germania One","Stardos Stencil","Shojumaru","Almendra","Oxanium","Iceland","Metamorphous","Nova Mono","Nova Round","Sedgwick Ave Display","Sarina","Yatra One","Marko One","Iceberg","Junge","UnifrakturCook","Uncial Antiqua","Eagle Lake","Linden Hill","Kotta One","Open Sans","Roboto","Ubuntu","Roboto Slab","PT Serif"];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{flexGrow:1}},l.a.createElement(b.a,{position:"static",style:{background:this.state.pallete.main,margin:0,padding:0},elevation:0},l.a.createElement(U.a,{maxWidth:"xl"},l.a.createElement(T.a,{variant:"dense",style:{margin:0,padding:0}},l.a.createElement(w.a,{onClick:this.toggleLeftDrawer(!0),edge:"start",style:{height:50}},l.a.createElement(F.a,{style:{color:this.state.pallete.contrastText}})),l.a.createElement(x.a,{anchor:"left",open:this.state.drawers.left,onClose:this.toggleLeftDrawer(!1),onOpen:this.toggleLeftDrawer(!0),BackdropProps:{invisible:!0}},l.a.createElement("div",{className:"leftDrawerDiv",style:{background:e.state.pallete.main},role:"presentation",onKeyDown:e.toggleLeftDrawer(!1)},l.a.createElement(P.a,{style:{background:e.state.pallete.main}},l.a.createElement(A.a,null,l.a.createElement(N.a,{primary:"Quick Links",style:{color:e.state.pallete.contrastText}})),l.a.createElement(M.a,null),l.a.createElement(A.a,{button:!0,component:"a",href:"https://www.linkedin.com/in/ian-bonafede/"},l.a.createElement(N.a,{primary:"LinkedIn",style:{color:e.state.pallete.contrastText}}),l.a.createElement(B.e,{style:{color:e.state.pallete.contrastText}})),l.a.createElement(A.a,{button:!0,component:"a",href:"https://www.facebook.com/ian.bonafede"},l.a.createElement(N.a,{primary:"Facebook",style:{color:e.state.pallete.contrastText}}),l.a.createElement(B.b,{style:{color:e.state.pallete.contrastText}})),l.a.createElement(A.a,{button:!0,component:"a",href:"https://twitter.com/bonafede_ian"},l.a.createElement(N.a,{primary:"Twitter",style:{color:e.state.pallete.contrastText}}),l.a.createElement(B.f,{style:{color:e.state.pallete.contrastText}})),l.a.createElement(A.a,{button:!0,component:"a",href:"https://www.youtube.com/channel/UCKibLpiwfT9Ju9PC0d9pQog?view_as=subscriber"},l.a.createElement(N.a,{primary:"Youtube",style:{color:e.state.pallete.contrastText}}),l.a.createElement(B.g,{style:{color:e.state.pallete.contrastText}})),l.a.createElement(A.a,{button:!0,component:"a",href:"https://www.instagram.com/ianbonafede/"},l.a.createElement(N.a,{primary:"Instagram",style:{color:e.state.pallete.contrastText}}),l.a.createElement(B.d,{style:{color:e.state.pallete.contrastText}})),l.a.createElement(A.a,{button:!0,component:"a",href:"https://discord.gg/H4XhXqw"},l.a.createElement(N.a,{primary:"Discord",style:{color:e.state.pallete.contrastText}}),l.a.createElement(B.a,{style:{color:e.state.pallete.contrastText}})),l.a.createElement(A.a,{button:!0,component:"a",href:"https://github.com/IanBonafede"},l.a.createElement(N.a,{primary:"GitHub",style:{color:e.state.pallete.contrastText}}),l.a.createElement(B.c,{style:{color:e.state.pallete.contrastText}}))))),l.a.createElement(w.a,{href:"/ianbonafede/#/",style:{height:50,fontFamily:this.state.fonts.logo,color:this.state.pallete.contrastText,margin:0}},"Ian Bonafede"),l.a.createElement(k.a,{style:{flexGrow:1}}),l.a.createElement(w.a,{href:"/ianbonafede/#/bio",style:{height:50,color:this.state.pallete.contrastText}},l.a.createElement(D.a,{style:{color:this.state.pallete.contrastText}})),l.a.createElement(w.a,{href:"/ianbonafede/#/projects",style:{height:50,color:this.state.pallete.contrastText}},l.a.createElement(L.a,{style:{color:this.state.pallete.contrastText}})),l.a.createElement(w.a,{onClick:this.toggleRightDrawer(!0),style:{height:50,color:this.state.pallete.contrastText}},l.a.createElement(I.a,{style:{color:this.state.pallete.contrastText}})),l.a.createElement(x.a,{anchor:"right",open:this.state.drawers.right,onClose:this.toggleRightDrawer(!1),onOpen:this.toggleRightDrawer(!0),BackdropProps:{invisible:!0}},l.a.createElement("div",{className:"rightDrawerDiv",style:{background:e.state.pallete.main},role:"presentation",onKeyDown:e.toggleRightDrawer(!1)},l.a.createElement(P.a,{style:{background:e.state.pallete.main}},l.a.createElement(A.a,null,l.a.createElement(N.a,{primary:"Colors",style:{color:e.state.pallete.contrastText}})),l.a.createElement(M.a,null),l.a.createElement(A.a,null,l.a.createElement(N.a,{primary:"Light",style:{color:e.state.pallete.contrastText}})),l.a.createElement(A.a,null,l.a.createElement(p.ChromePicker,{onChange:e.handleLightColorChange,color:e.state.pallete.light})),l.a.createElement(M.a,null),l.a.createElement(A.a,null,l.a.createElement(N.a,{primary:"Main",style:{color:e.state.pallete.contrastText}})),l.a.createElement(A.a,null,l.a.createElement(p.ChromePicker,{onChange:e.handleMainColorChange,color:e.state.pallete.main})),l.a.createElement(M.a,null),l.a.createElement(A.a,null,l.a.createElement(N.a,{primary:"Dark",style:{color:e.state.pallete.contrastText}})),l.a.createElement(A.a,null,l.a.createElement(p.ChromePicker,{onChange:e.handleDarkColorChange,color:e.state.pallete.dark})),l.a.createElement(M.a,null),l.a.createElement(A.a,null,l.a.createElement(N.a,{primary:"Text/Icons",style:{color:e.state.pallete.contrastText}})),l.a.createElement(A.a,null,l.a.createElement(p.ChromePicker,{onChange:e.handleTextColorChange,color:e.state.pallete.contrastText})),l.a.createElement(M.a,null),l.a.createElement(A.a,null,l.a.createElement(N.a,{primary:"Fonts",style:{color:e.state.pallete.contrastText}})),l.a.createElement(M.a,null),l.a.createElement(A.a,null,l.a.createElement(N.a,{primary:"Logo",style:{color:e.state.pallete.contrastText}})),l.a.createElement(A.a,null,l.a.createElement(g.a,{apiKey:"AIzaSyA_UvCyYSVUs29fC2_8ZEjLNc1sIFwB4Dk",families:t,activeFontFamily:e.state.fonts.logo,onChange:e.handleLogoFontChange})),l.a.createElement(M.a,null),l.a.createElement(A.a,null,l.a.createElement(N.a,{primary:"Title",style:{color:e.state.pallete.contrastText}})),l.a.createElement(A.a,null,l.a.createElement(g.a,{apiKey:"AIzaSyA_UvCyYSVUs29fC2_8ZEjLNc1sIFwB4Dk",families:t,activeFontFamily:e.state.fonts.title,onChange:e.handleTitleFontChange})),l.a.createElement(M.a,null),l.a.createElement(A.a,null,l.a.createElement(N.a,{primary:"Section",style:{color:e.state.pallete.contrastText}})),l.a.createElement(A.a,null,l.a.createElement(g.a,{apiKey:"AIzaSyA_UvCyYSVUs29fC2_8ZEjLNc1sIFwB4Dk",families:t,activeFontFamily:e.state.fonts.section,onChange:e.handleSectionFontChange})),l.a.createElement(M.a,null),l.a.createElement(A.a,null,l.a.createElement(N.a,{primary:"Paragraph",style:{color:e.state.pallete.contrastText}})),l.a.createElement(A.a,null,l.a.createElement(g.a,{apiKey:"AIzaSyA_UvCyYSVUs29fC2_8ZEjLNc1sIFwB4Dk",families:t,activeFontFamily:e.state.fonts.paragraph,onChange:e.handleParagraphFontChange}))))))))),l.a.createElement(U.a,{maxWidth:"xl"},l.a.createElement(y.a,{basename:"".concat("/ianbonafede")},l.a.createElement(C.c,null,l.a.createElement(C.a,{exact:!0,path:"/",render:function(t){return l.a.createElement(u,Object.assign({},t,{pallete:e.state.pallete,fonts:e.state.fonts}))}}),l.a.createElement(C.a,{exact:!0,path:"/bio",render:function(t){return l.a.createElement(E,Object.assign({},t,{pallete:e.state.pallete,fonts:e.state.fonts}))}}),l.a.createElement(C.a,{exact:!0,path:"/Projects",render:function(t){return l.a.createElement(f,Object.assign({},t,{pallete:e.state.pallete,fonts:e.state.fonts}))}})))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,a){e.exports=a.p+"static/media/carousel.d3fc658b.png"}},[[148,1,2]]]);
//# sourceMappingURL=main.95b8ddae.chunk.js.map