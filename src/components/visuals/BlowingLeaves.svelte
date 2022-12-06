<script>
    import Leaf from "./Leaf.svelte";
</script>


<div class="fixed w-full h-full background-red">
    <Leaf width=40 height=40 y0=10vh x0=0vw variant=blowing1 speed=500s/>
    <Leaf width=40 height=40 y0=100vh x0=0vw variant=blowing1 speed=20s/>
    <Leaf width=40 height=20 y0=90vh x0=10vw variant=blowing1 speed=26s delay=6s/>
    <Leaf width=20 height=40 y0=95vh x0=50vw variant=blowing1 speed=32s/>
    <Leaf width=10 height=8 y0=96vh x0=1vw variant=blowing1 speed=23s/>
    <Leaf width=10 height=8 y0=93vh x0=0vw variant=blowing1 speed=23s />
    <Leaf width=13 height=10 y0=60vh x0=10vw variant=blowing1 speed=28s />
    <Leaf width=15 height=12 y0=62vh x0=9.6vw variant=blowing1 speed=28.5s />
    <Leaf width=20 height=15 y0=59vh x0=11vw variant=blowing1 speed=29s delay=1s />
    <Leaf width=30 height=20 y0=30vh x0=30vw variant=blowing1 speed=19s />
    <Leaf width=40 height=30 y0=29vh x0=30vw variant=blowing1 speed=20s delay=2s />
    <Leaf width=30 height=20 y0=30vh x0=60vw variant=blowing1 speed=19s />
    <Leaf width=25 height=19 y0=29vh x0=61vw variant=blowing1 speed=19s delay=2s/>
    <Leaf width=35 height=15 y0=29.5vh x0=62vw variant=blowing1 speed=19s />
    <Leaf width=32 height=30 y0=32vh x0=63vw variant=blowing1 speed=20s delay=2s/>
    <Leaf width=35 height=15 y0=95vh x0=50vw variant=blowing1 speed=20s />
    <Leaf width=30 height=20 y0=95vh x0=55vw variant=blowing1 speed=30s delay=5s />
    <Leaf width=35 height=15 y0=95vh x0=50vw variant=blowing1 speed=25s />
    <Leaf width=35 height=15 y0=95vh x0=80vw variant=blowing1 speed=25s delay=1s/>
</div>

<style>
    div {
        overflow: hidden
    }
</style>