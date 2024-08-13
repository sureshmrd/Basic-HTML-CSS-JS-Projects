const password=document.querySelector('#password');
let showPass=document.querySelector('#show-pass');
const submit=document.querySelector('#submit');
showPass.addEventListener('click',function(event){
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
});
  // prevent form submit
  const form = document.querySelector("form");
  form.addEventListener('submit', function (e) {
      e.preventDefault();
  });
