<template>
<div class="container-fluid d-flex align-items-center justify-content-center">
    <div id="app">
      <h1 class="text-white">{{title}}</h1>
      <div class="timer">
        <span class="minute">{{ minutes }}</span>
        <span>:</span>
        <span class="seconds">{{ seconds }}</span>
      </div>
      <div class="controls">
        <div class="btn start" v-if="!timer" @click="startTimer">
          <i class="fs-2 fas fa-play"></i>
        </div>
        <div class="btn pause"  v-if="timer" @click="stopTimer">
          <i class="fs-2 far fa-stop-circle"></i>
        </div>
        <div class="btn stop" v-if="resetButton" @click="resetTimer">
          <i class="fs-2 fas fa-redo-alt"></i>
        </div>
        <div class="btn edit" v-if="!timer" @click="editTimer">
          <i class="fs-2 fas fa-pencil-alt"></i>
        </div>
      </div>
      <div class="input">
        <input  type="text"
                v-if="edit"
                placeholder="Session ( minutes )"
                @keydown.enter="resetTimer"
                v-model="userTime" >
      </div>
    </div>
</div>
 
</template>

<script>

export default {
    data() {
      return {
        timer: null,
        totalTime: (25 * 60),
        resetButton: false,
        title: "休憩まであと",
        edit: false,
        userTime: null,
      } 
  },
  methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000); //1000ms = 1 second
      this.resetButton = true;
      this.edit = false;
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
    },
    resetTimer: function() {
      this.totalTime = (this.userTime * 60);
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
    },
    editTimer: function() {
      this.edit = !this.edit;
    },
    padTime: function(time){
      return (time < 10 ? '0' : '') + time;
    },
    countdown: function() {
      this.totalTime--;
    }
  },
  computed: {
    minutes: function(){
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime((minutes > 0) ? minutes : 0);
    },
    seconds: function() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime((seconds > 0) ? seconds : 0);
    }
  }
}

</script>

<style lang="scss" scoped>
$primary-color: #FD7014;
$secondary-color: #393E46;
$background-color: #222831;
$text-color: #EEEEEE;
.container-fluid{
  background-color: $background-color;
  height: 100vh;

  #app {
    display: flex; 
    flex-direction: column;
    align-items: center;
    & > * {
      margin-bottom: 2rem;
    }
  }
  .timer {
    font-size: 9rem;
    color: $text-color;
  }
  .controls {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    > * {
      color: $primary-color;
      transition: 0.1s ease;
      &:hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }
  }
  .input {
    input {
      background-color: $secondary-color;
      border: none;
      padding: 1em;
      text-align: center;
      color: $text-color;
    }
  }
}
</style>