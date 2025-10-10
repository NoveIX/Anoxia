// priority:996
ServerEvents.recipes((event) => {
    //#region Remove ID
    const RmAlloyID = [
        //Create
        "thermal:compat/create/smelter_create_alloy_andesite_alloy",

        //EnderIO
        "enderio:alloy_smelting/copper_alloy_ingot",
        "enderio:alloy_smelting/energetic_alloy_ingot",
        "enderio:alloy_smelting/vibrant_alloy_ingot",
        "enderio:alloy_smelting/redstone_alloy_ingot",
        "enderio:alloy_smelting/conductive_alloy_ingot",
        "enderio:alloy_smelting/pulsating_alloy_ingot",
        "enderio:alloy_smelting/dark_steel_ingot",
        "enderio:alloy_smelting/soularium_ingot",
        "enderio:alloy_smelting/end_steel_ingot",

        ////Thermal
        //Signalum
        "enderio:smelting/thermal/smelting/signalum_ingot_from_dust_smelting",
        "thermal:machines/press/packing3x3/press_signalum_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_signalum_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_signalum_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_signalum_nugget_unpacking", //Ingot to Nugget
        "thermal:machines/smelter/smelter_alloy_signalum",
        "thermal:machines/smelter/smelter_signalum_dust",
        "thermal:machines/smelter/smelter_signalum_plate_to_ingot",
        //Lumium
        "enderio:smelting/thermal/smelting/lumium_ingot_from_dust_smelting",
        "thermal:machines/press/packing3x3/press_lumium_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_lumium_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_lumium_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_lumium_nugget_unpacking", //Ingot to Nugget
        "thermal:machines/smelter/smelter_alloy_lumium",
        "thermal:machines/smelter/smelter_lumium_dust",
        "thermal:machines/smelter/smelter_lumium_plate_to_ingot",
        //Enderium
        "enderio:smelting/thermal/smelting/enderium_ingot_from_dust_smelting",
        "thermal:machines/press/packing3x3/press_enderium_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_enderium_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_enderium_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_enderium_nugget_unpacking", //Ingot to Nugget
        "thermal:machines/smelter/smelter_alloy_enderium",
        "thermal:machines/smelter/smelter_enderium_dust",
        "thermal:machines/smelter/smelter_enderium_plate_to_ingot",
        //Steel
        "enderio:smelting/mekanism/processing/steel/ingot/from_dust_smelting",
        "thermal:machines/press/packing3x3/press_steel_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_steel_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_steel_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_steel_nugget_unpacking", //Ingot to Nugget
        "thermal:machines/smelter/smelter_alloy_steel",
        "thermal:machines/smelter/smelter_steel_dust",
        "thermal:machines/smelter/smelter_steel_plate_to_ingot",
        //Rose Gold
        "enderio:smelting/thermal/smelting/rose_gold_ingot_from_dust_smelting",
        "thermal:machines/press/packing3x3/press_rose_gold_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_rose_gold_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_rose_gold_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_rose_gold_nugget_unpacking", //Ingot to Nugget
        "thermal:machines/smelter/smelter_alloy_rose_gold",
        "thermal:machines/smelter/smelter_rose_gold_dust",
        "thermal:machines/smelter/smelter_rose_gold_plate_to_ingot",
        //Bronze
        "enderio:smelting/mekanism/processing/bronze/ingot/from_dust_smelting",
        "thermal:machines/press/packing3x3/press_bronze_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_bronze_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_bronze_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_bronze_nugget_unpacking", //Ingot to Nugget
        "thermal:machines/smelter/smelter_alloy_bronze",
        "thermal:machines/smelter/smelter_bronze_dust",
        "thermal:machines/smelter/smelter_bronze_plate_to_ingot",
        //Electrum
        "enderio:smelting/immersiveengineering/smelting/ingot_electrum_from_dust",
        "thermal:machines/press/packing3x3/press_electrum_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_electrum_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_electrum_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_electrum_nugget_unpacking", //Ingot to Nugget
        "thermal:machines/smelter/smelter_alloy_electrum",
        "thermal:machines/smelter/smelter_electrum_dust",
        "thermal:machines/smelter/smelter_electrum_plate_to_ingot",
        //Invar
        "enderio:smelting/thermal/smelting/invar_ingot_from_dust_smelting",
        "thermal:machines/press/packing3x3/press_invar_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_invar_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_invar_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_invar_nugget_unpacking", //Ingot to Nugget
        "thermal:machines/smelter/smelter_alloy_invar",
        "thermal:machines/smelter/smelter_invar_dust",
        "thermal:machines/smelter/smelter_invar_plate_to_ingot",
        //Constantan
        "enderio:smelting/immersiveengineering/smelting/ingot_constantan_from_dust",
        "thermal:machines/press/packing3x3/press_constantan_packing", //Ingot to Block
        "thermal:machines/press/packing3x3/press_constantan_nugget_packing", //Nugget to Ingot
        "thermal:machines/press/unpacking/press_constantan_unpacking", //Block to Ingot
        "thermal:machines/press/unpacking/press_constantan_nugget_unpacking", //Ingot to Nugget
        "thermal:machines/smelter/smelter_alloy_constantan",
        "thermal:machines/smelter/smelter_constantan_dust",
        "thermal:machines/smelter/smelter_constantan_plate_to_ingot",

        ////Thermal Endergy
        //Prismalium
        "enderio:smelting/thermalendergy/prismalium_ingot_from_dust",
        "thermalendergy:machine/press/packing3x3/press_prismalium_packing", //Ingot to Block
        "thermalendergy:machine/press/unpacking/press_prismalium_unpacking", //Block to Ingot
        "thermalendergy:machine/smelter/prismalium_ingot",
        //Melodium
        "enderio:smelting/thermalendergy/melodium_ingot_from_dust",
        "thermalendergy:machine/press/packing3x3/press_melodium_packing", //Ingot to Block
        "thermalendergy:machine/press/unpacking/press_melodium_unpacking", //Block to Ingot
        "thermalendergy:machine/smelter/melodium_ingot",
        //Stellarium
        "enderio:smelting/thermalendergy/stellarium_ingot_from_dust",
        "thermalendergy:machine/press/packing3x3/press_stellarium_packing", //Ingot to Block
        "thermalendergy:machine/press/unpacking/press_stellarium_unpacking", //Block to Ingot
        "thermalendergy:machine/smelter/stellarium_ingot",
    ];
    RmAlloyID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //// # =================================================================================================== #

    //#region Func Alloy
    function AlloyImmersiveAlloy(recipe) {
        event.custom({
            type: "immersiveengineering:alloy",
            input0: { base_ingredient: { tag: recipe.put1 }, count: recipe.n1 },
            input1: { base_ingredient: { tag: recipe.put2 }, count: recipe.n2 },
            result: { base_ingredient: { item: recipe.get }, count: recipe.n0 },
            time: 200,
        });
    }

    function AlloyImmersiveArc(recipe) {
        event.custom({
            type: "immersiveengineering:arc_furnace",
            input: { base_ingredient: { tag: recipe.put1 }, count: recipe.n1 },
            additives: [{ base_ingredient: { tag: recipe.put2 }, count: recipe.n2 }],
            results: [{ base_ingredient: { item: recipe.get }, count: recipe.n0 }],
            slag: { tag: "forge:slag" },
            energy: recipe.rsflux,
            time: 100,
        });
    }

    //// # =================================================================================================== #

    function AlloyEnderIO2(recipe) {
        event.custom({
            type: "enderio:alloy_smelting",
            inputs: [
                { count: recipe.n1, ingredient: { tag: recipe.put1 } },
                { count: recipe.n2, ingredient: { tag: recipe.put2 } },
            ],
            result: { item: recipe.get, count: recipe.n0 },
            experience: 0.3,
            energy: recipe.rsflux,
        });
    }

    function AlloyEnderIO3(recipe) {
        event.custom({
            type: "enderio:alloy_smelting",
            inputs: [
                { count: recipe.n1, ingredient: { tag: recipe.put1 } },
                { count: recipe.n2, ingredient: { tag: recipe.put2 } },
                { count: recipe.n3, ingredient: { tag: recipe.put3 } },
            ],
            result: { item: recipe.get, count: recipe.n0 },
            experience: 0.3,
            energy: recipe.rsflux,
        });
    }

    //// # =================================================================================================== #

    function AlloyThermal2(recipe) {
        event.custom({
            type: "thermal:smelter",
            ingredients: [
                { tag: recipe.put2, count: recipe.n2 },
                { tag: recipe.put1, count: recipe.n1 },
            ],
            result: [{ item: recipe.get, count: recipe.n0 }],
            energy: recipe.rsflux,
        });
    }

    function AlloyThermal3(recipe) {
        event.custom({
            type: "thermal:smelter",
            ingredients: [
                { tag: recipe.put2, count: recipe.n2 },
                { tag: recipe.put1, count: recipe.n1 },
                { tag: recipe.put3, count: recipe.n3 },
            ],
            result: [{ item: recipe.get, count: recipe.n0 }],
            energy: recipe.rsflux,
        });
    }

    function AlloyThermalPack(get, put) {
        event.shaped(get, ["AAA", "AAA", "AAA"], { A: `#${put}` });
        event.custom({
            type: "thermal:press",
            ingredients: [{ tag: put, count: 9 }, { item: "thermal:press_packing_3x3_die" }],
            result: [{ item: get }],
            energy: 400,
        });
    }

    function AlloyThermalUnpack(get, put) {
        event.shapeless(Item.of(get, 9), [`#${put}`]);
        event.custom({
            type: "thermal:press",
            ingredients: [{ tag: put, count: 1 }, { item: "thermal:press_unpacking_die" }],
            result: [{ item: get, count: 9 }],
            energy: 400,
        });
    }

    //// # =================================================================================================== #

    function AlloySmelter(recipe) {
        //Furnace
        event.smelting(recipe.ingot, `#${recipe.dust}`);

        //Immersive
        event.custom({
            type: "immersiveengineering:arc_furnace",
            additives: [],
            input: { tag: recipe.dust },
            results: [{ item: recipe.ingot }],
            energy: 2000,
            time: 100,
        });
    }
    //#endregion

    //// # =================================================================================================== #

    //#region Alloy
    const AlloyPattern = [
        //Anoxia
        { get: "anoxia:modularium", n0: 1, put1: "forge:ingots/vibrant_alloy", n1: 1, put2: "forge:ingots/enderium", n2: 1, put3: "forge:ingots/electrotine_alloy", n3: 1, rsflux: 48000, alloy: "complex" }, //Modularium

        //Create
        { get: "create:andesite_alloy", n0: 2, put1: "forge:ingots/platinum", n1: 1, put2: "anoxia:stone/polished_andesite", n2: 1, rsflux: 8000, alloy: "simple" }, //Andesite Alloy

        //EnderIO
        { get: "enderio:copper_alloy_ingot", n0: 1, put1: "forge:ingots/copper", n1: 1, put2: "forge:silicon", n2: 1, rsflux: 4000, alloy: "ender" }, //Copper Alloy
        { get: "enderio:energetic_alloy_ingot", n0: 1, put1: "forge:dusts/redstone", n1: 1, put2: "forge:ingots/electrum", n2: 1, put3: "forge:dusts/glowstone", n3: 1, rsflux: 18000, alloy: "complex" }, //Energetic Alloy
        { get: "enderio:vibrant_alloy_ingot", n0: 1, put1: "forge:ingots/energetic_alloy", n1: 1, put2: "forge:ender_pearls", n2: 1, put3: "forge:ingots/rose_gold", n3: 1, rsflux: 24000, alloy: "complex" }, //Vibrant Alloy
        { get: "enderio:redstone_alloy_ingot", n0: 1, put1: "forge:ingots/red_alloy", n1: 1, put2: "forge:silicon", n2: 1, put3: "forge:ingots/graphite", n3: 1, rsflux: 4000, alloy: "complex" }, //Redstone Alloy
        { get: "enderio:conductive_alloy_ingot", n0: 1, put1: "forge:ingots/redstone_alloy", n1: 1, put2: "forge:ingots/iron", n2: 1, put3: "forge:ingots/copper_alloy", n3: 1, rsflux: 8000, alloy: "complex" }, //Conductive Alloy
        { get: "enderio:pulsating_alloy_ingot", n0: 1, put1: "forge:ingots/iron", n1: 1, put2: "forge:ender_pearls", n2: 1, rsflux: 18000, alloy: "ender" }, //Pulsating Alloy
        { get: "enderio:dark_steel_ingot", n0: 1, put1: "forge:ingots/iron", n1: 1, put2: "forge:dusts/coal", n2: 8, put3: "forge:obsidian", n3: 1, rsflux: 48000, alloy: "complex" }, //DarkSteel Ingot
        { get: "enderio:soularium_ingot", n0: 1, put1: "forge:ingots/cognitive_alloy", n1: 1, put2: "forge:ingots/gold", n2: 1, rsflux: 24000, alloy: "ender" }, //Soularium Ingot
        { get: "enderio:end_steel_ingot", n0: 1, put1: "forge:end_stones", n1: 1, put2: "forge:ingots/dark_steel", n2: 1, put3: "forge:obsidian", n3: 1, rsflux: 36000, alloy: "complex" }, //EndSteel Ingot

        //Thermal
        { get: "thermal:signalum_ingot", n0: 4, put1: "forge:ingots/rose_gold", n1: 3, put2: "forge:ingots/silver", n2: 1, put3: "forge:dusts/redstone", n3: 10, rsflux: 24000, alloy: "complex" }, //Signalum
        { get: "thermal:lumium_ingot", n0: 4, put1: "forge:ingots/energetic_alloy", n1: 3, put2: "forge:ingots/silver", n2: 1, put3: "forge:dusts/glowstone", n3: 4, rsflux: 24000, alloy: "complex" }, //Lumium
        { get: "thermal:enderium_ingot", n0: 2, put1: "forge:ingots/vibrant_alloy", n1: 3, put2: "forge:ingots/silver", n2: 1, put3: "forge:dusts/ender_pearl", n3: 4, rsflux: 36000, alloy: "complex" }, //Enderium
        { get: "thermal:steel_ingot", n0: 1, put1: "forge:ingots/iron", n1: 1, put2: "forge:dusts/coal", n2: 8, rsflux: 18000, alloy: "simple" }, //Steel - Coal
        { get: "thermal:rose_gold_ingot", n0: 2, put1: "forge:ingots/gold", n1: 1, put2: "forge:ingots/copper", n2: 1, rsflux: 18000, alloy: "simple" }, //Rose Gold
        { get: "thermal:bronze_ingot", n0: 4, put1: "forge:ingots/copper", n1: 3, put2: "forge:ingots/tin", n2: 1, rsflux: 18000, alloy: "simple" }, //Bronze
        { get: "thermal:electrum_ingot", n0: 2, put1: "forge:ingots/gold", n1: 1, put2: "forge:ingots/silver", n2: 1, rsflux: 18000, alloy: "simple" }, //Electrum
        { get: "thermal:invar_ingot", n0: 3, put1: "forge:ingots/iron", n1: 2, put2: "forge:ingots/nickel", n2: 1, rsflux: 18000, alloy: "simple" }, //Invar
        { get: "thermal:constantan_ingot", n0: 2, put1: "forge:ingots/copper", n1: 1, put2: "forge:ingots/nickel", n2: 1, rsflux: 18000, alloy: "simple" }, //Constantan

        //Thermal Endergy
        { get: "thermalendergy:prismalium_ingot", n0: 2, put1: "forge:dusts/prismarine", n1: 4, put2: "forge:ingots/enderium", n2: 1, put3: "forge:ingots/end_steel", n3: 1, rsflux: 48000, alloy: "complex" },
        { get: "thermalendergy:melodium_ingot", n0: 2, put1: "forge:fruits/chorusfruit", n1: 4, put2: "forge:ingots/prismalium", n2: 1, put3: "forge:ingots/netherite", n3: 1, rsflux: 60000, alloy: "complex" },
        { get: "thermalendergy:stellarium_ingot", n0: 2, put1: "forge:nether_stars", n1: 1, put2: "forge:ingots/melodium", n2: 1, put3: "forge:ingots/aethersteel", n3: 1, rsflux: 72000, alloy: "complex" },
    ];
    AlloyPattern.forEach((recipe) => {
        //Remove
        event.remove({ output: recipe.get });

        //Recipes
        if (recipe.alloy === "simple") {
            AlloyImmersiveAlloy(recipe);
            AlloyImmersiveArc(recipe);
            AlloyEnderIO2(recipe);
            AlloyThermal2(recipe);
        }

        //EnderIO Sup
        else if (recipe.alloy === "ender") {
            AlloyEnderIO2(recipe);
            AlloyThermal2(recipe);
        }

        //Complex
        else if (recipe.alloy === "complex") {
            AlloyEnderIO3(recipe);
            AlloyThermal3(recipe);
        }
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Alloy Alt
    const AlloyAltPattern = [
        //EnderIO
        { get: "enderio:dark_steel_ingot", n0: 1, put1: "forge:ingots/iron", n1: 1, put2: "forge:dusts/coal_coke", n2: 4, put3: "forge:obsidian", n3: 1, rsflux: 48000, alloy: "complex" }, //DarkSteel Ingot - Coke
        { get: "enderio:dark_steel_ingot", n0: 1, put1: "forge:ingots/steel", n1: 1, put2: "forge:obsidian", n2: 1, rsflux: 24000, alloy: "ender" }, //DarkSteel Ingot - Steel Alternative

        //Thermal
        { get: "thermal:steel_ingot", n0: 1, put1: "forge:ingots/iron", n1: 1, put2: "forge:dusts/coal_coke", n2: 4, rsflux: 18000, alloy: "simple" }, //Steel - Coke
    ];
    AlloyAltPattern.forEach((recipe) => {
        //Recipes
        if (recipe.alloy === "simple") {
            AlloyImmersiveAlloy(recipe);
            AlloyImmersiveArc(recipe);
            AlloyEnderIO2(recipe);
            AlloyThermal2(recipe);
        }

        //EnderIO Sup
        else if (recipe.alloy === "ender") {
            AlloyEnderIO2(recipe);
            AlloyThermal2(recipe);
        }

        //Complex
        else if (recipe.alloy === "complex") {
            AlloyEnderIO3(recipe);
            AlloyThermal3(recipe);
        }
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Ingot
    const IngotPattern = [
        //Create
        { ingot: "create:andesite_alloy", block: "forge:storage_blocks/andesite_alloy" },

        //EnderIO
        { ingot: "enderio:copper_alloy_ingot", nugget: "forge:nuggets/copper_alloy", block: "forge:storage_blocks/copper_alloy" },
        { ingot: "enderio:energetic_alloy_ingot", nugget: "forge:nuggets/energetic_alloy", block: "forge:storage_blocks/energetic_alloy" },
        { ingot: "enderio:vibrant_alloy_ingot", nugget: "forge:nuggets/vibrant_alloy", block: "forge:storage_blocks/vibrant_alloy" },
        { ingot: "enderio:redstone_alloy_ingot", nugget: "forge:nuggets/redstone_alloy", block: "forge:storage_blocks/redstone_alloy" },
        { ingot: "enderio:conductive_alloy_ingot", nugget: "forge:nuggets/conductive_alloy", block: "forge:storage_blocks/conductive_alloy" },
        { ingot: "enderio:pulsating_alloy_ingot", nugget: "forge:nuggets/pulsating_alloy", block: "forge:storage_blocks/pulsating_alloy" },
        { ingot: "enderio:dark_steel_ingot", nugget: "forge:nuggets/dark_steel", block: "forge:storage_blocks/dark_steel" },
        { ingot: "enderio:soularium_ingot", nugget: "forge:nuggets/soularium", block: "forge:storage_blocks/soularium" },
        { ingot: "enderio:end_steel_ingot", nugget: "forge:nuggets/end_steel", block: "forge:storage_blocks/end_steel" },

        //Thermal
        { ingot: "thermal:signalum_ingot", dust: "forge:dusts/signalum", nugget: "forge:nuggets/signalum", block: "forge:storage_blocks/signalum" },
        { ingot: "thermal:lumium_ingot", dust: "forge:dusts/lumium", nugget: "forge:nuggets/lumium", block: "forge:storage_blocks/lumium" },
        { ingot: "thermal:enderium_ingot", dust: "forge:dusts/enderium", nugget: "forge:nuggets/enderium", block: "forge:storage_blocks/enderium" },
        { ingot: "thermal:steel_ingot", dust: "forge:dusts/steel", nugget: "forge:nuggets/steel", block: "forge:storage_blocks/steel" },
        { ingot: "thermal:rose_gold_ingot", dust: "forge:dusts/rose_gold", nugget: "forge:nuggets/rose_gold", block: "forge:storage_blocks/rose_gold" },
        { ingot: "thermal:bronze_ingot", dust: "forge:dusts/bronze", nugget: "forge:nuggets/bronze", block: "forge:storage_blocks/bronze" },
        { ingot: "thermal:electrum_ingot", dust: "forge:dusts/electrum", nugget: "forge:nuggets/electrum", block: "forge:storage_blocks/electrum" },
        { ingot: "thermal:invar_ingot", dust: "forge:dusts/invar", nugget: "forge:nuggets/invar", block: "forge:storage_blocks/invar" },
        { ingot: "thermal:constantan_ingot", dust: "forge:dusts/constantan", nugget: "forge:nuggets/constantan", block: "forge:storage_blocks/constantan" },

        //Thermal Endergy
        { ingot: "thermalendergy:prismalium_ingot", dust: "forge:dusts/prismalium", nugget: "forge:nuggets/prismalium", block: "forge:storage_blocks/prismalium" },
        { ingot: "thermalendergy:melodium_ingot", dust: "forge:dusts/melodium", nugget: "forge:nuggets/melodium", block: "forge:storage_blocks/melodium" },
        { ingot: "thermalendergy:stellarium_ingot", dust: "forge:dusts/stellarium", nugget: "forge:nuggets/stellarium", block: "forge:storage_blocks/stellarium" },
    ];
    IngotPattern.forEach((recipe) => {
        ////Smelting
        if (recipe.dust) AlloySmelter(recipe);

        //Thermal - Press
        if (recipe.nugget) AlloyThermalPack(recipe.ingot, recipe.nugget); //Nugget to Ingot
        if (recipe.block) AlloyThermalPack(recipe.block, recipe.ingot); //Ingot to Block

        //Thermal - unPress
        if (recipe.nugget) AlloyThermalUnpack(recipe.nugget, recipe.ingot); //Ingot to Nugget
        if (recipe.block) AlloyThermalUnpack(recipe.ingot, recipe.block); //Block to Ingot
    });
    //#endregion
});
