ServerEvents.recipes((event) => {
	//Blackstone Furnace
	event.remove({ output: "nethersdelight:blackstone_furnace" });
	event.shaped("nethersdelight:blackstone_furnace", ["CCC", "C C", "CCC"], { C: "anoxia:compressed_blackstone" });

	//Blackstone Blast Furnace
	event.remove({ output: "nethersdelight:blackstone_blast_furnace" });
	event.shaped("nethersdelight:blackstone_blast_furnace", ["PPP", "PFP", "CCC"], { P: "#forge:plates/iron", F: "#anoxia:blackstone/furnaces", C: "minecraft:polished_blackstone" });

	//Blackstone Smoker
	event.remove({ output: "nethersdelight:nether_brick_smoker" });
	event.shaped("nethersdelight:nether_brick_smoker", ["CBC", "BFB", "CBC"], { C: "anoxia:compressed_cobblestone", B: "minecraft:nether_bricks", F: "#anoxia:stone/furnaces" });
});
