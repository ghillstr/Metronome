<template>
  <div id="app">
    <div class="metronome">
     <div class="bpm-display">   
    <span class="tempo">{{tempo}}</span>
    <span class="bpm">BPM</span>
   </div>
    <div class="tempo-text">{{ setTempoText }}</div>
    <div class="tempo-settings">
    <div class="adjust-tempo-btn decrease-tempo" v-on:click="decrease">-</div>
    <input type="range" min="20" max="280" step="1" v-model="tempo" class="slider">
    <div class="adjust-tempo-btn increase-tempo"  v-on:click="increase">+</div>
    </div>
    <div class="start-stop" v-on:click="startMetronome">{{ startStop }}</div>
    <div class="measures">
      <div class="subtract-beats stepper" v-on:click="decreaseCount">-</div>
      <div class="measure-count">{{measureCount}}</div>
      <div class="add-beats stepper"  v-on:click="increaseCount">+</div>
   </div>
   <span class="beats-per-measure-text">beats per measure</span>
   </div>
      
  </div>
</template>

<script>

//const metronome = new Timer(playClick, 60000 / tempo, {immediate: true}); 

const metronome1 = new Audio('Metronome1.wav')
//const metronome1 = new Audio('./assets/Metronome1.wav')






export default {
  name: 'App',
  
data() {
  return {
    tempo: 140,
    measureCount: 4,
    count : 0,
    isRunning : false,
    startStop : 'START'
  };
},
 computed: {
    setTempoText() {
      if (this.tempo <= 45){
         return  'Grave';
      } 
      else if  (this.tempo > 45 && this.tempo <= 60){
         return  'Lento';
     }
      else if (this.tempo > 60  && this.tempo <= 75){
        return  'Adagio';
      }
      else if (this.tempo > 75  && this.tempo <= 108){
        return  'Andante'}
      else if (this.tempo > 108  && this.tempo <= 120) {
        return  'Moderato';
      }
      else if (this.tempo > 120  && this.tempo <= 156) {
        return 'Allegro';
      }
      else if (this.tempo > 156  && this.tempo <= 176) {
        return 'Vivace';
        }
      else if (this.tempo > 176  && this.tempo <= 200) {
        return 'Presto';
      }
       else if (this.tempo > 200){
        return 'Prestissmo';
       }
        else {
          return 'Allegro';
        }

      }
    },

methods: {
  increase() {
    if(this.tempo >= 280){
      return this.tempo = 280;
    }
      this.tempo += 1;
  },
  decrease() {
    if(this.tempo <= 20){
      return this.tempo = 20;
    }
    this.tempo -= 1;
  },
  increaseCount() {
    this.measureCount += 1;
  },
  decreaseCount() {
    if (this.measureCount <= 1){
    return this.measureCount = 1;
    }
    this.measureCount -= 1;     
  },
  startMetronome(){
    this.count = 0;
    if (!this.isRunning) {
      metronome1.play();
      this.isRunning = true;
      this.startStop = 'STOP';
    } else {
      //metronome.stop();
      this.isRunning = false;
      this.startStop = 'START';
    }
    
  },
  playClick() {
    if (this.count === this.measureCount){
      this.count = 0;
    }
    if (this.count === 0) {
      //Metronome1.play();
     // Metronome1.currentTime = 0;
    } else {
      //MetronomeUp1.play();
      //MetronomeUp1.currentTime = 0;

    }
    this.count ++;
  }

    }
  };
 

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
  user-select: none;
}

.metronome {

  display: flex;
  flex-direction: column;
  width: 300px;
  height: 450px;
  justify-content: space-between;
}
.bpm-display{
  width:100%;
  text-align: center;
  color:red;
  font-weight: bold;
}
.tempo {
  font-size: 8em;
  
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
