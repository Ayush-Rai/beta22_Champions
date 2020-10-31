let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let meet=["Hi, What can I do for you today?","Hello Nice to Meet You!!!"];
let intro = ["Hello, I am Quizto", "Hi, I am the great Quizto", "Hello, My name is Quizto"];
let start = ["I think you are ready for the quiz!!! Please Select the domain in which you want to take the test?"];
let easy_ask=["Ok! What is Full form of SHM?","Ok! What is Speed of light?"];
let tough_ask=["Dimension of Energy?","What is grandfather Paradox?","Is there any relation between Time and Gravity?"];
let python=["Is string mutable in Python?","Is list mutable? Yes or no","Python is low-level or high-level language?","Python is object Oriented Language. Yes or No?"];
let python_ans=["yes","no","high level","no"];
let python_lev=["0","0","1","1"];
let python_vis=["-1","-1","-1","-1"];
let os=["Which of the following is not an Operating System?","Which among these is a valid type of Operating System?","Where is the Bootstrap Program initially stored to start the computer?","Which is a Software generated interrupt caused by an error or by a specific request from user program to start OS Service?"];
let os_opt=["1.Linux 2.Apple 3.Android 4.Windows","1.Resource OS  2.User OS  3.Network OS  4.Memory OS","1.RAM  2.Register  3.Hard Disk  4.EEPROM","1.Trap 2.Doorbell  3.IRQ  4.NMI"];
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var st=0;
var pqi=0;
var cqi=0;
var mqi=0;
var oqi=0;
var go=0;
let ml=[]
let cd=[]

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

function answers(ans){
	if (pq==1){
		// console.log(python_ans[pqi])
		console.log(pqi)
		console.log("answers:"+ans)
		console.log(python_ans[pqi-1])
		if(ans==python_ans[pqi-1]){
			console.log("correct")
			lev=python_lev[pqi-1];
			if(lev==0)
			lev++;
			python_vis[pqi-1]=1;
			for(;pqi<python.length;pqi++){
				if (python_vis[pqi]==-1 && python_lev[pqi]==lev)
					break;
				}
				
		result="Correct Very Good!!!!";
		chatareamain.appendChild(showchatbotmsg(result));
		chatbotvoice(ans);
		}
		else{
		// console.log(ans);	
		console.log("wrong");
		lev=python_lev[pqi-1];
			if(lev==1)
			lev--;
			python_vis[pqi-1]=0;
			for(pqi=0;pqi<python.length;pqi++){
				if (python_vis[pqi]==-1 && python_lev[pqi]==lev)
					break;
				}
		result="Sorry Incorrect :(";
		python_vis[pqi-1]=0;
		chatareamain.appendChild(showchatbotmsg(result));
		chatbotvoice(ans);
	}
	
	}
		
	// if (oq==1){
	// }
	
	// if(mq==1){
		
	// }
	
	// if(cq==1){
		
	// }
		
return 1;
}


function questions(n,i){
	// i=0;
	if (n==1){

		textp=python[i];
		chatareamain.appendChild(showchatbotmsg(textp));
		speechSynthesis.speak(new SpeechSynthesisUtterance(textp))
	}	
	if (n==2){
		while(i<4){
			i=i+1;
		}
	}
	if (n==3){
		while(i<4){
			i=i+1;
		}	
	}
	if (n==4){
		while(i<4){
		texto=os[i];
		textop=os_opt[i];
		speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
		chatareamain.appendChild(showchatbotmsg(texto));
		chatareamain.appendChild(showchatbotmsg(textop));
		
		i=i+1;
		}	
	}
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
		go=0;
		
		// questions();
	}
	
	// if(pqi>0 && go==0){
		// console.log("135"+message);	
		// go=1;
	// }
	else if(message.includes('python') || pq==1){
		if (st==0){
        textstart = "Ok wait!!! Seems Like you are in mood to take a quiz. Please tell \"Start\" to start the test ;)";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textstart))
		chatareamain.appendChild(showchatbotmsg(textstart));
		pq=1;
		st=1;
		}
		else{
			if(pqi==0){
        textp = "Ok!!! Starting Quiz on Python";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textp))
		chatareamain.appendChild(showchatbotmsg(textp));}
		pq=1;
		questions(1,pqi);
		pqi=pqi+1;
		go=1;
		// while(pqi<4){
			// questions(1,i);
			// i=i+1;
		// }
		// questions(1);
		}
	}
	else if(message.includes('machine learning') || mq==1){
		if (st==0){
        textstart = "Ok wait!!! Seems Like you are in mood to take a quiz. Please tell \"Start\" to start the test ;)";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textstart))
		chatareamain.appendChild(showchatbotmsg(textstart));
		st=1;
		mq=1;
		}
		else{
		mq=1;
		questions(1,mqi);
		mqi=mqi+1;
		go=1;		
        textml = "Ok!!! Starting Quiz on Machine Learning";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textml))
		chatareamain.appendChild(showchatbotmsg(textml));
		questions(2);
		}
	}
	else if(message.includes('compiler design') || cq==1){
		if (st==0){
        textstart = "Ok wait!!! Seems Like you are in mood to take a quiz. Please tell \"Start\" to start the test ;)";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textstart))
		chatareamain.appendChild(showchatbotmsg(textstart));
		st=1;
		cq=1;
		}
		else{
		cq=1;
		questions(1,cqi);
		cqi=cqi+1;
		go=1;		
        textcd = "Ok!!! Starting Quiz on Compiler Design";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textcd))
		chatareamain.appendChild(showchatbotmsg(textcd));
		questions(3);
		}
	}
	
	else if(message.includes('operating system') || oq==1){
     
		if (st==0){
        textstart = "Ok wait!!! Seems Like you are in mood to take a quiz. Please tell \"Start\" to start the test ;)";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textstart))
		chatareamain.appendChild(showchatbotmsg(textstart));			
		st=1;
		oq=1;
		}
		else{
		oq=1;
		questions(1,mqi);
		oqi=oqi+1;
		go=1;		

	    textos = "Ok!!! Starting Quiz on Operating System";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textos))
		chatareamain.appendChild(showchatbotmsg(textos));
		questions(4);
		}
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
	
 
	else if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
		window.speechSynthesis.speak(speech);
		chatareamain.appendChild(showchatbotmsg(speech.text));
	}
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
	console.log("go"+go);
	if(go==1){
	answers(transcript);
	// window.go=0;
	}
	else{
	console.log("goc")
	if ((cqi!=0 || mqi!=0) || (oqi!=0 || pqi!=0))
    window.go=1;
	chatbotvoice(transcript);
    console.log(transcript+"h4");
	
}}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
