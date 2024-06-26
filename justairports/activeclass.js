

const navlinks = document.querySelectorAll('.nav-link')
navlinks.forEach((navItems)=>{
    navItems.addEventListener('click',()=>{
    document.querySelector('.active')?.classList.remove('active')
    navItems.classList.add('active')
    })
})



const itemsdisplay = document.getElementById('itemsdisplay')

const itemsContent = [1,2,3,4,5]
itemsContent.map((items)=>{

    // const createul = document.createElement('ul')
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`items ${items}`))
//   li.innerText = `items ${items}`
  itemsdisplay.appendChild(li)

  li.addEventListener('click',()=>{
    const accessChildElement = itemsdisplay.getElementsByTagName('li')
    for(const child of accessChildElement){
        child.classList.remove('active')
        child.classList.add('inactive')
    }
    li.classList.remove('inactive')
    li.classList.add('active')

    console.log(accessChildElement,'accessChildElement')
  })
    


})


const head = document.querySelectorAll('.head')

head.forEach((headItems)=>{
    headItems.addEventListener('click',()=>{
    document.querySelector('.active')?.classList.remove('active')
    headItems.classList.add('active')

    const child = document.querySelectorAll('.child')
    child.forEach((childItems)=>{

        childItems.classList.remove('pink_background')
        // console.log( childItems  ,'childItems ')
    })

    // const parent = headItems.parentElement
    //  const accessChild = parent.querySelector('.child')
    //      accessChild.classList.add('pink_background')
    headItems.nextElementSibling.classList.add('pink_background')
    })

})

function toggleBackground(toggleContent){
    const container_items = document.querySelectorAll('.container_items')



    container_items.forEach((container_items)=>{

        const p = container_items.querySelectorAll('p')
        if(container_items.id===toggleContent){

               p.forEach((p)=>{
 p.classList.remove('background_skyblue')
            console.log(true,'container_items')
        })
        }else{
            p.forEach((p)=>{
                p.classList.add('background_skyblue')
                           console.log(true,'container_items')
                       })
        }



    })

}