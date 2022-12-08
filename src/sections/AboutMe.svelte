<section class="flex flex-col sm:flex-row h-screen">
    <div id="branch">
        <img src="47881.png" alt="branch" />
    </div>
    <div class="flex flex-1 justify-center items-center">
        <div id="me">
            <img id="me-img" src="me.jpg" alt="me" />
        </div>
    </div>
    <div class="flex flex-2 justify-center items-center p-8 sn:text-start text-center">
        <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum lorem id ex pulvinar ullamcorper. Phasellus consequat
            dui eget blandit viverra. Phasellus porttitor augue odio, eget posuere leo ullamcorper eget.
        </h2>
    </div>
</section>

<style>
    #branch {
        animation: swing 3s ease-in-out 0s infinite alternate-reverse;
        position: absolute;
        left: -10px;
    }

    #me-img {
        border-radius: 50%;
        width: 350px;
    }
    @media (min-width: 0px) and (max-width: 500px) {
        #branch {
            width: 95vw;
        }

        #me-img {
            margin-top: 25vh;
            width: 75vw;
        }
    }

    @media (min-width: 501px) {
        #branch {
            width: 600px;
        }
    }

    @keyframes swing {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(3deg);
        }
    }
</style>
