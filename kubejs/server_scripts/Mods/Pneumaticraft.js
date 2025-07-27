ServerEvents.recipes((event) => {
	//UV Box
	event.remove({ output: "pneumaticcraft:uv_light_box" });
	event.shaped("pneumaticcraft:uv_light_box", ["PPP", "CBT", "CCC"], {
		P: "projectred_illumination:purple_illumar_lamp",
		C: "#forge:ingots/compressed_iron",
		B: "pneumaticcraft:pcb_blueprint",
		T: "pneumaticcraft:pressure_tube",
	});

	//Explosion
	//event.custom({ type: Explosion, input: { tag: "forge:ingots/iron" }, loss_rate: 20, results: [{ item: "pneumaticcraft:ingot_iron_compressed" }] });
	//event.custom({ type: Explosion, input: { tag: "forge:storage_blocks/iron" }, loss_rate: 20, results: [{ item: "pneumaticcraft:compressed_iron_block" }] });

	//#region Chamber
	event.remove({ type: "pneumaticcraft:pressure_chamber" });
	event.remove({ id: "pneumaticcraft:pressure_chamber/pressure_chamber_enchanting" });
	event.remove({ id: "pneumaticcraft:pressure_chamber/pressure_chamber_disenchanting" });
	const ChamberPattern = [
		{
			//Capacitor
			get: [{ item: "pneumaticcraft:capacitor" }],
			put: [{ tag: "forge:plastic" }, { tag: "forge:ingots/compressed_iron" }, { tag: "forge:ingots/red_alloy" }, { item: "oc2r:cpu_tier_4" }, { item: "powah:capacitor_spirited" }],
			bar: 1.5,
		},
		{
			//Compressed Iron Block
			get: [{ item: "pneumaticcraft:compressed_iron_block" }],
			put: [{ tag: "forge:storage_blocks/iron" }],
			bar: 2.5,
		},
		{
			//Compressed Iron ingot
			get: [{ item: "pneumaticcraft:ingot_iron_compressed" }],
			put: [{ tag: "forge:ingots/iron" }],
			bar: 2.5,
		},
		{
			//Compressed Stone
			get: [{ item: "pneumaticcraft:compressed_stone" }],
			put: [{ tag: "forge:stone" }],
			bar: 1.5,
		},
		{
			//Empty PCB
			get: [{ item: "pneumaticcraft:empty_pcb" }],
			put: [{ tag: "forge:plastic" }, { tag: "forge:ingots/compressed_iron" }, { item: "thermal:rf_coil" }, { tag: "forge:plates/copper" }, { tag: "moonbase:coil/copper" }],
			bar: 2,
		},
		{
			//Etching Acid Bucket
			get: [{ item: "pneumaticcraft:etching_acid_bucket" }],
			put: [{ item: "minecraft:water_bucket" }, { type: "pneumaticcraft:stacked_item", count: 3, item: "chemlib:nitric_acid" }],
			bar: 1.5,
		},
		{
			//Solar Wafer
			get: [{ item: "pneumaticcraft:solar_wafer" }],
			put: [
				{ type: "pneumaticcraft:stacked_item", count: 4, item: "projectred_core:electrotine_silicon" },
				{ type: "pneumaticcraft:stacked_item", count: 4, tag: "forge:dusts/phosphorus" },
			],
			bar: 3,
		},
		{
			//Transistor
			get: [{ item: "pneumaticcraft:transistor" }],
			put: [{ tag: "forge:plastic" }, { tag: "forge:ingots/compressed_iron" }, { tag: "forge:ingots/red_alloy" }, { item: "oc2r:transistor" }],
			bar: 1.5,
		},
		{
			//Turbine Blade
			get: [{ item: "pneumaticcraft:turbine_blade" }],
			put: [{ tag: "forge:ingots/gold" }, { type: "pneumaticcraft:stacked_item", count: 2, tag: "forge:dusts/redstone" }],
			bar: 1.5,
		},
	];
	function ChamberRecipes({ get, put, bar }) {
		event.custom({
			type: "pneumaticcraft:pressure_chamber",
			inputs: put,
			pressure: bar,
			results: get,
		});
	}
	ChamberPattern.forEach(ChamberRecipes);
	//#endregion

	//#region Explosion
	const ExplosionPattern = [];
	function ExplosionRecipes({ get, put, lost }) {
		event.custom({
			type: "pneumaticcraft:explosion_crafting",
			input: put,
			loss_rate: lost,
			results: get,
		});
	}
	//ExplosionPattern.forEach(ExplosionRecipes);
	//#endregion
});
