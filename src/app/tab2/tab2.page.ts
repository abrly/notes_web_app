import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController, AlertController, ActionSheetController } from '@ionic/angular';
import { NoteService,NoteResponse } from '../notes.service';
import { Observable , Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  form: FormGroup;
  submissionDone:boolean;

  constructor(private alertCtrl: AlertController, 
    private noteService: NoteService,
    private loadingCtrl: LoadingController,private router: Router, private actionSheetController: ActionSheetController) { }

  private subNote: Subscription;

  ngOnInit() {


    this.form = new FormGroup({
      category: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      content: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      })
    });


  }

  private presentConfirmSubmission(msg: string) {
    this.alertCtrl
      .create({
        header: "Notes App",
        message: msg,
        buttons: [{
          text: "OK",
          role: 'ok',
          handler: () => {
            this.router.navigate(['/tabs/tab1']);
          }
        }]
      })
      .then(alertEl => alertEl.present());
  }


  onCreateNotes() {

    if (!this.form.valid) {
      return;
    }

    this.submissionDone = false;

    const category  =  this.form.value.category;
    const content  =  this.form.value.content;
   
    this.loadingCtrl
    .create({
      message : "Pls wait"
    })
    .then((loadEl) => {

      loadEl.present();

      let fbObs: Observable<NoteResponse>;

      fbObs = this.noteService.addNote(category, content);

      this.subNote = fbObs.subscribe((resp) => {

       
          if (resp.responseCode === 200){

           
            loadEl.dismiss();

            this.form.reset();

            this.submissionDone = true;
          

            this.presentConfirmSubmission("New Note Added!");


          } else {

            this.submissionDone = false;
            loadEl.dismiss();

          }

      });


    }).catch((err) => {

      this.submissionDone = false;

    });

  }




  ngOnDestroy() {

    if (this.subNote) {
      this.subNote.unsubscribe();
    }

  }


}
