<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/generalJournal">General Journal</router-link>
    <router-link to="/chartofaccount">Chart of Account</router-link>
  </div>
  <router-view/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin:0;
  box-sizing: border-box;
  text-align: center;
  color: #e9c5c5;
  background: #25252b;
}

#nav {
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  min-height: 50px;
  height: 5vh;
}

#nav a {
  font-weight: bold;
  color: #9fbad6;
  padding: 1rem 1rem;
  text-decoration: none;
  background-color: #363647;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

#nav a.router-link-exact-active {
  background-color: #686891;
}
</style>
