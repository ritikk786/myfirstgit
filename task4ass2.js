const items=document.getElementsByClassName('list-group-item')
console.log(items)

items[2].style.backgroundColor='green';

// make all the element bold
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='bold'
}