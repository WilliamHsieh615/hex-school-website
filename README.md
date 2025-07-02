# 六角學院形象網站 (HexSchool Website)

### 專案簡介
本專案為「六角學院」打造的一頁式品牌形象網站，展現其課程內容、教育理念與視覺風格。網站使用 HTML 與 CSS 切版，並整合 Swiper.js 製作可滑動的課程卡片區塊，搭配 SweetAlert2 呈現互動提示視窗，以及 Mailchimp 表單串接蒐集使用者資料，是一個結合行銷、設計與互動的前端實作專案。

🔗 [作品連結](https://williamhsieh615.github.io/HexSchoolWebsite/)

### 技術棧
- HTML5 + SCSS（Sass 預處理）
- RWD 響應式設計
- Swiper.js（卡片輪播功能）
- SweetAlert2（美化彈出提示視窗）
- Mailchimp（嵌入式行銷表單串接）
- 原生 JavaScript – 導覽列 active 及表單提交

## 核心功能
- **導覽列 Path 感知**：依網址自動高亮目前頁面。
- **精選課程滑動卡片**：以 Swiper.js 建立 RWD 輪播。
- **Mailchimp 表單**：填寫資料即送出到指定 Audience。
- **SweetAlert2**：送出後 3 秒內顯示成功提示並自動重設表單。
- **SCSS 模組化**：`_cssReset / _common / _index / _course / _QA` 等分離樣式，集中於 `style.scss`。

### 專案結構
/index.html                             # 首頁（品牌形象與導引）
/course.html                            # 即將開課介紹頁面
/QA.html                                # 常見問題頁面

/CSS/style.scss                         # SCSS 主入口（整合各子樣式）
/CSS/_cssReset.scss                     # 樣式重置設定
/CSS/_common.scss                       # 共用元件樣式（按鈕、版型等）
/CSS/_index.scss                        # 首頁專用樣式
/CSS/_course.scss                       # 課程頁樣式
/CSS/_QA.scss                           # 問答頁樣式

/JS/all.js                              # 主腳本：導覽列高亮、Mailchimp 表單串接、SweetAlert2 成功提示

/data/mailchimp_page.png                # Mailchimp 後台報表截圖
/data/mailchimp_text_data.csv           # 匯出聯絡資料 CSV

/image/bg_index.png                     # 首頁背景圖
/image/bg_course.png                    # 課程頁背景圖
/image/bg_QA.png                        # QA 頁背景圖
/image/logo.png                         # 網站 logo
/image/...                              # 其他圖片與圖示素材

/README.md                              # 專案說明文件（本檔案）

### 頁面預覽
#### Mailchimp後台
說明：indexl.html 與 QA.html 兩個頁面的表單，皆有串接 Mailchimp，測試資料如下
![報表頁面](https://github.com/WilliamHsieh615/HexSchoolWebsite/blob/main/data/mailchimp_page.png)
[報表連結](https://github.com/WilliamHsieh615/HexSchoolWebsite/blob/main/data/mailchimp_text_data.csv)

### 使用說明
1. 下載專案並於本機開啟 `index.html` 即可預覽。
2. 若需串接自己的 Mailchimp 帳號，可至 Mailchimp 設定 Audience，複製嵌入表單程式碼並替換現有 `<form>`。
3. 所有互動邏輯包含在 `js/all.js`，可自由調整 Swal 樣式或 Swiper 參數。
