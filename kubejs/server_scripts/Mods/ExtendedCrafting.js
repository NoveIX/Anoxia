ServerEvents.recipes((event) => {
    event.custom({
        type: "extendedcrafting:compressor",
        powerCost: 50000000,
        inputCount: 1072658,
        ingredient: { item: "anoxia:human_soul" },
        catalyst: { item: "extendedcrafting:the_ultimate_catalyst" },
        result: { item: "projecte:philosophers_stone" },
    });
});
