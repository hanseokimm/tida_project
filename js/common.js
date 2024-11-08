
function common() {

    // 돋보기버튼
    const searchBtns = document.querySelectorAll(".search-btn");
    const popup = document.querySelector(".popup");
    const closeBtn = document.querySelector(".h-close > button");
    searchBtns.forEach(searchBtn => {
        searchBtn.addEventListener("click", function() {
            popup.classList.add("active");
            document.body.style.overflow = 'hidden'; //뒷배경 비활성화
        });
    })
    closeBtn.addEventListener("click", function() {
        popup.classList.remove("active");
        document.body.style.overflow = 'auto'; //뒷배경 활성화
    });

    
    const input = document.querySelector(".search");
    const clearBtn = document.querySelector('.ico-cancel');
    //검색어 입력
    input.addEventListener("input", function() {
        if(!input.value == "") {
            clearBtn.classList.add("active");
        }
        else {
            clearBtn.classList.remove("active");
        }
    });
    clearBtn.addEventListener('click', function() {
        input.value = ""; //입력한 텍스트 취소
        clearBtn.classList.remove("active");
    });

    
    const orderPass = document.querySelector(".order-pass");
    // 비밀번호 보기/숨기기
    const eyeClose = document.querySelector(".eye-close");
    const eyeOpen = document.querySelector(".eye-open");
    orderPass.addEventListener("input", function() {
        if(!orderPass.value == "") {
            eyeClose.classList.add("active");
        }
        else {
            eyeClose.classList.remove("active");
        }
    });
    eyeClose.addEventListener("click", function() {
        this.classList.remove("active");
        eyeOpen.classList.add("active");
        orderPass.type = "text";
    });
    eyeOpen.addEventListener("click", function() {
        this.classList.remove("active");
        eyeClose.classList.add("active");
        orderPass.type = "password";
    });
}
    
