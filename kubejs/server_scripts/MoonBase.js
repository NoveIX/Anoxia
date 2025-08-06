ServerEvents.recipes((event) => {
	//Compressed
	const CompressPattern = [
		{ get: "anoxia:compressed_cobblestone", put: "minecraft:cobblestone" },
		{ get: "anoxia:double_compressed_cobblestone", put: "anoxia:compressed_cobblestone" },
		{ get: "anoxia:triple_compressed_cobblestone", put: "anoxia:double_compressed_cobblestone" },
		{ get: "anoxia:quadruple_compressed_cobblestone", put: "anoxia:triple_compressed_cobblestone" },
		{ get: "anoxia:quintuple_compressed_cobblestone", put: "anoxia:quadruple_compressed_cobblestone" },
		{ get: "anoxia:sextuple_compressed_cobblestone", put: "anoxia:quintuple_compressed_cobblestone" },
		{ get: "anoxia:septuple_compressed_cobblestone", put: "anoxia:sextuple_compressed_cobblestone" },
		{ get: "anoxia:octuple_compressed_cobblestone", put: "anoxia:septuple_compressed_cobblestone" },
		{ get: "anoxia:compressed_deepslate", put: "minecraft:deepslate" },
		{ get: "anoxia:compressed_blackstone", put: "minecraft:blackstone" },
		{ get: "anoxia:compressed_andesite", put: "minecraft:andesite" },
	];
	function CompressRecipes({ get, put }) {
		event.shaped(get, ["BBB", "BBB", "BBB"], { B: put });
		event.shapeless(Item.of(put, 9), [get]);
	}
	CompressPattern.forEach(CompressRecipes);

	//Create Mesh
	const MeshPattern = [
		{ get: "anoxia:create_string_mesh", put: ["exnihilosequentia:string_mesh", "supplementaries:timber_frame"] },
		{ get: "anoxia:create_flint_mesh", put: ["exnihilosequentia:flint_mesh", "supplementaries:timber_frame"] },
		{ get: "anoxia:create_iron_mesh", put: ["exnihilosequentia:iron_mesh", "supplementaries:timber_frame"] },
		{ get: "anoxia:create_diamond_mesh", put: ["exnihilosequentia:diamond_mesh", "supplementaries:timber_frame"] },
		{ get: "anoxia:create_emerald_mesh", put: ["exnihilosequentia:emerald_mesh", "supplementaries:timber_frame"] },
		{ get: "anoxia:create_emerald_mesh", put: ["exnihilosequentia:netherite_mesh", "supplementaries:timber_frame"] },
		{ get: "anoxia:create_aethersteel_mesh", put: ["anoxia:aethersteel_mesh", "supplementaries:timber_frame"] },
	];
	function MeshRecipes({ get, put }) {
		event.shapeless(get, put);
	}
	MeshPattern.forEach(MeshRecipes);

	//Aethersteel Mesh
	event.smithing("anoxia:aethersteel_mesh", "aethersteel:aethersteel_upgrade_smithing_template", "exnihilosequentia:netherite_mesh", "aethersteel:aethersteel_ingot");

	//Tiny Coal
	event.shapeless(Item.of("anoxia:tiny_coal", 8), ["minecraft:coal"]);
	event.shapeless("minecraft:coal", Item.of("anoxia:tiny_coal", 8)); //Reverse

	//Tiny Charcoal
	event.shapeless(Item.of("anoxia:tiny_charcoal", 8), ["minecraft:charcoal"]);
	event.shapeless("minecraft:charcoal", Item.of("anoxia:tiny_charcoal", 8)); //Reverse

	//Raw Osmium
	event.shaped("mekanism:raw_osmium", ["PP", "PP"], { P: "anoxia:osmium_pieces" });

	//Among US
	event.shaped("anoxia:amongus", ["WWW", "WRW", "WWW"], { R: "minecraft:rotten_flesh", W: "minecraft:red_wool" });
});
