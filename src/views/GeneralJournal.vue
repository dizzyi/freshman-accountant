<template>
  <div>This is the general Journal Page</div>
  <div v-for="entry in getAllEntries" :key="entry.id">
      <Entry :entry='entry'/>
  </div>
  <insertEntry></insertEntry>
</template>

<script>
import { mapGetters } from 'vuex';
import insertEntry from '../components/insertEntry.vue';
import Entry from '../components/Entry.vue';

export default {
    components:{
        insertEntry,
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

</style>