ServerEvents.recipes((event) => {
    event.remove({ type: "mysticalagriculture:soul_extraction" });

    //// # =================================================================================================== #

    const RmRecipeID = [
        //Unification
        "tacz_c:thin_brass_sheet_cutting",
        "tacz_c:thin_copper_sheet_cutting",
    ];
    RmRecipeID.forEach((id) => {
        event.remove({ id: id });
    });

    //Altar
    event.remove({ output: "mysticalagriculture:infusion_altar" });
    event.shaped("mysticalagriculture:infusion_altar", ["ABA", " C ", "DDD"], { A: "#forge:ingots/gold", B: "minecraft:red_carpet", C: "rootsclassic:altar", D: "minecraft:stone" });

    //Pedastal
    event.remove({ output: "mysticalagriculture:infusion_pedestal" });
    event.shaped("mysticalagriculture:infusion_pedestal", ["ABA", " C ", " D "], { A: "#forge:ingots/gold", B: "minecraft:red_carpet", C: "rootsclassic:attuned_standing_stone", D: "minecraft:stone" });

    //Awaken altar
    event.remove({ output: "mysticalagriculture:awakening_altar" });
    event.shaped("mysticalagriculture:awakening_altar", ["ABA", " C ", "DDD"], { A: "#forge:ingots/gold", B: "minecraft:orange_carpet", C: "mysticalagriculture:infusion_altar", D: "mysticalagriculture:soulstone" });

    //Awaken Pedastal
    event.remove({ output: "mysticalagriculture:awakening_pedestal" });
    event.shaped("mysticalagriculture:awakening_pedestal", ["ABA", " C ", " D "], { A: "#forge:ingots/gold", B: "minecraft:orange_carpet", C: "mysticalagriculture:infusion_pedestal", D: "mysticalagriculture:soulstone" });

    //Awaken Vessel
    event.remove({ output: "mysticalagriculture:essence_vessel" });
    event.shaped("mysticalagriculture:essence_vessel", ["ABA", " C ", " D "], { A: "#forge:ingots/gold", B: "supplementaries:jar", C: "mysticalagriculture:infusion_pedestal", D: "mysticalagriculture:soulstone" });
});
