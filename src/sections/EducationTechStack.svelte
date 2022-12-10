<script>
    import Education from '../components/Education.svelte';
    import TechStack from '../components/TechStack.svelte';
</script>

<section class="flex flex-col md:flex-row min-h-screen p-4 sm:p-8 gap-y-8">
    <div class="flex flex-col flex-1 lg:flex-2 justify-between">
        <div class="flex flex-col items-center">
            <h2 class="mb-4">Education</h2>
            <Education />
        </div>
        <div class="hidden md:flex">
            <img src="tree.png" alt="tree" />
        </div>
    </div>
    <div class="flex flex-col flex-1 lg:flex-3 items-center">
        <h2 class="mb-4">Tech Stack</h2>
        <TechStack />
    </div>
</section>

<style>
    img {
        opacity: 0.5;
    }
</style>
