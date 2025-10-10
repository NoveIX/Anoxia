ServerEvents.recipes((event) => {
    //#region Photovoltaic Cell
    event.shaped("solarflux:mirror", ["A", "B", "C"], { A: "#forge:glass_panes/colorless", B: "projectred_core:electrotine_silicon", C: "#forge:plates/iron" });
    event.shaped("solarflux:photovoltaic_cell_1", ["A", "B", "C"], { A: "#forge:glass_panes/colorless", B: "projectred_core:electrotine_silicon", C: "solarflux:mirror" });
    event.shaped("solarflux:photovoltaic_cell_2", ["A", "B", "C"], { A: "#forge:glass_panes/colorless", B: "projectred_core:electrotine_silicon", C: "solarflux:photovoltaic_cell_1" });
    event.shaped("solarflux:photovoltaic_cell_3", ["A", "B", "C"], { A: "#forge:glass_panes/colorless", B: "projectred_core:electrotine_silicon", C: "solarflux:photovoltaic_cell_2" });
    event.shaped("solarflux:photovoltaic_cell_4", ["A", "B", "C"], { A: "#forge:glass_panes/colorless", B: "solarflux:blazing_coating", C: "solarflux:photovoltaic_cell_3" });
    event.shaped("solarflux:photovoltaic_cell_5", ["A", "B", "C"], { A: "#forge:glass_panes/colorless", B: "solarflux:emerald_glass", C: "solarflux:photovoltaic_cell_4" });
    event.shaped("solarflux:photovoltaic_cell_6", ["A", "B", "C"], { A: "#forge:glass_panes/colorless", B: "solarflux:ender_glass", C: "solarflux:photovoltaic_cell_5" });

    //Blazing Coatingr
    event.shaped("solarflux:blazing_coating", ["A", "B", "C"], { A: "#forge:glass_panes/colorless", B: "minecraft:blaze_powder", C: "solarflux:mirror" });
    event.shaped("solarflux:emerald_glass", ["A", "B", "C"], { A: "#forge:glass_panes/colorless", B: "thermal:emerald_dust", C: "solarflux:mirror" });
    event.shaped("solarflux:ender_glass", ["A", "B", "C"], { A: "#forge:glass_panes/colorless", B: "thermal:ender_pearl_dust", C: "solarflux:mirror" });
    //#endregion

    //// # =================================================================================================== #

    //#region Panel
    event.shaped("solarflux:sp_1", ["AAA", "BBB", "CCC"], { A: "#forge:glass_panes/colorless", B: "#forge:ingots/redstone_ingot", C: "minecraft:daylight_detector" });
    event.shaped("solarflux:sp_2", ["AAA", "BBB", "CCC"], { A: "solarflux:mirror", B: "#forge:ingots/redstone_ingot", C: "solarflux:sp_1" });
    event.shaped("solarflux:sp_3", ["AAA", "BBB", "CCC"], { A: "solarflux:photovoltaic_cell_1", B: "#forge:ingots/redstone_ingot", C: "solarflux:sp_2" });
    event.shaped("solarflux:sp_4", ["AAA", "BBB", "CCC"], { A: "solarflux:photovoltaic_cell_2", B: "#forge:ingots/redstone_ingot", C: "solarflux:sp_3" });
    event.shaped("solarflux:sp_5", ["AAA", "BBB", "CCC"], { A: "solarflux:photovoltaic_cell_3", B: "#forge:ingots/redstone_ingot", C: "solarflux:sp_4" });
    event.shaped("solarflux:sp_6", ["AAA", "BBB", "CCC"], { A: "solarflux:photovoltaic_cell_4", B: "#forge:ingots/redstone_ingot", C: "solarflux:sp_5" });
    event.shaped("solarflux:sp_7", ["AAA", "BBB", "CCC"], { A: "solarflux:photovoltaic_cell_5", B: "#forge:ingots/redstone_ingot", C: "solarflux:sp_6" });
    event.shaped("solarflux:sp_8", ["AAA", "BBB", "CCC"], { A: "solarflux:photovoltaic_cell_6", B: "#forge:ingots/redstone_ingot", C: "solarflux:sp_7" });
    //#endregionr
});
