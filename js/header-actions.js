/* ---------- Header Search + Cart ---------- */
export function initHeaderActions() {
    const searchButton = document.querySelector(".search-btn");
    const searchPanel = document.querySelector("#header-search-panel");
    const searchInput = document.querySelector("#site-search");
    const searchResults = document.querySelector(".search-results");
    const searchClose = document.querySelector(".search-close");

    const cartButton = document.querySelector(".cart-btn");
    const cartPanel = document.querySelector("#cart-panel");
    const cartClose = document.querySelector(".cart-close");

    if (!searchButton || !searchPanel || !searchInput || !searchResults || !cartButton || !cartPanel) return;

    const sections = Array.from(document.querySelectorAll("main section[id]"));

    const closeSearch = () => {
        searchPanel.hidden = true;
        searchButton.setAttribute("aria-expanded", "false");
    };

    const closeCart = () => {
        cartPanel.hidden = true;
        cartButton.setAttribute("aria-expanded", "false");
    };

    const openSearch = () => {
        closeCart();
        searchPanel.hidden = false;
        searchButton.setAttribute("aria-expanded", "true");
        requestAnimationFrame(() => searchInput.focus());
        renderResults("");
    };

    const openCart = () => {
        closeSearch();
        cartPanel.hidden = false;
        cartButton.setAttribute("aria-expanded", "true");
    };

    const getSectionTitle = section => {
        const heading = section.querySelector("h1, h2, h3, [class*='heading']");
        return heading?.textContent?.trim() || section.id.replace(/-/g, " ");
    };

    const getSectionText = section => (section.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();

    function renderResults(query) {
        const term = query.trim().toLowerCase();
        const matches = sections.filter(section => {
            if (!term) return true;
            return `${section.id} ${getSectionTitle(section)} ${getSectionText(section)}`.includes(term);
        }).slice(0, 7);

        searchResults.innerHTML = "";

        if (!matches.length) {
            const empty = document.createElement("div");
            empty.className = "search-no-result";
            empty.textContent = "No matching FitLife section found.";
            searchResults.appendChild(empty);
            return;
        }

        matches.forEach(section => {
            const link = document.createElement("a");
            link.className = "search-result";
            link.href = `#${section.id}`;

            const title = document.createElement("strong");
            title.textContent = getSectionTitle(section);

            const id = document.createElement("span");
            id.textContent = `Go to ${section.id.replace(/-/g, " ")}`;

            link.append(title, id);
            link.addEventListener("click", closeSearch);
            searchResults.appendChild(link);
        });
    }

    searchButton.addEventListener("click", () => {
        if (searchPanel.hidden) openSearch();
        else closeSearch();
    });

    searchClose?.addEventListener("click", closeSearch);
    searchInput.addEventListener("input", () => renderResults(searchInput.value));

    cartButton.addEventListener("click", () => {
        if (cartPanel.hidden) openCart();
        else closeCart();
    });

    cartClose?.addEventListener("click", closeCart);

    document.addEventListener("click", event => {
        if (!searchPanel.hidden && !searchPanel.contains(event.target) && !searchButton.contains(event.target)) closeSearch();
        if (!cartPanel.hidden && !cartPanel.contains(event.target) && !cartButton.contains(event.target)) closeCart();
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeSearch();
            closeCart();
        }
    });

    window.addEventListener("resize", () => {
        closeSearch();
        closeCart();
    });
}
