ServerEvents.recipes((event) => {
	//Aethersteel Smithing Template
	event.remove({ output: "aethersteel:aethersteel_upgrade_smithing_template" });
	event.shaped("aethersteel:aethersteel_upgrade_smithing_template", ["NSN", "NTN", "NNN"], { N: "#forge:ingots/netherite", T: "minecraft:netherite_upgrade_smithing_template", S: "aethersteel:aethersteel_scrap" });

	//Aethersteel Bookshelf
	event.remove({ output: "aethersteel:aethersteel_bookshelf" });
	event.shaped("aethersteel:aethersteel_bookshelf", ["AAA", "BBB", "AAA"], { A: "aethersteel:aethersteel_ingot", B: "minecraft:book" });
});
