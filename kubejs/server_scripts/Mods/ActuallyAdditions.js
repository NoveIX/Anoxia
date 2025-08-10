ServerEvents.recipes((event) => {
    //Black Quartz
    event.smelting("actuallyadditions:black_quartz", "botania:quartz_dark");

    //Powered Funrace
    event.remove({ output: "actuallyadditions:powered_furnace" });
    event.shaped("actuallyadditions:powered_furnace", ["ABA", "CDC", "EFE"], {
        A: "#forge:plates/iron",
        B: "immersiveengineering:connector_mv",
        C: "ironfurnaces:gold_furnace",
        D: "actuallyadditions:iron_casing",
        E: "#forge:gears/tin",
        F: "actuallyadditions:advanced_coil",
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
