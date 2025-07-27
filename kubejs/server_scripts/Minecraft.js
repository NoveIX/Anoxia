ServerEvents.recipes((event) => {
	//Cobblestone
	event.remove({ input: "#forge:pebble/stone", output: "minecraft:cobblestone" });
	event.shaped("minecraft:cobblestone", ["PP", "PP"], { P: "#forge:pebble/stone" });

	//Furnace
	event.remove({ output: "minecraft:furnace" });
	event.shaped("minecraft:furnace", ["CCC", "C C", "CCC"], { C: "moonbase:compressed_cobblestone" });

	//Blast Furnace
	event.remove({ output: "minecraft:blast_furnace" });
	event.shaped("minecraft:blast_furnace", ["PPP", "PFP", "CCC"], { P: "#forge:plates/iron", F: "#moonbase:stone/furnaces", C: "minecraft:smooth_stone" });

	//Smoker
	event.remove({ output: "minecraft:smoker" });
	event.shaped("minecraft:smoker", ["CLC", "LFL", "CLC"], { C: "moonbase:compressed_cobblestone", L: "#minecraft:logs", F: "#moonbase:stone/furnaces" });

	//SmithingTemplate
	event.remove({ output: "minecraft:netherite_upgrade_smithing_template" });
	event.shaped("minecraft:netherite_upgrade_smithing_template", ["NIN", "NDN", "NNN"], { D: "#forge:storage_blocks/diamond", N: "minecraft:netherrack", I: "#forge:ingots/netherite" });

	//StoneCutter
	event.remove({ output: "minecraft:stonecutter" });
	event.shaped("minecraft:stonecutter", [" B ", "LSL", "SSS"], { B: "#forge:sawblades", L: "#minecraft:logs", S: "#forge:stone" });

	//Chest
	event.remove({ input: "#minecraft:logs", output: "minecraft:chest" });
	event.shaped("minecraft:chest", ["LLL", "L L", "LLL"], { L: "#minecraft:logs" });

	//Stick
	event.remove({ input: "#minecraft:logs", output: "minecraft:stick" });
	event.shaped(Item.of("minecraft:stick", 4), ["L", "L"], { L: "#minecraft:logs" });

	//Golden Apple Upgrade
	event.shaped("minecraft:enchanted_golden_apple", ["BIB", "BAB", "BBB"], { A: "minecraft:golden_apple", I: "#forge:ingots/gold", B: "#forge:storage_blocks/gold" });

	//Piston
	event.remove({ output: "minecraft:piston" });
	event.shaped("minecraft:piston", ["PPP", "CIC", "CAC"], { P: "#minecraft:planks", C: "#forge:cobblestone", I: "#forge:ingots/iron", A: "#forge:ingots/red_alloy" });
	event.shaped("minecraft:piston", ["PPP", "CIC", "CAC"], { P: "#minecraft:planks", C: "#forge:cobblestone", I: "#forge:ingots/iron", A: "#forge:ingots/electrotine_alloy" });

	//Sticky Piston
	event.remove({ output: "minecraft:sticky_piston" });
	event.shaped("minecraft:sticky_piston", ["S", "P"], { S: "#forge:slimeballs", P: "minecraft:piston" });
	event.shapeless("minecraft:piston", ["minecraft:sticky_piston", "supplementaries:soap"]);

	//Flint And Steel
	event.remove({ output: "minecraft:flint_and_steel" });
	event.shaped("minecraft:flint_and_steel", ["S ", " F"], { S: "#forge:ingots/steel", F: "minecraft:flint" });

	//Hopper
	event.remove({ output: "minecraft:hopper" });
	event.shaped("minecraft:hopper", ["S S", "SCS", " S "], { S: "#forge:plates/iron", C: "#forge:chests/wooden" });
	event.shapeless("minecraft:hopper", ["uppers:upper"]);

	//Upper
	event.remove({ output: "uppers:upper" });
	event.shaped("uppers:upper", [" S ", "SCS", "S S"], { S: "#forge:plates/iron", C: "#forge:chests/wooden" });
	event.shapeless("uppers:upper", ["minecraft:hopper"]);

	//Emergency Food
	event.smelting(Item.of("minecraft:cooked_beef", 8), "paimon:paimonmedal").id("genshin:emergency_food");

	//Bone Meal From Wither
	event.shapeless(Item.of("minecraft:bone_meal", 9), ["minecraft:bone_meal"]);
});
