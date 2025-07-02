document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        const linkFile = href.substring(href.lastIndexOf('/') + 1); // 轉成純檔名
        if (linkFile === currentFile) link.classList.add('active');
    });

    document.querySelector('#mailchimp-form').addEventListener('submit', function (e) {
        e.preventDefault(); // 阻止原本跳轉行為

        const form = e.target;
        const formData = new FormData(form);

        fetch('https://gmail.us11.list-manage.com/subscribe/post?u=9e322c0b88230b1d5077c8d86&id=1de2b26d55&f_id=00f410e1f0', {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Mailchimp 不會給 response，但這樣至少能送出
        });

        Swal.fire({
            icon: 'success',
            title: '已送出成功！',
            text: '我們已收到你的訊息，會盡快與你聯絡！！',
            confirmButtonText: '了解',
            timer: 3000
        });

        form.reset(); // 重設表單
    });

});

