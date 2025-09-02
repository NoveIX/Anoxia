ServerEvents.recipes((event) => {
    const FurnacePattern = [
        //Furnace
        { get: "ironfurnaces:copper_furnace", put: "#forge:plates/copper", frame: "minecraft:furnace" }, //Stone to Copper
        { get: "ironfurnaces:iron_furnace", put: "#forge:plates/iron", frame: "ironfurnaces:copper_furnace" }, //Copper to Iron
        { get: "ironfurnaces:silver_furnace", put: "#forge:plates/silver", frame: "ironfurnaces:iron_furnace" }, //Iron to Silver
        { get: "ironfurnaces:gold_furnace", put: "#forge:plates/gold", frame: "ironfurnaces:silver_furnace" }, //Silver to Gold
        { get: "ironfurnaces:diamond_furnace", put: "#forge:gems/diamond", frame: "ironfurnaces:gold_furnace" }, //Gold to Diamond
        { get: "ironfurnaces:emerald_furnace", put: "#forge:gems/emerald", frame: "ironfurnaces:diamond_furnace" }, //Diamond to Emerald
        { get: "ironfurnaces:crystal_furnace", put: "#forge:glass/colorless", frame: "ironfurnaces:emerald_furnace" }, //Emerald to Crystal
        { get: "ironfurnaces:obsidian_furnace", put: "#forge:ingots/obsidian", frame: "ironfurnaces:emerald_furnace" }, //Emerald to Obsidian
        { get: "ironfurnaces:obsidian_furnace", put: "#forge:ingots/obsidian", frame: "ironfurnaces:crystal_furnace" }, //Crystal to Obsidian
        { get: "ironfurnaces:netherite_furnace", put: "#forge:plates/netherite", frame: "ironfurnaces:obsidian_furnace" }, //Obsidian to Netherite

        //Upgrade
        { get: "ironfurnaces:upgrade_copper", put: "#forge:plates/copper", frame: "anoxia:compressed_cobblestone" }, //Stone to Copper
        { get: "ironfurnaces:upgrade_iron2", put: "#forge:plates/iron", frame: "anoxia:compressed_cobblestone" }, //Copper to Iron
        { get: "ironfurnaces:upgrade_silver2", put: "#forge:plates/silver", frame: "anoxia:compressed_cobblestone" }, //Iron to Silver
        { get: "ironfurnaces:upgrade_gold2", put: "#forge:plates/gold", frame: "anoxia:compressed_cobblestone" }, //Silver to Gold
        { get: "ironfurnaces:upgrade_diamond", put: "#forge:gems/diamond", frame: "anoxia:compressed_cobblestone" }, //Gold to Diamond
        { get: "ironfurnaces:upgrade_emerald", put: "#forge:gems/emerald", frame: "anoxia:compressed_cobblestone" }, //Diamond to Emerald
        { get: "ironfurnaces:upgrade_obsidian", put: "#forge:ingots/obsidian", frame: "anoxia:compressed_cobblestone" }, //Emerald to Obsidian
        { get: "ironfurnaces:upgrade_obsidian2", put: "#forge:ingots/obsidian", frame: "anoxia:compressed_cobblestone" }, //Crystal to Obsidian
        { get: "ironfurnaces:upgrade_netherite", put: "#forge:plates/netherite", frame: "anoxia:compressed_cobblestone" }, //Obsidian To Netherite
    ];
    FurnacePattern.forEach((recipe) => {
        event.remove({ output: recipe.get });
        event.shaped(recipe.get, ["III", "IUI", "III"], { I: recipe.put, U: recipe.frame });
    });
});
