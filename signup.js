const fullname = document.querySelector("#fullname")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const form = document.querySelector("#form")
const error = document.querySelector(".error-message")
const success = document.querySelector(".success-message")



form.addEventListener("submit", createAccount)

function createAccount(e) {
    e.preventDefault()

    if(!fullname.value || !username.value || !password.value) {
        error.classList.remove("d-none")
        console.log("okay")
        setTimeout(() => {
            error.classList.add("d-none")
        }, 4000);
    } else {
        localStorage.setItem("username", username.value)
        localStorage.setItem("password", password.value)
        success.classList.remove("d-none")
        setTimeout(() => {
            success.classList.add("d-none")
            window.location.href = "file:///C:/Users/user/Desktop/js%20study/login.html"
        }, 4000);
    }
}