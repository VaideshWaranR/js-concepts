let products = ["Pen", "Pencil", "Eraser", "Sharpener", "Scale"];
let timeoutId;
function debounceSearch() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    Search();
  }, 100);
}

function Search() {
  let input = document.getElementById("id1").value;
  let res = document.getElementById("res");
  res.innerHTML = "";
  for (let product of products) {
    if (product.toLowerCase().includes(input)) {
      let highLighted = product
        .toLowerCase()
        .replace(new RegExp(input, "gi"), "<b>$&</b>");
      res.innerHTML += highLighted + "<br>";
    }
  }
}
