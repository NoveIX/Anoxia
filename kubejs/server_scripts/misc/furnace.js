ServerEvents.recipes((event) => {
    const SmeltingPattern = [
        { get: "anoxia:obsidian_ingot", put: "anoxia:obsidian_with_iron" },
        { get: "actuallyadditions:black_quartz", put: "botania:quartz_dark" },
        { get: "pneumaticcraft:plastic", put: "industrialforegoing:dryrubber" },
    ];
    SmeltingPattern.forEach((recipe) => event.smelting(recipe.get, recipe.put));
});
