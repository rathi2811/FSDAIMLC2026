const container = document.getElementById('container');
const button = document.getElementById('button');
console.log(container);
function display(){
    const serverdata =fetch("https://www.abes.ac.in/");
    const jsondata = srverdata.json();
    console.log(serverdata);
    console.log(jsondata);
}
button.addEventListener('click',display);
// container.innerHTML = '<h1>hello DOM</h1>';
// container.style.color = 'red';
// container.style.backgroundColor = 'yellow';
