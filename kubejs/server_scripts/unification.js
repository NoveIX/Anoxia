// priority:998
ServerEvents.recipes((event) => {
    const IngredientReplacements = [
        //Input	//Output
        ["industrialforegoing:plastic", "#forge:plastic"],
        ["immersiveengineering:coal_coke", "#forge:coal_coke"],
        ["cyclic:compressed_cobblestone", "anoxia:compressed_cobblestone"],
        ["thermal:sawdust", "#forge:dusts/wood"],
        ["thermal:saw_blade", "#forge:sawblades"],
        ["minecraft:smoker", "#anoxia:smokers"],
        ["minecraft:blast_furnace", "#anoxia:blastfurnaces"],
        ["#forge:storage_blocks/cobblestone", "anoxia:compressed_cobblestone"],

        //Create Unification
        ["create:copper_sheet", "#forge:plates/copper"],
        ["create:brass_sheet", "#forge:plates/brass"],
        ["create:iron_sheet", "#forge:plates/iron"],
        ["create:golden_sheet", "#forge:plates/gold"],
        ["createaddition:electrum_sheet", "#forge:plates/electrum"],
        ["createdeco:zinc_sheet", "#forge:plates/zinc"],
        ["createdeco:netherite_sheet", "#forge:plates/netherite"],
    ];

    IngredientReplacements.forEach((replacement) => {
        event.replaceOutput({}, replacement[0], replacement[1]);
    });

    IngredientReplacements.forEach((replacement) => {
        event.replaceInput({}, replacement[0], replacement[1]);
    });
});
