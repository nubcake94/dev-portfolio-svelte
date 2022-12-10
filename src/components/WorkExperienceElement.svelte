<script lang="ts">
    export let image: { src: string; alt: string };
    export let name: string;
    export let role: string;
    export let type: string;
    export let interval: string;
</script>

<div class="flex flex-col p-2 md:p-8">
    <div class="flex flex-row items-center">
        <div class="logo mr-3 md:mr-6">
            <img src={image.src} alt={image.alt} />
        </div>
        <div class="flex flex-col mb-4">
            <h5 class="name">{name}</h5>
            <h5 class="role mb-2">{role}</h5>
            <h5 class="caption-text">{type}</h5>
        </div>
    </div>
    <h5 class="caption-text mb-4">{interval}</h5>
    <slot />
</div>

<style>
    img {
        border-radius: 50%;
        width: 80px;
    }

    .name {
        font-size: 22px;
    }
    .role {
        font-size: 20px;
    }

    @media (min-width: 0px) and (max-width: 768px) {
        img {
            width: 65px;
        }
        .name {
            font-size: 19px;
        }
        .role {
            font-size: 16px;
        }
    }
</style>
