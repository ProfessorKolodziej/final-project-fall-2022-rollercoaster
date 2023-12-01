// Function to initialize the Lottie animation
function initializeAnimation() {
    rollercoaster = lottie.loadAnimation({
        container: document.querySelector(".rollercoaster"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "https://lottie.host/dd724dc3-bb5e-48dd-b042-423aae284743/YI2wShyfNd.json"
    });
}
