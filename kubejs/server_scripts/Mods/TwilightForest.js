ServerEvents.recipes((event) => {
	//Log Core
	const CoreConvertPattern = [
		{ get: "twilightforest:time_log", put: "twilightforest:time_log_core" },
		{ get: "twilightforest:transformation_log", put: "twilightforest:transformation_log_core" },
		{ get: "twilightforest:mining_log_core", put: "twilightforest:mining_log" },
		{ get: "twilightforest:sorting_log", put: "twilightforest:sorting_log_core" },
	];
	function CoreConvertRecipes({ get, put }) {
		event.shaped(Item.of(get, 64), ["L"], { L: put });
	}
	CoreConvertPattern.forEach(CoreConvertRecipes);

	// Uberous Soil
	event.shaped("twilightforest:uberous_soil", ["FFF", "FRF", "FFF"], { R: "farmersdelight:rich_soil", F: "industrialforegoing:fertilizer" });
});
