<template>
  <div>This is the general Journal Page</div>
  <div v-for="entry in getAllEntries" :key="entry.id">
      <br>
      {{entry.date}} <br>
      CR {{ getAccountbyId( entry.creditAccountId)}} <br>
      DR {{ getAccountbyId( entry.debitAccountId )}} <br>
      $ {{entry.amount}} <br>
      {{entry.description}}
      <br><br>
  </div>
  <insertEntry></insertEntry>
</template>

<script>
import { mapGetters } from 'vuex';
import insertEntry from '../components/insertEntry.vue';

export default {
    components:{
        insertEntry
    },
    computed:{
        ...mapGetters([
            'getAllEntries',
            'getAllAccounts',
            'getAccountbyId'
        ])
    }
}
</script>

<style>

</style>