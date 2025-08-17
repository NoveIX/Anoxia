ServerEvents.recipes((event) => {
    //Solar panel
    event.remove({ output: "ad_astra:solar_panel" });
    event.shaped("ad_astra:solar_panel", ["AAA", "BCB", "BCB"], { A: "projectred_core:electrotine_silicon", B: "ad_astra:desh_plate", C: "ad_astra:desh_cable" });

    //Engine Fan
    event.remove({ output: "ad_astra:engine_fan" });
    event.shaped("ad_astra:engine_fan", [" A ", "ABA", " A "], { A: "#forge:plates/steel", B: "#forge:rods/iron" });

    //Cable Duct
    event.remove({ output: "ad_astra:cable_duct" });
    event.shaped("ad_astra:cable_duct", ["ABA", "BBB", "ABA"], { A: "#forge:plates/steel", B: "#forge:ingots/copper" }); //Unification SteelPlate AdAstra => Tag
});
