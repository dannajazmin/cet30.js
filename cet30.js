const cuerpo =document.getElementById("cuerpo");

console.log(cuerpo);

const boton1 =document.getElementById("boton1");
const boton2 =document.getElementById("boton2");
const boton3 =document.getElementById("boton3");

boton1.addEventListener("click",mostarFondo1);

function mostarFondo1() {
console.log("click");

cuerpo.classList.remove("bg-secondary");
cuerpo.classList.remove("bg-warning");

cuerpo.classList.add("bg-black","text-light");
cuerpo.classList.add("text-light")

}


boton2.addEventListener("click",mostarFondo2);

function mostarFondo2() {
console.log("click");

cuerpo.classList.remove("bg-secondary");
cuerpo.classList.remove("bg-warning");
cuerpo.classList.remove("bg-black");
cuerpo.classList.remove("text-light","text-danger")
cuerpo.classList.add("bg-secondary","text-warning");


}

boton3.addEventListener("click",mostarFondo3);

function mostarFondo3() {
console.log("click");

cuerpo.classList.remove("bg-secondary");
cuerpo.classList.remove("bg-primary");
cuerpo.classList.remove("bg-dark");
cuerpo.classList.remove("text-light","text-warning")
cuerpo.classList.add("bg-warning","text-danger");

}