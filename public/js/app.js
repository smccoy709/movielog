if ("serviceWorker" in navigator) {
    // Register our service worker
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").then((reg) => {
            // Display a success message
            console.log(`Service Worker Registration (SCOPE:  ${reg.scope})`);
        }).catch((error) => {
            // Display error message
            console.log(`Service Worker Error (${error})`)
        });
    });
} else {
    console.log('Service worker is not available!');
}