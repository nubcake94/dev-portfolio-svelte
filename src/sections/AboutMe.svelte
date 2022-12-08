<script>
    import GoMarkGithub from 'svelte-icons/go/GoMarkGithub.svelte';
    import IoLogoLinkedin from 'svelte-icons/io/IoLogoLinkedin.svelte';
    import MdEmail from 'svelte-icons/md/MdEmail.svelte';
    import UpworkIcon from '../components/icons/UpworkIcon.svelte';
</script>

<section class="flex flex-col sm:flex-row h-screen">
    <div id="branch">
        <img src="47881.png" alt="branch" />
    </div>
    <div class="flex flex-col flex-1 justify-center items-center sm:pt-8">
        <div id="me">
            <img id="me-img" src="me.jpg" alt="me" />
        </div>
        <div class="divider w-[75%] my-4" />
        <div class="flex flex-row items-center">
            <a id="github" class="contact-button" href="https://github.com/nubcake94" target="_blank" rel="noreferrer">
                <GoMarkGithub />
            </a>
            <a id="email" class="contact-button" href="mailto:patrikszabo.dev@gmail.com">
                <MdEmail />
            </a>
            <a id="linkedin" class="contact-button" href="https://www.linkedin.com/in/nubcake94/" target="_blank" rel="noreferrer">
                <IoLogoLinkedin />
            </a>
            <a
                id="upwork"
                class="contact-button"
                href="https://www.upwork.com/freelancers/~0160b45b57101fee9e"
                target="_blank"
                rel="noreferrer"
            >
                <UpworkIcon />
            </a>
        </div>
    </div>
    <div class="flex flex-2 flex-col justify-center items-center sm:text-start text-center">
        <h2>
            I'm a hungarian Fullstack Developer working as a freelancer. My main focus is on understanding both client and business needs so
            that I can deliver the most optimal solution.
        </h2>
        <h2>Have an idea? Contact me and lets talk about how I can materialize your concept.</h2>
    </div>
</section>

<style>
    h2 {
        font-family: PoiretOne;
        font-size: 40px;
        padding: 16px 100px;
    }

    #branch {
        animation: swing 3s ease-in-out 0s infinite alternate-reverse;
        position: absolute;
        left: -10px;
    }

    #me-img {
        border-radius: 50%;
        width: 350px;
    }

    .contact-button {
        width: 40px;
        margin: 0px 8px;
        color: #e32737;
        opacity: 0.5;
        cursor: pointer;
    }

    #github {
        width: 38px;
    }

    #email {
        width: 45px;
    }

    #linkedin {
        width: 46px;
    }

    #upwork {
        width: 36px;
    }

    @media (min-width: 0px) and (max-width: 500px) {
        h2 {
            font-size: 28px;
            padding: 16px;
        }
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
