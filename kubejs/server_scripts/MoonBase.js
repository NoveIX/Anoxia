ServerEvents.recipes((event) => {
	//Compressed
	const CompressPattern = [
		{ get: "moonbase:compressed_cobblestone", put: "minecraft:cobblestone" },
		{ get: "moonbase:double_compressed_cobblestone", put: "moonbase:compressed_cobblestone" },
		{ get: "moonbase:triple_compressed_cobblestone", put: "moonbase:double_compressed_cobblestone" },
		{ get: "moonbase:quadruple_compressed_cobblestone", put: "moonbase:triple_compressed_cobblestone" },
		{ get: "moonbase:quintuple_compressed_cobblestone", put: "moonbase:quadruple_compressed_cobblestone" },
		{ get: "moonbase:sextuple_compressed_cobblestone", put: "moonbase:quintuple_compressed_cobblestone" },
		{ get: "moonbase:septuple_compressed_cobblestone", put: "moonbase:sextuple_compressed_cobblestone" },
		{ get: "moonbase:octuple_compressed_cobblestone", put: "moonbase:septuple_compressed_cobblestone" },
		{ get: "moonbase:compressed_deepslate", put: "minecraft:deepslate" },
		{ get: "moonbase:compressed_blackstone", put: "minecraft:blackstone" },
		{ get: "moonbase:compressed_andesite", put: "minecraft:andesite" },
	];
	function CompressRecipes({ get, put }) {
		event.shaped(get, ["BBB", "BBB", "BBB"], { B: put });
		event.shapeless(Item.of(put, 9), [get]);
	}
	CompressPattern.forEach(CompressRecipes);

	//Create Mesh
	const MeshPattern = [
		{ get: "moonbase:create_string_mesh", put: ["exnihilosequentia:string_mesh", "supplementaries:timber_frame"] },
		{ get: "moonbase:create_flint_mesh", put: ["exnihilosequentia:flint_mesh", "supplementaries:timber_frame"] },
		{ get: "moonbase:create_iron_mesh", put: ["exnihilosequentia:iron_mesh", "supplementaries:timber_frame"] },
		{ get: "moonbase:create_diamond_mesh", put: ["exnihilosequentia:diamond_mesh", "supplementaries:timber_frame"] },
		{ get: "moonbase:create_emerald_mesh", put: ["exnihilosequentia:emerald_mesh", "supplementaries:timber_frame"] },
		{ get: "moonbase:create_emerald_mesh", put: ["exnihilosequentia:netherite_mesh", "supplementaries:timber_frame"] },
		{ get: "moonbase:create_aethersteel_mesh", put: ["moonbase:aethersteel_mesh", "supplementaries:timber_frame"] },
	];
	function MeshRecipes({ get, put }) {
		event.shapeless(get, put);
	}
	MeshPattern.forEach(MeshRecipes);

	//Aethersteel Mesh
	event.smithing("moonbase:aethersteel_mesh", "aethersteel:aethersteel_upgrade_smithing_template", "exnihilosequentia:netherite_mesh", "aethersteel:aethersteel_ingot");

	//Tiny Coal
	event.shapeless(Item.of("moonbase:tiny_coal", 8), ["minecraft:coal"]);
	event.shapeless("minecraft:coal", Item.of("moonbase:tiny_coal", 8)); //Reverse

	//Tiny Charcoal
	event.shapeless(Item.of("moonbase:tiny_charcoal", 8), ["minecraft:charcoal"]);
	event.shapeless("minecraft:charcoal", Item.of("moonbase:tiny_charcoal", 8)); //Reverse

	//Raw Osmium
	event.shaped("mekanism:raw_osmium", ["PP", "PP"], { P: "moonbase:osmium_pieces" });

	//Among US
	event.shaped("moonbase:amongus", ["WWW", "WRW", "WWW"], { R: "minecraft:rotten_flesh", W: "minecraft:red_wool" });
});
