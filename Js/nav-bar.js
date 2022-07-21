document.addEventListener("DOMContentLoaded", function(){
    
    var hamburgerMenu = document.getElementById("menu");
    var unorderedList = document.querySelector("ul");
    var listItems = document.querySelectorAll("li");
    
    listItems.forEach(item=>item.addEventListener("click", hideMenu))

    hamburgerMenu.addEventListener("click", displayMenu);

    function displayMenu(){
        hamburgerMenu.classList.toggle("active");
        unorderedList.classList.toggle("active");
    }

    function hideMenu(){
        hamburgerMenu.classList.remove("active");
        unorderedList.classList.remove("active");
    }
});