ServerEvents.recipes((event) => {
    //Cobblestone
    event.remove({ input: "#forge:pebble/stone", output: "minecraft:cobblestone" });
    event.shaped("minecraft:cobblestone", ["AA", "AA"], { A: "#forge:pebble/stone" });

    //Furnace
    event.remove({ output: "minecraft:furnace" });
    event.shaped("minecraft:furnace", ["AAA", "A A", "AAA"], { A: "anoxia:compressed_cobblestone" });

    //Blast Furnace
    event.remove({ output: "minecraft:blast_furnace" });
    event.shaped("minecraft:blast_furnace", ["AAA", "ABA", "CCC"], { A: "#forge:plates/iron", B: "#anoxia:stone/furnaces", C: "minecraft:smooth_stone" });

    //Smoker
    event.remove({ output: "minecraft:smoker" });
    event.shaped("minecraft:smoker", ["ABA", "BCB", "ABA"], { A: "anoxia:compressed_cobblestone", B: "#minecraft:logs", C: "#anoxia:stone/furnaces" });

    //Smithing Template
    event.shaped("minecraft:coast_armor_trim_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:cobblestone", C: "minecraft:light_blue_concrete" });
    event.shaped("minecraft:dune_armor_trim_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:sandstone", C: "minecraft:netherite_scrap" });
    event.shaped("minecraft:eye_armor_trim_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:end_stone", C: "minecraft:netherite_scrap" });
    event.shaped("minecraft:host_armor_trim_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:terracotta", C: "minecraft:ender_pearl" });
    event.shaped("minecraft:netherite_upgrade_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:netherrack", C: "minecraft:netherite_scrap" });
    event.shaped("minecraft:raiser_armor_trim_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:terracotta", C: "minecraft:amethyst_shard" });
    event.shaped("minecraft:rib_armor_trim_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:netherrack", C: "minecraft:bone_block" });
    event.shaped("minecraft:sentry_armor_trim_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:cobblestone", C: "minecraft:netherite_scrap" });
    event.shaped("minecraft:shaper_armor_trim_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:terracotta", C: "minecraft:clay" });
    event.shaped("minecraft:silence_armor_trim_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:cobbled_deepslate", C: "minecraft:netherite_scrap" });
    event.shaped("minecraft:snout_armor_trim_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:blackstone", C: "minecraft:netherite_scrap" });
    event.shaped("minecraft:spire_armor_trim_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:purpur_block", C: "minecraft:netherite_scrap" });
    event.shaped("minecraft:tide_armor_trim_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:prismarine", C: "minecraft:netherite_scrap" });
    event.shaped("minecraft:vex_armor_trim_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:cobblestone", C: "minecraft:amethyst_shard" });
    event.shaped("minecraft:ward_armor_trim_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:cobbled_deepslate", C: "minecraft:fire_charge" });
    event.shaped("minecraft:wayfinder_armor_trim_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:terracotta", C: "minecraft:netherite_scrap" });
    event.shaped("minecraft:wild_armor_trim_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:gems/diamond", B: "minecraft:mossy_cobblestone", C: "minecraft:netherite_scrap" });

    //StoneCutter
    event.remove({ output: "minecraft:stonecutter" });
    event.shaped("minecraft:stonecutter", [" A ", "BCB", "CCC"], { A: "#forge:sawblades", B: "#minecraft:logs", C: "#forge:stone" });

    //Chest
    event.remove({ input: "#minecraft:logs", output: "minecraft:chest" });
    event.shaped("minecraft:chest", ["AAA", "A A", "AAA"], { A: "#minecraft:logs" });

    //Stick
    event.remove({ input: "#minecraft:logs", output: "minecraft:stick" });
    event.shaped(Item.of("minecraft:stick", 4), ["A", "A"], { A: "#minecraft:logs" });

    //Golden Apple Upgrade
    event.shaped("minecraft:enchanted_golden_apple", ["CBC", "CAC", "CCC"], { A: "minecraft:golden_apple", B: "#forge:ingots/gold", C: "#forge:storage_blocks/gold" });

    //Piston
    event.remove({ output: "minecraft:piston" });
    event.shaped("minecraft:piston", ["AAA", "BCB", "BDB"], { A: "#minecraft:planks", B: "#forge:cobblestone", C: "#forge:ingots/iron", D: "#forge:ingots/red_alloy" });
    event.shaped("minecraft:piston", ["AAA", "BCB", "BDB"], { A: "#minecraft:planks", B: "#forge:cobblestone", C: "#forge:ingots/iron", D: "#forge:ingots/electrotine_alloy" });

    //Sticky Piston
    event.remove({ output: "minecraft:sticky_piston" });
    event.shaped("minecraft:sticky_piston", ["A", "B"], { A: "#forge:slimeballs", B: "minecraft:piston" });
    event.shapeless("minecraft:piston", ["minecraft:sticky_piston", "supplementaries:soap"]);

    //Flint And Steel
    event.remove({ output: "minecraft:flint_and_steel" });
    event.shaped("minecraft:flint_and_steel", ["A ", " B"], { A: "#forge:ingots/steel", B: "minecraft:flint" });

    //Hopper
    event.remove({ output: "minecraft:hopper" });
    event.shaped("minecraft:hopper", ["A A", "ABA", " A "], { A: "#forge:plates/iron", B: "#forge:chests/wooden" });
    event.shapeless("minecraft:hopper", ["uppers:upper"]);

    //Upper
    event.remove({ output: "uppers:upper" });
    event.shaped("uppers:upper", [" A ", "ABA", "A A"], { A: "#forge:plates/iron", B: "#forge:chests/wooden" });
    event.shapeless("uppers:upper", ["minecraft:hopper"]);

    //Emergency Food
    event.smelting(Item.of("minecraft:cooked_beef", 8), "paimon:paimonmedal").id("genshin:emergency_food");

    //Bone Meal From Wither
    event.shapeless(Item.of("minecraft:bone_meal", 9), ["minecraft:bone_meal"]);
});
