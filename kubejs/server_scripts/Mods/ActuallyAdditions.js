ServerEvents.recipes((event) => {
    //Black Quartz
    event.smelting("actuallyadditions:black_quartz", "botania:quartz_dark");

    //Powered Funrace
    event.remove({ output: "actuallyadditions:powered_furnace" });
    event.shaped("actuallyadditions:powered_furnace", ["IHI", "GFG", "TCT"], {
        I: "#forge:plates/iron",
        H: "immersiveengineering:connector_mv",
        G: "ironfurnaces:gold_furnace",
        F: "actuallyadditions:iron_casing",
        T: "#forge:gears/tin",
        C: "actuallyadditions:advanced_coil",
    });

    //// # =================================================================================================== #

    //#region Empowering
    const EmpoweringPattern = [
        {
            get: { item: "enderio:double_layer_capacitor" },
            put: { tag: "forge:dusts/coal" },
            extra: [{ item: "enderio:basic_capacitor" }, { item: "enderio:basic_capacitor" }, { tag: "forge:ingots/energetic_alloy" }, { tag: "forge:ingots/energetic_alloy" }],
            rsflux: 3750,
            color: 3335679,
            sec: 600,
        },
        {
            get: { item: "enderio:octadic_capacitor" },
            put: { tag: "forge:storage_blocks/glowstone" },
            extra: [{ item: "enderio:double_layer_capacitor" }, { item: "enderio:double_layer_capacitor" }, { tag: "forge:ingots/vibrant_alloy" }, { tag: "forge:ingots/vibrant_alloy" }],
            rsflux: 7500,
            color: 2745239,
            sec: 900,
        },
    ];
    function EmpoweringRecipes({ get, put, extra, rsflux, color, sec }) {
        event.custom({
            type: "actuallyadditions:empowering",
            base: put,
            color: color,
            energy: rsflux,
            modifiers: extra,
            result: get,
            time: sec,
        });
    }
    EmpoweringPattern.forEach(EmpoweringRecipes);
    //#endregion
});

//// # =================================================================================================== #

//#region Modular Machine recipe
MMEvents.createProcesses((event) => {
    //Diamatine Block
    event
        .create("mm:diamatine_block")
        .structureId("mm:empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "actuallyadditions:diamatine_crystal_block", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dyes/light_blue", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:clay_ball", count: 2 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:clay", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "actuallyadditions:empowered_diamatine_crystal_block", count: 1 } });

    //Emeradic Block
    event
        .create("mm:emeradic_block")
        .structureId("mm:empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "actuallyadditions:emeradic_crystal_block", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dyes/lime", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:grass", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "minecraft:saplings", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:slimeballs", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 600000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "actuallyadditions:empowered_emeradic_crystal_block", count: 1 } });

    //Enori Block
    event
        .create("mm:enori_block")
        .structureId("mm:empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "actuallyadditions:enori_crystal_block", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dyes/gray", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:snowball", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:stone_button", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:cobblestone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 650000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "actuallyadditions:empowered_enori_crystal_block", count: 1 } });

    //Palis Block
    event
        .create("mm:palis_block")
        .structureId("mm:empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "actuallyadditions:palis_crystal_block", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dyes/cyan", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:prismarine_shard", count: 3 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "actuallyadditions:empowered_palis_crystal_block", count: 1 } });

    //Redstonia Block
    event
        .create("mm:restonia_block")
        .structureId("mm:empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "actuallyadditions:restonia_crystal_block", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dyes/red", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:nether_brick", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dusts/redstone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:brick", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 450000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "actuallyadditions:empowered_restonia_crystal_block", count: 1 } });

    //Void Block
    event
        .create("mm:void_block")
        .structureId("mm:empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "actuallyadditions:void_crystal_block", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dyes/black", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "minecraft:coals", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:flint", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:stone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 550000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "actuallyadditions:empowered_void_crystal_block", count: 1 } });
});
//#endregion
