<template>
  <div>
      <br>
      {{entry.date}} <br>
      CR {{ getACtitlebyId( entry.creditAccountId)}} <br>
      DR {{ getACtitlebyId( entry.debitAccountId )}} <br>
      $ {{entry.amount}} <br>
      {{entry.description}}<br>
      {{entry.id}}
      <br><br>
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

</style>