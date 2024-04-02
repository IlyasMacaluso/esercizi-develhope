//lo span all'interno di h1
const formOwner = document.querySelector(".title-name")

//i tre input
const nameForm = document.querySelector(".firstname")
const surnameForm = document.querySelector(".lastname")
const emailForm = document.querySelector(".email")

//il bottone
const saveData = document.querySelector(".btn")

//funzione costruttrice che crea l'oggetto contenente i dati dell'utente
function addNewUser(name, surname, email) {
    this.name = name
    this.surname = surname
    this.email = email
}

//funzione che salva i dati in localStorage e imposta il titolo
function getUserData() {
    const nameValue = nameForm.value
    const surnameValue = surnameForm.value
    const emailValue = emailForm.value
    //impostiamo il titolo
    formOwner.innerText = nameValue
    //creiamo il nuovo oggetto localUser
    const userData = new addNewUser(nameValue, surnameValue, emailValue)
    //lo converto in stringa
    const userDataString = JSON.stringify(userData)
    //e lo salvo il localStorage
    localStorage.setItem(`localUser`, userDataString)
}

//trigger
saveData.addEventListener("click", () => {
    getUserData()
})

//recupero localUser e lo associo alla variabile "localUserString" (essendo l'oggetto stringified)
const localUserString = localStorage.getItem("localUser")

//impostazione del titolo se localUserString esiste in localStorage
if (localUserString) {
    //converto l'oggetto stringified in object
    const localUser = JSON.parse(localUserString)
    //imposto il titolo accedendo alla chiave name dell'oggetto
    formOwner.innerText = localUser.name
}
