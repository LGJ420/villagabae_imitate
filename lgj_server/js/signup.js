let id = $('#id');
let pw = $('#pw');
let pw_check = $('#pw_check');
let nm = $('#nm');
let phone = $('#phone');
let email = $('#email');
let signup_btn = $('#signup_btn');
let id_btn = $('#id_btn');

$(signup_btn).on('click', function() {
    if($(id).val() == "") {
        $(id).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
    else if($(pw).val() == "") {
        $(pw).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
    else if($(pw_check).val() == "") {
        $(pw_check).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
    else if($(nm).val() == "") {
        $(nm).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
    else if($(phone).val() == "") {
        $(phone).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
    else if($(email).val() == "") {
        $(email).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
});


$(signup_btn).on('click', function() {
    if($(pw).val() != $(pw_check).val()) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.')
    }
});


$(id_btn).on('click', function() {
    if($(id).val() == "") {
        alert('아이디를 입력해주세요.');
    }
    else if($(id).val().length < 5 ) {
        alert('아이디는 5글자 이상이어야 합니다.')
    }
    else {
        alert('사용 가능한 아이디입니다.')
    }
});