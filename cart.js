let cartcontainer = document.getElementById("container")


let cardata = JSON.parse(localStorage.getItem("cart")) || []
if (cardata.length == 0) {
    cartcontainer.innerHTML =
        ` <h1>cart is empty</h1>`
}
else {
    let subtotal = 0;
    let total = 0;
    input = ""
    cardata.map((val) => {
        total += val.price
        input += `
          <tr>
                                    <td class="py-4">
                                        <div class="flex items-center">
                                            <img class="h-16 w-16 mr-4" src="${val.images[0]}"
                                                alt="Product image">
                                            <span class="font-semibold">${val.title}</span>
                                        </div>
                                    </td>
                                    <td class="py-4">${val.price}</td>
                                    <td class="py-4">
                                        <div class="flex items-center">
                                            <button class="border rounded-md py-2 px-4 mr-2">-</button>
                                            <span class="text-center w-8">1</span>
                                            <button class="border rounded-md py-2 px-4 ml-2">+</button>

                                        </div>
                                    </td>
                                    <td class="px-4 "><i class="fa-solid fa-trash" onclick="removeitem(${val.id})"></i></td>
                                    <td class="px-4 ">${val.price}</td>
                                </tr>
        `
    })
    cartcontainer.innerHTML = input
    function removeitem(id) {
        let result = cardata.find((e) => {
            return e.id == id
        })
        let ind = cardata.indexOf(result)
        cardata.splice(ind, 1)
        localStorage.setItem("cart", JSON.stringify(cardata))
        window.location.href = "cart.html"
        alert("product deleted")
    }
    function updatecart() {
        let itemcost = document.getElementById('subtotal')
        let totalcost = document.getElementById('totalcost')
        console.log(totalcost);
        itemcost.textContent = total.toFixed(2)
        let raju= total + 1.99
        totalcost.textContent =raju.toFixed(2)
    }
    updatecart()
}

