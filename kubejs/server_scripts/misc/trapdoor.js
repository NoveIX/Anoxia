ServerEvents.recipes((event) => {
    const TrapdoorPattern = [
        { get: "minecraft:iron_trapdoor", put: "#forge:ingots/iron" },
        { get: "ad_astra:steel_trapdoor", put: "#forge:ingots/steel" },
        { get: "aethersteel:aethersteel_trapdoor", put: "#forge:ingots/aethersteel" },
        { get: "createdeco:andesite_trapdoor", put: "#forge:ingots/andesite_alloy" },
        { get: "createdeco:brass_trapdoor", put: "#forge:ingots/brass" },
        { get: "createdeco:copper_trapdoor", put: "#forge:ingots/copper" },
        { get: "createdeco:industrial_iron_trapdoor", put: "#createdeco:internal/ingots/industrial_iron_ingots" },
        { get: "createdeco:zinc_trapdoor", put: "#forge:ingots/zinc" },
        { get: "enderio:dark_steel_trapdoor", put: "#forge:ingots/dark_steel" },
        { get: "supplementaries:gold_trapdoor", put: "#forge:ingots/gold" },
    ];
    TrapdoorPattern.forEach((recipe) => {
        event.remove({ output: recipe.get });
        event.shaped(Item.of(recipe.get, 2), ["AAA", "AAA"], { A: recipe.put });
    });
});
