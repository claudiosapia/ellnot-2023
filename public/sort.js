document
  .querySelector(".products-sorting")
  .addEventListener("change", function (e) {
    const sortBy = e.target.value;
    const products = Array.from(document.querySelectorAll(".product"));

    products.sort(function (a, b) {
      switch (sortBy) {
        case "type":
          return a.dataset.category.localeCompare(b.dataset.category);
        case "l2h":
          return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
        case "h2l":
          return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
        case "size":
          return parseFloat(a.dataset.size) - parseFloat(b.dataset.size);
        default:
          return 0;
      }
    });

    const productGrid = document.querySelector("#list");
    productGrid.innerHTML = "";

    const numColumns = 4;
    let currentRow = null;

    products.forEach(function (product, index) {
      // Create a new row every `numColumns` products
      if (index % numColumns === 0) {
        currentRow = document.createElement("div");
        currentRow.className =
          " main-row-products row row-cols-1 row-cols-md-4 g-4 my-5 py-3";
        productGrid.appendChild(currentRow);
      }

      // Create a new column for the product
      const column = document.createElement("div");
      column.className = `col-md-${12 / numColumns}`;
      column.appendChild(product);
      currentRow.appendChild(column);
    });
  });
