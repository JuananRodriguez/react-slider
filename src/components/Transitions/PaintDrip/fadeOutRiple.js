import { TimelineMax, Power1 } from "gsap";
import convert from "color-convert";

export default ({ length }, event, hex, color, node) => {
    const body = document.body;
    const piTwo = Math.PI * 2;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    let rgb = hex ? convert.hex.rgb(hex).join(",") : "0,0,255";
    rgb = color ? convert.keyword.rgb(color) : rgb;

    canvas.style.zIndex = 10000;
    canvas.style.top = 0;
    canvas.style.position = "fixed";

    let vw = (canvas.width = window.innerWidth);
    let vh = (canvas.height = window.innerHeight);

    body.appendChild(canvas);

    // Event coords
    const x = event.clientX;
    const y = event.clientY;

    // Delta - difference between event and farthest corner
    const dx = x < vw / 2 ? vw - x : x;
    const dy = y < vh / 2 ? vh - y : y;

    const radius = Math.sqrt(dx * dx + dy * dy);

    const ripple = {
        alpha: 0,
        radius: radius,
        x: x,
        y: y
    };

    const seconds = length;

    new TimelineMax({
        onUpdate: drawRipple,
        onComplete: () => removeCanvas(seconds)
    })
        .to(ripple, seconds / 4, { alpha: 1 })
        // .set(node, { opacity: 0 }, seconds / 1.75)
        .to(
            ripple,
            seconds - seconds / 3,
            { radius: 0, ease: Power1.easeOut },
            0
        )
        .set(node, { visibility: "unset" }, seconds  - seconds / 3);
    // .to(canvas, seconds / 3, { x: "100%", ease: Power1.easeIn }, `+=.2`);

    function drawRipple() {
        ctx.clearRect(0, 0, vw, vh);
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, piTwo, false);
        const fillStyle = `rgba(${rgb},${ripple.alpha})`;
        ctx.fillStyle = fillStyle;
        ctx.fill();
    }

    window.addEventListener("resize", onResize);

    function removeCanvas(wait = 0) {
        setTimeout(() => {
            body.removeChild(canvas);
        }, wait);
    }

    function onResize() {
        vw = canvas.width = window.innerWidth;
        vh = canvas.height = window.innerHeight;
    }
};