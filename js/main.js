let header = document.querySelector('.header');
let menu = document.querySelector('.header .menu');
console.log(menu);
let btnnav = document.querySelector('.nav_mobile');
console.log(header);
btnnav.onclick = ()=>{
    console.log("hello");
}

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 100)
    {
        header.style.position ='fixed';
        header.style.height ='7%';
        header.style.backgroundColor = '#2a2929';
        header.style.zIndex = '2';
    }
    else if(window.pageYOffset < 100)
    {
        header.style.position ='relative';
        header.style.height ='8%';
        header.style.backgroundColor = '#2a2929';
        header.style.zIndex = '2';
    }
})