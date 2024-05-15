export class Note {
    constructor(
        public user_id : string,
        public user_name : string,
        public note_id : string,
        public timestamp : number,
        public note_Id: number,
        public category: string,
        public content: string      
        ) { }
}