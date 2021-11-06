fetch("https://fakestoreapi.com/products/")
  .then((res) => {
    // console.log(data);
    return res.json();
  })
  .then((data) => {
    // console.log(completedata[2].title);

    let objectData = "";
    data.map((value) => {
      objectData += `<div class="card">
        <h2 class="product-title">${value.title}</h2>
        <img src=${value.image} alt="" class="picture" />
        <p class="description">${value.description}</p>
        <p class="price">${value.price}€</p>
      </div>`;
    });

    document.getElementById("products").innerHTML = objectData;
  })

  .catch((err) => {
    console.log(err);
  });
