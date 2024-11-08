
function order() {
    
    // 햄버거버튼
    const orderHamBtn = document.querySelector(".order-ham-btn");
    const mWrap = document.querySelector(".m-wrap");
    const orderBg = document.querySelector(".order-bg");
    orderHamBtn.addEventListener("click", function() {
        orderHamBtn.classList.toggle("active");
        mWrap.classList.toggle("active");
        orderBg.classList.toggle("active");
    });

    //비회원주문조회
    const orderInput = document.querySelectorAll(".order-main input");
    const orderName = document.querySelector(".order-name");
    const orderNum = document.querySelector(".order-num");
    const orderPass = document.querySelector(".order-pass");
    const checkBtn = document.querySelector(".check-box");
    const errText = document.querySelector(".error-text");

    

    // 조회버튼
    checkBtn.addEventListener("click", function() {
        if(orderName.value == "") {
            errText.innerHTML = "주문자명을 입력해 주세요.";
            errText.classList.add("active");
        }
        else if(orderNum.value == "") {
            errText.innerHTML = "주문번호를 입력해 주세요.";
            errText.classList.add("active");
        }
        else if(orderPass.value == "") {
            errText.innerHTML = "주문 비밀번호를 입력해 주세요.";
            errText.classList.add("active");
        }
        else {
            errText.innerHTML = "일치하는 주문내역이 없습니다. 주문정보를 다시 확인해 주세요.";
            errText.classList.add("active");
            checkBtn.classList.add("active");
        }
    });

    orderInput.forEach(input => {
        input.addEventListener("input", function() {
            if(input.value == "") {
                checkBtn.classList.remove("active");
                errText.classList.remove("active");
            }
        })
    });
}
    
