<template>
  <h1 class="animate__animated animate__bounceInDown" style="color: yellow;">
   Entreprenur Login
  </h1>
  <div class="flex-wrap animate__animated animate__backInRight">
    <fieldset>
        <form action novalidate>
            <input type="radio" name="rg" id="sign-in" checked/>
            <input type="radio" name="rg" id="sign-up" />
            <input type="radio" name="rg" id="reset" />        

            <label for="sign-in">Sign in</label>
            <label for="sign-up">Sign up</label>
            <label for="reset">Reset</label>  

            <input class="sign-up sign-in reset" type="email" placeholder="Email" />
            <input class="sign-up sign-in" type="password" placeholder ="Password" />
            <input class="sign-up" type="password" placeholder ="Repeat Password" />
            <button>Submit</button>        
            
        </form>
    </fieldset>
</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Entreprenurlogin',

}
</script>

<style scoped>
input[type="radio"] {
  position: fixed;
  left: -100px;
}

input:not([type="radio"]) {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  display: block;
  transition: 300ms ease;
  border-radius: 7px;
  border: 0;
  max-height: 0;
  margin: 0;
  padding: 0 10px;
  overflow: hidden;
  width: 250px;
  opacity: 0;
  font-size: 16px;
  text-align: center;
  outline: 0;
}

[id="sign-in"]:checked ~ input.sign-in,
[id="sign-up"]:checked ~ input.sign-up,
[id="reset"]:checked ~ input.reset {
  max-height: 40px;
  padding: 10px;
  margin: 10px 0;
  opacity: 1;
}

button {
  width: 250px;
  height: 40px;
  border-radius: 7px;
  background-color: yellow;
  font-size: 0;
  border: none;
}
button:before {
  font-size: 20px;
  text-transform: uppercase;
}

[id="sign-in"]:checked ~ button:before {
  content: 'Sign In';
}

[id="sign-up"]:checked ~ button:before {
  content: 'Sign Up';
}

[id="reset"]:checked ~ button:before {
  content: 'Reset password';
}
h1 {
  color: orange;
  text-transform: uppercase;

}
label {
  position: relative;
  display: inline-block;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  color: orange;
  transition: 300ms ease;
  width: calc(100% / 3 - 4px);
}
label:after {
  content: '';
  border: 10px solid transparent;
  position: absolute;
  bottom: -10px;
  left: calc(50% - 10px);
  transition: inherit;
}

[id="sign-in"]:checked ~ [for="sign-in"],
[id="sign-up"]:checked ~ [for="sign-up"],
[id="reset"]:checked ~ [for="reset"] {
  color: #fff;
}
[id="sign-in"]:checked ~ [for="sign-in"]:after,
[id="sign-up"]:checked ~ [for="sign-up"]:after,
[id="reset"]:checked ~ [for="reset"]:after {
  border-bottom-color: #fff;
}

.flex-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 300px;
  text-align: center;
}

body {
  background-color: #1abc9c;
  font-size: 16px;
  /* background-image:url(investor.jpg) */
}


fieldset{
  border: none;
}



</style>
