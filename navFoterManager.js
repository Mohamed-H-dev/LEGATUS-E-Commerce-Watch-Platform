import { StorageManager } from "./Sign/StorageManager.js"


const users = StorageManager.load("users") || [];
console.log(users);
let accountLink = "#";
class SpecialNav extends HTMLElement{
connectedCallback(){
  users.forEach(data=>{
    console.log(data.role);
    if(data.role === 'customer'){
      this.innerHTML=`
    
      <nav class="navbar navbar-expand-lg px-4 ">
       <div class="container-fluid d-flex px-5 gap-3">
         <a class="navbar-brand  fw-bolder m-0" href="index.html">Legatus
           <a> <div class="dropdown position-relative d-flex d-lg-none align-items-center gap-4">
             <!-- Shopping Bag Icon -->
             <a href="./Shopping Cart/Cart.html" class="fa-solid text-white  fa-bag-shopping fs-4 me-2"></a>
           
             <!-- User Icon with Dropdown Toggle -->
             <a class="nav-link dropdown p-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               <i class="fa-solid fa-user fs-4"></i>
             </a>
           
             <!-- Dropdown Menu -->
             <ul class="dropdown-menu">
               <li><span class="dropdown-header">${data.role}</span></li>
               <li><h1 class="dropdown-item-text h1 fs-6">${data.name}</h1></li>
               <li><a class="dropdown-item" href="../Customer Dashboard/customer-dashboard.html">My Account</a></li>
               <li><hr class="dropdown-divider"></li>
               <li><a class="dropdown-item" href="../Sign/Sign.html">Logout</a></li>
             </ul>
           </div></a></a>
           <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <i class="fa-solid fa-bars text-light fs-1"></i>
           </button>
           <div class="collapse navbar-collapse gap-2" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto fs-6 mb-2 gap-4  mb-lg-0">
               <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="index.html">Home</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="productCatalog.html">Shop</a>
               </li> 
               <li class="nav-item">
                 <a class="nav-link" href="ContactUs.html">Contact Us</a>
               </li>
             </ul>
             <form class="d-flex align-items-center rounded  bg-white flex-grow-1" role="search">
               <input id="search_input" class="form-control  border-0 me-2" type="search" placeholder="Search" aria-label="Search">
               <i class="fa-solid search_icon fs-5 me-2 fa-magnifying-glass"></i>
             </form>
         </div>
         <div class="dropdown position-relative d-none d-lg-flex align-items-center gap-3">
           <!-- Shopping Bag Icon -->
           <a href="./Shopping Cart/Cart.html" class="fa-solid text-white  fa-bag-shopping fs-4 me-2"></a>
         
           <!-- User Icon with Dropdown Toggle -->
           <a class="nav-link dropdown p-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <i class="fa-solid fa-user fs-4"></i>
           </a>
         
           <!-- Dropdown Menu -->
           <ul class="dropdown-menu">
            <li><span class="dropdown-header">${data.role}</span></li>
               <li><h1 class="dropdown-item-text h1 fs-6">${data.name}</h1></li>
               <li><a class="dropdown-item" href="../Customer Dashboard/customer-dashboard.html">My Account</a></li>
               <li><hr class="dropdown-divider"></li>
               <li><a class="dropdown-item" href="../Sign/SignIn.html">Logout</a></li>
           </ul>
         </div>
       </div>   
     </nav>
     `
    }else if(data.role ==='seller'){
      this.innerHTML=`
    
      <nav class="navbar navbar-expand-lg px-4 ">
       <div class="container-fluid d-flex px-5 gap-3">
         <a class="navbar-brand  fw-bolder m-0" href="index.html">Legatus
           <a> <div class="dropdown position-relative d-flex d-lg-none align-items-center gap-4">
             <!-- Shopping Bag Icon -->
             <a href="./Shopping Cart/Cart.html" class="fa-solid text-white  fa-bag-shopping fs-4 me-2"></a>
           
             <!-- User Icon with Dropdown Toggle -->
             <a class="nav-link dropdown p-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               <i class="fa-solid fa-user fs-4"></i>
             </a>
           
             <!-- Dropdown Menu -->
             <ul class="dropdown-menu">
               <li><span class="dropdown-header">${data.role}</span></li>
               <li><h1 class="dropdown-item-text h1 fs-6">${data.name}</h1></li>
               <li><a class="dropdown-item" href="../Seller DashBoard/SellerDashboard.html">My Dashboard</a></li>
               <li><hr class="dropdown-divider"></li>
               <li><a class="dropdown-item" href="../Sign/SignIn.html">Logout</a></li>
             </ul>
           </div></a></a>
           <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <i class="fa-solid fa-bars text-light fs-1"></i>
           </button>
           <div class="collapse navbar-collapse gap-2" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto fs-6 mb-2 gap-4  mb-lg-0">
               <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="index.html">Home</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="productCatalog.html">Shop</a>
               </li> 
               <li class="nav-item">
                 <a class="nav-link" href="ContactUs.html">Contact Us</a>
               </li>
             </ul>
             <form class="d-flex align-items-center rounded  bg-white flex-grow-1" role="search">
               <input id="search_input" class="form-control  border-0 me-2" type="search" placeholder="Search" aria-label="Search">
               <i class="fa-solid search_icon fs-5 me-2 fa-magnifying-glass"></i>
             </form>
         </div>
         <div class="dropdown position-relative d-none d-lg-flex align-items-center gap-3">
           <!-- Shopping Bag Icon -->
           <a href="./Shopping Cart/Cart.html" class="fa-solid text-white  fa-bag-shopping fs-4 me-2"></a>
         
           <!-- User Icon with Dropdown Toggle -->
           <a class="nav-link dropdown p-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <i class="fa-solid fa-user fs-4"></i>
           </a>
         
           <!-- Dropdown Menu -->
           <ul class="dropdown-menu">
            <li><span class="dropdown-header">${data.role}</span></li>
               <li><h1 class="dropdown-item-text h1 fs-6">${data.name}</h1></li>
               <li><a class="dropdown-item" href="../Seller DashBoard/SellerDashboard.html">My Dashboard</a></li>
               <li><hr class="dropdown-divider"></li>
               <li><a class="dropdown-item" href="../Sign/SignIn.html">Logout</a></li>
           </ul>
         </div>
       </div>   
     </nav>
     `
    }else if(data.role === 'admin'){
      this.innerHTML=`
    
      <nav class="navbar navbar-expand-lg px-4 ">
       <div class="container-fluid d-flex px-5 gap-3">
         <a class="navbar-brand  fw-bolder m-0" href="index.html">Legatus
           <a> <div class="dropdown position-relative d-flex d-lg-none align-items-center gap-4">
             <!-- Shopping Bag Icon -->
             <a href="./Shopping Cart/Cart.html" class="fa-solid text-white  fa-bag-shopping fs-4 me-2"></a>
           
             <!-- User Icon with Dropdown Toggle -->
             <a class="nav-link dropdown p-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               <i class="fa-solid fa-user fs-4"></i>
             </a>
           
             <!-- Dropdown Menu -->
             <ul class="dropdown-menu">
               <li><span class="dropdown-header">${data.role}</span></li>
               <li><h1 class="dropdown-item-text h1 fs-6">${data.name}</h1></li>
               <li><a class="dropdown-item" href="AdminDashboard.html">My Dashboard</a></li>
               <li><hr class="dropdown-divider"></li>
               <li><a class="dropdown-item" href="../Sign/SignIn.html">Logout</a></li>
             </ul>
           </div></a></a>
           <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <i class="fa-solid fa-bars text-light fs-1"></i>
           </button>
           <div class="collapse navbar-collapse gap-2" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto fs-6 mb-2 gap-4  mb-lg-0">
               <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="index.html">Home</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="productCatalog.html">Shop</a>
               </li> 
               <li class="nav-item">
                 <a class="nav-link" href="ContactUs.html">Contact Us</a>
               </li>
             </ul>
             <form class="d-flex align-items-center rounded  bg-white flex-grow-1" role="search">
               <input id="search_input" class="form-control  border-0 me-2" type="search" placeholder="Search" aria-label="Search">
               <i class="fa-solid search_icon fs-5 me-2 fa-magnifying-glass"></i>
             </form>
         </div>
         <div class="dropdown position-relative d-none d-lg-flex align-items-center gap-3">
           <!-- Shopping Bag Icon -->
           <a href="./Shopping Cart/Cart.html" class="fa-solid text-white  fa-bag-shopping fs-4 me-2"></a>
         
           <!-- User Icon with Dropdown Toggle -->
           <a class="nav-link dropdown p-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <i class="fa-solid fa-user fs-4"></i>
           </a>
         
           <!-- Dropdown Menu -->
           <ul class="dropdown-menu">
            <li><span class="dropdown-header">${data.role}</span></li>
               <li><h1 class="dropdown-item-text h1 fs-6">${data.name}</h1></li>
               <li><a class="dropdown-item" href="AdminDashboard.html">My Dashboard</a></li>
               <li><hr class="dropdown-divider"></li>
               <li><a class="dropdown-item" href="../Sign/SignIn.html">Logout</a></li>
           </ul>
         </div>
       </div>   
     </nav>
     `
    }
  })
    
}
}

const logOut = Array.from(document.querySelectorAll('.dropdown-item'))
.find(data => data.textContent.trim() === "Logout");
if(logOut){
  logOut.addEventListener('click', ()=>{
    console.log("clicked")
    /* localStorage.removeItem('currentUser') */
  })
}

class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <footer class="footer text-white pt-5 pb-3 mt-5" style="  background-color: #002f5f;">
  <div class="container">
    <div class="d-flex flex-column flex-md-row text-center text-md-start">
      
      <!-- Brand / About -->
      <div class="flex-fill px-3 mb-4 mb-md-0">
        <h5 class="text-uppercase text-center text-md-start">WatchStore</h5>
        <p class="small text-white">Discover timeless elegance with our curated <br> selection of luxury watches from top global brands.</p>
      </div>

      <!-- Quick Links -->
      <div class="flex-fill px-3 mb-4 mb-md-0">
        <h6 class="text-uppercase mb-3 text-center text-md-start">Quick Links</h6>
        <ul class="list-unstyled small">
          <li><a href="index.html" class="text-white text-decoration-none">Home</a></li>
          <li><a href="productCatalog.html" class="text-white text-decoration-none">Shop</a></li>
          <li><a href="ContactUs.html" class="text-white text-decoration-none">Contact Us</a></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="flex-fill px-3">
        <h6 class="text-uppercase mb-3 text-center text-md-start">Contact Us</h6>
        <p class="small text-white mb-1">📍 123 Luxury Ave, Cairo, Egypt</p>
        <p class="small text-white mb-1">📞 +20 123 456 789</p>
        <p class="small text-white mb-3">✉️ info@watchstore.com</p>
        <div class="d-flex justify-content-center justify-content-md-start gap-3">
          <a href="#" class="text-white fs-5"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-white fs-5"><i class="bi bi-instagram"></i></a>
          <a href="#" class="text-white fs-5"><i class="bi bi-twitter"></i></a>
        </div>
      </div>

    </div>
  </div>
</footer>
        `
    }
    }
    
    customElements.define('special-nav', SpecialNav)
    customElements.define('special-footer', SpecialFooter)