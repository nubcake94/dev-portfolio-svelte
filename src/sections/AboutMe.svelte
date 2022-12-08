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
    <div class="flex flex-col flex-1 justify-center items-center">
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

    .contact-button {
        width: 40px;
        margin: 0px 8px;
        color: #e32737;
        opacity: 0.6;
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
