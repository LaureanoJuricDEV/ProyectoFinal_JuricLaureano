

//-----------VARIABLES PARA EL REGISTRO DEL USUARIO--------------//


const formRegister=document.getElementById("formRegister");

//---VARIABLES DE USER VALID Y PASSWORD VALID----

const userValid=document.getElementById("userValid");
const passwordValid=document.getElementById("passwordValid");
const passwordValid2=document.getElementById("passwordValid2");
const btnRegister=document.getElementById("btnRegister");





formRegister.addEventListener("submit", (e)=>{
    e.preventDefault();
     usuarioRegistrado=userValid.value;
     claveRegistrada=passwordValid.value;
     claveConfirmada=passwordValid2.value;
     const textAlert=document.getElementById("textAlert")
     
    
        if (claveRegistrada!=claveConfirmada){
            passwordValid.style.color="Red"
            passwordValid2.style.color="Red"
            textAlert.style.background="red"
            textAlert.style.display="flex"
            textAlert.innerHTML="Las claves no coinciden"
            
        } else {
         alertLogin.innerHTML=""
         alertLogin.style.background="none"
             Swal.fire({
                title:"Registro exitoso",
                icon:"success",
                confirmButtonColor:"#005D11",
                confirmButtonText:"Continuar"
            }) 
            containerUser.style.display="flex"
            formRegister.style.display="none"
            formRegister.reset();
            textAlert.style.display="none";
            passwordValid.style.color="black"
            passwordValid2.style.color="black"
            localStorage.setItem("Usuario", usuarioRegistrado)
            localStorage.setItem("Clave" , claveConfirmada)
        }
        
        
})



//DECLARAMOS VARIABLES USER Y PASSWORD

const formLogin=document.getElementById("formLogin");
const formLoginUser=document.getElementById("formLoginUser");
const formLoginPassword=document.getElementById("formLoginPassword");




//DECLARAMOS VARIABLE DEL BOTON "INGRESAR"


const btnLoginForm=document.getElementById("btnLoginForm");
const validationLogin=document.getElementById("validationLogin");
const imagen=document.getElementById("containerUserImg");
const alertLogin=document.getElementById("alertLogin")
formLogin.addEventListener("submit", (e)=>{
      e.preventDefault();
      usuarioIngresado=formLoginUser.value;
      claveIngresada=formLoginPassword.value;
      usuarioValido= localStorage.getItem("Usuario");
      claveValida=localStorage.getItem("Clave")
      console.log(usuarioValido+claveValida)
      
 if(usuarioIngresado!=usuarioValido){
    imagen.style.background="red"
    alertLogin.innerHTML="Oh, ¡algo ha fallado! no reconocemos el usuario"
    alertLogin.style.background="red"
    formLogin.reset();
    
 } else if (claveIngresada!=claveValida){
    imagen.style.background="red";
    alertLogin.innerHTML="Oh, ¡algo ha fallado! no reconocemos esa clave"
    alertLogin.style.background="red"
    formLogin.reset()
 } else {
    formLogin.reset();
    imagen.style.background="green"
    (window.location="main.html")}

 


})


//DECLARAMOS FUNCION PARA REGISTRARTE


const registerUser=document.getElementById("registerUser");
const containerUser=document.getElementById("containerUser");

registerUser.addEventListener("click", ()=>{
    containerUser.style.display="none"
    formRegister.style.display="flex"
    formLogin.reset();
    imagen.style.background="white"
})


//DATOS INCORRECTOS / CORRECTOS
