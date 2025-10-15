ServerEvents.recipes((event) => {
    //Remove Aethersteel
    event.remove({ output: "aethersteel:aethersteel_ingot" });

    //Aethersteel Smithing Template
    event.remove({ output: "aethersteel:aethersteel_upgrade_smithing_template" });
    event.shaped("aethersteel:aethersteel_upgrade_smithing_template", ["ACA", "ABA", "AAA"], { A: "#forge:ingots/netherite", B: "minecraft:netherite_upgrade_smithing_template", C: "aethersteel:aethersteel_scrap" });

    //Aethersteel Bookshelf
    event.remove({ output: "aethersteel:aethersteel_bookshelf" });
    event.shaped("aethersteel:aethersteel_bookshelf", ["AAA", "BBB", "AAA"], { A: "aethersteel:aethersteel_ingot", B: "minecraft:book" });
});
