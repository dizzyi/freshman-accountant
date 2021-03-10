<template>
    <div class="insertForm">
        <form action="">
            <legend>date</legend>
            <input type="text" name="date" id="date" v-model="date">
            <br>
            <div>Transections</div>
            <div id="entries">
                <div>Account</div>
                <div>Amount</div>
                <div v-for="tran in trans" :key='tran.account'>
                    
                    <input type="text" name="" id="" v-model="tran.account">
                    <input type="number" name="" id="" v-model="tran.amount">

                </div>
            </div>
            <br>
            <legend>Description</legend>
            <input type="text" name="description" id='description' v-model="description">
            <br>
            <div v-for="newac in newAccount" :key="newac.account">
                {{ newac.account }}
            </div>
            <br>
            <button v-on:click.prevent="inserttoStore" :disabled="!valid">Insert Entry</button>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    data: function(){
        return{
            date: '2021-02-19',
            trans:[
                {
                    account: 'Cash', amount: -1000
                },
                {
                    account : 'Note payable', amount: 1000
                }
            ],
            description: 'normal transaction',
            id: 0,
        }
    },
    computed:{
        ...mapGetters([
            'getIdbyACtitle',
            'getEntrybyId'
        ]),
        _idUnique : function(){return this.getEntrybyId( this.id )},

        newAccount: function(){
            return this.trans.filter((ele)=>{
                this.getIdbyACtitle(ele.account) === -1;
            })
        },

        valid: function(){
            return true;    
        }
    },
    methods:{
        ...mapMutations([
            'insertEntry'
        ]),
        inserttoStore: function(){
            console.log(this._creditAccountId);

            // generating the unique id for each entry
            do {
                this.id = (this.id + Date.now() )% 1000000
                console.log(this.id);
                console.log( this._idUnique );
            } while ( this._idUnique );

            // insert the entry onto the general journal
            this.insertEntry({
                id: this.id,
                transections: this.trans.map((ele)=>{
                    return {
                        accountId:this.getIdbyACtitle(ele.account),
                        amount: ele.amount
                    }
                }),
                description: this.description,
                date: this.date,
            });
        }

    }
}
</script>

<style>

</style>