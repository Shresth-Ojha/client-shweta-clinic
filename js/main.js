(() => {
  "use strict";

  const WHATSAPP_NUMBER = "917022117903";

  function initContactForm() {
    const form = document.getElementById("contactForm");
    const success = document.getElementById("contactSuccess");
    if (!form || !success) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();
      const text =
        `New enquiry from the Shweta Clinic website:\nName: ${name}\nPhone: ${phone}\nMessage: ${message || "(none)"}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
      form.classList.add("hidden");
      success.classList.remove("hidden");
    });
  }

  initContactForm();
})();

