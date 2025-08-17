ServerEvents.recipes((event) => {
    //Amongus
    event.shaped("anoxia:amongus", ["BBB", "BAB", "BBB"], { A: "minecraft:rotten_flesh", B: "minecraft:red_wool" });

    //Tiny Charcoal
    event.shapeless(Item.of("anoxia:tiny_charcoal", 8), "minecraft:charcoal");
    event.shapeless("minecraft:charcoal", Item.of("anoxia:tiny_charcoal", 8)); //Reverse

    //Tiny Coal
    event.shapeless(Item.of("anoxia:tiny_coal", 8), "minecraft:coal");
    event.shapeless("minecraft:coal", Item.of("anoxia:tiny_coal", 8)); //Reverse

    //Raw Osmium
    event.shaped("mekanism:raw_osmium", ["AA", "AA"], { A: "anoxia:osmium_pieces" });

    //// # =================================================================================================== #

    //Compressed
    const CompressPattern = [
        { get: "anoxia:compressed_cobblestone", put: "minecraft:cobblestone" },
        { get: "anoxia:double_compressed_cobblestone", put: "anoxia:compressed_cobblestone" },
        { get: "anoxia:triple_compressed_cobblestone", put: "anoxia:double_compressed_cobblestone" },
        { get: "anoxia:quadruple_compressed_cobblestone", put: "anoxia:triple_compressed_cobblestone" },
        { get: "anoxia:quintuple_compressed_cobblestone", put: "anoxia:quadruple_compressed_cobblestone" },
        { get: "anoxia:sextuple_compressed_cobblestone", put: "anoxia:quintuple_compressed_cobblestone" },
        { get: "anoxia:septuple_compressed_cobblestone", put: "anoxia:sextuple_compressed_cobblestone" },
        { get: "anoxia:octuple_compressed_cobblestone", put: "anoxia:septuple_compressed_cobblestone" },
        { get: "anoxia:compressed_deepslate", put: "minecraft:deepslate" },
        { get: "anoxia:compressed_cobbled_deepslate", put: "minecraft:cobbled_deepslate" },
        { get: "anoxia:compressed_blackstone", put: "minecraft:blackstone" },
        { get: "anoxia:compressed_andesite", put: "minecraft:andesite" },
    ];
    CompressPattern.forEach((recipe) => {
        event.remove({ output: recipe.get });
        event.shaped(recipe.get, ["AAA", "AAA", "AAA"], { A: recipe.put });
        event.shapeless(Item.of(recipe.put, 9), [recipe.get]);
    });

    //Create Mesh from ExNihilo
    event.shaped("anoxia:create_string_mesh", ["A", "B"], { A: "supplementaries:timber_frame", B: "exnihilosequentia:string_mesh" });
    event.shaped("anoxia:create_flint_mesh", ["A", "B"], { A: "supplementaries:timber_frame", B: "exnihilosequentia:flint_mesh" });
    event.shaped("anoxia:create_iron_mesh", ["A", "B"], { A: "supplementaries:timber_frame", B: "exnihilosequentia:iron_mesh" });
    event.shaped("anoxia:create_diamond_mesh", ["A", "B"], { A: "supplementaries:timber_frame", B: "exnihilosequentia:diamond_mesh" });
    event.shaped("anoxia:create_emerald_mesh", ["A", "B"], { A: "supplementaries:timber_frame", B: "exnihilosequentia:emerald_mesh" });
    event.shaped("anoxia:create_netherite_mesh", ["A", "B"], { A: "supplementaries:timber_frame", B: "exnihilosequentia:netherite_mesh" });

    //Upgrade Mesh
    event.shaped("anoxia:create_flint_mesh", ["A A", "ABA", "A A"], { A: "minecraft:flint", B: "anoxia:create_string_mesh" });
    event.shaped("anoxia:create_iron_mesh", ["A A", "ABA", "A A"], { A: "#forge:ingots/iron", B: "anoxia:create_flint_mesh" });
    event.shaped("anoxia:create_diamond_mesh", ["A A", "ABA", "A A"], { A: "#forge:gems/diamond", B: "anoxia:create_iron_mesh" });
    event.shaped("anoxia:create_emerald_mesh", ["A A", "ABA", "A A"], { A: "#forge:gems/emerald", B: "anoxia:create_diamond_mesh" });

    //Aethersteel Mesh
    event.smithing("anoxia:create_netherite_mesh", "minecraft:netherite_upgrade_smithing_template", "anoxia:create_emerald_mesh", "#forge:ingots/netherite");
    event.smithing("anoxia:create_aethersteel_mesh", "aethersteel:aethersteel_upgrade_smithing_template", "anoxia:create_netherite_mesh", "#forge:ingots/aethersteel");
});
