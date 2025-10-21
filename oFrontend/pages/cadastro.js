const button = document.querySelector("button")
button.addEventListener("click", sendUser)


function sendUser (event) {
    event.preventDefault()
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    
    if (name === "" || email === "" || password === "") {
        alert("Preencha todas as informações!")
        return
    }   


    const user = {
        name,
        email,
        password
    }

    console.log(user)
}
