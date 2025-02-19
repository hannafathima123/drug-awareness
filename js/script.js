let helpline = document.getElementById('helpline');
let table = document.getElementById('table');
const overlay = document.getElementById('overlay');

helpline.addEventListener("click", () => {
    if(table.style.display == "none") {
        table.style.display = "block";
        overlay.style.display = "block";
    }
    else {
        table.style.display = "none";
        overlay.style.display = "none";
    }
})

overlay.addEventListener("click", () => {
    table.style.display = "none";
    overlay.style.display = "none";
});

const productlist = document.getElementById('productlist');

window.addEventListener("load",function () {
   fetch("js/index.json")
   .then((response) => {
     if(!response.ok){
        throw new Error ("error in network response");
    }
    return response.json();
})
.then(data => {
    const listitems = data.products.map((product) => {
        const listitem = document.createElement("li");
        listitem.innerHTML = ` <div class="top">
                        <div class="image">
                            <img src=${product.image} alt="">
                        </div>
                    </div>
                    <div class="bottom">
                        <h2>${product.name}</h2>
                        <p>${product.description}</p>
                    </div>`;

        return listitems;
        });
        productlist.append(...listitems);
    })
        .catch((error) => {
        console.error("Error:", error);
        });
});

