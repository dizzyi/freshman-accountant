<template>
    <div class="entry">
        <div class="entrydate">
            {{ entry.date }}
        </div>
        <div class='tran' v-for='tran in entry.transections' :key="tran.accountId" v-bind:class="{debit: tran.amount>0}">
        
            <div class='tranTitle'>
                {{ getACtitlebyId( tran.accountId ) }}
            </div>
            <div class="tranAmount" >
                {{ tran.amount > 0 ? tran.amount : -tran.amount }}
            </div>
        </div>

        <div class="entryID">
            {{ entry.id }}
        </div>
        <div class='entryDesc'>
            {{ entry.description }}
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
    }
}
</script>

<style>
.entry{
    width: 90%;
    margin: 1rem auto;
    padding: 0.5rem;

    color: #e9dada;
    background: #474444;

    display: grid;
    grid-template-columns: max(10%,5rem) auto max(5%,4rem);
    justify-items: start;
    gap: 5px;
    grid-auto-flow: row;
}
.entry > div{
    height: 100%;
    width: 100%;
    text-align: start;
    border-bottom: 1px solid black;
}

.tranTitle{
    grid-column: 2/span 2;
}
.tranAmount{
    grid-column: 4/span 2;
}
.entryID{
    grid-column: 3/3;
    grid-row: 1/1;
}
.tran{
    grid-column: 2/2;
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
    grid-column: span 2;
}

.debit .tranTitle{
    grid-column: 2/2;
}
.debit .tranAmount{
    grid-column: 4/4;
}



</style>