ServerEvents.recipes((event) => {
    //Restore Silicon => AE2
    event.remove({ id: "productivebees:centrifuge/materials/honeycomb_silicon" });
    event.custom({
        type: "productivebees:centrifuge",
        ingredient: {
            type: "forge:nbt",
            count: 1,
            item: "productivebees:configurable_honeycomb",
            nbt: '{EntityTag:{type:"productivebees:silicon"}}',
        },
        outputs: [{ item: { tag: "forge:wax" } }, { chance: 50, item: { tag: "anoxia:silicons" } }],
    });
});
