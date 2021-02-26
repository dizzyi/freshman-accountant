<template>
    <div id='chartOfAccount'>
        <div v-for="ac in getAllAccounts" :key="ac.id">
            <TAccount :account='ac' />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TAccount from "../components/TAccount.vue";
export default {
    components:{
        TAccount
    },
    computed:{
        ...mapGetters([
            'getAllAccounts',
        ])
    }
}
</script>

<style>
#chartOfAccount{
    width: 90%;
    margin:auto;
    display: flex;
    justify-content: start;
    align-content: space-around;
    flex-wrap: wrap;
    gap: 1%
}
#chartOfAccount > div{
    flex-basis: 19.2%
}

</style>