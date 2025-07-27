ServerEvents.recipes((event) => {
    //Blade
    event.remove({ output: "advgenerators:turbine_blade" });
    event.shaped(Item.of("advgenerators:turbine_blade", 4), ["11", "11", " 1"], {
        1: "#forge:plates/iron",
    });
});
