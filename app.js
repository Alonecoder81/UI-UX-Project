document.querySelectorAll(".action-btn").forEach(button => {
    button.addEventListener("click", () => {
        alert(button.classList.contains("like-btn") ? "Liked!" : "Shared!");
    });
});


const containers = document.querySelectorAll('.trending-container, .feed-container');

containers.forEach(container => {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 3; // Scroll-fast
        container.scrollLeft = scrollLeft - walk;
    });
});
