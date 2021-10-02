
let som = ['Wiil','Gabar','Hooyo','Aabe','walal','Eedo','Jamacad','Tababar','Shaqo','Guri'];
let eng = ['Boy','Girl','Mother','Father','Brother','aunt','University','Tranning','Job','Home'];

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
    if(lan==""){
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
        let re = document.getElementById("result");
        if((re.innerHTML = eng.some(checkinEng))){            
        document.getElementById('answer-input').value ="";     
        generateSom(); 
          
    }
}else if(lan == 'english'){
    let re = document.getElementById('result');
    if((re.innerHTML = som.some(checkinSom))){           
        document.getElementById("answer-input").value ="";
        genrateEgn();
    }
}

}

function reset() {
    document.getElementById('choose-lang').value="";
    document.getElementById('question-input').value="";
    document.getElementById('answer-input').value="";
  }

function checkinSom(som) {
    return som == document.getElementById("answer-input").value;
    
    
  }
function checkinEng(eng){
 return eng == document.getElementById("answer-input").value;
}

