<template>
    <div class="insertForm">
        <form action="">
            <legend>date</legend>
            <input type="text" name="date" id="date" v-model="date">
            <br>
            <legend>Credit Account</legend>
            <input type="text" name="creditAccount" id='creditAccount' v-model="creditAccount">
            <br>
            <legend>Debit Account</legend>
            <input type="text" name="debitAccount" id='debitAccount' v-model="debitAccount">
            <br>
            <legend>Amount</legend>
            <input type="number" name="amount" id="amount" v-model="amount">
            <br>
            <legend>Description</legend>
            <input type="text" name="description" id='description' v-model="description">
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
            creditAccount: "Note Payable",
            debitAccount: 'Cash',
            amount: 2000,
            description: 'normal transaction',
            id: 0,
        }
    },
    computed:{
        ...mapGetters([
            'getIdbyACtitle',
            'getEntrybyId'
        ]),
        _creditAccountId : function() {return this.getIdbyACtitle(this.creditAccount)},
        _debitAccountId  : function() {return this.getIdbyACtitle(this.debitAccount)},
        _idUnique : function(){return this.getEntrybyId( this.id )},
        valid: function(){
            if( this._debitAccountId == undefined) return false;
            if( this._creditAccountId == undefined ) return false;
            return true;    
        }
    },
    methods:{
        ...mapMutations([
            'insertEntry'
        ]),
        inserttoStore: function(){
            console.log(this._creditAccountId);
            do {
                this.id = (this.id + Date.now() )% 1000000
                console.log(this.id);
                console.log( this._idUnique );
            } while ( this._idUnique );
            this.insertEntry({
                id: this.id,
                amount: this.amount,
                description: this.description,
                date: this.date,
                creditAccountId: this._creditAccountId,
                debitAccountId: this._debitAccountId,
            });
        }

    }
}
</script>

<style>

</style>