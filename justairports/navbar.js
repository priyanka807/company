

document.getElementById('navbarItems').addEventListener("click",function(event){
  const targetElement = event.target
     activeClass(targetElement)

})


function  activeClass(targetElement){
  
  if(selected){
      selected.classList.remove('high')
    }
    selected = targetElement
    selected.classList.add('high')
  
}




menu_brand.addEventListener('click', function (event) {

  menu_brand.style.color = '#fff';
});


menu_item.addEventListener('click',function(event){
 
borderWhite.classList.toggle('border_white')

})


