ServerEvents.recipes((event) => {
    //Basic magnet
    event.remove({ output: "simplemagnets:basicmagnet" });
    event.shaped("simplemagnets:basicmagnet", ["AAB", "AC ", "AAD"], { A: "minecraft:iron_ingot", B: "#forge:ingots/electrotine_alloy", C: "thermal:rf_coil", D: "#forge:ingots/red_alloy" });

    //Advanced Magnet
    event.remove({ output: "simplemagnets:advancedmagnet" });
    event.shaped("simplemagnets:advancedmagnet", ["AAB", "CD ", "AAE"], { A: "minecraft:gold_ingot", B: "#forge:ingots/electrotine_alloy", C: "simplemagnets:basicmagnet", D: "thermal:rf_coil", E: "#forge:ingots/red_alloy" });

    //Demagnetization Coil
    event.remove({ output: "simplemagnets:basic_demagnetization_coil" });
    event.shaped("simplemagnets:basic_demagnetization_coil", ["ABA", "ABA", "CCC"], { A: "#forge:wires/copper", B: "createaddition:spool", C: "#forge:plates/iron" });

    //Advanced Demagnetization Coil
    event.remove({ output: "simplemagnets:advanced_demagnetization_coil" });
    event.shaped("simplemagnets:advanced_demagnetization_coil", ["ABA", "ACA", "DDD"], { A: "#forge:wires/electrum", B: "createaddition:spool", C: "simplemagnets:basic_demagnetization_coil", D: "#forge:plates/steel" });
});
