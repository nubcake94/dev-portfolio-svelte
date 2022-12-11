<script>
    import IoIosArrowRoundDown from 'svelte-icons/io/IoIosArrowRoundDown.svelte';
</script>

<section class="flex flex-col min-h-screen items-center justify-center">
    <div class="section-container flex flex-col flex-1 items-center justify-center gap-y-9">
        <h1 id="intro-text" class="md:text-9xl text-4xl">Hey there</h1>
        <h1 id="me" class="md:text-7xl text-2xl">I'm Patrik</h1>
    </div>
    <div id="click-for-details-container-1" class="absolute w-[75%] max-w-xl bottom-[15%]">
        <p id="welcome" class="caption-text text-center">Welcome to my portfolio!</p>
        <div class="divider my-3" />
        <div class="flex flex-col flex-1 justify-center items-center hidden">
            <div class="icon">
                <IoIosArrowRoundDown />
            </div>
        </div>
    </div>
</section>

<style>
    #intro-text {
        text-shadow: 2px 2px 200px #e32737;
        color: #aaaaaa;
        opacity: 0;
        letter-spacing: 30px;
        animation: appear 2s ease-in-out 1s 1 forwards;
    }

    #me {
        text-shadow: 2px 2px 200px #e32737;
        color: #aaaaaa;
        opacity: 0;
        letter-spacing: 15px;
        animation: appear 2s ease-in-out 3s 1 forwards;
    }

    #click-for-details-container-1 {
        opacity: 0;
        animation: appear 2s ease-in-out 6s 1 forwards;
    }

    #welcome {
        text-shadow: 2px 2px 200px #e32737;
        color: #aaaaaa;
    }

    .icon {
        width: 60px;
        height: 60px;
        color: #aaaaaa;
        background-color: transparent;
        transition: all 0.5s;
        cursor: pointer;
    }

    .icon:hover {
        transform: scale(1.15);
        color: white;
    }

    @media (min-width: 0px) and (max-width: 500px) {
        .section-container {
            animation: move-mobile 2s ease-in-out 6s 1 forwards;
        }

        #intro-text {
            letter-spacing: 15px;
        }

        #me {
            letter-spacing: 8px;
        }
    }

    @media (min-width: 501px) {
        .section-container {
            animation: move 2s ease-in-out 6s 1 forwards;
        }
    }

    @keyframes appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes move {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-30%);
        }
    }

    @keyframes move-mobile {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-20%);
        }
    }
</style>
