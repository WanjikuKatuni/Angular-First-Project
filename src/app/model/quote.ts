export class Quote {
    showDescription:boolean;
    constructor(public id:number, public quote:string, public author:string, public publisher:string, public voteCount:number, public dateCreated:Date)
    {
        this.showDescription=true
    }
}
