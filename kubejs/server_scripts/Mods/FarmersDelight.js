ServerEvents.recipes((event) => {
	//Remove Recipes
	event.remove({ id: "farmersdelight:wheat_dough_from_water" }); //Crafting: Wheat + Water => Dough
	event.remove({ id: "farmersdelight:wheat_dough_from_eggs" }); //Crafting: Wheat + Egg => Dough

	//Organic Compost
	event.remove({ output: "farmersdelight:organic_compost" });
	event.shaped("farmersdelight:organic_compost", ["FFF", "FDF", "FFF"], { F: "#anoxia:fertilizers", D: "minecraft:dirt" });

	//#region Cutting
	event.remove({ output: "forbidden_arcanus:ender_pearl_fragment" });
	event.remove({ output: "projectred_core:silicon" });
	const CuttingPattern = [
		{
			//EnderPearl Fragment
			get: [{ item: "forbidden_arcanus:ender_pearl_fragment", count: 4 }],
			put: [{ item: "minecraft:ender_pearl" }],
			cutter: { tag: "forge:tools/knives" },
		},
		{
			//ProjectRED Silicon
			get: [{ item: "projectred_core:silicon", count: 4 }],
			put: [{ item: "projectred_core:boule" }],
			cutter: { tag: "forge:tools/knives" },
		},
	];
	function CuttingRecipes({ get, put, cutter }) {
		event.custom({
			type: "farmersdelight:cutting",
			ingredients: put,
			result: get,
			tool: cutter,
		});
	}
	CuttingPattern.forEach(CuttingRecipes);
	//#endregion
});
