
window.addEventListener('load', ()=>{
    let container = document.getElementById('cardswrapper')

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

    loadAllProducts();
});


