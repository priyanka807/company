
// <!-- JAVASCRIPT LOGIC FOR NAVBAR SECTION -->


let selected 
function  activeClass(targetElement){
 
  if(selected){
      selected.classList.remove('high')
    }
  
 
    selected = targetElement
   

    selected.classList.add('high')
  
}


document.getElementById('navbarItems').addEventListener("click",function(event){
  const targetElement = event.target
     activeClass(targetElement)

})






menu_brand.addEventListener('click', function (event) {

  menu_brand.style.color = '#fff';
});


menu_item.addEventListener('click',function(event){
 
borderWhite.classList.toggle('border_white')

})


document.querySelectorAll('.document-item').forEach((item)=>{
item.addEventListener('click',(event)=>{
event.preventDefault();
event.stopPropagation()
})
})

// <!-- JAVASCRIPT LOGIC FOR NAVBAR SECTION -->


/* login javascript  start */


const login_form = document.getElementById('login_form');
const loginsubmit = document.getElementById('loginsubmit');
const Phonenumber = document.getElementById('Phonenumber');
const password = document.getElementById('password');

login_form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    const formObject = Object.fromEntries(formData.entries())
    console.log( formObject  ,'formObject')
    localStorage.setItem("LOGIN_DATA",JSON.stringify(formObject))
   const data =  JSON.parse(localStorage.getItem("LOGIN_DATA"))
 
   window.location  = "./about.html"

});


      /* login javascript  end */









