ServerEvents.recipes((event) => {
    //MM
    event.shaped("mm:machine_controller", [" A ", "RMR", "LRL"], { A: "computercraft:monitor_advanced", R: "#forge:storage_blocks/redstone_alloy", M: "anoxia:machine_casing", L: "ae2:logic_processor" });
    event.shaped("anoxia:machine_casing", [" M ", "MRM", " M "], { M: "anoxia:modularium", R: "#forge:storage_blocks/redstone_alloy" });
    event.shaped("mm:machine_vent", ["MBM", "BAB", "MBM"], { M: "anoxia:modularium", B: "enderio:dark_steel_bars", A: "anoxia:amongus" });
    event.shaped("mm:machine_gearbox", ["MGM", "GCG", "MGM"], { M: "anoxia:modularium", G: "#forge:gears/steel", C: "create:gearbox" });
    event.shaped("mm:machine_circuit", ["MCM", "C C", "MCM"], { M: "anoxia:modularium", C: "mekanism:basic_control_circuit" });

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
    function ItemInPortRecipes({ get, put }) {
        event.shaped(get, [" H ", "MPM", "CMC"], { H: "minecraft:hopper", M: "anoxia:modularium", P: put, C: "#forge:chests/wooden" });
    }
    ItemInPort.forEach(ItemInPortRecipes);

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
    function ItemOutPortRecipes({ get, put }) {
        event.shaped(get, ["CMC", "MPM", " H "], { H: "minecraft:hopper", M: "anoxia:modularium", P: put, C: "#forge:chests/wooden" });
    }
    ItemOutPort.forEach(ItemOutPortRecipes);
    //#endregion

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
    function FluidInPortRecipes({ get, put }) {
        event.shaped(get, [" H ", "MPM", "BMB"], { H: "minecraft:hopper", M: "anoxia:modularium", P: put, B: "minecraft:bucket" });
    }
    FluidInPort.forEach(FluidInPortRecipes);

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
    function FluidOutPortRecipes({ get, put }) {
        event.shaped(get, ["BMB", "MPM", " H "], { H: "minecraft:hopper", M: "anoxia:modularium", P: put, B: "minecraft:bucket" });
    }
    FluidOutPort.forEach(FluidOutPortRecipes);
    //#endregion

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
    function EnergyInPortRecipes({ get, put }) {
        event.shaped(get, [" E ", "MPM", "RMR"], { E: "pipez:energy_pipe", M: "anoxia:modularium", P: put, R: "#forge:ingots/red_alloy" });
    }
    EnergyInPort.forEach(EnergyInPortRecipes);

    const EnergyOutPort = [
        //Output
        { get: "mm:tiny_energy_port_output", put: "moonbase:machine_casing" },
        { get: "mm:small_energy_port_output", put: "mm:tiny_energy_port_output" },
        { get: "mm:normal_energy_port_output", put: "mm:small_energy_port_output" },
        { get: "mm:reinforced_energy_port_output", put: "mm:normal_energy_port_output" },
        { get: "mm:big_energy_port_output", put: "mm:reinforced_energy_port_output" },
        { get: "mm:huge_energy_port_output", put: "mm:big_energy_port_output" },
        { get: "mm:ludicrous_energy_port_output", put: "mm:huge_energy_port_output" },
        { get: "mm:ultimate_energy_port_output", put: "mm:ludicrous_energy_port_output" },
    ];
    function EnergyOutPortRecipes({ get, put }) {
        event.shaped(get, ["RMR", "MPM", " E "], { E: "pipez:energy_pipe", M: "moonbase:modularium", P: put, R: "#forge:ingots/red_alloy" });
    }
    EnergyOutPort.forEach(EnergyOutPortRecipes);
});

//#region Modular Machine Structure
MMEvents.createStructures((event) => {
    //Autonomus Empowerer
    event
        .create("mm:empowerer")
        .controllerId("mm:machine_controller")
        .name("Autonomus Empowerer")
        .layout((a) => {
            a.layer(["         ", "         ", "         ", "         ", "    O    ", "         ", "         ", "         ", "         "])
                .layer(["         ", "         ", "         ", "         ", "    I    ", "         ", "         ", "         ", "         "])
                .layer(["         ", "    I    ", "         ", "         ", " I  E  I ", "         ", "         ", "    I    ", "    C    "])
                .layer(["    B    ", "   B1B   ", "   BAB   ", " BBBABBB ", "B1AA2AA1B", " BBBABBB ", "   BAB   ", "   B1B   ", "    B    "])
                .layer(["    B    ", "   BBB   ", "    B    ", " B BBB B ", "BBBBBBBBB", " B BBB B ", "    B    ", "   BBB   ", "    B    "])
                .key("B", { block: "moonbase:machine_casing" })
                .key("A", { block: "mm:machine_circuit" })
                .key("1", { block: "actuallyadditions:display_stand" })
                .key("2", { block: "actuallyadditions:empowerer" })

                //port
                .key("I", { portType: "mm:item", input: true })
                .key("E", { portType: "mm:energy", input: true })
                .key("O", { portType: "mm:item", input: false });
        });

    //Artificial Portal
    event
        .create("mm:portal")
        .controllerId("mm:machine_controller")
        .name("Artificial Portal")
        .layout((a) => {
            a.layer(["BBBBB"])
                .layer(["BPPPB"])
                .layer(["BPPPB"])
                .layer(["BPPPB"])
                .layer(["BICOB"])
                .key("B", { block: "rechiseled:obsidian_dark_connecting" })
                .key("P", { block: "connectedglass:borderless_glass_purple_pane" })

                //Port
                .key("I", { portType: "mm:item", input: true })
                .key("O", { portType: "mm:item", input: false });
        });

    //Pulse energizer
    event
        .create("mm:energizer")
        .controllerId("mm:machine_controller")
        .name("Pulse energizer")
        .layout((a) => {
            a.layer(["BBBBB", "BBVBB", "BVVVB", "BBVBB", "BBBBB"])
                .layer(["BGGGB", "G D G", "GDDDG", "G D G", "BGGGB"])
                .layer(["BGGGB", "G R G", "GRRRG", "G R G", "BGGGB"])
                .layer(["BGGGB", "G   G", "G   G", "G   G", "BGGGB"])
                .layer(["BGGGB", "G   G", "G 1 G", "G   G", "BGGGB"])
                .layer(["BGEGB", "I   O", "G A G", "O   I", "BGCGB"])
                .layer(["BVBVB", "VBABV", "BAAAB", "VBABV", "BVBVB"])
                .key("B", { block: "moonbase:machine_casing" })
                .key("A", { block: "mm:machine_circuit" })
                .key("V", { block: "mm:machine_vent" })
                .key("G", { block: "ae2:quartz_glass" })
                .key("D", { block: "thermal:dynamo_magmatic" })
                .key("R", { block: "powah:energizing_rod_nitro" })
                .key("1", { block: "powah:energizing_orb" })

                //Port
                .key("I", { portType: "mm:item", input: true })
                .key("E", { portType: "mm:energy", input: true })
                .key("O", { portType: "mm:item", input: false });
        });
});

//#endregion

//#region Modular Machine Recipes
MMEvents.createProcesses((event) => {
    ////Artificial Portal
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
    function ArtificialPortalRecipes({ id, get, put }) {
        event.create(id).structureId("mm:portal").ticks(20).input({ type: "mm:input/consume", ingredient: put }).output({ type: "mm:output/simple", ingredient: get });
    }
    ArtificialPortalPatter.forEach(ArtificialPortalRecipes);
});

////Empowerer
MMEvents.createProcesses((event) => {
    //Diamatine Block
    event
        .create("mm:diamatine_block")
        .structureId("mm:empowerer")
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
        .structureId("mm:empowerer")
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
        .structureId("mm:empowerer")
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
        .structureId("mm:empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "actuallyadditions:palis_crystal_block", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dyes/cyan", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:prismarine_shard", count: 3 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "actuallyadditions:empowered_palis_crystal_block", count: 1 } });

    //Redstonia Block
    event
        .create("mm:restonia_block")
        .structureId("mm:empowerer")
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
        .structureId("mm:empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "actuallyadditions:void_crystal_block", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dyes/black", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "minecraft:coals", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:flint", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:stone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 550000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "actuallyadditions:empowered_void_crystal_block", count: 1 } });
});
//#endregion
