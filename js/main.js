let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let meet=["Hi, What can I do for you today?","Hello Nice to Meet You!!!"];
let intro = ["Hello, I am Mimi", "Hi, I am the great Mimi", "Hello, My name is Mimi"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..'];
let start = ["I think you are ready for the quiz!!! For demo purpose my creator Anshuman have confined me in only Physics topic!!! Please Give your Preference Easy or tough?"];
let easy_ask=["Ok! What is Full form of SHM?","Ok! What is Speed of light?"];
let tough_ask=["Dimension of Energy?","What is grandfather Paradox?","Is there any relation between Time and Gravity?"];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";
    if(message.includes('start'||'I want to take a quiz'||'quiz')){
        let finalresult = start[Math.floor(Math.random() * start.length)];
        speech.text = finalresult;
		
    }
	
	if(message.includes('easy'||'simple')){
        let finalresult = easy_ask[Math.floor(Math.random() * easy_ask.length)];
        speech.text = finalresult;
    }
	
	if(message.includes('tough'||'hard')){
        let finalresult = tough_ask[Math.floor(Math.random() * tough_ask.length)];
        speech.text = finalresult;
    }
	
    if(message.includes('hi'||'hello')){
        let finalresult = meet[Math.floor(Math.random() * meet.length)];
        speech.text = finalresult;
    }
	if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('pizza')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you' || 'talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}


function chatbottext(message){
    speech_text = "This is test message";
    if(message.includes('start'||'I want to take a quiz'||'quiz')){
        let finalresult = start[Math.floor(Math.random() * start.length)];
        speech_text = finalresult;
		
    }
	
	if(message.includes('easy'||'simple')){
        let finalresult = easy_ask[Math.floor(Math.random() * easy_ask.length)];
        speech_text = finalresult;
    }
	
	if(message.includes('tough'||'hard')){
        let finalresult = tough_ask[Math.floor(Math.random() * tough_ask.length)];
        speech_text = finalresult;
    }
	
    if(message.includes('hi'||'hello')){
        let finalresult = meet[Math.floor(Math.random() * meet.length)];
        speech_text = finalresult;
    }
	if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech_text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech_text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech_text = finalresult;
    }
    if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech_text = finalresult;
    }
    if(message.includes('pizza')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech_text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech_text = finalresult;
    }
    if(message.includes('talk to you' || 'talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech_text = finalresult;
    }
    chatareamain.appendChild(showchatbotmsg(speech_text));
}


recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}

mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})

function myFunction(e) {
  let transcript = document.getElementById("msg_text").value;
  chatareamain.appendChild(showusermsg(transcript));
  chatbottext(transcript);
  console.log(transcript);
  document.getElementById("msg_text").value = "newSubmitButtonValue";
}
