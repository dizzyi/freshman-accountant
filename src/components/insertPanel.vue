<template>
  <div id="insertpanel">
      <div id="insertnac">
          <div> Classic Entry</div>
          <div> Other up comming</div>
          <div>doesnt work now</div>
      </div>
      <insert-entry/>
  </div>
</template>

<script>
import insertEntry from './insertEntry.vue';

export default {
    components:{
        insertEntry,
    },

}
</script>

<style>

</style>