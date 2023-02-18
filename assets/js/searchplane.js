const khu_hoi = document.getElementById('khu_hoi');
const mot_chieu =document.getElementById('mot_chieu');
const ngay_ve = document.getElementById('ngay_ve');

khu_hoi.addEventListener('click', ()=>{
    ngay_ve.classList.add('show_ngay_ve');})
mot_chieu.addEventListener('click', ()=>{
    ngay_ve.classList.remove('show_ngay_ve');})




/*click minus and plus*/
const numbertraveler = document.getElementById('number_traveler');
const minus1= document.getElementById('minus_1');
const plus1= document.getElementById('plus_1');
const number1= document.getElementById('number_1');


minus1.onclick = function(){
    var a =parseInt(number1.innerHTML);
    if(a > 0) a--;
    number1.innerHTML= a;};
plus1.onclick = function(){
    var a =parseInt(number1.innerHTML) + 1;
    number1.innerHTML= a;};



const minus2= document.getElementById('minus_2');
const plus2= document.getElementById('plus_2');
const number2= document.getElementById('number_2');

minus2.onclick = function(){
    var a =parseInt(number2.innerHTML);
    if(a > 0) a--;
    number2.innerHTML= a;};
plus2.onclick = function(){
    var a =parseInt(number2.innerHTML) + 1;
    number2.innerHTML= a;};



const minus3= document.getElementById('minus_3');
const plus3= document.getElementById('plus_3');
const number3= document.getElementById('number_3');

minus3.onclick = function(){
    var a =parseInt(number3.innerHTML);
    if(a > 0) a--;
    number3.innerHTML= a;};
plus3.onclick = function(){
    var a =parseInt(number3.innerHTML) + 1;
    number3.innerHTML= a;};


/* pop up */
const ve= document.getElementById('traveler');
const form1= document.getElementById('form_1');
const background= document.getElementById('popup_background');


ve.addEventListener('click', ()=>{
    form1.classList.add('show_form_1');
    background.classList.add('backgroundshow');
})

background.addEventListener('click', ()=>{
    form1.classList.remove('show_form_1');
    background.classList.remove('backgroundshow');
    var a = parseInt(number1.innerHTML) + parseInt(number2.innerHTML)+ parseInt(number3.innerHTML);
    numbertraveler.innerHTML= a;

})