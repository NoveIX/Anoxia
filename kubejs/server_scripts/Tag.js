// priority:999
ServerEvents.tags("item", (event) => {
    //#region Tags
    const TagsPattern = [
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

        { tag: "anoxia:stone/andesite", item: "minecraft:polished_andesite" },

        //Forge

        { tag: "forge:plastic", item: "pneumaticcraft:plastic" },
        { tag: "forge:flour/wheat", item: "enderio:flour" },
        { tag: "forge:flour", item: "enderio:flour" },
        { tag: "forge:flour/wheat", item: "pneumaticcraft:wheat_flour" },
        { tag: "forge:flour", item: "pneumaticcraft:wheat_flour" },
        { tag: "forge:dusts/flour", item: "create:wheat_flour" },
        { tag: "forge:ores/uranium", item: "#forge:ores/uraninite" },
        { tag: "forge:raw_materials/uranium", item: "powah:uraninite_raw" },
        { tag: "forge:pebble/stone", item: "botania:pebble" },
        { tag: "forge:pebble/stone", item: "exnihilosequentia:stone_pebble" },
        { tag: "forge:pebble/stone", item: "twigs:pebble" },
        { tag: "forge:dust", item: "exnihilosequentia:dust" },
        //ingots
        { tag: "forge:ingots/flux", item: "redstone_arsenal:flux_ingot" },
        { tag: "forge:ingots/neutron", item: "avaritia:neutron_ingot" },
        { tag: "forge:ingots/aethersteel", item: "aethersteel:aethersteel_ingot" },
        { tag: "forge:ingots/cognitive_alloy", item: "experienceobelisk:cognitive_alloy" },

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
        { tag: "forge:ingots/aethersteel_scrap", item: "aethersteel:aethersteel_scrap" },
        { tag: "theurgy:ores/mercury/high", item: "aethersteel:aether_debris" },
    ];
    TagsPattern.forEach((recipe) => {
        event.add(recipe.tag, recipe.item);
    });
    //#endregion

    //Remove
    //event.remove("forge:nuggets/ender_pearl", "forbidden_arcanus:ender_pearl_fragment");
    //event.remove("minecraft:coals", "immersiveengineering:coal_coke");
    //event.removeAllTagsFrom("thermal_extra:arcane_gold_dust");
    //event.removeAllTagsFrom("thermal_extra:zinc_dust");

    //Game full removed
    event.removeAllTagsFrom("ad_astra:iron_plate");
    event.removeAllTagsFrom("ad_astra:steel_plate");
    event.removeAllTagsFrom("ad_astra:iron_rod");
    event.removeAllTagsFrom("enderio:silicon");
    event.removeAllTagsFrom("oc2r:silicon");

    global.items.RmAllTags.forEach((id) => {
        event.removeAllTagsFrom(id);
    });

    ////Ingot
    //Chemlib
    //event.add("forge:ingots", "chemlib:lithium_ingot");
    //event.add("forge:ingots", "chemlib:beryllium_ingot");
    //event.add("forge:ingots", "chemlib:sodium_ingot");
    //event.add("forge:ingots", "chemlib:magnesium_ingot");
    //event.add("forge:ingots", "chemlib:aluminum_ingot");
    //event.add("forge:ingots", "chemlib:potassium_ingot");
    //event.add("forge:ingots", "chemlib:calcium_ingot");
    //event.add("forge:ingots", "chemlib:scandium_ingot");
    //event.add("forge:ingots", "chemlib:titanium_ingot");
    //event.add("forge:ingots", "chemlib:vanadium_ingot");
    //event.add("forge:ingots", "chemlib:chromium_ingot");
    //event.add("forge:ingots", "chemlib:manganese_ingot");
    //event.add("forge:ingots", "chemlib:cobalt_ingot");
    //event.add("forge:ingots", "chemlib:nickel_ingot");
    //event.add("forge:ingots", "chemlib:zinc_ingot");
    //event.add("forge:ingots", "chemlib:gallium_ingot");
    //event.add("forge:ingots", "chemlib:rubidium_ingot");
    //event.add("forge:ingots", "chemlib:strontium_ingot");
    //event.add("forge:ingots", "chemlib:yttrium_ingot");
    //event.add("forge:ingots", "chemlib:zirconium_ingot");
    //event.add("forge:ingots", "chemlib:niobium_ingot");
    //event.add("forge:ingots", "chemlib:molybdenum_ingot");
    //event.add("forge:ingots", "chemlib:ruthenium_ingot");
    //event.add("forge:ingots", "chemlib:rhodium_ingot");
    //event.add("forge:ingots", "chemlib:palladium_ingot");
    //event.add("forge:ingots", "chemlib:silver_ingot");
    //event.add("forge:ingots", "chemlib:cadmium_ingot");
    //event.add("forge:ingots", "chemlib:indium_ingot");
    //event.add("forge:ingots", "chemlib:tin_ingot");
    //event.add("forge:ingots", "chemlib:cesium_ingot");
    //event.add("forge:ingots", "chemlib:barium_ingot");
    //event.add("forge:ingots", "chemlib:lanthanum_ingot");
    //event.add("forge:ingots", "chemlib:cerium_ingot");
    //event.add("forge:ingots", "chemlib:praseodymium_ingot");
    //event.add("forge:ingots", "chemlib:neodymium_ingot");
    //event.add("forge:ingots", "chemlib:samarium_ingot");
    //event.add("forge:ingots", "chemlib:europium_ingot");
    //event.add("forge:ingots", "chemlib:gadolinium_ingot");
    //event.add("forge:ingots", "chemlib:terbium_ingot");
    //event.add("forge:ingots", "chemlib:dysprosium_ingot");
    //event.add("forge:ingots", "chemlib:holmium_ingot");
    //event.add("forge:ingots", "chemlib:erbium_ingot");
    //event.add("forge:ingots", "chemlib:thulium_ingot");
    //event.add("forge:ingots", "chemlib:ytterbium_ingot");
    //event.add("forge:ingots", "chemlib:lutetium_ingot");
    //event.add("forge:ingots", "chemlib:hafnium_ingot");
    //event.add("forge:ingots", "chemlib:tantalum_ingot");
    //event.add("forge:ingots", "chemlib:tungsten_ingot");
    //event.add("forge:ingots", "chemlib:rhenium_ingot");
    //event.add("forge:ingots", "chemlib:osmium_ingot");
    //event.add("forge:ingots", "chemlib:iridium_ingot");
    //event.add("forge:ingots", "chemlib:platinum_ingot");
    //event.add("forge:ingots", "chemlib:thallium_ingot");
    //event.add("forge:ingots", "chemlib:lead_ingot");
    //event.add("forge:ingots", "chemlib:bismuth_ingot");
    //event.add("forge:ingots", "chemlib:polonium_ingot");
    //event.add("forge:ingots", "chemlib:francium_ingot");
    //event.add("forge:ingots", "chemlib:radium_ingot");
    //event.add("forge:ingots", "chemlib:actinium_ingot");
    //event.add("forge:ingots", "chemlib:thorium_ingot");
    //event.add("forge:ingots", "chemlib:protactinium_ingot");
    //event.add("forge:ingots", "chemlib:uranium_ingot");

    ////Plate
    //Chemlib
    //event.add("forge:plates", "chemlib:lithium_plate");
    //event.add("forge:plates", "chemlib:beryllium_plate");
    //event.add("forge:plates", "chemlib:sodium_plate");
    //event.add("forge:plates", "chemlib:magnesium_plate");
    //event.add("forge:plates", "chemlib:aluminum_plate");
    //event.add("forge:plates", "chemlib:potassium_plate");
    //event.add("forge:plates", "chemlib:calcium_plate");
    //event.add("forge:plates", "chemlib:scandium_plate");
    //event.add("forge:plates", "chemlib:titanium_plate");
    //event.add("forge:plates", "chemlib:vanadium_plate");
    //event.add("forge:plates", "chemlib:chromium_plate");
    //event.add("forge:plates", "chemlib:manganese_plate");
    //event.add("forge:plates", "chemlib:iron_plate");
    //event.add("forge:plates", "chemlib:cobalt_plate");
    //event.add("forge:plates", "chemlib:nickel_plate");
    //event.add("forge:plates", "chemlib:copper_plate");
    //event.add("forge:plates", "chemlib:zinc_plate");
    //event.add("forge:plates", "chemlib:gallium_plate");
    //event.add("forge:plates", "chemlib:rubidium_plate");
    //event.add("forge:plates", "chemlib:strontium_plate");
    //event.add("forge:plates", "chemlib:yttrium_plate");
    //event.add("forge:plates", "chemlib:zirconium_plate");
    //event.add("forge:plates", "chemlib:niobium_plate");
    //event.add("forge:plates", "chemlib:molybdenum_plate");
    //event.add("forge:plates", "chemlib:ruthenium_plate");
    //event.add("forge:plates", "chemlib:rhodium_plate");
    //event.add("forge:plates", "chemlib:palladium_plate");
    //event.add("forge:plates", "chemlib:silver_plate");
    //event.add("forge:plates", "chemlib:cadmium_plate");
    //event.add("forge:plates", "chemlib:indium_plate");
    //event.add("forge:plates", "chemlib:tin_plate");
    //event.add("forge:plates", "chemlib:cesium_plate");
    //event.add("forge:plates", "chemlib:barium_plate");
    //event.add("forge:plates", "chemlib:lanthanum_plate");
    //event.add("forge:plates", "chemlib:cerium_plate");
    //event.add("forge:plates", "chemlib:praseodymium_plate");
    //event.add("forge:plates", "chemlib:neodymium_plate");
    //event.add("forge:plates", "chemlib:samarium_plate");
    //event.add("forge:plates", "chemlib:europium_plate");
    //event.add("forge:plates", "chemlib:gadolinium_plate");
    //event.add("forge:plates", "chemlib:terbium_plate");
    //event.add("forge:plates", "chemlib:dysprosium_plate");
    //event.add("forge:plates", "chemlib:holmium_plate");
    //event.add("forge:plates", "chemlib:erbium_plate");
    //event.add("forge:plates", "chemlib:thulium_plate");
    //event.add("forge:plates", "chemlib:ytterbium_plate");
    //event.add("forge:plates", "chemlib:lutetium_plate");
    //event.add("forge:plates", "chemlib:hafnium_plate");
    //event.add("forge:plates", "chemlib:tantalum_plate");
    //event.add("forge:plates", "chemlib:tungsten_plate");
    //event.add("forge:plates", "chemlib:rhenium_plate");
    //event.add("forge:plates", "chemlib:osmium_plate");
    //event.add("forge:plates", "chemlib:iridium_plate");
    //event.add("forge:plates", "chemlib:platinum_plate");
    //event.add("forge:plates", "chemlib:gold_plate");
    //event.add("forge:plates", "chemlib:thallium_plate");
    //event.add("forge:plates", "chemlib:lead_plate");
    //event.add("forge:plates", "chemlib:bismuth_plate");
    //event.add("forge:plates", "chemlib:polonium_plate");
    //event.add("forge:plates", "chemlib:francium_plate");
    //event.add("forge:plates", "chemlib:radium_plate");
    //event.add("forge:plates", "chemlib:actinium_plate");
    //event.add("forge:plates", "chemlib:thorium_plate");
    //event.add("forge:plates", "chemlib:protactinium_plate");
    //event.add("forge:plates", "chemlib:uranium_plate");
});

ServerEvents.tags("item", (event) => {
    const TagsJAOPCAattern = [
        //JAOPCA Integration
        { tag: "forge:ore_rates/singular", item: "aethersteel:aether_debris" },
        { tag: "forge:ores", item: "aethersteel:aether_debris" },
        { tag: "forge:ores/aethersteel_scrap", item: "aethersteel:aether_debris" },
    ];
    TagsJAOPCAattern.forEach((recipe) => {
        event.add(recipe.tag, recipe.item);
    });
});

ServerEvents.tags("block", (event) => {
    const TagsJAOPCAattern = [
        //JAOPCA Integration
        { tag: "forge:ore_rates/singular", item: "aethersteel:aether_debris" },
        { tag: "forge:ores", item: "aethersteel:aether_debris" },
        { tag: "forge:ores/aethersteel_scrap", item: "aethersteel:aether_debris" },
    ];
    TagsJAOPCAattern.forEach((recipe) => {
        event.add(recipe.tag, recipe.item);
    });
});
