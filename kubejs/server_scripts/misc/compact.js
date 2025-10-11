// priority:996
ServerEvents.recipes((event) => {
    //#region RemoveID
    const RmRecipeID = [
        //Thermal
        //Signalum
        "thermal:machines/press/packing3x3/press_signalum_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_signalum_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_signalum_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_signalum_nugget_unpacking", //Ingot to Nugget
        //Lumium
        "thermal:machines/press/packing3x3/press_lumium_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_lumium_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_lumium_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_lumium_nugget_unpacking", //Ingot to Nugget
        //Enderium
        "thermal:machines/press/packing3x3/press_enderium_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_enderium_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_enderium_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_enderium_nugget_unpacking", //Ingot to Nugget
        //Steel
        "thermal:machines/press/packing3x3/press_steel_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_steel_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_steel_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_steel_nugget_unpacking", //Ingot to Nugget
        //Rose gold
        "thermal:machines/press/packing3x3/press_rose_gold_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_rose_gold_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_rose_gold_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_rose_gold_nugget_unpacking", //Ingot to Nugget
        //Bronze
        "thermal:machines/press/packing3x3/press_bronze_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_bronze_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_bronze_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_bronze_nugget_unpacking", //Ingot to Nugget
        //Electrum
        "thermal:machines/press/packing3x3/press_electrum_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_electrum_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_electrum_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_electrum_nugget_unpacking", //Ingot to Nugget
        //Invar
        "thermal:machines/press/packing3x3/press_invar_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_invar_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_invar_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_invar_nugget_unpacking", //Ingot to Nugget
        //Constantan
        "thermal:machines/press/packing3x3/press_constantan_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_constantan_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_constantan_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_constantan_nugget_unpacking", //Ingot to Nugget

        ////Thermal Endergy
        //Prismalium
        "thermalendergy:machine/press/packing3x3/press_prismalium_packing", //Ingot to Block
        "thermalendergy:machine/press/unpacking/press_prismalium_unpacking", //Block to Ingot
        //Melodium
        "thermalendergy:machine/press/packing3x3/press_melodium_packing", //Ingot to Block
        "thermalendergy:machine/press/unpacking/press_melodium_unpacking", //Block to Ingot
        //Stellarium
        "thermalendergy:machine/press/packing3x3/press_stellarium_packing", //Ingot to Block
        "thermalendergy:machine/press/unpacking/press_stellarium_unpacking", //Block to Ingot
    ];
    //RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //// # =================================================================================================== #

    //#region Func Compact
    function CompactThermalPack(get, put) {
        event.shaped(get, ["AAA", "AAA", "AAA"], { A: `#${put}` });
        event.custom({
            type: "thermal:press",
            ingredients: [{ tag: put, count: 9 }, { item: "thermal:press_packing_3x3_die" }],
            result: [{ item: get }],
            energy: 400,
        });
    }

    function CompactThermalUnpack(get, put) {
        event.shapeless(Item.of(get, 9), [`#${put}`]);
        event.custom({
            type: "thermal:press",
            ingredients: [{ tag: put, count: 1 }, { item: "thermal:press_unpacking_die" }],
            result: [{ item: get, count: 9 }],
            energy: 400,
        });
    }
    //#endregion

    //// # =================================================================================================== #

    //#region Compact

    const CompactPattern = [
        //Create
        {
            id: { ingot: "create:andesite_alloy", block: "create:andesite_alloy_block" },
            tag: { ingot: "forge:ingots/andesite_alloy", block: "forge:storage_blocks/andesite_alloy" },
        },

        //EnderIO
        {
            id: { ingot: "enderio:copper_alloy_ingot", nugget: "enderio:copper_alloy_nugget", block: "enderio:copper_alloy_block" },
            tag: { ingot: "forge:ingots/copper_alloy", nugget: "forge:nuggets/copper_alloy", block: "forge:storage_blocks/copper_alloy" },
        },
        {
            id: { ingot: "enderio:copper_alloy_ingot", nugget: "enderio:copper_alloy_nugget", block: "enderio:copper_alloy_block" },
            tag: { ingot: "forge:ingots/copper_alloy", nugget: "forge:nuggets/copper_alloy", block: "forge:storage_blocks/copper_alloy" },
        },
        {
            id: { ingot: "enderio:energetic_alloy_ingot", nugget: "enderio:energetic_alloy_nugget", block: "enderio:energetic_alloy_block" },
            tag: { ingot: "forge:ingots/energetic_alloy", nugget: "forge:nuggets/energetic_alloy", block: "forge:storage_blocks/energetic_alloy" },
        },
        {
            id: { ingot: "enderio:vibrant_alloy_ingot", nugget: "enderio:vibrant_alloy_nugget", block: "enderio:vibrant_alloy_block" },
            tag: { ingot: "forge:ingots/vibrant_alloy", nugget: "forge:nuggets/vibrant_alloy", block: "forge:storage_blocks/vibrant_alloy" },
        },
        {
            id: { ingot: "enderio:redstone_alloy_ingot", nugget: "enderio:redstone_alloy_nugget", block: "enderio:redstone_alloy_block" },
            tag: { ingot: "forge:ingots/redstone_alloy", nugget: "forge:nuggets/redstone_alloy", block: "forge:storage_blocks/redstone_alloy" },
        },
        {
            id: { ingot: "enderio:conductive_alloy_ingot", nugget: "enderio:conductive_alloy_nugget", block: "enderio:conductive_alloy_block" },
            tag: { ingot: "forge:ingots/conductive_alloy", nugget: "forge:nuggets/conductive_alloy", block: "forge:storage_blocks/conductive_alloy" },
        },
        {
            id: { ingot: "enderio:pulsating_alloy_ingot", nugget: "enderio:pulsating_alloy_nugget", block: "enderio:pulsating_alloy_block" },
            tag: { ingot: "forge:ingots/pulsating_alloy", nugget: "forge:nuggets/pulsating_alloy", block: "forge:storage_blocks/pulsating_alloy" },
        },
        {
            id: { ingot: "enderio:dark_steel_ingot", nugget: "enderio:dark_steel_nugget", block: "enderio:dark_steel_block" },
            tag: { ingot: "forge:ingots/dark_steel", nugget: "forge:nuggets/dark_steel", block: "forge:storage_blocks/dark_steel" },
        },
        {
            id: { ingot: "enderio:soularium_ingot", nugget: "enderio:soularium_nugget", block: "enderio:soularium_block" },
            tag: { ingot: "forge:ingots/soularium", nugget: "forge:nuggets/soularium", block: "forge:storage_blocks/soularium" },
        },
        {
            id: { ingot: "enderio:end_steel_ingot", nugget: "enderio:end_steel_nugget", block: "enderio:end_steel_block" },
            tag: { ingot: "forge:ingots/end_steel", nugget: "forge:nuggets/end_steel", block: "forge:storage_blocks/end_steel" },
        },

        //Thermal
        {
            id: { ingot: "thermal:signalum_ingot", nugget: "thermal:signalum_nugget", block: "thermal:signalum_block" },
            tag: { ingot: "forge:ingots/signalum", nugget: "forge:nuggets/signalum", block: "forge:storage_blocks/signalum" },
        },
        {
            id: { ingot: "thermal:lumium_ingot", nugget: "thermal:lumium_nugget", block: "thermal:lumium_block" },
            tag: { ingot: "forge:ingots/lumium", nugget: "forge:nuggets/lumium", block: "forge:storage_blocks/lumium" },
        },
        {
            id: { ingot: "thermal:enderium_ingot", nugget: "thermal:enderium_nugget", block: "thermal:enderium_block" },
            tag: { ingot: "forge:ingots/enderium", nugget: "forge:nuggets/enderium", block: "forge:storage_blocks/enderium" },
        },
        {
            id: { ingot: "thermal:steel_ingot", nugget: "thermal:steel_nugget", block: "thermal:steel_block" },
            tag: { ingot: "forge:ingots/steel", nugget: "forge:nuggets/steel", block: "forge:storage_blocks/steel" },
        },
        {
            id: { ingot: "thermal:rose_gold_ingot", nugget: "thermal:rose_gold_nugget", block: "thermal:rose_gold_block" },
            tag: { ingot: "forge:ingots/rose_gold", nugget: "forge:nuggets/rose_gold", block: "forge:storage_blocks/rose_gold" },
        },
        {
            id: { ingot: "thermal:bronze_ingot", nugget: "thermal:bronze_nugget", block: "thermal:bronze_block" },
            tag: { ingot: "forge:ingots/bronze", nugget: "forge:nuggets/bronze", block: "forge:storage_blocks/bronze" },
        },
        {
            id: { ingot: "thermal:electrum_ingot", nugget: "thermal:electrum_nugget", block: "thermal:electrum_block" },
            tag: { ingot: "forge:ingots/electrum", nugget: "forge:nuggets/electrum", block: "forge:storage_blocks/electrum" },
        },
        {
            id: { ingot: "thermal:invar_ingot", nugget: "thermal:invar_nugget", block: "thermal:invar_block" },
            tag: { ingot: "forge:ingots/invar", nugget: "forge:nuggets/invar", block: "forge:storage_blocks/invar" },
        },
        {
            id: { ingot: "thermal:constantan_ingot", nugget: "thermal:constantan_nugget", block: "thermal:constantan_block" },
            tag: { ingot: "forge:ingots/constantan", nugget: "forge:nuggets/constantan", block: "forge:storage_blocks/constantan" },
        },

        //Thermal Endergy
        {
            id: { ingot: "thermalendergy:prismalium_ingot", nugget: "thermalendergy:prismalium_nugget", block: "thermalendergy:prismalium_block" },
            tag: { ingot: "forge:ingots/prismalium", nugget: "forge:nuggets/prismalium", block: "forge:storage_blocks/prismalium" },
        },
        {
            id: { ingot: "thermalendergy:melodium_ingot", nugget: "thermalendergy:melodium_nugget", block: "thermalendergy:melodium_block" },
            tag: { ingot: "forge:ingots/melodium", nugget: "forge:nuggets/melodium", block: "forge:storage_blocks/melodium" },
        },
        {
            id: { ingot: "thermalendergy:stellarium_ingot", nugget: "thermalendergy:stellarium_nugget", block: "thermalendergy:stellarium_block" },
            tag: { ingot: "forge:ingots/stellarium", nugget: "forge:nuggets/stellarium", block: "forge:storage_blocks/stellarium" },
        },
    ];
    CompactPattern.forEach((recipe) => {
        //Remove Recipe
        //event.remove({ output: recipe.id.ingot });
        //event.remove({ output: recipe.id.nugget });
        //event.remove({ output: recipe.id.block });

        //Compacting
        //if (recipe.id.ingot && recipe.tag.nugget) AlloyThermalPack(recipe.id.ingot, recipe.tag.nugget);
        //if (recipe.id.ingot && recipe.tag.block) AlloyThermalPack(recipe.id.ingot, recipe.tag.block);
        //if (recipe.id.nugget && recipe.tag.ingot) AlloyThermalUnpack(recipe.id.nugget, recipe.tag.ingot);
        //if (recipe.id.block && recipe.tag.ingot) AlloyThermalUnpack(recipe.id.block, recipe.tag.ingot);
    });
    //#endregion
});
