<script setup>
import { reactive } from "vue";

    const person = reactive({
        firstName: '',
        lastName: ''
    });

    function sayHello(){
        person.firstName = document.getElementById('first-name').value;
        person.lastName = document.getElementById('last-name').value;
    }
</script>

<template>
    <div>
        <input type="text" id="first-name" placeholder="First Name" />
        <input type="text" id="last-name" placeholder="Last Name" />
        <button v-on:click="sayHello">Say Hello</button>
    </div>
    <p>Hello, {{ person.firstName }} {{ person.lastName }}!</p>
</template>



<style scoped>

</style>
