export async function loadComponent(targetSelector, file) {
    const target = document.querySelector(targetSelector);
    if (!target) return;
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Could not load ${file}: ${response.status}`);
    target.innerHTML = await response.text();
}

export async function loadPageComponents() {
    const sectionFiles = [
        "home", "about", "services", "classes", "trainers",
        "facilities", "protein", "membership", "testimonials", "cta", "contact"
    ];

    await loadComponent("#site-header", "components/header.html");
    const page = document.querySelector("#page-sections");
    for (const name of sectionFiles) {
        const response = await fetch(`components/${name}.html`);
        if (!response.ok) throw new Error(`Could not load components/${name}.html`);
        page.insertAdjacentHTML("beforeend", await response.text());
    }
    await loadComponent("#site-footer", "components/footer.html");
}
