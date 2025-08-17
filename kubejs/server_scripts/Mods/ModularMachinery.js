ServerEvents.recipes((event) => {
    //MM
    event.shaped("mm:machine_controller", [" A ", "RMR", "LRL"], { A: "computercraft:monitor_advanced", R: "#forge:storage_blocks/redstone_alloy", M: "anoxia:machine_casing", L: "ae2:logic_processor" });
    event.shaped("anoxia:machine_casing", [" M ", "MRM", " M "], { M: "anoxia:modularium", R: "#forge:storage_blocks/redstone_alloy" });
    event.shaped("mm:machine_vent", ["MBM", "BAB", "MBM"], { M: "anoxia:modularium", B: "enderio:dark_steel_bars", A: "anoxia:amongus" });
    event.shaped("mm:machine_gearbox", ["MGM", "GCG", "MGM"], { M: "anoxia:modularium", G: "#forge:gears/steel", C: "create:gearbox" });
    event.shaped("mm:machine_circuit", ["MCM", "C C", "MCM"], { M: "anoxia:modularium", C: "mekanism:basic_control_circuit" });

    //// # =================================================================================================== #

    //#region Item
    const ItemInPort = [
        //Input
        { get: "mm:tiny_item_port_input", put: "anoxia:machine_casing" },
        { get: "mm:small_item_port_input", put: "mm:tiny_item_port_input" },
        { get: "mm:normal_item_port_input", put: "mm:small_item_port_input" },
        { get: "mm:reinforced_item_port_input", put: "mm:normal_item_port_input" },
        { get: "mm:big_item_port_input", put: "mm:reinforced_item_port_input" },
        { get: "mm:huge_item_port_input", put: "mm:big_item_port_input" },
        { get: "mm:ludicrous_item_port_input", put: "mm:huge_item_port_input" },
        { get: "mm:ultimate_item_port_input", put: "mm:ludicrous_item_port_input" },
    ];
    ItemInPort.forEach((recipe) => {
        event.shaped(recipe.get, [" H ", "MPM", "CMC"], { H: "minecraft:hopper", M: "anoxia:modularium", P: recipe.put, C: "#forge:chests/wooden" });
    });

    const ItemOutPort = [
        //Output
        { get: "mm:tiny_item_port_output", put: "anoxia:machine_casing" },
        { get: "mm:small_item_port_output", put: "mm:tiny_item_port_output" },
        { get: "mm:normal_item_port_output", put: "mm:small_item_port_output" },
        { get: "mm:reinforced_item_port_output", put: "mm:normal_item_port_output" },
        { get: "mm:big_item_port_output", put: "mm:reinforced_item_port_output" },
        { get: "mm:huge_item_port_output", put: "mm:big_item_port_output" },
        { get: "mm:huge_item_port_output", put: "mm:huge_item_port_output" },
        { get: "mm:huge_item_port_output", put: "mm:huge_item_port_output" },
    ];
    ItemOutPort.forEach((recipe) => {
        event.shaped(recipe.get, ["CMC", "MPM", " H "], { H: "minecraft:hopper", M: "anoxia:modularium", P: recipe.put, C: "#forge:chests/wooden" });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Fluid
    const FluidInPort = [
        //input
        { get: "mm:tiny_fluid_port_input", put: "anoxia:machine_casing" },
        { get: "mm:small_fluid_port_input", put: "mm:tiny_fluid_port_input" },
        { get: "mm:normal_fluid_port_input", put: "mm:small_fluid_port_input" },
        { get: "mm:reinforced_fluid_port_input", put: "mm:normal_fluid_port_input" },
        { get: "mm:big_fluid_port_input", put: "mm:reinforced_fluid_port_input" },
        { get: "mm:huge_fluid_port_input", put: "mm:big_fluid_port_input" },
        { get: "mm:ludicrous_fluid_port_input", put: "mm:huge_fluid_port_input" },
        { get: "mm:ultimate_fluid_port_input", put: "mm:ludicrous_fluid_port_input" },
    ];
    FluidInPort.forEach((recipe) => {
        event.shaped(recipe.get, [" H ", "MPM", "BMB"], { H: "minecraft:hopper", M: "anoxia:modularium", P: recipe.put, B: "minecraft:bucket" });
    });

    const FluidOutPort = [
        //Output
        { get: "mm:tiny_fluid_port_output", put: "anoxia:machine_casing" },
        { get: "mm:small_fluid_port_output", put: "mm:tiny_fluid_port_output" },
        { get: "mm:normal_fluid_port_output", put: "mm:small_fluid_port_output" },
        { get: "mm:reinforced_fluid_port_output", put: "mm:normal_fluid_port_output" },
        { get: "mm:big_fluid_port_output", put: "mm:reinforced_fluid_port_output" },
        { get: "mm:huge_fluid_port_output", put: "mm:big_fluid_port_output" },
        { get: "mm:ludicrous_fluid_port_output", put: "mm:huge_fluid_port_output" },
        { get: "mm:ultimate_fluid_port_output", put: "mm:ludicrous_fluid_port_output" },
    ];
    FluidOutPort.forEach((recipe) => {
        event.shaped(recipe.get, ["BMB", "MPM", " H "], { H: "minecraft:hopper", M: "anoxia:modularium", P: recipe.put, B: "minecraft:bucket" });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Energy
    const EnergyInPort = [
        //input
        { get: "#forge:chests/wooden", put: "anoxia:machine_casing" },
        { get: "mm:small_energy_port_input", put: "#forge:chests/wooden" },
        { get: "mm:normal_energy_port_input", put: "mm:small_energy_port_input" },
        { get: "mm:reinforced_energy_port_input", put: "mm:normal_energy_port_input" },
        { get: "mm:big_energy_port_input", put: "mm:reinforced_energy_port_input" },
        { get: "mm:huge_energy_port_input", put: "mm:big_energy_port_input" },
        { get: "mm:ludicrous_energy_port_input", put: "mm:huge_energy_port_input" },
        { get: "mm:ultimate_energy_port_input", put: "mm:ludicrous_energy_port_input" },
    ];
    EnergyInPort.forEach((recipe) => {
        event.shaped(recipe.get, [" E ", "MPM", "RMR"], { E: "pipez:energy_pipe", M: "anoxia:modularium", P: recipe.put, R: "#forge:ingots/red_alloy" });
    });

    const EnergyOutPort = [
        //Output
        { get: "mm:tiny_energy_port_output", put: "anoxia:machine_casing" },
        { get: "mm:small_energy_port_output", put: "mm:tiny_energy_port_output" },
        { get: "mm:normal_energy_port_output", put: "mm:small_energy_port_output" },
        { get: "mm:reinforced_energy_port_output", put: "mm:normal_energy_port_output" },
        { get: "mm:big_energy_port_output", put: "mm:reinforced_energy_port_output" },
        { get: "mm:huge_energy_port_output", put: "mm:big_energy_port_output" },
        { get: "mm:ludicrous_energy_port_output", put: "mm:huge_energy_port_output" },
        { get: "mm:ultimate_energy_port_output", put: "mm:ludicrous_energy_port_output" },
    ];
    EnergyOutPort.forEach((recipe) => {
        event.shaped(recipe.get, ["RMR", "MPM", " E "], { E: "pipez:energy_pipe", M: "moonbase:modularium", P: recipe.put, R: "#forge:ingots/red_alloy" });
    });
});

//// # =================================================================================================== #

//Modular Machine Structure
MMEvents.createStructures((event) => {
    //#region Empowerer
    event
        .create("mm:autonomus_empowerer")
        .controllerId("mm:machine_controller")
        .name("Autonomus Empowerer")
        .layout((mech) => {
            mech.layer(["         ", "         ", "         ", "         ", "    2    ", "         ", "         ", "         ", "         "])
                .layer(["         ", "         ", "         ", "         ", "    1    ", "         ", "         ", "         ", "         "])
                .layer(["         ", "    1    ", "         ", "         ", " 1  5  1 ", "         ", "         ", "    1    ", "    C    "])
                .layer(["    B    ", "   BDB   ", "   BAB   ", " BBBABBB ", "BDAAEAADB", " BBBABBB ", "   BAB   ", "   BDB   ", "    B    "])
                .layer(["    B    ", "   BBB   ", "    B    ", " B BBB B ", "BBBBBBBBB", " B BBB B ", "    B    ", "   BBB   ", "    B    "])
                .key("B", { block: "anoxia:machine_casing" })
                .key("A", { block: "mm:machine_circuit" })
                .key("D", { block: "actuallyadditions:display_stand" })
                .key("E", { block: "actuallyadditions:empowerer" })

                //port
                .key("1", { portType: "mm:item", input: true })
                .key("2", { portType: "mm:item", input: false })
                .key("5", { portType: "mm:energy", input: true });
        });
    //#endregion

    //// # =================================================================================================== #

    //#region Portal
    event
        .create("mm:artificial_portal")
        .controllerId("mm:machine_controller")
        .name("Artificial Portal")
        .layout((mech) => {
            mech.layer(["AAAAA"])
                .layer(["ABBBA"])
                .layer(["ABBBA"])
                .layer(["ABBBA"])
                .layer(["A1C2A"])
                .key("A", { block: "rechiseled:obsidian_dark_connecting" })
                .key("B", { block: "connectedglass:borderless_glass_purple_pane" })

                //Port
                .key("1", { portType: "mm:item", input: true })
                .key("2", { portType: "mm:item", input: false });
        });
    //#endregion

    //// # =================================================================================================== #

    //#region Energizer
    event
        .create("mm:pulse_energizer")
        .controllerId("mm:machine_controller")
        .name("Pulse energizer")
        .layout((mech) => {
            mech.layer(["AAAAA", "AADAA", "ADDDA", "AADAA", "AAAAA"])
                .layer(["AEEEA", "E F E", "EFFFE", "E F E", "AEEEA"])
                .layer(["AEEEA", "E G E", "EGGGE", "E G E", "AEEEA"])
                .layer(["AEEEA", "E   E", "E   E", "E   E", "AEEEA"])
                .layer(["AEEEA", "E   E", "E H E", "E   E", "AEEEA"])
                .layer(["AE5EA", "1   2", "E B E", "2   1", "AECEA"])
                .layer(["ADADA", "DABAD", "ABBBA", "DABAD", "ADADA"])
                .key("A", { block: "anoxia:machine_casing" })
                .key("B", { block: "mm:machine_circuit" })
                .key("D", { block: "mm:machine_vent" })
                .key("E", { block: "ae2:quartz_glass" })
                .key("F", { block: "thermal:dynamo_magmatic" })
                .key("G", { block: "powah:energizing_rod_nitro" })
                .key("H", { block: "powah:energizing_orb" })

                //Port
                .key("1", { portType: "mm:item", input: true })
                .key("2", { portType: "mm:item", input: false })
                .key("5", { portType: "mm:energy", input: true });
        });
    //#endregion

    //// # =================================================================================================== #

    //#region Sieve
    event
        .create("mm:quantum_sieve")
        .controllerId("mm:machine_controller")
        .name("Quantum Sieve")
        .layout((mech) => {
            mech.layer(["AAAAA", "AAAAA", "AAAAA", "AAAAA", "AAAAA"])

                .layer(["AEEEA", "EDDDE", "EDGDE", "EDDDE", "AEEEA"])

                .layer(["A2A1A", "BDDDB", "5DFD5", "BDDDB", "A1C2A"])

                .layer(["AAAAA", "AAAAA", "AAAAA", "AAAAA", "AAAAA"])
                .key("A", { block: "anoxia:machine_casing" })
                .key("B", { block: "mm:machine_circuit" })
                .key("D", { block: "mm:machine_gearbox" })
                .key("E", { block: "mm:machine_vent" })
                .key("F", { block: "createsifter:sifter" })
                .key("G", { block: "minecraft:hopper" })

                //Port
                .key("1", { portType: "mm:item", input: true })
                .key("2", { portType: "mm:item", input: false })
                .key("5", { portType: "mm:energy", input: true });
        });
    //#endregion

    //// # =================================================================================================== #

    //#region Crusher
    event
        .create("mm:collision_crusher")
        .controllerId("mm:machine_controller")
        .name("Collision Crusher")
        .layout((mech) => {
            mech.layer(["AAA", "AAA", "AAA"])
                .layer(["ADA", "3E4", "ADA"])
                .layer(["ADA", "BEB", "ADA"])
                .layer(["A5A", "2E1", "ACA"])
                .layer(["AAA", "AAA", "AAA"])
                .key("A", { block: "anoxia:machine_casing" })
                .key("B", { block: "mm:machine_gearbox" })
                .key("D", { block: "mm:machine_vent" })
                .key("E", { block: "actuallyadditions:crusher_double" })

                //Port
                .key("1", { portType: "mm:item", input: true })
                .key("2", { portType: "mm:item", input: false })
                .key("3", { portType: "mm:fluid", input: true })
                .key("4", { portType: "mm:fluid", input: false })
                .key("5", { portType: "mm:energy", input: true });
        });
    //#endregion

    //// # =================================================================================================== #

    //#region Sawmill
    //event.create("mm:sawmill").controllerId("mm:machine_controller").name("Nanometer Sawmill");
    //#endregion
});

//Modular Machine Recipes
MMEvents.createProcesses((event) => {
    //#region Portal recipes
    const ArtificialPortalPatter = [
        {
            //Chiseled Hadaline Brick
            id: "mm:chiseled_hadaline_bricks",
            get: { type: "mm:item", item: "architects_palette:chiseled_hadaline_bricks", count: 1 },
            put: { type: "mm:item", item: "architects_palette:chiseled_abyssaline_bricks", count: 1 },
        },
        {
            //Craterstone
            id: "mm:craterstone",
            get: { type: "mm:item", item: "architects_palette:craterstone", count: 1 },
            put: { type: "mm:item", item: "minecraft:cobblestone", count: 1 },
        },
        {
            //Entrails
            id: "mm:entrails",
            get: { type: "mm:item", item: "architects_palette:entrails", count: 1 },
            put: { type: "mm:item", item: "architects_palette:rotten_flesh_block", count: 1 },
        },
        {
            //Esoterrack
            id: "mm:esoterrack",
            get: { type: "mm:item", item: "architects_palette:esoterrack", count: 1 },
            put: { type: "mm:item", item: "architects_palette:rotten_flesh_block", count: 1 },
        },
        {
            //Hadaline Bricks
            id: "mm:hadaline_bricks",
            get: { type: "mm:item", item: "architects_palette:hadaline_bricks", count: 1 },
            put: { type: "mm:item", item: "architects_palette:abyssaline_bricks", count: 1 },
        },
        {
            //Hadaline
            id: "mm:hadaline",
            get: { type: "mm:item", item: "architects_palette:hadaline", count: 1 },
            put: { type: "mm:item", item: "architects_palette:abyssaline", count: 1 },
        },
        {
            //Hadaline Lamp
            id: "mm:hadaline_lamp",
            get: { type: "mm:item", item: "architects_palette:hadaline_lamp", count: 1 },
            put: { type: "mm:item", item: "architects_palette:abyssaline_lamp", count: 1 },
        },
        {
            //Hadaline Pillar
            id: "mm:hadaline_pillar",
            get: { type: "mm:item", item: "architects_palette:hadaline_pillar", count: 1 },
            put: { type: "mm:item", item: "architects_palette:abyssaline_pillar", count: 1 },
        },
        {
            //Hadaline Plating
            id: "mm:hadaline_plating",
            get: { type: "mm:item", item: "architects_palette:hadaline_plating", count: 1 },
            put: { type: "mm:item", item: "architects_palette:abyssaline_plating", count: 1 },
        },
        {
            //Hadaline Tiles
            id: "mm:hadaline_tiles",
            get: { type: "mm:item", item: "architects_palette:hadaline_tiles", count: 1 },
            put: { type: "mm:item", item: "architects_palette:abyssaline_tiles", count: 1 },
        },
        {
            //Moonshale Bricks
            id: "mm:moonshale_bricks",
            get: { type: "mm:item", item: "architects_palette:moonshale_bricks", count: 1 },
            put: { type: "mm:item", item: "minecraft:stone_bricks", count: 1 },
        },
        {
            //Moonshale
            id: "mm:moonshale",
            get: { type: "mm:item", item: "architects_palette:moonshale", count: 1 },
            put: { type: "mm:item", item: "minecraft:stone", count: 1 },
        },
        {
            //Moonstone
            id: "mm:moonstone",
            get: { type: "mm:item", item: "architects_palette:moonstone", count: 1 },
            put: { type: "mm:item", item: "architects_palette:sunstone", count: 1 },
        },
        {
            //Nebulite
            id: "mm:nebulite",
            get: { type: "mm:item", item: "architects_palette:nebulite", count: 1 },
            put: { type: "mm:item", item: "minecraft:diorite", count: 1 },
        },
        {
            //Onyx
            id: "mm:onyx",
            get: { type: "mm:item", item: "architects_palette:onyx", count: 1 },
            put: { type: "mm:item", item: "minecraft:granite", count: 1 },
        },
        {
            //Twisted Leaves
            id: "mm:twisted_leaves",
            get: { type: "mm:item", item: "architects_palette:twisted_leaves", count: 1 },
            put: { type: "mm:item", tag: "minecraft:leaves", count: 1 },
        },
        {
            //Twisted Log
            id: "mm:twisted_log",
            get: { type: "mm:item", item: "architects_palette:twisted_log", count: 1 },
            put: { type: "mm:item", tag: "minecraft:logs", count: 1 },
        },
        {
            //Twisted Planks
            id: "mm:twisted_planks",
            get: { type: "mm:item", item: "architects_palette:twisted_planks", count: 1 },
            put: { type: "mm:item", tag: "minecraft:planks", count: 1 },
        },
        {
            //Twisted Sapling
            id: "mm:twisted_sapling",
            get: { type: "mm:item", item: "architects_palette:twisted_sapling", count: 1 },
            put: { type: "mm:item", tag: "minecraft:saplings", count: 1 },
        },
        {
            //Unobtanium
            id: "mm:unobtanium",
            get: { type: "mm:item", item: "architects_palette:unobtanium", count: 1 },
            put: { type: "mm:item", item: "aethersteel:aethersteel_ingot", count: 3 },
        },
        {
            //Warpstone
            id: "mm:warpstone",
            get: { type: "mm:item", item: "architects_palette:warpstone", count: 1 },
            put: { type: "mm:item", item: "minecraft:clay", count: 1 },
        },
    ];
    ArtificialPortalPatter.forEach((recipe) => {
        event.create(recipe.id).structureId("mm:artificial_portal").ticks(20).input({ type: "mm:input/consume", ingredient: recipe.put }).output({ type: "mm:output/simple", ingredient: recipe.get });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Empowerer Recipes
    //Diamatine Block
    event
        .create("mm:diamatine_block")
        .structureId("mm:autonomus_empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "actuallyadditions:diamatine_crystal_block", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dyes/light_blue", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:clay_ball", count: 2 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:clay", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "actuallyadditions:empowered_diamatine_crystal_block", count: 1 } });

    //Emeradic Block
    event
        .create("mm:emeradic_block")
        .structureId("mm:autonomus_empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "actuallyadditions:emeradic_crystal_block", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dyes/lime", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:grass", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "minecraft:saplings", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:slimeballs", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 600000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "actuallyadditions:empowered_emeradic_crystal_block", count: 1 } });

    //Enori Block
    event
        .create("mm:enori_block")
        .structureId("mm:autonomus_empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "actuallyadditions:enori_crystal_block", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dyes/gray", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:snowball", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:stone_button", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:cobblestone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 650000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "actuallyadditions:empowered_enori_crystal_block", count: 1 } });

    //Palis Block
    event
        .create("mm:palis_block")
        .structureId("mm:autonomus_empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "actuallyadditions:palis_crystal_block", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dyes/cyan", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:prismarine_shard", count: 3 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "actuallyadditions:empowered_palis_crystal_block", count: 1 } });

    //Redstonia Block
    event
        .create("mm:restonia_block")
        .structureId("mm:autonomus_empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "actuallyadditions:restonia_crystal_block", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dyes/red", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:nether_brick", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dusts/redstone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:brick", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 450000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "actuallyadditions:empowered_restonia_crystal_block", count: 1 } });

    //Void Block
    event
        .create("mm:void_block")
        .structureId("mm:autonomus_empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "actuallyadditions:void_crystal_block", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dyes/black", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "minecraft:coals", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:flint", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:stone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 550000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "actuallyadditions:empowered_void_crystal_block", count: 1 } });

    //Double Layer Capacitor
    event
        .create("mm:double_layer_capacitor")
        .structureId("mm:autonomus_empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "enderio:basic_capacitor", count: 2 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:ingots/energetic_alloy", count: 2 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dusts/coal", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 15000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "enderio:double_layer_capacitor", count: 1 } });

    //Double Layer Capacitor
    event
        .create("mm:octadic_capacitor")
        .structureId("mm:autonomus_empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "enderio:double_layer_capacitor", count: 2 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:ingots/vibrant_alloy", count: 2 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:storage_blocks/glowstone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 30000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "enderio:octadic_capacitor", count: 1 } });
    //#endregion

    //// # =================================================================================================== #

    //#region Sieve Recipes
    //Gravel
    event
        .create("mm:sieve_gravel")
        .structureId("mm:quantum_sieve")
        .ticks(5)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:gravel", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 6500 } })
        .output({ type: "mm:output/simple", chance: 0.3, ingredient: { type: "mm:item", item: "minecraft:flint", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.27, ingredient: { type: "mm:item", item: "minecraft:coal", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.24, ingredient: { type: "mm:item", item: "minecraft:lapis_lazuli", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.02, ingredient: { type: "mm:item", item: "minecraft:diamond", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.02, ingredient: { type: "mm:item", item: "minecraft:emerald", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.07, ingredient: { type: "mm:item", item: "minecraft:amethyst_shard", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.24, ingredient: { type: "mm:item", item: "exnihilosequentia:iron_pieces", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "exnihilosequentia:lead_pieces", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "exnihilosequentia:aluminum_pieces", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.16, ingredient: { type: "mm:item", item: "exnihilosequentia:platinum_pieces", count: 2 } });

    //Sand
    event
        .create("mm:sieve_sand")
        .structureId("mm:quantum_sieve")
        .ticks(5)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:sand", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 6500 } })
        .output({ type: "mm:output/simple", chance: 0.18, ingredient: { type: "mm:item", item: "ae2:certus_quartz_crystal", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.24, ingredient: { type: "mm:item", item: "projectred_core:electrotine_dust", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.24, ingredient: { type: "mm:item", item: "exnihilosequentia:copper_pieces", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "exnihilosequentia:nickel_pieces", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "exnihilosequentia:tin_pieces", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.16, ingredient: { type: "mm:item", item: "anoxia:osmium_pieces", count: 2 } });

    //Dust
    event
        .create("mm:sieve_dust")
        .structureId("mm:quantum_sieve")
        .ticks(5)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "exnihilosequentia:dust", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 6500 } })
        .output({ type: "mm:output/simple", chance: 0.3, ingredient: { type: "mm:item", item: "minecraft:bone_meal", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.13, ingredient: { type: "mm:item", item: "minecraft:gunpowder", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.14, ingredient: { type: "mm:item", item: "ae2:sky_dust", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.28, ingredient: { type: "mm:item", item: "ae2:certus_quartz_dust", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.24, ingredient: { type: "mm:item", item: "minecraft:redstone", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.18, ingredient: { type: "mm:item", item: "minecraft:glowstone_dust", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.13, ingredient: { type: "mm:item", item: "minecraft:blaze_powder", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.24, ingredient: { type: "mm:item", item: "exnihilosequentia:gold_pieces", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "exnihilosequentia:silver_pieces", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "exnihilosequentia:zinc_pieces", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.16, ingredient: { type: "mm:item", item: "exnihilosequentia:uranium_pieces", count: 2 } });

    //Netherrack
    event
        .create("mm:sieve_netherrack")
        .structureId("mm:quantum_sieve")
        .ticks(5)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "exnihilosequentia:crushed_netherrack", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 6500 } })
        .output({ type: "mm:output/simple", chance: 0.017, ingredient: { type: "mm:item", item: "minecraft:ancient_debris", count: 2 } });

    //Soul Sand
    event
        .create("mm:sieve_soul_sand")
        .structureId("mm:quantum_sieve")
        .ticks(5)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:soul_sand", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 6500 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "minecraft:nether_wart", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.9, ingredient: { type: "mm:item", item: "minecraft:quartz", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "minecraft:ghast_tear", count: 2 } });

    //Endstone
    event
        .create("mm:sieve_end_stone")
        .structureId("mm:quantum_sieve")
        .ticks(5)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "exnihilosequentia:crushed_end_stone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 6500 } })
        .output({ type: "mm:output/simple", chance: 0.03, ingredient: { type: "mm:item", item: "minecraft:ender_pearl", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.003, ingredient: { type: "mm:item", item: "minecraft:ender_eye", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.03, ingredient: { type: "mm:item", item: "minecraft:chorus_fruit", count: 2 } });

    //Aetherslate
    event
        .create("mm:sieve_aetherslate")
        .structureId("mm:quantum_sieve")
        .ticks(5)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "aethersteel:cobbled_aetherslate", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 6500 } })
        .output({ type: "mm:output/simple", chance: 0.011, ingredient: { type: "mm:item", item: "aethersteel:aether_debris", count: 2 } });
    //#endregion
});
