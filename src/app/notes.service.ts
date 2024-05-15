import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Note } from './notes.model';

const BackendURL = environment.API_Prefix;


export interface NoteResponse {
    responseCode: number;  
    requestId: string;
 }

 @Injectable({
    providedIn: 'root'
  })
export class NoteService {  
    constructor(private http: HttpClient) { }

    addNote(category: string, content:string) {
        return this.http
          .post<NoteResponse>(
            BackendURL + 'note',
            {
              category : category, content : content
            }
          );
      }

      GetNotes() {
        return this.http
          .get<Note[]>(
            BackendURL + 'notes',
          );
      }
    

}


