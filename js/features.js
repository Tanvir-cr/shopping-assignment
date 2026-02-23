const features = [
  {
    title: "Fast Delivery",
    desc: "Get your orders delivered to your doorstep quickly and efficiently.",
    icon: "fa-truck",
  },
  {
    title: "24/7 Support",
    desc: "Our support team is available around the clock to assist you.",
    icon: "fa-headset",
  },
  {
    title: "Secure Payment",
    desc: "Experience safe and secure transactions with our encrypted payment systems.",
    icon: "fa-lock",
  },
  {
    title: "Easy Returns",
    desc: "Not satisfied? Return your products easily within 30 days.",
    icon: "fa-rotate-left",
  },
];

const container = document.getElementById("featureContainer");

features.forEach((feature) => {
  const card = document.createElement("div");
  card.className =
    "bg-white p-6 rounded-lg shadow flex flex-col lg:h-full relative  lg:my-0 my-3";
  card.innerHTML = `
    <div class="absolute lg:-top-8 -top-6 p-3 rounded-lg card bg-indigo-50 border-2 border-white">
     <i class="fa-solid ${feature?.icon} text-primary text-2xl"></i>
                        
                    </div>
                    <h4 class="text-2xl pt-8 pb-3">${feature?.title}</h4>
                    <p class="flex-1">${feature?.desc}</p>
    
    `;

  container.appendChild(card);
});
