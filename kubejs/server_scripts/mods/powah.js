ServerEvents.recipes((event) => {
    //Dieletric Paste
    event.remove({ output: "powah:dielectric_paste" });
    event.shapeless(Item.of("powah:dielectric_paste", 8), ["#forge:dusts/grains_of_infinity", "#forge:dusts/grains_of_infinity", "exnihilosequentia:porcelain_clay", "minecraft:blaze_powder"]);

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
    event.shaped("powah:capacitor_blazing", ["DID", "ICI", "DID"], { D: "powah:dielectric_paste", I: "powah:crystal_blazing", C: "powah:capacitor_hardened" });

    //Niotic Capacitor
    event.remove({ output: "powah:capacitor_niotic" });
    event.shaped("powah:capacitor_niotic", ["DID", "ICI", "DID"], { D: "powah:dielectric_paste", I: "powah:crystal_niotic", C: "powah:capacitor_blazing" });

    //Spirited Capacitor
    event.remove({ output: "powah:capacitor_spirited" });
    event.shaped("powah:capacitor_spirited", ["DID", "ICI", "DID"], { D: "powah:dielectric_paste", I: "powah:crystal_spirited", C: "powah:capacitor_niotic" });

    //Nitro Capacitor
    event.remove({ output: "powah:capacitor_nitro" });
    event.shaped("powah:capacitor_nitro", ["DID", "ICI", "DID"], { D: "powah:dielectric_paste", I: "powah:crystal_nitro", C: "powah:capacitor_spirited" });

    //Photoelectric Pane'
    event.remove({ output: "powah:photoelectric_pane" });
    event.shaped("powah:photoelectric_pane", ["ABA", "BCB", "ABA"], { A: "powah:dielectric_paste", B: "projectred_core:electrotine_silicon", C: "minecraft:glass_pane" });

    ////Reactor
    event.remove({ output: "powah:reactor_starter" });
    event.shaped("powah:reactor_starter", ["ABA", "BCB", "ABA"], { A: "#forge:plates/lead", B: "powah:capacitor_basic", C: "powah:dielectric_casing" });

    event.remove({ output: "powah:reactor_basic" });
    event.shaped("powah:reactor_basic", ["ABA", "BCB", "ABA"], { A: "#forge:plates/lead", B: "powah:capacitor_basic_large", C: "powah:reactor_starter" });

    event.remove({ output: "powah:reactor_hardened" });
    event.shaped("powah:reactor_hardened", ["ABA", "BCB", "ABA"], { A: "#forge:plates/lead", B: "powah:capacitor_hardened", C: "powah:reactor_basic" });

    event.remove({ output: "powah:reactor_blazing" });
    event.shaped("powah:reactor_blazing", ["ABA", "BCB", "ABA"], { A: "#forge:plates/lead", B: "powah:capacitor_blazing", C: "powah:reactor_hardened" });

    event.remove({ output: "powah:reactor_niotic" });
    event.shaped("powah:reactor_niotic", ["ABA", "BCB", "ABA"], { A: "#forge:plates/lead", B: "powah:capacitor_niotic", C: "powah:reactor_blazing" });

    event.remove({ output: "powah:reactor_spirited" });
    event.shaped("powah:reactor_spirited", ["ABA", "BCB", "ABA"], { A: "#forge:plates/lead", B: "powah:capacitor_spirited", C: "powah:reactor_niotic" });

    event.remove({ output: "powah:reactor_nitro" });
    event.shaped("powah:reactor_nitro", ["ABA", "BCB", "ABA"], { A: "#forge:plates/lead", B: "powah:capacitor_nitro", C: "powah:reactor_spirited" });

    ////Cable
    event.remove({ output: "powah:energy_cable_starter" });
    event.shaped(Item.of("powah:energy_cable_starter", 6), ["AAA", "BCB", "AAA"], { A: "powah:dielectric_rod_horizontal", B: "#forge:wires/iron", C: "powah:capacitor_basic" });

    event.remove({ output: "powah:energy_cable_basic" });
    event.shaped(Item.of("powah:energy_cable_basic", 2), ["AAA", "BCB", "AAA"], { A: "powah:dielectric_rod_horizontal", B: "powah:energy_cable_starter", C: "powah:capacitor_basic_large" });

    event.remove({ output: "powah:energy_cable_hardened" });
    event.shaped(Item.of("powah:energy_cable_hardened", 2), ["AAA", "BCB", "AAA"], { A: "powah:dielectric_rod_horizontal", B: "powah:energy_cable_basic", C: "powah:capacitor_hardened" });

    event.remove({ output: "powah:energy_cable_blazing" });
    event.shaped(Item.of("powah:energy_cable_blazing", 2), ["AAA", "BCB", "AAA"], { A: "powah:dielectric_rod_horizontal", B: "powah:energy_cable_hardened", C: "powah:capacitor_blazing" });

    event.remove({ output: "powah:energy_cable_niotic" });
    event.shaped(Item.of("powah:energy_cable_niotic", 2), ["AAA", "BCB", "AAA"], { A: "powah:dielectric_rod_horizontal", B: "powah:energy_cable_blazing", C: "powah:capacitor_niotic" });

    event.remove({ output: "powah:energy_cable_spirited" });
    event.shaped(Item.of("powah:energy_cable_spirited", 2), ["AAA", "BCB", "AAA"], { A: "powah:dielectric_rod_horizontal", B: "powah:energy_cable_niotic", C: "powah:capacitor_spirited" });

    event.remove({ output: "powah:energy_cable_nitro" });
    event.shaped(Item.of("powah:energy_cable_nitro", 2), ["AAA", "BCB", "AAA"], { A: "powah:dielectric_rod_horizontal", B: "powah:energy_cable_spirited", C: "powah:capacitor_nitro" });

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
            put: [{ tag: "forge:ingots/electrum" }, { tag: "forge:ingots/electrum" }, { tag: "forge:ingots/energetic_alloy" }, { tag: "forge:ingots/energetic_alloy" }],
            rsflux: 100000,
        },
        {
            //Blazing Crystal
            get: { item: "powah:crystal_blazing" },
            put: [{ item: "botania:blaze_block" }, { item: "botania:blaze_block" }, { item: "botania:blaze_block" }, { item: "botania:blaze_block" }],
            rsflux: 250000,
        },
        {
            //Niotic Crystal
            get: { item: "powah:crystal_niotic" },
            put: [{ item: "botania:manasteel_ingot" }, { item: "botania:manasteel_ingot" }, { item: "botania:manasteel_ingot" }, { item: "botania:manasteel_ingot" }],
            rsflux: 500000,
        },
        {
            //Spirited Crystal
            get: { item: "powah:crystal_spirited" },
            put: [{ item: "botania:terrasteel_ingot" }, { item: "botania:terrasteel_ingot" }, { item: "botania:terrasteel_ingot" }, { item: "botania:terrasteel_ingot" }],
            rsflux: 1000000,
        },
        {
            //Nitro Crystal
            get: { item: "powah:crystal_nitro" },
            put: [{ item: "botanicadds:gaiasteel_ingot" }, { item: "botanicadds:gaiasteel_ingot" }, { item: "botanicadds:gaiasteel_ingot" }, { item: "botanicadds:gaiasteel_ingot" }],
            rsflux: 2000000,
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
