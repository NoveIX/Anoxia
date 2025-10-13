ServerEvents.recipes((event) => {
    //Entangled
    event.remove({ output: "entangled:block" });
    event.shaped("entangled:block", ["ABA", "BCB", "ABA"], { A: "minecraft:ender_pearl", B: "#forge:ingots/obsidian", C: "#forge:chests/wooden" });
    event.shapeless("entangled:block", ["entangled:block"]);

    //Entangled Binder
    event.remove({ output: "entangled:item" });
    event.shaped("entangled:item", [" AB", " CA", "C  "], { A: "minecraft:ender_pearl", B: "#forge:gears/diamond", C: "#forge:ingots/obsidian" });
});
