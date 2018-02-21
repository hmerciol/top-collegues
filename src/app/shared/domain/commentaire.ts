import { Collegue } from "./collegue";

export class Commentaire {
    constructor(public id:number,public collegue:Collegue,public comment:string){}
}