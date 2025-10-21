const button = document.querySelector("button");
const main = document.querySelector("main");
button.addEventListener("click", buscarUsuario);

async function buscarUsuario() {
    const users = await fetch("http://localhost:3333").then((response) => response.json())

users.map(user =>{
main.innerHTML +=`
<section>
            <h3>Nome: ${user.name}</h3>
            <p>Idade: ${user.age} anos</p>
            <p>E-mail: ${user.email}</p>
        </section>
`
    })
}