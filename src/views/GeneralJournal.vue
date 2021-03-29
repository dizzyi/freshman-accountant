<template>
  <div id="generaljournal">
    <div class="desc">Entries</div>
    <div v-for="entry in getAllEntries" :key="entry.id">
        <Entry :entry='entry'/>
    </div>
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
#generaljournal{
    width: 100%;
    overflow-y: scroll;
}


</style>