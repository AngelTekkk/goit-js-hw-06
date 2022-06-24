const listOfCategories = document.querySelectorAll('#categories .item');
console.log('Number of categories:', listOfCategories.length);

listOfCategories.forEach(function (category) {
  console.log('Category:', category.querySelector('h2').textContent);
  console.log('Elements:', category.querySelectorAll('li').length);
});
