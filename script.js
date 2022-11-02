let fomulario = document.querySelector(".content")

function submit_fomulario() {
const buttonInicial = document.querySelector(".buttonInicial")

    buttonInicial.classList.add("animationButton")
    //timeout para ter um deley quando o botão inicial for retirado, ter um tempo para animação ser ser executada.
    setTimeout(() => {
        buttonInicial.setAttribute("hidden", "")
    }, 1000);

    setTimeout(() => {
 
        fomulario.style.display = "flex"
        document.body.style = "backdrop-filter: blur(5px)"
        
    }, 1500)
    
}

document.querySelector(".login_submit").onclick = function () {

const password = document.querySelector(".password_input")
const nick = document.querySelector(".nick")


if(nick.value.length < 3){
     nick.style.borderColor = "red"
 }
  else if(password.value.length < 3){
           nick.style.borderColor = "#d3ab5c"
           password.style.borderColor = "red" 
  }
  else {
    window.location.reload(true)
    localStorage.setItem("Nickname", input.value);
  }

}


// window.location = "page/loading.html"

// [ ] criar um função para análisar o formulário e returna algo, 
// [ ] criar uma nova page que será postério ao efetuar login
// [ ] criar arrow down nessa page