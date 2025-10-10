ServerEvents.recipes((event) => {
    //Transistor
    event.remove({ output: "oc2r:transistor" });
    event.shaped(Item.of("oc2r:transistor", 4), ["AAA", "BCB", " D "], { A: "#forge:plates/copper", B: "thermal:rf_coil", C: "enderio:octadic_capacitor", D: "#forge:ingots/electrotine_alloy" });

    //Circuit Board
    event.remove({ output: "oc2r:circuit_board" });
    event.shapeless(Item.of("oc2r:circuit_board", 3), ["pneumaticcraft:printed_circuit_board", "oc2r:transistor", "#anoxia:coils/electrum", "#forge:plastic"]);

    //CPU-1
    event.remove({ output: "oc2r:cpu_tier_1" });
    event.shaped("oc2r:cpu_tier_1", ["AAA", "BCB", "DED"], { A: "#forge:gears/iron", B: "oc2r:transistor", C: "oc2r:silicon_wafer", D: "#anoxia:coils/electrum", E: "oc2r:circuit_board" });

    //CPU-2
    event.remove({ output: "oc2r:cpu_tier_2" });
    event.shaped("oc2r:cpu_tier_2", ["AAA", "BCB", "DED"], { A: "#forge:gears/gold", B: "oc2r:cpu_tier_1", C: "oc2r:silicon_wafer", D: "#anoxia:coils/electrum", E: "oc2r:circuit_board" });

    //CPU-3
    event.remove({ output: "oc2r:cpu_tier_3" });
    event.shaped("oc2r:cpu_tier_3", ["AAA", "BCB", "DED"], { A: "#forge:gears/diamond", B: "oc2r:cpu_tier_2", C: "oc2r:silicon_wafer", D: "#anoxia:coils/electrum", E: "oc2r:circuit_board" });

    //CPU-4
    event.remove({ output: "oc2r:cpu_tier_4" });
    event.shaped("oc2r:cpu_tier_4", ["AAA", "BCB", "DED"], { A: "#forge:gears/emerald", B: "oc2r:cpu_tier_3", C: "oc2r:silicon_wafer", D: "#anoxia:coils/electrum", E: "oc2r:circuit_board" });

    //Memory-1
    event.remove({ output: "oc2r:memory_small" });
    event.shaped("oc2r:memory_small", ["ABD", "ACD", "ABD"], { A: "#forge:gears/iron", B: "oc2r:circuit_board", C: "oc2r:transistor", D: "#anoxia:coils/electrum" });

    //Memory-2
    event.remove({ output: "oc2r:memory_medium" });
    event.shaped("oc2r:memory_medium", ["ABD", "ACD", "ABD"], { A: "#forge:gears/gold", B: "oc2r:memory_small", C: "oc2r:transistor", D: "#anoxia:coils/electrum" });

    //Memory-3
    event.remove({ output: "oc2r:memory_large" });
    event.shaped("oc2r:memory_large", ["ABD", "ACD", "ABD"], { A: "#forge:gears/diamond", B: "oc2r:memory_medium", C: "oc2r:transistor", D: "#anoxia:coils/electrum" });

    //Memory-4
    event.remove({ output: "oc2r:memory_extra_large" });
    event.shaped("oc2r:memory_extra_large", ["ABD", "ACD", "ABD"], { A: "#forge:gears/emerald", B: "oc2r:memory_large", C: "oc2r:transistor", D: "#anoxia:coils/electrum" });
});
