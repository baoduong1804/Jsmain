
var selectorRules ={};
function Validator(options){
    function validate(inputElement,rule){
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
        var errorMessage = rule.test(inputElement.value)
        if(errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }else{
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }
    var formElement = document.querySelector(options.form);
    if(formElement){
        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector);
            inputElement.onblur =function(){
                validate(inputElement,rule);
            }
            inputElement.oninput = function(){
                var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                errorElement.innerText = '';
                inputElement.parentElement.classList.remove('invalid');
            }

        })
    }
    var success =formElement.querySelector('.form-submit');
        success.onclick = function(){
            return options.onSubmit(success)
        }
        
}
Validator.isRequired =function(selector){
    return {
        selector:selector,
        test:function(value){
            return value.trim() ? undefined : 'Vui long nhap truong nay'
        }
    }
}
Validator.isEmail = function(selector){
    return {
        selector:selector,
        test:function(value){
            var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là Email'
        }
    }
}

Validator.minLength =function(selector,min){
    return {
        selector:selector,
        test:function(value){
            return value.length >= min ? undefined : `Mật khẩu phải ít nhất ${min} ký tự`
        }
    }
}

Validator.isConfirmed = function(selector,getCofirmValue) {
    return {
        selector:selector,
        test:function(value){
            return getCofirmValue() === value ? undefined : `Mật khẩu nhập lại không chính xác`
        }
    }
}
