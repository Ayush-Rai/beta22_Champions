let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let meet=["Hi, What can I do for you today?","Hello Nice to Meet You!!!"];
let intro = ["Hello, I am Quizto", "Hi, I am the great Quizto", "Hello, My name is Quizto"];
let start = ["I think you are ready for the quiz!!! Please Select the domain in which you want to take the test?"];
// let start=["a"];
let easy_ask=["Ok! What is Full form of SHM?","Ok! What is Speed of light?"];
let tough_ask=["Dimension of Energy?","What is grandfather Paradox?","Is there any relation between Time and Gravity?"];

let python = ["Which function removes the first element of a set and the last element of a list? \
1 remove. 2 pop. 3 discard. 4 dispose.",
 "Syntax error in python is detected by _________at _______ \
  1. compiler/ compile time 2. interpreter/ run time 3. compiler/ run time 4. interpreter/ compile time",
 "In which part of memory does the system stores the parameter and local variables of funtion call? \
  1. heap 2. stack 3. Uninitialized data segment 4. None of the above",
 "Is Python Object Oriented Programming language, True or False? ",
 "What type of data is: arr = [(1,1),(2,2),(3,3)]?  \
  1. Array of tuples 2. Tuples of lists 3. List of tuples 4. Invalid type",
 "Can tuple be used as dictionary key in python? True or False?",
 "Python is written in which language? \
  1. C 2. C++ 3. Java 4. None of the above",
 "What is the associativity of Operators with the same precedence? \
  1. Depends on operators 2. Left to Right 3. Right to Left 4. Depends on Python Compiler",
 "What is the maximum possible length of an identifier?\
  1. 32 characters 2. 63 characters, 3. 79 characters, 4. None of the above",
 "Given a function that does not return any value, what value is shown when executed at the shell? \
  1. int 2. bool 3. void 4. None"]

let python_ans = ["pop", "interpreter run time", "stack", "True", "List of tuples", "True", "C", "Left to Right", "None of the above", "None"]

let python_lev = ["0", "1", "1", "0", "0", "0", "1", "0", "1", "1"]
let python_vis=["-1","-1","-1","-1","-1","-1","-1","-1","-1","-1"];

////DUMMMY

// let python=["Is string mutable in Python?","Is list mutable? Yes or no","Python is low-level or high-level language?","Python is object Oriented Language. Yes or No?"];
// let python_ans=["yes","no","high level","no"];
// let python_lev=["0","0","1","1"];
// let python_vis=["-1","-1","-1","-1"];

//////



/////////////////


let ml = ["Which of the following is a widely used and effective machine learning algorithm based on the idea of bagging? \
1. Decision Tree 2. Classification 3. Regression 4. Random Forest",
 "Which of the following techniques can not be used for normalization in text mining? \
  1. Stemming 2. Lemmatization 3. Stop Word Removal 4. None of the above",
 "Which is meant by assuming any two neighboring that are both edge pixels with consistent orientation? \
  1. Canny edge detection 2. Smoothing 3. Segmentation 4. None of the above",
 "Computers normally solve problem by breaking them down into a series of yes-or-no decisions represented by 1s and 0s. What is the name of the logic that allows computers to assign numerical values that fail somewhere between 0 and 1? \
  1. Human logic 2. Fuzzy logic 3. Boolean logic 4. Operational logic",
 "Watson wants to know which of the following is NOT supervised learning, what does Sherlock tell him?  \
  1. Principal component analysis 2. Decision Tree 3. Linear Regression 4. Naive bayes",
 "K-means is not deterministic and it also consists of number of iterations. True or False?",
 "The input image has been converted into a matrix of size 28 X 28 and a kernel/filter of size 7 X 7 with a stride of 1. What will be the size of the convoluted matrix? \
  1. 22 X 22 2. 21 X 21 3. 28 X 28 4. 7 X 7",
 "Which of the following functions can be used as an activation function in the output layer if we wish to predict the probabilities of n classes (p1, p2..pk) such that sum of p over all n equals to 1? \
  1. Softmax 2. ReLu 3. Sigmoid 4. Tanh",
 "In NLP, which algorithm decreases the weight for commonly used words and increases the weight for words that are not used very much in a collection of documents?\
  1. Term Frequency (TF) 2. Inverse Document Frequency (IDF), 3. Word2Vec, 4. Latent Dirichlet Allocation (LDA)",
 "In text mining, converting text into tokens and then converting them into an integer or floating-point vectors can be done using \
  1. CountVectorizer 2. TF-IDF 3. Bag of Words 4. NERs"]

let ml_ans = ["Random Forest", "Stop Word Removal", "Canny edge detection", "Fuzzy logic", "Principal component analysis", "True", "22 cross 22", "Softmax", "Inverse Document Frequency", "Count Vectorizer"]

let ml_lev = ["0", "0", "1", "0", "0", "1", "0", "1", "1", "1"]
let ml_vis=["-1","-1","-1","-1","-1","-1","-1","-1","-1","-1"];

///////////////////////////////////


let os = ["Which system program combines the separately compiled modules of a program into a form suitable for execution? \
1. Assembler 2. Linking Loader 3. Cross Compiler 4. Load and Go",
 "Select the scheduling technique which allows processes that are logically runnable to be temporarily suspended \
  1. Non Preemptive 2. Preemptive 3. First come first Serve 4. Shortest Job First",
 "If Albus Dumbledore wants to create a new process in UNIX which spell would he use? \
  1. create 2. fork 3. new 4. exec",
 "Sherlock is solving the Scandal in Bohemia, which is the Deadlock avoidance algorithm he has to use to get the passkey from Irene Adler? \
  1. Round-Robin 2. Bankers 3. Elevators 4. Karns",
 "Oswald wants the address of the next instruction to be executed by the current process, what correct answer does Weenie give him? \
  1. CPU registers 2. Process stack 3. Pipe 4. Program counter",
 "Which routing technique is used in a distributed system? \
  1. Fixed Routing 2. Virtual Routing 3. Dynamic Routing 4. All of the above",
 "Which of the following page replacement algorithms suffers from Belady’s Anomaly? \
  1. Optimal replacement 2. Least Recently Used 3. First in First out 4. Both 1 and 3",
 "In which load balancing technique in SMP the Idle processor takes a waiting task to execute from a busy processor? \
  1. Get Migration 2. Post Migration 3. Push Migration 4. Pull Migration",
 "Which Operating Sysem follows a Modular + Monolithic OS Architecture?\
  1. Solaris 2. Windows, 3. Android, 4. Linux",
 "Which module gives control of the CPU to the process selected by the short-term scheduler? \
  1. Dispatcher 2. Loader 3. Linker 4. Timer"]

let os_ans = ["Assembler", "Non Preemptive", "fork", "Bankers", "Program Counter", "All of the above", "First in First out", "Pull Migration", "Solaris", "Dispatcher"]

let os_lev = ["0", "0", "0", "0", "0", "1", "1", "1", "1", "1"]
let os_vis=["-1","-1","-1","-1","-1","-1","-1","-1","-1","-1"];

/////////////////


// let python=["Is string mutable in Python?","Is list mutable? Yes or no","Python is low-level or high-level language?","Python is object Oriented Language. Yes or No?"];
// let python_ans=["yes","no","high level","no"];
// let python_lev=["0","0","1","1"];
// let python_vis=["-1","-1","-1","-1"];
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var st=0;
var pqi=0;
var cqi=0;
var mqi=0;
var oqi=0;
var go=0;
var pq=0;
var mq=0;
var oq=0;
var pqover=0;
var mlover=0;
var osover=0;

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


function check(array_vis,array_lev){
	flag=true;
	for(var i=0;i<array_vis.length;i++){
		if(array_vis[i]==-1){
			flag=false;
			break;
		}
	}
	if(flag) 	return flag;
	
	

	for(var i=array_vis.length-1;i>=0;i--){
		if(array_lev[i]==0 && array_vis[i]!=0){
			flag=false;
			break;
		}
	}
	if(flag) return flag;
	for(var i=array_vis.length-1;i>=0;i--){
		if(array_lev[i]==1 && array_vis[i]!=1){
			flag=false;
			break;
		}
	}
	if(flag) return flag;
	return false;
	
}










function answers(ans){
	if (pq==1){
		// console.log(python_ans[pqi])
		console.log(pqi)
		console.log("answers:"+ans)
		console.log(python_ans[pqi-1])
		if(ans==python_ans[pqi-1].toLowerCase()){
			console.log("correct")
			lev=python_lev[pqi-1];
			if(lev==0)
			lev++;
			python_vis[pqi-1]=1;
			console.log(python_vis[pqi]);
			for(var i=0;i<python.length;i++){
				if (python_vis[i]==-1 && python_lev[i]==lev){
					pqi=i;
					break;
			}}
				
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
		// python_vis[pqi-1]=0;
		chatareamain.appendChild(showchatbotmsg(result));
		chatbotvoice(ans);
	}
	
	}

	if (mq==1){
		// console.log(python_ans[pqi])
		console.log(mqi)
		console.log("answers:"+ans)
		console.log(ml_ans[mqi-1])
		if(ans==ml_ans[mqi-1].toLowerCase()){
			console.log("correct")
			lev=ml_lev[mqi-1];
			console.log(mqi,lev+"   vsvs")
			if(lev==0)
			lev++;
			console.log(lev+"  <-lev")
			ml_vis[mqi-1]=1;
			for(var i=0;i<ml.length;i++){
				if (ml_vis[i]==-1 && ml_lev[i]==lev){
					console.log(ml[i],ml_vis[i],ml_lev[i],"ml output check");
					mqi=i;
					break;
			}}
				
		result="Correct Very Good!!!!";
		chatareamain.appendChild(showchatbotmsg(result));
		chatbotvoice(ans);
		}
		
		else{
		// console.log(ans);	
		console.log("wrong");
		lev=ml_lev[mqi-1];
			if(lev==1)
			lev--;
			ml_vis[mqi-1]=0;
			for(mqi=0;mqi<ml.length;mqi++){
				if (ml_vis[mqi]==-1 && ml_lev[mqi]==lev)
					break;
				}
		result="Sorry Incorrect :(";
		//ml_vis[mqi-1]=0;
		chatareamain.appendChild(showchatbotmsg(result));
		chatbotvoice(ans);
	}
	
	}


	if (oq==1){
		// console.log(python_ans[pqi])
		console.log(oqi)
		console.log("answers:"+ans)
		console.log(os_ans[oqi-1])
		if(ans==os_ans[oqi-1].toLowerCase()){
			console.log("correct")
			lev=os_lev[oqi-1];
			if(lev==0)
			lev++;
			os_vis[oqi-1]=1;
			for(var i=0;i<os.length;i++){
				if (os_vis[i]==-1 && os_lev[i]==lev){
					oqi=i;
					break;
			}}
				
		result="Correct Very Good!!!!";
		chatareamain.appendChild(showchatbotmsg(result));
		chatbotvoice(ans);
		}
		else{
		// console.log(ans);	
		console.log("wrong");
		lev=os_lev[oqi-1];
			if(lev==1)
			lev--;
			os_vis[oqi-1]=0;
			for(oqi=0;oqi<os.length;oqi++){
				if (os_vis[oqi]==-1 && os_lev[oqi]==lev)
					break;
				}
		result="Sorry Incorrect :(";
		//os_vis[oqi-1]=0;
		chatareamain.appendChild(showchatbotmsg(result));
		chatbotvoice(ans);
	}
	
	}


return 1;
}


function questions(n,i){
	// i=0;
	if (n==1){
		console.log(i)
		if (i==python.length){
			console.log(python_vis,python_lev);
			var easy=0,easy_cnt=0,hard=0,hard_cnt=0;
				for(var i=0;i<python.length;i++){
					if(python_vis[i]!=-1 && python_lev[i]==0){
						easy+=python_vis[i]
						easy_cnt++;
					}
					if(python_vis[i]!=-1 && python_lev[i]==1){
						hard+=python_vis[i]
						hard_cnt++;
					}
				}
				
			textresult=`Easy :- ${easy}/${easy_cnt} Hard :- ${hard}/${hard_cnt}. `;
			if(mlover==0 && osover==0)
			textover="Python test Over!!!   Please say \"start\" followed by \"Machine Learning or Operating System\" to start your ML or OS test. "
			if(mlover==1 && osover==0)
			textover="Python test Over!!!   Please say \"start\" followed by \"Operating System\" to start your OS test. "
			if(mlover==0 && osover==1)
			textover="Python test Over!!!   Please say \"start\" followed by \"Machine Learning\" to start your ML test. "
			if(mlover==1 && osover==1)
			textover="Python test Over!!! "
			textresult+=textover;
			chatareamain.appendChild(showchatbotmsg(textresult));
			speechSynthesis.speak(new SpeechSynthesisUtterance(textresult));
			// pq=0
			// mq=1
			console.log("xpdqover is 111111")
			pqover=1
		}
		else{
		textp=python[i];
		chatareamain.appendChild(showchatbotmsg(textp));
		speechSynthesis.speak(new SpeechSynthesisUtterance(textp));
	}}	
	if (n==2){

		if (i==ml.length){
			var easy=0,easy_cnt=0,hard=0,hard_cnt=0;
				for(var i=0;i<ml.length;i++){
					if(ml_vis[i]!=-1 && ml_lev[i]==0){
						easy+=ml_vis[i]
						easy_cnt++;
					}
					if(ml_vis[i]!=-1 && ml_lev[i]==1){
						hard+=ml_vis[i]
						hard_cnt++;
					}
				}
				
			textresult=`Easy :- ${easy}/${easy_cnt} Hard :- ${hard}/${hard_cnt}. `;
			if(pqover==0 && osover==0)
			textover="Machine Learning test Over!!!   Please say \"start\" followed by \"Python or Operating System\" to start your ML or OS test. "
			if(pqover==1 && osover==0)
			textover="Machine Learning test Over!!!   Please say \"start\" followed by \"Operating System\" to start your OS test. "
			if(pqover==0 && osover==1)
			textover="Machine Learning test Over!!!   Please say \"start\" followed by \"Python\" to start your ML test. "
			if(pqover==1 && osover==1)
			textover="Machine Learing test Over!!!   Your responses are recorded "
			textresult+=textover;
			chatareamain.appendChild(showchatbotmsg(textresult));
			speechSynthesis.speak(new SpeechSynthesisUtterance(textresult));
			// pq=0
			// mq=1
			console.log("xpdqover is 111111")
			pqover=1
		}
		else{

		textm=ml[i];
		chatareamain.appendChild(showchatbotmsg(textm));
		speechSynthesis.speak(new SpeechSynthesisUtterance(textm));
	}}	
	if (n==3){
		if (i==os.length){
			var easy=0,easy_cnt=0,hard=0,hard_cnt=0;
				for(var i=0;i<os.length;i++){
					if(os_vis[i]!=-1 && os_lev[i]==0){
						easy+=os_vis[i]
						easy_cnt++;
					}
					if(os_vis[i]!=-1 && os_lev[i]==1){
						hard+=os_vis[i]
						hard_cnt++;
					}
				}
				
			textresult=`Easy :- ${easy}/${easy_cnt} Hard :- ${hard}/${hard_cnt}. `;
			if(pqover==0 && mlover==0)
			textover="os test Over!!!   Please say \"start\" followed by \"Python or Machine Learning\" to start your ML or python test. "
			if(pqover==0 && mlover==1)
			textover="os test Over!!!   Please say \"start\" followed by \"Python\" to start your Python test. "
			if(pqover==1 && mlover==0)
			textover="os test Over!!!   Please say \"start\" followed by \"Machine Learning\" to start your ML test. "
			if(pqover==1 && mlover==1)
			textover="os test Over!!!   Your responses are recorded "
			textresult+=textover;
			chatareamain.appendChild(showchatbotmsg(textresult));
			speechSynthesis.speak(new SpeechSynthesisUtterance(textresult));
			// pq=0
			// mq=1
			console.log("xpdqover is 111111")
			pqover=1
		}
		else{

		texto=os[i];
		chatareamain.appendChild(showchatbotmsg(texto));
		speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
		}	}	

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
		
		Domains="Python , Machine Learning , Operating System";
		chatareamain.appendChild(showchatbotmsg(Domains));
		st=1;
		go=0;
		
		// questions();
	}
	
	// if(pqi>0 && go==0){
		// console.log("135"+message);	
		// go=1;
	// }
	else if((message.includes('python') || pq==1) && pqover==0){
		if (st==0){
        textstart = "Ok wait!!! Seems Like you are in mood to take a quiz. Please tell \"Start\" to start the test ;)";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textstart))
		chatareamain.appendChild(showchatbotmsg(textstart));
		pq=1;
		mq=0;
		oq=0;
		st=1;
		}
		else{
			if(pqi==0){
        textp = "Ok!!! Starting Quiz on Python";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textp))
		chatareamain.appendChild(showchatbotmsg(textp));}
		pq=1;
		mq=0;
		oq=0;
		questions(1,pqi);
		pqi=pqi+1;
		if(pqover==0)
		go=1;
		// while(pqi<4){
			// questions(1,i);
			// i=i+1;
		// }
		// questions(1);
		}
	}
	else if(pqover==1 && mlover==1 && osover==1){
		textstart = "All Tests are Already Done. Please EXIT!!!  ;)";
		chatareamain.appendChild(showchatbotmsg(textstart));
	}
	else if(message.includes('python') && pqover==1){
		console.log("p overrrrr")
		textstart = "Test is Already Done ;)";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textstart))
		chatareamain.appendChild(showchatbotmsg(textstart));
		
	}
	else if(message.includes('machine learning') || mlover==0){
		if (st==0){
        textstart = "Ok wait!!! Seems Like you are in mood to take a quiz. Please tell \"Start\" to start the test ;)";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textstart))
		chatareamain.appendChild(showchatbotmsg(textstart));
		st=1;
		mq=1;
		pq=0;
		oq=0;
		}
		else{
			if(mqi==0){
		textml = "Ok!!! Starting Quiz on Machine Learning";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textml))
		chatareamain.appendChild(showchatbotmsg(textml));}
		mq=1;
		pq=0;
		oq=0;
		questions(2,mqi);
		mqi=mqi+1;
		go=1;	
		}
	}
	
	else if(message.includes('operating system') || osover==0){
     
		if (st==0){
        textstart = "Ok wait!!! Seems Like you are in mood to take a quiz. Please tell \"Start\" to start the test ;)";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textstart))
		chatareamain.appendChild(showchatbotmsg(textstart));			
		st=1;
		oq=1;
		pq=0;
		mq=0;		
		}
		else{
		if(oqi==0){
	    textos = "Ok!!! Starting Quiz on Operating System";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textos))
		chatareamain.appendChild(showchatbotmsg(textos));}
		oq=1;
		pq=0;
		mq=0;		

		questions(3,oqi);
		oqi=oqi+1;
		go=1;		
		}
	}
	else if(message.includes('operating system') || osover==1){
		textstart = "Test is Already Done ;)";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textstart))
		chatareamain.appendChild(showchatbotmsg(textstart));
	}
	else if(message.includes('machine learning') || mlover==1){
		console.log("ml overrrrrrrrrrr")
		textstart = "Test is Already Done ;)";
		speechSynthesis.speak(new SpeechSynthesisUtterance(textstart))
		chatareamain.appendChild(showchatbotmsg(textstart));
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
	console.log("go---------"+go,"pqover------"+pqover);
	if (pqover==1){
		console.log("p qover")
		window.go=0;
	}
	
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
