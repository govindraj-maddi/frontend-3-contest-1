let users=[],i=0;

function User(no,namevalue,prof,ageno)
{
    this.id=no;
    this.name=namevalue;
    this.profession=prof;
    this.age=ageno;
}


function  addUser() 
{
    const listitem=document.createElement("li");
    listitem.setAttribute("class","listitem");

    const listitemlabel=document.createElement("label");
    listitemlabel.setAttribute("class","listitemlabel");

    const listitembtn=document.createElement("button")
    listitembtn.setAttribute("class","listitembtn");
    listitembtn.setAttribute("type","button");

    if(document.getElementById("name").value != "" && document.getElementById("profession").value != "" && document.getElementById("age").value!= "")
    { 
    const user=new User((i+1),`${document.getElementById("name").value}`,`${document.getElementById("profession").value}`,`${document.getElementById("age").value}`);
    users.push(user);

    listitemlabel.innerHTML=` ${users[i].id}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Name:${users[i].name}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Profession:${users[i].profession}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Age:${users[i].age} `;
    
    document.getElementById("message").innerHTML='<label style="color: #43FF78;">Success : Employee Added!.</label>';

    listitembtn.innerHTML="Delete User";

    listitem.append(listitemlabel,listitembtn);

    document.getElementById("employees_list").append(listitem);

    listitembtn.addEventListener("click",() => {
        removeItem(listitem,user);
    })

    

    i=i+1;
    }
    else
    {
        document.getElementById("message").innerHTML='<label style="color: #FF4343;">Error : Please Make sure All the fields are filled before adding in an employee !</label>';
    }
}

function removeItem(listitem,user)
{
    /* setTimeout(() =>{
        
    },300);  */
    users.splice((user.id-1),1);
    listitem.remove();
    if(document.getElementById("employees_list").hasChildNodes() === false)
        document.getElementById("message").innerHTML="<label>You have 0 Employees.</label>";
    users=updateItemId(users); 
}

function updateItemId(arr)
{
    index=1;
    return arr.map((item) => {
        item.id=index;
        index=index+1;
    })
}


