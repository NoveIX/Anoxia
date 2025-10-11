ServerEvents.recipes((event) => {
    //#region Remove ID
    const RmRecipeID = [
        //Thermal Compat
        "thermal:compat/redstone_arsenal/press_rsa_flux_ingot_to_gear",

        //Thermal Endergy
        "thermalendergy:machine/press/press_prismalium_ingot_to_gear",
        "thermalendergy:machine/press/press_melodium_ingot_to_gear",
        "thermalendergy:machine/press/press_stellarium_ingot_to_gear",

        //Thermal Expansion
        "thermal:machines/press/press_iron_ingot_to_gear",
        "thermal:machines/press/press_gold_ingot_to_gear",
        "thermal:machines/press/press_copper_ingot_to_gear",
        "thermal:machines/press/press_netherite_ingot_to_gear",
        "thermal:machines/press/press_tin_ingot_to_gear",
        "thermal:machines/press/press_lead_ingot_to_gear",
        "thermal:machines/press/press_silver_ingot_to_gear",
        "thermal:machines/press/press_nickel_ingot_to_gear",
        "thermal:machines/press/press_steel_ingot_to_gear",
        "thermal:machines/press/press_rose_gold_ingot_to_gear",
        "thermal:machines/press/press_signalum_ingot_to_gear",
        "thermal:machines/press/press_lumium_ingot_to_gear",
        "thermal:machines/press/press_enderium_ingot_to_gear",
        "thermal:machines/press/press_bronze_ingot_to_gear",
        "thermal:machines/press/press_electrum_ingot_to_gear",
        "thermal:machines/press/press_invar_ingot_to_gear",
        "thermal:machines/press/press_constantan_ingot_to_gear",
    ];
    //RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //// # =================================================================================================== #

    //#region Func Gear
    function GearCreate(recipe, liquid) {
        event.custom({
            type: "create:compacting",
            ingredients: [{ tag: recipe.put }, { tag: recipe.put }, { tag: recipe.put }, { tag: recipe.put }, { amount: 1000, fluid: liquid, nbt: {} }],
            results: [{ item: recipe.get }],
        });
    }

    function GearImmersive(recipe) {
        event.custom({
            type: "immersiveengineering:metal_press",
            energy: recipe.rsflux,
            input: { base_ingredient: { tag: recipe.put }, count: 4 },
            mold: "immersiveengineering:mold_gear",
            result: { item: recipe.get },
        });
    }

    function GearThermal(recipe) {
        event.custom({
            type: "thermal:press",
            ingredients: [{ tag: recipe.put, count: 4 }, { item: "thermal:press_gear_die" }],
            result: [{ item: recipe.get }],
            energy: recipe.rsflux,
        });
    }
    //#endregion

    //// # =================================================================================================== #

    //#region Gear
    const GearPattern = [
        //Thermal Metal
        { get: "thermal:iron_gear", put: "forge:ingots/iron", rsflux: 4000 },
        { get: "thermal:gold_gear", put: "forge:ingots/gold", rsflux: 4000 },
        { get: "thermal:copper_gear", put: "forge:ingots/copper", rsflux: 4000 },
        { get: "thermal:netherite_gear", put: "forge:ingots/netherite", rsflux: 12000, metal: "hard" },
        { get: "thermal:tin_gear", put: "forge:ingots/tin", rsflux: 4000 },
        { get: "thermal:lead_gear", put: "forge:ingots/lead", rsflux: 4000 },
        { get: "thermal:silver_gear", put: "forge:ingots/silver", rsflux: 4000 },
        { get: "thermal:nickel_gear", put: "forge:ingots/nickel", rsflux: 4000 },
        { get: "thermal:signalum_gear", put: "forge:ingots/signalum", rsflux: 8000, metal: "hard" },
        { get: "thermal:lumium_gear", put: "forge:ingots/lumium", rsflux: 8000, metal: "hard" },
        { get: "thermal:enderium_gear", put: "forge:ingots/enderium", rsflux: 12000, metal: "hard" },
        { get: "thermal:steel_gear", put: "forge:ingots/steel", rsflux: 6000 },
        { get: "thermal:rose_gold_gear", put: "forge:ingots/rose_gold", rsflux: 6000 },
        { get: "thermal:bronze_gear", put: "forge:ingots/bronze", rsflux: 6000 },
        { get: "thermal:electrum_gear", put: "forge:ingots/electrum", rsflux: 6000 },
        { get: "thermal:invar_gear", put: "forge:ingots/invar", rsflux: 6000 },
        { get: "thermal:constantan_gear", put: "forge:ingots/constantan", rsflux: 6000 },

        //Thermal Gem
        { get: "thermal:lapis_gear", put: "forge:gems/lapis", rsflux: 2000 },
        { get: "thermal:diamond_gear", put: "forge:gems/diamond", rsflux: 8000 },
        { get: "thermal:emerald_gear", put: "forge:gems/emerald", rsflux: 8000 },
        { get: "thermal:quartz_gear", put: "forge:gems/quartz", rsflux: 2000 },
        { get: "thermal:ruby_gear", put: "forge:gems/ruby", rsflux: 6000 },
        { get: "thermal:sapphire_gear", put: "forge:gems/sapphire", rsflux: 6000 },

        //Thermal Endergy
        { get: "thermalendergy:prismalium_gear", put: "forge:ingots/prismalium", rsflux: 16000, metal: "hard" },
        { get: "thermalendergy:melodium_gear", put: "forge:ingots/melodium", rsflux: 20000, metal: "hard" },
        { get: "thermalendergy:stellarium_gear", put: "forge:ingots/stellarium", rsflux: 24000, metal: "hard" },

        //Redstone Arsenal
        { get: "redstone_arsenal:flux_gear", put: "forge:ingots/flux", rsflux: 8000 },

        //Pneumaticcraft
        { get: "pneumaticcraft:compressed_iron_gear", put: "forge:ingots/compressed_iron", rsflux: 8000 },

        //Avaritia
        { get: "avaritia:neutron_gear", put: "forge:ingots/neutron", rsflux: 720000, metal: "special" },
    ];
    GearPattern.forEach((recipe) => {
        //Remove
        //event.remove({ output: recipe.get });

        //Neutron
        //if (recipe.metal === "special") {
        //    GearThermal(recipe);
        //}

        //Hard metal
        //else if (recipe.metal === "hard") {
        //    GearImmersive(recipe);
        //    GearThermal(recipe);
        //}

        //Other
        //else {
        //    if (recipe.put.startsWith("forge:gems/")) {
        //        GearCreate(recipe, "minecraft:water");
        //        GearImmersive(recipe);
        //        GearThermal(recipe);
        //    } else {
        //        GearCreate(recipe, "minecraft:lava");
        //        GearImmersive(recipe);
        //        GearThermal(recipe);
        //    }
        //}
    });
    //#endregion
});
