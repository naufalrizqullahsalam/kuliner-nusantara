// ================================
// Mobile Navbar
// ================================

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

// Cek apakah elemen tersedia
if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
    });
}


// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");

        // Abaikan jika href hanya "#"
        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Tutup mobile menu setelah link diklik
            if (hamburger && menu) {
                hamburger.classList.remove("active");
                menu.classList.remove("active");
            }
        }
    });
});
