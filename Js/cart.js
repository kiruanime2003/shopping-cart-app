document.addEventListener("DOMContentLoaded", function () {

    var pizzaQuantity = 0, burgerQuantity = 0, friesQuantity = 0, hotDogsQuantity = 0, doughnutQuantity = 0, shawarmaQuantity = 0, finalQuantity = 0;

    var pizzaSvgIcons = Array.from(document.getElementsByClassName("item1"));
    var burgerSvgIcons = Array.from(document.getElementsByClassName("item2"));
    var friesSvgIcons = Array.from(document.getElementsByClassName("item3"));
    var hotDogsSvgIcons = Array.from(document.getElementsByClassName("item4"));
    var doughnutSvgIcons = Array.from(document.getElementsByClassName("item5"));
    var shawarmaSvgIcons = Array.from(document.getElementsByClassName("item6"));

    var quantityDisplay = Array.from(document.getElementsByClassName("quantity"));

    pizzaSvgIcons.forEach(item => item.addEventListener("click", function (event) {
        if (event.target.id == "plus1") pizzaQuantity++;

        else if (event.target.id == "minus1") {
            if (pizzaQuantity <= 0) pizzaQuantity = 0;
            else pizzaQuantity--;
        }

        else pizzaQuantity = pizzaQuantity;

        quantityDisplay[0].innerHTML = pizzaQuantity;
        calculateFinaLQuantity();
    }));

    burgerSvgIcons.forEach(item => item.addEventListener("click", function (event) {
        if (event.target.id == "plus2") burgerQuantity++;

        else if (event.target.id == "minus2") {
            if (burgerQuantity <= 0) burgerQuantity = 0;
            else burgerQuantity--;
        }

        else burgerQuantity = burgerQuantity;

        quantityDisplay[1].innerHTML = burgerQuantity;
        calculateFinaLQuantity();
    }));

    friesSvgIcons.forEach(item => item.addEventListener("click", function (event) {
        if (event.target.id == "plus3") friesQuantity++;

        else if (event.target.id == "minus3") {
            if (friesQuantity <= 0) friesQuantity = 0;
            else friesQuantity--;
        }

        else friesQuantity = friesQuantity;

        quantityDisplay[2].innerHTML = friesQuantity;
        calculateFinaLQuantity();
    }));

    hotDogsSvgIcons.forEach(item => item.addEventListener("click", function (event) {
        if (event.target.id == "plus4") hotDogsQuantity++;

        else if (event.target.id == "minus4") {
            if (hotDogsQuantity <= 0) hotDogsQuantity = 0;
            else hotDogsQuantity--;
        }

        else hotDogsQuantity = hotDogsQuantity;

        quantityDisplay[3].innerHTML = hotDogsQuantity;
        calculateFinaLQuantity();
    }));

    doughnutSvgIcons.forEach(item => item.addEventListener("click", function (event) {
        if (event.target.id == "plus5") doughnutQuantity++;

        else if (event.target.id == "minus5") {
            if (doughnutQuantity <= 0) doughnutQuantity = 0;
            else doughnutQuantity--;
        }

        else doughnutQuantity = doughnutQuantity;

        quantityDisplay[4].innerHTML = doughnutQuantity;
        calculateFinaLQuantity();
    }));

    shawarmaSvgIcons.forEach(item => item.addEventListener("click", function (event) {
        if (event.target.id == "plus6") shawarmaQuantity++;

        else if (event.target.id == "minus6") {
            if (shawarmaQuantity <= 0) shawarmaQuantity = 0;
            else shawarmaQuantity--;
        }

        else shawarmaQuantity = shawarmaQuantity;

        quantityDisplay[5].innerHTML = shawarmaQuantity;
        calculateFinaLQuantity();
    }));

    function calculateFinaLQuantity() {
        finalQuantity = pizzaQuantity + burgerQuantity + shawarmaQuantity + doughnutQuantity + hotDogsQuantity + friesQuantity;
        document.getElementById("view-cart-quantity").innerHTML = finalQuantity;
    }

    document.getElementById("cart-btn1").addEventListener("click", function () {
        document.getElementById("cart-page").hidden = false;
        document.getElementById("home-page").hidden = true;

        displayCartDetails();
    });

    document.getElementById("go-back").addEventListener("click", function () {
        document.getElementById("cart-page").hidden = true;
        document.getElementById("home-page").hidden = false;
    });

    function displayCartDetails() {

        var itemNameColumn = document.getElementById("item-name-col");
        var quantityColumn = document.getElementById("quantity-col");
        var costColumn = document.getElementById("cost-col");

        var pObject = {
            itemProperty: 0,
            quantityProperty: 0,
            costProperty: 0
        };

        var pPizza = Object.create(pObject);
        var pBurger = Object.create(pObject);
        var pFries = Object.create(pObject);
        var pHotDogs = Object.create(pObject);
        var pDoughNut = Object.create(pObject);
        var pShawarma = Object.create(pObject);

        if (pizzaQuantity >= 0) {

            if (pizzaQuantity === 0) {

                if ((document.getElementsByClassName("pizza-row")[0] || document.getElementsByClassName("pizza-row")[1] || document.getElementsByClassName("pizza-row")[2])) {

                    (document.getElementsByClassName("first-col")[0]).remove();
                    (document.getElementsByClassName("second-col")[0]).remove();
                    (document.getElementsByClassName("third-col")[0]).remove();
                    
                }
            }

            else {
                
                if (!(document.getElementsByClassName("pizza-row")[0] || document.getElementsByClassName("pizza-row")[1] || document.getElementsByClassName("pizza-row")[2])) {

                    //creates a new object from a existing object
                    pPizza.itemProperty = document.createElement("p");
                    pPizza.itemProperty.innerHTML = "Pizza";
                    itemNameColumn.appendChild(pPizza.itemProperty);
                    pPizza.itemProperty.classList.add("first-col");
                    pPizza.itemProperty.classList.add("pizza-row");

                    pPizza.quantityProperty = document.createElement("p");
                    pPizza.quantityProperty.innerHTML = pizzaQuantity;
                    quantityColumn.appendChild(pPizza.quantityProperty);
                    pPizza.quantityProperty.classList.add("second-col");
                    pPizza.quantityProperty.classList.add("pizza-row");

                    pPizza.costProperty = document.createElement("p");
                    pPizza.costProperty.innerHTML = "$" + 35 * pizzaQuantity;
                    costColumn.appendChild(pPizza.costProperty);
                    pPizza.costProperty.classList.add("third-col");
                    pPizza.costProperty.classList.add("pizza-row");
                }

                else {
                    document.getElementsByClassName("first-col")[0].innerHTML = "Pizza";
                    document.getElementsByClassName("second-col")[0].innerHTML = pizzaQuantity;
                    document.getElementsByClassName("third-col")[0].innerHTML = "$" + 35 * pizzaQuantity;
                }

            }
        }

        //burger calculation
        if (burgerQuantity >= 0) {

            if (burgerQuantity === 0) {

                if ((pizzaQuantity == 0) || (friesQuantity==0) || (hotDogsQuantity==0) || (doughnutQuantity==0) || (shawarmaQuantity==0) || (friesQuantity>0) || (hotDogsQuantity>0) || (doughnutQuantity>0) || (shawarmaQuantity>0) || (friesQuantity>0 && hotDogsQuantity>0) || (friesQuantity>0 && doughnutQuantity>0) || (friesQuantity>0 && shawarmaQuantity>0) || (hotDogsQuantity>0 && doughnutQuantity>0) || (hotDogsQuantity>0 && shawarmaQuantity>0) || (doughnutQuantity>0 && shawarmaQuantity>0) || (hotDogsQuantity>0 &&doughnutQuantity>0 && shawarmaQuantity>0) || (friesQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0) || (friesQuantity>0 && hotDogsQuantity>0 && shawarmaQuantity>0) || (friesQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0) || (friesQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0)) {

                    if (document.getElementsByClassName("burger-row")[0] || document.getElementsByClassName("burger-row")[1] || document.getElementsByClassName("burger-row")[2]) {

                        (document.getElementsByClassName("first-col")[0]).remove();
                        (document.getElementsByClassName("second-col")[0]).remove();
                        (document.getElementsByClassName("third-col")[0]).remove();
                    }
                }

                else if ((pizzaQuantity>0) || (pizzaQuantity>0 && friesQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0) || ( pizzaQuantity>0 && doughnutQuantity>0) || (pizzaQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0) || (pizzaQuantity>0 && friesQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && friesQuantity>0 && doughnutQuantity>0) || (pizzaQuantity>0 && friesQuantity>0 && hotDogsQuantity>0) || (pizzaQuantity>0 && friesQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0) || (pizzaQuantity>0 && friesQuantity>0 && hotDogsQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && friesQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && friesQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0)){

                    if (document.getElementsByClassName("burger-row")[0] || document.getElementsByClassName("burger-row")[1] || document.getElementsByClassName("burger-row")[2]) {

                        (document.getElementsByClassName("first-col")[1]).remove();
                        (document.getElementsByClassName("second-col")[1]).remove();
                        (document.getElementsByClassName("third-col")[1]).remove();
                    }
                }
            }

            else {

                //index one burger
                if((pizzaQuantity>0) || (pizzaQuantity>0 && friesQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0) || ( pizzaQuantity>0 && doughnutQuantity>0) || (pizzaQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0) || (pizzaQuantity>0 && friesQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && friesQuantity>0 && doughnutQuantity>0) || (pizzaQuantity>0 && friesQuantity>0 && hotDogsQuantity>0) || (pizzaQuantity>0 && friesQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0) || (pizzaQuantity>0 && friesQuantity>0 && hotDogsQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && friesQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && friesQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0)){

                    if (document.getElementsByClassName("burger-row")[0] || document.getElementsByClassName("burger-row")[1] || document.getElementsByClassName("burger-row")[2]) {

                        document.getElementsByClassName("first-col")[1].innerHTML = "Burger";
                        document.getElementsByClassName("second-col")[1].innerHTML = burgerQuantity;
                        document.getElementsByClassName("third-col")[1].innerHTML = "$" + 10 * burgerQuantity;
                    }

                    else if (!(document.getElementsByClassName("burger-row")[0] || document.getElementsByClassName("burger-row")[1] || document.getElementsByClassName("burger-row")[2])) {

                        console.log(burgerQuantity);
                        pBurger.itemProperty = document.createElement("p");
                        pBurger.itemProperty.innerHTML = "Burger";
                        itemNameColumn.appendChild(pBurger.itemProperty);
                        pBurger.itemProperty.classList.add("first-col");
                        pBurger.itemProperty.classList.add("burger-row");

                        pBurger.quantityProperty = document.createElement("p");
                        pBurger.quantityProperty.innerHTML = burgerQuantity;
                        quantityColumn.appendChild(pBurger.quantityProperty);
                        pBurger.quantityProperty.classList.add("second-col");
                        pBurger.quantityProperty.classList.add("burger-row");

                        pBurger.costProperty = document.createElement("p");
                        pBurger.costProperty.innerHTML = "$" + 10 * burgerQuantity;
                        costColumn.appendChild(pBurger.costProperty);
                        pBurger.costProperty.classList.add("third-col");
                        pBurger.costProperty.classList.add("burger-row");
                    }
                }

                //index zero burger
                else if ((pizzaQuantity == 0) || (friesQuantity==0) || (hotDogsQuantity==0) || (doughnutQuantity==0) || (shawarmaQuantity==0) || (friesQuantity>0) || (hotDogsQuantity>0) || (doughnutQuantity>0) || (shawarmaQuantity>0) || (friesQuantity>0 && hotDogsQuantity>0) || (friesQuantity>0 && doughnutQuantity>0) || (friesQuantity>0 && shawarmaQuantity>0) || (hotDogsQuantity>0 && doughnutQuantity>0) || (hotDogsQuantity>0 && shawarmaQuantity>0) || (doughnutQuantity>0 && shawarmaQuantity>0) || (hotDogsQuantity>0 &&doughnutQuantity>0 && shawarmaQuantity>0) || (friesQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0) || (friesQuantity>0 && hotDogsQuantity>0 && shawarmaQuantity>0) || (friesQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0) || (friesQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0)) {

                    if (!(document.getElementsByClassName("burger-row")[0] || document.getElementsByClassName("burger-row")[1] || document.getElementsByClassName("burger-row")[2])) {

                        console.log(burgerQuantity);
                        pBurger.itemProperty = document.createElement("p");
                        pBurger.itemProperty.innerHTML = "Burger";
                        itemNameColumn.appendChild(pBurger.itemProperty);
                        pBurger.itemProperty.classList.add("first-col");
                        pBurger.itemProperty.classList.add("burger-row");

                        pBurger.quantityProperty = document.createElement("p");
                        pBurger.quantityProperty.innerHTML = burgerQuantity;
                        quantityColumn.appendChild(pBurger.quantityProperty);
                        pBurger.quantityProperty.classList.add("second-col");
                        pBurger.quantityProperty.classList.add("burger-row");

                        pBurger.costProperty = document.createElement("p");
                        pBurger.costProperty.innerHTML = "$" + 10 * burgerQuantity;
                        costColumn.appendChild(pBurger.costProperty);
                        pBurger.costProperty.classList.add("third-col");
                        pBurger.costProperty.classList.add("burger-row");
                    }
                    else {

                        document.getElementsByClassName("first-col")[0].innerHTML = "Burger";
                        document.getElementsByClassName("second-col")[0
                        ].innerHTML = burgerQuantity;
                        document.getElementsByClassName("third-col")[0].innerHTML = "$" + 10 * burgerQuantity;
                    }
                }
            }

        }

        if (friesQuantity >= 0) {

            if (friesQuantity === 0) {

                if ((pizzaQuantity>0 && burgerQuantity>0) || (pizzaQuantity>0 && burgerQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && burgerQuantity>0 && doughnutQuantity>0) || (pizzaQuantity>0 && burgerQuantity>0 && hotDogsQuantity>0) || (pizzaQuantity>0 && burgerQuantity>0 && doughnutQuantity>0 &&shawarmaQuantity>0) || (pizzaQuantity>0 && burgerQuantity>0 && hotDogsQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && burgerQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0) || (pizzaQuantity>0 && burgerQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0)) {
                    
                    if (document.getElementsByClassName("fries-row")[0] || document.getElementsByClassName("fries-row")[1] || document.getElementsByClassName("fries-row")[2]) {

                       
                        (document.getElementsByClassName("first-col")[2]).remove();
                        (document.getElementsByClassName("second-col")[2]).remove();
                        (document.getElementsByClassName("third-col")[2]).remove();
                    }
                }

                else if ((pizzaQuantity>0) || (burgerQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0) || (pizzaQuantity>0 && doughnutQuantity>0) || (pizzaQuantity>0 && shawarmaQuantity>0) || (burgerQuantity>0 && hotDogsQuantity>0) || (burgerQuantity>0 && doughnutQuantity>0) || (burgerQuantity>0 && shawarmaQuantity>0) || (burgerQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0) || (burgerQuantity>0 && hotDogsQuantity>0 && shawarmaQuantity>0) || (burgerQuantity>0 && doughnutQuantity>0 && hotDogsQuantity>0) || (pizzaQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0) || (burgerQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0)) {

                    if (document.getElementsByClassName("fries-row")[0] || document.getElementsByClassName("fries-row")[1] || document.getElementsByClassName("fries-row")[2]) {
                        (document.getElementsByClassName("first-col")[1]).remove();
                        (document.getElementsByClassName("second-col")[1]).remove();
                        (document.getElementsByClassName("third-col")[1]).remove();
                    }
                }

                else if((pizzaQuantity==0) || (burgerQuantity==0) || (hotDogsQuantity==0) || (doughnutQuantity==0) || (shawarmaQuantity==0) || (hotDogsQuantity>0) || (doughnutQuantity>0) || (shawarmaQuantity>0) || (hotDogsQuantity>0 && doughnutQuantity>0) || (hotDogsQuantity>0 && shawarmaQuantity>0) || (doughnutQuantity>0 && shawarmaQuantity>0) || (hotDogsQuantity>0 &&  doughnutQuantity>0 && shawarmaQuantity>0)){
                    
                    if (document.getElementsByClassName("fries-row")[0] || document.getElementsByClassName("fries-row")[1] || document.getElementsByClassName("fries-row")[2]) {
                        (document.getElementsByClassName("first-col")[0]).remove();
                        (document.getElementsByClassName("second-col")[0]).remove();
                        (document.getElementsByClassName("third-col")[0]).remove();
                    }
                }
            }

            else {

                if ((pizzaQuantity>0 && burgerQuantity>0) || (pizzaQuantity>0 && burgerQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && burgerQuantity>0 && doughnutQuantity>0) || (pizzaQuantity>0 && burgerQuantity>0 && hotDogsQuantity>0) || (pizzaQuantity>0 && burgerQuantity>0 && doughnutQuantity>0 &&shawarmaQuantity>0) || (pizzaQuantity>0 && burgerQuantity>0 && hotDogsQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && burgerQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0) || (pizzaQuantity>0 && burgerQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0)) {

                    //index 2 fries
                    if (!(document.getElementsByClassName("fries-row")[0] || document.getElementsByClassName("fries-row")[1] || document.getElementsByClassName("fries-row")[2])) {
                        pFries.itemProperty = document.createElement("p");
                        pFries.itemProperty.innerHTML = "French fries";
                        itemNameColumn.appendChild(pFries.itemProperty);
                        pFries.itemProperty.classList.add("first-col");
                        pFries.itemProperty.classList.add("fries-row");

                        pFries.quantityProperty = document.createElement("p");
                        pFries.quantityProperty.innerHTML = friesQuantity;
                        quantityColumn.appendChild(pFries.quantityProperty);
                        pFries.quantityProperty.classList.add("second-col");
                        pFries.quantityProperty.classList.add("fries-row");

                        pFries.costProperty = document.createElement("p");
                        pFries.costProperty.innerHTML = "$" + 40 * friesQuantity;
                        costColumn.appendChild(pFries.costProperty);
                        pFries.costProperty.classList.add("third-col");
                        pFries.costProperty.classList.add("fries-row");
                    }
                    else {
                        document.getElementsByClassName("first-col")[2].innerHTML = "French fries";
                        document.getElementsByClassName("second-col")[2].innerHTML = friesQuantity;
                        document.getElementsByClassName("third-col")[2].innerHTML = "$" + 40 * friesQuantity;
                    }
                }

                //index 1 fries
                else if ((pizzaQuantity>0) || (burgerQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0) || (pizzaQuantity>0 && doughnutQuantity>0) || (pizzaQuantity>0 && shawarmaQuantity>0) || (burgerQuantity>0 && hotDogsQuantity>0) || (burgerQuantity>0 && doughnutQuantity>0) || (burgerQuantity>0 && shawarmaQuantity>0) || (burgerQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0) || (burgerQuantity>0 && hotDogsQuantity>0 && shawarmaQuantity>0) || (burgerQuantity>0 && doughnutQuantity>0 && hotDogsQuantity>0) || (pizzaQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0) || (burgerQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0) || (pizzaQuantity>0 && hotDogsQuantity>0 && doughnutQuantity>0 && shawarmaQuantity>0)) {

                    if (!(document.getElementsByClassName("fries-row")[0] || document.getElementsByClassName("fries-row")[1] || document.getElementsByClassName("fries-row")[2])) {

                        console.log(friesQuantity);
                        pFries.itemProperty = document.createElement("p");
                        pFries.itemProperty.innerHTML = "French fries";
                        itemNameColumn.appendChild(pFries.itemProperty);
                        pFries.itemProperty.classList.add("first-col");
                        pFries.itemProperty.classList.add("fries-row");

                        pFries.quantityProperty = document.createElement("p");
                        pFries.quantityProperty.innerHTML = friesQuantity;
                        quantityColumn.appendChild(pFries.quantityProperty);
                        pFries.quantityProperty.classList.add("second-col");
                        pFries.quantityProperty.classList.add("fries-row");

                        pFries.costProperty = document.createElement("p");
                        pFries.costProperty.innerHTML = "$" + 40 * friesQuantity;
                        costColumn.appendChild(pFries.costProperty);
                        pFries.costProperty.classList.add("third-col");
                        pFries.costProperty.classList.add("fries-row");
                    }
                    else {
                        document.getElementsByClassName("first-col")[1].innerHTML = "French fries";
                        document.getElementsByClassName("second-col")[1].innerHTML = friesQuantity;
                        document.getElementsByClassName("third-col")[1].innerHTML = "$" + 40 * friesQuantity;
                    }

                }

                //index 0 fries
                else if((pizzaQuantity==0) || (burgerQuantity==0) || (hotDogsQuantity==0) || (doughnutQuantity==0) || (shawarmaQuantity==0) || (hotDogsQuantity>0) || (doughnutQuantity>0) || (shawarmaQuantity>0) || (hotDogsQuantity>0 && doughnutQuantity>0) || (hotDogsQuantity>0 && shawarmaQuantity>0) || (doughnutQuantity>0 && shawarmaQuantity>0) || (hotDogsQuantity>0 &&  doughnutQuantity>0 && shawarmaQuantity>0)){

                    if (!(document.getElementsByClassName("fries-row")[0] || document.getElementsByClassName("fries-row")[1] || document.getElementsByClassName("fries-row")[2])) {

                        pFries.itemProperty = document.createElement("p");
                        pFries.itemProperty.innerHTML = "French fries";
                        itemNameColumn.appendChild(pFries.itemProperty);
                        pFries.itemProperty.classList.add("first-col");
                        pFries.itemProperty.classList.add("fries-row");

                        pFries.quantityProperty = document.createElement("p");
                        pFries.quantityProperty.innerHTML = friesQuantity;
                        quantityColumn.appendChild(pFries.quantityProperty);
                        pFries.quantityProperty.classList.add("second-col");
                        pFries.quantityProperty.classList.add("fries-row");

                        pFries.costProperty = document.createElement("p");
                        pFries.costProperty.innerHTML = "$" + 40 * friesQuantity;
                        costColumn.appendChild(pFries.costProperty);
                        pFries.costProperty.classList.add("third-col");
                        pFries.costProperty.classList.add("fries-row");
                    }
                    else {
                        document.getElementsByClassName("first-col")[0].innerHTML = "French fries";
                        document.getElementsByClassName("second-col")[0].innerHTML = friesQuantity;
                        document.getElementsByClassName("third-col")[0].innerHTML = "$" + 40 * friesQuantity;
                    }

                }

            }
        }

        if (hotDogsQuantity >= 0) {

            if (hotDogsQuantity === 0) {

                if (pizzaQuantity > 0 && burgerQuantity > 0 && friesQuantity > 0) {

                    if (document.getElementsByClassName("hotdogs-row")[0] || document.getElementsByClassName("hotdogs-row")[1] || document.getElementsByClassName("hotdogs-row")[2]) {
                        (document.getElementsByClassName("first-col")[3]).remove();
                        (document.getElementsByClassName("second-col")[3]).remove();
                        (document.getElementsByClassName("third-col")[3]).remove();
                    }
                }

                else if (pizzaQuantity > 0 || burgerQuantity > 0 || friesQuantity > 0) {

                    if (document.getElementsByClassName("hotdogs-row")[0] || document.getElementsByClassName("hotdogs-row")[1] || document.getElementsByClassName("hotdogs-row")[2]) {
                        (document.getElementsByClassName("first-col")[1]).remove();
                        (document.getElementsByClassName("second-col")[1]).remove();
                        (document.getElementsByClassName("third-col")[1]).remove();
                    }
                }

                else if ((pizzaQuantity > 0 && burgerQuantity > 0) || (pizzaQuantity > 0 && friesQuantity > 0) || (burgerQuantity > 0 && friesQuantity > 0)) {

                    if (document.getElementsByClassName("hotdogs-row")[0] || document.getElementsByClassName("hotdogs-row")[1] || document.getElementsByClassName("hotdogs-row")[2]) {
                        (document.getElementsByClassName("first-col")[2]).remove();
                        (document.getElementsByClassName("second-col")[2]).remove();
                        (document.getElementsByClassName("third-col")[2]).remove();
                    }
                }

                else {

                    if (document.getElementsByClassName("hotdogs-row")[0] || document.getElementsByClassName("hotdogs-row")[1] || document.getElementsByClassName("hotdogs-row")[2]) {
                        (document.getElementsByClassName("first-col")[0]).remove();
                        (document.getElementsByClassName("second-col")[0]).remove();
                        (document.getElementsByClassName("third-col")[0]).remove();
                    }
                }
            }

            else {
                if (pizzaQuantity > 0 && burgerQuantity > 0 && friesQuantity > 0 && doughnutQuantity > 0 && shawarmaQuantity > 0) {
                    if (!(document.getElementsByClassName("hotdogs-row")[0] || document.getElementsByClassName("hotdogs-row")[1] || document.getElementsByClassName("hotdogs-row")[2])) {

                        pHotDogs.itemProperty = document.createElement("p");
                        pHotDogs.itemProperty.innerHTML = "Hot dogs";
                        itemNameColumn.appendChild(pHotDogs.itemProperty);
                        pHotDogs.itemProperty.classList.add("first-col");
                        pHotDogs.itemProperty.classList.add("hotdogs-row");

                        pHotDogs.quantityProperty = document.createElement("p");
                        pHotDogs.quantityProperty.innerHTML = hotDogsQuantity;
                        quantityColumn.appendChild(pHotDogs.quantityProperty);
                        pHotDogs.quantityProperty.classList.add("second-col");
                        pHotDogs.quantityProperty.classList.add("hotdogs-row");

                        pHotDogs.costProperty = document.createElement("p");
                        pHotDogs.costProperty.innerHTML = "$" + 28 * hotDogsQuantity;
                        costColumn.appendChild(pHotDogs.costProperty);
                        pHotDogs.costProperty.classList.add("third-col");
                        pHotDogs.costProperty.classList.add("hotdogs-row");
                    }

                    else {
                        document.getElementsByClassName("first-col")[3].innerHTML = "Hot dogs";
                        document.getElementsByClassName("second-col")[3].innerHTML = hotDogsQuantity;
                        document.getElementsByClassName("third-col")[3].innerHTML = "$" + 28 * hotDogsQuantity;
                    }
                }

                else if (pizzaQuantity > 0 || burgerQuantity > 0 || friesQuantity > 0 || doughnutQuantity > 0 || shawarmaQuantity > 0) {

                    if (!(document.getElementsByClassName("hotdogs-row")[0] || document.getElementsByClassName("hotdogs-row")[1] || document.getElementsByClassName("hotdogs-row")[2])) {
                        pHotDogs.itemProperty = document.createElement("p");
                        pHotDogs.itemProperty.innerHTML = "Hot dogs";
                        itemNameColumn.appendChild(pHotDogs.itemProperty);
                        pHotDogs.itemProperty.classList.add("first-col");
                        pHotDogs.itemProperty.classList.add("hotdogs-row");

                        pHotDogs.quantityProperty = document.createElement("p");
                        pHotDogs.quantityProperty.innerHTML = hotDogsQuantity;
                        quantityColumn.appendChild(pHotDogs.quantityProperty);
                        pHotDogs.quantityProperty.classList.add("second-col");
                        pHotDogs.quantityProperty.classList.add("hotdogs-row");

                        pHotDogs.costProperty = document.createElement("p");
                        pHotDogs.costProperty.innerHTML = "$" + 28 * hotDogsQuantity;
                        costColumn.appendChild(pHotDogs.costProperty);
                        pHotDogs.costProperty.classList.add("third-col");
                        pHotDogs.costProperty.classList.add("hotdogs-row");
                    }

                    else {
                        document.getElementsByClassName("first-col")[1].innerHTML = "Hot dogs";
                        document.getElementsByClassName("second-col")[1].innerHTML = hotDogsQuantity;
                        document.getElementsByClassName("third-col")[1].innerHTML = "$" + 28 * hotDogsQuantity;
                    }
                }

                else if ((pizzaQuantity > 0 && burgerQuantity > 0) || (pizzaQuantity > 0 && friesQuantity > 0) || (burgerQuantity > 0 && friesQuantity > 0) || (pizzaQuantity > 0 && doughnutQuantity > 0) || (pizzaQuantity > 0 && shawarmaQuantity > 0) || (burgerQuantity > 0 && doughnutQuantity > 0) || (burgerQuantity > 0 && shawarmaQuantity > 0) || (friesQuantity > 0 && doughnutQuantity > 0) || (friesQuantity > 0 && shawarmaQuantity)) {

                    if (!(document.getElementsByClassName("hotdogs-row")[0] || document.getElementsByClassName("hotdogs-row")[1] || document.getElementsByClassName("hotdogs-row")[2])) {
                        pHotDogs.itemProperty = document.createElement("p");
                        pHotDogs.itemProperty.innerHTML = "Hot dogs";
                        itemNameColumn.appendChild(pHotDogs.itemProperty);
                        pHotDogs.itemProperty.classList.add("first-col");
                        pHotDogs.itemProperty.classList.add("hotdogs-row");

                        pHotDogs.quantityProperty = document.createElement("p");
                        pHotDogs.quantityProperty.innerHTML = hotDogsQuantity;
                        quantityColumn.appendChild(pHotDogs.quantityProperty);
                        pHotDogs.quantityProperty.classList.add("second-col");
                        pHotDogs.quantityProperty.classList.add("hotdogs-row");

                        pHotDogs.costProperty = document.createElement("p");
                        pHotDogs.costProperty.innerHTML = "$" + 28 * hotDogsQuantity;
                        costColumn.appendChild(pHotDogs.costProperty);
                        pHotDogs.costProperty.classList.add("third-col");
                        pHotDogs.costProperty.classList.add("hotdogs-row");
                    }

                    else {
                        document.getElementsByClassName("first-col")[2].innerHTML = "Hot dogs";
                        document.getElementsByClassName("second-col")[2].innerHTML = hotDogsQuantity;
                        document.getElementsByClassName("third-col")[2].innerHTML = "$" + 28 * hotDogsQuantity;
                    }
                }

                else {
                    if (!(document.getElementsByClassName("hotdogs-row")[0] || document.getElementsByClassName("hotdogs-row")[1] || document.getElementsByClassName("hotdogs-row")[2])) {

                        pHotDogs.itemProperty = document.createElement("p");
                        pHotDogs.itemProperty.innerHTML = "Hot dogs";
                        itemNameColumn.appendChild(pHotDogs.itemProperty);
                        pHotDogs.itemProperty.classList.add("first-col");
                        pHotDogs.itemProperty.classList.add("hotdogs-row");

                        pHotDogs.quantityProperty = document.createElement("p");
                        pHotDogs.quantityProperty.innerHTML = hotDogsQuantity;
                        quantityColumn.appendChild(pHotDogs.quantityProperty);
                        pHotDogs.quantityProperty.classList.add("second-col");
                        pHotDogs.quantityProperty.classList.add("hotdogs-row");

                        pHotDogs.costProperty = document.createElement("p");
                        pHotDogs.costProperty.innerHTML = "$" + 28 * hotDogsQuantity;
                        costColumn.appendChild(pHotDogs.costProperty);
                        pHotDogs.costProperty.classList.add("third-col");
                        pHotDogs.costProperty.classList.add("hotdogs-row");
                    }

                    else {
                        document.getElementsByClassName("first-col")[0].innerHTML = "Hot dogs";
                        document.getElementsByClassName("second-col")[0].innerHTML = hotDogsQuantity;
                        document.getElementsByClassName("third-col")[0].innerHTML = "$" + 28 * hotDogsQuantity;
                    }
                }
            }
        }

        if (doughnutQuantity >= 0) {

            if (doughnutQuantity === 0) {

                if (pizzaQuantity > 0 && burgerQuantity > 0 && friesQuantity > 0 && hotDogsQuantity > 0) {

                    if (document.getElementsByClassName("doughnut-row")[0] || document.getElementsByClassName("doughnut-row")[1] || document.getElementsByClassName("doughnut-row")[2]) {
                        (document.getElementsByClassName("first-col")[4]).remove();
                        (document.getElementsByClassName("second-col")[4]).remove();
                        (document.getElementsByClassName("third-col")[4]).remove();
                    }
                }

                else if (pizzaQuantity > 0 || burgerQuantity > 0 || friesQuantity > 0 || hotDogsQuantity > 0) {

                    if (document.getElementsByClassName("doughnut-row")[0] || document.getElementsByClassName("doughnut-row")[1] || document.getElementsByClassName("doughnut-row")[2]) {

                        (document.getElementsByClassName("first-col")[1]).remove();
                        (document.getElementsByClassName("second-col")[1]).remove();
                        (document.getElementsByClassName("third-col")[1]).remove();
                    }
                }

                else if ((pizzaQuantity > 0 && burgerQuantity > 0) || (pizzaQuantity > 0 && friesQuantity > 0) || (pizzaQuantity > 0 && hotDogsQuantity > 0) || (friesQuantity > 0 && burgerQuantity > 0) || (hotDogsQuantity > 0 && burgerQuantity > 0) || (friesQuantity > 0 && hotDogsQuantity > 0)) {

                    if (document.getElementsByClassName("doughnut-row")[0] || document.getElementsByClassName("doughnut-row")[1] || document.getElementsByClassName("doughnut-row")[2]) {

                        (document.getElementsByClassName("first-col")[2]).remove();
                        (document.getElementsByClassName("second-col")[2]).remove();
                        (document.getElementsByClassName("third-col")[2]).remove();
                    }
                }

                else if ((pizzaQuantity > 0 && burgerQuantity > 0 && friesQuantity > 0) || (pizzaQuantity > 0 && burgerQuantity > 0 && hotDogsQuantity > 0) || (pizzaQuantity > 0 && hotDogsQuantity > 0 && friesQuantity > 0) || (burgerQuantity > 0 && hotDogsQuantity > 0 && friesQuantity > 0)) {

                    if (document.getElementsByClassName("doughnut-row")[0] || document.getElementsByClassName("doughnut-row")[1] || document.getElementsByClassName("doughnut-row")[2]) {

                        (document.getElementsByClassName("first-col")[3]).remove();
                        (document.getElementsByClassName("second-col")[3]).remove();
                        (document.getElementsByClassName("third-col")[3]).remove();
                    }
                }

                else {

                    if (document.getElementsByClassName("doughnut-row")[0] || document.getElementsByClassName("doughnut-row")[1] || document.getElementsByClassName("doughnut-row")[2]) {
                        (document.getElementsByClassName("first-col")[0]).remove();
                        (document.getElementsByClassName("second-col")[0]).remove();
                        (document.getElementsByClassName("third-col")[0]).remove();
                    }
                }
            }

            else {

                if (pizzaQuantity > 0 && burgerQuantity > 0 && friesQuantity > 0 && hotDogsQuantity > 0) {

                    if (!(document.getElementsByClassName("doughnut-row")[0] || document.getElementsByClassName("doughnut-row")[1] || document.getElementsByClassName("doughnut-row")[2])) {

                        pDoughNut.itemProperty = document.createElement("p");
                        pDoughNut.itemProperty.innerHTML = "Doughnut";
                        itemNameColumn.appendChild(pDoughNut.itemProperty);
                        pDoughNut.itemProperty.classList.add("first-col");
                        pDoughNut.itemProperty.classList.add("doughnut-row");

                        pDoughNut.quantityProperty = document.createElement("p");
                        pDoughNut.quantityProperty.innerHTML = doughnutQuantity;
                        quantityColumn.appendChild(pDoughNut.quantityProperty);
                        pDoughNut.quantityProperty.classList.add("second-col");
                        pDoughNut.quantityProperty.classList.add("doughnut-row");

                        pDoughNut.costProperty = document.createElement("p");
                        pDoughNut.costProperty.innerHTML = "$" + 78 * doughnutQuantity;
                        costColumn.appendChild(pDoughNut.costProperty);
                        pDoughNut.costProperty.classList.add("third-col");
                        pDoughNut.costProperty.classList.add("doughnut-row");
                    }

                    else {
                        document.getElementsByClassName("first-col")[4].innerHTML = "Doughnut";
                        document.getElementsByClassName("second-col")[4].innerHTML = doughnutQuantity;
                        document.getElementsByClassName("third-col")[4].innerHTML = "$" + 78 * doughnutQuantity;
                    }
                }

                else if (pizzaQuantity > 0 || burgerQuantity > 0 || friesQuantity > 0 || hotDogsQuantity > 0) {

                    if (!(document.getElementsByClassName("doughnut-row")[0] || document.getElementsByClassName("doughnut-row")[1] || document.getElementsByClassName("doughnut-row")[2])) {

                        pDoughNut.itemProperty = document.createElement("p");
                        pDoughNut.itemProperty.innerHTML = "Doughnut";
                        itemNameColumn.appendChild(pDoughNut.itemProperty);
                        pDoughNut.itemProperty.classList.add("first-col");
                        pDoughNut.itemProperty.classList.add("doughnut-row");

                        pDoughNut.quantityProperty = document.createElement("p");
                        pDoughNut.quantityProperty.innerHTML = doughnutQuantity;
                        quantityColumn.appendChild(pDoughNut.quantityProperty);
                        pDoughNut.quantityProperty.classList.add("second-col");
                        pDoughNut.quantityProperty.classList.add("doughnut-row");

                        pDoughNut.costProperty = document.createElement("p");
                        pDoughNut.costProperty.innerHTML = "$" + 78 * doughnutQuantity;
                        costColumn.appendChild(pDoughNut.costProperty);
                        pDoughNut.costProperty.classList.add("third-col");
                        pDoughNut.costProperty.classList.add("doughnut-row");
                    }

                    else {
                        document.getElementsByClassName("first-col")[1].innerHTML = "Doughnut";
                        document.getElementsByClassName("second-col")[1].innerHTML = doughnutQuantity;
                        document.getElementsByClassName("third-col")[1].innerHTML = "$" + 78 * doughnutQuantity;
                    }
                }

                else if ((pizzaQuantity > 0 && burgerQuantity > 0) || (pizzaQuantity > 0 && friesQuantity > 0) || (pizzaQuantity > 0 && hotDogsQuantity > 0) || (friesQuantity > 0 && burgerQuantity > 0) || (hotDogsQuantity > 0 && burgerQuantity > 0) || (friesQuantity > 0 && hotDogsQuantity > 0)) {

                    if (!(document.getElementsByClassName("doughnut-row")[0] || document.getElementsByClassName("doughnut-row")[1] || document.getElementsByClassName("doughnut-row")[2])) {
                        pDoughNut.itemProperty = document.createElement("p");
                        pDoughNut.itemProperty.innerHTML = "Doughnut";
                        itemNameColumn.appendChild(pDoughNut.itemProperty);
                        pDoughNut.itemProperty.classList.add("first-col");
                        pDoughNut.itemProperty.classList.add("doughnut-row");

                        pDoughNut.quantityProperty = document.createElement("p");
                        pDoughNut.quantityProperty.innerHTML = doughnutQuantity;
                        quantityColumn.appendChild(pDoughNut.quantityProperty);
                        pDoughNut.quantityProperty.classList.add("second-col");
                        pDoughNut.quantityProperty.classList.add("doughnut-row");

                        pDoughNut.costProperty = document.createElement("p");
                        pDoughNut.costProperty.innerHTML = "$" + 78 * doughnutQuantity;
                        costColumn.appendChild(pDoughNut.costProperty);
                        pDoughNut.costProperty.classList.add("third-col");
                        pDoughNut.costProperty.classList.add("doughnut-row");
                    }

                    else {
                        document.getElementsByClassName("first-col")[2].innerHTML = "Doughnut";
                        document.getElementsByClassName("second-col")[2].innerHTML = doughnutQuantity;
                        document.getElementsByClassName("third-col")[2].innerHTML = "$" + 78 * doughnutQuantity;
                    }
                }

                else if ((pizzaQuantity > 0 && burgerQuantity > 0 && friesQuantity > 0) || (pizzaQuantity > 0 && burgerQuantity > 0 && hotDogsQuantity > 0) || (pizzaQuantity > 0 && hotDogsQuantity > 0 && friesQuantity > 0) || (burgerQuantity > 0 && hotDogsQuantity > 0 && friesQuantity > 0)) {

                    if (!(document.getElementsByClassName("doughnut-row")[0] || document.getElementsByClassName("doughnut-row")[1] || document.getElementsByClassName("doughnut-row")[2])) {
                        pDoughNut.itemProperty = document.createElement("p");
                        pDoughNut.itemProperty.innerHTML = "Doughnut";
                        itemNameColumn.appendChild(pDoughNut.itemProperty);
                        pDoughNut.itemProperty.classList.add("first-col");
                        pDoughNut.itemProperty.classList.add("doughnut-row");

                        pDoughNut.quantityProperty = document.createElement("p");
                        pDoughNut.quantityProperty.innerHTML = doughnutQuantity;
                        quantityColumn.appendChild(pDoughNut.quantityProperty);
                        pDoughNut.quantityProperty.classList.add("second-col");
                        pDoughNut.quantityProperty.classList.add("doughnut-row");

                        pDoughNut.costProperty = document.createElement("p");
                        pDoughNut.costProperty.innerHTML = "$" + 78 * doughnutQuantity;
                        costColumn.appendChild(pDoughNut.costProperty);
                        pDoughNut.costProperty.classList.add("third-col");
                        pDoughNut.costProperty.classList.add("doughnut-row");
                    }

                    else {
                        document.getElementsByClassName("first-col")[3].innerHTML = "Doughnut";
                        document.getElementsByClassName("second-col")[3].innerHTML = doughnutQuantity;
                        document.getElementsByClassName("third-col")[3].innerHTML = "$" + 78 * doughnutQuantity;
                    }
                }

                else {

                    if (!(document.getElementsByClassName("doughnut-row")[0] || document.getElementsByClassName("doughnut-row")[1] || document.getElementsByClassName("doughnut-row")[2])) {
                        pDoughNut.itemProperty = document.createElement("p");
                        pDoughNut.itemProperty.innerHTML = "Doughnut";
                        itemNameColumn.appendChild(pDoughNut.itemProperty);
                        pDoughNut.itemProperty.classList.add("first-col");
                        pDoughNut.itemProperty.classList.add("doughnut-row");

                        pDoughNut.quantityProperty = document.createElement("p");
                        pDoughNut.quantityProperty.innerHTML = doughnutQuantity;
                        quantityColumn.appendChild(pDoughNut.quantityProperty);
                        pDoughNut.quantityProperty.classList.add("second-col");
                        pDoughNut.quantityProperty.classList.add("doughnut-row");

                        pDoughNut.costProperty = document.createElement("p");
                        pDoughNut.costProperty.innerHTML = "$" + 78 * doughnutQuantity;
                        costColumn.appendChild(pDoughNut.costProperty);
                        pDoughNut.costProperty.classList.add("third-col");
                        pDoughNut.costProperty.classList.add("doughnut-row");
                    }

                    else {
                        document.getElementsByClassName("first-col")[0].innerHTML = "Doughnut";
                        document.getElementsByClassName("second-col")[0].innerHTML = doughnutQuantity;
                        document.getElementsByClassName("third-col")[0].innerHTML = "$" + 78 * doughnutQuantity;
                    }
                }
            }
        }

        if (shawarmaQuantity >= 0) {

            if (shawarmaQuantity === 0) {

                if (pizzaQuantity > 0 && burgerQuantity > 0 && friesQuantity > 0 && hotDogsQuantity > 0 && doughnutQuantity > 0) {

                    if (document.getElementsByClassName("shawarma-row")[0] || document.getElementsByClassName("shawarma-row")[1] || document.getElementsByClassName("shawarma-row")[2]) {

                        (document.getElementsByClassName("first-col")[5]).remove();
                        (document.getElementsByClassName("second-col")[5]).remove();
                        (document.getElementsByClassName("third-col")[5]).remove();
                    }
                }

                else if (pizzaQuantity > 0 || burgerQuantity > 0 || friesQuantity > 0 || hotDogsQuantity > 0 || doughnutQuantity > 0) {

                    if (document.getElementsByClassName("shawarma-row")[0] || document.getElementsByClassName("shawarma-row")[1] || document.getElementsByClassName("shawarma-row")[2]) {

                        (document.getElementsByClassName("first-col")[1]).remove();
                        (document.getElementsByClassName("second-col")[1]).remove();
                        (document.getElementsByClassName("third-col")[1]).remove();
                    }
                }

                else if ((pizzaQuantity > 0 && burgerQuantity > 0) || (pizzaQuantity > 0 && friesQuantity > 0) || (pizzaQuantity > 0 && hotDogsQuantity > 0) || (friesQuantity > 0 && burgerQuantity > 0) || (hotDogsQuantity > 0 && burgerQuantity > 0) || (friesQuantity > 0 && hotDogsQuantity > 0) || (pizzaQuantity > 0 && doughnutQuantity > 0) || (burgerQuantity > 0 && doughnutQuantity > 0) || (friesQuantity > 0 && doughnutQuantity > 0) || ((hotDogsQuantity > 0 && doughnutQuantity > 0))) {

                    if (document.getElementsByClassName("shawarma-row")[0] || document.getElementsByClassName("shawarma-row")[1] || document.getElementsByClassName("shawarma-row")[2]) {

                        (document.getElementsByClassName("first-col")[2]).remove();
                        (document.getElementsByClassName("second-col")[2]).remove();
                        (document.getElementsByClassName("third-col")[2]).remove();
                    }
                }

                else if ((friesQuantity > 0 && hotDogsQuantity > 0 && doughnutQuantity > 0) || (doughnutQuantity > 0 && burgerQuantity > 0 && hotDogsQuantity > 0) || (pizzaQuantity > 0 && hotDogsQuantity > 0 && doughnutQuantity > 0) || (burgerQuantity > 0 && doughnutQuantity > 0 && friesQuantity > 0) || (pizzaQuantity > 0 && friesQuantity > 0 && doughnutQuantity > 0) || (pizzaQuantity > 0 && burgerQuantity > 0 && doughnutQuantity > 0)) {

                    if (document.getElementsByClassName("shawarma-row")[0] || document.getElementsByClassName("shawarma-row")[1] || document.getElementsByClassName("shawarma-row")[2]) {

                        (document.getElementsByClassName("first-col")[3]).remove();
                        (document.getElementsByClassName("second-col")[3]).remove();
                        (document.getElementsByClassName("third-col")[3]).remove();
                    }
                }

                else if ((friesQuantity > 0 && hotDogsQuantity > 0 && doughnutQuantity > 0 && burgerQuantity > 0) || (friesQuantity > 0 && hotDogsQuantity > 0 && doughnutQuantity > 0 && pizzaQuantity > 0) || (pizzaQuantity > 0 && hotDogsQuantity > 0 && doughnutQuantity > 0 && burgerQuantity > 0) || (pizzaQuantity > 0 && friesQuantity > 0 && doughnutQuantity > 0 && burgerQuantity > 0) || (pizzaQuantity > 0 && friesQuantity > 0 && hotDogsQuantity > 0 && burgerQuantity > 0)) {

                    if (document.getElementsByClassName("shawarma-row")[0] || document.getElementsByClassName("shawarma-row")[1] || document.getElementsByClassName("shawarma-row")[2]) {

                        (document.getElementsByClassName("first-col")[4]).remove();
                        (document.getElementsByClassName("second-col")[4]).remove();
                        (document.getElementsByClassName("third-col")[4]).remove();
                    }
                }

                else {
                    if (document.getElementsByClassName("shawarma-row")[0] || document.getElementsByClassName("shawarma-row")[1] || document.getElementsByClassName("shawarma-row")[2]) {

                        (document.getElementsByClassName("first-col")[0]).remove();
                        (document.getElementsByClassName("second-col")[0]).remove();
                        (document.getElementsByClassName("third-col")[0]).remove();
                    }
                }
            }

            else {

                if (pizzaQuantity > 0 && burgerQuantity > 0 && friesQuantity > 0 && hotDogsQuantity > 0 && doughnutQuantity > 0) {

                    if (!(document.getElementsByClassName("shawarma-row")[0] || document.getElementsByClassName("shawarma-row")[1] || document.getElementsByClassName("shawarma-row")[2])) {

                        pShawarma.itemProperty = document.createElement("p");
                        pShawarma.itemProperty.innerHTML = "Shawarma";
                        itemNameColumn.appendChild(pShawarma.itemProperty);
                        pShawarma.itemProperty.classList.add("first-col");
                        pShawarma.itemProperty.classList.add("shawarma-row");

                        pShawarma.quantityProperty = document.createElement("p");
                        pShawarma.quantityProperty.innerHTML = shawarmaQuantity;
                        quantityColumn.appendChild(pShawarma.quantityProperty);
                        pShawarma.quantityProperty.classList.add("second-col");
                        pShawarma.quantityProperty.classList.add("shawarma-row");

                        pShawarma.costProperty = document.createElement("p");
                        pShawarma.costProperty.innerHTML = "$" + 90 * shawarmaQuantity;
                        costColumn.appendChild(pShawarma.costProperty);
                        pShawarma.costProperty.classList.add("third-col");
                        pShawarma.costProperty.classList.add("shawarma-row");
                    }

                    else {
                        document.getElementsByClassName("first-col")[5].innerHTML = "Shawarma";
                        document.getElementsByClassName("second-col")[5].innerHTML = shawarmaQuantity;
                        document.getElementsByClassName("third-col")[5].innerHTML = "$" + 90 * shawarmaQuantity;
                    }
                }

                else if (pizzaQuantity > 0 || burgerQuantity > 0 || friesQuantity > 0 || hotDogsQuantity > 0 || doughnutQuantity > 0) {

                    if (!(document.getElementsByClassName("shawarma-row")[0] || document.getElementsByClassName("shawarma-row")[1] || document.getElementsByClassName("shawarma-row")[2])) {

                        pShawarma.itemProperty = document.createElement("p");
                        pShawarma.itemProperty.innerHTML = "Shawarma";
                        itemNameColumn.appendChild(pShawarma.itemProperty);
                        pShawarma.itemProperty.classList.add("first-col");
                        pShawarma.itemProperty.classList.add("shawarma-row");

                        pShawarma.quantityProperty = document.createElement("p");
                        pShawarma.quantityProperty.innerHTML = shawarmaQuantity;
                        quantityColumn.appendChild(pShawarma.quantityProperty);
                        pShawarma.quantityProperty.classList.add("second-col");
                        pShawarma.quantityProperty.classList.add("shawarma-row");

                        pShawarma.costProperty = document.createElement("p");
                        pShawarma.costProperty.innerHTML = "$" + 90 * shawarmaQuantity;
                        costColumn.appendChild(pShawarma.costProperty);
                        pShawarma.costProperty.classList.add("third-col");
                        pShawarma.costProperty.classList.add("shawarma-row");
                    }

                    else {
                        document.getElementsByClassName("first-col")[1].innerHTML = "Shawarma";
                        document.getElementsByClassName("second-col")[1].innerHTML = shawarmaQuantity;
                        document.getElementsByClassName("third-col")[1].innerHTML = "$" + 90 * shawarmaQuantity;
                    }
                }

                else if ((pizzaQuantity > 0 && burgerQuantity > 0) || (pizzaQuantity > 0 && friesQuantity > 0) || (pizzaQuantity > 0 && hotDogsQuantity > 0) || (friesQuantity > 0 && burgerQuantity > 0) || (hotDogsQuantity > 0 && burgerQuantity > 0) || (friesQuantity > 0 && hotDogsQuantity > 0) || (pizzaQuantity > 0 && doughnutQuantity > 0) || (burgerQuantity > 0 && doughnutQuantity > 0) || (friesQuantity > 0 && doughnutQuantity > 0) || ((hotDogsQuantity > 0 && doughnutQuantity > 0))) {

                    if (!(document.getElementsByClassName("shawarma-row")[0] || document.getElementsByClassName("shawarma-row")[1] || document.getElementsByClassName("shawarma-row")[2])) {

                        pShawarma.itemProperty = document.createElement("p");
                        pShawarma.itemProperty.innerHTML = "Shawarma";
                        itemNameColumn.appendChild(pShawarma.itemProperty);
                        pShawarma.itemProperty.classList.add("first-col");
                        pShawarma.itemProperty.classList.add("shawarma-row");

                        pShawarma.quantityProperty = document.createElement("p");
                        pShawarma.quantityProperty.innerHTML = shawarmaQuantity;
                        quantityColumn.appendChild(pShawarma.quantityProperty);
                        pShawarma.quantityProperty.classList.add("second-col");
                        pShawarma.quantityProperty.classList.add("shawarma-row");

                        pShawarma.costProperty = document.createElement("p");
                        pShawarma.costProperty.innerHTML = "$" + 90 * shawarmaQuantity;
                        costColumn.appendChild(pShawarma.costProperty);
                        pShawarma.costProperty.classList.add("third-col");
                        pShawarma.costProperty.classList.add("shawarma-row");
                    }

                    else {
                        document.getElementsByClassName("first-col")[2].innerHTML = "Shawarma";
                        document.getElementsByClassName("second-col")[2].innerHTML = shawarmaQuantity;
                        document.getElementsByClassName("third-col")[2].innerHTML = "$" + 90 * shawarmaQuantity;
                    }
                }

                else if ((friesQuantity > 0 && hotDogsQuantity > 0 && doughnutQuantity > 0) || (doughnutQuantity > 0 && burgerQuantity > 0 && hotDogsQuantity > 0) || (pizzaQuantity > 0 && hotDogsQuantity > 0 && doughnutQuantity > 0) || (burgerQuantity > 0 && doughnutQuantity > 0 && friesQuantity > 0) || (pizzaQuantity > 0 && friesQuantity > 0 && doughnutQuantity > 0) || (pizzaQuantity > 0 && burgerQuantity > 0 && doughnutQuantity > 0)) {

                    if (!(document.getElementsByClassName("shawarma-row")[0] || document.getElementsByClassName("shawarma-row")[1] || document.getElementsByClassName("shawarma-row")[2])) {

                        pShawarma.itemProperty = document.createElement("p");
                        pShawarma.itemProperty.innerHTML = "Shawarma";
                        itemNameColumn.appendChild(pShawarma.itemProperty);
                        pShawarma.itemProperty.classList.add("first-col");
                        pShawarma.itemProperty.classList.add("shawarma-row");

                        pShawarma.quantityProperty = document.createElement("p");
                        pShawarma.quantityProperty.innerHTML = shawarmaQuantity;
                        quantityColumn.appendChild(pShawarma.quantityProperty);
                        pShawarma.quantityProperty.classList.add("second-col");
                        pShawarma.quantityProperty.classList.add("shawarma-row");

                        pShawarma.costProperty = document.createElement("p");
                        pShawarma.costProperty.innerHTML = "$" + 90 * shawarmaQuantity;
                        costColumn.appendChild(pShawarma.costProperty);
                        pShawarma.costProperty.classList.add("third-col");
                        pShawarma.costProperty.classList.add("shawarma-row");
                    }

                    else {
                        document.getElementsByClassName("first-col")[3].innerHTML = "Shawarma";
                        document.getElementsByClassName("second-col")[3].innerHTML = shawarmaQuantity;
                        document.getElementsByClassName("third-col")[3].innerHTML = "$" + 90 * shawarmaQuantity;
                    }
                }

                else if ((friesQuantity > 0 && hotDogsQuantity > 0 && doughnutQuantity > 0 && burgerQuantity > 0) || (friesQuantity > 0 && hotDogsQuantity > 0 && doughnutQuantity > 0 && pizzaQuantity > 0) || (pizzaQuantity > 0 && hotDogsQuantity > 0 && doughnutQuantity > 0 && burgerQuantity > 0) || (pizzaQuantity > 0 && friesQuantity > 0 && doughnutQuantity > 0 && burgerQuantity > 0) || (pizzaQuantity > 0 && friesQuantity > 0 && hotDogsQuantity > 0 && burgerQuantity > 0)) {

                    if (!(document.getElementsByClassName("shawarma-row")[0] || document.getElementsByClassName("shawarma-row")[1] || document.getElementsByClassName("shawarma-row")[2])) {

                        pShawarma.itemProperty = document.createElement("p");
                        pShawarma.itemProperty.innerHTML = "Shawarma";
                        itemNameColumn.appendChild(pShawarma.itemProperty);
                        pShawarma.itemProperty.classList.add("first-col");
                        pShawarma.itemProperty.classList.add("shawarma-row");

                        pShawarma.quantityProperty = document.createElement("p");
                        pShawarma.quantityProperty.innerHTML = shawarmaQuantity;
                        quantityColumn.appendChild(pShawarma.quantityProperty);
                        pShawarma.quantityProperty.classList.add("second-col");
                        pShawarma.quantityProperty.classList.add("shawarma-row");

                        pShawarma.costProperty = document.createElement("p");
                        pShawarma.costProperty.innerHTML = "$" + 90 * shawarmaQuantity;
                        costColumn.appendChild(pShawarma.costProperty);
                        pShawarma.costProperty.classList.add("third-col");
                        pShawarma.costProperty.classList.add("shawarma-row");
                    }

                    else {
                        document.getElementsByClassName("first-col")[4].innerHTML = "Shawarma";
                        document.getElementsByClassName("second-col")[4].innerHTML = shawarmaQuantity;
                        document.getElementsByClassName("third-col")[4].innerHTML = "$" + 90 * shawarmaQuantity;
                    }
                }

                else {

                    if (!(document.getElementsByClassName("shawarma-row")[0] || document.getElementsByClassName("shawarma-row")[1] || document.getElementsByClassName("shawarma-row")[2])) {

                        pShawarma.itemProperty = document.createElement("p");
                        pShawarma.itemProperty.innerHTML = "Shawarma";
                        itemNameColumn.appendChild(pShawarma.itemProperty);
                        pShawarma.itemProperty.classList.add("first-col");
                        pShawarma.itemProperty.classList.add("shawarma-row");

                        pShawarma.quantityProperty = document.createElement("p");
                        pShawarma.quantityProperty.innerHTML = shawarmaQuantity;
                        quantityColumn.appendChild(pShawarma.quantityProperty);
                        pShawarma.quantityProperty.classList.add("second-col");
                        pShawarma.quantityProperty.classList.add("shawarma-row");

                        pShawarma.costProperty = document.createElement("p");
                        pShawarma.costProperty.innerHTML = "$" + 90 * shawarmaQuantity;
                        costColumn.appendChild(pShawarma.costProperty);
                        pShawarma.costProperty.classList.add("third-col");
                        pShawarma.costProperty.classList.add("shawarma-row");
                    }

                    else {
                        document.getElementsByClassName("first-col")[0].innerHTML = "Shawarma";
                        document.getElementsByClassName("second-col")[0].innerHTML = shawarmaQuantity;
                        document.getElementsByClassName("third-col")[0].innerHTML = "$" + 90 * shawarmaQuantity;
                    }
                }
            }
        }

    }
});


