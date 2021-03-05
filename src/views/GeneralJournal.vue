<template>
  <div id="generalEntry">This is the general Journal Page</div>
  <div v-for="entry in getAllEntries" :key="entry.id">
      <Entry :entry='entry'/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Entry from '../components/Entry.vue';

export default {
    components:{
        Entry,
    },
    computed:{
        ...mapGetters([
            'getAllEntries',
            'getAllAccounts',
            'getACtitlebyId'
        ])
    }
}
</script>

<style>
#generalEntry{
    width: 100%;
}
</style>