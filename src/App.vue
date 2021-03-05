<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/generalJournal">General Journal</router-link>
    <router-link to="/chartofaccount">Chart of Account</router-link>
  </div>
  <div id="main">
    <div id='insert'>
      <insert-panel/>
    </div>
    <div id='view'>
      <router-view/>
    </div>
  </div>
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
  text-align: center;
  color: #e9c5c5;
  background: #25252b;
  display:flex;
  flex-direction: column;
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

#main{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
}

#insert{
  margin: 2rem;
  margin-left: 0;
  flex-basis: 1;
  flex-grow: 0;
  width: max(20vw,30rem);
  background: #9fbad6;
  color: black;
  border-radius: 0 20px 0 0;
  height: 100%;
}

#view{
  overflow-y: scroll;
  margin-top: 2rem;
  padding: 1rem;
  height: 100%;
  flex-basis: 3;
  flex-grow: 1;
}
</style>
