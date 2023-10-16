// Does browser support service workers?

if ("serviceWorker" in navigator) {
    // Then register our service worker
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").then((reg) => {
            // Display a success message
            console.log(`Service Worker Registration (SCOPE:  ${reg.scope})`);
        }).catch((error) => {
            // Display error message
            console.log(`Service Worker Error (${error})`)
        });
    });
} else {
    // Doesn't support service workers
    // Or if the app isn't served over a TLS connection (HTTPS)
    console.log('Service worker is not available!');
}