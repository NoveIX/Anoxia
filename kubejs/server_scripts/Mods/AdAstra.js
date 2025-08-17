ServerEvents.recipes((event) => {
    const RmRecipeID = ["ad_astra:conversion/fuel_from_oil", "ad_astra:nasa_workbench/tier_1_rocket", "ad_astra:nasa_workbench/tier_2_rocket", "ad_astra:nasa_workbench/tier_3_rocket", "ad_astra:nasa_workbench/tier_4_rocket"];
    RmRecipeID.forEach((id) => {
        event.remove({ id: id });
    });

    //// # =================================================================================================== #

    //Solar panel
    event.remove({ output: "ad_astra:solar_panel" });
    event.shaped("ad_astra:solar_panel", ["AAA", "BCB", "BCB"], { A: "projectred_core:electrotine_silicon", B: "ad_astra:desh_plate", C: "ad_astra:desh_cable" });

    //Engine Fan
    event.remove({ output: "ad_astra:engine_fan" });
    event.shaped("ad_astra:engine_fan", [" A ", "ABA", " A "], { A: "#forge:plates/steel", B: "#forge:rods/iron" });

    //Cable Duct
    event.remove({ output: "ad_astra:cable_duct" });
    event.shaped("ad_astra:cable_duct", ["ABA", "BBB", "ABA"], { A: "#forge:plates/steel", B: "#forge:ingots/copper" }); //Unification SteelPlate AdAstra => Tag

    //// # =================================================================================================== #

    //#region Refinery
    const RefineryPattern = [
        { get: "thermal:creosote", put: "immersiveengineering:creosote" },
        { get: "immersiveengineering:creosote", put: "thermal:creosote" }, //Reverse
    ];
    RefineryPattern.forEach((recipe) => {
        event.custom({
            type: "ad_astra:fuel_conversion",
            input: recipe.put,
            output: recipe.get,
            conversion_ratio: 1.0,
        });
    });
    //#endregion
});
