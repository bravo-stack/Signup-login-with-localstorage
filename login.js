const username = document.querySelector("#username")
const password = document.querySelector("#password")
const form = document.querySelector("#form")
const error = document.querySelector(".error-message")
const success = document.querySelector(".success-message")
const inputError = document.querySelector(".input-message")



form.addEventListener("submit", createAccount)

function createAccount(e) {
    e.preventDefault()

    if(!username.value || !password.value) {
        inputError.classList.remove("d-none")
        console.log("okay")
        setTimeout(() => {
            inputError.classList.add("d-none")
        }, 4000);
    } else if(username.value === localStorage.username &&password.value === localStorage.password ) {

        success.classList.remove("d-none")
        setTimeout(() => {
            success.classList.add("d-none")
            window.location.href = "file:///C:/Users/user/Desktop/js%20study/home.html"
        }, 4000);
    } else {
        error.classList.remove("d-none")
        setTimeout(() => {
            error.classList.add("d-none")
        }, 2000);
    }
}