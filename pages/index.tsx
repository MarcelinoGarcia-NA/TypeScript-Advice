import { User } from "./User/user"
import { Aluno } from "./Aluno/aluno"


export default function Home() {

  const u = new User("Marcelino", 25);
  const a = new Aluno("Marcelino",20,32155);
  return (
    <>
    <h1>{u.name}</h1>
    <h1>{a.num_incricao} + nome: {a.name}</h1>
    </>
  )
}
