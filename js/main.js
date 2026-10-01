import { loadPageComponents } from "./component-loader.js";
import { initNavigation } from "./navigation.js";
import { initTheme } from "./theme.js";
import { initFeedback } from "./feedback.js";
import { initHeaderActions } from "./header-actions.js";

document.addEventListener("DOMContentLoaded", async () => {
    try {
        await loadPageComponents();
        initNavigation();
        initTheme();
        initFeedback();
        initHeaderActions();
    } catch (error) {
        console.error("FitLife component loading failed:", error);
        document.querySelector("#main-content")?.insertAdjacentHTML(
            "afterbegin",
            '<p style="padding:2rem;text-align:center">Please run this project with VS Code Live Server. Component files require a local web server.</p>'
        );
    }
});
