const loadProduct = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => displayProduct(json));
};

const loadProductBtn = (id) => {
    manageSpiner(true);
  console.log(id);
  const url = `https://fakestoreapi.com/products/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayProductCategory(data));
};

const loadCategory = async(id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  console.log(url);
  const res = await fetch(url);
  const details = await res.json();
  displayDetails(details);
};

const manageSpiner = (status) => {
    if(status == true){
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("product-inner").classList.add("hidden");
    }
    else{
        document.getElementById("product-inner").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");
    }

}
const url = "https://fakestoreapi.com/products";
const productContainer = document.getElementById("productHome");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.slice(0, 3).forEach((product) => {
      const productCard = document.createElement("div");
      productCard.innerHTML = `
    <div class="card bg-base-100 w-full shadow-sm">
                <figure class="bg-gray-100 p-6">
                    <img src=${product.image} alt="Shoes" class="w-[60%] h-64 object-container" />
                </figure>
                <div class="card-body">
                    <div class="flex justify-between items-center">
                        <div class="badge badge-soft badge-primary">${product.category}</div>
                        <div class="flex gap-1 items-center">
                            <i class="fa-solid fa-star text-yellow-500"></i> <span class="text-gray-500">$${product.rating.rate} (${product.rating.count})
                               </span>
                        </div>
                    </div>
                    <h3 class="card-title line-clamp-1">
                        ${product.title}
                    </h3>
                    <h4 class="text-black font-bold text-2xl">$${product.price}</h4>
                    <div class="flex justify-between card-actions pt-4">
                        <button class="btn btn-soft "  onclick="loadCategory(${product.id})">
                            <i class="fa-solid fa-eye"></i>
                            Details
                        </button>
                        <button class="btn btn-soft btn-primary ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add
                        </button>
                    </div>
                </div>
            </div>
    
    `;

      productContainer.appendChild(productCard);
    });
  });

// homepage end 
const displayDetails = (details) => {
    console.log("Details",details);
    const detailsBox = document.getElementById("details-container");
    detailsBox.innerHTML =`<div class="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">

  <!-- Product Image -->
  <div class="bg-gray-100 p-6 rounded-xl flex justify-center">
    <img src=${details.image}
         class="w-48 object-contain" />
  </div>

  <!-- Product Info -->
  <div>

    <!-- Category Badge -->
    <span class="badge badge-primary badge-outline mb-2">
      ${details.category}
    </span>

    <!-- Title -->
    <h2 class="text-xl font-bold text-gray-800 leading-snug">
      ${details.title}
    </h2>

    <!-- Rating -->
    <div class="flex items-center gap-2 mt-2">
      <i class="fa-solid fa-star text-yellow-500"></i>
      <span class="text-gray-600 text-sm">
        ${details.rating.rate} (${details.rating.count})
      </span>
    </div>

    <!-- Price -->
    <p class="text-3xl font-bold text-indigo-600 mt-3">
      $${details.price}
    </p>

    <!-- Description -->
    <p class="text-gray-500 mt-3 text-sm leading-relaxed">
      ${details.description}
    </p>

    <!-- Buttons -->
    <div class="flex gap-3 mt-5">
      <button class="btn btn-primary flex-1">
        Add to Cart
      </button>
      <button class="btn btn-outline flex-1">
        Buy Now
      </button>
    </div>

  </div>

</div>
`;
    document.getElementById("details_modal").showModal();
detailsBox.append(div)

}
const displayProductCategory = (catrgorys) => {
  const productInner = document.getElementById("product-inner");
  productInner.innerHTML = "";
  catrgorys.forEach((catrgory) => {
    console.log(catrgory);
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="card bg-base-100 w-full shadow-sm">
                <figure class="bg-gray-100 p-6">
                    <img src=${catrgory.image} alt="Shoes" class="w-[60%] h-64 object-container" />
                </figure>
                <div class="card-body">
                    <div class="flex justify-between items-center">
                        <div class="badge badge-soft badge-primary">${catrgory.category}</div>
                        <div class="flex gap-1 items-center">
                            <i class="fa-solid fa-star text-yellow-500"></i> <span class="text-gray-500">$${catrgory.rating.rate} (${catrgory.rating.count})
                               </span>
                        </div>
                    </div>
                    <h3 class="card-title line-clamp-1">
                        ${catrgory.title}
                    </h3>
                    <h4 class="text-black font-bold text-2xl">$${catrgory.price}</h4>
                    <div class="flex justify-between card-actions pt-4">
                        <button class="btn btn-soft " onclick="loadCategory(${
                          catrgory.id
                        })">
                            <i class="fa-solid fa-eye"></i>
                            Details
                        </button>
                        <button class="btn btn-soft btn-primary ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add
                        </button>
                    </div>
                </div>
            </div>
    
        
        `;

    productInner.appendChild(card);
  });
  manageSpiner(false);
  console.log(catrgorys);
};

const displayProduct = (products) => {
  const productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = "";

  for (let product of products) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        
<button onclick="loadProductBtn(\`${product}\`)" class="btn btn-outline btn-primary hover:bg-indigo-600 active:bg-indigo-600 focus:bg-indigo-600 focus:text-white">${product}</button>
        `;
    console.log(product);
    productContainer.append(btnDiv);
  }
};
loadProduct();
