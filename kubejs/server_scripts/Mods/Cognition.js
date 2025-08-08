ServerEvents.recipes((event) => {
    event.remove({ id: "experienceobelisk:cognitive_alloy" });
    event.shapeless("experienceobelisk:cognitive_alloy", [
        "#forge:ingots/copper",
        "#forge:ingots/copper",
        "#forge:ingots/copper",
        "#forge:ingots/copper",
        "experienceobelisk:cognitive_amalgam",
        "experienceobelisk:cognitive_amalgam",
        "experienceobelisk:cognitive_amalgam",
        "experienceobelisk:cognitive_amalgam",
    ]);

    //// # =================================================================================================== #

    //#region Metamorpher
    event.remove({ id: "experienceobelisk:metamorpher/cognitive_alloy_metamorphosis" });
    const MetamorpherPattern = [
        {
            get: { item: "experienceobelisk:cognitive_alloy", count: 1 },
            put1: { item: "experienceobelisk:cognitive_flux" },
            n1: 2,
            put2: { tag: "forge:ingots/copper" },
            n2: 2,
            put3: [],
            n3: 0,
        },
    ];
    function MetamorpherRecipes({ get, put1, n1, put2, n2, put3, n3 }) {
        event.custom({
            type: "experienceobelisk:molecular_metamorphosis",
            ingredient1: put1,
            count1: n1,
            ingredient2: put2,
            count2: n2,
            ingredient3: put3,
            count3: n3,
            result: get,
            cost: 32,
            processTime: 40,
        });
    }
    MetamorpherPattern.forEach(MetamorpherRecipes);
    //#endregion
});
