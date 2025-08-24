ServerEvents.recipes((event) => {
    const SmeltingPattern = [
        { get: "anoxia:obsidian_ingot", put: "anoxia:obsidian_with_iron" },
        { get: "actuallyadditions:black_quartz", put: "botania:quartz_dark" },
        { get: "pneumaticcraft:plastic", put: "industrialforegoing:dryrubber" },
    ];
    SmeltingPattern.forEach((recipe) => {
        event.smelting(recipe.get, recipe.put);

        if (recipe.put && recipe.put.startsWith("forge:")) {
            //EnderIO
            event.custom({
                type: "enderio:alloy_smelting",
                inputs: [{ ingredient: { tag: recipe.put }, count: 1 }],
                result: [{ item: recipe.get, count: 1 }],
                experience: 0.3,
                energy: 2000,
            });

            //Thermal
            event.custom({
                type: "thermal:smelter",
                ingredient: [{ tag: recipe.put, count: 1 }],
                result: [{ item: recipe.get, count: 1 }],
                experience: 0.3,
                energy: 2000,
            });
        } else {
            //EnderIO
            event.custom({
                type: "enderio:alloy_smelting",
                inputs: [{ ingredient: { item: recipe.put }, count: 1 }],
                result: [{ item: recipe.get, count: 1 }],
                experience: 0.3,
                energy: 2000,
            });

            //Thermal
            event.custom({
                type: "thermal:smelter",
                ingredient: [{ item: recipe.put, count: 1 }],
                result: [{ item: recipe.get, count: 1 }],
                experience: 0.3,
                energy: 2000,
            });
        }
    });
});
