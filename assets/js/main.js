var register = document.querySelector('#btn__register');
var login = document.querySelector('#btn__login');
var modal = document.querySelectorAll('.modal');
var close = document.querySelectorAll('.btn__back');
var tab = document.querySelectorAll('.btn__form--colorRed');

var registerMobile = $('.register__mobile');
var loginMobile = $('.login__mobile');
//Khi click btn Đăng Kí thì ẩn dislay đăng nhập
register.onclick = function(){
    modal[1].classList.remove('flex');
    modal[0].classList.add('flex')  
}
registerMobile.onclick = function(){
    modal[1].classList.remove('flex');
    modal[0].classList.add('flex')  
}
tab[0].onclick = function(){
        modal[0].classList.remove('flex');
        modal[1].classList.add('flex');
}
close[0].onclick = function(){
    modal[0].classList.remove('flex');
}

login.onclick = function(){
    modal[1].classList.add('flex');
    modal[1].classList.add('flex')   
}
loginMobile.onclick = function(){
    modal[1].classList.add('flex');
    modal[1].classList.add('flex');   
}
tab[1].onclick = function(){
        modal[1].classList.remove('flex');
        modal[0].classList.add('flex');
    }
close[1].onclick = function(){
    modal[1].classList.remove('flex');
}


















