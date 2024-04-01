const form = document.querySelector(".form")
const formName = document.querySelector(".form__name")
const formPassword = document.querySelector(".form__password")
const API_URL = "https://fakestoreapi.com/auth/login"

form.addEventListener("submit",  async(e) => {
    e.preventDefault()
    let user = {
        username: formName.value,
        password: formPassword.value
    }

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {
        console.log(res.token)
        localStorage.setItem("token", res.token)
        window.open("../pages/admin.html", "_self")
    })
    .catch(err => {
        alert("Username yoki parol xato kiritildi!")
    })
    .finally ()
})