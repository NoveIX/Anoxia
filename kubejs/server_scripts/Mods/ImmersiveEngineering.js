ServerEvents.recipes((event) => {
	//LV Wire Coil
	event.remove({ output: "immersiveengineering:wirecoil_copper" });
	event.shapeless("immersiveengineering:wirecoil_copper", ["immersiveengineering:wirecoil_copper_ins", "#immersiveengineering:tools/wirecutters"]);
	event.shaped("immersiveengineering:wirecoil_copper", ["CCC", "CSC", "CCC"], { C: "#forge:wires/copper", S: "createaddition:spool" });
	event.shapeless("immersiveengineering:wirecoil_copper", ["createaddition:copper_spool"]);

	//LV Insulated Coil
	event.remove({ output: "immersiveengineering:wirecoil_copper_ins" });
	event.shaped("immersiveengineering:wirecoil_copper_ins", [" T ", "TCT", " T "], { C: "immersiveengineering:wirecoil_copper", T: "immersiveengineering:hemp_fabric" });

	//MV Wire Coil
	event.remove({ output: "immersiveengineering:wirecoil_electrum" });
	event.shapeless("immersiveengineering:wirecoil_electrum", ["immersiveengineering:wirecoil_electrum_ins", "#immersiveengineering:tools/wirecutters"]);
	event.shaped("immersiveengineering:wirecoil_electrum", ["EEE", "ESE", "EEE"], { E: "#forge:wires/electrum", S: "createaddition:spool" });
	event.shapeless("immersiveengineering:wirecoil_electrum", ["createaddition:electrum_spool"]);

	//MV Insulated Coil
	event.remove({ output: "immersiveengineering:wirecoil_electrum_ins" });
	event.shaped("immersiveengineering:wirecoil_electrum_ins", [" T ", "TET", " T "], { E: "immersiveengineering:wirecoil_electrum", T: "immersiveengineering:hemp_fabric" });

	//HV Wire Coil
	event.remove({ output: "immersiveengineering:wirecoil_steel" });
	event.shaped("immersiveengineering:wirecoil_steel", ["AWA", "WSW", "AWA"], { A: "#forge:wires/aluminum", S: "createaddition:spool", W: "#forge:wires/steel" });

	//Structure Coil
	event.remove({ output: "immersiveengineering:wirecoil_structure_steel" });
	event.shaped("immersiveengineering:wirecoil_structure_steel", ["WWW", "WSW", "WWW"], { S: "createaddition:spool", W: "#forge:wires/steel" });

	//Redstone Coil
	event.remove({ output: "immersiveengineering:wirecoil_redstone" });
	event.shaped("immersiveengineering:wirecoil_redstone", ["AAA", "RSR", "AAA"], { A: "#forge:wires/aluminum", R: "#forge:ingots/red_alloy", S: "createaddition:spool" });

	//Rope Coil
	event.remove({ output: "immersiveengineering:wirecoil_structure_rope" });
	event.shaped("immersiveengineering:wirecoil_structure_rope", ["HHH", "HSH", "HHH"], { H: "immersiveengineering:hemp_fiber", S: "createaddition:spool" });

	//Saw Blade
	event.remove({ output: "immersiveengineering:sawblade" });
	event.shaped("immersiveengineering:sawblade", [" P ", "PGP", " P "], { P: "#forge:plates/steel", G: "#forge:gears/steel" });

	//Sawdust Flooring
	event.remove({ output: "immersiveengineering:sawdust" });
	event.shaped(Item.of("immersiveengineering:sawdust", 3), ["SSS"], { S: "#forge:dusts/wood" });

	////Furnace
	//Coke Brick
	event.remove({ id: "immersiveengineering:crafting/cokebrick" });
	event.remove({ id: "immersiveengineering:crafting/cokebrick_from_slab" });
	event.shaped("immersiveengineering:cokebrick", ["PBP", "BSB", "PBP"], { P: "exnihilosequentia:porcelain_clay", B: "#forge:ingots/brick", S: "#forge:sandstone/colorless" });

	//Kiln Brick
	event.remove({ id: "immersiveengineering:crafting/alloybrick" });
	event.remove({ id: "immersiveengineering:crafting/alloybrick_from_slab" });
	event.remove({ id: "createaddition:compat/immersiveengineering/item_application/kiln_brick" });
	event.shaped("immersiveengineering:alloybrick", ["RN", "NR"], { R: "#forge:sandstone/red", N: "#forge:ingots/brick" });

	//Blast Brick
	event.remove({ id: "immersiveengineering:crafting/blastbrick" });
	event.remove({ id: "immersiveengineering:crafting/blastbrick_from_slab" });
	event.shaped("immersiveengineering:blastbrick", ["NBN", "BCB", "NBN"], { N: "#forge:ingots/nether_brick", B: "#forge:ingots/brick", C: "immersiveengineering:cokebrick" });

	//Blast Brick Reinforced
	event.remove({ id: "immersiveengineering:crafting/blastbrick_reinforced" });
	event.remove({ id: "immersiveengineering:crafting/blastbrick_reinforced_from_slab" });
	event.remove({ id: "createaddition:compat/immersiveengineering/item_application/reinforced_blast_brick" });
	event.shaped("immersiveengineering:blastbrick_reinforced", ["S S", " B ", "S S"], { S: "#forge:plates/steel", B: "immersiveengineering:blastbrick" });

	//Scaffoling Steel
	event.remove({ id: "immersiveengineering:crafting/steel_scaffolding_standard" });
	event.remove({ id: "immersiveengineering:crafting/steel_scaffolding_standard_from_slab" });
	event.remove({ id: "immersiveengineering:crafting/steel_scaffolding_grate_top_from_slab" });
	event.remove({ id: "immersiveengineering:crafting/steel_scaffolding_wooden_top_from_slab" });
	event.shaped(Item.of("immersiveengineering:steel_scaffolding_standard", 3), ["PPP", " R ", "R R"], { P: "#forge:plates/steel", R: "#forge:rods/steel" });

	//Scaffoling Aluminum
	event.remove({ id: "immersiveengineering:crafting/stairs_alu_scaffolding_standard" });
	event.remove({ id: "immersiveengineering:crafting/steel_scaffolding_standard_from_slab" });
	event.remove({ id: "immersiveengineering:crafting/alu_scaffolding_grate_top_from_slab" });
	event.remove({ id: "immersiveengineering:crafting/alu_scaffolding_wooden_top_from_slab" });
	event.shaped(Item.of("immersiveengineering:alu_scaffolding_standard", 3), ["PPP", " R ", "R R"], { P: "#forge:plates/aluminum", R: "#forge:rods/aluminum" });

	//Concrete Leaded
	event.remove({ id: "immersiveengineering:crafting/concrete_leaded" });
	event.remove({ id: "immersiveengineering:crafting/concrete_leaded_from_slab" });
	event.remove({ id: "createaddition:compat/immersiveengineering/item_application/leaded_concrete" });
	event.shaped("immersiveengineering:concrete_leaded", ["P P", " B ", "P P"], { P: "#forge:plates/lead", B: "immersiveengineering:concrete" });

	//Coal Coke Block
	event.remove({ id: "immersiveengineering:crafting/coal_coke_to_coke" });
	event.remove({ id: "immersiveengineering:crafting/coke_from_slab" });
	event.remove({ id: "immersiveengineering:crafting/coke_to_coal_coke" });
	//event.shaped("immersiveengineering:coke", ["CCC", "CCC", "CCC"], { C: "#forge:coal_coke" });
	//event.shapeless("immersiveengineering:coke", ["thermal:coal_coke_block"]);

	//#region Alloy
	const AlloyPattern = [
		{
			get: { base_ingredient: { item: "projectred_core:red_ingot" }, count: 1 },
			put: { base_ingredient: { tag: "forge:ingots/copper" }, count: 1 },
			add: { base_ingredient: { tag: "forge:dusts/redstone" }, count: 4 },
		},
		{
			get: { base_ingredient: { item: "projectred_core:electrotine_ingot" }, count: 1 },
			put: { base_ingredient: { tag: "forge:ingots/copper" }, count: 1 },
			add: { base_ingredient: { tag: "forge:dusts/electrotine" }, count: 4 },
		},
	];
	function AlloyRecipes({ get, put, add }) {
		event.custom({
			type: "immersiveengineering:alloy",
			input0: put,
			input1: add,
			result: get,
			time: 200,
		});
	}
	AlloyPattern.forEach(AlloyRecipes);
	//#endregion

	//#region ArcFurnace
	const ArcFurnacePattern = [
		{
			get: [{ base_ingredient: { item: "projectred_core:red_ingot" }, count: 1 }],
			put: { base_ingredient: { tag: "forge:ingots/copper" }, count: 1 },
			add: [{ base_ingredient: { tag: "forge:dusts/redstone" }, count: 4 }],
		},
		{
			get: [{ base_ingredient: { item: "projectred_core:electrotine_ingot" }, count: 1 }],
			put: { base_ingredient: { tag: "forge:ingots/copper" }, count: 1 },
			add: [{ base_ingredient: { tag: "forge:dusts/electrotine" }, count: 4 }],
		},
	];
	function ArcFurnaceRecipes({ get, put, add }) {
		event.custom({
			type: "immersiveengineering:arc_furnace",
			input: put,
			additives: add,
			results: get,
			energy: 51200,
			time: 100,
		});
	}
	ArcFurnacePattern.forEach(ArcFurnaceRecipes);
	//#endregion

	//#region CokeOven
	event.remove({ type: "immersiveengineering:coke_oven" });
	const CokeOvenPattern = [
		{
			get: { item: "minecraft:charcoal" },
			put: { tag: "minecraft:logs" },
			fluid: 250,
			tick: 900,
		},
		{
			get: { item: "thermal:coal_coke" },
			put: { item: "minecraft:coal" },
			fluid: 500,
			tick: 1800,
		},
		{
			get: { item: "thermal:coal_coke_block" },
			put: { item: "minecraft:coal_block" },
			fluid: 4500,
			tick: 16200,
		},
	];
	function CokeOvenRecipes({ get, put, fluid, tick }) {
		event.custom({
			type: "immersiveengineering:coke_oven",
			creosote: fluid,
			input: put,
			result: get,
			time: tick,
		});
	}
	CokeOvenPattern.forEach(CokeOvenRecipes);
	//#endregion
});
