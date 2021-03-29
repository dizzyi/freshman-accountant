<template>
  <nav id="aappnav">
            <router-link to="/app/dashboard">Dash Board</router-link>

            <router-link to="/app/generaljournal">General Journal</router-link>

            <router-link to="/app/chartofaccount">Chart of Account</router-link>
        </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
#aappnav{
  background: #33353B;
  height: 5vh;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap:1rem;
  padding-left: 2rem;
  font-size: 1.5rem;
  filter: drop-shadow(5px 5px 5px black);
}

#aappnav a{
  text-decoration: none;
  color: #dbdbdb;
  font-style: italic;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1rem 1rem;
  border-radius: 1rem;
}

#aappnav a.router-link-active{
  color: #1b1d23;
  background: -webkit-linear-gradient(45deg,#50f136, #09c7bd);
}

</style>