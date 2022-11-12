//------CLASE DE MOVIMIENTOS-----//

class Movimiento{
    constructor (accion,monto){
        this.accion=accion,
        this.monto=monto;
    }
}

const registerMovimientos=[];



//VARIABLE DE BIENVENIDA
const welcomeUser=document.getElementById("welcomeUser");
welcomeUser.innerHTML=localStorage.getItem("Usuario") 


const containerWelcomeUser=document.getElementById("containerWelcomeUser");

//----OPCIONES DE BOTON CARGAR-----
const btnCargar=document.getElementById("btnCargar");
const containerCargar=document.getElementById("containerCargar");
const saldoTotal=document.getElementById("saldoTotal");

let saldo=0;

btnCargar.addEventListener("click",()=>{
    containerCargar.style.display="flex"
    containerDebitar.style.display="none"
    containerMovimiento.style.display="none"
    containerMercado.style.display="none"
    containerWelcomeUser.style.display="none"
    registroMovimientos.innerHTML=""
}) 
const inputCargar=document.getElementById("inputCargar");
const btnAcreditar=document.getElementById("btnAcreditar");
const formCargar=document.getElementById("formCargar");



formCargar.addEventListener("submit", (e)=>{
    e.preventDefault();
    montoCargar=inputCargar.value;
    opcionCargar=btnAcreditar.value;
    
    if(montoCargar<=0){
       alertMonto2();
       formCargar.reset();
    } else{
        const cargado= new Movimiento(opcionCargar, montoCargar);
    registerMovimientos.push(cargado);

       saldo+=parseInt(montoCargar);
       saldoTotal.innerHTML=saldo;
        localStorage.setItem("Movimiento", JSON.stringify(registerMovimientos))
        formCargar.reset();
        alertMonto1();
    }
    
})

//FUNCION PARA LOS ALERTS   
function alertMonto1(){
    Toastify({
        text: "Operacion exitosa",
        gravity:"bottom",
        position:"right",
        style: 
        {
            background:"green", 
            color:"white"
        }
      }).showToast();
}

function alertMonto2(){
    Toastify({
        text: "Monto Invalido",
        gravity:"top",
        position:"right",
        style: 
        {
            background:"red", 
            color:"white"
        }
      }).showToast();
}


//----OPCIONES DE BOTON DEBITAR---------//
const btnDebitar=document.getElementById("btnDebitar");
const containerDebitar=document.getElementById("containerDebitar")
const formDebitar=document.getElementById("formDebitar");


btnDebitar.addEventListener("click",(e)=>{
    e.preventDefault();
    containerCargar.style.display="none"
    containerDebitar.style.display="flex"
    containerMovimiento.style.display="none"
    containerMercado.style.display="none"
    containerWelcomeUser.style.display="none"
    registroMovimientos.innerHTML=""

})

const inputDebitar=document.getElementById("inputDebitar");
const btnDebitar2=document.getElementById("btnDebitar2");
const saldoDebitar=document.getElementById("saldoDebitar")
formDebitar.addEventListener("submit", (e)=>{
    e.preventDefault();

    montoDebitar=inputDebitar.value;
    opcionDebitar=btnDebitar2.value;
    
    

    if(montoDebitar<=0 || montoDebitar>saldo){
        alertMonto2();
        formDebitar.reset();
     } else{
        const debitado= new Movimiento (opcionDebitar, montoDebitar);
    registerMovimientos.push(debitado);
       saldo-=parseInt(montoDebitar);
       saldoTotal.innerHTML=saldo;
        localStorage.setItem("Movimiento", JSON.stringify(registerMovimientos))
        formDebitar.reset();
        alertMonto1();
     }
   
    
})




//--------------OPCIONES DE BOTON MOVIMIENTOS----//
const btnEnviar=document.getElementById("btnMovimiento");
const containerMovimiento=document.getElementById("containerMovimiento");
const registroMovimientos=document.getElementById("registroMovimientos");
const inputMovimientoCargar=document.getElementById("inputMovimientoCargar");

registroMovimientos.style.display="none"
//RECUPUERAR DATOS DEL LOCAL STORAGE
const recuperarArray=localStorage.getItem("Movimiento");


inputMovimientoCargar.addEventListener("click",()=>{    
    if (registerMovimientos.length===0){
        registroMovimientos.style.display="flex"
        registroMovimientos.innerHTML="Aun no se ha realizado alguna operacion"
    } else {
        registroMovimientos.style.display="flex"
   const registroMovimientoJSON=JSON.stringify(registerMovimientos, [`accion`, `monto`]);
   registroMovimientos.innerHTML=registroMovimientoJSON;
    }
})


btnEnviar.addEventListener("click",()=>{
    containerCargar.style.display="none"
    containerDebitar.style.display="none"
    containerMovimiento.style.display="flex"
    containerMercado.style.display="none"
    containerWelcomeUser.style.display="none"
})




//---------OPCIONES DE BOTON MERCADO------------//

//Api de CriptoYa!
const criptoYa="https://criptoya.com/api/dolar";
//


const btnMercado=document.getElementById("btnMercado");
const containerMercado=document.getElementById("containerMercado")
const containerApi=document.getElementById("containerApi");


btnMercado.addEventListener("click",()=>{
    containerCargar.style.display="none"
    containerDebitar.style.display="none"
    containerMovimiento.style.display="none"
    containerMercado.style.display="flex"
    containerWelcomeUser.style.display="none"
    registroMovimientos.innerHTML=""

})

setInterval(()=>{
    fetch(criptoYa)
     .then( response=>  response.json())
     .then(({blue,oficial})=>{
        containerApi.innerHTML=`
        <h2>Dolar Blue: $${blue}</h2>
        <h2>Dolar Oficial: $${oficial}`
        
     })
     .catch(error=>console.error(error))

},2500)



