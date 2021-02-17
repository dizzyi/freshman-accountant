<template>
    <div>
    This is the chart of account
    <div v-for="ac in getAllAccounts" :key="ac.id">
        {{ ac.title }} : 
        <span v-if="ac.type=='asset'">DR {{-ac.balance}}</span>
        <span v-else>CR {{ac.balance}}</span>
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed:{
        ...mapGetters([
            'getAllAccounts',
        ])
    }
}
</script>

<style>

</style>