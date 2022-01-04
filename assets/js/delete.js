// Khi click nút xoá
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var number = $('.search__shopping--notice');
var itemCart = $$('.cart__container--item');
var deleteCart = $$('.item__delete');
var myCart = $('.my__cart');
var cartContainer = $('.cart__container');
var numberCart = $('.search__shopping--notice');


var j = 0;
var leng = itemCart.length;
number.innerText = leng;
if(leng != 0){
    cartContainer.classList.add('have__cart');
}else {
    cartContainer.classList.remove('have__cart');
    myCart.classList.add('my__cart--noCart');
}

//Chức năng xoá sản phẩm
for(var i in itemCart){
    itemCart[i].onclick = function(e){
        
        if(e.target.closest(".item__delete")){
            this.classList.add('none');
            
           leng--;
           console.log(leng);
           number.innerText = leng;
           if(leng == 0){
               cartContainer.classList.remove('have__cart');
               myCart.classList.add('my__cart--noCart');
               numberCart.style.display = "none";
            }
        }
    }
}


// Đăng xuất tài khoản
var logOut = $('.log__out');
var user = $('.navbar_item--user');
var logIn = $$('.log__in--none');
logOut.onclick = function(){
    user.style.display = "none";
    logIn[0].style.display = "block";
    logIn[1].style.display = "block";
    cartContainer.classList.remove('have__cart');
    myCart.classList.add('my__cart--noCart');
    number.style.display = "none";
    for(var i = 0; i < stranger.length; i++){
        // console.log(i);
        stranger[i].style.display = "block";
    }
    for(var j = 0; j < notStranger.length; j++){
        
        notStranger[j].style.display = "none";
    }
}

//Đăng xuất trên mobile and tablet
var logOutMB = $('.log__out--mobile');
var notStranger = $$('.not__stranger');
var stranger = $$('.stranger');
logOutMB.onclick = function(){
    user.style.display = "none";
    logIn[0].style.display = "block";
    logIn[1].style.display = "block";
    cartContainer.classList.remove('have__cart');
    myCart.classList.add('my__cart--noCart');
    number.style.display = "none";
    for(var i = 0; i < stranger.length; i++){
        // console.log(i);
        stranger[i].style.display = "block";
    }
    for(var j = 0; j < notStranger.length; j++){
        
        notStranger[j].style.display = "none";
    }
}





// Đăng nhập tài khoản
//Đây chỉ là 1 tài khoản được định trước, tk khác sẽ báo lỗi ngay
var acc = $('#acc');
var password = $('#password');
var btn = $('#btn__thaobap');
btn.onclick = function(){
    if(acc.value == '' || password.value == ''){
        alert('Vui lòng nhập tài khoản mật khẩu');
        return
    }
    else if(acc.value == 'levantung@gmail.com' && password.value == '12345678'){
        modal[1].classList.remove('flex');
        logIn[0].style.display = "none";
        logIn[1].style.display = "none";
        user.style.display = "flex";
        for(var i = 0; i < stranger.length; i++){
            // console.log(i);
            stranger[i].style.display = "none";
        }
        for(var j = 0; j < notStranger.length; j++){
            
            notStranger[j].style.display = "block";
        }
        if(leng != 0){
            myCart.classList.remove('my__cart--noCart');
            cartContainer.classList.add('have__cart');
            number.style.display = "block";
        } 
    }
    else {
        alert('Mật khẩu không chính xác, vui lòng thử lại !');
        return;
    }
}



// event.stopPropagation().
//Thả tim
//Đang bị ăn theo thuộc tính thẻ a
// var heart = $$('.product__item--action-heart');

// console.log(heart);
// for(var i in heart){
//     heart[i].onclick = function(e){
//         e.stopPropagation();
//         if(e.target.closest('.view__no--like')){
//             console.log(1);
//             this.classList.add('view__liked')
//         }else{
//             this.classList.remove('view__liked')
//         }
//     }
// }

