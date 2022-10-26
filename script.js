function submit_fomulario() {
const buttonInicial = document.querySelector(".buttonInicial")

    buttonInicial.classList.add("animationButton")
    //timeout para ter um deley quando o botão inicial for retirado, ter um tempo para animação ser ser executada.
    setTimeout(() => {
        buttonInicial.setAttribute("hidden", "")
    }, 1000);


    let fomulario = document.querySelector(".content")

    setInterval(() => {
 
        fomulario.style.display = "flex"
        document.body.style = "backdrop-filter: blur(5px)"
    }, 1500)
    
}

function submit(){}


// x quando logar fazer o formulário ir para baixo