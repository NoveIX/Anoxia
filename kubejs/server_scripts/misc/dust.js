ServerEvents.recipes((event) => {
    //#region Remove ID
    const RmRecipeID = [
        ////Gem
        //Coal
        "immersiveengineering:crusher/coal",
        "immersiveengineering:crusher/coal_block",
        "jaopca:immersiveengineering.material_to_dust.coal",
        "enderio:sag_milling/coal",
        "mekanism:processing/coal/to_dust",
        "jaopca:thermal_expansion.material_to_dust.coal",

        //Charcoal
        "mekanism:crushing/charcoal_dust",

        //Coke
        "createaddition:compat/immersiveengineering/crushing/coal_coke",
        "createaddition:compat/immersiveengineering/crushing/coke_block",
        "immersiveengineering:crusher/coke",
        "immersiveengineering:crusher/coke_block",

        //Apatite
        "jaopca:immersiveengineering.material_to_dust.apatite",
        "jaopca:mekanism.material_to_dust.apatite",
        "thermal:machines/pulverizer/pulverizer_apatite",

        //Cinnabar
        "jaopca:immersiveengineering.material_to_dust.cinnabar",
        "jaopca:mekanism.material_to_dust.cinnabar",
        "thermal:machines/pulverizer/pulverizer_cinnabar",

        //Niter
        "jaopca:immersiveengineering.material_to_dust.niter",
        "jaopca:mekanism.material_to_dust.niter",
        "thermal:machines/pulverizer/pulverizer_niter",

        //Sulfur
        "jaopca:immersiveengineering.material_to_dust.sulfur",
        "jaopca:mekanism.material_to_dust.sulfur",
        "thermal:machines/pulverizer/pulverizer_sulfur",

        //Lapis
        "jaopca:immersiveengineering.material_to_dust.lapis",
        "enderio:sag_milling/lapis",
        "mekanism:processing/lapis_lazuli/to_dust",
        "thermal:machines/pulverizer/pulverizer_lapis",

        //Diamond
        "createaddition:crushing/diamond",
        "jaopca:immersiveengineering.material_to_dust.diamond",
        "mekanism:processing/diamond/to_dust",
        "thermal:machines/pulverizer/pulverizer_diamond",

        //Emerald
        "jaopca:immersiveengineering.material_to_dust.emerald",
        "mekanism:processing/emerald/to_dust",
        "thermal:machines/pulverizer/pulverizer_emerald",

        //Quartz
        "jaopca:immersiveengineering.material_to_dust.quartz",
        "enderio:sag_milling/quartz",
        "mekanism:processing/quartz/to_dust",
        "thermal:machines/pulverizer/pulverizer_quartz",

        //Ruby
        "jaopca:immersiveengineering.material_to_dust.ruby",
        "jaopca:mekanism.material_to_dust.ruby",

        //Sapphire
        "jaopca:immersiveengineering.material_to_dust.sapphire",
        "jaopca:mekanism.material_to_dust.sapphire",

        ////Metal
        //Iron
        "bloodmagic:arc/dustsfrom_ingot_iron",
        "immersiveengineering:crusher/ingot_iron",
        "enderio:sag_milling/iron",
        "mekanism:processing/iron/dust/from_ingot",
        "thermal:machines/pulverizer/pulverizer_iron_ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_iron_plate_to_dust",

        //Gold
        "bloodmagic:arc/dustsfrom_ingot_gold",
        "immersiveengineering:crusher/ingot_gold",
        "enderio:sag_milling/gold",
        "mekanism:processing/gold/dust/from_ingot",
        "thermal:machines/pulverizer/pulverizer_gold_ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_gold_plate_to_dust",

        //Copper
        "bloodmagic:arc/dustsfrom_ingot_copper",
        "immersiveengineering:crusher/ingot_copper",
        "enderio:sag_milling/copper",
        "mekanism:processing/copper/dust/from_ingot",
        "thermal:machines/pulverizer/pulverizer_copper_ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_copper_plate_to_dust",

        //Netherite
        "mekanism:processing/netherite/ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_netherite_ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_netherite_plate_to_dust",

        //Tin
        "jaopca:bloodmagic.material_to_dust.tin",
        "immersiveengineering:crusher/ingot_tin",
        "mekanism:processing/tin/dust/from_ingot",
        "thermal:machines/pulverizer/pulverizer_tin_ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_tin_plate_to_dust",

        //Lead
        "jaopca:bloodmagic.material_to_dust.lead",
        "immersiveengineering:crusher/ingot_lead",
        "mekanism:processing/lead/dust/from_ingot",
        "thermal:machines/pulverizer/pulverizer_lead_ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_lead_plate_to_dust",

        //Silver
        "jaopca:bloodmagic.material_to_dust.silver",
        "immersiveengineering:crusher/ingot_silver",
        "jaopca:mekanism.material_to_dust.silver",
        "thermal:machines/pulverizer/pulverizer_silver_ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_silver_plate_to_dust",

        //Nickel
        "jaopca:bloodmagic.material_to_dust.nickel",
        "immersiveengineering:crusher/ingot_nickel",
        "jaopca:mekanism.material_to_dust.nickel",
        "thermal:machines/pulverizer/pulverizer_nickel_ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_nickel_plate_to_dust",

        //Steel
        "createaddition:compat/immersiveengineering/crushing/steel_ingot",
        "immersiveengineering:crusher/ingot_steel",
        "mekanism:processing/steel/ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_steel_ingot_to_dust",

        //RoseGold
        "immersiveengineering:crusher/ingot_rose_gold",
        "thermal:machines/pulverizer/pulverizer_rose_gold_ingot_to_dust",

        //Signalum
        "thermal:signalum_dust_4",
        "thermal:machines/pulverizer/pulverizer_signalum_ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_signalum_plate_to_dust",

        //Lumium
        "thermal:lumium_dust_4",
        "thermal:machines/pulverizer/pulverizer_lumium_ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_lumium_plate_to_dust",

        //Enderium
        "thermal:enderium_dust_2",
        "thermal:machines/pulverizer/pulverizer_enderium_ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_enderium_plate_to_dust",

        //Bronze
        "immersiveengineering:crusher/ingot_bronze",
        "mekanism:processing/bronze/dust/from_ingot",
        "mekanism:processing/bronze/dust/from_infusing",
        "thermal:bronze_dust_4",
        "thermal:machines/pulverizer/pulverizer_bronze_ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_bronze_plate_to_dust",

        //Electrum
        "immersiveengineering:crusher/ingot_electrum",
        "immersiveengineering:crafting/electrum_mix",
        "thermal:machines/pulverizer/pulverizer_electrum_ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_electrum_plate_to_dust",

        //Invar
        "immersiveengineering:crusher/ingot_invar",
        "thermal:invar_dust_3",
        "thermal:machines/pulverizer/pulverizer_invar_ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_invar_plate_to_dust",

        //Constatan
        "immersiveengineering:crusher/ingot_constantan",
        "immersiveengineering:crafting/constantan_mix",
        "thermal:machines/pulverizer/pulverizer_constantan_ingot_to_dust",
        "thermal:machines/pulverizer/pulverizer_constantan_plate_to_dust",

        ////Other
        //Ender
        "ae2:inscriber/ender_dust",
        "enderio:sag_milling/ender_pearl",
        "thermal:machines/pulverizer/pulverizer_ender_pearl",

        //Obsidian
        "enderio:sag_milling/obsidian",

        ////Mod
        //Redstone arsenal
        "redstone_arsenal:materials/flux_dust",
        "thermal:compat/redstone_arsenal/pulverizer_rsa_flux_ingot_to_dust",

        //Thermal Endergy
        "thermalendergy:machine/pulverizer/pulverizer_prismalium_ingot_to_dust",
        "thermalendergy:machine/pulverizer/pulverizer_melodium_ingot_to_dust",
        "thermalendergy:machine/pulverizer/pulverizer_stellarium_ingot_to_dust",
    ];
    //RmRecipeID.forEach((id) => event.remove({ id: id }));

    //#endregion

    //// # =================================================================================================== #

    //#region func Dust
    function DustCrafting(recipe) {
        if (recipe.put.startsWith("forge:ingots")) {
            event.shapeless(recipe.get, [`#${recipe.put}`, "ae2:tiny_tnt"]);
        } else {
            event.shapeless(recipe.get, [`#${recipe.put}`, "immersiveengineering:hammer"]);
        }

        if (recipe.put === "forge:gems/ruby" || recipe.put === "forge:gems/sapphire") {
            event.shapeless(recipe.get, [`#${recipe.put}`, "thermal:earth_charge"]);
        }
    }

    //// # =================================================================================================== #

    function DustBlood(recipe) {
        if (recipe.ore) {
            event.custom({
                type: "bloodmagic:alchemytable",
                input: [{ tag: recipe.ore }, { tag: "bloodmagic:arc/cuttingfluid" }],
                output: { count: 2, item: recipe.get },
                syphon: 400,
                ticks: 200,
                upgradeLevel: 1,
            });
        }

        //Blood Magic Pulverizer
        event.custom({
            type: "bloodmagic:arc",
            consumeingredient: false,
            input: { tag: recipe.put },
            inputsize: 1,
            mainoutputchance: 0.0,
            output: { item: recipe.get },
            tool: { tag: "bloodmagic:arc/explosive" },
        });
    }

    //// # =================================================================================================== #

    function DustCreate(recipe) {
        if (recipe.create) {
            event.custom({
                type: "create:milling",
                ingredients: [{ tag: recipe.put }],
                results: recipe.create.get,
                processingTime: recipe.processing,
            });
        } else {
            event.custom({
                type: "create:milling",
                ingredients: [{ tag: recipe.put }],
                results: [{ item: recipe.get }],
                processingTime: recipe.processing,
            });
        }
    }

    //// # =================================================================================================== #

    function DustImmersive(recipe) {
        if (recipe.immersive) {
            event.custom({
                type: "immersiveengineering:crusher",
                input: { tag: recipe.put },
                result: recipe.immersive.primary,
                secondaries: recipe.immersive.secondary,
                energy: recipe.rsflux,
            });
        } else {
            event.custom({
                type: "immersiveengineering:crusher",
                input: { tag: recipe.put },
                result: { base_ingredient: { item: recipe.get } },
                secondaries: [],
                energy: recipe.rsflux,
            });
        }
    }

    //// # =================================================================================================== #

    function DustEnderIO(recipe) {
        if (recipe.enderio) {
            event.custom({
                type: "enderio:sag_milling",
                input: { tag: recipe.put },
                outputs: recipe.enderio.get,
                energy: recipe.rsflux,
                bonus: "none",
            });
        } else {
            event.custom({
                type: "enderio:sag_milling",
                input: { tag: recipe.put },
                outputs: [{ item: recipe.get }],
                energy: recipe.rsflux,
                bonus: "none",
            });
        }
    }

    //// # =================================================================================================== #

    function DustMekanism(recipe) {
        event.custom({
            type: "mekanism:crushing",
            input: { ingredient: { tag: recipe.put } },
            output: { item: recipe.get },
        });
    }

    //// # =================================================================================================== #

    function DustThermal(recipe) {
        if (recipe.thermal) {
            event.custom({
                type: "thermal:pulverizer",
                ingredient: { tag: recipe.put },
                result: recipe.thermal.get,
                energy: recipe.rsflux,
            });
        } else {
            event.custom({
                type: "thermal:pulverizer",
                ingredient: { tag: recipe.put },
                result: [{ item: recipe.get }],
                energy: recipe.rsflux,
            });
        }
    }
    //#endregion

    //// # =================================================================================================== #

    //#region Dust
    const DustPattern = [
        //Gem
        {
            get: "mekanism:dust_coal",
            put: "anoxia:gems/coal",
            extra: "thermal:sulfur_dust",
            create: {
                get: [{ item: "mekanism:dust_coal" }, { chance: 0.1, item: "thermal:sulfur_dust" }],
            },
            immersive: {
                primary: { item: "mekanism:dust_coal" },
                secondary: [{ chance: 0.1, output: { item: "thermal:sulfur_dust" } }],
            },
            enderio: {
                get: [
                    { chance: 1.0, item: { item: "mekanism:dust_coal" }, optional: false },
                    { chance: 0.1, item: { item: "mekanism:dust_coal" }, optional: false },
                    { chance: 0.1, item: { item: "thermal:sulfur_dust" }, optional: true },
                ],
            },
            thermal: {
                get: [
                    { chance: 1.0, item: "mekanism:dust_coal" },
                    { chance: 0.1, item: "thermal:sulfur_dust" },
                ],
            },
            rsflux: 1000,
            processing: 100,
        },
        {
            get: "mekanism:dust_charcoal",
            put: "anoxia:gems/charcoal",
            extra: "thermal:sulfur_dust",
            create: {
                get: [{ item: "mekanism:dust_charcoal" }, { chance: 0.1, item: "thermal:sulfur_dust" }],
            },
            immersive: {
                primary: { item: "mekanism:dust_charcoal" },
                secondary: [{ chance: 0.1, output: { item: "thermal:sulfur_dust" } }],
            },
            enderio: {
                get: [
                    { chance: 1.0, item: { item: "mekanism:dust_charcoal" }, optional: false },
                    { chance: 0.1, item: { item: "mekanism:dust_charcoal" }, optional: false },
                    { chance: 0.1, item: { item: "thermal:sulfur_dust" }, optional: true },
                ],
            },
            thermal: {
                get: [
                    { chance: 1.0, item: "mekanism:dust_charcoal" },
                    { chance: 0.1, item: "thermal:sulfur_dust" },
                ],
            },
            rsflux: 1000,
            processing: 100,
        },
        {
            get: "immersiveengineering:dust_coke",
            put: "forge:coal_coke",
            extra: "thermal:sulfur_dust",
            create: {
                get: [{ item: "immersiveengineering:dust_coke" }, { chance: 0.1, count: 2, item: "thermal:sulfur_dust" }],
            },
            immersive: {
                primary: { item: "immersiveengineering:dust_coke" },
                secondary: [{ chance: 0.1, output: { count: 2, item: "thermal:sulfur_dust" } }],
            },
            enderio: {
                get: [
                    { chance: 1.0, item: { item: "immersiveengineering:dust_coke" }, optional: false },
                    { chance: 0.1, item: { item: "immersiveengineering:dust_coke" }, optional: false },
                    { chance: 0.1, item: { count: 2, item: "thermal:sulfur_dust" }, optional: true },
                ],
            },
            thermal: {
                get: [
                    { chance: 1.0, item: "immersiveengineering:dust_coke" },
                    { chance: 0.1, count: 2, item: "thermal:sulfur_dust" },
                ],
            },
            rsflux: 2000,
            processing: 200,
        },
        { get: "thermal:apatite_dust", put: "forge:gems/apatite", rsflux: 2000, processing: 200 },
        { get: "thermal:cinnabar_dust", put: "forge:gems/cinnabar", rsflux: 2000, processing: 200 },
        { get: "thermal:niter_dust", put: "forge:gems/niter", rsflux: 1000, processing: 100 },
        { get: "thermal:sulfur_dust", put: "forge:gems/sulfur", rsflux: 1000, processing: 100 },
        { get: "thermal:lapis_dust", put: "forge:gems/lapis", rsflux: 2000, processing: 100 },
        { get: "thermal:diamond_dust", put: "forge:gems/diamond", rsflux: 8000, processing: 800 },
        { get: "thermal:emerald_dust", put: "forge:gems/emerald", rsflux: 8000, processing: 800 },
        {
            get: "thermal:quartz_dust",
            put: "forge:gems/quartz",
            create: {
                get: [{ item: "thermal:quartz_dust" }, { chance: 0.1, item: "thermal:quartz_dust" }],
            },
            immersive: {
                primary: { item: "thermal:quartz_dust" },
                secondary: [{ chance: 0.1, output: { item: "thermal:quartz_dust" } }],
            },
            enderio: {
                get: [
                    { chance: 1.0, item: { item: "thermal:quartz_dust" }, optional: false },
                    { chance: 0.1, item: { item: "thermal:quartz_dust" }, optional: false },
                ],
            },
            thermal: {
                get: [
                    { chance: 1.0, item: "thermal:quartz_dust" },
                    { chance: 0.1, item: "thermal:quartz_dust" },
                ],
            },
            rsflux: 2000,
            processing: 200,
        },
        { get: "thermal:ruby_dust", put: "forge:gems/ruby", rsflux: 6000, processing: 600 },
        { get: "thermal:sapphire_dust", put: "forge:gems/sapphire", rsflux: 6000, processing: 600 },

        ////Metal
        { get: "thermal:iron_dust", put: "forge:ingots/iron", rsflux: 4000, processing: 400 },
        { get: "thermal:gold_dust", put: "forge:ingots/gold", rsflux: 4000, processing: 400 },
        { get: "thermal:copper_dust", put: "forge:ingots/copper", ore: "forge:ores/copper", rsflux: 4000, processing: 400 },
        { get: "thermal:netherite_dust", put: "forge:ingots/netherite", rsflux: 12000, processing: 1200 },
        { get: "thermal:tin_dust", put: "forge:ingots/tin", rsflux: 4000, processing: 400 },
        { get: "thermal:lead_dust", put: "forge:ingots/lead", rsflux: 4000, processing: 400 },
        { get: "thermal:silver_dust", put: "forge:ingots/silver", rsflux: 4000, processing: 400 },
        { get: "thermal:nickel_dust", put: "forge:ingots/nickel", rsflux: 4000, processing: 400 },

        //Thermal Blend
        { get: "thermal:steel_dust", put: "forge:ingots/steel", rsflux: 6000, processing: 600 },
        { get: "thermal:rose_gold_dust", put: "forge:ingots/rose_gold", rsflux: 6000, processing: 600 },
        { get: "thermal:bronze_dust", put: "forge:ingots/bronze", rsflux: 6000, processing: 600 },
        { get: "thermal:electrum_dust", put: "forge:ingots/electrum", rsflux: 6000, processing: 600 },
        { get: "thermal:invar_dust", put: "forge:ingots/invar", rsflux: 6000, processing: 600 },
        { get: "thermal:constantan_dust", put: "forge:ingots/constantan", rsflux: 6000, processing: 600 },
        { get: "thermal:signalum_dust", put: "forge:ingots/signalum", rsflux: 8000, processing: 600 },
        { get: "thermal:lumium_dust", put: "forge:ingots/lumium", rsflux: 8000, processing: 600 },
        { get: "thermal:enderium_dust", put: "forge:ingots/enderium", rsflux: 12000, processing: 1200 },

        //Other
        { get: "thermal:ender_pearl_dust", put: "forge:ender_pearls", rsflux: 4000, processing: 400 },

        //Redstone Arsenal
        { get: "redstone_arsenal:flux_dust", put: "forge:ingots/flux", rsflux: 12000, processing: 1200 },

        //Thermal Endergy
        { get: "thermalendergy:prismalium_dust", put: "forge:ingots/prismalium", rsflux: 16000, processing: 1600 },
        { get: "thermalendergy:melodium_dust", put: "forge:ingots/melodium", rsflux: 20000, processing: 2000 },
        { get: "thermalendergy:stellarium_dust", put: "forge:ingots/stellarium", rsflux: 24000, processing: 2400 },
    ];

    DustPattern.forEach((recipe) => {
        //Recipe
        //DustCrafting(recipe);
        //DustBlood(recipe);
        //DustCreate(recipe);
        //DustImmersive(recipe);
        //DustEnderIO(recipe);
        //DustMekanism(recipe);
        //DustThermal(recipe);
    });
    //#endregion
});
