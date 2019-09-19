<template>
  <div class="index BANXIN">
    <lkw-datalist></lkw-datalist>
  </div>
</template>

<script>
import LkwDatalist from '../index/Datalist'
export default {
  name: 'Index',
  components: {
    LkwDatalist
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
