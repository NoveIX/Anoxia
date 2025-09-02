ServerEvents.recipes((event) => {
    // Rocky Dirt
    event.remove({ output: "twigs:rocky_dirt" });
    event.shaped(Item.of("twigs:rocky_dirt", 4), ["BA", "AB"], { A: "#forge:pebble/stone", B: "minecraft:dirt" });
});
