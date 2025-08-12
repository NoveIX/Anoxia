ServerEvents.recipes((event) => {
    //#region RmID
    const RmID = [
        //Immersive
        "thermal_extra:machine/press/iron_rod",

        //Thermal Extra
        "thermal_extra:machine/press/copper_rod",
        "thermal_extra:machine/press/gold_rod",
        "thermal_extra:machine/press/diamond_rod",
        "thermal_extra:machine/press/emerald_rod",
        "thermal_extra:machine/press/netherite_rod",
        "thermal_extra:machine/press/lead_rod",
        "thermal_extra:machine/press/tin_rod",
        "thermal_extra:machine/press/silver_rod",
        "thermal_extra:machine/press/nickel_rod",
        "thermal_extra:machine/press/bronze_rod",
        "thermal_extra:machine/press/electrum_rod",
        "thermal_extra:machine/press/constantan_rod",
        "thermal_extra:machine/press/invar_rod",
        "thermal_extra:machine/press/signalum_rod",
        "thermal_extra:machine/press/lumium_rod",
        "thermal_extra:machine/press/enderium_rod",

        //Thermal Extra Material
        "thermal_extra:machine/press/soul_infused_rod",
        "jaopca:thermal_expansion.molten_to_rod.soul_infused",
        "thermal_extra:machine/press/twinite_rod",
        "jaopca:thermal_expansion.molten_to_rod.twinite",
        "thermal_extra:machine/press/shellite_rod",
        "jaopca:thermal_expansion.molten_to_rod.shellite",
        "thermal_extra:machine/press/dragonsteel_rod",
        "jaopca:thermal_expansion.molten_to_rod.dragonsteel",
        "thermal_extra:machine/press/abyssal_rod",
        "jaopca:thermal_expansion.molten_to_rod.abyssal",
    ];
    RmID.forEach((ID) => {
        event.remove({ id: ID });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Rod
    const RodPattern = [
        //Create
        { get: "createaddition:brass_rod", put: "forge:ingots/brass", rsflux: 6000 },

        //Immersive
        { get: "immersiveengineering:stick_steel", put: "forge:ingots/steel", rsflux: 6000 },
        { get: "immersiveengineering:stick_aluminum", put: "forge:ingots/aluminum", rsflux: 4000 },

        //Thermal
        { get: "thermal_extra:copper_rod", put: "forge:ingots/copper", rsflux: 4000 },
        { get: "thermal_extra:iron_rod", put: "forge:ingots/iron", rsflux: 4000 },
        { get: "thermal_extra:gold_rod", put: "forge:ingots/gold", rsflux: 4000 },
        { get: "thermal_extra:diamond_rod", put: "forge:gems/diamond", rsflux: 8000 },
        { get: "thermal_extra:emerald_rod", put: "forge:gems/emerald", rsflux: 8000 },
        { get: "thermal_extra:netherite_rod", put: "forge:ingots/netherite", rsflux: 12000 },
        { get: "thermal_extra:lead_rod", put: "forge:ingots/lead", rsflux: 4000 },
        { get: "thermal_extra:tin_rod", put: "forge:ingots/tin", rsflux: 4000 },
        { get: "thermal_extra:silver_rod", put: "forge:ingots/silver", rsflux: 4000 },
        { get: "thermal_extra:nickel_rod", put: "forge:ingots/nickel", rsflux: 4000 },
        { get: "thermal_extra:bronze_rod", put: "forge:ingots/bronze", rsflux: 6000 },
        { get: "thermal_extra:electrum_rod", put: "forge:ingots/electrum", rsflux: 6000 },
        { get: "thermal_extra:constantan_rod", put: "forge:ingots/constantan", rsflux: 6000 },
        { get: "thermal_extra:invar_rod", put: "forge:ingots/invar", rsflux: 6000 },
        { get: "thermal_extra:signalum_rod", put: "forge:ingots/signalum", rsflux: 8000 },
        { get: "thermal_extra:lumium_rod", put: "forge:ingots/lumium", rsflux: 8000 },
        { get: "thermal_extra:enderium_rod", put: "forge:ingots/enderium", rsflux: 12000 },

        //Thermal Extra
        { get: "thermal_extra:soul_infused_rod", put: "forge:ingots/soul_infused", rsflux: 6000 },
        { get: "thermal_extra:twinite_rod", put: "forge:ingots/twinite", rsflux: 8000 },
        { get: "thermal_extra:shellite_rod", put: "forge:ingots/shellite", rsflux: 12000 },
        { get: "thermal_extra:dragonsteel_rod", put: "forge:ingots/dragonsteel", rsflux: 16000 },
        { get: "thermal_extra:abyssal_rod", put: "forge:ingots/abyssal", rsflux: 20000 },
    ];
    RodPattern.forEach((recipe) => {
        //Remove
        event.remove({ output: recipe.get });

        //Crafting
        event.shaped(Item.of(recipe.get, 2), ["  R", " R ", "R  "], { R: `#${recipe.put}` });

        //Create
        event.custom({
            type: "createaddition:rolling",
            input: { tag: recipe.put },
            result: { item: recipe.get, count: 2 },
        });

        //Immersive
        event.custom({
            type: "immersiveengineering:metal_press",
            mold: "immersiveengineering:mold_rod",
            input: { tag: recipe.put },
            result: { base_ingredient: { item: recipe.get }, count: 2 },
            energy: recipe.rsflux,
        });

        //Thermal
        event.custom({
            type: "thermal:press",
            energy: recipe.rsflux,
            ingredients: [{ tag: recipe.put, count: 1 }, { item: "thermal_extra:press_rod_die" }],
            result: [{ count: 2, item: recipe.get }],
        });
    });
    //#endregion
});
