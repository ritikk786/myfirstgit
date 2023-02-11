// creating first element
let newDivhd=document.createElement('div');
newDivhd.className='div-added';
newDivhd.setAttribute('title','First hello');


// add text
let firsttext=document.createTextNode('Hello world');
newDivhd.appendChild(firsttext)
console.log(newDivhd);

// add element to postion
const fcontainer =document.querySelector('header .container');
const h1=document.querySelector('header h1')
fcontainer.insertBefore(newDivhd,h1)



// now create another hello world for item
let newDivit =document.createElement('div')
newDivit.className='item-class';
newDivit.setAttribute('titel','another div added')

let secondtext=document.createTextNode('Hello world')
newDivit.appendChild(secondtext)
console.log(newDivit.textContent)

const items=document.querySelector('#items');
items.insertBefore(newDivit,items.children[0])