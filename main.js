var myform=document.getElementById('addform');
var useramount=document.getElementById('expense')
var userdiscription=document.getElementById('description')
var usercategory=document.getElementById('category')
var listitem=document.getElementById('itemlist')



myform.addEventListener('submit',Submit)
function Submit(e){
    e.preventDefault();

    // creating list item
    var li=document.createElement('li')
    

    // create edit button
    let editbtn=document.createElement('button')
    editbtn.className = 'btn  bg-primary btn-sm text-white edit  ml-2 float-right';
    editbtn.appendChild(document.createTextNode('Edit'))
    

    // create delete button
    var delbtn = document.createElement('button');
                delbtn.className = 'btn btn-danger btn-sm float-right my-4 delete ' ;
                delbtn.appendChild(document.createTextNode('X'))

    // create text for li
    li.appendChild(document.createTextNode(`${useramount.value}-${userdiscription.value}-${usercategory.value}`))

    let obj={
       amount:useramount.value,
       description:userdiscription.value,
       category:usercategory.value
    }

    let str_obj=JSON.stringify(obj);
    localStorage.setItem(usercategory.value,str_obj)

    li.appendChild(editbtn);
    li.appendChild(delbtn)
    listitem.appendChild(li)
    

}

