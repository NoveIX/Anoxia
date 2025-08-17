ServerEvents.recipes((event) => {
    //Unification
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                type: "forge:nbt",
                item: "productivebees:configurable_honeycomb",
                nbt: { EntityTag: { type: "productivebees:plastic" } },
            },
        ],
        results: [{ item: "pneumaticcraft:plastic" }, { fluid: "productivebees:honey", amount: 50 }],
        heatRequirement: "heated",
    });
});
