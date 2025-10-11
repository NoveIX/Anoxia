ServerEvents.recipes((event) => {

    event.remove({type: "immersiveengineering:generated_list"})

    //// # =================================================================================================== #

    //#region RemoveID
    const RmRecipeID = [
        //Thermal
        "thermal:machines/smelter/smelter_signalum_plate_to_ingot",
        "thermal:machines/smelter/smelter_lumium_plate_to_ingot",
        "thermal:machines/smelter/smelter_enderium_plate_to_ingot",
        "thermal:machines/smelter/smelter_steel_plate_to_ingot",
        "thermal:machines/smelter/smelter_rose_gold_plate_to_ingot",
        "thermal:machines/smelter/smelter_bronze_plate_to_ingot",
        "thermal:machines/smelter/smelter_electrum_plate_to_ingot",
        "thermal:machines/smelter/smelter_invar_plate_to_ingot",
        "thermal:machines/smelter/smelter_constantan_plate_to_ingot",
    ];
    //RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //// # =================================================================================================== #
});
