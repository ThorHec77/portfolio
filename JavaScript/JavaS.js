
const scambiarInterruptor = document.getElementById("cambiarInterruptor") ;
let cambiarfoco = document.getElementById("cambiarFoco") ;
let swith = document .querySelector(" .switch");
let src = cambiarFoco.getAttribute("src");


function cambiarImagenes(){
    let src = this. cambiarFoco.getAttribute ("src");
    let letra = document.getElementById("letra");
    console. log (src)
    if(src != "../Imagenes/encendido-1.png") {
        this.cambiarFoco.setAttribute("src", "../Imagenes/encendido-1.png");
        this.cambiarInterruptor.setAttribute("src" ,"../Imagenes/on-or.png");
        letra.className -= ' .colorLetra';
    }else{
        this.cambiarFoco.setAttribute("src" , "../Imagenes/apagado-1.png") ;
        this.cambiarInterruptor.setAttribute("src" , "../Imagenes/off-or.png") ;
        letra.className += ' .colorLetraOff';
    }
}