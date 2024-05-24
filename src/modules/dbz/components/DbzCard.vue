<template>
    <article class="dbz-card">
        <aside class="dbz-info">
            <div class="dbz-img">
                <img :src="imgCharacter" :alt="character.id">
            </div>
            <h3 class="fs-4 yellow-color">Nombre: {{ character.name }}</h3>
            <p class="fs-2">Ki:{{ character.ki }}</p>
            <p class="fs-2">Max Ki:{{ character.maxKi }}</p>
            <h4 class="fs-3">Raza:{{ character.race }}</h4>
            <p class="fs-3">Género: {{ gender }}</p>
            <p class="">Descripción: {{ character.description }}</p>
            <h5 class="fs-3">Grupo: {{ character.affiliation }}</h5>
            <h5 class="fs-3">Planeta: {{ character?.originPlanet?.name }}</h5>
        </aside>
        <aside
            v-if="hasTransformations" 
            class="dbz-transformations">
            <article
                
                v-for="transformation in character.transformations" 
                :key="transformation.id"
                >
                <img :src="transformation.image" :alt="transformation.name">
                <h3 class="fs-2 yellow-color">{{ transformation.name }}</h3>
                <h4 class="fs-3">Ki {{ transformation.ki }}</h4>
            </article>
        </aside>
    </article>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    props: {
        character: {
            type: Object,
            required: true
        }
    },
    components: {
        Loading: defineAsyncComponent(() => import("@/modules/shared/components/Loading.vue"))
    },
    computed: {
        imgCharacter() {
            return this.character.image;
        },
        gender() {
            return this.character.gender === "Male" ? 'Másculino' : 'Femenino';
        },
        hasTransformations() {
            return this.character?.transformations?.length > 0;
        }
    }
}
</script>

<style scoped>
.dbz-card {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.dbz-info {
    width: 100%;
    height: 100%;
    padding: 0 1rem;
}

.dbz-img {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .3rem;
}

.dbz-img img{
    max-height: 360px;
    min-height: 360px;
    object-fit: contain;
    filter: drop-shadow(3px 3px 4px #cde54e);
    transition: transform .4s linear;
}

.dbz-img img:hover {
    transform: scale(1.1);
}

.dbz-transformations {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /* gap: 1rem; */
}

.dbz-transformations article {
    padding: 1rem;
}

.dbz-transformations article img {
    min-height: 200px;
    max-height: 200px;
    transition: transform .4s linear;
}

.dbz-transformations article img:hover {
    transform: scale(1.1);
}

@media screen and (min-width: 870px){
    .dbz-info {
        width: 50%;
    }

    .dbz-transformations {
        width: 50%;
    }
}
</style>