<script setup>
    let count = 0;

    function counterIncrement() {
        count++;
        document.getElementById('counter').innerText = 'Counter : ' + count;
    }
</script>

<template>
    <h1 id="counter">Counter : {{ count }}</h1>
    <button v-on:click="counterIncrement">Increment</button>
</template>


<style scoped>

</style>