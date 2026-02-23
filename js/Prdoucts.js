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
                    <img src=${product.image} alt="Shoes" class="w-[60%] h-50 object-container" />
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
                        <button class="btn btn-soft ">
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
