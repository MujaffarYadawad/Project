
 /*const btn = document.querySelector('.btn');
 
 btn.addEventListener('mouseout',(e)=>{
  e.preventDefault();
  document.querySelector('#my-form').style.background='#acc'
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Submitted</h1>';
});
btn.addEventListener('click',(e)=>{
  e.preventDefault();
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Submitted</h1>';
  });*/

  const myForm = document.querySelector('#my-form');
  const nameInput = document.querySelector('#name');
  const emailInput= document.querySelector('#email');
  const msg = document.querySelector('.msg');
  const userList = document.querySelector('#users');

  myForm.addEventListener('submit', onSubmit);

  function onSubmit(e){
     e.preventDefault();
     
     if(nameInput.value === '' || emailInput.value === ''){
     msg.classList.add('error');
      msg.innerHTML = 'Please enter all fields';
      setTimeout(()=>msg.remove(),3000)
     }else{
      const li = document.createElement('li');
        li.appendChild(document.createTextNode(
          `${nameInput.value} : ${emailInput.value}`));
      userList.appendChild(li);

      //clear fields
      nameInput.value = '';
      emailInput.value = '';
     }
  }
    
