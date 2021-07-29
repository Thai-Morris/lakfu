<template>
<body>
    

  <img alt="Lakfu" style="height: 100px;" class="animate__animated  animate__fadeIn" src="./assets/icons/target.png">
  <h1 class="animate__animated animate__bounce"> Welcome to Lakfu </h1>
  <router-link  to="/Investorlogin"> <button class="button animate__animated animate__backInLeft" >Investor Login</button> </router-link>
  <br>
  <br> 
  <router-link to="/Entreprenurlogin"><button class="button animate__animated animate__backInRight" style="background-color: yellow; color: black">Entreprenur Login</button></router-link>
  
  <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
    <Component :is="Component"/>
    </transition>
  </router-view>
  
  </body>


  
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>

body{
  background-image: url('./assets/detroit.jpg');
  background-repeat: no-repeat;
  background-position: center; 
}

h1{
  color: whitesmoke;
}

a{
  text-decoration: none;
}

.button {
  color: whitesmoke;
  font-weight: bolder;
  box-shadow: 5px 10px 18px #888888;
  background: orange;
  border-radius: 25px;
  padding: 1%;
  border: none;
  
}

/* debug this in the future */
.button:hover {
  transform: scale(1.1, 1.1) !important;
}

.fade-enter-from, 
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s ease-out;
}


@media screen and (max-width: 600px) {
.button{
  padding: 5%;
}
  
}
/* change font to roboto */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
