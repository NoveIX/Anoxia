LootJS.modifiers((event) => {
    event.addLootTableModifier("minecraft:entities/villager").limitCount(1).randomChance(1.0).addLoot("anoxia:human_soul");
    event.addLootTableModifier("minecraft:entities/wandering_trader").limitCount(1).randomChance(1.0).addLoot("anoxia:human_soul");
    event.addLootTableModifier("minecraft:entities/player").limitCount(1).randomChance(1.0).addLoot("anoxia:human_soul");
});
