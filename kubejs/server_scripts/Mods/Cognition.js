ServerEvents.recipes((event) => {
    //Cognitive Alloy
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
    const Metamorpher = [
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
    Metamorpher.forEach((machine) => {
        event.custom({
            type: "experienceobelisk:molecular_metamorphosis",
            ingredient1: machine.put1,
            count1: machine.n1,
            ingredient2: machine.put2,
            count2: machine.n2,
            ingredient3: machine.put3,
            count3: machine.n3,
            result: machine.get,
            cost: 32,
            processTime: 40,
        });
    })
    //#endregion
});
