<script setup lang="ts">

const props = defineProps<{
    filter: string 
    selected: string
    useFilterStyle: string
}>()

const emit = defineEmits<{
    (e: 'selected', value: string): void
}>()

const isLists = () => {
    if(props.useFilterStyle == 'categories') return 'categories'
}

const selectedCard = () => {
    if(props.selected == props.filter) return 'active'
}

</script>

<template >
    <li class="listFilters__item" 
        @click="$emit('selected', filter)" 
        :class="[isLists(), selectedCard()]"
        >
            <p class="listFilters__text">{{ filter.toLocaleUpperCase() }}</p>
    </li>
</template>

<style lang="scss">
    .categories {
        display: flex;

        .listFilters__item{
            cursor: pointer;
            padding: 10px;
            background-color: #333333;
            border: 2px solid #333333;
            margin: 5px 5px 5px 0px;
            border-radius: 8px;

            transition: all ease .2s;

        &.active{
            background-color: #394C60;
            border-color: #394C60;
            color: aliceblue;
        }

        &:hover{
            background-color: #394C60;
            border-color: #394C60;
            color:aliceblue;
            transform: scale(1.03);

            p{
                transition: all ease-in .3s;
                transform: scale(1.05);
            }
        }
        @media (max-width: 500px) {
            font-size: 13px;
        }
    }
    }

    .category{
        
        .listFilters__item{
            width: 100%;
            max-width: 550px;
            margin: 0 auto;
            
        }

        .listFilters__text{
            border: 2px solid #9f9fa1;
            padding: 10px;
            margin: 3px;
            border-radius: 5px;
            cursor: pointer;

            transition: all ease-in .3s;

            &:hover{
                background-color: #394C60;
                color: aliceblue;
            }
        }
    }
</style>