<script setup>
import { nextTick, ref } from 'vue';

    let count = 0;
    let counts = ref(0);
    let counter = ref({
        count: 0,
        name: 'Yusril Mahendri'
    });

    function counterIncrement() {
        count++;
        document.getElementById('counter').innerText = 'Counter : ' + count;
    }

    //reactive state
    function counterReactive(){
        counts.value++;
    }

    // dom next tict 
    async function countss(){
       counter.value = {
        ...counter.value,
        count: counter.value.count + 1
       }

       await nextTick();

       counter.value.count++
       await nextTick();
         counter.value.count++
    }
</script>

<template>
    <h1 id="counter">Counter : {{ count }}</h1>
    <h1 id="counts">Counters : {{ counts }}</h1>
    <h1 id="counts">{{ counter.name }} : {{ counter.count }}</h1>
    <button v-on:click="counterIncrement">Increment</button>
    <button v-on:click="counterReactive">Increment reactive</button>
    <button v-on:click="countss">Increments</button>
</template>


<style scoped>

</style>