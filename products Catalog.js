import { initDB,saveData,load } from "./JS/storage.js";
import { LocalStorageManager } from "./Seller DashBoard/js/product.js";
window.addEventListener('load', ()=>{
  let container = document.getElementById('cardswrapper');
  let htmlContent = "";
  /* const loadProd = load('products')
  const allProducts = JSON.parse(loadProd);  */

 const storageManager = new LocalStorageManager();
 const sampleProducts = [{
  "id": 1,
  "name": "Analog Watch International",
  "image": "watches images/Analog watch International Watch.png",
  "brand": "International",
  "price": 120,
  "stock": 45,
  "gender": ["men", "women"],
  "description": "Classic analog watch with minimalist design, perfect for everyday wear. Features a stainless steel case and Japanese quartz movement."
},
{
  "id": 2,
  "name": "Bulgari Bangle Watch",
  "image": "watches images/Bulgari Watch Jewellery Bangle Bezel.png",
  "brand": "Bulgari",
  "price": 18500,
  "stock": 2,
  "gender": ["women"],
  "description": "Luxury jewelry watch combining Swiss precision with Italian design. 18k gold bangle with diamond bezel and mother-of-pearl dial."
},
{
  "id": 3,
  "name": "Bulgari Ring Watch",
  "image": "watches images/Bulgari Watch Jewellery Ring Luxury goods.png",
  "brand": "Bulgari",
  "price": 22000,
  "stock": 1,
  "gender": ["women"],
  "description": "Extraordinary ring watch with hidden time display. Set with brilliant-cut diamonds and crafted in rose gold."
},
{
  "id": 4,
  "name": "Casio Edifice",
  "image": "watches images/Casio Edifice Analog watch.png",
  "brand": "Casio",
  "price": 275,
  "stock": 32,
  "gender": ["men"],
  "description": "Solar-powered chronograph with tachymeter scale. 100m water resistant with stainless steel band and sapphire-coated glass."
},
{
  "id": 5,
  "name": "Citizen Eco-Drive",
  "image": "watches images/Citizen Holdings Eco-Drive Watch.png",
  "brand": "Citizen",
  "price": 325,
  "stock": 28,
  "gender": ["men", "women"],
  "description": "Light-powered technology eliminates battery changes. Features date display, luminous hands, and scratch-resistant mineral crystal."
},
{
  "id": 6,
  "name": "Hamilton Jazzmaster",
  "image": "watches images/Fender Jazzmaster Hamilton Watch.png",
  "brand": "Hamilton",
  "price": 1150,
  "stock": 15,
  "gender": ["men"],
  "description": "Inspired by musical instruments, this automatic watch features an open-heart design revealing the balance wheel."
},
{
  "id": 7,
  "name": "Vacheron Constantin Geneva Seal",
  "image": "watches images/Geneva Seal Vacheron Constantin Watch.png",
  "brand": "Vacheron Constantin",
  "price": 42000,
  "stock": 1,
  "gender": ["men"],
  "description": "Haute horology timepiece bearing the prestigious Geneva Seal. Manual-wind movement with 58-hour power reserve."
},
{
  "id": 8,
  "name": "Hamilton Automatic",
  "image": "watches images/Hamilton Watch Company Automatic watch.png",
  "brand": "Hamilton",
  "price": 850,
  "stock": 20,
  "gender": ["men"],
  "description": "American spirit with Swiss precision. Features H-10 movement with 80-hour power reserve and date function."
},
{
  "id": 9,
  "name": "Hamilton Classic",
  "image": "watches images/Hamilton Watch Company.png",
  "brand": "Hamilton",
  "price": 750,
  "stock": 25,
  "gender": ["men", "women"],
  "description": "Timeless design with Swiss quartz movement. Stainless steel case with sapphire crystal and 50m water resistance."
},
{
  "id": 10,
  "name": "Jaeger-LeCoultre Automatic",
  "image": "watches images/Jaeger LeCoultre Automatic watch.png",
  "brand": "Jaeger-LeCoultre",
  "price": 14800,
  "stock": 3,
  "gender": ["men"],
  "description": "Master Control Date with 70-hour power reserve. Silver sunray-brushed dial with applied indexes."
},
{
  "id": 11,
  "name": "Casio G-Shock Master",
  "image": "watches images/Master of G-Shock Shock-resistant watch Casio.png",
  "brand": "Casio",
  "price": 450,
  "stock": 38,
  "gender": ["men", "women"],
  "description": "Tactical shock-resistant watch with solar power and atomic timekeeping. Mud resistant with LED backlight."
},
{
  "id": 12,
  "name": "Jido Automatic",
  "image": "watches images/Jido Automatic watch Clock.png",
  "brand": "Jido",
  "price": 600,
  "stock": 10,
  "gender": ["men"],
  "description": "Mechanical automatic movement with exhibition caseback. Skeletonized dial showing the intricate movement."
}];

storageManager.setProducts(sampleProducts)
  let allprod = storageManager.getProducts();
    console.log(allprod)
    allprod.forEach(data =>{
              htmlContent +=` 
            <!-- Start Product Card -->
              <div class="card col text-center" data-product-id="${data.id}">
                <img  id="watch_img" src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title fw-normal">${data.name}</h5>
                  <p class="h5 ">EGP ${data.price}</p>
                </div>
              </div>
               <!-- End Product Card -->`
          });
 
  
  

        container.innerHTML = htmlContent;
        let cards =  document.getElementsByClassName("card");
        for(var i = 0; i<cards.length;i++){
          cards[i]  .addEventListener("click", function(){
            const productId = this.getAttribute('data-product-id');
            localStorage.setItem('currentProduct', productId);
            window.location.href = './Productdetails/productDetails.html' ;
          })//end click product card
        }
        
      
    });
    
   


   /*  let container = document.getElementById('cardswrapper');
     async function loadAllProducts(){
        let products = await fetch('./products.json')
        let allProducts = await products.json();
        let htmlContent = "";
        allProducts.forEach(data =>{
            htmlContent +=` 
          <!-- Start Product Card -->
            <div class="card col text-center">
              <img id="watch_img" src="${data.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title fw-normal">${data.name}</h5>
                <p class="h5 ">EGP ${data.price}</p>
              </div>
            </div>
             <!-- End Product Card -->`
        });
        container.innerHTML = htmlContent;
    } 
 */
/*     loadAllProducts();
});
 */

