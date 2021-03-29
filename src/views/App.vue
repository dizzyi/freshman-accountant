<template>
    <Appnav/>
    <div id="main">
        <Panel/>
        <router-view></router-view>
    </div>
    
</template>

<script>
import Appnav from '../components/AppNav.vue';
import Panel from '../components/panel.vue'

export default {
    components:{
        Appnav,Panel
    }
}
</script>

<style>
#main{
    display: flex;
    padding-top: 2rem;
    align-items: flex-start;
    width: 100%;
    height: 100%;
}
</style>