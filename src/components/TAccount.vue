<template>
  <div class='taccount'>
      <router-link to="/chartofaccount" class='taccountLink'>
        <div class='taccounttitle'>
            {{ account.title }}
        </div>

        <div v-if="account.type == 'asset'" class='CRDR'>
            <div> 
                {{ -account.balance }}
            </div>
            <div></div>
        </div>
        <div v-else class='CRDR'>
            <div></div>
            <div>
                {{ account.balance }}
            </div>
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
    background-color: #474444;

    transition: ease-in-out 0.25s;
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
    border-bottom: solid 0.1rem black;
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
    border-right: solid 0.1rem black;
}
.taccount:hover{
    scale: 1.1;
    
}
</style>