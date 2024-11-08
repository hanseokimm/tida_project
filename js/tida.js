function main() {

    const headerOri = document.querySelector(".ori-header");
    const hasDepths = document.querySelectorAll(".has-depth");
    const depths = document.querySelectorAll(".depth");

    hasDepths.forEach((hasDepth,index) => {
        hasDepth.addEventListener("mouseenter", function() {
            headerOri.classList.add("active");
            // depths.forEach(depth => depth.classList.add("active"));
            depths[index].classList.add("active");
        });
    });
    hasDepths.forEach((hasDepth,index) => {
        hasDepth.addEventListener("mouseleave", function() {
            headerOri.classList.remove("active");
            // depths.forEach(depth => depth.classList.add("active"));
            depths[index].classList.remove("active");
        });
    });

    const headerScroll = document.querySelector(".scroll-header");
    const prevScrollTop = 249;

    if($(window).scrollTop() != 0) {
        headerScroll.style.display = "block";
    }

    document.addEventListener("scroll", function(){
        const nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장
        
        // 스크롤 방향 내리고올릴때 -> 헤더에 active 클래스 추가, 다시 맨위도달 -> active 클래스 삭제
        if (nowScrollTop > prevScrollTop) { 
            headerScroll.style.display = "block";
        }
        else {
            headerScroll.style.display = "none";
        }
    });

    // 햄버거버튼
    const hamBtns = document.querySelectorAll(".ham-btn");
    const mWrap = document.querySelector(".m-wrap");
    hamBtns.forEach(hamBtn => {
        hamBtn.addEventListener("click", function() {
            hamBtns[0].classList.toggle("active");
            mWrap.classList.toggle("active");
        });
    });

    const mMenus = document.querySelectorAll(".m-menu > li");
    const mDepths = document.querySelectorAll(".mm");
    mMenus.forEach((mMenu, index) => {
        mMenu.addEventListener("mouseover", function() {
            mDepths.forEach(mDepth => mDepth.classList.remove("active"));
            mDepths[index].classList.add("active");
        });
        mMenu.addEventListener("click", function() {
            mMenus.forEach(mMenu => mMenu.classList.remove("active"));
            mDepths.forEach(mDepth => mDepth.classList.remove("active"));
            this.classList.add("active");
            mDepths[index].classList.add("active");
        });
    })


    // best-sec
    const bestGrids = document.querySelectorAll(".grid-box");
    const bestMenus = document.querySelectorAll(".best-sec .tit-box > ul li");
    bestMenus.forEach((bestMenu, index) => {
        bestMenu.addEventListener("click", function() {
            bestGrids.forEach(bestGrid => bestGrid.classList.remove("active"));
            bestMenus.forEach(bestMenu => bestMenu.classList.remove("active"));
            bestGrids[index].classList.add("active");
            this.classList.add("active");
        });
    });

    // hotsale-sec
    const hotsaleSwipers = document.querySelectorAll(".hotsale-slider");
    const hotsaleMenus = document.querySelectorAll(".hotsale-sec .tit-box > ul li");
    hotsaleMenus.forEach((hotsaleMenu, index) => {
        hotsaleMenu.addEventListener("click", function() {
            hotsaleSwipers.forEach(hotsaleSwiper => hotsaleSwiper.classList.remove("active"));
            hotsaleMenus.forEach(hotsaleMenu => hotsaleMenu.classList.remove("active"));
            hotsaleSwipers[index].classList.add("active");
            this.classList.add("active");
        });
    });

    // mdpick-sec
    const mdpickSwipers = document.querySelectorAll(".mdpick-slider");
    const mdpickMenus = document.querySelectorAll(".mdpick-sec .tit-box > ul li");
    mdpickMenus.forEach((mdpickMenu, index) => {
        mdpickMenu.addEventListener("click", function() {
            mdpickSwipers.forEach(mdpickSwiper => mdpickSwiper.classList.remove("active"));
            mdpickMenus.forEach(mdpickMenu => mdpickMenu.classList.remove("active"));
            mdpickSwipers[index].classList.add("active");
            this.classList.add("active");
        });
    });

    // top-btn
    const topBtn = document.querySelector(".top-btn");
    topBtn.addEventListener("click", function() {
        $('html, body').animate({scrollTop:0},400);
    });



    let logo_tl;
    let lotti_gsap;
    let motionSec = document.querySelector(".motion-sec");
    let motion_bubble = document.querySelector(".motion-bubble");
    let motion_logo = document.querySelector(".motion-logo");


    var ii = 0;
    document.querySelector('.web').addEventListener("scroll", function() {
        if (window.scrollY <= 500 && ii ===0) {
            // banner_tl.scrollTrigger.refresh();
            logo_tl.scrollTrigger.refresh();
            lotti_gsap.scrollTrigger.refresh();
            ii++;
        }
    });

    logo_tl = gsap.timeline({
        scrollTrigger: {
            scroller: ".web",
            trigger: motionSec,
            // pin: true,
            // pinSpacing: true,
            scrub: 1.2,
            start: "top-=70% top",
            end: "end end",
             // markers: true,
        },
        ease: "power2.out", // 이징 함수 설정
    });
    function getBottomScroll() {
        console.log('load- bottom animate')
        logo_tl.add("start");
        logo_tl.fromTo(
            motionSec,
            {
                y: "-200px",
            },
            {
                y: "100px",
            },
            "start"
        );
        logo_tl.to(
            motion_bubble,
            {
                rotation: 360 - 18,
                y: "-27.5vh",
            },
            "start"
        );
        logo_tl.to(
            motion_logo,
            {
                delay: 0.2,
                // rotation: 360,
                y: "-23vh",
            },
            "start"
        );
    }
    getBottomScroll();


}
    
