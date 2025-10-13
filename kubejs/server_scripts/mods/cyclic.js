ServerEvents.recipes((event) => {
    //Wood Hopper
    event.remove({ output: "cyclic:hopper" });
    event.shaped("cyclic:hopper", ["A A", "ABA", " A "], { A: "#minecraft:wooden_slabs", B: "#forge:chests/wooden" });

    //Gold Hopper
    event.remove({ output: "cyclic:hopper_gold" });
    event.shaped("cyclic:hopper_gold", ["A A", "ABA", " A "], { A: "#forge:plates/gold", B: "minecraft:hopper" });

    //Soul stone
    event.remove({ output: "cyclic:soulstone" });
    event.shaped("cyclic:soulstone", ["ABA", "BCB", "ABA"], { A: "#forge:storage_blocks/netherite", B: "minecraft:totem_of_undying", C: "#forge:nether_stars" });

    //Item collector
    event.remove({ output: "cyclic:collector" });
    event.shaped("cyclic:collector", ["ABA", "CDC", "EEE"], { A: "#forge:plates/iron", B: "itemcollectors:advanced_collector", C: "minecraft:observer", D: "#forge:storage_blocks/flint", E: "minecraft:hopper" });
});
