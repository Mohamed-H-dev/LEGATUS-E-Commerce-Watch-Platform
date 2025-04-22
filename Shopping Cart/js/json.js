let myJson = [
    {
    "username": "Ahmed",
    "product": {
      "name": "Smart Watch",
      "id": "#12345",
      "color": "Black",
      "image": "./img/watch1.png",
      "price": "10.90 $",
      "quantity_in_cart": 2,
      "max_quantity": 5
    }
  }
  ,{
    "username": "Ali",
    "product": {
      "name": "Clasic Watch",
      "id": "#67890",
      "color": "selver",
      "image": "./img/watch2.png",
      "price": "18.90 $",
      "quantity_in_cart": 1,
      "max_quantity": 4
    }
  }
  ,{
    "username": "zeyad",
    "product": {
      "name": "modern  Watch",
      "id": "#4589",
      "color": "brown",
      "image": "./img/watch2.png",
      "price": "10.90 $",
      "quantity_in_cart": 2,
      "max_quantity": 5
    }
  }
]

// JSON.stringify(myJson);
localStorage.setItem("Cart", JSON.stringify(myJson));

// JSON.parse(localStorage.getItem("Cart"));