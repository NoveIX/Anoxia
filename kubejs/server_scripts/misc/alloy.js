// priority:996
ServerEvents.recipes((event) => {
    //#region Remove ID
    const RmRecipeID = [
        //Minecraft
        "minecraft:netherite_ingot",
        "thermal:machines/smelter/smelter_alloy_netherite",

        //Aethersteel

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
        "thermal:fire_charge/signalum_ingot_4",
        "thermal:machines/smelter/smelter_alloy_signalum",
        "thermal:fire_charge/lumium_ingot_4",
        "thermal:machines/smelter/smelter_alloy_lumium",
        "thermal:fire_charge/enderium_ingot_2",
        "thermal:machines/smelter/smelter_alloy_enderium",
        "thermal:machines/smelter/smelter_alloy_steel",
        "thermal:machines/smelter/smelter_alloy_rose_gold",
        "thermal:fire_charge/bronze_ingot_4",
        "thermal:machines/smelter/smelter_alloy_bronze",
        "thermal:fire_charge/electrum_ingot_2",
        "thermal:machines/smelter/smelter_alloy_electrum",
        "thermal:fire_charge/invar_ingot_3",
        "thermal:machines/smelter/smelter_alloy_invar",
        "thermal:fire_charge/constantan_ingot_2",
        "thermal:machines/smelter/smelter_alloy_constantan",

        ////Thermal Endergy
        "thermalendergy:machine/smelter/prismalium_ingot",
        "thermalendergy:machine/smelter/melodium_ingot",
        "thermalendergy:machine/smelter/stellarium_ingot",
    ];
    RmRecipeID.forEach((id) => event.remove({ id: id }));
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
    //#endregion

    //// # =================================================================================================== #

    //#region Alloy
    const AlloyPattern = [
        //Anoxia
        { get: "anoxia:modularium_ingot", n0: 1, put1: "forge:ingots/vibrant_alloy", n1: 1, put2: "forge:ingots/enderium", n2: 1, put3: "forge:ingots/electrotine_alloy", n3: 1, rsflux: 60000, alloy: "complex" }, //Modularium

        //Minecraft
        { get: "minecraft:netherite_ingot", n0: 1, put1: "forge:ingots/netherite_scrap", n1: 4, put2: "forge:ingots/gold", n2: 4, rsflux: 24000, alloy: "simple" }, //Netherite

        //Aethersteel
        { get: "aethersteel:aethersteel_ingot", n0: 1, put1: "forge:ingots/netherite", n1: 4, put2: "forge:ingots/aethersteel_scrap", n2: 4, rsflux: 48000, alloy: "ender" }, // Aetherstell

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
        { get: "thermal:steel_ingot", n0: 1, put1: "forge:ingots/iron", n1: 1, put2: "forge:dusts/coal", n2: 8, rsflux: 18000, alloy: "simple" }, //Steel - Coal
        { get: "thermal:rose_gold_ingot", n0: 2, put1: "forge:ingots/gold", n1: 1, put2: "forge:ingots/copper", n2: 1, rsflux: 18000, alloy: "simple" }, //Rose Gold
        { get: "thermal:signalum_ingot", n0: 4, put1: "forge:ingots/rose_gold", n1: 3, put2: "forge:ingots/silver", n2: 1, put3: "forge:dusts/redstone", n3: 10, rsflux: 24000, alloy: "complex" }, //Signalum
        { get: "thermal:lumium_ingot", n0: 4, put1: "forge:ingots/energetic_alloy", n1: 3, put2: "forge:ingots/silver", n2: 1, put3: "forge:dusts/glowstone", n3: 4, rsflux: 24000, alloy: "complex" }, //Lumium
        { get: "thermal:enderium_ingot", n0: 2, put1: "forge:ingots/vibrant_alloy", n1: 3, put2: "forge:ingots/silver", n2: 1, put3: "forge:dusts/ender_pearl", n3: 4, rsflux: 36000, alloy: "complex" }, //Enderium
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
});
