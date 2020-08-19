import { questions } from "./tests.js";

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const list = document.querySelectorAll(".nav-links li")

    burger.addEventListener("click", () => {

        nav.classList.toggle("nav-active")


        list.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
                return ''
            }
            link.style.animation = `navLink 0.5s ease forwards ${index / 7 + 1.2}s`;
        })


        // burger animation

        burger.classList.toggle("toggel")
    })



}
navSlide()



// section work
const section = document.querySelector('.work');
// div lines for adding span;
const lines = document.querySelector(".lines");
// Get demo for button Test Choose
var demoButtonWord = document.getElementById('demoButton');
// Get demo for cheking
var demoChek = document.getElementById('demoChek');
// Massege for buttons
var massege = document.querySelector('.massege');






// class test for showing tests
class Test {
    putTest(question) {
        this.question = question;
        this.addButtonWord();
    }


    addSpan(num) {
        for (var i = 1; i <= num; i++) {
            var span = document.createElement('span');
            lines.append(span)
        }
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    toDoArray() {
        var testSelf = this.question.question.split(" ");
        return this.shuffle(testSelf);
    }

    getTests(array, num) {
        var ten = this.shuffle(array);
        this.addSpan(num)
        return ten.slice(0, num);
    }


    addButtonWord() {
        var words = this.toDoArray();
        demoButtonWord.innerHTML = ''
        for (var i = 0; i < words.length; i++) {
            var button = document.createElement("button");
            button.innerText = words[i];
            button.classList.add("butWordChoose")
            demoButtonWord.appendChild(button)
        }
    }

    addWordToDemoAnswer(e) {
        if (e.classList.contains("butWordChoose")) {
            e.className = 'butWordCheck';
            demoChek.appendChild(e);
        } else if (e.classList.contains("butWordCheck")) {
            e.className = 'butWordChoose';
            demoButtonWord.appendChild(e)
        }
    }


    checkIsEmptyDemoWord() {
        if (demoButtonWord.hasChildNodes()) {
            massege.innerText = "Лутфан ҳами калимаҳоро интихоб кунед"
            setTimeout(() => massege.innerText = '', 3000);
            return false;
        }
        return true
    }

    checkIsCorrect() {
        var buttons = demoChek.getElementsByTagName("button");
        var arr = []
        Array.from(buttons).forEach((value) => {
            arr.push(value.innerText);
        })
        var currect = JSON.stringify(this.question.question);
        buttons = JSON.stringify(arr.join(' '));
        if (currect == buttons) {
            return true;
        } else {
            return false;
        }
    }

    removeClass() {
        var buttons = demoChek.getElementsByTagName('button');
        for (var val of buttons) {
            val.className = ''
        }
    }

}

// Интихоби сето баттон барои тест гузашт 10 ё 20 ё беохир
var beOkhirTest = document.getElementById("beOkhir");
var test10 = document.getElementById("10test");
var test20 = document.getElementById("20test");

// If click choosing buttons
test10.onclick = test10Fun;
test20.onclick = test20Fun;
beOkhirTest.onclick = beOkhir;


const Tests = new Test();



//Show answer button
const showAnswerButton = document.getElementById('show');
//Next question
const nextQuestion = document.getElementById('nextQuestion');
nextQuestion.disabled = true;
//nex work button
const newWorkButton = document.querySelector('#newWork')
// New work
const newTest = document.getElementById("newTest");
newTest.onclick = (e) => {
    document.location = ''
}
//Demo translate 
var demoTranslate = document.querySelector('.translate');


var index = 0;
//10 Test Exercise function
function test10Fun(e) {
    e.target.parentElement.style.display = 'none'
    section.style.display = ''
    //index of test 
    //spans
    let spans = document.querySelector(".lines").getElementsByTagName("span");
    //add span 10 
    
    // Ten test rendom 
    let tenTest = Tests.getTests(questions, 10);
    demoTranslate.innerText = index + 1 + ". " + tenTest[index].answer;
    //if buttom word clicked in demo buttona choose
    demoButtonWord.addEventListener("click", (e) => {
        Tests.addWordToDemoAnswer(e.target)
    })
    //if buttom word clicked in demo check
    demoChek.addEventListener("click", (e) => {
        Tests.addWordToDemoAnswer(e.target)

    })


    // correct and wrong index
    var correct = 0;
    var wrong = 0;
    //Check annswer
        Tests.putTest(tenTest[index]);
        showAnswerButton.addEventListener("click", (e) => {
            
          
            if(index < tenTest.length) {
            if (Tests.checkIsEmptyDemoWord()) {
                if (Tests.checkIsCorrect()) {
                    demoButtonWord.innerHTML = `<span class='correctAnswer'>Офарин! Шумо дурст ҷавоб додед! <br> ${tenTest[index].question} </span>`;
                    Tests.removeClass();
                    showAnswerButton.disabled = true;
                    nextQuestion.disabled = false
                    spans[index].style.background = 'green'
                    index++;
                    correct++
                } else {
                    demoButtonWord.innerHTML = `<span style='color: red;' class='correctAnswer'>
                    Шумо нодуруст ҷавоб додед! <br>Ҷавоби дуруст: 
                    <span style='color: teal;'>${tenTest[index].question} </span>
                     </span>`;
                      Tests.removeClass();
                    showAnswerButton.disabled = true;
                    nextQuestion.disabled = false
                    spans[index].style.background = 'red'
                    index++;
                    wrong++;
                }
            } else {
                Tests.checkIsEmptyDemoWord()
            }
            if (index < tenTest.length ) {
                nextQuestion.addEventListener("click", () => {
                    demoChek.innerHTML = ''
                    Tests.putTest(tenTest[index]);
                    showAnswerButton.disabled = false;
                    nextQuestion.disabled = true
                    demoTranslate.innerText = index + 1 + ". " + tenTest[index].answer;

                })} else{
                    nextQuestion.style.display = 'none'
                    showAnswerButton.style.display ='none'
                    newWorkButton.style.display = ''
                    newTest.style.display = ''
                    newWorkButton.onclick = (e) => {
                        demoChek.innerHTML = ''
                        demoTranslate.innerHTML = ''
                        demoButtonWord.innerHTML = `
                        <div class="ansewrAll">
                        <p>Ҷавоби дуруст кор кардаи шумо: ${correct} </p>
                        <p>Ҷавоби нодуруст кор кардаи шумо: ${wrong}</p>
                    </div>
                        `
                    }
                }
            } 
        })
       

   

}




//20 Test Exercise
function test20Fun(e) {
    e.target.parentElement.style.display = 'none'
    section.style.display = ''
    //index of test 
    //spans
    let spans = document.querySelector(".lines").getElementsByTagName("span");
    //add span 10 
    
    // Ten test rendom 
    let tenTest = Tests.getTests(questions, 20);
    demoTranslate.innerText = index + 1 + ". " + tenTest[index].answer;
    //if buttom word clicked in demo buttona choose
    demoButtonWord.addEventListener("click", (e) => {
        Tests.addWordToDemoAnswer(e.target)
    })
    //if buttom word clicked in demo check
    demoChek.addEventListener("click", (e) => {
        Tests.addWordToDemoAnswer(e.target)

    })


    // correct and wrong index
    var correct = 0;
    var wrong = 0;
    //Check annswer
        Tests.putTest(tenTest[index]);
        showAnswerButton.addEventListener("click", (e) => {
            
          
            if(index < tenTest.length) {
            if (Tests.checkIsEmptyDemoWord()) {
                if (Tests.checkIsCorrect()) {
                    demoButtonWord.innerHTML = `<span class='correctAnswer'>Офарин! Шумо дурст ҷавоб додед! <br> ${tenTest[index].question} </span>`;
                    Tests.removeClass();
                    showAnswerButton.disabled = true;
                    nextQuestion.disabled = false
                    spans[index].style.background = 'green'
                    index++;
                    correct++
                } else {
                    demoButtonWord.innerHTML = `<span style='color: red;' class='correctAnswer'>
                    Шумо нодуруст ҷавоб додед! <br>Ҷавоби дуруст: 
                    <span style='color: teal;'>${tenTest[index].question} </span>
                     </span>`;
                    Tests.removeClass();
                    showAnswerButton.disabled = true;
                    nextQuestion.disabled = false
                    spans[index].style.background = 'red'
                    index++;
                    wrong++;
                }
            } else {
                Tests.checkIsEmptyDemoWord()
            }
            if (index < tenTest.length ) {
                nextQuestion.addEventListener("click", () => {
                    demoChek.innerHTML = ''
                    Tests.putTest(tenTest[index]);
                    showAnswerButton.disabled = false;
                    nextQuestion.disabled = true
                    demoTranslate.innerText = index + 1 + ". " + tenTest[index].answer;

                })} else{
                    nextQuestion.style.display = 'none'
                    showAnswerButton.style.display ='none'
                    newWorkButton.style.display = ''
                    newTest.style.display = ''
                    newWorkButton.onclick = (e) => {
                        demoChek.innerHTML = ''
                        demoTranslate.innerHTML = ''
                        demoButtonWord.innerHTML = `
                        <div class="ansewrAll">
                        <p>Ҷавоби дуруст кор кардаи шумо: ${correct} </p>
                        <p>Ҷавоби нодуруст кор кардаи шумо: ${wrong}</p>
                    </div>
                        `
                    }
                }
            } 
        })
       

   
}


// Infinity test
function beOkhir(e) {
    e.target.parentElement.style.display = 'none'
    section.style.display = ''
    lines.style.display = 'none'
    Tests.putTest(randomTest());
    demoButtonWord.addEventListener("click", (e) => {
        Tests.addWordToDemoAnswer(e.target)
    })
    //if buttom word clicked in demo check
    demoChek.addEventListener("click", (e) => {
        Tests.addWordToDemoAnswer(e.target)
    })



    showAnswerButton.onclick = ()=> {
        if(Tests.checkIsEmptyDemoWord()){
            if(Tests.checkIsCorrect()){
                Tests.removeClass()
                demoButtonWord.innerHTML = `<span class='correctAnswer'>Офарин! Шумо дурст ҷавоб додед! <br> ${Tests.question.question} </span>`;
                showAnswerButton.disabled = true;
                nextQuestion.disabled = false
            } else{
                showAnswerButton.disabled = true;
                nextQuestion.disabled = false
                Tests.removeClass();
                demoButtonWord.innerHTML = `<span style='color: red;' class='correctAnswer'>
                Шумо нодуруст ҷавоб додед! <br>Ҷавоби дуруст: 
                <span style='color: teal;'>${Tests.question.question} </span>
                 </span>`;
            }
        }
    }

    nextQuestion.onclick = ()=>{
        demoButtonWord.innerHTML = ''
        demoChek.innerHTML =''
        Tests.putTest(randomTest());
        showAnswerButton.disabled = false;
        nextQuestion.disabled = true;
    }


}



//get Random  test;
function randomTest() {
    var test = questions[Math.floor(Math.random() * questions.length)]
    return test;
}