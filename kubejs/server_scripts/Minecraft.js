ServerEvents.recipes((event) => {
    //Cobblestone
    event.remove({ input: "#forge:pebble/stone", output: "minecraft:cobblestone" });
    event.shaped("minecraft:cobblestone", ["PP", "PP"], { P: "#forge:pebble/stone" });

    //Furnace
    event.remove({ output: "minecraft:furnace" });
    event.shaped("minecraft:furnace", ["CCC", "C C", "CCC"], { C: "anoxia:compressed_cobblestone" });

    //Blast Furnace
    event.remove({ output: "minecraft:blast_furnace" });
    event.shaped("minecraft:blast_furnace", ["PPP", "PFP", "CCC"], { P: "#forge:plates/iron", F: "#anoxia:stone/furnaces", C: "minecraft:smooth_stone" });

    //Smoker
    event.remove({ output: "minecraft:smoker" });
    event.shaped("minecraft:smoker", ["CLC", "LFL", "CLC"], { C: "anoxia:compressed_cobblestone", L: "#minecraft:logs", F: "#anoxia:stone/furnaces" });

    //Smithing Template
    event.shaped("minecraft:coast_armor_trim_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:cobblestone", S: "minecraft:light_blue_concrete" });
    event.shaped("minecraft:dune_armor_trim_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:sandstone", S: "minecraft:netherite_scrap" });
    event.shaped("minecraft:eye_armor_trim_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:end_stone", S: "minecraft:netherite_scrap" });
    event.shaped("minecraft:host_armor_trim_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:terracotta", S: "minecraft:ender_pearl" });
    event.shaped("minecraft:netherite_upgrade_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:netherrack", S: "minecraft:netherite_scrap" });
    event.shaped("minecraft:raiser_armor_trim_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:terracotta", S: "minecraft:amethyst_shard" });
    event.shaped("minecraft:rib_armor_trim_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:netherrack", S: "minecraft:bone_block" });
    event.shaped("minecraft:sentry_armor_trim_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:cobblestone", S: "minecraft:netherite_scrap" });
    event.shaped("minecraft:shaper_armor_trim_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:terracotta", S: "minecraft:clay" });
    event.shaped("minecraft:silence_armor_trim_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:cobbled_deepslate", S: "minecraft:netherite_scrap" });
    event.shaped("minecraft:snout_armor_trim_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:blackstone", S: "minecraft:netherite_scrap" });
    event.shaped("minecraft:spire_armor_trim_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:purpur_block", S: "minecraft:netherite_scrap" });
    event.shaped("minecraft:tide_armor_trim_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:prismarine", S: "minecraft:netherite_scrap" });
    event.shaped("minecraft:vex_armor_trim_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:cobblestone", S: "minecraft:amethyst_shard" });
    event.shaped("minecraft:ward_armor_trim_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:cobbled_deepslate", S: "minecraft:fire_charge" });
    event.shaped("minecraft:wayfinder_armor_trim_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:terracotta", S: "minecraft:netherite_scrap" });
    event.shaped("minecraft:wild_armor_trim_smithing_template", ["DSD", "DCD", "DDD"], { D: "#forge:gems/diamond", C: "minecraft:mossy_cobblestone", S: "minecraft:netherite_scrap" });

    //StoneCutter
    event.remove({ output: "minecraft:stonecutter" });
    event.shaped("minecraft:stonecutter", [" B ", "LSL", "SSS"], { B: "#forge:sawblades", L: "#minecraft:logs", S: "#forge:stone" });

    //Chest
    event.remove({ input: "#minecraft:logs", output: "minecraft:chest" });
    event.shaped("minecraft:chest", ["LLL", "L L", "LLL"], { L: "#minecraft:logs" });

    //Stick
    event.remove({ input: "#minecraft:logs", output: "minecraft:stick" });
    event.shaped(Item.of("minecraft:stick", 4), ["L", "L"], { L: "#minecraft:logs" });

    //Golden Apple Upgrade
    event.shaped("minecraft:enchanted_golden_apple", ["BIB", "BAB", "BBB"], { A: "minecraft:golden_apple", I: "#forge:ingots/gold", B: "#forge:storage_blocks/gold" });

    //Piston
    event.remove({ output: "minecraft:piston" });
    event.shaped("minecraft:piston", ["PPP", "CIC", "CAC"], { P: "#minecraft:planks", C: "#forge:cobblestone", I: "#forge:ingots/iron", A: "#forge:ingots/red_alloy" });
    event.shaped("minecraft:piston", ["PPP", "CIC", "CAC"], { P: "#minecraft:planks", C: "#forge:cobblestone", I: "#forge:ingots/iron", A: "#forge:ingots/electrotine_alloy" });

    //Sticky Piston
    event.remove({ output: "minecraft:sticky_piston" });
    event.shaped("minecraft:sticky_piston", ["S", "P"], { S: "#forge:slimeballs", P: "minecraft:piston" });
    event.shapeless("minecraft:piston", ["minecraft:sticky_piston", "supplementaries:soap"]);

    //Flint And Steel
    event.remove({ output: "minecraft:flint_and_steel" });
    event.shaped("minecraft:flint_and_steel", ["S ", " F"], { S: "#forge:ingots/steel", F: "minecraft:flint" });

    //Hopper
    event.remove({ output: "minecraft:hopper" });
    event.shaped("minecraft:hopper", ["S S", "SCS", " S "], { S: "#forge:plates/iron", C: "#forge:chests/wooden" });
    event.shapeless("minecraft:hopper", ["uppers:upper"]);

    //Upper
    event.remove({ output: "uppers:upper" });
    event.shaped("uppers:upper", [" S ", "SCS", "S S"], { S: "#forge:plates/iron", C: "#forge:chests/wooden" });
    event.shapeless("uppers:upper", ["minecraft:hopper"]);

    //Emergency Food
    event.smelting(Item.of("minecraft:cooked_beef", 8), "paimon:paimonmedal").id("genshin:emergency_food");

    //Bone Meal From Wither
    event.shapeless(Item.of("minecraft:bone_meal", 9), ["minecraft:bone_meal"]);
});
