const form=document.querySelector("#form-submit");
const tbody=document.querySelector("#add-value");
const firstInput=document.querySelector("#firstname");
const lastInput=document.querySelector("#lastname");
const codeInput=document.querySelector("#code");
const emailInput=document.querySelector("#email");
const phoneInput=document.querySelector("#phone");
const inputs=document.querySelectorAll(".input")
//const fInput=document.querySelector("#firstname");
//const fInput=document.querySelector("#firstname");
man();
function man(){
    form.addEventListener('submit',addTask);
    tbody.addEventListener('click',removeRow);
    tbody.addEventListener('click',selectRow);
    //form.addEventListener('submit',updateTask);
}
function addTask(e){
    const row=document.createElement('tr');
    const tdid=document.createElement('td');
    const tdfirst=document.createElement('td');
    const tdlast=document.createElement('td');
    const tdcode=document.createElement('td');
    const tdemail=document.createElement('td');
    const tdphone=document.createElement('td');
    const tdbtns=document.createElement('td');
    //tdbtns.className="flex-md-column flex-sm-column"
    const btnDelete=document.createElement('button');
    btnDelete.className="btn btn-danger delete-item";
    btnDelete.innerText="delete";
    const btnUpdate=document.createElement('button');
    btnUpdate.className="btn btn-success update-item";
    btnUpdate.innerText="update";
    tdid.appendChild(document.createTextNode((Math.floor(Math.random() * 1000))));
    tdfirst.appendChild(document.createTextNode(firstInput.value));
    tdlast.appendChild(document.createTextNode(lastInput.value));
    tdcode.appendChild(document.createTextNode(codeInput.value));
    tdemail.appendChild(document.createTextNode(emailInput.value));
    tdphone.appendChild(document.createTextNode(phoneInput.value));
    tdbtns.appendChild(btnDelete);
    tdbtns.appendChild(btnUpdate);


    row.appendChild(tdid);
    row.appendChild(tdfirst);
    row.appendChild(tdlast);
    row.appendChild(tdcode);
    row.appendChild(tdemail);
    row.appendChild(tdphone);
    row.appendChild(tdbtns);
    tbody.appendChild(row);
    //firstInput.value='';
    //lastInput.value='';
    //codeInput.value='';
    //emailInput.value='';
    //phoneInput.value='';
    //be jaye task haye bala paeeni ke kholase shode minevisim
    e.target.reset();
    submit.value="Submit";
    e.preventDefault();

}
function removeRow(e){
   if(e.target.classList.contains("delete-item")){
    if(confirm("Do you want to delete this row?")){
        e.target.parentElement.parentElement.remove();
    }
   }

}
function selectRow(e){
    if(e.target.classList.contains("update-item")){
        const row=e.target.parentElement.parentElement;
        for (let i = 1; i < row.childNodes.length - 1; i++){
            inputs[i-1].value=row.childNodes[i].innerText;

        }
        submit.value="update";
        e.target.parentElement.parentElement.remove();
    }

    e.preventDefault();

}




