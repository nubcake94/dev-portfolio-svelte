<script lang="ts">
    import { TechData } from '../../constants/TechDictionary';
    import type { Techs } from '../../constants/Techs';
    export let tech: Techs;
</script>

<div class="flex flex-col w-full items-center">
    <div>
        <img src={`tech-images/${TechData[tech].image}.png`} alt={TechData[tech].image} />
    </div>
    <p class="text-center">{TechData[tech].name}</p>
</div>

<style>
    img {
        height: 75px;
        padding-bottom: 4px;
    }

    p {
        box-shadow: 2px 2px 200px #e32737;
    }
</style>
