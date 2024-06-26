
document.getElementById('apply_driver_form'),addEventListener('submit',(event)=>{
    event.preventDefault();
   let formData = new FormData(event.target)
   let formObject = Object.fromEntries(formData.entries())
   console.log( formObject,' formObject')


   let allFieldsFilled = true;
for(const  values of Object.values(formObject)){
//        if(values.trim()===""){
     
//     alert("Please fill out all fields")
//    }else{
//     alert("Form Successfully Submitted")

//    }
   if(values.trim()===""){
    allFieldsFilled = false;
   }

break;

}

if(!allFieldsFilled){
    alert("Please fill out all fields")
}else{
    alert("Form Successfully Submitted") 
}

//    let resultDiv = document.getElementById('result')
//    resultDiv.innerHTML = ''

//    for(const [key,value] of Object.entries(formObject)){
//     let p = document.createElement('p')
//     p.textContent = `${key}  ${value}`
//     resultDiv.appendChild(p)
//    }

   localStorage.setItem("formdata",JSON.stringify(formObject))
   const getFromLocalStorage =    JSON.parse(localStorage.getItem("formdata"))
   
    // console.log(getFromLocalStorage ,'getFromLocalStorage')
})


