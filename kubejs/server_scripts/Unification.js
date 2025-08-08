// priority:100
ServerEvents.recipes((event) => {
    const IngredientReplacements = [
        //Input	//Output
        ["industrialforegoing:plastic", "pneumaticcraft:plastic"],
        ["pneumaticcraft:wheat_flour", "create:wheat_flour"],
        ["enderio:flour", "create:wheat_flour"],
        ["pamhc2foodcore:flouritem", "create:wheat_flour"],
        ["create:dough", "pamhc2foodcore:doughitem"],
        ["delightful:nut_dough", "pamhc2foodcore:doughitem"],
        ["farmersdelight:wheat_dough", "pamhc2foodcore:doughitem"],
        //["extendedcrafting:redstone_ingot", "projectred_core:red_ingot"],
        ["thermal:sawdust", "mekanism:sawdust"],
        ["immersiveengineering:dust_wood", "mekanism:sawdust"],
        ["thermal:saw_blade", "immersiveengineering:sawblade"],
        ["immersiveengineering:coal_coke", "thermal:coal_coke"],
        ["cyclic:compressed_cobblestone", "anoxia:compressed_cobblestone"],
        ["enderio:silicon", "ae2:silicon"],
        ["oc2r:silicon", "ae2:silicon"],
        ["powah:uraninite_raw", "mekanism:raw_uranium"],
        ["minecraft:smoker", "#anoxia:smokers"],
        ["minecraft:blast_furnace", "#anoxia:blastfurnaces"],
    ];

    IngredientReplacements.forEach((replacement) => {
        event.replaceOutput({}, replacement[0], replacement[1]);
    });

    IngredientReplacements.forEach((replacement) => {
        event.replaceInput({}, replacement[0], replacement[1]);
    });
});
