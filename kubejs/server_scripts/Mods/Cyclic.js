ServerEvents.recipes((event) => {
	//Remove Recipes
	event.remove({ id: "cyclic:compressed_cobblestone" }); //Crafting: Cobblestone => CompressedCobblestone
	event.remove({ id: "cyclic:compressed_cobblestone_u" }); //Crafting: CompressedCobblestone => Cobblestone
	event.remove({ id: "cyclic:compat/sturdy_stone" }); //Crafting: Stone + Cobblestone => CompressedCobblestone

	//Wood Hopper
	event.remove({ output: "cyclic:hopper" });
	event.shaped("cyclic:hopper", ["S S", "SHS", " S "], { S: "#minecraft:wooden_slabs", H: "minecraft:hopper" });

	//Gold Hopper
	event.remove({ output: "cyclic:hopper_gold" });
	event.shaped("cyclic:hopper_gold", ["P P", "PWP", " P "], { P: "#forge:plates/gold", W: "cyclic:hopper" });
});
