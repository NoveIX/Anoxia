ServerEvents.recipes((event) => {
	//#region RmID
	const RmID = [
		////EnderIO
		//Copper Alloy
		"jaopca:thermal_expansion.storage_block_to_material.copper_alloy",
		"jaopca:thermal_expansion.nugget_to_material.copper_alloy",
		//Energetic Alloy
		"jaopca:thermal_expansion.storage_block_to_material.energetic_alloy",
		"jaopca:thermal_expansion.nugget_to_material.energetic_alloy",
		//Vibrant Alloy
		"jaopca:thermal_expansion.storage_block_to_material.vibrant_alloy",
		"jaopca:thermal_expansion.nugget_to_material.vibrant_alloy",
		//Redstone Alloy
		"jaopca:thermal_expansion.storage_block_to_material.redstone_alloy",
		"jaopca:thermal_expansion.nugget_to_material.redstone_alloy",
		//Conductive Alloy
		"jaopca:thermal_expansion.storage_block_to_material.conductive_alloy",
		"jaopca:thermal_expansion.nugget_to_material.conductive_alloy",
		//Pulsating Iron
		"jaopca:thermal_expansion.storage_block_to_material.pulsating_alloy",
		"jaopca:thermal_expansion.nugget_to_material.pulsating_alloy",
		//Dark Steel
		"jaopca:thermal_expansion.storage_block_to_material.dark_steel",
		"jaopca:thermal_expansion.nugget_to_material.dark_steel",
		//Soularium
		"jaopca:thermal_expansion.storage_block_to_material.soularium",
		"jaopca:thermal_expansion.nugget_to_material.soularium",
		//End Stone
		"jaopca:thermal_expansion.storage_block_to_material.end_steel",
		"jaopca:thermal_expansion.nugget_to_material.end_steel",

		////Thermal
		//Tin
		"enderio:smelting/create/smelting/ingot_tin_compat_mekanism",
		"enderio:smelting/exnihilosequentia/ens_tin_ingot",
		"enderio:smelting/mekanism/processing/tin/ingot/from_ore_smelting",
		"enderio:smelting/chemlib/tin_ingot_from_smelting_tin_dust",
		"thermal_extra:machine/chiller/raw_tin",
		"thermal:machines/press/packing3x3/press_tin_nugget_packing",
		"jaopca:thermal_expansion.storage_block_to_material.tin",
		"thermal:machines/press/unpacking/press_tin_unpacking",
		"thermal:machines/smelter/smelter_tin_dust",
		"thermal:machines/smelter/smelter_tin_plate_to_ingot",
		//Lead
		"enderio:smelting/create/smelting/ingot_lead_compat_immersiveengineering",
		"enderio:smelting/exnihilosequentia/ens_lead_ingot",
		"enderio:smelting/thermal/smelting/lead_ingot_from_deepslate_ore_smelting",
		"enderio:smelting/chemlib/lead_ingot_from_smelting_lead_dust",
		"thermal_extra:machine/chiller/raw_lead",
		"thermal:machines/press/packing3x3/press_lead_nugget_packing",
		"thermal:machines/press/unpacking/press_lead_unpacking",
		"thermal:machines/smelter/smelter_lead_dust",
		"thermal:machines/smelter/smelter_lead_plate_to_ingot",
		//Silver
		"enderio:smelting/create/smelting/ingot_silver_compat_immersiveengineering",
		"enderio:smelting/chemlib/silver_ingot_from_smelting_silver_dust",
		"enderio:smelting/immersiveengineering/smelting/ingot_silver3",
		"enderio:smelting/immersiveengineering/smelting/ingot_silver",
		"thermal_extra:machine/chiller/raw_silver",
		"thermal:machines/press/packing3x3/press_silver_nugget_packing",
		"thermal:machines/press/unpacking/press_silver_unpacking",
		"thermal:machines/smelter/smelter_silver_dust",
		"thermal:machines/smelter/smelter_silver_plate_to_ingot",
		//Nickel
		"enderio:smelting/immersiveengineering/smelting/ingot_nickel",
		"enderio:smelting/immersiveengineering/smelting/ingot_nickel3",
		"enderio:smelting/create/smelting/ingot_nickel_compat_immersiveengineering",
		"enderio:smelting/chemlib/nickel_ingot_from_smelting_nickel_dust",
		"thermal_extra:machine/chiller/raw_nickel",
		"thermal:machines/press/packing3x3/press_nickel_nugget_packing",
		"thermal:machines/press/unpacking/press_nickel_unpacking",
		"thermal:machines/smelter/smelter_nickel_dust",
		"thermal:machines/smelter/smelter_nickel_plate_to_ingot",
		//Signalum
		"enderio:smelting/thermal/smelting/signalum_ingot_from_dust_smelting",
		"thermal:machines/press/packing3x3/press_signalum_nugget_packing",
		"thermal:machines/press/unpacking/press_signalum_unpacking",
		"thermal:machines/smelter/smelter_signalum_dust",
		"thermal:machines/smelter/smelter_signalum_plate_to_ingot",
		"thermal:machines/smelter/smelter_alloy_signalum",
		//Lumium
		"enderio:smelting/thermal/smelting/lumium_ingot_from_dust_smelting",
		"thermal:machines/press/packing3x3/press_lumium_nugget_packing",
		"thermal:machines/press/unpacking/press_lumium_unpacking",
		"thermal:machines/smelter/smelter_lumium_dust",
		"thermal:machines/smelter/smelter_lumium_plate_to_ingot",
		"thermal:machines/smelter/smelter_alloy_lumium",
		//Enderium
		"enderio:smelting/thermal/smelting/enderium_ingot_from_dust_smelting",
		"thermal:machines/press/packing3x3/press_enderium_nugget_packing",
		"thermal:machines/press/unpacking/press_enderium_unpacking",
		"thermal:machines/smelter/smelter_enderium_dust",
		"thermal:machines/smelter/smelter_enderium_plate_to_ingot",
		"thermal:machines/smelter/smelter_alloy_enderium",
		//Steel
		"enderio:smelting/mekanism/processing/steel/ingot/from_dust_smelting",
		"thermal:machines/press/packing/press_steel_nugget_packing",
		"thermal:machines/press/unpacking/press_steel_unpacking",
		"thermal:machines/smelter/smelter_steel_dust",
		"thermal:machines/smelter/smelter_alloy_steel",
		//Rose Gold
		"enderio:smelting/thermal/smelting/rose_gold_ingot_from_dust_smelting",
		"thermal:machines/press/packing/press_rose_gold_nugget_packing",
		"thermal:machines/press/unpacking/press_rose_gold_unpacking",
		"thermal:machines/smelter/smelter_rose_gold_dust",
		"thermal:machines/smelter/smelter_alloy_rose_gold",
		//Bronze
		"enderio:smelting/mekanism/processing/bronze/ingot/from_dust_smelting",
		"thermal:machines/press/packing3x3/press_bronze_nugget_packing",
		"thermal:machines/press/unpacking/press_bronze_unpacking",
		"thermal:machines/smelter/smelter_bronze_dust",
		"thermal:machines/smelter/smelter_bronze_plate_to_ingot",
		"thermal:machines/smelter/smelter_alloy_bronze",
		//Electrum
		"enderio:smelting/immersiveengineering/smelting/ingot_electrum_from_dust",
		"thermal:machines/press/packing3x3/press_electrum_nugget_packing",
		"thermal:machines/press/unpacking/press_electrum_unpacking",
		"thermal:machines/smelter/smelter_electrum_dust",
		"thermal:machines/smelter/smelter_electrum_plate_to_ingot",
		"thermal:machines/smelter/smelter_alloy_electrum",
		//Invar
		"enderio:smelting/thermal/smelting/invar_ingot_from_dust_smelting",
		"thermal:machines/press/packing3x3/press_invar_nugget_packing",
		"thermal:machines/press/unpacking/press_invar_unpacking",
		"thermal:machines/smelter/smelter_invar_dust",
		"thermal:machines/smelter/smelter_invar_plate_to_ingot",
		"thermal:machines/smelter/smelter_alloy_invar",
		//Constantan
		"enderio:smelting/immersiveengineering/smelting/ingot_constantan_from_dust",
		"thermal:machines/press/packing3x3/press_constantan_nugget_packing",
		"thermal:machines/press/unpacking/press_constantan_unpacking",
		"thermal:machines/smelter/smelter_constantan_dust",
		"thermal:machines/smelter/smelter_constantan_plate_to_ingot",
		"thermal:machines/smelter/smelter_alloy_constantan",

		//Thermal Endergy
		"enderio:smelting/thermalendergy/prismalium_ingot_from_dust",
		"jaopca:thermal_expansion.nugget_to_material.prismalium",
		"thermalendergy:machine/press/unpacking/press_prismalium_unpacking",
		"jaopca:thermal_expansion.storage_block_to_material.prismalium",
		"jaopca:thermal_expansion.dust_to_material.prismalium",
		"thermalendergy:machine/smelter/prismalium_ingot",

		"enderio:smelting/thermalendergy/melodium_ingot_from_dust",
		"jaopca:thermal_expansion.nugget_to_material.melodium",
		"thermalendergy:machine/press/unpacking/press_melodium_unpacking",
		"jaopca:thermal_expansion.storage_block_to_material.melodium",
		"jaopca:thermal_expansion.dust_to_material.melodium",
		"thermalendergy:machine/smelter/melodium_ingot",

		"enderio:smelting/thermalendergy/stellarium_ingot_from_dust",
		"jaopca:thermal_expansion.nugget_to_material.stellarium",
		"thermalendergy:machine/press/unpacking/press_stellarium_unpacking",
		"jaopca:thermal_expansion.storage_block_to_material.stellarium",
		"jaopca:thermal_expansion.dust_to_material.stellarium",
		"thermalendergy:machine/smelter/stellarium_ingot",
	];
	RmID.forEach((ID) => {
		event.remove({ id: ID });
	});
	//#endregion

	//#region Fun Simple
	function SimpleAlloy({ alloy, get, n0, put1, n1, put2, n2, rsflux }) {
		if (alloy === "simple") {
			//Immersive Alloy
			event.custom({
				type: "immersiveengineering:alloy",
				input0: { base_ingredient: { tag: put1 }, count: n1 },
				input1: { base_ingredient: { tag: put2 }, count: n2 },
				result: { base_ingredient: { item: get }, count: n0 },
				time: 200,
			});

			//Immersive Arc
			event.custom({
				type: "immersiveengineering:arc_furnace",
				input: { base_ingredient: { tag: put1 }, count: n1 },
				additives: [{ base_ingredient: { tag: put2 }, count: n2 }],
				results: [{ base_ingredient: { item: get }, count: n0 }],
				slag: { item: "thermal:slag" },
				energy: rsflux,
				time: 100,
			});

			EnderAlloy({ alloy: alloy, get: get, n0: n0, put1: put1, n1: n1, put2: put2, n2: n2, rsflux: rsflux });
		}
	}
	//#endregion

	//#region Fun Ender
	function EnderAlloy({ alloy, get, n0, put1, n1, put2, n2, rsflux }) {
		if (alloy === "ender") {
			//EnderIO
			event.custom({
				type: "enderio:alloy_smelting",
				inputs: [
					{ count: n1, ingredient: { tag: put1 } },
					{ count: n2, ingredient: { tag: put2 } },
				],
				result: { item: get, count: n0 },
				experience: 0.3,
				energy: rsflux,
			});

			//Thermal
			event.custom({
				type: "thermal:smelter",
				ingredients: [
					{ tag: put2, count: n2 },
					{ tag: put1, count: n1 },
				],
				result: [{ item: get, count: n0 }],
				energy: rsflux,
			});
		}
	}
	//#endregion

	//#region Fun Complex
	function ComplexAlloy({ alloy, get, n0, put1, n1, put2, n2, put3, n3, rsflux }) {
		if (alloy === "complex") {
			//EnderIO
			event.custom({
				type: "enderio:alloy_smelting",
				inputs: [
					{ count: n1, ingredient: { tag: put1 } },
					{ count: n2, ingredient: { tag: put2 } },
					{ count: n3, ingredient: { tag: put3 } },
				],
				result: { item: get, count: n0 },
				experience: 0.3,
				energy: rsflux,
			});

			//Thermal
			event.custom({
				type: "thermal:smelter",
				ingredients: [
					{ tag: put2, count: n2 },
					{ tag: put1, count: n1 },
					{ tag: put3, count: n3 },
				],
				result: [{ item: get, count: n0 }],
				energy: rsflux,
			});
		}
	}
	//#endregion

	//#region Fun Smelter
	function Smelter({ get, dust }) {
		//Furnace
		event.smelting(get, `#${dust}`);

		//Immersive
		event.custom({
			type: "immersiveengineering:arc_furnace",
			additives: [],
			input: { tag: dust },
			results: [{ item: get }],
			energy: 2000,
			time: 100,
		});

		//EnderIO
		event.custom({
			type: "enderio:alloy_smelting",
			inputs: [{ count: 1, ingredient: { tag: dust } }],
			result: { item: get },
			experience: 0.3,
			energy: 2000,
		});

		//Thermal
		event.custom({
			type: "thermal:smelter",
			ingredients: [{ tag: dust }],
			result: [{ item: get }],
			energy: 2000,
		});
	}
	//#endregion

	//#region Ingot
	const AlloyPattern = [
		//EnderIO
		{
			//Copper Alloy
			alloy: "ender",
			get: "enderio:copper_alloy_ingot",
			n0: 1,
			put1: "forge:ingots/copper",
			n1: 1,
			put2: "forge:silicon",
			n2: 1,
			rsflux: 4000,
			nugget: "forge:nuggets/copper_alloy",
			block: "forge:storage_blocks/copper_alloy",
		},
		{
			//Energetic Alloy
			alloy: "complex",
			get: "enderio:energetic_alloy_ingot",
			n0: 1,
			put1: "forge:dusts/redstone",
			n1: 1,
			put2: "forge:ingots/electrum",
			n2: 1,
			put3: "forge:dusts/glowstone",
			n3: 1,
			rsflux: 18000,
			nugget: "forge:nuggets/energetic_alloy",
			block: "forge:storage_blocks/energetic_alloy",
		},
		{
			//Vibrant Alloy
			alloy: "complex",
			get: "enderio:vibrant_alloy_ingot",
			n0: 1,
			put1: "forge:ingots/energetic_alloy",
			n1: 1,
			put2: "forge:ender_pearls",
			n2: 1,
			put3: "forge:ingots/rose_gold",
			n3: 1,
			rsflux: 24000,
			nugget: "forge:nuggets/vibrant_alloy",
			block: "forge:storage_blocks/vibrant_alloy",
		},
		{
			//Redstone Alloy
			alloy: "complex",
			get: "enderio:redstone_alloy_ingot",
			n0: 1,
			put1: "forge:ingots/red_alloy",
			n1: 1,
			put2: "forge:silicon",
			n2: 1,
			put3: "forge:ingots/graphite",
			n3: 1,
			rsflux: 4000,
			nugget: "forge:nuggets/redstone_alloy",
			block: "forge:storage_blocks/redstone_alloy",
		},
		{
			//Conductive Alloy
			alloy: "complex",
			get: "enderio:conductive_alloy_ingot",
			n0: 1,
			put1: "forge:ingots/red_alloy",
			n1: 1,
			put2: "forge:ingots/iron",
			n2: 1,
			put3: "forge:ingots/copper_alloy",
			n3: 1,
			rsflux: 8000,
			nugget: "forge:nuggets/conductive_alloy",
			block: "forge:storage_blocks/conductive_alloy",
		},
		{
			//Pulsating Alloy
			alloy: "ender",
			get: "enderio:pulsating_alloy_ingot",
			n0: 1,
			put1: "forge:ingots/iron",
			n1: 1,
			put2: "forge:ender_pearls",
			n2: 1,
			rsflux: 18000,
			nugget: "forge:nuggets/pulsating_alloy",
			block: "forge:storage_blocks/pulsating_alloy",
		},
		{
			//DarkSteel Ingot
			alloy: "complex",
			get: "enderio:dark_steel_ingot",
			n0: 1,
			put1: "forge:ingots/iron",
			n1: 1,
			put2: "forge:dusts/coal",
			n2: 8,
			put3: "forge:obsidian",
			n3: 1,
			rsflux: 48000,
			nugget: "forge:nuggets/dark_steel",
			block: "forge:storage_blocks/dark_steel",
		},
		{
			//Soularium Ingot
			alloy: "ender",
			get: "enderio:soularium_ingot",
			n0: 1,
			put1: "forge:ingots/cognitive_alloy",
			n1: 1,
			put2: "forge:ingots/gold",
			n2: 1,
			rsflux: 24000,
			nugget: "forge:nuggets/soularium",
			block: "forge:storage_blocks/soularium",
		},
		{
			//EndSteel Ingot
			alloy: "complex",
			get: "enderio:end_steel_ingot",
			n0: 1,
			put1: "forge:end_stones",
			n1: 1,
			put2: "forge:ingots/dark_steel",
			n2: 1,
			put3: "forge:obsidian",
			n3: 1,
			rsflux: 36000,
			nugget: "forge:nuggets/end_steel",
			block: "forge:storage_blocks/end_steel",
		},
		{
			//Modularium
			alloy: "complex",
			get: "moonbase:modularium",
			n0: 1,
			put1: "forge:ingots/vibrant_alloy",
			n1: 1,
			put2: "forge:ingots/enderium",
			n2: 1,
			put3: "forge:ingots/electrotine_alloy",
			n3: 1,
			rsflux: 48000,
		},

		//Thermal
		{
			//Tin
			get: "thermal:tin_ingot",
			dust: "forge:dusts/tin",
			nugget: "forge:nuggets/tin",
			block: "forge:storage_blocks/tin",
		},
		{
			//Lead
			get: "thermal:lead_ingot",
			dust: "forge:dusts/lead",
			nugget: "forge:nuggets/lead",
			block: "forge:storage_blocks/lead",
		},
		{
			//Silver
			get: "thermal:silver_ingot",
			dust: "forge:dusts/silver",
			nugget: "forge:nuggets/silver",
			block: "forge:storage_blocks/silver",
		},
		{
			//Nickel
			get: "thermal:nickel_ingot",
			dust: "forge:dusts/nickel",
			nugget: "forge:nuggets/nickel",
			block: "forge:storage_blocks/nickel",
		},
		{
			//Signalum
			alloy: "complex",
			get: "thermal:signalum_ingot",
			n0: 4,
			put1: "forge:ingots/copper",
			n1: 3,
			put2: "forge:ingots/silver",
			n2: 1,
			put3: "forge:dusts/redstone",
			n3: 10,
			rsflux: 24000,
			dust: "forge:dusts/signalum",
			nugget: "forge:nuggets/signalum",
			block: "forge:storage_blocks/signalum",
		},
		{
			//Lumium
			alloy: "complex",
			get: "thermal:lumium_ingot",
			n0: 4,
			put1: "forge:ingots/tin",
			n1: 3,
			put2: "forge:ingots/silver",
			n2: 1,
			put3: "forge:dusts/glowstone",
			n3: 4,
			rsflux: 24000,
			dust: "forge:dusts/signalum",
			dust: "forge:dusts/lumium",
			nugget: "forge:nuggets/lumium",
			block: "forge:storage_blocks/lumium",
		},
		{
			//Enderium
			alloy: "complex",
			get: "thermal:enderium_ingot",
			n0: 2,
			put1: "forge:ingots/tin",
			n1: 3,
			put2: "forge:ingots/silver",
			n2: 1,
			put3: "forge:ender_pearls",
			n3: 4,
			rsflux: 36000,
			dust: "forge:dusts/enderium",
			nugget: "forge:nuggets/enderium",
			block: "forge:storage_blocks/enderium",
		},
		{
			//Steel - Coal
			alloy: "simple",
			get: "thermal:steel_ingot",
			n0: 1,
			put1: "forge:ingots/iron",
			n1: 1,
			put2: "forge:dusts/coal",
			n2: 8,
			rsflux: 18000,
			dust: "forge:dusts/steel",
			nugget: "forge:nuggets/steel",
			block: "forge:storage_blocks/steel",
		},
		{
			//Rose Gold
			alloy: "simple",
			get: "thermal:rose_gold_ingot",
			n0: 2,
			put1: "forge:ingots/gold",
			n1: 1,
			put2: "forge:ingots/copper",
			n2: 1,
			rsflux: 18000,
			dust: "forge:dusts/rose_gold",
			nugget: "forge:nuggets/rose_gold",
			block: "forge:storage_blocks/rose_gold",
		},
		{
			//Bronze
			alloy: "simple",
			get: "thermal:bronze_ingot",
			n0: 4,
			put1: "forge:ingots/copper",
			n1: 3,
			put2: "forge:ingots/tin",
			n2: 1,
			rsflux: 18000,
			dust: "forge:dusts/bronze",
			nugget: "forge:nuggets/bronze",
			block: "forge:storage_blocks/bronze",
		},
		{
			//Electrum
			alloy: "simple",
			get: "thermal:electrum_ingot",
			n0: 2,
			put1: "forge:ingots/gold",
			n1: 1,
			put2: "forge:ingots/silver",
			n2: 1,
			rsflux: 18000,
			dust: "forge:dusts/electrum",
			nugget: "forge:nuggets/electrum",
			block: "forge:storage_blocks/electrum",
		},
		{
			//Invar
			alloy: "simple",
			get: "thermal:invar_ingot",
			n0: 3,
			put1: "forge:ingots/iron",
			n1: 2,
			put2: "forge:ingots/nickel",
			n2: 1,
			rsflux: 18000,
			dust: "forge:dusts/invar",
			nugget: "forge:nuggets/invar",
			block: "forge:storage_blocks/invar",
		},
		{
			//Constantan
			alloy: "simple",
			get: "thermal:constantan_ingot",
			n0: 2,
			put1: "forge:ingots/copper",
			n1: 1,
			put2: "forge:ingots/nickel",
			n2: 1,
			rsflux: 18000,
			dust: "forge:dusts/constantan",
			nugget: "forge:nuggets/constantan",
			block: "forge:storage_blocks/constantan",
		},

		//Thermal Endergy
		{
			//Prismalium
			alloy: "complex",
			get: "thermalendergy:prismalium_ingot",
			n0: 2,
			put1: "forge:ingots/prismarine",
			n1: 4,
			put2: "forge:ingots/enderium",
			n2: 1,
			put3: "forge:ingots/end_steel",
			n3: 1,
			rsflux: 48000,
			dust: "forge:dusts/prismalium",
			nugget: "forge:nuggets/prismalium",
			block: "forge:storage_blocks/prismalium",
		},
		{
			//Melodium
			alloy: "complex",
			get: "thermalendergy:melodium_ingot",
			n0: 2,
			put1: "forge:fruits/chorusfruit",
			n1: 4,
			put2: "forge:ingots/prismalium",
			n2: 1,
			put3: "forge:ingots/netherite",
			n3: 1,
			rsflux: 60000,
			dust: "forge:dusts/melodium",
			nugget: "forge:nuggets/melodium",
			block: "forge:storage_blocks/melodium",
		},
		{
			//Stellarium
			alloy: "complex",
			get: "thermalendergy:stellarium_ingot",
			n0: 2,
			put1: "forge:nether_stars",
			n1: 1,
			put2: "forge:ingots/melodium",
			n2: 1,
			put3: "forge:ingots/aethersteel",
			n3: 1,
			rsflux: 72000,
			dust: "forge:dusts/stellarium",
			nugget: "forge:nuggets/stellarium",
			block: "forge:storage_blocks/stellarium",
		},
	];
	function AlloyRecipes({ alloy, get, n0, put1, n1, put2, n2, put3, n3, rsflux, dust, nugget, block }) {
		//Remove
		event.remove({ output: get });

		//Recipes
		SimpleAlloy({ alloy: alloy, get: get, n0: n0, put1: put1, n1: n1, put2: put2, n2: n2, rsflux: rsflux });
		EnderAlloy({ alloy: alloy, get: get, n0: n0, put1: put1, n1: n1, put2: put2, n2: n2, rsflux: rsflux });
		ComplexAlloy({ alloy: alloy, get: get, n0: n0, put1: put1, n1: n1, put2: put2, n2: n2, put3: put3, n3: n3, rsflux: rsflux });

		////Smelting
		if (dust && dust.startsWith("forge:dusts/")) {
			Smelter({ get: get, dust: dust });
		}

		//Thermal - unPress
		if (block && block.startsWith("forge:storage_blocks/")) {
			event.shapeless(Item.of(get, 9), [`#${block}`]);
			event.custom({
				type: "thermal:press",
				ingredients: [{ tag: block, count: 1 }, { item: "thermal:press_unpacking_die" }],
				result: [{ item: get, count: 9 }],
				energy: 400,
			});
		}

		//Thermal - Press
		if (nugget && nugget.startsWith("forge:nuggets/")) {
			event.shaped(get, ["NNN", "NNN", "NNN"], { N: `#${nugget}` });
			event.custom({
				type: "thermal:press",
				ingredients: [{ tag: nugget, count: 9 }, { item: "thermal:press_packing_3x3_die" }],
				result: [{ item: get }],
				energy: 400,
			});
		}
	}
	AlloyPattern.forEach(AlloyRecipes);
	//#endregion

	//#region IngotAlt
	const AlloyAltPattern = [
		//EnderIO
		{
			//DarkSteel Ingot - Coke
			alloy: "complex",
			get: "enderio:dark_steel_ingot",
			n0: 1,
			put1: "forge:ingots/iron",
			n1: 1,
			put2: "forge:dusts/coal_coke",
			n2: 4,
			put3: "forge:obsidian",
			n3: 1,
			rsflux: 48000,
		},
		{
			//DarkSteel Ingot - Steel Alternative
			alloy: "ender",
			get: "enderio:dark_steel_ingot",
			n0: 1,
			put1: "forge:ingots/steel",
			n1: 1,
			put2: "forge:obsidian",
			n2: 1,
			rsflux: 24000,
		},

		//Thermal
		{
			//Steel - Coke
			alloy: "simple",
			get: "thermal:steel_ingot",
			n0: 1,
			put1: "forge:ingots/iron",
			n1: 1,
			put2: "forge:dusts/coal_coke",
			n2: 4,
			rsflux: 18000,
		},
	];
	function AlloyAltRecipes({ alloy, get, n0, put1, n1, put2, n2, put3, n3, rsflux }) {
		//Recipes
		SimpleAlloy({ alloy: alloy, get: get, n0: n0, put1: put1, n1: n1, put2: put2, n2: n2, rsflux: rsflux });
		EnderAlloy({ alloy: alloy, get: get, n0: n0, put1: put1, n1: n1, put2: put2, n2: n2, rsflux: rsflux });
		ComplexAlloy({ alloy: alloy, get: get, n0: n0, put1: put1, n1: n1, put2: put2, n2: n2, put3: put3, n3: n3, rsflux: rsflux });
	}
	AlloyAltPattern.forEach(AlloyAltRecipes);
	//#endregion

	//Restore Blast Furnace - Steel
	event.custom({
		type: "immersiveengineering:blast_furnace",
		input: { tag: "forge:ingots/iron" },
		result: { item: "thermal:steel_ingot" },
		slag: { item: "thermal:slag" },
		time: 1200,
	});
});
