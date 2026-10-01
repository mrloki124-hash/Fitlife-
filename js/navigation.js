export function initNavigation() {
    const menuBtn = document.querySelector(".mobile-menu-btn");
    const nav = document.querySelector(".nav-links");
    if (!menuBtn || !nav) return;

    const closeMenu = () => {
        nav.classList.remove("mobile-open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation menu");
    };

    menuBtn.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("mobile-open");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
        menuBtn.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("click", event => {
        if (window.innerWidth <= 768 && nav.classList.contains("mobile-open") &&
            !nav.contains(event.target) && !menuBtn.contains(event.target)) closeMenu();
    });
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
    window.addEventListener("resize", () => { if (window.innerWidth > 768) closeMenu(); });
}
