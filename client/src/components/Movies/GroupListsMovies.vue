<template>
    <section class="movies-group">
        <ul class="movies-group__list">
            <li class="movies-group__block" v-for="nameGenre of nameMovies">
                <h2 @click="$emit('searchFilterName', nameGenre)" class="movies-group__title">{{ nameGenre }}</h2>
                <MoviesList :movies="moviesGroup[nameGenre]" @look="look" class="movies-group__list" />
            </li>
        </ul>
    </section>
</template>

<script>

import MoviesList from '@/components/Movies/MoviesList.vue';
export default {
    props: {
        moviesGroup: Object
    },
    components: {MoviesList},
    computed: {
        nameMovies: {
            get() {
                return Object.keys(this.moviesGroup)
            }
        }
    },
    methods: {
        look(movie) {
            this.$emit('look', movie)
        },
        searchFilterName() {

        }
    },
    
}
</script>

<style lang="scss" scoped>
    .movies-group {
        overflow: hidden;
// .movies-group__block

&__block {
}

// .movies-group__title

&__title {
    text-transform: capitalize;
    margin-bottom: 8px;
    font-size: 20px;
    cursor: pointer;
    display: inline-block;
    border-bottom: 1px solid #121416;
    padding: 3px 2px;
    border-radius: 3px;
    transition: all ease .5s;


    &:hover{
        border-color: #FFFF;
    }
}

// .movies-group__list

&__list {
    margin-bottom: 10px;
}
}

</style>