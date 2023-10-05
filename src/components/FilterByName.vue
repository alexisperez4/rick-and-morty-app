<template>
    <div class="search">
        <input 
            type="text"
            placeholder="Search by name"
            v-model="name"
            @keyup="filter()"
        >
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
export default {
    setup() {
        const store = useStore()
        const name = ref('')

        const filter = () => {
            store.dispatch('filterByName', name.value)
        }

        return {
            name,
            filter
        }
    }
}
</script>

