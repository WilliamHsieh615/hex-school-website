![banner](https://github.com/WilliamHsieh615/HexSchoolWebsite/blob/main/data/ReadmeBanner.png)

# 六角學院形象網站 (HexSchool Website)

🔗 [作品連結](https://williamhsieh615.github.io/HexSchoolWebsite/)

### 專案簡介
本專案為「六角學院」打造的一頁式品牌形象網站，展現其課程內容、教育理念與視覺風格。網站使用 HTML 與 CSS 切版，並整合 Swiper.js 製作可滑動的課程卡片區塊，搭配 SweetAlert2 呈現互動提示視窗，以及 Mailchimp 表單串接蒐集使用者資料，是一個結合行銷、設計與互動的前端實作專案。

### 技術棧
- HTML5 + SCSS（Sass 預處理）
- RWD 響應式設計
- [Swiper.js](https://swiperjs.com/)（卡片輪播功能）
- [SweetAlert2](https://sweetalert2.github.io/)（美化彈出提示視窗）
- [Mailchimp](https://mailchimp.com/landers/email-marketing-platform/?ds_c=DEPT_AOC_Google_Search_ROW_EN_Brand_Acquire_Omega_Manual-NE_T3&ds_kids=p81005570474&ds_a_lid=kwd-2285511033&ds_cid=71700000120288589&ds_agid=58700008803527157&gad_source=1&gad_campaignid=21865451006&gbraid=0AAAAADh1Fp2jaG6pjxmJQMsg96K5tlYQJ&gclid=CjwKCAjw6NrBBhB6EiwAvnT_rjo0N6KWVGxlhyII2Qi58w2AbWJpf27z4cYlrY5DDLo6ARWi10pc0hoCQ7UQAvD_BwE&gclsrc=aw.ds)（嵌入式行銷表單串接）
- 原生 JavaScript – 導覽列 active 及表單提交

### 核心功能
- **導覽列 Path 感知**：依網址自動高亮目前頁面。
- **精選課程滑動卡片**：以 Swiper.js 建立 RWD 輪播。
- **Mailchimp 表單**：填寫資料即送出到指定 Audience。
- **SweetAlert2**：送出後 3 秒內顯示成功提示並自動重設表單。
- **SCSS 模組化**：`_cssReset / _common / _index / _course / _QA` 等分離樣式，集中於 `style.scss`。

### 頁面導覽
#### Mailchimp後台
說明：indexl.html 與 QA.html 兩個頁面的表單，皆有串接 Mailchimp，測試資料詳
[報表連結](https://github.com/WilliamHsieh615/HexSchoolWebsite/blob/main/data/mailchimp_text_data.csv)
![報表頁面](https://github.com/WilliamHsieh615/HexSchoolWebsite/blob/main/data/mailchimp_page.png)


### 使用說明
1. 點擊[作品連結](https://williamhsieh615.github.io/HexSchoolWebsite/)或下載專案並於本機開啟 `index.html` 即可預覽。
2. 若需串接自己的 Mailchimp 帳號，可至 Mailchimp 設定 Audience，複製嵌入表單程式碼並替換現有 `<form>`。
3. 所有互動邏輯包含在 `js/all.js`，可自由調整 Swal 樣式或 Swiper 參數。
