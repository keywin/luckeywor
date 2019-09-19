<template>
  <div class="index BANXIN">
    <lkw-getters></lkw-getters>
  </div>
</template>

<script>
import LkwGetters from './Getters'
export default {
  name: 'Index',
  components: {
    LkwGetters
  },
  data () {
    return {
      msg: 'index',
      datalist: []
    }
  },
  computed: {
    
  },
  created () {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
