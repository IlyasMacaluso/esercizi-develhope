// definizone variabili
const html = document.documentElement

const body = html.children[1]

const ul = body.children[0]

const secondLi = ul.children[1]

// stampo l'elemento padre di ul
console.log( ul.parentElement)

//stampo il secondo elemento figlio di ul
console.log(ul.children[1])

//stampo il fratello successivo e precedente del secondo elemento li
console.log(secondLi.nextElementSibling) 

console.log(secondLi.previousElementSibling)