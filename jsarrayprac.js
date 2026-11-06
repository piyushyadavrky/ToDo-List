
let boo= JSON.parse(localStorage.getItem('boolStore'))||0;
let myarray= JSON.parse(localStorage.getItem('arrayStore')) || [];
let inputTodo = document.querySelector('.inputtodoo');
let inputdate = document.querySelector('.input-date');
let inputduedatebutton = document.querySelector('.duedateoptionButton');


todo();
if (boo === 1) {
  inputduedatebutton.innerText = 'On';
  inputduedatebutton.classList.add('is-active');
  inputduedatebutton.classList.remove('is-inactive');
} 
else if (boo === 0) {
  inputduedatebutton.innerText = 'Off';
  inputduedatebutton.classList.add('is-inactive');
  inputduedatebutton.classList.remove('is-active');
}

function duedatefunction(){
  boo===0 ? boo=1 : boo=0;

  if (boo === 1) {
  inputduedatebutton.innerText = 'On';
  inputduedatebutton.classList.add('is-active');
  inputduedatebutton.classList.remove('is-inactive');
} 
else if (boo === 0) {
  inputduedatebutton.innerText = 'Off';
  inputduedatebutton.classList.add('is-inactive');
  inputduedatebutton.classList.remove('is-active');
}
  localStorage.setItem('boolStore', JSON.stringify(boo));

}


function callFunction(){

  inputTodo.classList.remove('inputTodonull');
  inputdate.classList.remove('inputDatenull');

  if(inputTodo.value===''){
    // alert('Kindly add Task name');
    inputTodo.classList.add('inputTodonull');
    todo();

  } 
  else if(inputdate.value==='' && boo===1){
    // alert('Kindly add Task due-date');
    inputdate.classList.add('inputDatenull');
    todo();

  }
  else{
    addTasktoArray();
    todo();
    inputTodo.value='';
    inputdate.value='';
  }

}

function addTasktoArray(){
  
  let inputvalue = inputTodo.value;
  let inputdatevalue = inputdate.value;

  let object = {
    name: inputvalue,
    date: inputdatevalue
  }
  myarray.push(object);
  
  console.log(myarray);

  localStorage.setItem('arrayStore', JSON.stringify(myarray));

}

function todo() {
  

  let todoListString='';

  if(myarray.length===0){
    todoListString=`<p class="taskcount">-----No tasks added</p>`;
  }
  else{
    todoListString=`<p class="taskcount">Total tasks: ${myarray.length}</p>`;
    document.querySelector('.todoListShow').innerHTML='';
    for(let i=0; i<myarray.length; i++){
      todoListString +=`
      <div class="todoTaskparent${i} todoTaskparent">
        <div class="todoTask${i} todoTask">
          ${myarray[i].name}
        </div>
        <div class="todoDate${i} todoDate">
          ${myarray[i].date}
        </div>
        <button class="deleteTask${i}Button deleteTaskButton"   
          onclick="deleteTaskfun(${i})"
        >
          Delete
        </button>
        
      </div>
      `;
    }
    
  }
  console.log(myarray);
  document.querySelector('.todoListShow').innerHTML=todoListString;


}




function deleteTaskfun(i){
  myarray.splice(i, 1);
  todo();
  localStorage.setItem('arrayStore', JSON.stringify(myarray));
}





