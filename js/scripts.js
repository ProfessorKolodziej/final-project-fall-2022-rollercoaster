let rollercoaster;
let animationStarted = false;

function initializeAnimation() {
  rollercoaster = lottie.loadAnimation({
    container: document.querySelector(".rollercoaster"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://lottie.host/dd724dc3-bb5e-48dd-b042-423aae284743/YI2wShyfNd.json"
  });
}

function updateAnimation(scrollPercentage) {
  if (scrollPercentage >= 0 && scrollPercentage <= 100) {

    rollercoaster.goToAndStop(scrollPercentage * (rollercoaster.totalFrames / 100), true);
  }
}

function onScroll() {
  const scrollFromTop = window.scrollY;
  const stage1 = document.querySelector("#stage1");
  const stage6 = document.querySelector("#stage6");
  const animationStartScroll = stage1.offsetTop - window.innerHeight / 2;
  const animationEndScroll = stage6.offsetTop + stage6.offsetHeight;

  if (!animationStarted && scrollFromTop >= animationStartScroll && scrollFromTop <= animationEndScroll) {
    initializeAnimation();
    animationStarted = true;

    document.querySelector(".rollercoaster").classList.add("appear");
  }

  if (animationStarted) {
    let scrollPercentage;
    if (scrollFromTop <= animationStartScroll) {
      scrollPercentage = 0;
    } else if (scrollFromTop >= animationEndScroll) {
      scrollPercentage = 100;
    } else {
      scrollPercentage = ((scrollFromTop - animationStartScroll) * 100) / (animationEndScroll - animationStartScroll);
    }

    updateAnimation(scrollPercentage);
  }
}
window.addEventListener("scroll", onScroll);

