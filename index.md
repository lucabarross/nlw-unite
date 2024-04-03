fronteditor
# HTML

*Hypertext*





*Markup*
- Tags



*Language*

# CSS

# JAVASCRIPT
```js
// variaveis
  const mensagem = 'Oi, tudo bem?'
// tipos de dados 
  //number
  //string
// função
  alert(mensagem)

// objeto javascript
const participante = {
  nome: 'Luca Barros',
  email: 'lucabarros@gmail.com',
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00), 
}

//array
let participantes = [
  { 
    nome: 'Luca Barros',
    email: 'lucabarros@gmail.com',
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00), 
  },
] 

let output = ""
  //estrutura de repetição - loop
  for(let participante of participantes){
    // faça alguma coisa 
    // enquanto houver participantes nessa lista
    output = output + criarNovoParticipante(participante)
  }
```