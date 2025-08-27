ServerEvents.recipes((event) => {
    event.remove({ type: "mysticalagriculture:soul_extraction" });

    //// # =================================================================================================== #

    const RmRecipeID = [
        "mysticalagriculture:seed/infusion/coral",
        "mysticalagriculture:seed/infusion/glowstone",
        "mysticalagriculture:seed/infusion/blitz",
        "mysticalagriculture:seed/infusion/rabbit",
        "mysticalagriculture:seed/infusion/ruby",
        "mysticalagriculture:seed/infusion/sapphire",
        "mysticalagriculture:seed/infusion/saltpeter",
        "mysticalagriculture:seed/infusion/chicken",
        "mysticalagriculture:seed/infusion/fiery_ingot",
        "mysticalagriculture:seed/infusion/fluorite",
        "mysticalagriculture:seed/infusion/peridot",
        "mysticalagriculture:seed/infusion/squid",
        "mysticalagriculture:seed/infusion/osmium",
        "mysticalagriculture:seed/infusion/water",
        "mysticalagriculture:seed/infusion/cow",
        "mysticalagriculture:seed/infusion/ice",
        "mysticalagriculture:seed/infusion/deepslate",
        "mysticalagriculture:seed/infusion/pig",
        "mysticalagriculture:seed/infusion/steeleaf",
        "mysticalagriculture:seed/infusion/tin",
        "mysticalagriculture:seed/infusion/redstone",
        "mysticalagriculture:seed/infusion/iron",
        "mysticalagriculture:seed/infusion/spider",
        "mysticalagriculture:seed/infusion/wood",
        "mysticalagriculture:seed/infusion/prismarine",
        "mysticalagriculture:seed/infusion/coal",
        "mysticalagriculture:seed/infusion/aluminum",
        "mysticalagriculture:seed/infusion/nether_quartz",
        "mysticalagriculture:seed/infusion/soulium",
        "mysticalagriculture:seed/infusion/sheep",
        "mysticalagriculture:seed/infusion/wither_skeleton",
        "mysticalagriculture:seed/infusion/stone",
        "mysticalagriculture:seed/infusion/silver",
        "mysticalagriculture:seed/infusion/honey",
        "mysticalagriculture:seed/infusion/lapis_lazuli",
        "mysticalagriculture:seed/infusion/gaia_spirit",
        "mysticalagriculture:seed/infusion/copper",
        "mysticalagriculture:seed/infusion/uranium",
        "mysticalagriculture:seed/infusion/end",
        "mysticalagriculture:seed/infusion/dirt",
        "mysticalagriculture:seed/infusion/earth",
        "mysticalagriculture:seed/infusion/gold",
        "mysticalagriculture:seed/infusion/certus_quartz",
        "mysticalagriculture:seed/infusion/fish",
        "mysticalagriculture:seed/infusion/skeleton",
        "mysticalagriculture:seed/infusion/platinum",
        "mysticalagriculture:seed/infusion/obsidian",
        "mysticalagriculture:seed/infusion/nickel",
        "mysticalagriculture:seed/infusion/sky_stone",
        "mysticalagriculture:seed/infusion/lead",
        "mysticalagriculture:seed/infusion/apatite",
        "mysticalagriculture:seed/infusion/blaze",
        "mysticalagriculture:seed/infusion/ghast",
        "mysticalagriculture:seed/infusion/diamond",
        "mysticalagriculture:seed/infusion/enderman",
        "mysticalagriculture:seed/infusion/zombie",
        "mysticalagriculture:seed/infusion/nether_star",
        "mysticalagriculture:seed/infusion/blizz",
        "mysticalagriculture:seed/infusion/slime",
        "mysticalagriculture:seed/infusion/emerald",
        "mysticalagriculture:seed/infusion/knightmetal",
        "mysticalagriculture:seed/infusion/fire",
        "mysticalagriculture:seed/infusion/amethyst",
        "mysticalagriculture:seed/infusion/zinc",
        "mysticalagriculture:seed/infusion/nature",
        "mysticalagriculture:seed/infusion/creeper",
        "mysticalagriculture:seed/infusion/turtle",
        "mysticalagriculture:seed/infusion/air",
        "mysticalagriculture:seed/infusion/dragon_egg",
        "mysticalagriculture:seed/infusion/nether",
        "mysticalagriculture:seed/infusion/sulfur",
        "mysticalagriculture:seed/infusion/netherite",
        "mysticalagriculture:seed/infusion/basalz",
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
