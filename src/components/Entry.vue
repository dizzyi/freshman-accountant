<template>
  <div class="entry">
    <div class="entrydate">
        {{ entry.date }}
    </div>
    <div class='entryCRtitle'>
        {{ getACtitlebyId( entry.creditAccountId) }}
    </div>
    <div class="entryCRamount">
        {{ entry.amount }}
    </div>
    <div class="entryID">
        {{ entry.id }}
    </div>
    <div class='entryDRtitle'>
        {{ getACtitlebyId( entry.debitAccountId ) }}
    </div>
    <div class='entryDRamount'>
        {{ entry.amount }}
    </div>
    <div class='entryDesc'>
        {{ entry.description }}
    </div>  
    <!--  
    <br>
    {{entry.date}} <br>
    CR {{ getACtitlebyId( entry.creditAccountId)}} <br>
    DR {{ getACtitlebyId( entry.debitAccountId )}} <br>
    $ {{entry.amount}} <br>
    {{entry.description}}<br>
    {{entry.id}}
    <br><br>
    -->
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
    grid-template-columns: max(10%,5rem) max(5%,1rem) auto max(5%,1rem) max(10%,5rem) max(5%,4rem);
    justify-items: start;
    gap: 5px;
}
.entry > div{
    height: 100%;
    width: 100%;
    text-align: start;

    border-bottom: 1px solid black;
}

.entryCRtitle, .entryCRamount{
    grid-column:auto/span 2
}

.entryDRtitle{
    grid-column: 3/auto;
}
.entryDRamount{
    grid-column: 5/auto;
}
.entryDesc{
    grid-row: 3;
    grid-column: 2/span 2;
}

</style>