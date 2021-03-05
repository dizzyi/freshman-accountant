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
    width: 100%;
    margin:auto;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 1rem;
}
#chartOfAccount>div{
    width: 250px;
}

</style>