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




// Show pronoun sentences test

var showPron  = document.querySelector(".showPronounSent");
showPron.addEventListener("click", (e) => {
    var sent = document.querySelector('.sentenceWithP');
    if(sent.style.display == "none") {
        sent.style.display = 'block'
        e.target.innerText = 'Пушидани ҷавоб!'
    } else {
        sent.style.display = 'none'
        e.target.innerText = 'Намоиши ҷавоб!'

    }
})