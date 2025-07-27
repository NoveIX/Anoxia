ServerEvents.recipes((event) => {
	//Waystone
	event.remove({ output: "waystones:waystone" });
	event.shaped("waystones:waystone", [" S ", "SIS", "OWO"], { S: "minecraft:stone_bricks", I: "waystones:warp_stone", O: "minecraft:obsidian", W: "architects_palette:warpstone" });

	//Sharestone
	event.remove({ output: "waystones:sharestone" });
	event.shaped("waystones:sharestone", ["SSS", " I ", "OWO"], { S: "minecraft:stone_bricks", I: "waystones:warp_stone", O: "minecraft:obsidian", W: "architects_palette:warpstone" });

	//Mossy Waystone
	event.remove({ output: "waystones:mossy_waystone" });
	event.shaped("waystones:mossy_waystone", [" S ", "SWS"], { W: "waystones:waystone", S: "minecraft:mossy_stone_bricks" });

	//Sandy Waystone
	event.remove({ output: "waystones:sandy_waystone" });
	event.shaped("waystones:sandy_waystone", [" C ", "CWC"], { W: "waystones:waystone", C: "minecraft:chiseled_sandstone" });

	//Clear Waystone
	event.shapeless("waystones:waystone", ["waystones:mossy_waystone", "supplementaries:soap"]);
	event.shapeless("waystones:waystone", ["waystones:sandy_waystone", "supplementaries:soap"]);
});
