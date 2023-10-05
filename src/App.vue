
<template>

  <h1>Rick And Morty</h1>
  <ListCharacters />

</template>

<script>

import ListCharacters from './components/listCharacters.vue';

export default {
    name: 'App',
    components: {
       ListCharacters
    }
  }
</script>