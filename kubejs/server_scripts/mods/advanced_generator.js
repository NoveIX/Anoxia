ServerEvents.recipes((event) => {
    //Blade
    event.remove({ output: "advgenerators:turbine_blade" });
    event.shaped(Item.of("advgenerators:turbine_blade", 4), ["AA", "AA", " A"], { A: "#forge:plates/iron" });

    //Basic turbine
    event.remove({ output: "advgenerators:turbine_rotor_tier1" });
    event.shaped("advgenerators:turbine_rotor_tier1", ["AAA", "ABA", "AAA"], { A: "advgenerators:turbine_blade", B: "#forge:gears/iron" });

    //Enhanced turbine
    event.remove({ output: "advgenerators:turbine_rotor_tier2" });
    event.shaped("advgenerators:turbine_rotor_tier2", ["AAA", "ABA", "AAA"], { A: "#forge:plates/electrum", B: "advgenerators:turbine_rotor_tier1" });
    event.remove({ output: "advgenerators:turbine_kit_tier2" });
    event.shaped("advgenerators:turbine_kit_tier2", ["AAA", "ABA", "AAA"], { A: "#forge:plates/electrum", B: "advgenerators:upgrade_kit" });

    //Advanced turbine
    event.remove({ output: "advgenerators:turbine_rotor_tier3" });
    event.shaped("advgenerators:turbine_rotor_tier3", ["AAA", "ABA", "AAA"], { A: "#forge:plates/bronze", B: "advgenerators:turbine_rotor_tier2" });
    event.remove({ output: "advgenerators:turbine_kit_tier3" });
    event.shaped("advgenerators:turbine_kit_tier3", ["AAA", "ABA", "AAA"], { A: "#forge:plates/bronze", B: "advgenerators:upgrade_kit" });

    //Reinforced turbine
    event.remove({ output: "advgenerators:turbine_rotor_tier4" });
    event.shaped("advgenerators:turbine_rotor_tier4", ["AAA", "ABA", "AAA"], { A: "#forge:plates/steel", B: "advgenerators:turbine_rotor_tier3" });
    event.remove({ output: "advgenerators:turbine_kit_tier4" });
    event.shaped("advgenerators:turbine_kit_tier4", ["AAA", "ABA", "AAA"], { A: "#forge:plates/steel", B: "advgenerators:upgrade_kit" });

    //Composite turbine
    event.remove({ output: "advgenerators:turbine_rotor_tier5" });
    event.shaped("advgenerators:turbine_rotor_tier5", ["AAA", "ABA", "AAA"], { A: "#forge:plates/enderium", B: "advgenerators:turbine_rotor_tier4" });
    event.remove({ output: "advgenerators:turbine_kit_tier5" });
    event.shaped("advgenerators:turbine_kit_tier5", ["AAA", "ABA", "AAA"], { A: "#forge:plates/enderium", B: "advgenerators:upgrade_kit" });

    //Control circuit
    event.remove({ output: "advgenerators:controller" });
    event.shaped("advgenerators:controller", ["ABA", "BCB", "ABA"], { A: "minecraft:iron_ingot", B: "#forge:ingots/red_alloy", C: "#forge:gears/quartz" });

    //Iron tubing
    event.remove({ output: "advgenerators:iron_tubing" });
    event.shaped(Item.of("advgenerators:iron_tubing", 8), ["  A", " B ", "A  "], { A: "#forge:rods/wooden", B: "minecraft:iron_ingot" });

    //Redstone-iron tubing
    event.remove({ output: "advgenerators:iron_wiring" });
    event.shaped(Item.of("advgenerators:iron_wiring", 8), ["  A", " B ", "A  "], { A: "#forge:rods/wooden", B: "#forge:ingots/red_alloy" });

    //// # =================================================================================================== #

    //#region Liquid fuel
    event.remove({ type: "advgenerators:liquid_fuel" });
    const LiquidFuelPattern = [
        { rsflux: 5000, put: "ad_astra:fuel" },
        { rsflux: 4500, put: "thermal:refined_fuel" },
        { rsflux: 3000, put: "thermal:light_oil" },
        { rsflux: 3000, put: "thermal:heavy_oil" },
        { rsflux: 2500, put: "thermal:crude_oil" },
        { rsflux: 1500, put: "thermal:creosote" },
        { rsflux: 1000, put: "advgenerators:syngas" },
        { rsflux: 11260, put: "mekanism:hydrogen" },
        { rsflux: 2000, put: "mekanism:ethene" },
        { rsflux: 1250, put: "immersiveengineering:biodiesel" },
    ];
    LiquidFuelPattern.forEach((recipe) =>
        event.custom({
            type: "advgenerators:liquid_fuel",
            fuel: { fluid: recipe.put },
            fePerMb: recipe.rsflux,
        })
    );
    //#endregion
});
