let val;

val = document;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// console.log(val);

const myForm = document.getElementById("my-form")
const myBtn = document.querySelector(".btn")
const titulo = document.querySelector("#titulo")
const listItem = document.querySelectorAll(".item")
const ul = document.querySelector(".items");

myBtn.style.background = 'red';
// ul.remove();

ul.lastElementChild.remove();

ul.firstElementChild.innerText = 'Hello';

ul.children[1].innerText = 'The Bridge';

ul.lastElementChild.innerHTML = 'eee';

function formBackground(e) {
    e.preventDefault()
    console.log(e.target)//myBtn
    myBtn.setAttribute("disabled","")
    myForm[0].setAttribute("name","pepito")
    myForm.style.background = "#8888"
}


myBtn.addEventListener("click",formBackground)

//1
const p = document.createElement("p")
//2
p.innerText = "Buenas tardes"
// console.log(p)
// 3 appendChild
document.body.appendChild(p)

const containerDiv = document.querySelector(".container")
// console.log(containerDiv)

containerDiv.appendChild(p)

containerDiv.innerHTML ="<p>Eyyy</p>"

let listaSinOrden = document.createElement("ul");
document.body.appendChild(listaSinOrden)

let elemento1Lista = document.createElement("li");
elemento1Lista.textContent = "It's funny";
listaSinOrden.appendChild(elemento1Lista);

let elemento2Lista = document.createElement("li");
elemento2Lista.textContent = "It's Awesome";
listaSinOrden.appendChild(elemento2Lista);

// btn.setAttribute("name", "helloButton");
// btn.setAttribute("disabled", "");


