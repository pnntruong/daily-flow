<template>
    <div class="container-fluid mt-5 wrapper" :class="{ 'dark-mode': darkMode }">
        <label for="dark-mode" :class="{ 'to-transparent': isReading }" style="position: relative; top: -4%;">
        Dark Mode: 
        <input type="checkbox" id="darkmode" v-model="darkMode">
        </label>
        <div class="data-input" :class="{ hide : isReading }">
            <div class="text-center">
                <label for="speed-input">
                <span class="me-2" >Speed:</span>
                <input type="number" id="speed-input" v-model="readSpeed">
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
function render(data, target){
  target.innerHTML = data;
}
export default {
    data(){
        return {
            textData: `Các bác nhớ hồi xưa, thích cái gì thì làm cái đấy không? 
Cái hồi mà, thấy quả bóng lăn là phi cả người vào để đá, để chơi ấy? Hồi đấy cũng: "cho vui" thôi đúng không?
Hay cái thời mà nghịch đất, nghịch cát, lem nhem hết lên mặt, bắt bọ bắt dế để xem con dế nó như thế nào hay đem dọa đứa khác. Hồi đấy cũng làm "cho vui" thôi đúng không?
Hay viết những mẩu truyện ngắn, vẽ những bức tranh vớ vẩn, hát những đoạn chả đâu vào đâu. Hồi đấy cũng làm "cho vui" thôi đúng không?
Không ai bắt các bác làm nhưng các bác vẫn làm, để thỏa mãn niềm vui và trí tò mò.  Và một điều kì diệu là, nếu các bác không thích đá bóng, các bác dừng, chuyển sang đá cầu. Hay khi nào chán cầm dế đi dọa rồi thì thôi, chuyển trò khác. 
Một là các bác làm vì thích, hai là thôi nghỉ, tìm trò mới. Đơn giản!
img_0

Và nếu các bác thích tìm dế, hay côn trùng nói chung, các bác sẽ tiếp tục tìm và sưu tập chúng, nghiên cứu chúng và cứ tiếp tục như thế. Chứ không hề có bất kì suy nghĩ kiểu:" Liệu mình làm thế có vô ích không, hay có lẽ mình nên làm một thứ khác mà mọi người đang làm không?"
Các bác làm vì yêu thích nó.
Hàng ngày, chúng ta vẫn nghe thấy đài báo, mạng online, ba xàm về chuyện: Tìm đam mê như thế nào? 101 cách tìm thấy đam mê để thành công. Hay những câu: Hãy theo đuổi đam mê và thành công sẽ đến với bạn và dưới đây là những thứ bạn phải làm. Những người nào chưa tìm được đam mê của mình sẽ đọc nghiến ngẫu những thứ như thế để tìm ra cái thứ "unknown".
Nhưng, thực sự, cuộc sống là những chuỗi hành động liên tiếp khó đoán trước. Việc "không biết" là một phần của cuộc sống và cách để "biết" là phải THỬ. Chứ không đơn giản là, các bác chọn một thứ (các bác không thích), cố sống cố chết để bám trụ xong nhận lại chả được bao.
Hãy nghĩ lại hồi xưa, thích thì làm, không thì thôi chuyển. Các bác chuyển đến khi nào mình thấy thứ phù hợp để chơi rồi mới dừng . Có những đứa tìm thấy thú vui của mình trong những trận banh, có những đứa chìm đắm trong thế giới riêng qua những trang sách. Có đứa tìm thấy luôn, có đứa đổi liên tục rồi mới tìm thấy. Nhưng ít ra, chúng nó THỬ.
img_1

Ai cũng nói:" Tôi cần tìm thấy đam mê" của mình nhưng, well shit, chả ai chịu thử hay có những người tìm ra rồi nhưng vẫn từ chối nó đấy thôi.
Vì sao? Vì đam mê là những thứ bạn thích, là những điều bạn dành thời gian rảnh. Trong lúc bạn rảnh rỗi, bạn PHẢI LÀM một thứ gì đó đúng không? Bất kì thứ gì. Một chủ đề, hành động, ý tưởng, sẽ xuất hiện khi bạn rảnh. Đúng không? 
Đam mê nó nằm ở đấy chứ ở đâu, chỉ là do những định kiến xã hội, sự thiếu tự tin vào bản thân, các bác tránh và trốn nó. Có những người nói với tôi rằng:"  Tôi thích đọc manga, nhưng nó đâu tính là đam mê?. Tôi không kiếm được tiền từ manga."
NHƯNG THỰC SỰ, CÁC BÁC ĐÃ THỬ CHƯA?
Vấn đề không phải việc không biết đam mê của mình là gì. Vấn đề nằm ở việc các bác tận dung thời gian rảnh của mình thế nào, các bác yêu sở thích của mình đến đâu. Vấn đề nằm ở nhận thức. 
Nó chưa bao giờ nằm là việc "Đam mê" là gì? Mà nó nằm ở độ ưu tiên của các bác đối với hoạt động đấy. Các bác có nghiêm túc cân nhắc nó không. Hay mỗi khi các bác chán hay gặp khó khăn là lại là một lần "đổi" đam mê và chuyển hướng?
Khi các bác nghe ai đó nói:" Nếu bạn làm việc mình thích, bạn sẽ không phải làm việc ngày nào trong đời", nghe cũng bùi tai đúng không? Bullshit. Không có công việc nào, thậm chí công việc mình thích, có thể khiến mình miệt mài không mệt cả. Tất cả các công việc đều có lúc đi xuống. Một người yêu thích viết lách, không phải lúc nào chữ cũng tuôn ra được. Một người đam mê chụp ảnh không phải lúc nào cũng cho ra những bức ảnh hoành tráng.
Sẽ có lúc mệt mỏi, và chán chường, dù đấy là công việc mình thích. Đời mà.
Bullshit
Nhiều người bảo: Tôi cần đi tìm đam mê. Tuy nhiên, đam mê đã tìm thấy họ chỉ là họ bỏ qua nó vì nhiều lý do khác nhau. Họ từ chối sự thật là nó đã và đang ở đấy và sợ cảm giác của sự "không an toàn" khi chạy theo đam mê. Họ định nghĩa sai về "sự thành công" và những ảo tưởng xung quanh đấy. 
Hãy nghĩ lại lúc còn nhỏ, nếu chúng ta thích bọ, chúng ta vẫn đi tìm bọ, chứ không phải nhìn những cầu thủ bóng đá rồi nghĩ: Ồ, họ kiếm được nhiều tiền hơn nên mình phải ép bản thân đi đá bóng". Không, không, như thế thật đáng buồn vì làm điều mình không thích chỉ vì tiền. 
Một đứa trẻ không đặt ra câu hỏi: Làm thế  nào để vui? Mà nó sẽ tự chơi và cảm thấy vui.
Nếu các bác mà phải tự hỏi: Làm thế nào để kiếm niềm vui từ đam mê? thì sẽ chẳng bao giờ hạnh phúc được. 
Vậy, đến đây, các bác đã thấy "Đam mê" của mình nằm ở đâu chưa? 
Tôi luôn nghĩ, phải thử thì mới biết được. Không hợp thì bỏ, thử cái khác, thử cho đến khí nào thấy hợp thì thôi. Nếu như không thử, chúng ta sẽ chỉ ngồi đấy và nghĩ: Nếu mình thử thì sẽ ra sao. 
THỬ (rất nhiều thứ) -> THÍCH và thấy HỢP -> DÀNH THỜI GIAN LIÊN TỤC ĐỂ TĂNG SKILL -> SẤP MẶT VÌ TƯỞNG MÌNH THÀNH CÔNG -> TIẾP TỤC DÀNH THỜI GIAN ĐỂ TĂNG SKILL - >(repeat đoạn sấp mặt một vài lần) -> THÀNH CÔNG
Hết!
`,
            darkMode: true,
            readSpeed: 300,
            setTimeoutVars: [],
            isReading: false,

        }
    },
    methods: {
        startReading: function(){
            this.isReading = true;
            let segs = this.textData.split(" ");
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
    font-size: 5rem;
}
#speed-input{
  margin-bottom: 10px;
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
}

.control{
  margin-top: 2rem;
}

button{
  border: none;
  outline: none;
  font-size: 2rem;
  padding: 5px;
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