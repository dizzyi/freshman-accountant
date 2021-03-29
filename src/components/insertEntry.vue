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
                <div v-for="(tran,index) in trans" :key='index'>
                    
                    <input type="text" name="" id="" v-model="tran.title">
                    <input type="number" name="" id="" v-model="tran.amount">
                    <button v-on:click.prevent="trans.splice(index,1)">X</button>
                    <!--<span>{{ this.getIdbyACtitle(tran.title) }}</span> -->
                </div>
                <button v-on:click.prevent="trans.push({title:'',amount:0})" >More transections</button>
            </div>
            <br>
            <legend>Description</legend>
            <input type="text" name="description" id='description' v-model="description">
            <br>
            <br>
            <div v-for="(ac,index) in newAC" :key="index" >
                Create new account: <br>
                title: {{ac.title}} <br>
                type: <input type="text" v-model="ac.type"><br>
                class: <select name="" id="" v-model="ac.class">
                    <option value="">asset</option>
                    <option value="">liability</option>
                    <option value="">equity</option>
                </select>
                
            </div>
            <br>
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
                    title: 'Cash in Fiat', amount: -1000
                },
                {
                    title : 'Wolfgang Bank Loan', amount: 1000
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

        newAC: function(){
            return this.trans.filter((t)=>{
                return this.getIdbyACtitle(t.title) == -1
            })
        },

        valid: function(){
            for(let i = 0 ; i <  this.trans.length ; i++){
                if (this.getIdbyACtitle(this.trans[i].title) == -1) return false;
            }
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
            console.log(this);

            // insert the entry onto the general journal
            this.insertEntry({
                id: this.id,
                transections: this.trans.map((ele)=>{
                    return {
                        accountId:this.getIdbyACtitle(ele.account),
                        amount: ele.amount*100,
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