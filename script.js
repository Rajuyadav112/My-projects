let alldata = document.getElementById('Alldata')
let allproducts=""
fetch('https://dummyjson.com/products').then((e) => e.json()).then((data) => {
    Displaydata(data.products)
    console.log(data.products)
    allproducts=data.products
})
function Displaydata(data) {
    let input = ''
    data.map((e) => {
        input += `<div class="h-screen w-full flex items-center justify-center  bg-gray-200 dark:bg-gray-800">
  <!-- product card -->
  <article class="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
    <div>
      <img onclick="getId(${e.id})" class="object-cover h-64 w-full" src="${e.images[0]}" />
    </div>

    <div class="flex flex-col gap-1 mt-4 px-4">
      <h2 class="text-lg font-small text-gray-800 dark:text-gray-50">${e.
                title
            }
          
            </h2>
      <span class="font-normal text-gray-600 dark:text-gray-300">High Top(Lemon Yellow)</span>
      <span class="font-semibold text-gray-800 dark:text-gray-50">${e.price}</span>
    </div>

    <div class="flex gap-4 mt-4 px-4">
      <span class="sr-only">Colors available</span>

      <button aria-label="Yellow" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"></button>

      <button aria-label="Red" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"></button>

      <button aria-label="Blue" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"></button>

      <button aria-label="Black" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"></button>
    </div>

    <div class="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
      <button class="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
        <span class="text-base">Add to Cart</span>
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
  </article>
</div>

`
    })
    alldata.innerHTML = input
}

// let searchproduct = document.getElementById('Searchproduct')
// searchproduct.addEventListener('input', (event) => {
//     console.log(event.target.value)
//     let user = event.target.valuel;
//     fetch('https://dummyjson.com/products').then((e) => e.json()).then((data) => {
//         let filterdData = data.products.filter((val) => {
//             return val.title.toLowercase().includes(user.toLowercase())
//         })
//         Displaydata(filterdData)
//     })
        
// })

let searchproduct = document.getElementById('Searchproduct');

searchproduct.addEventListener('input', (event) => {
    console.log(event.target.value);
    let user = event.target.value;

    fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data) => {
            let filteredData = data.products.filter((val) => {
                return val.title.toLowerCase().includes(user.toLowerCase());
            });

            Displaydata(filteredData);
        });
});


function getId(id){
  console.log(id);
  let result =   allproducts.find((e)=>{return e.id==id})
  localStorage.setItem("uniquePRODUCT", JSON.stringify(result))
  window.location.href="productdesc.html"
}

let footer = document.getElementById('footer')
footer.innerHTML=`<!DOCTYPE html>
<html lang="en">
<body class="bg-black flex flex-col min-h-screen">

    <!-- Footer -->
    <footer class="bg-white shadow-lg mt-auto">
        <div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <!-- Column 1: Company Info -->
            <div>
                <h3 class="text-xl font-semibold text-gray-800">Company</h3>
                <p class="text-gray-500 mt-3">Delivering quality products with a seamless shopping experience.</p>
                <p class="text-gray-500 mt-2">© 2024 All rights reserved.</p>
            </div>

            <!-- Column 2: Quick Links -->
            <div>
                <h3 class="text-xl font-semibold text-gray-800">Quick Links</h3>
                <ul class="mt-3 space-y-2">
                    <li><a href="#" class="text-gray-500 hover:text-indigo-600 transition">Home</a></li>
                    <li><a href="#" class="text-gray-500 hover:text-indigo-600 transition">Shop</a></li>
                    <li><a href="#" class="text-gray-500 hover:text-indigo-600 transition">About Us</a></li>
                    <li><a href="#" class="text-gray-500 hover:text-indigo-600 transition">Contact</a></li>
                </ul>
            </div>

            <!-- Column 3: Customer Service -->
            <div>
                <h3 class="text-xl font-semibold text-gray-800">Customer Service</h3>
                <ul class="mt-3 space-y-2">
                    <li><a href="#" class="text-gray-500 hover:text-indigo-600 transition">FAQs</a></li>
                    <li><a href="#" class="text-gray-500 hover:text-indigo-600 transition">Shipping & Returns</a></li>
                    <li><a href="#" class="text-gray-500 hover:text-indigo-600 transition">Privacy Policy</a></li>
                    <li><a href="#" class="text-gray-500 hover:text-indigo-600 transition">Terms & Conditions</a></li>
                </ul>
            </div>

            <!-- Column 4: Newsletter Subscription -->
            <div>
                <h3 class="text-xl font-semibold text-gray-800">Stay Updated</h3>
                <p class="text-gray-500 mt-3">Subscribe to our newsletter for exclusive deals and updates.</p>
                <div class="mt-4 flex">
                    <input type="email" placeholder="Enter your email" class="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1">
                    <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-r-lg transition">
                        Subscribe
                    </button>
                </div>
            </div>
            
        </div>
        
        <!-- Bottom Bar -->
        <div class="border-t border-gray-200 mt-8 py-4 text-center text-gray-500 text-sm">
            Made with ❤️ by Aman Yadav </div>
    </footer>

</body>
</html>`