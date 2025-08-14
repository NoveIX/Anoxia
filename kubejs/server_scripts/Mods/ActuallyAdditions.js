ServerEvents.recipes((event) => {
    //Black Quartz
    event.smelting("actuallyadditions:black_quartz", "botania:quartz_dark");

    //Powered Funrace
    event.remove({ output: "actuallyadditions:powered_furnace" });
    event.shaped("actuallyadditions:powered_furnace", ["ABA", "CDC", "EFE"], {
        A: "actuallyadditions:enori_crystal",
        B: "immersiveengineering:connector_mv",
        C: "ironfurnaces:gold_furnace",
        D: "actuallyadditions:iron_casing",
        E: "#forge:gears/invar",
        F: "actuallyadditions:advanced_coil",
    });

    //Crusher
    event.remove({ output: "actuallyadditions:crusher" });
    event.shaped("actuallyadditions:crusher", ["ABA", "CDC", "EFE"], {
        A: "actuallyadditions:restonia_crystal",
        B: "immersiveengineering:connector_lv",
        C: "create:millstone",
        D: "actuallyadditions:iron_casing",
        E: "#forge:gears/tin",
        F: "actuallyadditions:basic_coil",
    });

    //Double Crusher
    event.remove({ output: "actuallyadditions:crusher_double" });
    event.shaped("actuallyadditions:crusher_double", ["ABA", "CDC", "EFE"], {
        A: "actuallyadditions:enori_crystal",
        B: "immersiveengineering:connector_mv",
        C: "actuallyadditions:crusher",
        D: "actuallyadditions:iron_casing",
        E: "#forge:gears/invar",
        F: "actuallyadditions:advanced_coil",
    });

    //// # =================================================================================================== #

    //#region Empowering
    event.remove({ output: "enderio:double_layer_capacitor" });
    event.remove({ output: "enderio:octadic_capacitor" });
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
    EmpoweringPattern.forEach((recipe) => {
        event.custom({
            type: "actuallyadditions:empowering",
            base: recipe.put,
            color: recipe.color,
            energy: recipe.rsflux,
            modifiers: recipe.extra,
            result: recipe.get,
            time: recipe.sec,
        });
    });
    //#endregion
});
