const listeNav = document.querySelector('.liste-nav')
const menuBurger = document.querySelector('.menu-burger')

menuBurger.addEventListener('click',() => {

    listeNav.classList.toggle('active')
})

const allLinks = document.querySelectorAll('.item-nav')

allLinks.forEach(function(element){
        element.addEventListener('click',() => {
        listeNav.classList.toggle('active')
    })
});


// animation api
window.addEventListener('load', function() {
    const visible = document.querySelectorAll('.reveal')
    const ratio = 0.15
  
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: ratio,
    }; 
  
    function Anim(entries,observer){
        entries.forEach((e)=>{
            if(e.intersectionRatio > ratio){
                e.target.classList.add('reveal-visible')
                const delay = 1300;
                setTimeout(() => {
                    e.target.classList.remove("reveal-visible")
                    e.target.classList.remove("reveal");
                }, delay)
                observer.unobserve(e)
            }
        })
    }
    const observer = new IntersectionObserver(Anim, options);
    visible.forEach((e)=>{
        observer.observe(e)
    })
  });


