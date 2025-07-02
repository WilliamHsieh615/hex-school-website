document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.querySelector(".searchBtn");
    const searchInput = document.querySelector(".searchInput");
    const noData = document.querySelector(".noData");
    const sections = document.querySelectorAll(".QAMain > div");

    sections.forEach(section => {
        section.setAttribute("data-original-html", section.innerHTML);
    });

    function search() {
        const keyword = searchInput.value.trim().toLowerCase();
        let matchFound = false;

        sections.forEach(section => {
            const originalHTML = section.getAttribute("data-original-html");
            section.innerHTML = originalHTML;
            const text = section.textContent.toLowerCase();

            if (!keyword || text.includes(keyword)) {
                section.style.display = "block";
                matchFound = true;

                if (keyword) {
                    const regex = new RegExp(`(${keyword})`, "gi");
                    section.innerHTML = section.innerHTML.replace(regex, `<mark>$1</mark>`);
                }
            } else {
                section.style.display = "none";
            }
        });

        noData.style.display = matchFound ? "none" : "block";
        searchInput.value = "";
    }

    searchBtn.addEventListener("click", function (e) {
        e.preventDefault();
        search();
    });

    searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            search();
        }
    });
});