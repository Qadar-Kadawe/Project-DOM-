
let som = ['wiil','gabar','hooyo','aabe','walal','eedo','jamacad','tababar','shaqo','guri'];
let eng = ['boy','girl','mother','father','brother','aunt','university','tranning','job','home'];

function generateSom() {
    let randomSom = Math.floor(Math.random() * 10);
    document.getElementById("question-input").value = som[randomSom];
    return som[randomSom];
  }

  function generateEng(){
      let randomEng = Math.floor(Math.random() * 10);
      document.getElementById("question-input").value = eng [randomEng];
      return eng[randomEng];
  }

function selectLanguage(){
    let lan = document.getElementById("choose-lang").value;
    if(lan == ""){
        alert("Please Select Language");
        reset();
    }
    else if(lan == "somali"){  

        document.getElementById("select_language").innerHTML="Dooro Luuqada";
        document.getElementById("header-title").innerHTML ="Baro oo Ciyaar";
        document.getElementById("header-subtitle").innerHTML ="Baro Erayo Cusub oo luuqad kale ah";
        document.getElementById("question-label").innerHTML="U Turjun Eraygan English:";
        document.getElementById("answer-label").innerHTML= "Geli Jawaabtaada:";
        document.getElementById("submit-answer").innerHTML = "hubi";
        document.getElementById("reset").innerHTML="soobilaw";
        
        document.getElementById('answer-input').value ="";
        generateSom();
        
    }else if(lan == "english"){
        document.getElementById("select_language").innerHTML ="Select Language";
        document.getElementById("header-title").innerHTML ="Learn & Play";
        document.getElementById("header-subtitle").innerHTML ="Learn new words of another language";
        document.getElementById("question-label").innerHTML ='Translate this Word to Somali';
        document.getElementById("answer-label").innerHTML = 'Enter Your Answer';
        document.getElementById("submit-answer").innerHTML = 'check';
        document.getElementById("reset").innerHTML = 'reset';

        document.getElementById('answer-input').value ="";
        generateEng();
    }
}

function ChechAns(){
    let lan = document.getElementById("choose-lang").value;
    if(lan == "somali"){
        let reQue =  document.getElementById("question-input").value;
        let reAns =  document.getElementById("answer-input").value.toLowerCase();
        console.log(som.indexOf(reQue));
        console.log(eng.indexOf(reAns));
        if(som.indexOf(reQue) == eng.indexOf(reAns)){
            document.getElementById('result').innerHTML="Correct";
            document.getElementById('answer-input').value ="";  
            document.getElementById("result").style.color = "green";  
            generateSom(); 
        }else{
            document.getElementById('result').innerHTML="Incorrect";
            document.getElementById("result").style.color = "red"; 
        }
}else if(lan == 'english'){
        let reQu = document.getElementById("question-input").value;
        let reAn = document.getElementById("answer-input").value.toLowerCase();
        if(eng.indexOf(reQu) == som.indexOf(reAn)){
            document.getElementById('result').innerHTML="Correct";
            document.getElementById('answer-input').value ="";  
            document.getElementById("result").style.color = "green"; 
            generateEng(); 
        }else{
            document.getElementById("result").innerHTML="Incorrect";
            document.getElementById("result").style.color = "red";
        }
}

}

function reset() {
    document.getElementById('choose-lang').value="";
    document.getElementById('question-input').value="";
    document.getElementById('answer-input').value="";
  }

