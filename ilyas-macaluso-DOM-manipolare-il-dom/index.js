const list = document.querySelector(".to-dos")
const input = document.querySelector('[placeholder="Add new to-do"]')
let i = 0

const addProduct = () => {
    setTimeout(() => {
        if (input.value !== "") {
            const li = document.createElement("li")
            li.innerText = input.value
            list.appendChild(li)
            i = i + 1
            li.innerHTML = `<div class="to-do"> <input type='checkbox' id= "${i}" value="${li.innerText}"><label for="${i}">${li.innerText}</label></div>`
        }
    }, 400)
}
