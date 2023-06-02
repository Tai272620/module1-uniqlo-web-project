let listProducts = JSON.parse(localStorage.getItem("listProducts"));
console.log(listProducts);

function renderListProductAdmin() {
    let result = "";
    for (let i = 0; i < listProducts.length; i++) {
        result += `
            <div class="product-item">
                <div class="product-item-image">
                    <img src=".${listProducts[i].img}" alt="">
                </div>
                <div class="product-item-info">
                    <h5>${listProducts[i].name}</h5>
                    <p>$300</p>
                    <p>in stock: ${listProducts[i].stock}</p>
                    <div class="product-item-button">
                        <button onclick="decreaseItem(this, ${i})">
                            <span class="material-symbols-outlined">
                                remove
                            </span>
                        </button>
                        <button onclick="increaseItem(this, ${i})">
                            <span class="material-symbols-outlined">
                                add
                            </span>
                        </button>
                    </div>
                </div>
                <div class="product-item-close-button">
                    <span class="material-symbols-outlined" onclick = "deleteCartProductItem(${i})">
                        close
                    </span>
                </div>
            </div>
        `;
    }
    // console.log(result)
    document.querySelector(".listProducts-container").innerHTML = result;
}
renderListProductAdmin();

// Hàm tăng số lượng sản phẩm

function increaseItem(element, index) {
    console.log(element, index);
    listProducts[index].stock += 1;
    localStorage.setItem("listProducts", JSON.stringify(listProducts));
    renderListProductAdmin();
}

// Hàm giảm số lượng sản phẩm

function decreaseItem(element, index) {
    console.log(element, index);
    if (listProducts[index].stock >= 1) {
        listProducts[index].stock -= 1;
        localStorage.setItem("listProducts", JSON.stringify(listProducts));
        renderListProductAdmin();
    }
}

// Hàm xoá sản phẩm 

function deleteCartProductItem(index) {
    console.log(index);
    listProducts.splice(index, 1);
    localStorage.setItem("listProducts", JSON.stringify(listProducts));
    renderListProductAdmin();
}