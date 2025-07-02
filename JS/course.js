document.addEventListener("DOMContentLoaded", () => {
    const course = [
        { photo: "../image/html5.png", name: "Html 5 基礎教學", introduce: "主流前端網站設計的基礎，透過實際的範例，瞭解正確的網站開發流程。" },
        { photo: "../image/rwd.png", name: "響應式網站設計", introduce: "六角學院提供業界響應式開發方法，讓學生瞭解完善的行動版開發觀念。" },
        { photo: "../image/jQuery.png", name: "jQuery 實戰教學", introduce: "分為四大主題：變數的使用、操作DOM、基本數學運算和套件運用。" },
        { photo: "../image/CSSdot.png", name: "CSS 3 樣式設計", introduce: "掌握選取器、盒模型與版面配置，設計出專業與美觀的網頁樣式。" },
        { photo: "../image/sass.png", name: "Sass 預處理語言", introduce: "透過 Sass 變數、巢狀結構與模組化，提高 CSS 的維護效率。" },
        { photo: "../image/javascript.png", name: "JavaScript 程式設計", introduce: "變數、函式、流程控制、事件與 DOM 操作，完整學習 JS 核心。" },
        { photo: "../image/vuedotjs.png", name: "Vue.js 框架實作", introduce: "掌握元件化設計、資料綁定與生命週期，建構現代化 SPA 網站。" },
        { photo: "../image/react.png", name: "React 開發實務", introduce: "透過 Hook、狀態管理與 JSX 實作互動式應用程式，提升開發效率。" },
        { photo: "../image/nodedotjs.png", name: "Node.js 後端開發", introduce: "使用 JavaScript 打造後端伺服器，學習 Express、API 與資料庫整合。" }
    ];
    let courseStr = '';
    const courseList = document.querySelector(".course");
    course.forEach((item) => {
        courseStr +=
            `<li class="swiper-slide">
                <img src="${item.photo}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.introduce}</p>
            </li>`;
    });
    courseList.innerHTML = courseStr;

    new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        mousewheel: true,
        breakpoints: {
            600: { slidesPerView: 2 },
            850: { slidesPerView: 3 },
        },
    });
});

