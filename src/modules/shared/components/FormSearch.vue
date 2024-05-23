<template>
    <form
        class="form" 
        @submit.prevent="submitForm">
        <input 
            class="form-input"
            type="text" 
            v-model="search"
            :placeholder="placeholder"
        >
        <button class="form-btn" type="submit">{{nameButton}}</button>
    </form>
</template>

<script>
export default {
    props: {
        nameButton: {
            type: String,
            default: 'Buscar'
        },
        placeholder: {
            type: String,
            default: 'Pikachu, Charmander...'
        }
    },
    data() {
        return {
            search: ''
        }
    },
    methods: {
        submitForm() {
            this.$emit('nameSearch', this.search);
            this.search = '';
        }
    }
}
</script>

<style scoped>
.form {
    display: flex;
    gap: 1rem;
    padding: 1rem;
}

.form input {
    height: 1.6rem;
    outline: none;
    border: 1px solid steelblue;
    border-radius: .3rem;
    background-color: gainsboro;
    font-weight: 600;
    padding: .3rem;
}

.form button {
    padding: 0 1rem;
    border-radius: .3rem;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color .4s linear;
    background-color: slateblue;
    color: white;
}

.form button:hover {
    background-color: #10898b;
}
</style>