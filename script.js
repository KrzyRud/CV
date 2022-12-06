const nav_items = document.querySelectorAll(".navbar-selection-item");

nav_items.forEach(item =>{
    item.addEventListener("click", ()=>{
        for (i = 0; i < nav_items.length; i++) {
            nav_items[i].classList.remove("active");
        }
        item.classList.toggle("active")
  })
});