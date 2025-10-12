ServerEvents.recipes((event) => {
    //#region RemoveID
    const RmRecipeID = [
        //Minecraft
        "cyclic:copper_ingot", //nugget => ingot
        "cyclic:netherite_ingot", //nugget => ingot
        "createdeco:netherite_ingot", //nugget => ingot
        "thermal:storage/netherite_ingot_from_nuggets", //nugget => ingot
        "minecraft:netherite_ingot_from_netherite_block", //block => ingot
        "cyclic:netherite_nugget", //nugget => ingot
        "minecraft:netherite_block", //ingot => block
        "thermal:machines/press/packing3x3/press_netherite_nugget_packing", //nugget => ingot
        "thermal:machines/press/unpacking/press_netherite_unpacking", //block => ingot
        "thermal:machines/press/unpacking/press_netherite_nugget_unpacking", //ingot => nugget
        "thermal:machines/press/packing3x3/press_netherite_packing", //ingot => block

        //Aetherstell
        //aetherstell.js => rm output: aetherstell_ingot

        //Ad Astra
        //Desh
        "ad_astra:recipes/desh_ingot_from_nuggets", //nugget => ingot
        "ad_astra:recipes/desh_ingot", //block => ingot
        "ad_astra:recipes/desh_nugget", //ingot => nugget
        "ad_astra:recipes/desh_block", //ingot => block
        "jaopca:thermal_expansion.nugget_to_material.desh", //nugget => ingot
        "jaopca:thermal_expansion.block_to_material.desh", //block => ingot
        "jaopca:thermal_expansion.storage_block_to_material.desh", //block => ingot
        "jaopca:thermal_expansion.material_to_nugget.desh", //ingot => nugget
        "jaopca:thermal_expansion.material_to_block.desh", //ingot => block
        "jaopca:thermal_expansion.material_to_storage_block.desh", //ingot => block
        //Ostrum
        "ad_astra:recipes/ostrum_ingot_from_nuggets", //nugget => ingot
        "ad_astra:recipes/ostrum_ingot", //block => ingot
        "ad_astra:recipes/ostrum_nugget", //ingot => nugget
        "ad_astra:recipes/ostrum_block", //ingot => block
        "jaopca:thermal_expansion.nugget_to_material.ostrum", //nugget => ingot
        "jaopca:thermal_expansion.block_to_material.ostrum", //block => ingot
        "jaopca:thermal_expansion.storage_block_to_material.ostrum", //block => ingot
        "jaopca:thermal_expansion.material_to_nugget.ostrum", //ingot => nugget
        "jaopca:thermal_expansion.material_to_block.ostrum", //ingot => block
        "jaopca:thermal_expansion.material_to_storage_block.ostrum", //ingot => block
        //Calorite
        "ad_astra:recipes/calorite_ingot_from_nuggets", //nugget => ingot
        "ad_astra:recipes/calorite_ingot", //block => ingot
        "ad_astra:recipes/calorite_nugget", //ingot => nugget
        "ad_astra:recipes/calorite_block", //ingot => block
        "jaopca:thermal_expansion.nugget_to_material.calorite", //nugget => ingot
        "jaopca:thermal_expansion.block_to_material.calorite", //block => ingot
        "jaopca:thermal_expansion.storage_block_to_material.calorite", //block => ingot
        "jaopca:thermal_expansion.material_to_nugget.calorite", //ingot => nugget
        "jaopca:thermal_expansion.material_to_block.calorite", //ingot => block
        "jaopca:thermal_expansion.material_to_storage_block.calorite", //ingot => block

        //EnderIO
        //Copper
        "enderio:copper_alloy_nugget_to_ingot", //nugget => ingot
        "enderio:copper_alloy_ingot", //block => ingot
        "enderio:copper_alloy_nugget", //ingot => nugget
        "enderio:copper_alloy_block", //ingot => block
        //Energetic
        "enderio:energetic_alloy_nugget_to_ingot", //nugget => ingot
        "enderio:energetic_alloy_ingot", //block => ingot
        "enderio:energetic_alloy_nugget", //ingot => nugget
        "enderio:energetic_alloy_block", //ingot => block
        //Vibrant
        "enderio:vibrant_alloy_nugget_to_ingot", //nugget => ingot
        "enderio:vibrant_alloy_ingot", //block => ingot
        "enderio:vibrant_alloy_nugget", //ingot => nugget
        "enderio:vibrant_alloy_block", //ingot => block
        //Redstone
        "enderio:redstone_alloy_nugget_to_ingot", //nugget => ingot
        "enderio:redstone_alloy_ingot", //block => ingot
        "enderio:redstone_alloy_nugget", //ingot => nugget
        "enderio:redstone_alloy_block", //ingot => block
        //Conductive
        "enderio:conductive_alloy_nugget_to_ingot", //nugget => ingot
        "enderio:conductive_alloy_ingot", //block => ingot
        "enderio:conductive_alloy_nugget", //ingot => nugget
        "enderio:conductive_alloy_block", //ingot => block
        //Pulsating
        "enderio:pulsating_alloy_nugget_to_ingot", //nugget => ingot
        "enderio:pulsating_alloy_ingot", //block => ingot
        "enderio:pulsating_alloy_nugget", //ingot => nugget
        "enderio:pulsating_alloy_block", //ingot => block
        //Dark steel
        "enderio:dark_steel_nugget_to_ingot", //nugget => ingot
        "enderio:dark_steel_ingot", //block => ingot
        "enderio:dark_steel_nugget", //ingot => nugget
        "enderio:dark_steel_block", //ingot => block
        //Soularium
        "enderio:soularium_nugget_to_ingot", //nugget => ingot
        "enderio:soularium_ingot", //block => ingot
        "enderio:soularium_nugget", //ingot => nugget
        "enderio:soularium_block", //ingot => block
        //End steel
        "enderio:end_steel_nugget_to_ingot", //nugget => ingot
        "enderio:end_steel_ingot", //block => ingot
        "enderio:end_steel_nugget", //ingot => nugget
        "enderio:end_steel_block", //ingot => block

        //Thermal
        "createaddition:crafting/electrum_ingot",
        //Signalum
        "thermal:storage/signalum_ingot_from_nuggets", //nugget => ingot
        "thermal:storage/signalum_ingot_from_block", //block => ingot
        "thermal:storage/signalum_nugget_from_ingot", //ingot => nugget
        "thermal:storage/signalum_block", //ingot => block
        "thermal:machines/press/packing3x3/press_signalum_nugget_packing", //nugget => ingot
        "thermal:machines/press/unpacking/press_signalum_unpacking", //block => ingot
        "thermal:machines/press/unpacking/press_signalum_nugget_unpacking", //ingot => nugget
        "thermal:machines/press/packing3x3/press_signalum_packing", //ingot => block
        //Lumium
        "thermal:storage/lumium_ingot_from_nuggets", //nugget => ingot
        "thermal:storage/lumium_ingot_from_block", //block => ingot
        "thermal:storage/lumium_nugget_from_ingot", //ingot => nugget
        "thermal:storage/lumium_block", //ingot => block
        "thermal:machines/press/packing3x3/press_lumium_nugget_packing", //nugget => ingot
        "thermal:machines/press/unpacking/press_lumium_unpacking", //block => ingot
        "thermal:machines/press/unpacking/press_lumium_nugget_unpacking", //ingot => nugget
        "thermal:machines/press/packing3x3/press_lumium_packing", //ingot => block
        //Enderium
        "thermal:storage/enderium_ingot_from_nuggets", //nugget => ingot
        "thermal:storage/enderium_ingot_from_block", //block => ingot
        "thermal:storage/enderium_nugget_from_ingot", //ingot => nugget
        "thermal:storage/enderium_block", //ingot => block
        "thermal:machines/press/packing3x3/press_enderium_nugget_packing", //nugget => ingot
        "thermal:machines/press/unpacking/press_enderium_unpacking", //block => ingot
        "thermal:machines/press/unpacking/press_enderium_nugget_unpacking", //ingot => nugget
        "thermal:machines/press/packing3x3/press_enderium_packing", //ingot => block

        ////Thermal Endergy
        //Prismalium
        "thermalendergy:prismalium_ingot_from_nugget", //nugget => ingot
        "thermalendergy:prismalium_ingot", //block => ingot
        "thermalendergy:prismalium_nugget", //ingot => nugget
        "thermalendergy:prismalium_block_from_ingot", //ingot => block
        "thermalendergy:machine/press/unpacking/press_prismalium_unpacking", //block => ingot
        "thermalendergy:machine/press/packing3x3/press_prismalium_packing", //ingot => block
        //Melodium
        "thermalendergy:melodium_ingot_from_nugget", //nugget => ingot
        "thermalendergy:melodium_ingot", //block => ingot
        "thermalendergy:melodium_nugget", //ingot => nugget
        "thermalendergy:melodium_block_from_ingot", //ingot => block
        "thermalendergy:machine/press/unpacking/press_melodium_unpacking", //block => ingot
        "thermalendergy:machine/press/packing3x3/press_melodium_packing", //ingot => block
        //Stellarium
        "thermalendergy:stellarium_ingot_from_nugget", //nugget => ingot
        "thermalendergy:stellarium_ingot", //block => ingot
        "thermalendergy:stellarium_nugget", //ingot => nugget
        "thermalendergy:stellarium_block_from_ingot", //ingot => block
        "thermalendergy:machine/press/unpacking/press_stellarium_unpacking", //block => ingot
        "thermalendergy:machine/press/packing3x3/press_stellarium_packing", //ingot => block
    ];
    RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //// # =================================================================================================== #

    //#region Func Compact
    function CompactThermalPack(get, put, rsflux) {
        event.custom({
            type: "thermal:press",
            ingredients: [{ tag: put, count: 9 }, { item: "thermal:press_packing_3x3_die" }],
            result: [{ item: get }],
            energy: rsflux,
        });
    }

    function CompactThermalPackID(get, put, rsflux) {
        event.custom({
            type: "thermal:press",
            ingredients: [{ item: put, count: 9 }, { item: "thermal:press_packing_3x3_die" }],
            result: [{ item: get }],
            energy: rsflux,
        });
    }

    //// # =================================================================================================== #

    function CompactThermalUnpack(get, put, rsflux) {
        event.custom({
            type: "thermal:press",
            ingredients: [{ tag: put, count: 1 }, { item: "thermal:press_unpacking_die" }],
            result: [{ item: get, count: 9 }],
            energy: rsflux,
        });
    }

    function CompactThermalUnpackID(get, put, rsflux) {
        event.custom({
            type: "thermal:press",
            ingredients: [{ item: put, count: 1 }, { item: "thermal:press_unpacking_die" }],
            result: [{ item: get, count: 9 }],
            energy: rsflux,
        });
    }
    //#endregion

    //// # =================================================================================================== #

    //#region Compact
    const CompactPattern = [
        //Minecraft
        {
            id: { ingot: "minecraft:netherite_ingot", nugget: "thermal:netherite_nugget", block: "minecraft:netherite_block" },
            tag: { ingot: "forge:ingots/netherite", nugget: "forge:nuggets/netherite", block: "forge:storage_blocks/netherite" },
            rsflux: 1200,
        },

        //Ad Astra
        {
            id: { ingot: "ad_astra:desh_ingot", nugget: "ad_astra:desh_nugget", block: "ad_astra:desh_block" },
            tag: { ingot: "forge:ingots/desh", nugget: "forge:nuggets/desh", block: "forge:storage_blocks/desh" },
            rsflux: 2400,
        },
        {
            id: { ingot: "ad_astra:ostrum_ingot", nugget: "ad_astra:ostrum_nugget", block: "ad_astra:ostrum_block" },
            tag: { ingot: "forge:ingots/ostrum", nugget: "forge:nuggets/ostrum", block: "forge:storage_blocks/ostrum" },
            rsflux: 2800,
        },
        {
            id: { ingot: "ad_astra:calorite_ingot", nugget: "ad_astra:calorite_nugget", block: "ad_astra:calorite_block" },
            tag: { ingot: "forge:ingots/aethersteel", nugget: "forge:nuggets/calorite", block: "forge:storage_blocks/calorite" },
            rsflux: 3200,
        },

        //Aethersteel
        {
            id: { ingot: "aethersteel:aethersteel_ingot", nugget: "aethersteel:aethersteel_nugget", block: "aethersteel:aethersteel_block" },
            tag: { ingot: "forge:ingots/aethersteel" },
            rsflux: 4800,
        },

        //EnderIO
        {
            id: { ingot: "enderio:copper_alloy_ingot", nugget: "enderio:copper_alloy_nugget", block: "enderio:copper_alloy_block" },
            tag: { ingot: "forge:ingots/copper_alloy", nugget: "forge:nuggets/copper_alloy", block: "forge:storage_blocks/copper_alloy" },
            rsflux: 400,
        },
        {
            id: { ingot: "enderio:energetic_alloy_ingot", nugget: "enderio:energetic_alloy_nugget", block: "enderio:energetic_alloy_block" },
            tag: { ingot: "forge:ingots/energetic_alloy", nugget: "forge:nuggets/energetic_alloy", block: "forge:storage_blocks/energetic_alloy" },
            rsflux: 1800,
        },
        {
            id: { ingot: "enderio:vibrant_alloy_ingot", nugget: "enderio:vibrant_alloy_nugget", block: "enderio:vibrant_alloy_block" },
            tag: { ingot: "forge:ingots/vibrant_alloy", nugget: "forge:nuggets/vibrant_alloy", block: "forge:storage_blocks/vibrant_alloy" },
            rsflux: 2400,
        },
        {
            id: { ingot: "enderio:redstone_alloy_ingot", nugget: "enderio:redstone_alloy_nugget", block: "enderio:redstone_alloy_block" },
            tag: { ingot: "forge:ingots/redstone_alloy", nugget: "forge:nuggets/redstone_alloy", block: "forge:storage_blocks/redstone_alloy" },
            rsflux: 400,
        },
        {
            id: { ingot: "enderio:conductive_alloy_ingot", nugget: "enderio:conductive_alloy_nugget", block: "enderio:conductive_alloy_block" },
            tag: { ingot: "forge:ingots/conductive_alloy", nugget: "forge:nuggets/conductive_alloy", block: "forge:storage_blocks/conductive_alloy" },
            rsflux: 800,
        },
        {
            id: { ingot: "enderio:pulsating_alloy_ingot", nugget: "enderio:pulsating_alloy_nugget", block: "enderio:pulsating_alloy_block" },
            tag: { ingot: "forge:ingots/pulsating_alloy", nugget: "forge:nuggets/pulsating_alloy", block: "forge:storage_blocks/pulsating_alloy" },
            rsflux: 1800,
        },
        {
            id: { ingot: "enderio:dark_steel_ingot", nugget: "enderio:dark_steel_nugget", block: "enderio:dark_steel_block" },
            tag: { ingot: "forge:ingots/dark_steel", nugget: "forge:nuggets/dark_steel", block: "forge:storage_blocks/dark_steel" },
            rsflux: 4800,
        },
        {
            id: { ingot: "enderio:soularium_ingot", nugget: "enderio:soularium_nugget", block: "enderio:soularium_block" },
            tag: { ingot: "forge:ingots/soularium", nugget: "forge:nuggets/soularium", block: "forge:storage_blocks/soularium" },
            rsflux: 2400,
        },
        {
            id: { ingot: "enderio:end_steel_ingot", nugget: "enderio:end_steel_nugget", block: "enderio:end_steel_block" },
            tag: { ingot: "forge:ingots/end_steel", nugget: "forge:nuggets/end_steel", block: "forge:storage_blocks/end_steel" },
            rsflux: 36000,
        },

        //Thermal
        {
            id: { ingot: "thermal:signalum_ingot", nugget: "thermal:signalum_nugget", block: "thermal:signalum_block" },
            tag: { ingot: "forge:ingots/signalum", nugget: "forge:nuggets/signalum", block: "forge:storage_blocks/signalum" },
            rsflux: 2400,
        },
        {
            id: { ingot: "thermal:lumium_ingot", nugget: "thermal:lumium_nugget", block: "thermal:lumium_block" },
            tag: { ingot: "forge:ingots/lumium", nugget: "forge:nuggets/lumium", block: "forge:storage_blocks/lumium" },
            rsflux: 2400,
        },
        {
            id: { ingot: "thermal:enderium_ingot", nugget: "thermal:enderium_nugget", block: "thermal:enderium_block" },
            tag: { ingot: "forge:ingots/enderium", nugget: "forge:nuggets/enderium", block: "forge:storage_blocks/enderium" },
            rsflux: 3600,
        },

        //Thermal Endergy
        {
            id: { ingot: "thermalendergy:prismalium_ingot", nugget: "thermalendergy:prismalium_nugget", block: "thermalendergy:prismalium_block" },
            tag: { ingot: "forge:ingots/prismalium", nugget: "forge:nuggets/prismalium", block: "forge:storage_blocks/prismalium" },
            rsflux: 4800,
        },
        {
            id: { ingot: "thermalendergy:melodium_ingot", nugget: "thermalendergy:melodium_nugget", block: "thermalendergy:melodium_block" },
            tag: { ingot: "forge:ingots/melodium", nugget: "forge:nuggets/melodium", block: "forge:storage_blocks/melodium" },
            rsflux: 6000,
        },
        {
            id: { ingot: "thermalendergy:stellarium_ingot", nugget: "thermalendergy:stellarium_nugget", block: "thermalendergy:stellarium_block" },
            tag: { ingot: "forge:ingots/stellarium", nugget: "forge:nuggets/stellarium", block: "forge:storage_blocks/stellarium" },
            rsflux: 7200,
        },
    ];
    CompactPattern.forEach((recipe) => {
        //Compacting
        if (recipe.id.ingot && recipe.tag.nugget) {
            CompactThermalPack(recipe.id.ingot, recipe.tag.nugget, recipe.rsflux);
        } else {
            CompactThermalPackID(recipe.id.ingot, recipe.id.nugget, recipe.rsflux);
        }

        if (recipe.id.ingot && recipe.tag.block) {
            CompactThermalPack(recipe.id.ingot, recipe.tag.block, recipe.rsflux);
        } else {
            CompactThermalPackID(recipe.id.ingot, recipe.id.block, recipe.rsflux);
        }

        if (recipe.id.nugget && recipe.tag.ingot) {
            CompactThermalUnpack(recipe.id.nugget, recipe.tag.ingot, recipe.rsflux);
        } else {
            CompactThermalUnpackID(recipe.id.nugget, recipe.id.ingot, recipe.rsflux);
        }

        if (recipe.id.block && recipe.tag.ingot) {
            CompactThermalUnpack(recipe.id.block, recipe.tag.ingot, recipe.rsflux);
        } else {
            CompactThermalUnpackID(recipe.id.block, recipe.id.ingot, recipe.rsflux);
        }
    });
    //#endregion
});
