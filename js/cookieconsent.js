// cookieconsent.js

// Check if the cookie consent has already been given
function getCookieConsent() {
    return localStorage.getItem('cookieConsent') === 'true';
}

// Set the cookie consent
function setCookieConsent(value) {
    localStorage.setItem('cookieConsent', value);
}

// Show the cookie consent banner
function showCookieConsentBanner() {
    const cookieConsentBanner = document.createElement('div');
    cookieConsentBanner.classList.add('cookie-consent-banner');
    cookieConsentBanner.innerHTML = `
      <p>This website uses cookies to improve your experience. By continuing to use this site, you agree to our <a href="#">cookie policy</a>.</p>
      <button id="acceptCookiesBtn">Accept Cookies</button>
      <button id="refuseCookiesBtn">Refuse Cookies</button>
    `;
    document.body.appendChild(cookieConsentBanner);

    const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');
    const refuseCookiesBtn = document.getElementById('refuseCookiesBtn');

    acceptCookiesBtn.addEventListener('click', () => {
        setCookieConsent('true');
        cookieConsentBanner.remove();
    });

    refuseCookiesBtn.addEventListener('click', () => {
        setCookieConsent('false');
        cookieConsentBanner.remove();
    });
}

// Check if cookie consent is needed and show the banner if needed
if (!getCookieConsent()) {
    showCookieConsentBanner();
}