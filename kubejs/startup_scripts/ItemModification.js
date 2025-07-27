ItemEvents.modification((event) => {
	event.modify("moonbase:tiny_coal", (item) => (item.burnTime = 200));
	event.modify("moonbase:tiny_charcoal", (item) => (item.burnTime = 200));
	event.modify("thermal:sawdust", (item) => (item.burnTime = 100));
	event.modify("mekanism:sawdust", (item) => (item.burnTime = 100));

	//Vanilla maxStackSize
	[Item.of("minecraft:potion"), Item.of("minecraft:splash_potion"), Item.of("minecraft:lingering_potion"), Item.of("minecraft:ender_pearl"), Item.of("minecraft:egg"), Item.of("minecraft:bucket")].forEach((item) => {
		event.modify(item, (data) => {
			data.maxStackSize = 64;
		});
	});
});
