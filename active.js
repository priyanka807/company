// https://codesandbox.io/p/devbox/gifted-sea-lc7g4x?file=%2Fsrc%2FApp.tsx%3A16%2C37

const contentDisplay =  document.getElementById("content-display")

const data = [1, 2, 3, 4, 5];  ///nav items 


data.forEach((item) => {

    const createbutton = document.createElement('button');  //create button have 5 buttn element 
    createbutton.innerText = item;
    contentDisplay.appendChild(createbutton);
  

    const buttons = contentDisplay.getElementsByTagName('button');    

    createbutton.addEventListener('click', function() {

      // for (let btn of buttons) {
      // console.log(btn,'btn')
      //   btn.classList.remove('active');             
      //    btn.classList.add('inactive');                  
      // }
  
     
      // createbutton.classList.add('active');         
      //  createbutton.classList.remove('inactive');  
       
       document.querySelector('.active')?.classList.remove('active')
       createbutton.classList.add('active')

     
    });
  });



  //that case when you try to achieve active function giving same class name in all element  mostly used in navbar 


const navLinks = document.querySelectorAll('.nav-links')

navLinks.forEach((elem,i)=>{

  elem.addEventListener(('click'),()=>{
    document.querySelector('.active')?.classList.remove('active')

    elem.classList.add('active')
  })
})




  