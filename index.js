let accodian = document.getElementsByClassName("FAQ_title_button");
// Adding event listener to all FAQ buttons 
for(let i=0 ;i<accodian.length ; i++){
    accodian[i].addEventListener("click" , function(){
        if (this.childNodes[1].classList.contains("fa-plus")) {          // "this" keyword refers to current element
            this.childNodes[1].classList.remove("fa-plus");             //  Adding or removing plus button
            this.childNodes[1].classList.add("fa-times");                // ist child of FAQ button is <i> plus icon
        } else {
            this.childNodes[1].classList.remove("fa-times");
            this.childNodes[1].classList.add("fa-plus");
        }
        
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}