ServerEvents.recipes((event) => {
    //Spool
    event.remove({ output: "createaddition:spool" });
    event.shaped(Item.of("createaddition:spool", 3), ["AAA", " B ", "AAA"], { A: "#forge:plates/iron", B: "#forge:rods/iron" });

    //Copper Spool
    event.remove({ output: "createaddition:copper_spool" });
    event.shaped("createaddition:copper_spool", ["AAA", "ABA", "AAA"], { A: "#forge:wires/copper", B: "createaddition:spool" });
    event.shapeless("createaddition:copper_spool", ["immersiveengineering:wirecoil_copper"]);

    //Gold Spool
    event.remove({ output: "createaddition:gold_spool" });
    event.shaped("createaddition:gold_spool", ["AAA", "ABA", "AAA"], { A: "#forge:wires/gold", B: "createaddition:spool" });

    //Electrum Spool
    event.remove({ output: "createaddition:electrum_spool" });
    event.shaped("createaddition:electrum_spool", ["AAA", "ABA", "AAA"], { A: "#forge:wires/electrum", B: "createaddition:spool" });
    event.shapeless("createaddition:electrum_spool", ["immersiveengineering:wirecoil_electrum"]);
});
