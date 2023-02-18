const btn_open_popup = document.getElementsByClassName('datxe_btn');
const btn_close_1 =document.getElementById('background_thanh_toan_xe');
const btn_close_2 = document.getElementById('datxe_btn_inform');
const form_popup = document.getElementById('form_thanh_toan_xe');
const anh_1 =document.getElementById('anh_1');
const gia_1 =document.getElementById('gia_1');
const anh_2 =document.getElementById('anh_2');
const gia_2 =document.getElementById('gia_2');
const anh_3 =document.getElementById('anh_3');
const gia_3 =document.getElementById('gia_3');
const anh_4 =document.getElementById('anh_4');
const gia_4 =document.getElementById('gia_4');
const anh_5 =document.getElementById('anh_5');
const gia_5 =document.getElementById('gia_5');
const anh_6 =document.getElementById('anh_6');
const gia_6 =document.getElementById('gia_6');
const anh_popup =document.getElementById('anh_popup');
const gia_popup =document.getElementById('gia_popup');

console.log(btn_open_popup.length);

for (let index = 0; index < btn_open_popup.length; index++){
    btn_open_popup[index].addEventListener('click', ()=>{
        form_popup.classList.add('show_thanhtoan');
        switch(index){
            case 0: {anh_popup.src = anh_1.src;
                    var a = gia_1.innerHTML;
                    gia_popup.innerHTML = a; };
                break;
            case 1: {anh_popup.src = anh_2.src;
                    var a = gia_2.innerHTML; 
                    gia_popup.innerHTML = a; };
                break;
            case 2: {anh_popup.src = anh_3.src;
                    var a = gia_3.innerHTML;
                    gia_popup.innerHTML = a; };
                break;
            case 3: {anh_popup.src = anh_4.src;
                    var a = gia_4.innerHTML;
                    gia_popup.innerHTML = a; };
                break;
            case 4: {anh_popup.src = anh_5.src;
                    var a = gia_5.innerHTML;
                    gia_popup.innerHTML = a; };
                break;
            case 5: {anh_popup.src = anh_6.src;
                    var a = gia_6.innerHTML;
                    gia_popup.innerHTML = a; };
        }
        
    })   
}

btn_close_1.addEventListener('click', ()=>{
    form_popup.classList.remove('show_thanhtoan');})
btn_close_2.addEventListener('click', ()=>{
    form_popup.classList.remove('show_thanhtoan');})


    


    