
document.getElementById("contact_form").addEventListener('submit',(event)=>{
    event.preventDefault();

    const formData = new FormData(event.target)
  
    const formObject = Object.fromEntries(formData.entries())
 
    let allInputData = true 
    for(const values of Object.values(formObject)){
if(values.trim()===""){
    allInputData = false
}
break;
    }

    if(!allInputData){
        alert("Please Fill  Out All fields ")
    }else{
        alert("Form Submitted Successfully ")

    }

    localStorage.setItem("formData",JSON.stringify(formObject))
   const getFormData =  JSON.parse(localStorage.getItem("formData"))
   console.log( getFormData ,' getFormData ')

})