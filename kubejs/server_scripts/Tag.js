// priority:999
ServerEvents.tags("item", (event) => {
    //#region Tags
    const TagAddPattern = [
        //#region Anoxia
        //Coil
        { tag: "anoxia:coil/copper", item: "createaddition:copper_spool" },
        { tag: "anoxia:coil/copper", item: "immersiveengineering:wirecoil_copper" },
        { tag: "anoxia:coil/electrum", item: "createaddition:electrum_spool" },
        { tag: "anoxia:coil/electrum", item: "immersiveengineering:wirecoil_electrum" },

        //Fertilizer
        { tag: "anoxia:fertilizers", item: "minecraft:bone_meal" },
        { tag: "anoxia:fertilizers", item: "minecraft:rotten_flesh" },
        { tag: "anoxia:fertilizers", item: "farmersdelight:tree_bark" },
        { tag: "anoxia:fertilizers", item: "farmersdelight:straw" },

        //Furnace
        { tag: "anoxia:stone/furnaces", item: "minecraft:furnace" },
        { tag: "anoxia:stone/furnaces", item: "quark:deepslate_furnace" },
        { tag: "anoxia:blackstone/furnaces", item: "nethersdelight:blackstone_furnace" },
        { tag: "anoxia:blackstone/furnaces", item: "quark:blackstone_furnace" },
        { tag: "anoxia:furnaces", item: "#anoxia:stone/furnaces" },
        { tag: "anoxia:furnaces", item: "#anoxia:blackstone/furnaces" },
        { tag: "anoxia:blastfurnaces", item: "minecraft:blast_furnace" },
        { tag: "anoxia:blastfurnaces", item: "nethersdelight:blackstone_blast_furnace" },
        { tag: "anoxia:smokers", item: "minecraft:smoker" },
        { tag: "anoxia:smokers", item: "nethersdelight:nether_brick_smoker" },

        //Stone
        { tag: "anoxia:stone/polished_andesite", item: "minecraft:polished_andesite" },

        //Fermenter
        { tag: "anoxia:fermenter", item: "minecraft:rotten_flesh" },
        { tag: "anoxia:fermenter", item: "minecraft:fermented_spider_eye" },
        { tag: "anoxia:fermenter", item: "minecraft:sugar" },
        { tag: "anoxia:fermenter", item: "minecraft:brown_mushroom" },
        { tag: "anoxia:fermenter", item: "minecraft:red_mushroom" },
        { tag: "anoxia:fermenter", item: "minecraft:nether_wart" },
        //#endregion

        //// # =================================================================================================== #

        ////Forge
        { tag: "forge:plastic", item: "pneumaticcraft:plastic" },
        { tag: "forge:dust", item: "exnihilosequentia:dust" },
        { tag: "forge:flour", item: "enderio:flour" },
        { tag: "forge:flour/wheat", item: "enderio:flour" },
        { tag: "forge:flour", item: "pneumaticcraft:wheat_flour" },
        { tag: "forge:flour/wheat", item: "pneumaticcraft:wheat_flour" },
        //{ tag: "forge:dusts/flour", item: "create:wheat_flour" },
        //{ tag: "forge:ores/uranium", item: "#forge:ores/uraninite" },
        //{ tag: "forge:raw_materials/uranium", item: "powah:uraninite_raw" },
        { tag: "forge:pebble/stone", item: "exnihilosequentia:stone_pebble" },
        { tag: "forge:pebble/stone", item: "botania:pebble" },
        { tag: "forge:pebble/stone", item: "twigs:pebble" },

        //ingots
        { tag: "forge:ingots/flux", item: "redstone_arsenal:flux_ingot" },
        { tag: "forge:ingots/neutron", item: "avaritia:neutron_ingot" },
        { tag: "forge:ingots/aethersteel", item: "aethersteel:aethersteel_ingot" },
        { tag: "forge:ingots/cognitive_alloy", item: "experienceobelisk:cognitive_alloy" },
        { tag: "forge:ingots/andesite_alloy", item: "create:andesite_alloy" },
        { tag: "forge:ingots/obsidian", item: "anoxia:obsidian_ingot" },

        //Botania
        { tag: "botania:petals/flower", item: "botania:white_petal" },
        { tag: "botania:petals/flower", item: "botania:light_gray_petal" },
        { tag: "botania:petals/flower", item: "botania:gray_petal" },
        { tag: "botania:petals/flower", item: "botania:black_petal" },
        { tag: "botania:petals/flower", item: "botania:brown_petal" },
        { tag: "botania:petals/flower", item: "botania:red_petal" },
        { tag: "botania:petals/flower", item: "botania:orange_petal" },
        { tag: "botania:petals/flower", item: "botania:yellow_petal" },
        { tag: "botania:petals/flower", item: "botania:lime_petal" },
        { tag: "botania:petals/flower", item: "botania:green_petal" },
        { tag: "botania:petals/flower", item: "botania:cyan_petal" },
        { tag: "botania:petals/flower", item: "botania:light_blue_petal" },
        { tag: "botania:petals/flower", item: "botania:blue_petal" },
        { tag: "botania:petals/flower", item: "botania:purple_petal" },
        { tag: "botania:petals/flower", item: "botania:magenta_petal" },
        { tag: "botania:petals/flower", item: "botania:pink_petal" },

        //Aethersteel integration ore
        { tag: "forge:ingots", item: "aethersteel:aethersteel_ingot" },
        { tag: "forge:ingots/aethersteel", item: "aethersteel:aethersteel_ingot" },
        { tag: "theurgy:ores/mercury/high", item: "aethersteel:aether_debris" },

        //Create deco Unification
        { tag: "createdeco:internal/plates/iron_plates", item: "#forge:plates/iron" },
        { tag: "createdeco:internal/plates/copper_plates", item: "#forge:plates/copper" },
        { tag: "createdeco:internal/plates/zinc_plates", item: "#forge:plates/zinc" },
    ];
    TagAddPattern.forEach((recipe) => {
        event.add(recipe.tag, recipe.item);
    });
    //#endregion

    //// # =================================================================================================== #

    //remove Tag
    const TagRmPattern = [{ tag: "forge:sawdust", item: "chemlib:cellulose_dust" }];
    TagRmPattern.forEach((recipe) => {
        event.remove(recipe.tag, recipe.item);
    });

    //Game Remove
    global.items.GAME_FullRm.forEach((id) => {
        event.removeAllTagsFrom(id);
    });
});

//// # =================================================================================================== #

ServerEvents.tags("fluid", (event) => {
    const TagPattern = [
        { tag: "anoxia:water", fluid: "minecraft:water" },
        { tag: "anoxia:refined_canola", fluid: "actuallyadditions:refined_canola_oil" },
        { tag: "anoxia:nutrient_distillation", fluid: "enderio:nutrient_distillation" },

        //#region Anoxia
    ];
    TagPattern.forEach((recipe) => {
        event.add(recipe.tag, recipe.fluid);
    });

    //Remove Single Tag
    const RmTag = ["forge:fuel"];
    RmTag.forEach((tag) => {
        event.removeAll(tag);
    });

    //Add Tag
    event.add("forge:fuel", "ad_astra:fuel");

    //Game Remove
    global.fluid.GAME_FullRm.forEach((id) => {
        event.removeAllTagsFrom(id);
    });
});

//// # =================================================================================================== #

ServerEvents.tags("item", (event) => {
    const TagsJAOPCAattern = [
        //JAOPCA Integration
        { tag: "forge:ores", item: "aethersteel:aether_debris" },
        { tag: "forge:ores/aethersteel_scrap", item: "aethersteel:aether_debris" },
        { tag: "forge:ore_rates/singular", item: "aethersteel:aether_debris" },
        { tag: "forge:ingots/aethersteel_scrap", item: "aethersteel:aethersteel_scrap" },
    ];
    TagsJAOPCAattern.forEach((recipe) => {
        event.add(recipe.tag, recipe.item);
    });
});

ServerEvents.tags("block", (event) => {
    const TagsJAOPCAattern = [
        //JAOPCA Integration
        { tag: "forge:ores", item: "aethersteel:aether_debris" },
        { tag: "forge:ores/aethersteel_scrap", item: "aethersteel:aether_debris" },
        { tag: "forge:ore_rates/singular", item: "aethersteel:aether_debris" },
    ];
    TagsJAOPCAattern.forEach((recipe) => {
        event.add(recipe.tag, recipe.item);
    });
});
