function registerUser() {
    window.location.href = "register.html";
}

document.addEventListener('DOMContentLoaded', function () {
    // Mong muốn của chúng ta
    Validator({
        form: '#form-2',
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        rules: [
            Validator.isEmail('#email'),
            Validator.minLength('#password', 6),
        ],
        onSubmit: function (data) {
            // Call API
            console.log(data);
            let listUsers = JSON.parse(localStorage.getItem("listUsers")) || [];
            let checkUser = listUsers.find((user) => {
                return user.email === data.email && user.password === data.password
            })
            if (checkUser) {
                showSuccessLoginToast();
                localStorage.setItem("checkLogin", checkUser.idUser);
                function goToHomePage() {
                    window.location.href = "../index.html";
                }
                setTimeout(goToHomePage, 2000);
                return;
            } else {
                showErrorLoginToast()
                // alert("User email or password is wrong");
            }
        }
    });
});