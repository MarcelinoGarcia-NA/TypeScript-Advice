export class User{
    name: string;
    idade: number| string;
    
    constructor(name:string,idade:number|string){
        this.name=name;
        this.idade=idade;
    };
}