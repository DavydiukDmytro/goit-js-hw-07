const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredientsRef = document.querySelector('#ingredients');

const makeIngredients = ingredients => ingredients.map(ingredient => {
    const liRef = document.createElement('li');
    liRef.textContent = ingredient;
    liRef.classList.add('item');

    return liRef;
  });

const listElements = makeIngredients(ingredients);
listIngredientsRef.append(...listElements);