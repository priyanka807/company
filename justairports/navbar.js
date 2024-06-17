// let navbar = document.getElementById("navbar")

// navbar.innerHTML=`

 <nav class="navbar navbar-expand-lg "  style="background-color: #2a2867;">
        <div class="p-15  p-lg-3">

          <div class="navbar-toggle  navbar-toggler"  data-bs-toggle="collapse" id="menu_item"data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars  text-white"></i>
          </div>

         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div id="borderWhite"></div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="navbarItems">
                <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Online Booking</a>
                </li>

                <li class="nav-item">
                <a class="nav-link" href="#">Prices</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Account</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Careers</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Careers Driver</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
                </li>

                <li>
                <a class="nav-link" href="#">Login</a>
                </li>


                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle  " href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false"  id="Airport">
                        Airports
                    </a>

                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Heathrow Airport</a></li>
                        <li><a class="dropdown-item" href="#">Gatwick Airport</a></li>
                        <li><a class="dropdown-item" href="#">Luton Airport</a></li>
                        <li><a class="dropdown-item" href="#">Stansted Airport</a></li>

                        <li><a class="dropdown-item" href="#">City Airport</a></li>
                        <li><a class="dropdown-item" href="#">Southend Airport</a></li>

                    </ul>
                </li>
            </ul>

        </div> 
          
        </div>
      </nav> 
`



let selected 

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
`