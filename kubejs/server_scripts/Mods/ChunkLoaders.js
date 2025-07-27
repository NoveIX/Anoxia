ServerEvents.recipes((event) => {
	//Basic Chunk Loader
	event.remove({ output: "chunkloaders:basic_chunk_loader" });
	event.shaped("chunkloaders:basic_chunk_loader", ["Y", "E"], { Y: "minecraft:ender_eye", E: "minecraft:enchanting_table" });
	event.shapeless("chunkloaders:basic_chunk_loader", [Item.of("chunkloaders:single_chunk_loader", 9)]); //Reverse

	//Advanced Chunk Loader
	event.remove({ output: "chunkloaders:advanced_chunk_loader" });
	event.shaped("chunkloaders:advanced_chunk_loader", ["GGG", "GCG", "GGG"], { C: "chunkloaders:basic_chunk_loader", G: "#forge:ingots/gold" });

	//Ultimate Chunk Loader
	event.remove({ output: "chunkloaders:ultimate_chunk_loader" });
	event.shaped("chunkloaders:ultimate_chunk_loader", ["GGG", "GCG", "GGG"], { C: "chunkloaders:advanced_chunk_loader", G: "#forge:gems/diamond" });
});
