ServerEvents.recipes((event) => {
    //UV Box
    event.remove({ output: "pneumaticcraft:uv_light_box" });
    event.shaped("pneumaticcraft:uv_light_box", ["AAA", "BCD", "BBB"], { A: "projectred_illumination:purple_illumar_lamp", B: "#forge:ingots/compressed_iron", C: "pneumaticcraft:pcb_blueprint", D: "pneumaticcraft:pressure_tube" });

    //Pressure Wall
    event.remove({ output: "pneumaticcraft:pressure_chamber_wall" });
    event.shaped("pneumaticcraft:pressure_chamber_wall", ["ABA", "BCB", "ABA"], { A: "#forge:ingots/compressed_iron", B: "#forge:plates/calorite", C: "pneumaticcraft:reinforced_stone" });

    //Pressure Valve
    event.remove({ output: "pneumaticcraft:pressure_chamber_valve" });
    event.shaped("pneumaticcraft:pressure_chamber_valve", ["ABA", "CDC", "AEA"], { A: "pneumaticcraft:pressure_chamber_wall", B: "advgenerators:turbine_rotor_tier4", C: "#forge:plates/calorite", D: "ad_astra:engine_fan", E: "pneumaticcraft:pressure_tube" });

    //pressure Door
    event.remove({ output: "pneumaticcraft:pressure_chamber_interface" });
    event.shaped("pneumaticcraft:pressure_chamber_interface", ["ABA", "CDC", "ABA"], { A: "#forge:ingots/compressed_iron", B: "ad_astra:airlock", C: "#forge:plates/calorite", D: "minecraft:piston" });

    //Pressure Glass
    event.remove({ output: "pneumaticcraft:pressure_chamber_glass" });
    event.shaped("pneumaticcraft:pressure_chamber_glass", ["ABA", "BCB", "ABA"], { A: "#forge:ingots/compressed_iron", B: "#forge:plates/calorite", C: "#forge:glass/colorless" });

    //Air Compressor
    event.remove({ output: "pneumaticcraft:air_compressor" });
    event.shaped("pneumaticcraft:air_compressor", ["AAA", "BCD", "AEA"], { A: "#forge:ingots/compressed_iron", B: "createaddition:electric_motor", C: "advgenerators:turbine_rotor_tier4", D: "pneumaticcraft:pressure_tube", E: "#anoxia:furnaces" });

    //Adv Air Compressor
    event.remove({ output: "pneumaticcraft:advanced_air_compressor" });
    event.shaped("pneumaticcraft:advanced_air_compressor", ["AAA", "BCD", "AEA"], { A: "#forge:ingots/titanium", B: "createaddition:electric_motor", C: "advgenerators:turbine_rotor_tier4", D: "pneumaticcraft:pressure_tube", E: "pneumaticcraft:air_compressor" });

    //Explosion
    //event.custom({ type: Explosion, input: { tag: "forge:ingots/iron" }, loss_rate: 20, results: [{ item: "pneumaticcraft:ingot_iron_compressed" }] });
    //event.custom({ type: Explosion, input: { tag: "forge:storage_blocks/iron" }, loss_rate: 20, results: [{ item: "pneumaticcraft:compressed_iron_block" }] });

    //#region Chamber
    event.remove({ type: "pneumaticcraft:pressure_chamber" });
    const ChamberPattern = [
        {
            get: [{ item: "pneumaticcraft:capacitor" }],
            put: [{ tag: "forge:plastic" }, { tag: "forge:ingots/compressed_iron" }, { tag: "forge:ingots/red_alloy" }, { item: "oc2r:cpu_tier_4" }, { item: "powah:capacitor_spirited" }],
            bar: 1.5,
        },
        {
            get: [{ item: "pneumaticcraft:compressed_iron_block" }],
            put: [{ tag: "forge:storage_blocks/iron" }],
            bar: 2.5,
        },
        {
            get: [{ item: "pneumaticcraft:ingot_iron_compressed" }],
            put: [{ tag: "forge:ingots/iron" }],
            bar: 2.5,
        },
        {
            get: [{ item: "pneumaticcraft:compressed_stone" }],
            put: [{ tag: "forge:stone" }],
            bar: 1.5,
        },
        {
            get: [{ item: "pneumaticcraft:empty_pcb" }],
            put: [{ tag: "forge:plastic" }, { tag: "forge:ingots/compressed_iron" }, { item: "thermal:rf_coil" }, { tag: "forge:plates/copper" }, { tag: "anoxia:coil/copper" }],
            bar: 2,
        },
        {
            get: [{ item: "pneumaticcraft:etching_acid_bucket" }],
            put: [{ item: "minecraft:water_bucket" }, { type: "pneumaticcraft:stacked_item", count: 3, item: "chemlib:nitric_acid" }],
            bar: 1.5,
        },
        {
            get: [{ item: "pneumaticcraft:solar_wafer" }],
            put: [
                { type: "pneumaticcraft:stacked_item", count: 4, item: "projectred_core:electrotine_silicon" },
                { type: "pneumaticcraft:stacked_item", count: 4, tag: "forge:dusts/phosphorus" },
            ],
            bar: 3,
        },
        {
            get: [{ item: "pneumaticcraft:transistor" }],
            put: [{ tag: "forge:plastic" }, { tag: "forge:ingots/compressed_iron" }, { tag: "forge:ingots/red_alloy" }, { item: "oc2r:transistor" }],
            bar: 1.5,
        },
        {
            get: [{ item: "pneumaticcraft:turbine_blade" }],
            put: [{ tag: "forge:ingots/gold" }, { type: "pneumaticcraft:stacked_item", count: 2, tag: "forge:dusts/redstone" }],
            bar: 1.5,
        },
        {
            get: [{ item: "avaritia:neutron_pile" }],
            put: [{ type: "pneumaticcraft:stacked_item", count: 9, ForgeItemFilter: "anoxia:octuple_compressed_cobblestone" }],
            bar: 1.5,
        },
    ];
    ChamberPattern.forEach((recipe) => {
        event.custom({
            type: "pneumaticcraft:pressure_chamber",
            inputs: recipe.put,
            results: recipe.get,
            pressure: recipe.bar,
        });
    });
    //#endregion

    //#region Explosion
    /*     const ExplosionPattern = [];
    ExplosionPattern.forEach((recipe) => {
        event.custom({
            type: "pneumaticcraft:explosion_crafting",
            input: recipe.put,
            loss_rate: recipe.lost,
            results: recipe.get,
        });
    }); */
    //#endregion
});
