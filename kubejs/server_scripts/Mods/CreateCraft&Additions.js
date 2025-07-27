ServerEvents.recipes((event) => {
	//Spool
	event.remove({ output: "createaddition:spool" });
	event.shaped(Item.of("createaddition:spool", 3), ["PPP", " R ", "PPP"], { P: "#forge:plates/iron", R: "#forge:rods/iron" });

	//Copper Spool
	event.remove({ output: "createaddition:copper_spool" });
	event.shaped("createaddition:copper_spool", ["CCC", "CSC", "CCC"], { C: "#forge:wires/copper", S: "createaddition:spool" });
	event.shapeless("createaddition:copper_spool", ["immersiveengineering:wirecoil_copper"]);

	//Gold Spool
	event.remove({ output: "createaddition:gold_spool" });
	event.shaped("createaddition:gold_spool", ["GGG", "GSG", "GGG"], { G: "#forge:wires/gold", S: "createaddition:spool" });

	//Electrum Spool
	event.remove({ output: "createaddition:electrum_spool" });
	event.shaped("createaddition:electrum_spool", ["EEE", "ESE", "EEE"], { E: "#forge:wires/electrum", S: "createaddition:spool" });
	event.shapeless("createaddition:electrum_spool", ["immersiveengineering:wirecoil_electrum"]);
});
