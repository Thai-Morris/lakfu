<template>
  <body>
     <div>

  <img alt="Lakfu" src="./assets/icons/target.png">
  <h1> Welcome to Lakfu </h1>
  <button class="button">I'm an entrepreneur</button>
  <br>
  <br>
  <button class="button">I'm an investor</button>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
