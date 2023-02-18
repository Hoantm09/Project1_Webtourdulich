const btn_open = document.getElementById('btn_sign_in');
const btn_close =document.getElementById('form_background');
const form = document.getElementById('sign_in_container');

btn_open.addEventListener('click', ()=>{
    form.classList.add('show');})
btn_close.addEventListener('click', ()=>{
    form.classList.remove('show');})