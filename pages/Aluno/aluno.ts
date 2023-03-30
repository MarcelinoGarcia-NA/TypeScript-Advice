import { User } from "../User/user";

export class Aluno extends User {
    num_incricao: number;

    constructor(name: string, idade: number | string, num_incricao: number) {
        super(name, idade);
        this.num_incricao = num_incricao;
    };
}