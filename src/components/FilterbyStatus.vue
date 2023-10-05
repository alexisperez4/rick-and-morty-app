<template>
    <div class="filter">
        <div class="item" @click="filter('')">
            All
        </div>
        <div class="item" @click="filter('Alive')">
            Alive
        </div>
        <div class="item" @click="filter('Dead')">
            Dead
        </div>
        <div class="item" @click="filter('unknown')">
            Unknown
        </div>
    </div>
</template>


<script>
import { useStore } from 'vuex'


export default {
    setup() {
        const store = useStore();

        const filter = ((status) => {
            store.dispatch('filterByStatus', status)
        })

        return{
            filter
        }
    }
}

</script>

<!-- <style lang="scss">

</style> -->