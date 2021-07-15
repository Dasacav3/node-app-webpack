import HelloWorld from "./class";
const style = require("./style.css");
const tailwind = require("./app.css");
const logo = "./assets/favicon.png";

console.log("Buena la banda");

const saludar = () => {
  let saludo = ["Hello", "World"];
  saludo.forEach((e) => {
    console.log(e);
  });
};

saludar();

const arr = [1, 2, 3],
  codeEsNext = () => console.log(...arr);

codeEsNext();


let img = <HTMLBodyElement>document.querySelector("#img");

if(img) img.innerHTML = `<img src="${logo}" alt="magenta sky"/>`;


const d = document,
  $p = d.createElement("p"),
  $hello = new HelloWorld("Typescript");

$p.textContent = $hello.greet();
