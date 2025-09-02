ServerEvents.recipes((event) => {
    //Wood Hopper
    event.remove({ output: "cyclic:hopper" });
    event.shaped("cyclic:hopper", ["A A", "ABA", " A "], { A: "#minecraft:wooden_slabs", B: "minecraft:hopper" });

    //Gold Hopper
    event.remove({ output: "cyclic:hopper_gold" });
    event.shaped("cyclic:hopper_gold", ["A A", "ABA", " A "], { A: "#forge:plates/gold", B: "cyclic:hopper" });

    event.remove({ output: "cyclic:soulstone" });
    event.shaped("cyclic:soulstone", ["ABA", "BCB", "ABA"], { A: "#forge:storage_blocks/netherite", B: "minecraft:totem_of_undying", C: "#forge:nether_stars" });
});
