<template>
    <div id='chartOfAccount'>
        <div class="desc">Accounts</div>
        <div id="accounts">
            <div v-for="ac in getAllAccounts" :key="ac.id">
                <TAccount :account='ac' />
            </div>
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
    overflow-y: scroll;
}
#chartOfAccount #accounts{
    width: 90%;
    display: grid;
    margin: 1rem auto;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
}

</style>