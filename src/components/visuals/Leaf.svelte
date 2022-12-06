<script lang="ts">
    export let width: string | number;
    export let height: string | number;
    export let x0: string | number;
    export let y0: string | number;
    export let variant: "blowing1" | "blowing2" | "blowing3";
    export let speed: string;
    export let delay: string = "0s";
</script>

<div class="absolute" style="top: {y0}; left: {x0};">
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 466.37 582.03" width={width} height={height} style="opacity: 0; animation: {variant} {speed} linear {delay} infinite;">
        <path d="M121 398c3-6.27 58.54 35.72 133 35 124.49-1.2 196.64-120.74 216-105 18.47 15-24.33 142.38-110 163-33 7.93-61.38-2.56-114-22-70.7-26.12-128-64.73-125-71Z" style="fill:#e32737;stroke:#e32737;stroke-miterlimit:10" transform="translate(-120.38 -326.07)"/>
    </svg>
</div>

<style>
    @keyframes -global-blowing1 {
        0% {
            transform: translateX(0) translateY(0) rotate(0);
            opacity: 0;
            filter: blur(5px)
        }
        5% {
            transform: translateX(3.39vw) translateY(-5vh) rotate(-50deg);
            opacity: 0;
            filter: blur(5px)
        }
        10% {
            transform: translateX(6.79vw) translateY(-10vh) rotate(-100deg);
            opacity: 0.8;
            filter: blur(5px)
        } 
        15% {
            transform: translateX(10.23vw) translateY(-15vh) rotate(-150deg);
            opacity: 0.8;
            filter: blur(5px)
        } 
        20% {
            transform: translateX(13.72vw) translateY(-20vh) rotate(-200deg);
            opacity: 0.8;
            filter: blur(5px)
        } 
        25% {
            transform: translateX(17.28vw) translateY(-25vh) rotate(-250deg);
            opacity: 0.8;
            filter: blur(5px)
        } 
        30% {
            transform: translateX(20.95vw) translateY(-30vh) rotate(-250deg);
            opacity: 0.8;
            filter: blur(4px)
        } 
        35% {
            transform: translateX(24.73vw) translateY(-35vh) rotate(-300deg);
            opacity: 0.8;
            filter: blur(5px)
        } 
        40% {
            transform: translateX(28.66vw) translateY(-40vh) rotate(-350deg);
            opacity: 0.8;
            filter: blur(3px)
        } 
        45% {
            transform: translateX(32.79vw) translateY(-45vh) rotate(-400deg);
            opacity: 0.8;
            filter: blur(5px)
        } 
        50% {
            transform: translateX(37.16vw) translateY(-50vh) rotate(-550deg);
            opacity: 0.8;
            filter: blur(2.5px)
        } 
        55% {
            transform: translateX(41.81vw) translateY(-55vh) rotate(-570deg);
            opacity: 0.8;
            filter: blur(5px)
        } 
        60% {
            transform:translateX(46.82vw) translateY(-60vh) rotate(-600deg);
            opacity: 0.8;
            filter: blur(3px)
        } 
        65% {
            transform: translateX(52.27vw) translateY(-65vh) rotate(-750deg);
            opacity: 0.8;
            filter: blur(5px)
        } 
        70% {
            transform: translateX(58.23vw) translateY(-70vh) rotate(-770deg);
            opacity: 0.8;
            filter: blur(4px)
        } 
        75% {
            transform: translateX(64.77vw) translateY(-75vh) rotate(-800deg);
            opacity: 0.8;
            filter: blur(5px)
        } 
        80% {
            transform: translateX(71.76vw) translateY(-80vh) rotate(-850deg);
            opacity: 0.8;
            filter: blur(5px)
        } 
        85% {
            transform: translateX(79.09vw) translateY(-85vh) rotate(-900deg);
            opacity: 0.8;
            filter: blur(5px)
        } 
        90% {
            transform: translateX(86.4vw) translateY(-90vh) rotate(-920deg);
            opacity: 0.8;
            filter: blur(6px)
        } 
        95% {
            transform: translateX(93.35vw) translateY(-95vh) rotate(-950deg);
            opacity: 0.8;
            filter: blur(5px)
        }
        100% {
            transform: translateX(100vw) translateY(-100vh) rotate(-1000deg);
            opacity: 0;
            filter: blur(5px)
        }
    }
</style>