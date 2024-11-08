
function login() {
    
    // 햄버거버튼
    const orderHamBtn = document.querySelector(".order-ham-btn");
    const mWrap = document.querySelector(".m-wrap");
    const orderBg = document.querySelector(".order-bg");
    orderHamBtn.addEventListener("click", function() {
        orderHamBtn.classList.toggle("active");
        mWrap.classList.toggle("active");
        orderBg.classList.toggle("active");
    });

    // 로그인
    const loginInput = document.querySelectorAll(".login-main input");
    const loginId = document.querySelector(".login-id");
    const loginPass = document.querySelector(".login-pass");
    const loginBtn = document.querySelector(".login-box");
    const loginErrText = document.querySelector(".login-error-text");

    // 조회버튼
    loginBtn.addEventListener("click", function() {
        if(loginId.value == "" || loginPass.value == "") {
            loginErrText.classList.add("active");
            console.log(loginId.value);
        }
        else {
            loginBtn.classList.add("active");
        }
    });

    loginInput.forEach(input => {
        input.addEventListener("input", function() {
            if(input.value == "") {
                loginBtn.classList.remove("active");
                loginErrText.classList.remove("active");
            }
        })
    });

}
    
