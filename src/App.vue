
<template>

  <h1 class="text-white">Rick And Morty</h1>
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