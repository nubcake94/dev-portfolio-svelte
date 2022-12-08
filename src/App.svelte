<script lang="ts">
    import BlowingLeaves from './components/visuals/BlowingLeaves.svelte';
    import AboutMe from './sections/AboutMe.svelte';
    import Intro from './sections/Intro.svelte';
    import TailwindCss from './TailwindCSS.svelte';
</script>

<svelte:head>
    <title>Patrik Szabo's Portfolio</title>
</svelte:head>
<main>
    <TailwindCss />
    <BlowingLeaves />
    <Intro />
    <AboutMe />
</main>

<style>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.svelte:hover {
        filter: drop-shadow(0 0 2em #ff3e00aa);
    }
    .read-the-docs {
        color: #888;
    }
</style>
