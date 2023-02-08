// const submit=document.querySelector('input[type=submit]');
// submit.value='SEND';
// query selector

// let sec_li=document.querySelector('li:nth-child(2');
// sec_li.style.backgroundColor="green";
// sec_li.style.color='white';

// let td_li=document.querySelector('li:nth-child(3)');
// td_li.style.display='none';



//query selctor all
let sec_li=document.querySelectorAll('li');
// console.log(sec_li[1].textContent)
sec_li[1].style.color='green';

let odd=document.querySelectorAll('li:nth-child(odd)')

for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'

}
