import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

const metronome1 = new Audio(metronome1.wav)
const metronomeUp1 = new Audio(metronomeUp1.wav)

metronomeUp1.play()
