<template>
  <div class="data-binding">
    <!-- Data binding example -->
    <!-- can also be written as v-bind:alt -->
    <img id="mainImg" alt="imageAlt" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: 'DataBinding',
  data: () => {
    return {
      imageAlt: 'Logo'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
