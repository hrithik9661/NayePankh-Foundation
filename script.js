// ================= COUNTER =================
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const el = entry.target;
            const target = +el.getAttribute("data-target");
            let count = 0;

            const update = () => {
                count += target / 100;
                if(count < target){
                    el.innerText = Math.floor(count);
                    requestAnimationFrame(update);
                } else {
                    el.innerText = target;
                }
            };

            update();
            observer.unobserve(el);
        }
    });
}, {threshold:0.5});

counters.forEach(c => observer.observe(c));


// ================= TESTIMONIAL SLIDER =================
const testimonials = document.querySelectorAll(".testimonial-card");
let index = 0;

setInterval(() => {
    testimonials.forEach(t => t.classList.remove("active"));
    if(testimonials.length){
        index = (index + 1) % testimonials.length;
        testimonials[index].classList.add("active");
    }
}, 4000);


// ================= LIGHTBOX =================
const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
});


// ================= VOLUNTEER POPUP =================
const form = document.getElementById("volunteerForm");
const popup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    popup.style.display = "flex";
    form.reset();
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});


// ================= DARK MODE =================
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("light-mode")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});