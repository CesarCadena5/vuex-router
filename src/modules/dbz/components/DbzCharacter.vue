<template>
    <div class="dbz-character">
        <div class="character-img">
            <img :src="imgCharacter" alt="character.id">
        </div>
        <div class="character-info">
            <h2 class="fs-4">{{ character.name }}</h2>
            <p class="yellow-color fs-3">{{ character.race }} - {{character.gender}}</p>
            <h4 class="fs-4">Ki</h4>
            <span class="yellow-color fs-3">{{ character.ki }}</span>

            <h4 class="fs-4">Total Ki</h4>
            <span class="yellow-color fs-3">{{ character.maxKi }}</span>

            <h4 class="fs-4">Grupo</h4>
            <span class="yellow-color fs-3">{{ character.affiliation }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        character: {
            type: Object,
            required: true
        }
    },
    computed: {
        imgCharacter() {
            return this.character.image; 
        }
    }
}
</script>

<style scoped>
.dbz-character {
    width: 280px;
    /* min-height: 565px;
    max-height: 565px; */
    display: flex;
    flex-direction: column;
    background-color: #606d80;
    border-radius: 0.75rem;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.character-img {
    width: 100%;
    position: relative;
    background-image: url("@/assets/fondo-card.webp");
    background-position: center center;
    background-size: cover;
    background-color: white;
    min-height: 280px;
    max-height: 280px;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
}

.character-img img {
    position: absolute;
    top: -20px;
    width: 100%;
    height: 100%;
    min-height: 320px;
    max-height: 320px;
    margin: 0px;
    object-position: center center;
    object-fit: contain;
    z-index: 0;
    transition: transform 0.4s linear;
}

.character-img img:hover {
    transform: scale(1.1);
}

.character-info {
    padding-left: 1rem;
    padding-bottom: 1rem;
    margin-top: 1rem;
}

.yellow-color {
    color: #f7f799;
}
</style>