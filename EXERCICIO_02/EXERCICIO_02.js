alert("Aqui vai a os nome dos aprovados e reprovados")

let students = [
  {
    name: "Kaua",
    firstNota: 10,
    secondNota: 10,
  },
  {
    name: "Liriel",
    firstNota: 7,
    secondNota: 5,
  },
  {
    name: "Yasmin",
    firstNota: 2,
    secondNota: 4,
  },
  {
    name: "Adriana",
    firstNota: 9,
    secondNota: 8,
  },
  {
    name: "Sidnei",
    firstNota: 6,
    secondNota: 10,
  },
]

function  media (firstNota, secondNota){
  return ((firstNota + secondNota) / 2).toFixed(1)
}

function printMedia (student){
  return media(student.firstNota, student.secondNota) <= 7 ? `
A média do(a) aluno(a) ${student.name} é: ${media(student.firstNota, student.secondNota)}
Infelizmente ${student.name}! Você foi reprovado(a) no concurso, tente novamente.`
  :`
A média do(a) aluno(a) ${student.name} é: ${media(student.firstNota, student.secondNota)}
Parabéns ${student.name}! Você foi aprovado(a) no concurso`
}

for (let student of students){
  let message = printMedia(student)
  alert(message)
}