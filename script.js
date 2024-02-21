
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el,index)=>{
    el.onclick = ()=>{
        
            const pageTurnId =  el.getAttribute('data-page');
            const pageTurn = document.getElementById(pageTurnId);
            if(pageTurn.classList.contains('turn')){
                pageTurn.classList.remove("turn");
                setTimeout(()=>{
                    pageTurn.style.zIndex = 20 - index;
                },500);
            }
            else
            {
                pageTurn.classList.add("turn");
                setTimeout(()=>{
                    pageTurn.style.zIndex = 20 + index;
                },500);
            }
       
    }
})

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBnt = document.querySelector('.btn.contact-me');
function delay_promise(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n);
    });
}
contactMeBnt.onclick = () =>{
    if(window.innerWidth > 915)
    {
        pages.forEach((el,index)=>{
            setTimeout(() => {
                el.classList.add('turn');
                setTimeout(()=>{
                    el.style.zIndex = 20 + index
                },500)
            }, (index+1)*200+100);
        })
    }
    else
    {
        
        let book_end = document.getElementById("book-end");
        var book_end_value = book_end.getBoundingClientRect();
        document.querySelector('.wrapper').scrollTo({
            top: book_end_value.top,
            behavior: 'smooth' 
        });
        delay_promise(1000).then(function(){
            if(!pages[pages.length-1].classList.contains('turn')){
                pages[pages.length-1].classList.add('turn');
            }
        });
        
        // pages.forEach((el,index))
    }
} 

const backProfileBtn = document.querySelector('.back-profile');
backProfileBtn.onclick = ()=>{
    if(window.innerWidth > 915)
    {
        for(let i=pages.length-1 ; i >=0 ; i--)
        {
            setTimeout(()=>{
                pages[i].classList.remove("turn"); 
                setTimeout(() => {
                    pages[i].style.zIndex = 10 - i;
            }, 500);
            },(i+1)*200+100)
        } 
    }
    else{
        delay_promise(1000).then(function(){
            if(pages[pages.length-1].classList.contains('turn')){
                pages[pages.length-1].classList.remove('turn');
            }
            delay_promise(1000).then(function(){
                document.querySelector('.wrapper').scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            })
        });
    }
}

function openEmail() {
    const emailAddress = "ledactien2002@gmail.com";
    let subject = "Message";
    let fullName = document.getElementById("fullName-message").value;
    let body = document.getElementById("content-message").value + "\n" + fullName;
    console.log("body",body);
    let mailtoLink = "mailto:" + encodeURIComponent(emailAddress) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    
    window.location.href = mailtoLink;
  }
document.getElementById('send-message').addEventListener("click",openEmail);

const warning = document.querySelector('.warning');
const warning_btn = document.querySelector('.warning-btn');
window.addEventListener('load',function(){
    if(window.innerWidth < 915)
    {
        warning.classList.add("warning-open");
    }
    else
    {
        warning.classList.remove("warning-open");
    }
});
window.addEventListener('resize',function(){
    if(window.innerWidth < 915)
    {
        warning.classList.add("warning-open");
    }
    else
    {
        warning.classList.remove("warning-open");
    }
});
warning_btn.onclick = ()=>{
    warning.classList.remove("warning-open");
}
const wrapper = document.querySelector('.wrapper');
const warning2 = document.querySelector('.warning2');
const warning3 = document.querySelector('.warning3');
let check_show = false;
wrapper.addEventListener('scroll', function() {
    if(!check_show)
    {
        var testElement = document.getElementById('mobile_check');
        var elementRect = testElement.getBoundingClientRect();
        var isVisible = elementRect.top <= window.innerHeight;
        // console.log( elementRect.top, window.innerHeight);
        if (isVisible) {
            check_show = true;
            warning2.classList.add("warning-open");
        }
    }  
});
document.querySelector('.warning2-btn').onclick = ()=>{
    warning2.classList.remove("warning-open");
    warning3.classList.add("warning-open");
}
document.querySelector('.warning3-btn').onclick = ()=>{
    warning3.classList.remove("warning-open");
}
