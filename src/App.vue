<template>
  <header>
    <div id="logo">Freshman Accountant</div>
    <nav id="sitenav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/app/dashboard" v-bind:class="{activelink: this.$route.path.includes('app') }" >App</router-link>
    </nav>
  </header>
  <router-view></router-view>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,900&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  overflow:hidden;
  text-align: center;
  color: #dbdbdb;
  background: #1b1d23;
  display:flex;
  flex-direction: column;
}

header{
  display: flex;
  height: 8vh;
  min-height: 80px;
  justify-content: space-between;
  align-items: center;
}

#logo{
  background: -webkit-linear-gradient(265deg,#50f136, #09c7bd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
  font-style: italic;
  padding: 2rem;
}

#sitenav {
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  height: 100%;
  padding-right: 2rem;
}

#sitenav a {
  font-style: italic;
  background: #dbdbdb;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 1rem 1rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 100%;

  transition:cubic-bezier(0.075, 0.82, 0.165, 1) 0.1s;
}

#sitenav a.activelink, #sitenav a.router-link-active {
  background: -webkit-linear-gradient(230deg,#50f136, #09c7bd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: solid 5px;
  border-image: linear-gradient(to right, #50f136, #09c7bd);
  border-image-slice: 1;
}

.desc{
  text-align: start;
  color: #8a8a8a;
  padding-left: 2rem;
  font-size: 1.5rem;
  font-style: italic;
}

</style>
