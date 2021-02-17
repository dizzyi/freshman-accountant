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
            <button v-on:click="insertEntry($event)">Insert Entry</button>
        </form>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            date: '2021-02-19',
            creditAccount: "Note Payable",
            debitAccount: 'Cash',
            amount: 2000,
            description: 'normal transaction'
        }
    },
    methods:{
        insertEntry: function(event){
            if(event) event.preventDefault();
            console.log("insert Entry");
        }
    }
}
</script>

<style>

</style>