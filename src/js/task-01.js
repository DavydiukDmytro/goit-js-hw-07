const categoriesRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesRef.length}\n\n`);

categoriesRef.forEach(categorie => {

    const categorieTitle = categorie.firstElementChild;
    console.log(`Category: ${categorieTitle.textContent}`);

    const numberOfCategorysItems = categorie.lastElementChild.children;
    console.log(`Elements: ${numberOfCategorysItems.length}\n\n`);
});