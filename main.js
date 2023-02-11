        var btn = document.getElementsByTagName('button')
        var username=document.getElementById('name');
        var userphone=document.getElementById('phone');
        var useremail=document.getElementById('mail')
        var msg=document.querySelector('.text-danger');
        var itemul=document.querySelector('.items');
        var form = document.getElementById('my-form')
        
        form.addEventListener('submit',onSubmit);

        itemul.addEventListener('click',removeitem);
        itemul.addEventListener('click',edititem);

        
        // create a function
        function onSubmit(e){
            e.preventDefault();
            if(username.value===''|| useremail===''){
                msg.innerHTML='*please enter all fields'
                //         // we can alos set timer to msg
                        setTimeout(()=>msg.remove(),5000) 
            }
            else{
                // create list item
                var li = document.createElement('li')
                
                // create edit btn
                let editbtn = document.createElement('button')
                editbtn.className = 'btn  bg-primary btn-sm text-white edit rounded-5 ml-2 float-right';
                // editbtn.value='edit'
                 editbtn.appendChild(document.createTextNode('edit'));

                // create delete btn
                var deletebtn = document.createElement('button');
                deletebtn.className = 'btn btn-danger btn-sm float-right my-4 delete ' ;
                deletebtn.appendChild(document.createTextNode('X'))

                // text for list
                li.appendChild(document.createTextNode(`${username.value}-${useremail.value}-${userphone.value}`));
                li.appendChild(editbtn)
                li.appendChild(deletebtn);
                // li.appendChild(document.createTextNode(useremail.value))
                // li.appendChild(document.createTextNode(userphone.value))
        
                // adding value to localstorage in the form of object
                let obj={
                    name:username.value,
                    email:useremail.value,
                    phone:userphone.value,
                }
      
                let str_obj=JSON.stringify(obj);
                
                
                localStorage.setItem(useremail.value,str_obj)
        
                itemul.appendChild(li)
        
                // clear input
                username.value='';
                useremail.value='';
                userphone.value='';
        }
        }

        // removing function 
        function removeitem(e){
            if(e.target.classList.contains('delete')){
                if (confirm('Do you want to remove item from LocalStorage?')) {
                    var li = e.target.parentElement;

                    // access li text & split email from it & delte from local storage
                    var litext=li.textContent;
                    let arr = litext.split('-');
                    localStorage.removeItem(arr[1])


                    itemul.removeChild(li)
        
                }

            }
        }




        // function for edit btn
        function edititem(e){
            if(e.target.classList.contains('edit')){
                var li = e.target.parentElement;

                // access li text & split email from it & delte from local storage
                
                var siblingtext=e.target.previousSibling;
                var maintext=siblingtext.textContent
                let arr = maintext.split('-');
                username.value=arr[0]
                useremail.value=arr[1];
                userphone.value=arr[2]


                localStorage.removeItem(arr[1])


                itemul.removeChild(li)
               
            }
        }