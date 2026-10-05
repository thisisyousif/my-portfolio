const mobileButton=document.querySelector("#mobile-menu");
const navItems=document.querySelector(".nav-items");
mobileButton.addEventListener('click',() => {
    navItems.classList.toggle("active");
})
const navLinks=document.querySelectorAll(".nav-link");
navLinks.forEach((navl)=>{
    navl.addEventListener('click',()=>{
        navItems.classList.toggle("active");
    })
})

// ===== Lightbox =====
document.addEventListener('DOMContentLoaded', function () {

    // اختيار جميع صور المعرض
    const galleryImages = document.querySelectorAll('.project-gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');

    // فتح الصورة عند الضغط عليها
    galleryImages.forEach(img => {
        img.addEventListener('click', function () {
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightbox.classList.add('active');
        });
    });

    // إغلاق بالضغط على الخلفية أو زر الإغلاق
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox || e.target === closeBtn) {
            lightbox.classList.remove('active');
        }
    });

    // إغلاق بزر Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        }
    });
});