ServerEvents.recipes((event) => {
    //#region Rod
    const RodPattern = [
        //Create
        { get: "createaddition:brass_rod", put: "forge:ingots/brass", rsflux: 6000 },

        //Immersive
        { get: "immersiveengineering:stick_iron", put: "forge:ingots/iron", rsflux: 4000 },
        { get: "immersiveengineering:stick_steel", put: "forge:ingots/steel", rsflux: 6000 },
        { get: "immersiveengineering:stick_aluminum", put: "forge:ingots/aluminum", rsflux: 4000 },
    ];
    RodPattern.forEach((recipe) => {
        //Remove
        event.remove({ output: recipe.get });

        //Crafting
        event.shaped(Item.of(recipe.get, 2), ["  R", " R ", "R  "], { R: `#${recipe.put}` });

        //Create
        event.custom({
            type: "createaddition:rolling",
            input: { tag: recipe.put },
            result: { item: recipe.get, count: 2 },
        });

        //Immersive
        event.custom({
            type: "immersiveengineering:metal_press",
            mold: "immersiveengineering:mold_rod",
            input: { tag: recipe.put },
            result: { base_ingredient: { item: recipe.get }, count: 2 },
            energy: recipe.rsflux,
        });

        //Thermal
        event.custom({
            type: "thermal:press",
            energy: recipe.rsflux,
            ingredients: [{ tag: recipe.put, count: 1 }, { item: "anoxia:press_rod_die" }],
            result: [{ count: 2, item: recipe.get }],
        });
    });
    //#endregion
});
