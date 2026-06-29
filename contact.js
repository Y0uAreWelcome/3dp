document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', event => {
        event.preventDefault();

        const emailInput = document.getElementById('visitor-email');
        const messageInput = document.getElementById('note');
        const email = emailInput?.value.trim();
        const message = messageInput?.value.trim();

        if (!email || !message) {
            return;
        }

        const recipient = '3dpsupport@proton.me';
        const subject = encodeURIComponent('Contact Request from 3DP The Store');
        const body = encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`);
        const status = document.getElementById('form-status');
        const fallback = document.getElementById('form-fallback');
        const mailtoHref = `mailto:${recipient}?subject=${subject}&body=${body}`;

        if (status) {
            status.textContent = 'Attempting to open your email client with the message ready to send...';
        }

        if (fallback) {
            fallback.innerHTML = `If your browser does not open an email app, <a href="${mailtoHref}">click here</a> to send your message manually, or email <strong>${recipient}</strong> directly.`;
        }

        window.location.href = mailtoHref;
    });
});
