export function initTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;
    let savedTheme = null;
    try { savedTheme = localStorage.getItem("fitlife-theme"); } catch (error) {}
    const systemPrefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches;
    if (savedTheme === "light" || (!savedTheme && systemPrefersLight)) themeToggle.checked = true;

    const updateThemeColor = () => {
        const themeColor = document.querySelector('meta[name="theme-color"]');
        if (themeColor) themeColor.setAttribute("content", themeToggle.checked ? "#f5f6f2" : "#0b0d0f");
        try { localStorage.setItem("fitlife-theme", themeToggle.checked ? "light" : "dark"); } catch (error) {}
    };
    themeToggle.addEventListener("change", updateThemeColor);
    updateThemeColor();
}
