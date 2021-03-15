<template>
  <div id="app">
    <div class="metronome">
    <tempo-number/>
    <tempo-text/>
    <div class="tempo-settings">
    <div class="adjust-tempo-btn decrease-tempo">-</div>
    <tempo-settings/>
    <div class="adjust-tempo-btn increase-tempo">+</div>
    </div>
    <div class="start-stop">START</div>
    <div class="measures">
      <div class="subtract-beats stepper">-</div>
      <div class="measure-count">4</div>
      <div class="add-beats stepper">+</div>
   </div>
   <span class="beats-per-measure-text">beats per measure</span>
   </div>
      
  </div>
</template>

<script>
import TempoNumber from './components/TempoNumber.vue'
import TempoSettings from './components/TempoSettings.vue'
import TempoText from './components/TempoText.vue'

export default {
  name: 'App',
  components: {
    TempoNumber,
    TempoSettings,
    TempoText
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
#app {
  font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #525252;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.metronome {

  display: flex;
  flex-direction: column;
  width: 300px;
  height: 450px;
  justify-content: space-between;
}
.tempo-settings {
  display: flex;
  justify-content: space-between;
}

.tempo-settings .adjust-tempo-btn {
  width:30px;
  height: 30px;
  font-size: 40px;
  border-radius: 50%;
  border: 1px solid #ddd;
  text-align: center;
  cursor: pointer;

}
.tempo-settings .adjust-tempo-btn:hover {
  background: red;
  color:white;
}
.tempo-settings .decrease-tempo {
  line-height: 25px;
}
.tempo-settings .increase-tempo {
  line-height: 28px;
}

.start-stop {
  width: 80px;
  height: 80px;
  font-size: 1em;
  text-align: center;
  background: red;
  border-radius: 50%;
  color: white;
  line-height: 80px;
  margin: auto;
  cursor: pointer;

}
.start-stop:hover {
  background: lightcoral;
}
.measures {
  display: flex;
  justify-content: center;
  font-size: 28px;
}
.measures .stepper {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #ddd;
  text-align: center;
  margin: 0 10px;
  cursor: pointer;
}
.measures .stepper:hover {
  background: red;
  color: white;
}
.measures .subtract-beats {
  line-height: 30px;
}
.measures .add-beats {
  line-height: 30px;
}
.measures .measure-count {
  line-height: 30px;
  font-size: 1em;
} 
.beats-per-measure-text{
  margin: 10px;
  text-align: center;
  font-size: 0.7em;
  text-transform: uppercase;
}
</style>
