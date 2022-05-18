//Chrome対応
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

const recognition = new SpeechRecognition();
const output = document.querySelector('.output')
recognition.continuous = false; //認識が開始するたびに結果をキャプチャするか(true)、単一の結果だけをキャプチャするか(false)
recognition.lang = "ja-JP";
recognition.interimResults = false;//音声認識システムが中間的な結果を返すか(true)、最終的な結果を返すか(false)
recognition.maxAlternatives = 1; //結果が明確ではないときに候補としてどれだけ加味するかの指標
console.log("Here we go")
recognition.onresult = (event) => {
    console.log('Transcript: ' + event.results[0][0].transcript)
    console.log('Confidence: ' + event.results[0][0].confidence);
    value = event.results[0][0].transcript;
    output.innerHTML = event.results[0][0].transcript
    //条件によって処理を分ける
    switch(value){
        case 'おはよう':
            console.log('おはよう成功')
            output.innerHTML = event.results[0][0].transcript + "成功"
            break;
        case 'こんにちは':
            console.log('こんにちは成功')
            output.innerHTML = event.results[0][0].transcript + "成功"
            break;
        case 'こんばんわ':
            console.log('こんばんわ成功')
            output.innerHTML = event.results[0][0].transcript + "成功"
            break;
    }
    
}
//話すの(1つの単語を聞き取ったら)が終わったら認識を止める
recognition.onspeechend = function() {
    recognition.stop();
}
//認識に成功したけどエラーが出た場合の処理
recognition.onerror = function(event) {
    console.log('Error occurred in recognition: ' + event.error)
}