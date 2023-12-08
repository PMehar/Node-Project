function registerInventory(e) {
    e.preventDefault();
    alert("inventory updated");

    var item_name = document.getElementById('name').value;
    var description = document.getElementById('description').value;
    var price = document.getElementById('price').value;
    var quantity = document.getElementById('quantity').value;

    e.target.reset(); 

    var obj = {
        item_name, description, price , quantity
    };

    axios.post("http://localhost:3000/inventory/add-inventory", obj)
        .then((response) => {
            DispInventory(response.data.newInventoryDetails); 
            console.log(response.data.newInventoryDetails);
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong... in post request <h4>"
            console.log(err)
        })
}
window.addEventListener("DOMContentLoaded", () => {
    const data = axios.get("http://localhost:3000/inventory/get-inventories")
        .then((response) => {
            //console.log(response)
            for (var i = 0; i < response.data.allInventories.length; i++) {
                DispInventory(response.data.allInventories[i]);
                console.log(response.data.allInventories[i]);
            }
        })
        .catch((err) => {
            console.log(err)
        })
})
function DispInventory(obj) {
    var pElement = document.getElementById('list');
    var cElement = document.createElement('li');
    cElement.textContent = obj.item_name + " - " + obj.description+ " - " + obj.price + " - "+ obj.quantity;
    cElement.style.fontSize = "1.3rem";

    var Buy_1 = document.createElement('input');
    Buy_1.type = 'button';
    Buy_1.value = 'Buy 1';
    // Buy_1.style.backgroundColor = "rgb(236, 160, 160)";
    Buy_1.style.margin = "0 0 0 1rem ";
    Buy_1.style.padding= "0.2rem 0.5rem";

    function deleteInventory(inventoryId) {
        axios.delete('http://localhost:3000/Inventory/delete-Inventory/'+inventoryId)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    var Buy_2 = document.createElement('input');
    Buy_2.type = 'button';
    Buy_2.value = 'Buy 2';
    // Buy_2.style.backgroundColor = "rgb(145, 225, 189)";
    Buy_2.style.margin = "0 0 0 1rem ";
    Buy_2.style.padding= "0.2rem 0.5rem";

    var Buy_3 = document.createElement('input');
    Buy_3.type = 'button';
    Buy_3.value = 'Buy 3';
    // Buy_3.style.backgroundColor = "rgb(145, 255, 189)";
    Buy_3.style.margin = "0 0 0 1rem ";
    Buy_3.style.padding= "0.2rem 0.5rem";

    function editInventory(inventoryId) {
        // axios.put('http://localhost:3000/expence/edit-expence/'+expenceId)
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
        console.log()
    }
    cElement.appendChild(Buy_1);
    cElement.appendChild(Buy_2);
    cElement.appendChild(Buy_3);

    Buy_1.onclick = () => {
        pElement.removeChild(cElement); 
        cElement.textContent = obj.item_name + " - " + obj.description+ " - " + obj.price + " - "+ obj.quantity-1;
        deleteInventory(obj.id);
    }
    
    Buy_2.onclick = () => {
        pElement.removeChild(cElement);
        deleteInventory(obj.id);
        cElement.textContent = obj.item_name + " - " + obj.description+ " - " + obj.price + " - "+ obj.quantity-2;
    }

    Buy_3.onclick = () => {
        pElement.removeChild(cElement);
        deleteInventory(obj.id);
        cElement.textContent = obj.item_name + " - " + obj.description+ " - " + obj.price + " - "+ obj.quantity-3;
    }
    
    pElement.appendChild(cElement);
}