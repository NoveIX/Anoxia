ServerEvents.recipes((event) => {
    //MM
    event.shaped("mm:machine_controller", [" A ", "BCB", "DBD"], { A: "computercraft:monitor_advanced", B: "#forge:storage_blocks/redstone_alloy", C: "anoxia:machine_casing", D: "ae2:logic_processor" });
    event.shaped("anoxia:machine_casing", [" A ", "ABA", " A "], { A: "anoxia:modularium_ingot", B: "#forge:storage_blocks/redstone_alloy" });
    event.shaped("mm:machine_vent", ["ABA", "BCB", "ABA"], { A: "anoxia:modularium_ingot", B: "enderio:dark_steel_bars", C: "anoxia:amongus" });
    event.shaped("mm:machine_gearbox", ["ABA", "BCB", "ABA"], { A: "anoxia:modularium_ingot", B: "#forge:gears/steel", C: "create:gearbox" });
    event.shaped("mm:machine_circuit", ["ABA", "B B", "ABA"], { A: "anoxia:modularium_ingot", B: "mekanism:basic_control_circuit" });

    //Simple MM
    event.shaped("mm:portal_controller", [" A ", "BCB", "DBD"], { A: "computercraft:monitor_normal", B: "minecraft:redstone_block", C: "minecraft:obsidian", D: "minecraft:comparator" });
    event.shaped("mm:coke_oven_controller", [" A ", "BCB", "DBD"], { A: "computercraft:monitor_normal", B: "minecraft:redstone_block", C: "immersiveengineering:cokebrick", D: "minecraft:comparator" });

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
        event.shaped(recipe.get, [" A ", "BCB", "DBD"], { A: "minecraft:hopper", B: "anoxia:modularium_ingot", C: recipe.put, D: "#forge:chests/wooden" });
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
        event.shaped(recipe.get, ["DBD", "BCB", " A "], { A: "minecraft:hopper", B: "anoxia:modularium_ingot", C: recipe.put, D: "#forge:chests/wooden" });
    });

    //Simple MM
    event.shaped("mm:portal_item_port_input", [" A ", "BCB", "DBD"], { A: "minecraft:hopper", B: "#forge:ingots/obsidian", C: "minecraft:obsidian", D: "#forge:chests/wooden" });
    event.shaped("mm:portal_item_port_output", ["DBD", "BCB", " A "], { A: "minecraft:hopper", B: "#forge:ingots/obsidian", C: "minecraft:obsidian", D: "#forge:chests/wooden" });
    event.shaped("mm:coke_oven_item_port_input", [" A ", "BCB", "DBD"], { A: "minecraft:hopper", B: "#forge:ingots/obsidian", C: "immersiveengineering:cokebrick", D: "#forge:chests/wooden" });
    event.shaped("mm:coke_oven_item_port_output", ["DBD", "BCB", " A "], { A: "minecraft:hopper", B: "#forge:ingots/obsidian", C: "immersiveengineering:cokebrick", D: "#forge:chests/wooden" });
    event.shaped("mm:coke_oven_fluid_port_output", ["DBD", "BCB", " A "], { A: "minecraft:hopper", B: "#forge:ingots/obsidian", C: "immersiveengineering:cokebrick", D: "minecraft:bucket" });
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
        event.shaped(recipe.get, [" A ", "BCB", "DBD"], { A: "minecraft:hopper", B: "anoxia:modularium_ingot", C: recipe.put, D: "minecraft:bucket" });
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
        event.shaped(recipe.get, ["DBD", "BCB", " A "], { A: "minecraft:hopper", B: "anoxia:modularium_ingot", C: recipe.put, D: "minecraft:bucket" });
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
        event.shaped(recipe.get, [" A ", "BCB", "DBD"], { A: "pipez:energy_pipe", B: "anoxia:modularium_ingot", C: recipe.put, D: "#forge:ingots/red_alloy" });
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
        event.shaped(recipe.get, ["DBD", "BCB", " A "], { A: "pipez:energy_pipe", B: "anoxia:modularium_ingot", C: recipe.put, D: "#forge:ingots/red_alloy" });
    });
});

//// # =================================================================================================== #

//Modular Machine Structure
MMEvents.createStructures((event) => {
    //#region Crusher
    event
        .create("mm:crusher")
        .controllerId("mm:machine_controller")
        .name("Collision Crusher")
        .layout((mach) => {
            mach.layer(["AAA", "AAA", "AAA"])
                .layer(["ADA", "3E4", "ADA"])
                .layer(["ADA", "BEB", "ADA"])
                .layer(["A5A", "2E1", "ACA"])
                .layer(["AAA", "AAA", "AAA"])
                .key("A", { block: "anoxia:machine_casing" })
                .key("B", { block: "mm:machine_gearbox" })
                .key("D", { block: "mm:machine_vent" })
                .key("E", { block: "actuallyadditions:crusher_double" })

                //Port
                .key("1", { tag: "mm:machine_item_port_input" })
                .key("2", { tag: "mm:machine_item_port_output" })
                .key("3", { tag: "mm:machine_fluid_port_input" })
                .key("4", { tag: "mm:machine_fluid_port_output" })
                .key("5", { tag: "mm:machine_energy_port_input" });
        });

    //// # =================================================================================================== #

    //#region Empowerer
    event
        .create("mm:empowerer")
        .controllerId("mm:machine_controller")
        .name("Autonomus Empowerer")
        .layout((mach) => {
            mach.layer(["         ", "         ", "         ", "         ", "    2    ", "         ", "         ", "         ", "         "])
                .layer(["         ", "         ", "         ", "         ", "    1    ", "         ", "         ", "         ", "         "])
                .layer(["         ", "    1    ", "         ", "         ", " 1  5  1 ", "         ", "         ", "    1    ", "    C    "])
                .layer(["    B    ", "   BDB   ", "   BAB   ", " BBBABBB ", "BDAAEAADB", " BBBABBB ", "   BAB   ", "   BDB   ", "    B    "])
                .layer(["    B    ", "   BBB   ", "    B    ", " B BBB B ", "BBBBBBBBB", " B BBB B ", "    B    ", "   BBB   ", "    B    "])
                .key("B", { block: "anoxia:machine_casing" })
                .key("A", { block: "mm:machine_circuit" })
                .key("D", { block: "actuallyadditions:display_stand" })
                .key("E", { block: "actuallyadditions:empowerer" })

                //port
                .key("1", { tag: "mm:machine_item_port_input" })
                .key("2", { tag: "mm:machine_item_port_output" })
                .key("5", { tag: "mm:machine_energy_port_input" });
        });
    //#endregion

    //// # =================================================================================================== #

    //#region Energizer
    event
        .create("mm:energizer")
        .controllerId("mm:machine_controller")
        .name("Pulse energizer")
        .layout((mach) => {
            mach.layer(["AAAAA", "AADAA", "ADDDA", "AADAA", "AAAAA"])
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
                .key("1", { tag: "mm:machine_item_port_input" })
                .key("2", { tag: "mm:machine_item_port_output" })
                .key("5", { tag: "mm:machine_energy_port_input" });
        });
    //#endregion

    //// # =================================================================================================== #

    //#region Miner
    event
        .create("mm:miner")
        .controllerId("mm:machine_controller")
        .name("Fusion Interdimensional Miner")
        .layout((mach) => {
            mach.layer(["               ", "               ", "               ", "               ", "               ", "     AABAA     ", "     AABAA     ", "     BBHBB     ", "     AABAA     ", "     AABAA     ", "               ", "               ", "               ", "               ", "               "])
                .layer(["               ", "               ", "               ", "               ", "     ADBDA     ", "    AFFFFFA    ", "    DFFFFFD    ", "    BFFFFFB    ", "    DFFFFFD    ", "    AFFFFFA    ", "     ADBDA     ", "               ", "               ", "               ", "               "])
                .layer(["      AAA      ", "      A5A      ", "      ABA      ", "      ABA      ", "     AAAAA     ", "    AFFFFFA    ", "AAAAAFFFFFAAAAA", "A5BBAFFGFFABB5A", "AAAAAFFFFFAAAAA", "    AFFFFFA    ", "     AAAAA     ", "      ABA      ", "      ABA      ", "      A5A      ", "      AAA      "])
                .layer(["      A2A      ", "      BIB      ", "      BEB      ", "      BEB      ", "     3AEA1     ", "    1FFFFF3    ", "ABBBAFFGFFABBBA", "2IEEEFGLGFEEEI2", "ABBBAFFGFFABBBA", "    3FFFFF1    ", "     1AEA3     ", "      BEB      ", "      BEB      ", "      BIB      ", "      ACA      "])
                .layer(["      AAA      ", "      ABA      ", "      ABA      ", "      ABA      ", "     AAAAA     ", "    AFFFFFA    ", "AAAAAFFFFFAAAAA", "ABBBAFFGFFABBBA", "AAAAAFFFFFAAAAA", "    AFFFFFA    ", "     AAAAA     ", "      ABA      ", "      ABA      ", "      ABA      ", "      AAA      "])
                .layer(["               ", "               ", "               ", "               ", "     ADBDA     ", "    AFFFFFA    ", "    DFFFFFD    ", "    BFFFFFB    ", "    DFFFFFD    ", "    AFFFFFA    ", "     ADBDA     ", "               ", "               ", "               ", "               "])
                .layer(["               ", "               ", "               ", "               ", "               ", "     AABAA     ", "     AABAA     ", "     BBBBB     ", "     AABAA     ", "     AABAA     ", "               ", "               ", "               ", "               ", "               "])
                .key("A", { block: "anoxia:machine_casing" })
                .key("B", { block: "mm:machine_vent" })
                .key("D", { block: "mm:machine_gearbox" })
                .key("E", { block: "mm:machine_circuit" })
                .key("F", { block: "thermal:enderium_block" })
                .key("G", { block: "advanced_ae:quantum_alloy_block" })
                .key("H", { block: "minecraft:beacon" })
                .key("I", { block: "industrialforegoing:laser_drill" })
                .key("L", { block: "industrialforegoing:ore_laser_base" })

                //Port
                .key("1", { tag: "mm:machine_item_port_input" })
                .key("2", { tag: "mm:machine_item_port_output" })
                .key("3", { tag: "mm:machine_fluid_port_input" })
                .key("5", { tag: "mm:machine_energy_port_input" });
        });
    //#endregion

    //// # =================================================================================================== #

    //#region Coke Oven
    event
        .create("mm:oven")
        .controllerId("mm:coke_oven_controller")
        .name("Industrial Coke Oven")
        .layout((mach) => {
            mach.layer(["AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA"])
                .layer(["AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA"])
                .layer(["AAAAAAA", "AAAAAAA", "4AAAAA4", "AAAAAAA", "AAACAAA"])
                .layer(["2A2A2A2", "AAAAAAA", "AAAAAAA", "AAAAAAA", "1A1A1A1"])
                .key("A", { block: "immersiveengineering:cokebrick" })

                //Port
                .key("1", { port: "mm:coke_oven_item_port", input: true })
                .key("2", { port: "mm:coke_oven_item_port", input: false })
                .key("4", { port: "mm:coke_oven_fluid_port", input: false });
        });
    //#endregion

    //// # =================================================================================================== #

    //#region Portal
    event
        .create("mm:portal")
        .controllerId("mm:portal_controller")
        .name("Artificial Portal")
        .layout((mach) => {
            mach.layer(["AAAAA"])
                .layer(["ABBBA"])
                .layer(["ABBBA"])
                .layer(["ABBBA"])
                .layer(["A1C2A"])
                .key("A", { block: "minecraft:obsidian" })
                .key("B", { block: "connectedglass:borderless_glass_purple_pane" })

                //Port
                .key("1", { port: "mm:portal_item_port", input: true })
                .key("2", { port: "mm:portal_item_port", input: false });
        });
    //#endregion

    //// # =================================================================================================== #

    //#region Sieve
    event
        .create("mm:sieve")
        .controllerId("mm:machine_controller")
        .name("Quantum Sieve")
        .layout((mach) => {
            mach.layer(["AAAAA", "AAAAA", "AAAAA", "AAAAA", "AAAAA"])
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
                .key("1", { tag: "mm:machine_item_port_input" })
                .key("2", { tag: "mm:machine_item_port_output" })
                .key("5", { tag: "mm:machine_energy_port_input" });
        });
    //#endregion

    //// # =================================================================================================== #

    //#region Sawmill
    event
        .create("mm:sawmill")
        .controllerId("mm:machine_controller")
        .name("Nanometer Sawmill")
        .layout((mach) => {
            mach.layer([" A   A ", "AE555EA", " A   A "])
                .layer([" ABABA ", "2DDDDD1", " ABCBA "])
                .layer([" AAAAA ", "AAAAAAA", " AAAAA "])

                .key("A", { block: "anoxia:machine_casing" })
                .key("B", { block: "mm:machine_gearbox" })
                .key("D", { block: "ae2:quartz_glass" })
                .key("E", { block: "mm:machine_circuit" })

                //Port
                .key("1", { tag: "mm:machine_item_port_input" })
                .key("2", { tag: "mm:machine_item_port_output" })
                .key("5", { tag: "mm:machine_energy_port_input" });
        });
    //#endregion
});

//// # =================================================================================================== #

//Modular Machine Recipes
MMEvents.createProcesses((event) => {
    //#region Crusher Recipes
    //Gravel
    event
        .create("mm:crusher_gravel")
        .structureId("mm:crusher")
        .ticks(1)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:cobblestone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:fluid", fluid: "minecraft:water", amount: 200 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "minecraft:gravel", count: 1 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:fluid", fluid: "industrialforegoing:sludge", amount: 180 } });

    //Sand
    event
        .create("mm:crusher_sand")
        .structureId("mm:crusher")
        .ticks(1)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:gravel", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:fluid", fluid: "minecraft:water", amount: 200 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "minecraft:sand", count: 1 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:fluid", fluid: "industrialforegoing:sludge", amount: 180 } });

    //Dust
    event
        .create("mm:crusher_dust")
        .structureId("mm:crusher")
        .ticks(1)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:sand", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:fluid", fluid: "minecraft:water", amount: 200 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "exnihilosequentia:dust", count: 1 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:fluid", fluid: "industrialforegoing:sludge", amount: 180 } });

    //Netherrack
    event
        .create("mm:crusher_crushed_netherrack")
        .structureId("mm:crusher")
        .ticks(1)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:netherrack", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:fluid", fluid: "minecraft:water", amount: 200 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "exnihilosequentia:crushed_netherrack", count: 1 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:fluid", fluid: "industrialforegoing:sludge", amount: 180 } });

    //End stone
    event
        .create("mm:crusher_crushed_end_stone")
        .structureId("mm:crusher")
        .ticks(1)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:end_stone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:fluid", fluid: "minecraft:water", amount: 200 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "exnihilosequentia:crushed_end_stone", count: 1 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:fluid", fluid: "industrialforegoing:sludge", amount: 180 } });

    //Aetherslate
    event
        .create("mm:crusher_cobbled_aetherslate")
        .structureId("mm:crusher")
        .ticks(1)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "aethersteel:aetherslate", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:fluid", fluid: "minecraft:water", amount: 200 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "aethersteel:cobbled_aetherslate", count: 1 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:fluid", fluid: "industrialforegoing:sludge", amount: 180 } });

    //Moon
    event
        .create("mm:crusher_moon_cobblestone")
        .structureId("mm:crusher")
        .ticks(1)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "ad_astra:moon_cobblestone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:fluid", fluid: "minecraft:water", amount: 200 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "ad_astra:moon_sand", count: 1 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:fluid", fluid: "industrialforegoing:sludge", amount: 180 } });

    //Moon
    event
        .create("mm:crusher_moon_cobblestone")
        .structureId("mm:crusher")
        .ticks(1)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "ad_astra:mars_cobblestone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:fluid", fluid: "minecraft:water", amount: 200 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "ad_astra:mars_sand", count: 1 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:fluid", fluid: "industrialforegoing:sludge", amount: 180 } });

    //Moon
    event
        .create("mm:crusher_moon_cobblestone")
        .structureId("mm:crusher")
        .ticks(1)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "ad_astra:venus_cobblestone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:fluid", fluid: "minecraft:water", amount: 200 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "ad_astra:venus_sand", count: 1 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:fluid", fluid: "industrialforegoing:sludge", amount: 180 } });
    //#endregion

    //// # =================================================================================================== #

    //#region Empowerer Recipes
    //Diamatine Block
    event
        .create("mm:empowerer_diamatine_block")
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
        .create("mm:empowerer_emeradic_block")
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
        .create("mm:empowerer_enori_block")
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
        .create("mm:empowerer_palis_block")
        .structureId("mm:empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "actuallyadditions:palis_crystal_block", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dyes/cyan", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:prismarine_shard", count: 3 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "actuallyadditions:empowered_palis_crystal_block", count: 1 } });

    //Redstonia Block
    event
        .create("mm:empowerer_restonia_block")
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
        .create("mm:empowerer_void_block")
        .structureId("mm:empowerer")
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
        .create("mm:empowerer_double_layer_capacitor")
        .structureId("mm:empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "enderio:basic_capacitor", count: 2 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:ingots/energetic_alloy", count: 2 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:dusts/coal", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 15000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "enderio:double_layer_capacitor", count: 1 } });

    //Double Layer Capacitor
    event
        .create("mm:empowerer_octadic_capacitor")
        .structureId("mm:empowerer")
        .ticks(10)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "enderio:double_layer_capacitor", count: 2 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:ingots/vibrant_alloy", count: 2 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:storage_blocks/glowstone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 30000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "enderio:octadic_capacitor", count: 1 } });
    //#endregion

    //// # =================================================================================================== #

    //#region Energizer Recipes
    event
        .create("mm:energizer_charged_snowball")
        .structureId("mm:energizer")
        .ticks("5")
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:snowball", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "powah:charged_snowball", count: 1 } });

    event
        .create("mm:energizer_dry_ice")
        .structureId("mm:energizer")
        .ticks("5")
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:blue_ice", count: 4 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 10000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "powah:dry_ice", count: 1 } });

    event
        .create("mm:energizer_ender_core")
        .structureId("mm:energizer")
        .ticks("5")
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:ender_eye", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "powah:dielectric_casing", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "powah:capacitor_basic_tiny", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 50000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "powah:ender_core", count: 1 } });

    event
        .create("mm:energizer_steel_energized")
        .structureId("mm:energizer")
        .ticks("5")
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:ingots/electrum", count: 2 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "forge:ingots/energetic_alloy", count: 2 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 100000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "powah:steel_energized", count: 1 } });

    event
        .create("mm:energizer_crystal_blazing")
        .structureId("mm:energizer")
        .ticks("5")
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "botania:blaze_block", count: 4 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 250000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "powah:crystal_blazing", count: 1 } });

    event
        .create("mm:energizer_crystal_niotic")
        .structureId("mm:energizer")
        .ticks("5")
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "botania:manasteel_ingot", count: 4 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 500000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "powah:crystal_niotic", count: 1 } });

    event
        .create("mm:energizer_crystal_spirited")
        .structureId("mm:energizer")
        .ticks("5")
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "botania:terrasteel_ingot", count: 4 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 1000000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "powah:crystal_spirited", count: 1 } });

    event
        .create("mm:energizer_crystal_nitro")
        .structureId("mm:energizer")
        .ticks("5")
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "botanicadds:gaiasteel_ingot", count: 4 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 2000000 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "powah:crystal_nitro", count: 1 } });
    //#endregion

    //// # =================================================================================================== #

    //#region Miner Recipe
    event
        .create("mm:miner_mine")
        .structureId("mm:miner")
        .ticks(1200)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "chemlib:hydrogen", count: 16 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:fluid", fluid: "ad_astra:cryo_fuel", amount: 16000 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 250000 } })

        //20%
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "minecraft:glowstone", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "immersiveengineering:deepslate_ore_aluminum", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "minecraft:deepslate_emerald_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "mekanism:deepslate_osmium_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "minecraft:ancient_debris", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "mekanism:deepslate_fluorite_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "minecraft:deepslate_redstone_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "ad_astra:deepslate_calorite_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "thermal:deepslate_cinnabar_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "thermal:deepslate_sapphire_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "minecraft:nether_quartz_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "thermal:deepslate_silver_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "exnihilosequentia:raw_platinum", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "minecraft:deepslate_copper_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "thermal:deepslate_sulfur_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "thermal:deepslate_nickel_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "minecraft:deepslate_iron_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "thermal:deepslate_lead_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "ad_astra:deepslate_ostrum_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "thermal:deepslate_tin_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "thermal:deepslate_niter_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "mekanism:deepslate_uranium_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "minecraft:deepslate_diamond_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "minecraft:deepslate_gold_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "minecraft:deepslate_lapis_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "minecraft:deepslate_coal_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "ad_astra:deepslate_desh_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "thermal:deepslate_ruby_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "ad_astra:moon_cheese_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "aethersteel:aether_debris", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "ad_astra:deepslate_ice_shard_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "bloodmagic:dungeon_ore", count: 1 } })

        //15%
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "minecraft:glowstone", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "immersiveengineering:deepslate_ore_aluminum", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "minecraft:deepslate_emerald_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "mekanism:deepslate_osmium_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "minecraft:ancient_debris", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "mekanism:deepslate_fluorite_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "minecraft:deepslate_redstone_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "ad_astra:deepslate_calorite_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "thermal:deepslate_cinnabar_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "thermal:deepslate_sapphire_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "minecraft:nether_quartz_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "thermal:deepslate_silver_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "exnihilosequentia:raw_platinum", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "minecraft:deepslate_copper_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "thermal:deepslate_sulfur_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "thermal:deepslate_nickel_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "minecraft:deepslate_iron_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "thermal:deepslate_lead_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "ad_astra:deepslate_ostrum_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "thermal:deepslate_tin_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "thermal:deepslate_niter_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "mekanism:deepslate_uranium_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "minecraft:deepslate_diamond_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "minecraft:deepslate_gold_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "minecraft:deepslate_lapis_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "minecraft:deepslate_coal_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "ad_astra:deepslate_desh_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "thermal:deepslate_ruby_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "ad_astra:moon_cheese_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "aethersteel:aether_debris", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "ad_astra:deepslate_ice_shard_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.15, ingredient: { type: "mm:item", item: "bloodmagic:dungeon_ore", count: 1 } })

        //10%
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "minecraft:glowstone", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "immersiveengineering:deepslate_ore_aluminum", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "minecraft:deepslate_emerald_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "mekanism:deepslate_osmium_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "minecraft:ancient_debris", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "mekanism:deepslate_fluorite_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "minecraft:deepslate_redstone_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "ad_astra:deepslate_calorite_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "thermal:deepslate_cinnabar_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "thermal:deepslate_sapphire_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "minecraft:nether_quartz_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "thermal:deepslate_silver_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "exnihilosequentia:raw_platinum", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "minecraft:deepslate_copper_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "thermal:deepslate_sulfur_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "thermal:deepslate_nickel_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "minecraft:deepslate_iron_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "thermal:deepslate_lead_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "ad_astra:deepslate_ostrum_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "thermal:deepslate_tin_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "thermal:deepslate_niter_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "mekanism:deepslate_uranium_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "minecraft:deepslate_diamond_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "minecraft:deepslate_gold_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "minecraft:deepslate_lapis_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "minecraft:deepslate_coal_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "ad_astra:deepslate_desh_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "thermal:deepslate_ruby_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "ad_astra:moon_cheese_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "aethersteel:aether_debris", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "ad_astra:deepslate_ice_shard_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.1, ingredient: { type: "mm:item", item: "bloodmagic:dungeon_ore", count: 1 } })

        //5%
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "minecraft:glowstone", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "immersiveengineering:deepslate_ore_aluminum", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "minecraft:deepslate_emerald_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "mekanism:deepslate_osmium_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "minecraft:ancient_debris", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "mekanism:deepslate_fluorite_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "minecraft:deepslate_redstone_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "ad_astra:deepslate_calorite_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "thermal:deepslate_cinnabar_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "thermal:deepslate_sapphire_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "minecraft:nether_quartz_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "thermal:deepslate_silver_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "exnihilosequentia:raw_platinum", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "minecraft:deepslate_copper_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "thermal:deepslate_sulfur_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "thermal:deepslate_nickel_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "minecraft:deepslate_iron_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "thermal:deepslate_lead_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "ad_astra:deepslate_ostrum_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "thermal:deepslate_tin_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "thermal:deepslate_niter_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "mekanism:deepslate_uranium_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "minecraft:deepslate_diamond_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "minecraft:deepslate_gold_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "minecraft:deepslate_lapis_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "minecraft:deepslate_coal_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "ad_astra:deepslate_desh_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "thermal:deepslate_ruby_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "ad_astra:moon_cheese_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "aethersteel:aether_debris", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "ad_astra:deepslate_ice_shard_ore", count: 1 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "bloodmagic:dungeon_ore", count: 1 } });
    //#endregion

    //// # =================================================================================================== #

    //#region Coke Oven Recipes
    event
        .create("mm:oven_charcoal")
        .structureId("mm:oven")
        .ticks(900)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: "minecraft:logs", count: 4 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "minecraft:charcoal", count: 4 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:fluid", fluid: "immersiveengineering:creosote", amount: 1000 } });

    event
        .create("mm:oven_coke")
        .structureId("mm:oven")
        .ticks(1800)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:coal", count: 4 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "thermal:coal_coke", count: 4 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:fluid", fluid: "immersiveengineering:creosote", amount: 4000 } });

    event
        .create("mm:oven_coke_block")
        .structureId("mm:oven")
        .ticks(16200)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:coal_block", count: 4 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "thermal:coal_coke_block", count: 4 } })
        .output({ type: "mm:output/simple", ingredient: { type: "mm:fluid", fluid: "immersiveengineering:creosote", amount: 18000 } });
    //#endregion

    //// # =================================================================================================== #

    //#region Portal recipes
    const ArtificialPortalPatter = [
        {
            //Chiseled Hadaline Brick
            id: "mm:portal_chiseled_hadaline_bricks",
            get: { type: "mm:item", item: "architects_palette:chiseled_hadaline_bricks", count: 1 },
            put: { type: "mm:item", item: "architects_palette:chiseled_abyssaline_bricks", count: 1 },
        },
        {
            //Craterstone
            id: "mm:portal_craterstone",
            get: { type: "mm:item", item: "architects_palette:craterstone", count: 1 },
            put: { type: "mm:item", item: "minecraft:cobblestone", count: 1 },
        },
        {
            //Entrails
            id: "mm:portal_entrails",
            get: { type: "mm:item", item: "architects_palette:entrails", count: 1 },
            put: { type: "mm:item", item: "architects_palette:rotten_flesh_block", count: 1 },
        },
        {
            //Esoterrack
            id: "mm:portal_esoterrack",
            get: { type: "mm:item", item: "architects_palette:esoterrack", count: 1 },
            put: { type: "mm:item", item: "architects_palette:rotten_flesh_block", count: 1 },
        },
        {
            //Hadaline Bricks
            id: "mm:portal_hadaline_bricks",
            get: { type: "mm:item", item: "architects_palette:hadaline_bricks", count: 1 },
            put: { type: "mm:item", item: "architects_palette:abyssaline_bricks", count: 1 },
        },
        {
            //Hadaline
            id: "mm:portal_hadaline",
            get: { type: "mm:item", item: "architects_palette:hadaline", count: 1 },
            put: { type: "mm:item", item: "architects_palette:abyssaline", count: 1 },
        },
        {
            //Hadaline Lamp
            id: "mm:portal_hadaline_lamp",
            get: { type: "mm:item", item: "architects_palette:hadaline_lamp", count: 1 },
            put: { type: "mm:item", item: "architects_palette:abyssaline_lamp", count: 1 },
        },
        {
            //Hadaline Pillar
            id: "mm:portal_hadaline_pillar",
            get: { type: "mm:item", item: "architects_palette:hadaline_pillar", count: 1 },
            put: { type: "mm:item", item: "architects_palette:abyssaline_pillar", count: 1 },
        },
        {
            //Hadaline Plating
            id: "mm:portal_hadaline_plating",
            get: { type: "mm:item", item: "architects_palette:hadaline_plating", count: 1 },
            put: { type: "mm:item", item: "architects_palette:abyssaline_plating", count: 1 },
        },
        {
            //Hadaline Tiles
            id: "mm:portal_hadaline_tiles",
            get: { type: "mm:item", item: "architects_palette:hadaline_tiles", count: 1 },
            put: { type: "mm:item", item: "architects_palette:abyssaline_tiles", count: 1 },
        },
        {
            //Moonshale Bricks
            id: "mm:portal_moonshale_bricks",
            get: { type: "mm:item", item: "architects_palette:moonshale_bricks", count: 1 },
            put: { type: "mm:item", item: "minecraft:stone_bricks", count: 1 },
        },
        {
            //Moonshale
            id: "mm:portal_moonshale",
            get: { type: "mm:item", item: "architects_palette:moonshale", count: 1 },
            put: { type: "mm:item", item: "minecraft:stone", count: 1 },
        },
        {
            //Moonstone
            id: "mm:portal_moonstone",
            get: { type: "mm:item", item: "architects_palette:moonstone", count: 1 },
            put: { type: "mm:item", item: "architects_palette:sunstone", count: 1 },
        },
        {
            //Nebulite
            id: "mm:portal_nebulite",
            get: { type: "mm:item", item: "architects_palette:nebulite", count: 1 },
            put: { type: "mm:item", item: "minecraft:diorite", count: 1 },
        },
        {
            //Onyx
            id: "mm:portal_onyx",
            get: { type: "mm:item", item: "architects_palette:onyx", count: 1 },
            put: { type: "mm:item", item: "minecraft:granite", count: 1 },
        },
        {
            //Twisted Leaves
            id: "mm:portal_twisted_leaves",
            get: { type: "mm:item", item: "architects_palette:twisted_leaves", count: 1 },
            put: { type: "mm:item", tag: "minecraft:leaves", count: 1 },
        },
        {
            //Twisted Log
            id: "mm:portal_twisted_log",
            get: { type: "mm:item", item: "architects_palette:twisted_log", count: 1 },
            put: { type: "mm:item", tag: "minecraft:logs", count: 1 },
        },
        {
            //Twisted Planks
            id: "mm:portal_twisted_planks",
            get: { type: "mm:item", item: "architects_palette:twisted_planks", count: 1 },
            put: { type: "mm:item", tag: "minecraft:planks", count: 1 },
        },
        {
            //Twisted Sapling
            id: "mm:portal_twisted_sapling",
            get: { type: "mm:item", item: "architects_palette:twisted_sapling", count: 1 },
            put: { type: "mm:item", tag: "minecraft:saplings", count: 1 },
        },
        {
            //Unobtanium
            id: "mm:portal_unobtanium",
            get: { type: "mm:item", item: "architects_palette:unobtanium", count: 1 },
            put: { type: "mm:item", item: "aethersteel:aethersteel_ingot", count: 3 },
        },
        {
            //Warpstone
            id: "mm:portal_warpstone",
            get: { type: "mm:item", item: "architects_palette:warpstone", count: 1 },
            put: { type: "mm:item", item: "minecraft:clay", count: 1 },
        },
    ];
    ArtificialPortalPatter.forEach((recipe) => {
        event.create(recipe.id).structureId("mm:portal").ticks(100).input({ type: "mm:input/consume", ingredient: recipe.put }).output({ type: "mm:output/simple", ingredient: recipe.get });
    });
    //#endregion

    //// # =================================================================================================== #

    //#region Sieve Recipes
    //Gravel
    event
        .create("mm:sieve_gravel")
        .structureId("mm:sieve")
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
        .structureId("mm:sieve")
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
        .structureId("mm:sieve")
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
        .structureId("mm:sieve")
        .ticks(5)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "exnihilosequentia:crushed_netherrack", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 6500 } })
        .output({ type: "mm:output/simple", chance: 0.02, ingredient: { type: "mm:item", item: "minecraft:ancient_debris", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.12, ingredient: { type: "mm:item", item: "anoxia:demonite_pieces", count: 2 } });

    //Soul Sand
    event
        .create("mm:sieve_soul_sand")
        .structureId("mm:sieve")
        .ticks(5)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "minecraft:soul_sand", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 6500 } })
        .output({ type: "mm:output/simple", chance: 0.2, ingredient: { type: "mm:item", item: "minecraft:nether_wart", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.9, ingredient: { type: "mm:item", item: "minecraft:quartz", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.05, ingredient: { type: "mm:item", item: "minecraft:ghast_tear", count: 2 } });

    //Endstone
    event
        .create("mm:sieve_end_stone")
        .structureId("mm:sieve")
        .ticks(5)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "exnihilosequentia:crushed_end_stone", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 6500 } })
        .output({ type: "mm:output/simple", chance: 0.03, ingredient: { type: "mm:item", item: "minecraft:ender_pearl", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.003, ingredient: { type: "mm:item", item: "minecraft:ender_eye", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.03, ingredient: { type: "mm:item", item: "minecraft:chorus_fruit", count: 2 } })
        .output({ type: "mm:output/simple", chance: 0.25, ingredient: { type: "mm:item", item: "mysticalagriculture:prosperity_shard", count: 2 } });

    //Aetherslate
    event
        .create("mm:sieve_aetherslate")
        .structureId("mm:sieve")
        .ticks(5)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "aethersteel:cobbled_aetherslate", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 6500 } })
        .output({ type: "mm:output/simple", chance: 0.02, ingredient: { type: "mm:item", item: "aethersteel:aether_debris", count: 2 } });

    //Desh
    event
        .create("mm:sieve_moon_sand")
        .structureId("mm:sieve")
        .ticks(5)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "ad_astra:moon_sand", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 6500 } })
        .output({ type: "mm:output/simple", chance: 0.16, ingredient: { type: "mm:item", item: "anoxia:desh_pieces", count: 2 } });

    //Ostreum
    event
        .create("mm:sieve_mars_sand")
        .structureId("mm:sieve")
        .ticks(5)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "ad_astra:mars_sand", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 6500 } })
        .output({ type: "mm:output/simple", chance: 0.16, ingredient: { type: "mm:item", item: "anoxia:ostrum_pieces", count: 2 } });

    //Calorite
    event
        .create("mm:sieve_venus_sand")
        .structureId("mm:sieve")
        .ticks(5)
        .input({ type: "mm:input/consume", ingredient: { type: "mm:item", item: "ad_astra:venus_sand", count: 1 } })
        .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 6500 } })
        .output({ type: "mm:output/simple", chance: 0.16, ingredient: { type: "mm:item", item: "anoxia:calorite_pieces", count: 2 } });

    //#endregion

    //// # =================================================================================================== #

    //// # =================================================================================================== #

    //#region Sawmill Recipes
    const NanometerSawmillPattern = [
        //Minecraft
        { id: "mm:sawmill_oak_planks", get: "minecraft:oak_planks", put: "minecraft:oak_logs" },
        { id: "mm:sawmill_spruce_planks", get: "minecraft:spruce_planks", put: "minecraft:spruce_logs" },
        { id: "mm:sawmill_birch_planks", get: "minecraft:birch_planks", put: "minecraft:birch_logs" },
        { id: "mm:sawmill_jungle_planks", get: "minecraft:jungle_planks", put: "minecraft:jungle_logs" },
        { id: "mm:sawmill_acacia_planks", get: "minecraft:acacia_planks", put: "minecraft:acacia_logs" },
        { id: "mm:sawmill_dark_oak_planks", get: "minecraft:dark_oak_planks", put: "minecraft:dark_oak_logs" },
        { id: "mm:sawmill_mangrove_planks", get: "minecraft:mangrove_planks", put: "minecraft:mangrove_logs" },
        { id: "mm:sawmill_cherry_planks", get: "minecraft:cherry_planks", put: "minecraft:cherry_logs" },
        { id: "mm:sawmill_crimson_planks", get: "minecraft:crimson_planks", put: "minecraft:crimson_stems" },
        { id: "mm:sawmill_warped_planks", get: "minecraft:warped_planks", put: "minecraft:warped_stems" },

        //Ad Astra
        { id: "mm:sawmill_aeronos_planks", get: "ad_astra:aeronos_planks", put: "ad_astra:aeronos_caps" },
        { id: "mm:sawmill_strophar_planks", get: "ad_astra:strophar_planks", put: "ad_astra:strophar_caps" },
        { id: "mm:sawmill_glacian_planks", get: "ad_astra:glacian_planks", put: "ad_astra:glacian_logs" },

        //Achitects
        { id: "mm:sawmill_twisted_planks", get: "architects_palette:twisted_planks", put: "architects_palette:twisted_logs" },

        //Ars
        { id: "mm:sawmill_", get: "ars_nouveau:archwood_planks", put: "forge:logs/archwood" },

        //Botania
        { id: "mm:sawmill_", get: "botania:livingwood_planks", put: "botania:livingwood_logs" },
        { id: "mm:sawmill_", get: "botania:dreamwood_planks", put: "botania:dreamwood_logs" },

        //Ancient
        { id: "mm:sawmill_", get: "quark:ancient_planks", put: "quark:ancient_logs" },
        { id: "mm:sawmill_", get: "quark:azalea_planks", put: "quark:azalea_logs" },
        { id: "mm:sawmill_", get: "quark:blossom_planks", put: "quark:blossom_logs" },

        //Twilight
        { id: "mm:sawmill_twilight_oak_planks", get: "twilightforest:twilight_oak_planks", put: "twilightforest:twilight_oak_logs" },
        { id: "mm:sawmill_canopy_planks", get: "twilightforest:canopy_planks", put: "twilightforest:canopy_logs" },
        { id: "mm:sawmill_mangrove_planks", get: "twilightforest:mangrove_planks", put: "twilightforest:mangrove_logs" },
        { id: "mm:sawmill_dark_planks", get: "twilightforest:dark_planks", put: "twilightforest:darkwood_logs" },
        { id: "mm:sawmill_time_planks", get: "twilightforest:time_planks", put: "twilightforest:timewood_logs" },
        { id: "mm:sawmill_transformation_planks", get: "twilightforest:transformation_planks", put: "twilightforest:transwood_logs" },
        { id: "mm:sawmill_mining_planks", get: "twilightforest:mining_planks", put: "twilightforest:mining_logs" },
        { id: "mm:sawmill_sorting_planks", get: "twilightforest:sorting_planks", put: "twilightforest:sortwood_logs" },

        //Thermal
        { id: "mm:sawmill_rubberwood_planks", get: "thermal:rubberwood_planks", put: "forge:rubberwood_logs" },
    ];
    NanometerSawmillPattern.forEach((recipe) => {
        event
            .create(recipe.id)
            .structureId("mm:sawmill")
            .ticks(5)
            .input({ type: "mm:input/consume", ingredient: { type: "mm:item", tag: recipe.put, count: 1 } })
            .input({ type: "mm:input/consume", ingredient: { type: "mm:energy", amount: 2000 } })
            .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: recipe.get, count: 10 } })
            .output({ type: "mm:output/simple", ingredient: { type: "mm:item", item: "mekanism:sawdust", count: 2 } });
    });
    //#endregion

    //// # =================================================================================================== #
});
