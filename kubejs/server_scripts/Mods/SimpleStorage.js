ServerEvents.recipes((event) => {
    //Craft terminal
    event.remove({ output: "storagenetwork:request" });
    event.shaped("storagenetwork:request", ["ABA", "BCB", "ABA"], { A: "#forge:plates/gold", B: "minecraft:crafting_table", C: "storagenetwork:inventory" });

    //Terminal
    event.remove({ output: "storagenetwork:inventory" });
    event.shaped("storagenetwork:inventory", ["ABA", "BCB", "ABA"], { A: "forge:plates/iron", B: "storagenetwork:kabel", C: "computercraft:monitor_advanced" });

    //Extended Terminal
    event.remove({ output: "storagenetwork:request_expanded" });
    event.shaped("storagenetwork:request_expanded", ["ABA", "BCB", "ABA"], { A: "#forge:plates/gold", B: "computercraft:monitor_advanced", C: "storagenetwork:request" });

    //Root
    event.remove({ output: "storagenetwork:master" });
    event.shaped("storagenetwork:master", ["ABA", "BCB", "ABA"], { A: "#forge:plates/invar", B: "storagenetwork:kabel", C: "industrialforegoing:machine_frame_pity" });

    //Network Cable
    event.remove({ output: "storagenetwork:kabel" });
    event.shaped(Item.of("storagenetwork:kabel", 6), ["AAA", "BBB", "AAA"], { A: "#forge:silicon", B: "#forge:wires/copper" });
});
