const listOfCategories = document.querySelectorAll("#categories .item");
console.log("Number of categories:", listOfCategories.length);
for (let i = 0; i < listOfCategories.length; i += 1) {
  console.log("Category:", listOfCategories[i].querySelector("h2").textContent);
  console.log("Elements:", listOfCategories[i].querySelectorAll("li").length);
}
