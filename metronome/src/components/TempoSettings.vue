<template>
  <input type="range" min="20" max="280" step="1" class="slider">
</template>

<script>
export default {

}
</script>

<style>

input[type=range]{
    -webkit-appearance: none;
    background-color: transparent;
    width: 70%;
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
}
input[type=range]:focus{
    outline: none;
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: red;
    cursor: pointer;
    margin-top: -9px;
    
}

input[type=range]::-moz-range-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: red;
    cursor: pointer;
    border: none;
}

input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    background: #ddd;
}

</style>