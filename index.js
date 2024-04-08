let participantes = [
  { 
    nome: 'Luca Barros',
    email: 'lucabarros@gmail.com',
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00), 
  },
  { 
    nome: 'Mariana Silva',
    email: 'marianasilva@gmail.com',
    dataInscricao: new Date(2024, 2, 23, 14, 30),
    dataCheckIn: null, 
  },
  { 
    nome: 'Pedro Oliveira',
    email: 'pedrooliveira@gmail.com',
    dataInscricao: new Date(2024, 2, 24, 10, 15),
    dataCheckIn: new Date(2024, 2, 25, 23, 30), 
  },
  { 
    nome: 'Carla Santos',
    email: 'carlasantos@gmail.com',
    dataInscricao: new Date(2024, 2, 25, 8, 45),
    dataCheckIn: new Date(2024, 2, 25, 20, 10), 
  },
  { 
    nome: 'Rafael Souza',
    email: 'rafaelsouza@gmail.com',
    dataInscricao: new Date(2024, 2, 25, 12, 0),
    dataCheckIn: null, 
  },
  { 
    nome: 'Ana Lima',
    email: 'analima@gmail.com',
    dataInscricao: new Date(2024, 2, 26, 9, 30),
    dataCheckIn: new Date(2024, 2, 25, 19, 45), 
  },
  { 
    nome: 'Marcos Santos',
    email: 'marcossantos@gmail.com',
    dataInscricao: new Date(2024, 2, 26, 15, 20),
    dataCheckIn: null, 
  },
  { 
    nome: 'Isabela Almeida',
    email: 'isabelaalmeida@gmail.com',
    dataInscricao: new Date(2024, 2, 27, 11, 10),
    dataCheckIn: null, 
  },
  { 
    nome: 'José Silva',
    email: 'josesilva@gmail.com',
    dataInscricao: new Date(2024, 2, 27, 17, 30),
    dataCheckIn: new Date(2024, 2, 25, 20, 30), 
  },
  { 
    nome: 'Amanda Costa',
    email: 'amandacosta@gmail.com',
    dataInscricao: new Date(2024, 2, 28, 9, 45),
    dataCheckIn: new Date(2024, 2, 25, 22, 45), 
  }
];
 
const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  //condicional
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  //estrutura de repetição - loop
  for(let participante of participantes){
    output = output + criarNovoParticipante(participante)
  }

  //substituir a informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosFormulario = new FormData(event.target)

  const participante = {
    nome: dadosFormulario.get('nome'),
    email: dadosFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  //verificar se o participante ja existe
  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  )

  if(participanteExiste){
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  //limpar o formulário
  event.target.querySelector('[name="nome"]').value= ""
  event.target.querySelector('[name="email"]').value= ""
}

const fazerCheckIn = (event) => {
  //confirmação se realmente quer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  if(confirm(mensagemConfirmacao) == false) {
    return 
  } 

  alert(resultado) // true or false - boolean

  //encontrar o participante dentro da lista
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email 
  )
  //atualizar o check-in do participante
  participante.dataCheckIn = new Date()

  //atualizar a lista de participantes
  atualizarLista(participantes)
}