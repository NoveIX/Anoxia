ServerEvents.recipes((event) => {
	//Unobtanium
	event.remove({ output: "architects_palette:unobtanium" });
	event.shapeless(Item.of("architects_palette:unobtanium", 4), ["architects_palette:unobtanium_block"]);
});

MMEvents.createProcesses((event) => {
	//#region Artificial Portal
	const ArtificialPortalPatter = [
		{
			//Chiseled Hadaline Brick
			id: "mm:chiseled_hadaline_bricks",
			get: { type: "mm:item", item: "architects_palette:chiseled_hadaline_bricks", count: 1 },
			put: { type: "mm:item", item: "architects_palette:chiseled_abyssaline_bricks", count: 1 },
		},
		{
			//Craterstone
			id: "mm:craterstone",
			get: { type: "mm:item", item: "architects_palette:craterstone", count: 1 },
			put: { type: "mm:item", item: "minecraft:cobblestone", count: 1 },
		},
		{
			//Entrails
			id: "mm:entrails",
			get: { type: "mm:item", item: "architects_palette:entrails", count: 1 },
			put: { type: "mm:item", item: "architects_palette:rotten_flesh_block", count: 1 },
		},
		{
			//Esoterrack
			id: "mm:esoterrack",
			get: { type: "mm:item", item: "architects_palette:esoterrack", count: 1 },
			put: { type: "mm:item", item: "architects_palette:rotten_flesh_block", count: 1 },
		},
		{
			//Hadaline Bricks
			id: "mm:hadaline_bricks",
			get: { type: "mm:item", item: "architects_palette:hadaline_bricks", count: 1 },
			put: { type: "mm:item", item: "architects_palette:abyssaline_bricks", count: 1 },
		},
		{
			//Hadaline
			id: "mm:hadaline",
			get: { type: "mm:item", item: "architects_palette:hadaline", count: 1 },
			put: { type: "mm:item", item: "architects_palette:abyssaline", count: 1 },
		},
		{
			//Hadaline Lamp
			id: "mm:hadaline_lamp",
			get: { type: "mm:item", item: "architects_palette:hadaline_lamp", count: 1 },
			put: { type: "mm:item", item: "architects_palette:abyssaline_lamp", count: 1 },
		},
		{
			//Hadaline Pillar
			id: "mm:hadaline_pillar",
			get: { type: "mm:item", item: "architects_palette:hadaline_pillar", count: 1 },
			put: { type: "mm:item", item: "architects_palette:abyssaline_pillar", count: 1 },
		},
		{
			//Hadaline Plating
			id: "mm:hadaline_plating",
			get: { type: "mm:item", item: "architects_palette:hadaline_plating", count: 1 },
			put: { type: "mm:item", item: "architects_palette:abyssaline_plating", count: 1 },
		},
		{
			//Hadaline Tiles
			id: "mm:hadaline_tiles",
			get: { type: "mm:item", item: "architects_palette:hadaline_tiles", count: 1 },
			put: { type: "mm:item", item: "architects_palette:abyssaline_tiles", count: 1 },
		},
		{
			//Moonshale Bricks
			id: "mm:moonshale_bricks",
			get: { type: "mm:item", item: "architects_palette:moonshale_bricks", count: 1 },
			put: { type: "mm:item", item: "minecraft:stone_bricks", count: 1 },
		},
		{
			//Moonshale
			id: "mm:moonshale",
			get: { type: "mm:item", item: "architects_palette:moonshale", count: 1 },
			put: { type: "mm:item", item: "minecraft:stone", count: 1 },
		},
		{
			//Moonstone
			id: "mm:moonstone",
			get: { type: "mm:item", item: "architects_palette:moonstone", count: 1 },
			put: { type: "mm:item", item: "architects_palette:sunstone", count: 1 },
		},
		{
			//Nebulite
			id: "mm:nebulite",
			get: { type: "mm:item", item: "architects_palette:nebulite", count: 1 },
			put: { type: "mm:item", item: "minecraft:diorite", count: 1 },
		},
		{
			//Onyx
			id: "mm:onyx",
			get: { type: "mm:item", item: "architects_palette:onyx", count: 1 },
			put: { type: "mm:item", item: "minecraft:granite", count: 1 },
		},
		{
			//Twisted Leaves
			id: "mm:twisted_leaves",
			get: { type: "mm:item", item: "architects_palette:twisted_leaves", count: 1 },
			put: { type: "mm:item", tag: "minecraft:leaves", count: 1 },
		},
		{
			//Twisted Log
			id: "mm:twisted_log",
			get: { type: "mm:item", item: "architects_palette:twisted_log", count: 1 },
			put: { type: "mm:item", tag: "minecraft:logs", count: 1 },
		},
		{
			//Twisted Planks
			id: "mm:twisted_planks",
			get: { type: "mm:item", item: "architects_palette:twisted_planks", count: 1 },
			put: { type: "mm:item", tag: "minecraft:planks", count: 1 },
		},
		{
			//Twisted Sapling
			id: "mm:twisted_sapling",
			get: { type: "mm:item", item: "architects_palette:twisted_sapling", count: 1 },
			put: { type: "mm:item", tag: "minecraft:saplings", count: 1 },
		},
		{
			//Unobtanium
			id: "mm:unobtanium",
			get: { type: "mm:item", item: "architects_palette:unobtanium", count: 1 },
			put: { type: "mm:item", item: "aethersteel:aethersteel_ingot", count: 3 },
		},
		{
			//Warpstone
			id: "mm:warpstone",
			get: { type: "mm:item", item: "architects_palette:warpstone", count: 1 },
			put: { type: "mm:item", item: "minecraft:clay", count: 1 },
		},
	];
	function ArtificialPortalRecipes({ id, get, put }) {
		event.create(id).structureId("mm:portal").ticks(20).input({ type: "mm:input/consume", ingredient: put }).output({ type: "mm:output/simple", ingredient: get });
	}
	ArtificialPortalPatter.forEach(ArtificialPortalRecipes);
	//#endregion
});
