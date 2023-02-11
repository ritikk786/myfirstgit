let liclass=document.getElementsByClassName('list-group-item');
for(let i=0;i<liclass.length;i++){
    liclass[i].style.color='red'
}

let litag=document.getElementsByTagName('li')
for(let i=0;i<litag.length;i++){
    litag[i].style.backgroundColor='skyblue'
}
console.log(typeof liclass)
