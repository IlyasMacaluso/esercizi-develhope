const data = document.querySelectorAll(".form-input")
const name = data[0].value
const surname = data[1].value
const age = data[2].value

const person = {
    firstName: name,
    lastName: surname,
    age: age,
}

const jsonPerson = JSON.stringify(person)
const form = document.querySelector("form")
form.setAttribute(`data-person`, `${jsonPerson}`)