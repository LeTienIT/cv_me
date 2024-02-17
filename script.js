
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

contactMeBnt.onclick = () =>{
    pages.forEach((el,index)=>{
        setTimeout(() => {
            el.classList.add('turn');
            setTimeout(()=>{
                el.style.zIndex = 20 + index
            },500)
        }, (index+1)*200+100);
    })
} 

const backProfileBtn = document.querySelector('.back-profile');
backProfileBtn.onclick = ()=>{
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