ServerEvents.recipes((event) => {
    //Waystone
    event.remove({ output: "waystones:waystone" });
    event.shaped("waystones:waystone", [" S ", "SIS", "OWO"], { S: "minecraft:stone_bricks", I: "waystones:warp_stone", O: "minecraft:obsidian", W: "architects_palette:warpstone" });

    //Sharestone
    event.remove({ output: "waystones:sharestone" });
    event.shaped("waystones:sharestone", ["SSS", " I ", "OWO"], { S: "minecraft:stone_bricks", I: "waystones:warp_stone", O: "minecraft:obsidian", W: "architects_palette:warpstone" });

    //Mossy Waystone
    event.remove({ output: "waystones:mossy_waystone" });
    event.shaped("waystones:mossy_waystone", [" B ", "BAB"], { A: "waystones:waystone", B: "minecraft:mossy_stone_bricks" });

    //Sandy Waystone
    event.remove({ output: "waystones:sandy_waystone" });
    event.shaped("waystones:sandy_waystone", [" B ", "BAB"], { A: "waystones:waystone", B: "minecraft:chiseled_sandstone" });

    //Deepslate
    event.remove({ output: "waystones:deepslate_waystone" });
    event.shaped("waystones:deepslate_waystone", [" B ", "BAB"], { A: "waystones:waystone", B: "minecraft:deepslate" });

    //Blackstone
    event.remove({ output: "waystones:blackstone_waystone" });
    event.shaped("waystones:blackstone_waystone", [" B ", "BAB"], { A: "waystones:waystone", B: "minecraft:blackstone" });

    //End stone
    event.remove({ output: "waystones:end_stone_waystone" });
    event.shaped("waystones:end_stone_waystone", [" B ", "BAB"], { A: "waystones:waystone", B: "minecraft:end_stone_bricks" });

    //Clear Waystone
    event.shapeless("waystones:waystone", ["waystones:mossy_waystone", "supplementaries:soap"]);
    event.shapeless("waystones:waystone", ["waystones:sandy_waystone", "supplementaries:soap"]);
    event.shapeless("waystones:waystone", ["waystones:deepslate_waystone", "supplementaries:soap"]);
    event.shapeless("waystones:waystone", ["waystones:blackstone_waystone", "supplementaries:soap"]);
    event.shapeless("waystones:waystone", ["waystones:end_stone_waystone", "supplementaries:soap"]);
});
