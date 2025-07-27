PlayerEvents.loggedIn((event) => {
	//#region Definition
	const AkashicTome = Item.of("akashictome:tome", '{"akashictome:data":{ftbquests:{Count:1b,id:"ftbquests:book"}}}');
	const Helmet = Item.of("ad_astra:space_helmet", "{Damage:0}");
	const Suit = Item.of("ad_astra:space_suit", '{BotariumData:{StoredFluids:[{Amount:2500L,Fluid:"mekanism:oxygen"}]},Damage:0}');
	const Pants = Item.of("ad_astra:space_pants", "{Damage:0}");
	const Boots = Item.of("ad_astra:space_boots", "{Damage:0}");
	//#endregion

	//========================================================================================================================================

	//#region Recipes function
	//KubeJS
	if (!event.player.stages.has("starting_item")) {
		event.player.stages.add("starting_item");
		event.entity.setItemSlot(5, Helmet);
		event.entity.setItemSlot(4, Suit);
		event.entity.setItemSlot(3, Pants);
		event.entity.setItemSlot(2, Boots);
		event.player.give(AkashicTome);
	}
	//#endregion
});
