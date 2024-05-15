import { Component } from '@angular/core';
import { NoteService } from '../notes.service';
import { LoadingController } from '@ionic/angular';
import { Observable , Subscription } from 'rxjs';
import { Note } from '../notes.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isLoading:boolean;
  recordsFound:boolean;

  notes: Note[];

  private notesSub: Subscription;

  constructor(private noteService: NoteService,private loadingCtrl: LoadingController) {}

  ngOnInit() {

    this.isLoading = true;

    this.loadingCtrl
      .create({ keyboardClose: true, message: "Please wait" })
      .then(loadingEl => {
        loadingEl.present();

        this.notesSub = this.noteService.GetNotes().subscribe(nts => {

          console.log(nts);
        
          this.notes = this.notes || [];
         
          for (const rw of nts) {
            this.notes.push(rw);            
          }
  
          if (this.notes.length > 0) {
            this.recordsFound = true;
    
          } else {
            this.recordsFound = false;
          
          }
  
          this.isLoading = false;
        
          loadingEl.dismiss();
  
        });
      });

  }

}
