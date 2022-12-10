<script lang="ts">
    import { TechData } from '../../constants/TechDictionary';
    import type { Techs } from '../../constants/Techs';
    export let tech: Techs;
</script>

<div class="flex flex-row items-center chip py-1 px-3 h-min">
    <div>
        <img src={`tech-images/${TechData[tech].image}.png`} alt={TechData[tech].image} />
    </div>
    <p class="">{TechData[tech].name}</p>
</div>

<style>
    .chip {
        border: 1px solid #e3273722;
        border-radius: 16px;
    }
    img {
        height: 20px;
        padding-right: 4px;
    }
    p {
        font-size: 12px;
        letter-spacing: 1.4px;
    }
</style>
