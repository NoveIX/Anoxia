ServerEvents.recipes((event) => {
    //Wood Hopper
    event.remove({ output: "cyclic:hopper" });
    event.shaped("cyclic:hopper", ["S S", "SHS", " S "], { S: "#minecraft:wooden_slabs", H: "minecraft:hopper" });

    //Gold Hopper
    event.remove({ output: "cyclic:hopper_gold" });
    event.shaped("cyclic:hopper_gold", ["P P", "PWP", " P "], { P: "#forge:plates/gold", W: "cyclic:hopper" });
});
