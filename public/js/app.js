if ("serviceWorker" in navigator) {
    // register our service worker
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").then((reg) => {
            // display a success message
            console.log(`Service Worker Registration (SCOPE:  ${reg.scope})`);
        }).catch((error) => {
            // display error message
            console.log(`Service Worker Error (${error})`)
        });
    });
} else {
    console.log('Service worker is not available!');
}