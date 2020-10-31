let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let meet=["Hi, What can I do for you today?","Hello Nice to Meet You!!!"];
let intro = ["Hello, I am Quizto", "Hi, I am the great Quizto", "Hello, My name is Quizto"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good. Thank You", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..'];
let start = ["I think you are ready for the quiz!!! Please Select the domain in which you want to take the test?"];
let easy_ask=["Ok! What is Full form of SHM?","Ok! What is Speed of light?"];
let tough_ask=["Dimension of Energy?","What is grandfather Paradox?","Is there any relation between Time and Gravity?"];
let python=[""]
let python_ans=[""]
let os=["Which of the following is not an Operating System?","Which among these is a valid type of Operating System?","Where is the Bootstrap Program initially stored to start the computer?","Which is a Software generated interrupt caused by an error or by a specific request from user program to start OS Service?"]
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

function answers(){
    const speech = new SpeechSynthesisUtterance();
    text1 = "Done Thank You";
	speechSynthesis.speak(new SpeechSynthesisUtterance(text1))
	chatareamain.appendChild(showchatbotmsg(text1));
	return 1
	
}


function questions(n){
	i=0;
	if (n==1){
		while(i!=10){
		}
		
	}
	if (n==2){
		while(i!=10){
		}

	}
	
	if (n==3){
		while(i!=10){
		}
		
	}
	
	if (n==4){
		while(i!=10){
	
		texto=os[1];
		speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
		chatareamain.appendChild(showchatbotmsg(texto));
		}	
	}
    // const speech = new SpeechSynthesisUtterance();
    // text1 = "Lets Start";
	// speechSynthesis.speak(new SpeechSynthesisUtterance(text1))
	// chatareamain.appendChild(showchatbotmsg(text1));
	// while (i < 10) {
		// console.log("xdx")
  // text += "<br>The number is " + i;
  // i++;
  
// }
// answers()
return 1;
}


function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";
    
	if(message.includes('start'||'quiz')){
        let finalresult = start[Math.floor(Math.random() * start.length)];
        speech.text = finalresult;	
		window.speechSynthesis.speak(speech);
		chatareamain.appendChild(showchatbotmsg(speech.text));
		
		Domains="1.Python 2.Machine Learning  3.Compiler Design 4.Operating System";
		chatareamain.appendChild(showchatbotmsg(Domains));
		st=1;
		
		// questions();
	}
	else if(message.includes('python')){
        // let finalresult = python[Math.floor(Math.random() * python.length)];
        textp = "Ok!!! Starting Quiz on Python";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textp))
		chatareamain.appendChild(showchatbotmsg(textp));
		questions(1);
		
	}
	else if(message.includes('machine learning')){
        // let finalresult = python[Math.floor(Math.random() * python.length)];
        textml = "Ok!!! Starting Quiz on Machine Learning";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textml))
		chatareamain.appendChild(showchatbotmsg(textml));
		questions(2);
	}
	else if(message.includes('compiler design')){
        // let finalresult = python[Math.floor(Math.random() * python.length)];
        textcd = "Ok!!! Starting Quiz on Compiler Design";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textcd))
		chatareamain.appendChild(showchatbotmsg(textcd));
		questions(3);
	}
	else if(message.includes('operating system')){
        // let finalresult = python[Math.floor(Math.random() * python.length)];
        textos = "Ok!!! Starting Quiz on Operating System";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textos))
		chatareamain.appendChild(showchatbotmsg(textos));
		questions(4);
	}

    else if(message.includes('easy'||'simple')){
        let finalresult = easy_ask[Math.floor(Math.random() * easy_ask.length)];
        speech.text = finalresult;
		window.speechSynthesis.speak(speech);
		chatareamain.appendChild(showchatbotmsg(speech.text));

    }
	
	else if(message.includes('tough'||'hard')){
        let finalresult = tough_ask[Math.floor(Math.random() * tough_ask.length)];
        speech.text = finalresult;
		window.speechSynthesis.speak(speech);
		chatareamain.appendChild(showchatbotmsg(speech.text));

    }
	
    else if(message.includes('hi'||'hello')){
        let finalresult = meet[Math.floor(Math.random() * meet.length)];
        speech.text = finalresult;
		window.speechSynthesis.speak(speech);
		chatareamain.appendChild(showchatbotmsg(speech.text));

    }
 
	else if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
		window.speechSynthesis.speak(speech);
		chatareamain.appendChild(showchatbotmsg(speech.text));

    }
    else if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
		window.speechSynthesis.speak(speech);
		chatareamain.appendChild(showchatbotmsg(speech.text));

    }
    else if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
		window.speechSynthesis.speak(speech);
		chatareamain.appendChild(showchatbotmsg(speech.text));

    }
    else if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
		window.speechSynthesis.speak(speech);
		chatareamain.appendChild(showchatbotmsg(speech.text));

    }
    else if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
		window.speechSynthesis.speak(speech);
		chatareamain.appendChild(showchatbotmsg(speech.text));

    }
    else if(message.includes('talk to you' || 'talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
		window.speechSynthesis.speak(speech);
		chatareamain.appendChild(showchatbotmsg(speech.text));

    }
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
