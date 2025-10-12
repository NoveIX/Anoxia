ServerEvents.recipes((event) => {
    event.remove({ type: "immersiveengineering:generated_list" });

    //// # =================================================================================================== #

    //#region RemoveID
    const RmRecipeID = [
        //Thermal
        "thermal:machines/smelter/smelter_iron_plate_to_ingot",
        "thermal:machines/smelter/smelter_gold_plate_to_ingot",
        "thermal:machines/smelter/smelter_copper_plate_to_ingot",
        "thermal:machines/smelter/smelter_netherite_plate_to_ingot",
        "thermal:machines/smelter/smelter_tin_plate_to_ingot",
        "thermal:machines/smelter/smelter_lead_plate_to_ingot",
        "thermal:machines/smelter/smelter_silver_plate_to_ingot",
        "thermal:machines/smelter/smelter_nickel_plate_to_ingot",
        "thermal:machines/smelter/smelter_steel_plate_to_ingot",
        "thermal:machines/smelter/smelter_rose_gold_plate_to_ingot",
        "thermal:machines/smelter/smelter_signalum_plate_to_ingot",
        "thermal:machines/smelter/smelter_lumium_plate_to_ingot",
        "thermal:machines/smelter/smelter_enderium_plate_to_ingot",
        "thermal:machines/smelter/smelter_bronze_plate_to_ingot",
        "thermal:machines/smelter/smelter_electrum_plate_to_ingot",
        "thermal:machines/smelter/smelter_invar_plate_to_ingot",
        "thermal:machines/smelter/smelter_constantan_plate_to_ingot",
    ];
    RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //// # =================================================================================================== #
});
