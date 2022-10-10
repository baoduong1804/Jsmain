
function Validator(options){
//Hàm thực hiện validate
    function validate(inputElement,rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        if(errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }
//Lấy element của form cần validate
        var formElelment = document.querySelector(options.form);
    if(formElelment){
        options.rules.forEach( function(rule) {
            var inputElement = formElelment.querySelector(rule.selector);
            if(inputElement){
                //Xử lý TH burl khỏi input
                inputElement.onblur = function() {
                    validate(inputElement,rule);
                }
                //Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        })
    }

}

Validator.isRequired = function(selector,message) {
    return {
        selector:selector,
        test: function(value){
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này';
        }
    }
}


Validator.isEmail = function(selector,message) {
    return {
        selector:selector,
        test: function(value){
            var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trương này phải là Email';
        }
    }
}

Validator.minLength = function(selector,min,message) {
    return {
        selector:selector,
        test: function(value){
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`;
        }
    }
}

Validator.isConfirmed = function(selector, getCofirmValue, message) {
    return {
        selector:selector,
        test: function(value) {
            return value === getCofirmValue() ? undefined : message || 'Giá trị nhập vào không trùng khớp'
        }
    }
}