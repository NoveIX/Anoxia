ServerEvents.recipes((event) => {
    //Blade
    event.remove({ output: "advgenerators:turbine_blade" });
    event.shaped(Item.of("advgenerators:turbine_blade", 4), ["AA", "AA", " A"], { A: "#forge:plates/iron" });
});
