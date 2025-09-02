ItemEvents.modification((event) => {
    event.modify("anoxia:tiny_coal", (item) => (item.burnTime = 200));
    event.modify("anoxia:tiny_charcoal", (item) => (item.burnTime = 200));
    event.modify("thermal:sawdust", (item) => (item.burnTime = 100));
    event.modify("mekanism:sawdust", (item) => (item.burnTime = 100));

    //Vanilla maxStackSize
    event.modify(Item.of("minecraft:potion"), (data) => { data.maxStackSize = 64; });
    event.modify(Item.of("minecraft:splash_potion"), (data) => { data.maxStackSize = 64; });
    event.modify(Item.of("minecraft:lingering_potion"), (data) => { data.maxStackSize = 64; });
    event.modify(Item.of("minecraft:ender_pearl"), (data) => { data.maxStackSize = 64; });
    event.modify(Item.of("minecraft:egg"), (data) => { data.maxStackSize = 64; });
    event.modify(Item.of("minecraft:bucket"), (data) => { data.maxStackSize = 64; });
});
