"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5378],{5378:(P,d,s)=>{s.r(d),s.d(d,{Tab2PageModule:()=>C});var o=s(1075),h=s(177),r=s(4341),f=s(1307),m=s(8986),e=s(4438),g=s(9398);const p=[{path:"",component:(()=>{var t;class a{constructor(n,i,l,c,b){this.alertCtrl=n,this.noteService=i,this.loadingCtrl=l,this.router=c,this.actionSheetController=b}ngOnInit(){this.form=new r.gE({category:new r.MJ(null,{updateOn:"blur",validators:[r.k0.required]}),content:new r.MJ(null,{updateOn:"blur",validators:[r.k0.required,r.k0.min(1)]})})}presentConfirmSubmission(n){this.alertCtrl.create({header:"Notes App",message:n,buttons:[{text:"OK",role:"ok",handler:()=>{this.router.navigate(["/tabs/tab1"])}}]}).then(i=>i.present())}onCreateNotes(){if(!this.form.valid)return;this.submissionDone=!1;const n=this.form.value.category,i=this.form.value.content;this.loadingCtrl.create({message:"Pls wait"}).then(l=>{let c;l.present(),c=this.noteService.addNote(n,i),this.subNote=c.subscribe(b=>{200===b.responseCode?(l.dismiss(),this.form.reset(),this.submissionDone=!0,this.presentConfirmSubmission("New Note Added!")):(this.submissionDone=!1,l.dismiss())})}).catch(l=>{this.submissionDone=!1})}ngOnDestroy(){this.subNote&&this.subNote.unsubscribe()}}return(t=a).\u0275fac=function(n){return new(n||t)(e.rXU(o.hG),e.rXU(g.i),e.rXU(o.Xi),e.rXU(m.Ix),e.rXU(o.GD))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-tab2"]],decls:30,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"formGroup"],["size-sm","6","offset-sm","3"],[1,"margin_top15"],["placeholder","Pls enter the category","formControlName","category","rows","2","cols","20"],["placeholder","Pls enter the content","formControlName","content","rows","2","cols","20"],["type","submit","color","primary","expand","block",3,"click"]],template:function(n,i){1&n&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3," Add New Note "),e.k0s()()(),e.j41(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),e.EFF(8,"New Note"),e.k0s()()(),e.nrm(9,"br")(10,"br"),e.j41(11,"form",4)(12,"ion-grid")(13,"ion-row")(14,"ion-col",5)(15,"ion-list")(16,"div",6)(17,"ion-label"),e.EFF(18,"Category"),e.k0s(),e.nrm(19,"ion-textarea",7),e.k0s(),e.nrm(20,"br"),e.j41(21,"div",6)(22,"ion-label"),e.EFF(23,"Content"),e.k0s(),e.nrm(24,"ion-textarea",8),e.k0s(),e.nrm(25,"br"),e.k0s()()(),e.j41(26,"ion-row")(27,"ion-col",5)(28,"ion-button",9),e.bIt("click",function(){return i.onCreateNotes()}),e.EFF(29," Submit "),e.k0s()()()()()()),2&n&&(e.Y8G("translucent",!0),e.R7$(4),e.Y8G("fullscreen",!0),e.R7$(7),e.Y8G("formGroup",i.form))},dependencies:[o.Jm,o.hU,o.W9,o.lO,o.eU,o.he,o.nf,o.ln,o.nc,o.BC,o.ai,o.Gw,r.qT,r.BC,r.cb,r.j4,r.JD]}),a})()}];let v=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[m.iI.forChild(p),m.iI]}),a})(),C=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[o.bv,h.MD,r.X1,f.S,v]}),a})()}}]);