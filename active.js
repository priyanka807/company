// https://codesandbox.io/p/devbox/gifted-sea-lc7g4x?file=%2Fsrc%2FApp.tsx%3A16%2C37

const contentDisplay =  document.getElementById("content-display")

const data = [1, 2, 3, 4, 5];


// function activeClass(){
//     for(let i = 1 ; i<=5;i++ ){
//         const button = document.createElement('button');
//     button.innerText = i;
//     contentDisplay.appendChild(button)

//     }
// }
// activeClass()




// data.map((item,index)=>{
//     const createbutton =  document.createElement('button')
//     createbutton.innerText =  item
//     // createbutton.add.Classlist('')
//     contentDisplay.appendChild(createbutton)

//     createbutton.addEventListener('click',function(){
//         const buttons = contentDisplay.getElementsByTagName('button');
//         console.log(buttons ,'buttons ')

        

//    if(item===createbutton.innerText){
//     console.log(item,'click')
//     console.log(createbutton.innerText,'click')

//     createbutton.classList.add('active')
//    }else{
//     createbutton.classList.add('inactive')
//     createbutton.classList.remove('active')


//    }
 




// })

// })


data.map((item) => {
    const createbutton = document.createElement('button');
    createbutton.innerText = item;
    contentDisplay.appendChild(createbutton);
  
    createbutton.addEventListener('click', function() {
      // Remove 'active' class from all buttons

      const buttons = contentDisplay.getElementsByTagName('button');   //home about section ->nav-links 
      console.log(buttons ,'buttons ')
  
  
  
      for (let btn of buttons) {
      console.log(btn,'btn')
        btn.classList.remove('active');             // this will not work first time  this will work second time    
        //  btn.classList.add('inactive');                  
      }
  
     
      createbutton.classList.add('active');         
       createbutton.classList.remove('inactive');        
    });
  });




const  navLinks = document.querySelectorAll(".nav-links")
navLinks.forEach((element,i)=>{
  element.addEventListener(('click'),()=>{
    document.querySelector('.active')?.classList.remove('active');
    element.classList.add('active')
  })
})
console.log(navLinks,'navLinks')


  