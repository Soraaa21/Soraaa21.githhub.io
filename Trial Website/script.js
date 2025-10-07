const brandSelect = document.getElementById("brandSelect");
const categorySelect = document.getElementById("categorySelect");
const resetButton = document.getElementById("resetFilters");
const shoes = document.querySelectorAll(".shoe-card");
const noResults = document.getElementById("noResults");

function filterShoes() {
  const brand = brandSelect.value;
  const category = categorySelect.value;
  let visibleCount = 0;

  shoes.forEach(shoe => {
    const matchesBrand = brand === "all" || shoe.dataset.brand === brand;
    const matchesCategory = category === "all" || shoe.dataset.category === category;
    const isVisible = matchesBrand && matchesCategory;

    shoe.classList.toggle("hide", !isVisible);
    if (isVisible) visibleCount++;
  });

  noResults.style.display = visibleCount ? "none" : "block";
}

function resetFilters() 
  brandSelect.value = "all";
  categorySelect.value = "all";
  filterShoes();
}

// Event Listeners
brandSelect.addEventListener("change", filterShoes);
categorySelect.addEventListener("change", filterShoes);
resetButton.addEventListener("click", resetFilters);
