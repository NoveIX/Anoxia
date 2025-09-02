ServerEvents.recipes((event) => {
    //#region Wire
    const WirePattern = [
        //Create
        { get: "createaddition:iron_wire", put: "forge:plates/iron", rsflux: 4000 },
        { get: "createaddition:gold_wire", put: "forge:plates/gold", rsflux: 4000 },

        //Immersive
        { get: "immersiveengineering:wire_copper", put: "forge:plates/copper", rsflux: 4000 },
        { get: "immersiveengineering:wire_electrum", put: "forge:plates/electrum", rsflux: 6000 },
        { get: "immersiveengineering:wire_aluminum", put: "forge:plates/aluminum", rsflux: 4000 },
        { get: "immersiveengineering:wire_steel", put: "forge:plates/steel", rsflux: 6000 },
        { get: "immersiveengineering:wire_lead", put: "forge:plates/lead", rsflux: 4000 },
    ];
    WirePattern.forEach((recipe) => {
        //Remove
        event.remove({ output: recipe.get });

        //Crafting
        event.shapeless(recipe.get, [`#${recipe.put}`, "immersiveengineering:wirecutter"]);

        //Create
        event.custom({
            type: "createaddition:rolling",
            input: { tag: recipe.put },
            result: { item: recipe.get, count: 2 },
        });

        //Immersive
        event.custom({
            type: "immersiveengineering:metal_press",
            energy: recipe.rsflux,
            input: { tag: recipe.put },
            mold: "immersiveengineering:mold_wire",
            result: { base_ingredient: { item: recipe.get }, count: 2 },
        });
    });
    //#endregion
});
