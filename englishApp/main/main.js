const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const list = document.querySelectorAll(".nav-links li")
   
    burger.addEventListener("click", () =>{ 
        nav.classList.toggle("nav-active")

        list.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
                return ''
            }
            link.style.animation = `navLink 0.5s ease forwards ${index / 7+1.2}s`;
        }) 


        // burger animation

        burger.classList.toggle("toggel")
    })


   
}
navSlide()

// body animation

var  alphabetLowerCase = ['a','b', 'c','d','e','f','g','h','i','j'
                        ,'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var  alphabetUpperCase = alphabetLowerCase.join(' ').toLocaleUpperCase().split(" ");
const alphabet = [...alphabetLowerCase, ...alphabetUpperCase];
const colors = ['#0efddd', '#fd0e91', '#0efd22',
                '#03fa93', '#fdd10e', '#ffa602', '#a1caff',
                '#db0a95', "#000000", '#006d67', "#072927", '#c705a7']
function createAlphabet() {
    var span = document.createElement("span");
    span.classList.add("alphabet");
    var random = Math.floor(Math.random() * alphabet.length);
    span.innerText = alphabet[random];
    span.style.color = colors[Math.floor(Math.random() * colors.length)]
    span.style.fontSize = Math.random() * 90 + "px"
    span.style.top = Math.random() * innerHeight + "px";
    span.style.left = Math.random() * innerWidth  + "px" ;
   
    var section = document.getElementsByClassName("demoAlphabet")[0];

    section.append(span);
    setTimeout(() =>{
        span.remove()
    }, 3000)
}

setInterval(createAlphabet, 100);


var startButton = document.querySelector(".startButton");
startButton.onclick = () => {
    document.location = '../lessons/index.html'
}

