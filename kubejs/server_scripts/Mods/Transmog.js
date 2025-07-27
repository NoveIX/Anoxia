ServerEvents.recipes((event) => {
	//Void Fragment
	event.remove({ output: "transmog:void_fragment" });
	event.shaped("transmog:void_fragment", [" E ", "OAO", " O "], { E: "minecraft:ender_pearl", O: "#forge:ingots/obsidian", A: "minecraft:amethyst_shard" });
});
