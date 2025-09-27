StartupEvents.registry("block", (event) => {
    //Cobblestone
    event.create("anoxia:compressed_cobblestone").displayName("Compressed Cobblestone").soundType("stone").hardness(2.0).resistance(6.0).requiresTool(true).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_wooden_tool");
    event.create("anoxia:double_compressed_cobblestone").displayName("Double Compressed Cobblestone").soundType("stone").hardness(2.0).resistance(6.0).requiresTool(true).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_wooden_tool");
    event.create("anoxia:triple_compressed_cobblestone").displayName("Triple Compressed Cobblestone").soundType("stone").hardness(2.0).resistance(6.0).requiresTool(true).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_wooden_tool");
    event.create("anoxia:quadruple_compressed_cobblestone").displayName("Quadruple Compressed Cobblestone").soundType("stone").hardness(2.0).resistance(6.0).requiresTool(true).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_wooden_tool");
    event.create("anoxia:quintuple_compressed_cobblestone").displayName("Quintuple Compressed Cobblestone").soundType("stone").hardness(2.0).resistance(6.0).requiresTool(true).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_wooden_tool");
    event.create("anoxia:sextuple_compressed_cobblestone").displayName("Sextuple Compressed Cobblestone").soundType("stone").hardness(2.0).resistance(6.0).requiresTool(true).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_wooden_tool");
    event.create("anoxia:septuple_compressed_cobblestone").displayName("Septuple Compressed Cobblestone").soundType("stone").hardness(2.0).resistance(6.0).requiresTool(true).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_wooden_tool");
    event.create("anoxia:octuple_compressed_cobblestone").displayName("Octuple Compressed Cobblestone").soundType("stone").hardness(2.0).resistance(6.0).requiresTool(true).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_wooden_tool");

    //DeepSlate
    event.create("anoxia:compressed_deepslate").displayName("Compressed deepslate").soundType("deepslate").hardness(3.0).resistance(6.0).requiresTool(true).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_wooden_tool");

    //Cobble DeepSlate
    event.create("anoxia:compressed_cobbled_deepslate").displayName("Compressed Cobbled Deepslate").soundType("deepslate").hardness(3.5).resistance(6.0).requiresTool(true).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_wooden_tool");

    //BlackStone
    event.create("anoxia:compressed_blackstone").displayName("Compressed Blackstone").soundType("stone").hardness(1.5).resistance(6.0).requiresTool(true).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_wooden_tool");

    //Andesite
    event.create("anoxia:compressed_andesite").displayName("Compressed Andesite").soundType("stone").hardness(1.5).resistance(6.0).requiresTool(true).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_wooden_tool");

    //Modular Machinery
    event.create("anoxia:machine_casing").displayName("Machine Casing").soundType("metal").hardness(5.0).resistance(6.0).requiresTool(true).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_wooden_tool");
});

//#region Controller
MMEvents.registerControllers((event) => {
    event
        .create("machine_controller") //ID
        .name("Machine Controller")
        .type("mm:machine");

    event
        .create("portal_controller") //ID
        .name("Portal Controller")
        .type("mm:machine");

    event
        .create("coke_oven_controller") //ID
        .name("Coke Oven Controller")
        .type("mm:machine");
});
//#endregion

//#region Extra Block
MMEvents.registerExtraBlocks((event) => {
    event.create("machine_vent").type("mm:vent").name("Machine Vent");
    event.create("machine_gearbox").type("mm:gearbox").name("Machine Gearbox");
    event.create("machine_circuit").type("mm:circuit").name("Machine Circuit");
});
//#endregion

MMEvents.registerPorts((event) => {
    //#region Port item
    //Tiny
    event
        .create("tiny_item_port")
        .name("Tiny Item Port")
        .controllerId("mm:machine_controller")
        .config("mm:item", (c) => {
            c.rows(1).columns(1);
        });

    //Small
    event
        .create("small_item_port")
        .name("Small Item Port")
        .controllerId("mm:machine_controller")
        .config("mm:item", (c) => {
            c.rows(2).columns(2);
        });

    //Normal
    event
        .create("normal_item_port")
        .name("Normal Item Port")
        .controllerId("mm:machine_controller")
        .config("mm:item", (c) => {
            c.rows(2).columns(3);
        });

    //Reinforced
    event
        .create("reinforced_item_port")
        .name("Reinforced Item Port")
        .controllerId("mm:machine_controller")
        .config("mm:item", (c) => {
            c.rows(3).columns(3);
        });

    //Big
    event
        .create("big_item_port")
        .name("Big Item Port")
        .controllerId("mm:machine_controller")
        .config("mm:item", (c) => {
            c.rows(3).columns(4);
        });

    //Huge
    event
        .create("huge_item_port")
        .name("Huge Item Port")
        .controllerId("mm:machine_controller")
        .config("mm:item", (c) => {
            c.rows(4).columns(4);
        });

    //Ludicrous
    event
        .create("ludicrous_item_port")
        .name("Ludicrous Item Port")
        .controllerId("mm:machine_controller")
        .config("mm:item", (c) => {
            c.rows(4).columns(8);
        });

    //Ultimate
    event
        .create("ultimate_item_port")
        .name("Ultimate Item Port")
        .controllerId("mm:machine_controller")
        .config("mm:item", (c) => {
            c.rows(5).columns(9);
        });

    //Artificial Portal
    event
        .create("portal_item_port")
        .name("portal Item Port")
        .controllerId("mm:portal_controller")
        .config("mm:item", (c) => {
            c.rows(3).columns(3);
        });

    //Coke Oven
    event
        .create("coke_oven_item_port")
        .name("Coke Oven Item Port")
        .controllerId("mm:coke_oven_controller")
        .config("mm:item", (c) => {
            c.rows(1).columns(1);
        });
    //#endregion

    //#region Fluid
    event
        .create("tiny_fluid_port")
        .name("Tiny Fluid Port")
        .controllerId("mm:machine_controller")
        .config("mm:fluid", (c) => {
            c.rows(1).columns(1).slotCapacity(1000);
        });

    //small
    event
        .create("small_fluid_port")
        .name("Small Fluid Port")
        .controllerId("mm:machine_controller")
        .config("mm:fluid", (c) => {
            c.rows(1).columns(1).slotCapacity(2000);
        });

    //Normal
    event
        .create("normal_fluid_port")
        .name("Normal Fluid Port")
        .controllerId("mm:machine_controller")
        .config("mm:fluid", (c) => {
            c.rows(1).columns(1).slotCapacity(4000);
        });

    //Reinforced
    event
        .create("reinforced_fluid_port")
        .name("Reinforced Fluid Port")
        .controllerId("mm:machine_controller")
        .config("mm:fluid", (c) => {
            c.rows(1).columns(1).slotCapacity(8000);
        });

    //Big
    event
        .create("big_fluid_port")
        .name("Big Fluid Port")
        .controllerId("mm:machine_controller")
        .config("mm:fluid", (c) => {
            c.rows(1).columns(1).slotCapacity(16000);
        });

    //Huge
    event
        .create("huge_fluid_port")
        .name("Huge Fluid Port")
        .controllerId("mm:machine_controller")
        .config("mm:fluid", (c) => {
            c.rows(1).columns(1).slotCapacity(32000);
        });

    //Ludicrous
    event
        .create("ludicrous_fluid_port")
        .name("Ludicrous Fluid Port")
        .controllerId("mm:machine_controller")
        .config("mm:fluid", (c) => {
            c.rows(1).columns(1).slotCapacity(64000);
        });

    //Ultimate
    event
        .create("ultimate_fluid_port")
        .name("Ultimate Fluid Port")
        .controllerId("mm:machine_controller")
        .config("mm:fluid", (c) => {
            c.rows(1).columns(1).slotCapacity(2147483647);
        });

    //Coke Oven
    event
        .create("coke_oven_fluid_port")
        .name("Coke Oven Fluid Port")
        .controllerId("mm:coke_oven_controller")
        .config("mm:fluid", (c) => {
            c.rows(1).columns(1).slotCapacity(64000);
        });
    //#endregion

    //#region Energy
    //Tiny
    event
        .create("tiny_energy_port")
        .name("Tiny Energy Port")
        .controllerId("mm:machine_controller")
        .config("mm:energy", (c) => {
            c.capacity(4000).maxReceive(500).maxExtract(500);
        });

    //Small
    event
        .create("small_energy_port")
        .name("Small Energy Port")
        .controllerId("mm:machine_controller")
        .config("mm:energy", (c) => {
            c.capacity(8000).maxReceive(1000).maxExtract(1000);
        });

    //Normal
    event
        .create("normal_energy_port")
        .name("Normal Energy Port")
        .controllerId("mm:machine_controller")
        .config("mm:energy", (c) => {
            c.capacity(16000).maxReceive(2000).maxExtract(2000);
        });

    //Reinforced
    event
        .create("reinforced_energy_port")
        .name("Reinforced Energy Port")
        .controllerId("mm:machine_controller")
        .config("mm:energy", (c) => {
            c.capacity(32000).maxReceive(4000).maxExtract(4000);
        });

    //Big
    event
        .create("big_energy_port")
        .name("Big Energy Port")
        .controllerId("mm:machine_controller")
        .config("mm:energy", (c) => {
            c.capacity(64000).maxReceive(8000).maxExtract(8000);
        });

    //Huge
    event
        .create("huge_energy_port")
        .name("Huge Energy Port")
        .controllerId("mm:machine_controller")
        .config("mm:energy", (c) => {
            c.capacity(128000).maxReceive(16000).maxExtract(16000);
        });

    //ludicrous
    event
        .create("ludicrous_energy_port")
        .name("Ludicrous Energy Port")
        .controllerId("mm:machine_controller")
        .config("mm:energy", (c) => {
            c.capacity(256000).maxReceive(32000).maxExtract(32000);
        });

    //Ultimate
    event
        .create("ultimate_energy_port")
        .name("Ultimate Energy Port")
        .controllerId("mm:machine_controller")
        .config("mm:energy", (c) => {
            c.capacity(2147483647).maxReceive(2147483647).maxExtract(2147483647);
        });
    //#endregion
});
