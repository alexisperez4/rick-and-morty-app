
<template>

  <h1>Rick And Morty</h1>
  <FilterbyStatus />
  <FilterByName />
  <ListCharacters />

</template>

<script>

import FilterByName from './components/FilterByName.vue';
import FilterbyStatus from './components/FilterbyStatus.vue';
import ListCharacters from './components/listCharacters.vue';

export default {
    name: 'App',
    components: {
    ListCharacters,
    FilterbyStatus,
    FilterByName
}
  }
</script>