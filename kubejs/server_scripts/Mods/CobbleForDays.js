ServerEvents.recipes((event) => {
	//Cobblestone Generator
	const CobblestoneGeneratorPattern = [
		{ get: "cobblefordays:tier_1", frame: "#minecraft:logs", upgrade: "#forge:glass/colorless" },
		{ get: "cobblefordays:tier_2", frame: "moonbase:compressed_cobblestone", upgrade: "cobblefordays:tier_1" },
		{ get: "cobblefordays:tier_3", frame: "#forge:storage_blocks/iron", upgrade: "cobblefordays:tier_2" },
		{ get: "cobblefordays:tier_4", frame: "#forge:storage_blocks/gold", upgrade: "cobblefordays:tier_3" },
		{ get: "cobblefordays:tier_5", frame: "#forge:storage_blocks/diamond", upgrade: "cobblefordays:tier_4" },
	];
	function CobblestoneGeneratorRecipes({ get, frame, upgrade }) {
		event.remove({ output: get });
		event.shaped(get, ["FFF", "WUL", "FFF"], { F: frame, U: upgrade, W: "minecraft:water_bucket", L: "minecraft:lava_bucket" });
		event.shaped(get, ["FFF", "LUW", "FFF"], { F: frame, U: upgrade, W: "minecraft:water_bucket", L: "minecraft:lava_bucket" });
	}
	CobblestoneGeneratorPattern.forEach(CobblestoneGeneratorRecipes);
});
