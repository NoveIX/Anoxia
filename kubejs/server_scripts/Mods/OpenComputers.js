ServerEvents.recipes((event) => {
    //Transistor
    event.remove({ output: "oc2r:transistor" });
    event.shaped(Item.of("oc2r:transistor", 4), ["CCC", "FDF", " E "], { C: "#forge:plates/copper", F: "thermal:rf_coil", D: "enderio:octadic_capacitor", E: "#forge:ingots/electrotine_alloy" });

    //Circuit Board
    event.remove({ output: "oc2r:circuit_board" });
    event.shapeless(Item.of("oc2r:circuit_board", 3), ["pneumaticcraft:printed_circuit_board", "oc2r:transistor", "#anoxia:coil/electrum", "#forge:plastic"]);

    //CPU-1
    event.remove({ output: "oc2r:cpu_tier_1" });
    event.shaped("oc2r:cpu_tier_1", ["FFF", "TWT", "CBC"], { F: "#forge:gears/iron", T: "oc2r:transistor", W: "oc2r:silicon_wafer", C: "#anoxia:coil/electrum", B: "oc2r:circuit_board" });

    //CPU-2
    event.remove({ output: "oc2r:cpu_tier_2" });
    event.shaped("oc2r:cpu_tier_2", ["FFF", "TWT", "CBC"], { F: "#forge:gears/gold", T: "oc2r:cpu_tier_1", W: "oc2r:silicon_wafer", C: "#anoxia:coil/electrum", B: "oc2r:circuit_board" });

    //CPU-3
    event.remove({ output: "oc2r:cpu_tier_3" });
    event.shaped("oc2r:cpu_tier_3", ["FFF", "TWT", "CBC"], { F: "#forge:gears/diamond", T: "oc2r:cpu_tier_2", W: "oc2r:silicon_wafer", C: "#anoxia:coil/electrum", B: "oc2r:circuit_board" });

    //CPU-4
    event.remove({ output: "oc2r:cpu_tier_4" });
    event.shaped("oc2r:cpu_tier_4", ["FFF", "TWT", "CBC"], { F: "#forge:gears/emerald", T: "oc2r:cpu_tier_3", W: "oc2r:silicon_wafer", C: "#anoxia:coil/electrum", B: "oc2r:circuit_board" });

    //Memory-1
    event.remove({ output: "oc2r:memory_small" });
    event.shaped("oc2r:memory_small", ["FBC", "FTC", "FBC"], { F: "#forge:gears/iron", T: "oc2r:transistor", C: "#anoxia:coil/electrum", B: "oc2r:circuit_board" });

    //Memory-2
    event.remove({ output: "oc2r:memory_medium" });
    event.shaped("oc2r:memory_medium", ["FBC", "FTC", "FBC"], { F: "#forge:gears/gold", T: "oc2r:transistor", C: "#anoxia:coil/electrum", B: "oc2r:memory_small" });

    //Memory-3
    event.remove({ output: "oc2r:memory_large" });
    event.shaped("oc2r:memory_large", ["FBC", "FTC", "FBC"], { F: "#forge:gears/diamond", T: "oc2r:transistor", C: "#anoxia:coil/electrum", B: "oc2r:memory_medium" });

    //Memory-4
    event.remove({ output: "oc2r:memory_extra_large" });
    event.shaped("oc2r:memory_extra_large", ["FBC", "FTC", "FBC"], { F: "#forge:gears/emerald", T: "oc2r:transistor", C: "#anoxia:coil/electrum", B: "oc2r:memory_large" });
});
