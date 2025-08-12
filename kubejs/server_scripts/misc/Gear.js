ServerEvents.recipes((event) => {
    //#region RmID
    const RmID = [
        //Thermal Series
        "thermal:machines/press/press_iron_ingot_to_gear",
        "thermal:machines/press/press_gold_ingot_to_gear",
        "thermal:machines/press/press_copper_ingot_to_gear",
        "thermal:machines/press/press_netherite_ingot_to_gear",
        "thermal:machines/press/press_tin_ingot_to_gear",
        "thermal:machines/press/press_lead_ingot_to_gear",
        "thermal:machines/press/press_silver_ingot_to_gear",
        "thermal:machines/press/press_nickel_ingot_to_gear",
        "thermal:machines/press/press_signalum_ingot_to_gear",
        "thermal:machines/press/press_lumium_ingot_to_gear",
        "thermal:machines/press/press_enderium_ingot_to_gear",
        "thermal:machines/press/press_steel_ingot_to_gear",
        "thermal:machines/press/press_rose_gold_ingot_to_gear",
        "thermal:machines/press/press_bronze_ingot_to_gear",
        "thermal:machines/press/press_electrum_ingot_to_gear",
        "thermal:machines/press/press_invar_ingot_to_gear",
        "thermal:machines/press/press_constantan_ingot_to_gear",

        //Thermal Extra
        "thermal:compat/redstone_arsenal/press_rsa_flux_ingot_to_gear",
        "thermalendergy:machine/press/press_prismalium_ingot_to_gear",
        "thermalendergy:machine/press/press_melodium_ingot_to_gear",
        "thermalendergy:machine/press/press_stellarium_ingot_to_gear",
        "thermal_extra:machine/press/soul_infused_gear",
        "thermal_extra:machine/press/shellite_gear",
        "thermal_extra:machine/press/twinite_gear",
        "thermal_extra:machine/press/dragonsteel_gear",
        "thermal_extra:machine/press/abyssal_gear",

        //JAOPCA Integration
        "jaopca:thermal_expansion.material_to_gear.compressed_iron",
        "jaopca:thermal_expansion.material_to_gear.prismalium",
        "jaopca:thermal_expansion.material_to_gear.melodium",
        "jaopca:thermal_expansion.material_to_gear.stellarium",
        "jaopca:thermal_expansion.material_to_gear.soul_infused",
        "jaopca:thermal_expansion.material_to_gear.shellite",
        "jaopca:thermal_expansion.material_to_gear.twinite",
        "jaopca:thermal_expansion.material_to_gear.dragonsteel",
        "jaopca:thermal_expansion.material_to_gear.abyssal",
    ];
    RmID.forEach((ID) => {
        event.remove({ id: ID });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Func Gear
    function Gear({ get, put, rsflux, liquid }) {
        //Create
        event.custom({
            type: "create:compacting",
            ingredients: [{ tag: put }, { tag: put }, { tag: put }, { tag: put }, { amount: 1000, fluid: liquid, nbt: {} }],
            results: [{ item: get }],
        });

        //Immersive
        event.custom({
            type: "immersiveengineering:metal_press",
            energy: rsflux,
            input: { base_ingredient: { tag: put }, count: 4 },
            mold: "immersiveengineering:mold_gear",
            result: { item: get },
        });

        //Thermal
        event.custom({
            type: "thermal:press",
            ingredients: [{ tag: put, count: 4 }, { item: "thermal:press_gear_die" }],
            result: [{ item: get }],
            energy: rsflux,
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
        { get: "thermal:netherite_gear", put: "forge:ingots/netherite", rsflux: 12000 },
        { get: "thermal:tin_gear", put: "forge:ingots/tin", rsflux: 4000 },
        { get: "thermal:lead_gear", put: "forge:ingots/lead", rsflux: 4000 },
        { get: "thermal:silver_gear", put: "forge:ingots/silver", rsflux: 4000 },
        { get: "thermal:nickel_gear", put: "forge:ingots/nickel", rsflux: 4000 },
        { get: "thermal:signalum_gear", put: "forge:ingots/signalum", rsflux: 8000 },
        { get: "thermal:lumium_gear", put: "forge:ingots/lumium", rsflux: 8000 },
        { get: "thermal:enderium_gear", put: "forge:ingots/enderium", rsflux: 12000 },
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
        { get: "thermalendergy:prismalium_gear", put: "forge:ingots/prismalium", rsflux: 16000 },
        { get: "thermalendergy:melodium_gear", put: "forge:ingots/melodium", rsflux: 20000 },
        { get: "thermalendergy:stellarium_gear", put: "forge:ingots/stellarium", rsflux: 24000 },

        //Thermal Extra
        { get: "thermal_extra:soul_infused_gear", put: "forge:ingots/soul_infused", rsflux: 6000 },
        { get: "thermal_extra:twinite_gear", put: "forge:ingots/twinite", rsflux: 8000 },
        { get: "thermal_extra:shellite_gear", put: "forge:ingots/shellite", rsflux: 12000 },
        { get: "thermal_extra:dragonsteel_gear", put: "forge:ingots/dragonsteel", rsflux: 16000 },
        { get: "thermal_extra:abyssal_gear", put: "forge:ingots/abyssal", rsflux: 20000 },

        //Redstone Arsenal
        { get: "redstone_arsenal:flux_gear", put: "forge:ingots/flux", rsflux: 8000 },

        //Pneumaticcraft
        { get: "pneumaticcraft:compressed_iron_gear", put: "forge:ingots/compressed_iron", rsflux: 8000 },

        //Avaritia
        { get: "avaritia:neutron_gear", put: "forge:ingots/neutron", rsflux: 150000 },
    ];
    GearPattern.forEach((recipe) => {
        //Remove
        event.remove({ output: recipe.get });

        if (recipe.put === "forge:ingots/neutron") {
            //Thermal => Neutrons
            event.custom({
                type: "thermal:press",
                ingredients: [{ tag: recipe.put, count: 4 }, { item: "thermal:press_gear_die" }],
                result: [{ item: recipe.get }],
                energy: recipe.rsflux,
            });
        } else {
            if (recipe.put.startsWith("forge:gems/")) {
                Gear({ get: recipe.get, put: recipe.put, rsflux: recipe.rsflux, liquid: "minecraft:water" });
            } else {
                Gear({ get: recipe.get, put: recipe.put, rsflux: recipe.rsflux, liquid: "minecraft:lava" });
            }
        }
    });
    //#endregion
});
