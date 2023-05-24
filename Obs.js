//intersection Observer

let allLi= document.querySelectorAll("li")
console.log(allLi)
let liOption={
    root : null,
    rootMargin: '0px',
    threshold: 0.5,
}

let liobserver =new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('fade')
        } else{
            entry.target.classList.remove('fade')
        }
    }

    )
}, liOption)

allLi.forEach((li) => {
    liobserver.observe(li)
})

