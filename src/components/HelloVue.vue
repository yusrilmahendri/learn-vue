<script setup>
  console.log('hello learn vue');
  const hello ='<h1>Hello vue</h1>';
  const classHello='hello';
  const id = 'hello';
  const buttonDisabled = true;
  const data = {
    id: 'hello',
    class: "hello",
  }

  //js expression
  function helloFunctions(){
    return 'hellow ro';
  }

  //directive
  
</script>

<template>
  <div>
    <h1 v-bind="data">{{ hello }}</h1>
    <h1 :id="id" v-bind:class="classHello">{{ hello }}</h1>
    <h1 :class="classHello" v-html="hello"></h1>
    <button :disabled="buttonDisabled">Click me</button>
    <h1>{{ helloFunctions() }}</h1>
  </div>
</template>


<style scoped>
.hello {
  color: blue;
}
</style>