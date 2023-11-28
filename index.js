function startTransition() {
    const header = document.querySelector('#header');
    const header_1 = header.querySelector('.mySlides');
    const content = document.querySelector('#content');
    const content_1 = content.querySelector('.mySlides');

    header_1.classList.add('fade'); // Thêm lớp để kích hoạt transition
    content_1.classList.add('fade');

    setTimeout(function () {
        header_1.classList.remove('fade');
        content_1.classList.remove('fade'); // Xóa lớp để chu kỳ lặp
        setTimeout(startTransition, 2000); // Bắt đầu lại sau 5 giây
    }, 500);

    header.appendChild(header_1);
    content.appendChild(content_1);
    
}

// Bắt đầu transition lần đầu tiên
setTimeout(startTransition, 1000);
