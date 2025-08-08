ServerEvents.recipes((event) => {
    //Basic Chunk Loader
    event.remove({ output: "chunkloaders:basic_chunk_loader" });
    event.shaped("chunkloaders:basic_chunk_loader", ["A", "B"], { A: "minecraft:ender_eye", B: "minecraft:enchanting_table" });
    event.shapeless("chunkloaders:basic_chunk_loader", [Item.of("chunkloaders:single_chunk_loader", 9)]); //Reverse

    //Advanced Chunk Loader
    event.remove({ output: "chunkloaders:advanced_chunk_loader" });
    event.shaped("chunkloaders:advanced_chunk_loader", ["BBB", "BAB", "BBB"], { A: "chunkloaders:basic_chunk_loader", B: "#forge:ingots/gold" });

    //Ultimate Chunk Loader
    event.remove({ output: "chunkloaders:ultimate_chunk_loader" });
    event.shaped("chunkloaders:ultimate_chunk_loader", ["BBB", "BAB", "BBB"], { A: "chunkloaders:advanced_chunk_loader", B: "#forge:gems/diamond" });
});
