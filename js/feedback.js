export function initFeedback() {
    const feedbackForm = document.getElementById("feedbackForm");
    const feedbackStatus = document.getElementById("feedbackStatus");
    if (!feedbackForm) return;

    feedbackForm.addEventListener("submit", event => {
        event.preventDefault();
        if (!feedbackForm.checkValidity()) { feedbackForm.reportValidity(); return; }
        const name = feedbackForm.elements.Name.value.trim();
        const phone = feedbackForm.elements.phone.value.trim();
        const email = feedbackForm.elements.email.value.trim();
        const service = feedbackForm.elements.service.value;
        const message = feedbackForm.elements.message.value.trim();
        const whatsappUrl = "https://wa.me/919493497153?text=" + encodeURIComponent(
            "Hello FitLife, I have a feedback/message for you.\n\n" +
            "Feedback Name: " + name + "\n" +
            "Phone: " + (phone || "Not provided") + "\n" +
            "Email: " + (email || "Not provided") + "\n" +
            "Service: " + (service || "Not selected") + "\n" +
            "Message: " + message
        );
        const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        if (popup) {
            if (feedbackStatus) feedbackStatus.textContent = "Opening WhatsApp with your message…";
            feedbackForm.reset();
        } else if (feedbackStatus) {
            feedbackStatus.textContent = "WhatsApp could not be opened. Please allow pop-ups and try again.";
        }
    });
}
