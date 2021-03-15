<template>
  <div class="bpm-display">   
    <span class="tempo">140</span>
    <span class="bpm">BPM</span>
   </div>
</template>

<script>
export default {
  name: 'TempoNumber',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bpm-display{
  width:100%;
  text-align: center;
  color:red;
  font-weight: bold;
}
.tempo {
  font-size: 8em;
  
}
</style>
