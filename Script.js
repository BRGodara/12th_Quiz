var Name = document.getElementById("Name");
var Score = 0;

var Touched = 0;
var Touchs = 0;

var Correct = document.getElementById("Correct");
var Incorrect = document.getElementById("Incorrect");

var Question = document.getElementById("Question");
var Oa = document.getElementById("Oa");
var Ob = document.getElementById("Ob");
var Oc = document.getElementById("Oc");
var Od = document.getElementById("Od");

var QNum = 1;

function Check(Option){
	var ANum = QNum - 1;
	var Ans = document.getElementById("Que"+ANum+"_Ans");
	if(Option == Ans.innerHTML){
		Correct.style.display = "block";
		Incorrect.style.display = "none";
		Calculate(1);
	}else{
		Correct.style.display = "none";
		Incorrect.style.display = "block";
		Calculate(0);
	}
}

function CheckR(Option){
	if(Touched == 0){
		Check(Option);
		if(Option == 1){
			Oa.style.background = "#0004FF";
			Oa.style.color = "#fff";
		}else if(Option == 2){
			Ob.style.background = "#0004FF";
			Ob.style.color = "#fff";
		}else if(Option == 3){
			Oc.style.background = "#0004FF";
			Oc.style.color = "#fff";
		}else if(Option == 4){
			Od.style.background = "#0004FF";
			Oc.style.color = "#fff";
		}
	}
}

function Draw(QueNum){
	var Ques = document.getElementById("Que"+QueNum);
	var OptA = document.getElementById("Que"+QueNum+"_Oa");
	var OptB = document.getElementById("Que"+QueNum+"_Ob");
	var OptC = document.getElementById("Que"+QueNum+"_Oc");
	var OptD = document.getElementById("Que"+QueNum+"_Od");
	
	Question.innerHTML = Ques.innerHTML;
	Oa.innerHTML = OptA.innerHTML;
	Ob.innerHTML = OptB.innerHTML;
	Oc.innerHTML = OptC.innerHTML;
	Od.innerHTML = OptD.innerHTML;
	
	QNum++;
}

function Calculate(Answer){
	if(Answer == 1 || Answer == 0){
		Touched = 1;
	}else{
		Touched = 0;
	}
	if(Answer == 1){
		Score++;
	}
}

function Start(){
	var Home = document.getElementById("Home");
	var Quiz = document.getElementById("Quiz");
	if(Name.innerText == "Please enter your name here!"){
		Name.style.background = "#FF3100";
	}else if(Name.innerText == ""){
		Name.style.background = "#FF3100";
	}else{
		Name.style.background = "#00ff00";
		Home.style.display = "none";
		Quiz.style.display = "block";
	}
}

//Buttons --->

function Previous(){
	alert ("This function is not interdused yet! Please wait for some time :)----->Created by Bishnaram Godara");
}
function Next(){
	Draw(QNum);
	Correct.style.display = "none";
	Incorrect.style.display = "none";
	Oa.style.background = "#00FFDA";
	Oa.style.color = "#565656";
	Ob.style.background = "#00FFDA";
	Ob.style.color = "#565656";
	Oc.style.background = "#00FFDA";
	Oc.style.color = "#565656";
	Od.style.background = "#00FFDA";
	Od.style.color = "#565656";
	Touched = 0;
	Touchs++;
	if(Touchs == 10){
		ResultWindow();
	}
}
function Hint(){
	var ANum = QNum - 1;
	var Ans = document.getElementById("Que"+ANum+"_Ans");
	if(Ans.innerHTML == "1"){
		Oa.style.background = "#00ff00";
	}else if(Ans.innerHTML == "2"){
		Ob.style.background = "#00ff00";
	}else if(Ans.innerHTML == "3"){
		Oc.style.background = "#00ff00";
	}else{
		Od.style.background = "#00ff00";
	}
	Touched = 1;
}

function ResultWindow(){
	document.getElementById("Previous").style.display = "none";
	document.getElementById("Hint").style.display = "none";
	document.getElementById("Next").style.display = "none";
	document.getElementById("CheckResult").style.display = "block";
}

function CheckResult(){
	document.getElementById("Quiz").style.display = "none";
	document.getElementById("Home").style.display = "block";
	if(Name.innerHTML == "Bishnaram Godara"){
		alert("Hello sir");
		Reset();
	}else{
		alert("Okay, You done it! Mr/Mis "+Name.innerHTML+", You Got "+Score+"/10 Marks!");
		Reset();
	}
}

function Reset(){
	Score = 0;
	Touched = 0;
	Touchs = 0;
	QNum = 1;
	Correct.style.display = "none";
	Incorrect.style.display = "none";
	Oa.style.background = "#00FFDA";
	Oa.style.color = "#565656";
	Ob.style.background = "#00FFDA";
	Ob.style.color = "#565656";
	Oc.style.background = "#00FFDA";
	Oc.style.color = "#565656";
	Od.style.background = "#00FFDA";
	Od.style.color = "#565656";
	document.getElementById("Previous").style.display = "block";
	document.getElementById("Hint").style.display = "block";
	document.getElementById("Next").style.display = "block";
	document.getElementById("CheckResult").style.display = "none"
	Draw(QNum);
}

function ClearData(){
	if(Name.innerHTML == "Please enter your name here!"){
		Name.innerHTML = "";
		Name.style.background = "#FCFFB0"
	}else if(Name.innerHTML != "Please enter your name here!" || Name.innerHTML != ""){
		Name.style.background = "#00ff00"
	}
}





