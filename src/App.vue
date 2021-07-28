<template>
<body>
     <div>

  <img alt="Lakfu" class="animate__animated  animate__fadeIn" src="./assets/icons/target.png">
  <h1 class="animate__animated animate__bounce"> Welcome to Lakfu </h1>
  <button class="button animate__animated animate__backInRight" style="background-color: yellow; color: black">Entreprenur Login</button>
  <br>
  <br>
  <button class="button animate__animated animate__backInLeft">Investor Login</button>
  </div>
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
  background-attachment: fixed;
  background-position: center; 
}

h1{
  color: whitesmoke;
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
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 33%;
  background: none;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
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
