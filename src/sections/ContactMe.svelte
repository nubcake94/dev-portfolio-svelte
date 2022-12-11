<script>
    import emailjs from '@emailjs/browser';
    import { toast } from '@zerodevx/svelte-toast';
    import { field, form } from 'svelte-forms';
    import { required } from 'svelte-forms/validators';
    import IoMdSend from 'svelte-icons/io/IoMdSend.svelte';
    import { RingLoader } from 'svelte-loading-spinners';

    const name = field('name', '', [required()]);
    const email = field('email', '', [required()]);
    const message = field('message', '', [required()]);

    const contactForm = form(name, email, message);
    contactForm.validate();

    let loading = false;

    function sendEmail(e) {
        loading = true;
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    const form = document.getElementById('contact-form');
                    // @ts-ignore
                    form.reset();
                    loading = false;
                    toast.push('Thank you for contacting me!');
                },
                (error) => {
                    loading = false;
                }
            );
    }
</script>

<section class="flex flex-col min-h-screen items-center">
    <div class="flex w-[95%] lg:w-[80%] lg:max-w-[1000px] md:pt-[80px]">
        <div class="flex flex-1 flex-col md:flex-row">
            <div class="flex flex-1 flex-col gap-y-4 px-4">
                <h2 class="text-center mb-2">Have an idea to work on?</h2>
                <h5>
                    I define my job to be the best to understand your priorities and needs so that I can deliver the highest quality product
                    you can get.
                </h5>
                <h5>Contact me and let me reach out to you with a proposal.</h5>
                <div class="divider" />
                <h5>You can count on me in these topics:</h5>
                <ul class="list-disc ml-6">
                    <li>Work and clarify your ideas together to provide a well defined development plan</li>
                    <li>Develop fullstack applications with backend/frontend/mobile apps</li>
                    <li>Implement any kind of website from a Figma design</li>
                    <li>Build serverless mobile apps with Flutter & Firebase</li>
                </ul>
            </div>
            <div class="flex flex-col flex-1 justify-center p-4">
                <form on:submit|preventDefault={sendEmail} class="flex flex-col gap-y-4" id="contact-form">
                    <div class="flex flex-col">
                        <label for="name" class="mb-1">Your name</label>
                        <input type="text" name="name" bind:value={$name.value} on:change={() => contactForm.validate()} />
                    </div>
                    <div class="flex flex-col">
                        <label for="email" class="mb-1">Your email address</label>
                        <input type="text" name="email" bind:value={$email.value} on:change={() => contactForm.validate()} />
                    </div>
                    <div class="flex flex-col">
                        <label for="message" class="mb-1">Message</label>
                        <textarea name="message" bind:value={$message.value} on:change={() => contactForm.validate()} />
                    </div>
                    <div class="flex flex-col">
                        <button type="submit" class="flex flex-row justify-center items-center" disabled={loading || !$contactForm.valid}>
                            <p class="caption-text mr-2">Send</p>
                            {#if !loading}
                                <div class="send"><IoMdSend /></div>
                            {:else}
                                <div class="send"><RingLoader size="26" color="red" /></div>
                            {/if}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<style>
    .send {
        width: 26px;
    }
</style>
