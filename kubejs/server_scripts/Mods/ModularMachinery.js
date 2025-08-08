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
