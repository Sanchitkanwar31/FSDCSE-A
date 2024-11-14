console.dir(document)
const div = document.getElementsByClassName('parent')
console.log(div)
//div[0].innerText = "ABES ENGINEERING COLLEGE";
div[0].innerHTML="<h2 style=color:red>ABES EC</h2>";
const h1=document.createElement("h1");
h1.innerText="element is created by DOM function";
h1.style.backgroundColor="cyan";
h1.style.color="red";
div[0].appendChild(h1);

console.log(h1);

const img=document.createElement('img');
img.src="https://th.bing.com/th/id/OIP.c17XAqg6srb_lo1ElbyJSgHaEK?w=648&h=365&rs=1&pid=ImgDetMain";
img.setAttribute("height","200px");
console.log(img);
div[0].appendChild(img);