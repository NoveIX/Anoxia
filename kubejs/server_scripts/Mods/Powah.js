ServerEvents.recipes((event) => {
    //Dieletric Paste
    event.remove({ output: "powah:dielectric_paste" });
    event.shapeless(Item.of("powah:dielectric_paste", 16), ["#forge:dusts/grains_of_infinity", "#forge:dusts/grains_of_infinity", "exnihilosequentia:porcelain_clay", 'minecraft:blaze_powder']);

    //Tiny Capacitor
    event.remove({ output: "powah:capacitor_basic_tiny" });
    event.shaped(Item.of("powah:capacitor_basic_tiny", 4), [" ID", "IRI", "DI "], { I: "#forge:ingots/iron", D: "powah:dielectric_paste", R: "#forge:ingots/red_alloy" });

    //Basic Capacitor
    event.remove({ output: "powah:capacitor_basic" });
    event.shaped("powah:capacitor_basic", ["C", "C"], { C: "powah:capacitor_basic_tiny" });

    //Large Capacitor
    event.remove({ output: "powah:capacitor_basic_large" });
    event.shaped("powah:capacitor_basic_large", ["CC"], { C: "powah:capacitor_basic" });

    //Hardened Capacitor
    event.remove({ output: "powah:capacitor_hardened" });
    event.shaped("powah:capacitor_hardened", ["DID", "ICI", "DID"], { D: "powah:dielectric_paste", I: "powah:steel_energized", C: "enderio:octadic_capacitor" });

    //Blazing Capacitor
    event.remove({ output: "powah:capacitor_blazing" });
    event.shaped("powah:capacitor_blazing", ["DID", "ICI", "DID"], { D: "powah:dielectric_paste", I: "powah:steel_energized", C: "powah:capacitor_hardened" });

    //Niotic Capacitor
    event.remove({ output: "powah:capacitor_niotic" });
    event.shaped("powah:capacitor_niotic", ["DID", "ICI", "DID"], { D: "powah:dielectric_paste", I: "powah:steel_energized", C: "powah:capacitor_blazing" });

    //Spirited Capacitor
    event.remove({ output: "powah:capacitor_spirited" });
    event.shaped("powah:capacitor_spirited", ["DID", "ICI", "DID"], { D: "powah:dielectric_paste", I: "powah:steel_energized", C: "powah:capacitor_niotic" });

    //Nitro Capacitor
    event.remove({ output: "powah:capacitor_nitro" });
    event.shaped("powah:capacitor_nitro", ["DID", "ICI", "DID"], { D: "powah:dielectric_paste", I: "powah:steel_energized", C: "powah:capacitor_spirited" });

    //Photoelectric Pane'
    event.remove({output: 'powah:photoelectric_pane'})
    event.shaped('powah:photoelectric_pane', ['ABA','BCB','ABA'], {A: "powah:dielectric_paste", B: 'projectred_core:electrotine_silicon',C: 'minecraft:glass_pane'});

    //// # =================================================================================================== #

    //#region Energizing
    event.remove({ type: "powah:energizing" });
    const EnergizingPattern = [
        {
            //Charged Snowball
            get: { item: "powah:charged_snowball" },
            put: [{ item: "minecraft:snowball" }],
            rsflux: 500000,
        },
        {
            //Dry Ice
            get: { item: "powah:dry_ice" },
            put: [{ item: "minecraft:blue_ice" }, { item: "minecraft:blue_ice" }, { item: "minecraft:blue_ice" }, { item: "minecraft:blue_ice" }],
            rsflux: 10000,
        },
        {
            //Ender Core
            get: { item: "powah:ender_core" },
            put: [{ item: "minecraft:ender_eye" }, { item: "powah:dielectric_casing" }, { item: "powah:capacitor_basic_tiny" }],
            rsflux: 50000,
        },
        {
            //Energized Steel
            get: { item: "powah:steel_energized" },
            put: [{ tag: "forge:ingots/electrum" }, { tag: "forge:ingots/energetic_alloy" }],
            rsflux: 100000,
        },
        {
            //Blazing Crystal
            get: { item: "powah:crystal_blazing" },
            put: [{ item: "botania:blaze_block" }],
            rsflux: 250000,
        },
        {
            //Niotic Crystal
            get: { item: "powah:crystal_niotic" },
            put: [{ item: "botania:mana_diamond_block" }],
            rsflux: 500000,
        },
        {
            //Niotic Crystal
            get: { item: "powah:crystal_spirited" },
            put: [{ tag: "forge:storage_blocks/terrasteel" }],
            rsflux: 1000000,
        },
        {
            //Nitro Crystal
            get: { item: "powah:crystal_nitro" },
            put: [{ tag: "forge:storage_blocks/gaiasteel" }],
            rsflux: 20000000,
        },
        {
            //Uranite
            get: { item: "powah:uraninite" },
            put: [{ tag: "forge:ingots/uranium" }],
            rsflux: 30000,
        },
    ];
    EnergizingPattern.forEach((recipe) => {
        event.custom({
            type: "powah:energizing",
            ingredients: recipe.put,
            result: recipe.get,
            energy: recipe.rsflux,
        });
    });
    //#endregion
});
