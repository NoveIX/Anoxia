ServerEvents.recipes((event) => {
	//Floral Fertilizer
	event.remove({ output: "botania:fertilizer" });
	event.shapeless("botania:fertilizer", ["minecraft:bone_meal", "#botania:petals/flower", "#botania:petals/flower", "#botania:petals/flower", "#botania:petals/flower"]);
	event.shapeless("botania:fertilizer", ["botania:living_root"]);


	//#region Elven Trade
	const ElvenTradePattern = [
		//Aethersteel
		{ get: [{ item: "aethersteel:aetherslate" }], put: [{ item: "moonbase:compressed_deepslate" }] },
	];
	function ElvenTradeRecipes({ get, put }) {
		event.custom({
			type: "botania:elven_trade",
			ingredients: put,
			output: get,
		});
	}
	ElvenTradePattern.forEach(ElvenTradeRecipes);
	//#endregion
});
