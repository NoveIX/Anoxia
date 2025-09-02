ServerEvents.recipes((event) => {
    //Void Fragment
    event.remove({ output: "transmog:void_fragment" });
    event.shaped("transmog:void_fragment", [" A ", "BCB", " B "], { A: "minecraft:ender_pearl", B: "#forge:ingots/obsidian", C: "minecraft:amethyst_shard" });
});
