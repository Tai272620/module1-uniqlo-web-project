function uuid() {
    return new Date().getMilliseconds() + Math.floor(Math.random() * 999999999);
}

document.addEventListener('DOMContentLoaded', function () {
    // Mong muốn của chúng ta
    Validator({
        form: '#form-1',
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        rules: [
            Validator.isEmail('#email'),
            Validator.minLength('#password', 6),
            Validator.isRequired('#password_confirmation'),
            Validator.isConfirmed('#password_confirmation', function () {
                return document.querySelector('#form-1 #password').value;
            }, 'Mật khẩu nhập lại không chính xác')
        ],
        onSubmit: function (data) {
            // Call API
            console.log(data);
            let listUsers = JSON.parse(localStorage.getItem("listUsers")) || [];
            let flag = true;
            for (let i = 0; i < listUsers.length; i++) {
                if (listUsers[i].email == data.email) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                data.idUser = uuid();
                data.cartUser = [];
                data.purchaseHistory = [];
                // data.isAdmin = true;
                listUsers.push(data);
                localStorage.setItem("listUsers", JSON.stringify(listUsers));
                showSuccessRegisterToast()
                function changeToLoginPage() {
                    window.location.href = "login.html";
                }
                setTimeout(changeToLoginPage, 1000);
            } else {
                showErrorRegisterToast()
            }
        }
    });
});