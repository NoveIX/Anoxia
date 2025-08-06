ServerEvents.recipes((event) => {
	//Fertilizer
	event.shaped("industrialforegoing:fertilizer", ["CCC", "CCC", "CCC"], { C: "minecolonies:compost" });

	//Dye Mixer
	event.remove({ output: "industrialforegoing:dye_mixer" });
	event.shaped("industrialforegoing:dye_mixer", ["PGP", "RFB", "PAP"], { P: "#forge:plates/iron", F: "industrialforegoing:machine_frame_pity", A: "#forge:gears/gold", R: "minecraft:red_dye", G: "minecraft:green_dye", B: "minecraft:blue_dye" });

	//#region Crusher
	event.remove({ id: "industrialforegoing:crusher/sand_silicon" });
	const CrusherPattern = [
		{ get: { tag: "anoxia:dusts" }, put: { tag: "forge:sand" } },
		{ get: { tag: "anoxia:silicons" }, put: { tag: "anoxia:dust" } },
	];
	function CrusherRecipes({ get, put }) {
		event.custom({
			type: "industrialforegoing:crusher",
			input: put,
			output: get,
		});
	}
	CrusherPattern.forEach(CrusherRecipes);
	//#endregion
});
