<template>
    <div class="container-fluid mt-5 wrapper" :class="{ 'dark-mode': darkMode }">
        <label for="darkmode" :class="{ 'to-transparent': isReading }" style="position: relative; top: -2%; cursor: pointer; transition: .7s;">
        Mode: 
        <i v-if="darkMode" class="fas fa-moon fs-4"></i>
        <i v-else class="fas fa-sun fs-4"></i>
        <input type="checkbox" id="darkmode" v-model="darkMode" style="opacity: 0;">

        </label>
        <div class="data-input" :class="{ hide : isReading }">
            <div class="text-center">
                <label for="speed-input">
                    <span class="me-2" >Speed:</span>
                    <input type="number" id="speed-input" v-model="readSpeed">
                </label>
                <label for="speed-input">
                    <span class="me-2 ms-3" >Language:</span>
                    <select name="input-languages" id="input-language" class="p-1" v-model="inputLanguage">
                      <option value="en">English</option>
                      <option value="ja">日本語</option>
                      <option value="vi">Tiếng Việt</option>
                    </select>
                </label>
            </div>
            <textarea id="dataText" name="Content" cols="30" rows="20" placeholder="Type your content here..." v-model="textData"></textarea>
        </div>
        <div class="main-show" :class="{ hide : !isReading }">
        <div class="current-speed" :class="{ 'to-transparent': isReading }">
            <span class="speed-label">
            Current Speed:
            </span>
            <span id="speed-value" class="text-center">{{ readSpeed }} WPS</span>
        </div> 
        <div id="content">Ready ?</div>
        </div>
        <div class="control" :class="{ 'to-transparent': isReading }">
        <button id="start" :class="{ hide : isReading }" @click="startReading">
            <i class="fs-2 fas fa-play"></i> Start
        </button>
        <button id="stop" :class="{ hide : !isReading }" @click="stopRead">
          <i class="fs-2 far fa-stop-circle"></i> Stop
        </button>
        </div>

    </div>
</template>

<script>
import TinySegmenter from 'tiny-segmenter';

function render(data, target){
  target.innerHTML = data;
}
export default {
    data(){
        return {
            textData: "",
            darkMode: true,
            readSpeed: 300,
            setTimeoutVars: [],
            isReading: false,
            inputLanguage: "en",

        }
    },
    methods: {
        startReading: function(){
            console.log(this.inputLanguage);
            this.isReading = true;
            let segs;
            if(this.inputLanguage === "ja") {
              let segmenter = new TinySegmenter();
              segs = segmenter.segment(this.textData); // 単語の配列が返る
              console.log(this.textData);
            } else {
              segs = this.textData.split(/\r|\n/).join(" ").split(" "); //join paragraph and split words by space.
            }
            console.log(segs);
            segs.forEach((word, i) => {
                if(word != ''){
                    let timeoutID =  setTimeout(
                    function(){ 
                        render(word, document.querySelector("#content"));           
                    },
                    ((60/this.readSpeed*i) * 1000));

                this.setTimeoutVars.push(timeoutID);
                return timeoutID; 
                }
            }); 
        },
        stopRead: function(){
            this.isReading = false;
            this.setTimeoutVars.forEach(x => clearTimeout(x));
        }
    },

}
</script>

<style scoped>
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --background-color: #fff;
  --text-color: #000;
}

.dark-mode{
  --background-color: #000;
  --text-color: #fff;
}


 .wrapper{
  background: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 94vh;
  color: var(--text-color);
}

#content{
    margin-top: 1rem;
    font-size: 10rem;
}
#speed-input{
  margin-bottom: 10px;
  width: 100px;
}
.main-show{
  padding: 5px;
  position: relative;
}
.current-speed{
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);  
  min-width: 200px;
}

textarea{
  font-size: 1rem;
  padding: 5px;
  border: 2px solid var(--text-color);
  border-radius: 4px;
}

.control{
  margin-top: 2rem;
}

button{
  border: none;
  outline: none;
  font-size: 2rem;
  padding: 4px 16px;
  border-radius: 5px;
  margin: 0 1rem;
}

button:hover{
  opacity: .7;
  cursor: pointer;
}

.hide{
  display: none;
}
#dataText {
  width: 70vw;
  height: 70wh;
}
.to-transparent{ 
    opacity: 0.05;
    cursor: pointer;
}
.to-transparent:hover{ 
    /* hover to show */
    opacity: 1;
}
</style>