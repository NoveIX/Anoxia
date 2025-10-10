ServerEvents.recipes((event) => {
    //#region Remove ID
    const RmPlateID = [
        //Ad Astra
        "jaopca:thermal_expansion.material_to_plate.desh",
        "thermal:machines/press/press_desh_ingot_to_plate",
        "jaopca:thermal_expansion.material_to_plate.ostrum",
        "thermal:machines/press/press_ostrum_ingot_to_plate",
        "jaopca:thermal_expansion.material_to_plate.calorite",
        "thermal:machines/press/press_calorite_ingot_to_plate",

        //Thermal Compat
        "thermal:compat/immersiveengineering/press_ie_aluminum_ingot_to_plate",
        "jaopca:thermal_expansion.material_to_plate.zinc",
        "jaopca:thermal_expansion.material_to_plate.osmium",
        "thermal:compat/immersiveengineering/press_ie_uranium_ingot_to_plate",

        //Thermal Endergy
        "thermalendergy:machine/press/press_prismalium_ingot_to_plate",
        "thermalendergy:machine/press/press_melodium_ingot_to_plate",
        "thermalendergy:machine/press/press_stellarium_ingot_to_plate",

        //Thermal Expansion
        "thermal:machines/press/press_iron_ingot_to_plate",
        "thermal:machines/press/press_gold_ingot_to_plate",
        "thermal:machines/press/press_copper_ingot_to_plate",
        "thermal:machines/press/press_netherite_ingot_to_plate",
        "thermal:machines/press/press_tin_ingot_to_plate",
        "thermal:machines/press/press_lead_ingot_to_plate",
        "thermal:machines/press/press_silver_ingot_to_plate",
        "thermal:machines/press/press_nickel_ingot_to_plate",
        "thermal:machines/press/press_steel_ingot_to_plate",
        "thermal:compat/immersiveengineering/press_ie_steel_ingot_to_plate",
        "thermal:machines/press/press_rose_gold_ingot_to_plate",
        "thermal:machines/press/press_signalum_ingot_to_plate",
        "thermal:machines/press/press_lumium_ingot_to_plate",
        "thermal:machines/press/press_enderium_ingot_to_plate",
        "thermal:machines/press/press_bronze_ingot_to_plate",
        "thermal:machines/press/press_electrum_ingot_to_plate",
        "thermal:machines/press/press_invar_ingot_to_plate",
        "thermal:machines/press/press_constantan_ingot_to_plate",
    ];
    RmPlateID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //// # =================================================================================================== #

    //#region Func Plate
    function PlateCrafting(recipe) {
        event.shapeless(recipe.get, [`#${recipe.put}`, `#${recipe.put}`, "immersiveengineering:hammer"]);
        event.custom({
            type: "ad_astra:hammering",
            ingredients: [{ tag: recipe.put }, { tag: recipe.put }, { item: "ad_astra:hammer" }],
            result: {
                item: recipe.get,
                count: 1,
            },
        });
    }

    function PlateCreate(recipe) {
        event.custom({
            type: "create:pressing",
            ingredients: [{ tag: recipe.put }],
            results: [{ item: recipe.get }],
        });
    }

    function PlateImmersive(recipe) {
        event.custom({
            type: "immersiveengineering:metal_press",
            mold: "immersiveengineering:mold_plate",
            input: { tag: recipe.put },
            result: { item: recipe.get },
            energy: recipe.rsflux,
        });
    }

    function PlateThermal(recipe) {
        event.custom({
            type: "thermal:press",
            ingredient: { tag: recipe.put },
            result: [{ item: recipe.get }],
            energy: recipe.rsflux,
        });
    }
    //#endregion

    //#region Plate
    const PlatePattern = [
        //Ad Astra
        { get: "ad_astra:desh_plate", put: "forge:ingots/desh", rsflux: 24000, metal: "special" },
        { get: "ad_astra:ostrum_plate", put: "forge:ingots/ostrum", rsflux: 28000, metal: "special" },
        { get: "ad_astra:calorite_plate", put: "forge:ingots/calorite", rsflux: 32000, metal: "special" },

        //Create
        { get: "create:brass_sheet", put: "forge:ingots/brass", rsflux: 6000 },
        { get: "createdeco:andesite_sheet", put: "forge:ingots/andesite_alloy", rsflux: 4000 },
        { get: "createdeco:industrial_iron_sheet", put: "createdeco:internal/ingots/industrial_iron_ingots", rsflux: 8000 },

        //ChemLib
        { get: "chemlib:lithium_plate", put: "forge:ingots/lithium", rsflux: 8000 },
        { get: "chemlib:beryllium_plate", put: "forge:ingots/beryllium", rsflux: 8000 },
        { get: "chemlib:sodium_plate", put: "forge:ingots/sodium", rsflux: 8000 },
        { get: "chemlib:magnesium_plate", put: "forge:ingots/magnesium", rsflux: 8000 },
        { get: "chemlib:aluminum_plate", put: "forge:ingots/aluminum", rsflux: 8000 },
        { get: "chemlib:potassium_plate", put: "forge:ingots/potassium", rsflux: 8000 },
        { get: "chemlib:calcium_plate", put: "forge:ingots/calcium", rsflux: 8000 },
        { get: "chemlib:scandium_plate", put: "forge:ingots/scandium", rsflux: 8000 },
        { get: "chemlib:titanium_plate", put: "forge:ingots/titanium", rsflux: 8000 },
        { get: "chemlib:vanadium_plate", put: "forge:ingots/vanadium", rsflux: 8000 },
        { get: "chemlib:chromium_plate", put: "forge:ingots/chromium", rsflux: 8000 },
        { get: "chemlib:manganese_plate", put: "forge:ingots/manganese", rsflux: 8000 },
        { get: "chemlib:cobalt_plate", put: "forge:ingots/cobalt", rsflux: 8000 },
        { get: "chemlib:zinc_plate", put: "forge:ingots/zinc", rsflux: 8000 },
        { get: "chemlib:gallium_plate", put: "forge:ingots/gallium", rsflux: 8000 },
        { get: "chemlib:rubidium_plate", put: "forge:ingots/rubidium", rsflux: 8000 },
        { get: "chemlib:strontium_plate", put: "forge:ingots/strontium", rsflux: 8000 },
        { get: "chemlib:yttrium_plate", put: "forge:ingots/yttrium", rsflux: 8000 },
        { get: "chemlib:zirconium_plate", put: "forge:ingots/zirconium", rsflux: 8000 },
        { get: "chemlib:niobium_plate", put: "forge:ingots/niobium", rsflux: 8000 },
        { get: "chemlib:molybdenum_plate", put: "forge:ingots/molybdenum", rsflux: 8000 },
        { get: "chemlib:ruthenium_plate", put: "forge:ingots/ruthenium", rsflux: 8000 },
        { get: "chemlib:rhodium_plate", put: "forge:ingots/rhodium", rsflux: 8000 },
        { get: "chemlib:palladium_plate", put: "forge:ingots/palladium", rsflux: 8000 },
        { get: "chemlib:cadmium_plate", put: "forge:ingots/cadmium", rsflux: 8000 },
        { get: "chemlib:indium_plate", put: "forge:ingots/indium", rsflux: 8000 },
        { get: "chemlib:cesium_plate", put: "forge:ingots/cesium", rsflux: 8000 },
        { get: "chemlib:barium_plate", put: "forge:ingots/barium", rsflux: 8000 },
        { get: "chemlib:lanthanum_plate", put: "forge:ingots/lanthanum", rsflux: 8000 },
        { get: "chemlib:cerium_plate", put: "forge:ingots/cerium", rsflux: 8000 },
        { get: "chemlib:praseodymium_plate", put: "forge:ingots/praseodymium", rsflux: 8000 },
        { get: "chemlib:neodymium_plate", put: "forge:ingots/neodymium", rsflux: 8000 },
        { get: "chemlib:samarium_plate", put: "forge:ingots/samarium", rsflux: 8000 },
        { get: "chemlib:europium_plate", put: "forge:ingots/europium", rsflux: 8000 },
        { get: "chemlib:gadolinium_plate", put: "forge:ingots/gadolinium", rsflux: 8000 },
        { get: "chemlib:terbium_plate", put: "forge:ingots/terbium", rsflux: 8000 },
        { get: "chemlib:dysprosium_plate", put: "forge:ingots/dysprosium", rsflux: 8000 },
        { get: "chemlib:holmium_plate", put: "forge:ingots/holmium", rsflux: 8000 },
        { get: "chemlib:erbium_plate", put: "forge:ingots/erbium", rsflux: 8000 },
        { get: "chemlib:thulium_plate", put: "forge:ingots/thulium", rsflux: 8000 },
        { get: "chemlib:ytterbium_plate", put: "forge:ingots/ytterbium", rsflux: 8000 },
        { get: "chemlib:lutetium_plate", put: "forge:ingots/lutetium", rsflux: 8000 },
        { get: "chemlib:hafnium_plate", put: "forge:ingots/hafnium", rsflux: 8000 },
        { get: "chemlib:tantalum_plate", put: "forge:ingots/tantalum", rsflux: 8000 },
        { get: "chemlib:tungsten_plate", put: "forge:ingots/tungsten", rsflux: 8000 },
        { get: "chemlib:rhenium_plate", put: "forge:ingots/rhenium", rsflux: 8000 },
        { get: "chemlib:osmium_plate", put: "forge:ingots/osmium", rsflux: 8000 },
        { get: "chemlib:iridium_plate", put: "forge:ingots/iridium", rsflux: 8000 },
        { get: "chemlib:platinum_plate", put: "forge:ingots/platinum", rsflux: 8000 },
        { get: "chemlib:thallium_plate", put: "forge:ingots/thallium", rsflux: 8000 },
        { get: "chemlib:bismuth_plate", put: "forge:ingots/bismuth", rsflux: 8000 },
        { get: "chemlib:polonium_plate", put: "forge:ingots/polonium", rsflux: 8000 },
        { get: "chemlib:francium_plate", put: "forge:ingots/francium", rsflux: 8000 },
        { get: "chemlib:radium_plate", put: "forge:ingots/radium", rsflux: 8000 },
        { get: "chemlib:actinium_plate", put: "forge:ingots/actinium", rsflux: 8000 },
        { get: "chemlib:thorium_plate", put: "forge:ingots/thorium", rsflux: 8000 },
        { get: "chemlib:protactinium_plate", put: "forge:ingots/protactinium", rsflux: 8000 },
        { get: "chemlib:uranium_plate", put: "forge:ingots/uranium", rsflux: 8000 },

        //Thermal
        { get: "thermal:iron_plate", put: "forge:ingots/iron", rsflux: 4000 },
        { get: "thermal:gold_plate", put: "forge:ingots/gold", rsflux: 4000 },
        { get: "thermal:copper_plate", put: "forge:ingots/copper", rsflux: 4000 },
        { get: "thermal:netherite_plate", put: "forge:ingots/netherite", rsflux: 12000, metal: "hard" },
        { get: "thermal:tin_plate", put: "forge:ingots/tin", rsflux: 4000 },
        { get: "thermal:lead_plate", put: "forge:ingots/lead", rsflux: 4000 },
        { get: "thermal:silver_plate", put: "forge:ingots/silver", rsflux: 4000 },
        { get: "thermal:nickel_plate", put: "forge:ingots/nickel", rsflux: 4000 },
        { get: "thermal:signalum_plate", put: "forge:ingots/signalum", rsflux: 8000, metal: "hard" },
        { get: "thermal:lumium_plate", put: "forge:ingots/lumium", rsflux: 8000, metal: "hard" },
        { get: "thermal:enderium_plate", put: "forge:ingots/enderium", rsflux: 12000, metal: "hard" },
        { get: "thermal:steel_plate", put: "forge:ingots/steel", rsflux: 6000 },
        { get: "thermal:rose_gold_plate", put: "forge:ingots/rose_gold", rsflux: 6000 },
        { get: "thermal:bronze_plate", put: "forge:ingots/bronze", rsflux: 6000 },
        { get: "thermal:electrum_plate", put: "forge:ingots/electrum", rsflux: 6000 },
        { get: "thermal:invar_plate", put: "forge:ingots/invar", rsflux: 6000 },
        { get: "thermal:constantan_plate", put: "forge:ingots/constantan", rsflux: 6000 },

        //Thermal Endergy
        { get: "thermalendergy:prismalium_plate", put: "forge:ingots/prismalium", rsflux: 16000, metal: "hard" },
        { get: "thermalendergy:melodium_plate", put: "forge:ingots/melodium", rsflux: 20000, metal: "hard" },
        { get: "thermalendergy:stellarium_plate", put: "forge:ingots/stellarium", rsflux: 24000, metal: "hard" },
    ];
    PlatePattern.forEach((recipe) => {
        //Remove
        event.remove({ output: recipe.get });

        //Ad Astra
        if (recipe.metal === "special") {
            PlateThermal(recipe);
        }

        //Hard Metal
        else if (recipe.metal === "hard") {
            PlateImmersive(recipe);
            PlateThermal(recipe);
        }

        //Other
        else {
            PlateImmersive(recipe);
            PlateThermal(recipe);
            PlateCreate(recipe);
            PlateCrafting(recipe);
        }
    });
    //#endregion
});
