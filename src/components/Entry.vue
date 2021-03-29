<template>
    <div class="entry">
        <div class="entrylegend">
            Date
        </div>
        <div class="entrylegend">
            Account
        </div>
        <div class="entrylegend">
            Credit
        </div>
        <div class="entrylegend">
            Debit
        </div>

        <div class="breakline"></div>
        <div class="entrydate">
            {{ entry.date }}
        </div>
        <div class='tran' v-for='tran in entry.transections' :key="tran.accountId" v-bind:class="{debit: tran.amount>0}">
        
            <div class='tranTitle'>
                {{ getACtitlebyId( tran.accountId ) }}
            </div>
            <div class="tranAmount" >
                {{ tran.amount > 0 ? (tran.amount/100).toFixed(2) : (-tran.amount/100).toFixed(2) }}
            </div>
        </div>
        <div class="breakline"></div>
        <div class="entrylegend">
            Description
        </div>
        
        <div class='entryDesc'>
            {{ entry.description }}
        </div>
        
        <div class="entryID entrylegend">
            Entry ID:{{ entry.id }}
        </div>  
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

//// Component of an Entry
//// prop: Entry : {date CRID DRID amount description id}

export default {
    props:['entry'],
    computed:{
        ...mapGetters(['getACtitlebyId']),
    },
}
</script>

<style  scoped>

.entry{
    width: 90%;
    margin: 1rem auto;
    padding: 1rem;
    border-radius: 2rem;
    color: #e9dada;
    background: #33353B;
    font-weight: bold;
    display: grid;
    grid-template-columns: max(10%,6rem) auto max(5%,4rem) max(5%,4rem);
    justify-items: start;
    align-items: center;
    gap: 5px;
    grid-auto-flow: row;

    filter: drop-shadow(5px 5px 5px black);
}

.entrylegend{
    font-size: 0.8rem;
    color:#8a8a8a;

}

.entry > div{
    height: 100%;
    width: 100%;
    text-align: start;
}

.entry > .entryID{
    grid-column: 1/1;
}

.entry > .breakline{
    grid-column: 1/5;
    height: 2px;
    background: white;
}

.tranTitle{
    grid-column: 2/span 2;
}
.tranAmount{
    grid-column: 4/span 2;
    text-align: end;
}
.tran{
    grid-column: 2/5;
    display:grid;
    grid-template-columns: 4rem auto 4rem 5rem;
}
.entryDesc{
    grid-column: 2/2;
}

.tranTitle{
    grid-column: span 2;
}
.tranAmount{
    grid-column: 3/3;
}

.debit .tranTitle{
    grid-column: 2/2;
}
.debit .tranAmount{
    grid-column: 4/4;
}




</style>