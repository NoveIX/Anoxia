ServerEvents.recipes((event) => {
    //Cobblestone Generator
    const CobbleGenPattern = [
        { get: "cobblefordays:tier_1", frame: "#minecraft:logs", upgrade: "#forge:glass/colorless" },
        { get: "cobblefordays:tier_2", frame: "anoxia:compressed_cobblestone", upgrade: "cobblefordays:tier_1" },
        { get: "cobblefordays:tier_3", frame: "#forge:storage_blocks/iron", upgrade: "cobblefordays:tier_2" },
        { get: "cobblefordays:tier_4", frame: "#forge:storage_blocks/gold", upgrade: "cobblefordays:tier_3" },
        { get: "cobblefordays:tier_5", frame: "#forge:storage_blocks/diamond", upgrade: "cobblefordays:tier_4" },
    ];
    CobbleGenPattern.forEach((recipe) => {
        event.remove({ output: recipe.get });
        event.shaped(recipe.get, ["AAA", "CBD", "AAA"], { A: recipe.frame, B: recipe.upgrade, C: "minecraft:water_bucket", D: "minecraft:lava_bucket" });
        event.shaped(recipe.get, ["AAA", "DBC", "AAA"], { A: recipe.frame, B: recipe.upgrade, C: "minecraft:water_bucket", D: "minecraft:lava_bucket" });
    });
});
