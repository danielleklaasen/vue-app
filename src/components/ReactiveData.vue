<template>
  <div class="hello">
    <!-- Reactive Data -->
    {{ reactive }}
  </div>
</template>

<script>
export default {
  name: 'ReactiveData',
  data: () => {
    return {
      reactive: 'Reactive data example. This text will respond to change.'
    }
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
