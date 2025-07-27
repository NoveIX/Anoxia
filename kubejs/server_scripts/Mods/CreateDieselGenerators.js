ServerEvents.recipes((event) => {
	//Restore Recipes
	//========================================================================================================================================

	//#region BasinFermenting
	event.remove({ id: "createdieselgenerators:basin_fermenting/dough" });
	const BasinFermentingPattern = [
		{
			//Restore BasinFermenting flour + Water => PamHC Dought
			get: [{ item: "pamhc2foodcore:doughitem" }, { item: "create:wheat_flour", chance: 0.1 }],
			put: [{ tag: "forge:flour/wheat" }, { fluid: "minecraft:water", amount: 1000 }],
		},
	];
	function BasinFermentingRecipes({ get, put }) {
		event.custom({
			type: "createdieselgenerators:basin_fermenting",
			ingredients: put,
			processingTime: 200,
			results: get,
		});
	}
	BasinFermentingPattern.forEach(BasinFermentingRecipes);
	//#endregion
});
