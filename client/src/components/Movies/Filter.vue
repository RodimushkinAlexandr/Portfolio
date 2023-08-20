<script setup lang="ts">


//     props: {
//         filter: Object
//     },
//     methods: {
//         ...mapMutations(['setYear', 'setGenre', 'setShowSearchName', 'setShowFilterMovies', 'setShowMoviesGroupList']),
//         ...mapActions(['serchFilterMovies']),
//         showFilter() {
//             this.setShowFilterMovies(true)
//             this.setShowSearchName(false)
//         },
//     },
//     computed: {
//         ...mapGetters(['getYear', 'getGenre', 'getShowFilterMovies']),
//         year: {
//             get() {
//                 return this.getYear
//             },
//             set(value) {
//                 this.setYear(value)
//             }
//         },
//         genre: {
//             get() {
//                 return this.getGenre
//             },
//             set(value) {
//                 this.setGenre(value)
//             }
//         }
//     },
//     watch: {
//         year() {
//             this.setShowMoviesGroupList(false)
//             this.serchFilterMovies()
//         },
//         genre() {
//             this.setShowMoviesGroupList(false)
//             this.serchFilterMovies()
//         }
//     }
// }
</script>

<template>
    
</template>

<style lang="scss" scoped>

.search__filter{
        display: flex;
        position: relative;

        .moviesFilter{
            position: absolute;
            z-index: -1;
            left: 0px;
            opacity: 0;
            transition: all ease .5s;
            display: flex;
            
            &:not(:last-child) {
                margin-right: 10px;
            }

            &.active{
                left: 147px;
                opacity: 1;
                z-index: 2;
            }
        }
    }

@media (max-width:768px) {
    .search__filter{
        
        .moviesFilter{            
            left: -100px;
            top: 60px;

            &:not(:last-child) {
                margin-right: 10px;
            }

            &.active{
                left: 0px;
            }
        }
    }
}


</style>