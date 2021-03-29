<template>
  <div class='taccount'>
      <router-link to="/app/chartofaccount" class='taccountLink'>
        <div class="taccountchartnum">
            {{ account.chartNum}}
        </div>
        <div class='taccounttitle'>
            {{ account.title }}
        </div>

        <div v-if="account.class == 'asset'" class='CRDR'>
            <div> 
                {{ (-account.balance/100).toFixed(2) }}
            </div>
            <div></div>
        </div>
        <div v-else class='CRDR'>
            <div></div>
            <div>
                {{ (account.balance/100).toFixed(2) }}
            </div>
        </div>
        <div class="desc">
            Account ID: {{account.id}}
        </div>

        
      </router-link>
  </div>
</template>

<script>
export default {
    props:['account'],
}
</script>

<style>
.taccount{
    background-color: #33353B;
    font-weight: bold;
    transition: ease-in-out 0.25s;
    border-radius: 2rem;
}
.taccountLink{
    display:block;
    width:100%;
    height: 100%;
    text-decoration: none;
    color: #e9dada;
    padding: 0.5rem;
}
.taccounttitle{
    width: 100%;
    border-bottom: solid 2px white;
    padding: 0.5rem
}
.CRDR{
    display:flex;
}
.CRDR div{
    width: 50%;
    padding: 0.5rem
}
.CRDR div:first-child{
    border-right: solid 2px white;
}
.taccount:hover{
    scale: 1.1;    
}
.taccount .desc{
    text-align: start;
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
    padding-left: 1rem;
}
</style>