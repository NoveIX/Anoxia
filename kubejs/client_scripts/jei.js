//Item
JEIEvents.hideItems((event) => {
  gameItem.rmOut.forEach((item) => event.hide(item));
  gameItem.rmIn.forEach((item) => event.hide(item));
  gameItem.jeiHide.forEach((item) => event.hide(item));
});

JEIEvents.addItems((event) => gameItem.jeiAdd.forEach((item) => event.add(item)));

//# ====================================================================================== #

//Fluid
JEIEvents.hideFluids((event) => {
  gameFluid.rmOut.forEach((fluid) => event.hide(fluid));
  gameFluid.rmIn.forEach((fluid) => event.hide(fluid));
  gameFluid.jeiHide.forEach((item) => event.hide(item));
});

JEIEvents.addFluids((event) => gameFluid.jeiAdd.forEach((fluid) => event.add(fluid)));

//# ====================================================================================== #

//Recipe
JEIEvents.removeRecipes((event) => {
  const jeiHideRecipe = ['mm:oven_charcoal_1', 'mm:oven_charcoal_2', 'mm:oven_charcoal_3', 'mm:oven_coke_1', 'mm:oven_coke_2', 'mm:oven_coke_3', 'mm:oven_coke_block_1', 'mm:oven_coke_block_2', 'mm:oven_coke_block_3'];
  jeiHideRecipe.forEach((id) => event.remove('mm:oven_recipe', id));
});

//List all jei categories
/*
  JEIEvents.removeCategories((event) => {
  const categ = event.getCategories();
  console.log('=== CATEGORY IDS ===');
  categ.forEach((i) => console.log(i));
});
console.log('=== CATEGORY IDS ===');
let categories = global.jeiRuntime.recipeManager.createRecipeCategoryLookup().get().toList();
categories.forEach((category) => console.log(category.getRecipeType().getUid()));
*/
