"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7960],{7960:(y,u,r)=>{r.r(u),r.d(u,{Tab1PageModule:()=>F});var s=r(1075),c=r(177),g=r(4341),d=r(1307),l=r(8986),e=r(4438),p=r(9398);let f=(()=>{var t;class o{constructor(){}ngOnInit(){}}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["app-note"]],inputs:{category:"category",contents:"contents"},decls:8,vars:2,template:function(n,i){1&n&&(e.j41(0,"ion-item")(1,"ion-label")(2,"h6")(3,"b"),e.EFF(4),e.k0s()(),e.j41(5,"p")(6,"ion-text"),e.EFF(7),e.k0s()()()()),2&n&&(e.R7$(4),e.SpI("",i.category," "),e.R7$(3),e.JRh(i.contents))},dependencies:[s.uz,s.he,s.IO]}),o})();const m=()=>["/","notes"];function h(t,o){1&t&&(e.j41(0,"div"),e.EFF(1," no records found "),e.k0s())}function b(t,o){if(1&t&&e.nrm(0,"app-note",7),2&t){const a=o.$implicit;e.Y8G("routerLink",e.lJ4(3,m))("category",a.category)("contents",a.content)}}const T=[{path:"",component:(()=>{var t;class o{constructor(n,i){this.noteService=n,this.loadingCtrl=i}ngOnInit(){this.isLoading=!0,this.loadingCtrl.create({keyboardClose:!0,message:"Please wait"}).then(n=>{n.present(),this.notesSub=this.noteService.GetNotes().subscribe(i=>{console.log(i),this.notes=this.notes||[];for(const P of i)this.notes.push(P);this.recordsFound=this.notes.length>0,this.isLoading=!1,n.dismiss()})})}}return(t=o).\u0275fac=function(n){return new(n||t)(e.rXU(p.i),e.rXU(s.Xi))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-tab1"]],decls:14,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["size","12","size-sm","8","offset-sm","2",1,"ion-text-center"],[4,"ngIf"],[3,"routerLink","category","contents",4,"ngFor","ngForOf"],[3,"routerLink","category","contents"]],template:function(n,i){1&n&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3," Note Listings "),e.k0s()()(),e.j41(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),e.EFF(8,"Note Listings"),e.k0s()()(),e.j41(9,"ion-row")(10,"ion-col",4)(11,"ion-list"),e.DNE(12,h,2,0,"div",5)(13,b,1,4,"app-note",6),e.k0s()()()()),2&n&&(e.Y8G("translucent",!0),e.R7$(4),e.Y8G("fullscreen",!0),e.R7$(8),e.Y8G("ngIf",!i.recordsFound),e.R7$(),e.Y8G("ngForOf",i.notes))},dependencies:[s.hU,s.W9,s.eU,s.nf,s.ln,s.BC,s.ai,s.N7,c.Sq,c.bT,l.Wk,f]}),o})()}];let v=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[l.iI.forChild(T),l.iI]}),o})(),F=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[s.bv,c.MD,g.YN,d.S,v]}),o})()}}]);