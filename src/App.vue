<template>
  <div>
    <router-view></router-view>
    <cost-modal />
  </div>
</template>
<script>
import CostModal from './components/modals/CostModal.vue'
export default {
  components: { CostModal },
  
}
</script>

<style lang="scss">
*,
*:after,
*:before,
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
