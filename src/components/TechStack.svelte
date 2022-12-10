<script>
    import { Techs } from '../constants/Techs';

    import TechCard from './techs/TechCard.svelte';
</script>

<div class="grid gap-4 grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
    <TechCard tech={Techs.HTML} />
    <TechCard tech={Techs.JAVASCRIPT} />
    <TechCard tech={Techs.TYPESCRIPT} />
    <TechCard tech={Techs.REACT} />
    <TechCard tech={Techs.NEXTJS} />
    <TechCard tech={Techs.GATSBY} />
    <TechCard tech={Techs.SVELTE} />
    <TechCard tech={Techs.FLUTTER} />
    <TechCard tech={Techs.DART} />
    <TechCard tech={Techs.EXPO} />
    <TechCard tech={Techs.REACTNATIVE} />
    <TechCard tech={Techs.NESTJS} />
    <TechCard tech={Techs.NODEJS} />
    <TechCard tech={Techs.MONGODB} />
    <TechCard tech={Techs.POSTGRES} />
    <TechCard tech={Techs.FIREBASE} />
    <TechCard tech={Techs.MUI} />
    <TechCard tech={Techs.TAILWIND} />
    <TechCard tech={Techs.REDUX} />
    <TechCard tech={Techs.RA} />
    <TechCard tech={Techs.GETX} />
    <TechCard tech={Techs.GRAFANA} />
    <TechCard tech={Techs.NOTION} />
    <TechCard tech={Techs.GIT} />
    <TechCard tech={Techs.NX} />
</div>
