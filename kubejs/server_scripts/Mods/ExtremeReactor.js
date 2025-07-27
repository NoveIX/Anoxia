ServerEvents.recipes((event) => {
    //#region Reactor Basic
    //Reactor Controller
    event.remove({ output: "bigreactors:basic_reactorcontroller" });
    event.shaped("bigreactors:basic_reactorcontroller", ["ABA", "CDC", "AEA"], {
        A: "bigreactors:basic_reactorcasing",
        B: "computercraft:monitor_normal",
        C: "#forge:ingots/uranium",
        D: "oc2r:cpu_tier_2",
        E: "enderio:ender_resonator",
    });

    //Reactor Casing
    event.remove({ output: "bigreactors:basic_reactorcasing" });
    event.shaped(Item.of("bigreactors:basic_reactorcasing", 4), ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/invar",
        B: "#forge:ingots/graphite",
        C: "enderio:void_chassis",
    });

    //Reactor Glass
    event.remove({ output: "bigreactors:basic_reactorglass" });
    event.shaped("bigreactors:basic_reactorglass", ["ABA"], {
        A: "#thermal:glass/hardened",
        B: "bigreactors:basic_reactorcasing",
    });

    //Fuel Rod
    event.remove({ output: "bigreactors:basic_reactorfuelrod" });
    event.shaped("bigreactors:basic_reactorfuelrod", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/lead",
        B: "#forge:ingots/hop_graphite",
        C: "#thermal:glass/hardened",
        D: "#forge:ingots/uranium",
    });

    //Control Rod
    event.remove({ output: "bigreactors:basic_reactorcontrolrod" });
    event.shaped("bigreactors:basic_reactorcontrolrod", ["ABA", "CDC", "AEA"], {
        A: "bigreactors:basic_reactorcasing",
        B: "#forge:dusts/redstone",
        C: "#forge:ingots/iron",
        D: "minecraft:piston",
        E: "#forge:ingots/uranium",
    });

    //Reactor Power Tap Active
    event.remove({ output: "bigreactors:basic_reactorpowertapfe_active" });
    event.shaped("bigreactors:basic_reactorpowertapfe_active", ["ABA", "BCB", "ABA"], {
        A: "bigreactors:basic_reactorcasing",
        B: "#forge:ingots/energetic_alloy",
        C: "#forge:storage_blocks/redstone",
    });

    //Reactor Power Tap Passive
    event.remove({ output: "bigreactors:basic_reactorpowertapfe_passive" });
    event.shaped("bigreactors:basic_reactorpowertapfe_passive", ["ABA", "BCB", "ABA"], {
        A: "bigreactors:basic_reactorcasing",
        B: "#forge:storage_blocks/redstone",
        C: "#forge:ingots/energetic_alloy",
    });

    //Reactor Redstone Port
    event.remove({ output: "bigreactors:basic_reactorredstoneport" });
    event.shaped("bigreactors:basic_reactorredstoneport", ["ABA", "BCB", "ABA"], {
        A: "bigreactors:basic_reactorcasing",
        B: "#forge:ingots/redstone_alloy",
        C: "#forge:ingots/gold",
    });
    //#endregion

    //#region Turbine Basic
    //Turbine Controller
    event.remove({ output: "bigreactors:basic_turbinecontroller" });
    event.shaped("bigreactors:basic_turbinecontroller", ["ABA", "CDC", "AEA"], {
        A: "bigreactors:basic_turbinecasing",
        B: "computercraft:monitor_normal",
        C: "#forge:ingots/blutonium",
        D: "bigreactors:basic_reactorcontroller",
        E: "#forge:dusts/redstone",
    });

    //Turbine Casing
    event.remove({ output: "bigreactors:basic_turbinecasing" });
    event.shaped(Item.of("bigreactors:basic_turbinecasing", 4), ["ABA", "BCB", "ABA"], {
        A: "#forge:ingots/ludicrite",
        B: "#forge:ingots/graphite",
        C: "enderio:void_chassis",
    });

    //Turbine Glass
    event.remove({ output: "bigreactors:basic_turbineglass" });
    event.shaped("bigreactors:basic_turbineglass", ["ABA"], {
        A: "#thermal:glass/hardened",
        B: "bigreactors:basic_turbinecasing",
    });

    //Turbine Bearing
    event.remove({ output: "bigreactors:basic_turbinerotorbearing" });
    event.shaped("bigreactors:basic_turbinerotorbearing", ["ABA", "ABA", "ABA"], {
        A: "bigreactors:basic_turbinecasing",
        B: "bigreactors:basic_turbinerotorshaft",
    });

    // Turbine Rotor
    event.remove({ output: "bigreactors:basic_turbinerotorshaft" });
    event.shaped("bigreactors:basic_turbinerotorshaft", [" A ", "ABA", " A "], {
        A: "advgenerators:turbine_blade",
        B: "create:shaft",
    });

    // Turbine Blade
    event.remove({ output: "bigreactors:basic_turbinerotorblade" });
    event.shaped("bigreactors:basic_turbinerotorblade", ["AAA"], {
        A: "advgenerators:turbine_blade",
    });

    //Reactor Power Tap Active
    event.remove({ output: "bigreactors:basic_turbinepowertapfe_active" });
    event.shaped("bigreactors:basic_turbinepowertapfe_active", ["ABA", "BCB", "ABA"], {
        A: "bigreactors:basic_turbinecasing",
        B: "#forge:ingots/energetic_alloy",
        C: "#forge:storage_blocks/redstone",
    });

    //Reactor Power Tap Passive
    event.remove({ output: "bigreactors:reinforced_turbinepowertapfe_passive" });
    event.shaped("bigreactors:reinforced_turbinepowertapfe_passive", ["ABA", "BCB", "ABA"], {
        A: "bigreactors:basic_turbinecasing",
        B: "#forge:storage_blocks/redstone",
        C: "#forge:ingots/energetic_alloy",
    });

    //Reactor Redstone Port
    event.remove({ output: "bigreactors:basic_turbineredstoneport" });
    event.shaped("bigreactors:basic_turbineredstoneport", ["ABA", "BCB", "ABA"], {
        A: "bigreactors:basic_turbinecasing",
        B: "#forge:ingots/redstone_alloy",
        C: "#forge:ingots/gold",
    });
    //#endregion

    //#region Reinforced Reactor
    //Reactor Controller
    event.remove({ output: "bigreactors:reinforced_reactorcontroller" });
    event.shaped("bigreactors:reinforced_reactorcontroller", ["ABA", "CDC", "AEA"], {
        A: "bigreactors:reinforced_reactorcasing",
        B: "computercraft:monitor_advanced",
        C: "#forge:ingots/uranium",
        D: "oc2r:cpu_tier_4",
        E: "enderio:ender_resonator",
    });

    //Reactor Casing
    event.remove({ output: "bigreactors:reinforced_reactorcasing" });
    event.shaped(Item.of("bigreactors:reinforced_reactorcasing", 4), ["ABA", "BCB", "ABA"], {
        A: "#forge:plates/steel",
        B: "#forge:ingots/graphite",
        C: "enderio:void_chassis",
    });

    //Reactor Glass
    event.remove({ output: "bigreactors:reinforced_reactorglass" });
    event.shaped("bigreactors:reinforced_reactorglass", ["ABA"], {
        A: "bigreactors:basic_reactorglass",
        B: "bigreactors:reinforced_reactorcasing",
    });

    //Fuel Rod
    event.remove({ output: "bigreactors:reinforced_reactorfuelrod" });
    event.shaped("bigreactors:reinforced_reactorfuelrod", ["ABA", "CDC", "ABA"], {
        A: "#forge:plates/lead",
        B: "#forge:ingots/hop_graphite",
        C: "bigreactors:basic_reactorfuelrod",
        D: "#forge:ingots/uranium",
    });

    //Control Rod
    event.remove({ output: "bigreactors:reinforced_reactorcontrolrod" });
    event.shaped("bigreactors:reinforced_reactorcontrolrod", ["ABA", "CDC", "AEA"], {
        A: "bigreactors:reinforced_reactorcasing",
        B: "#forge:dusts/redstone",
        C: "#forge:ingots/iron",
        D: "minecraft:piston",
        E: "#forge:ingots/uranium",
    });

    //Reactor Power Tap Active
    event.remove({ output: "bigreactors:reinforced_reactorpowertapfe_active" });
    event.shaped("bigreactors:reinforced_reactorpowertapfe_active", ["ABA", "BCB", "ABA"], {
        A: "bigreactors:reinforced_reactorcasing",
        B: "#forge:ingots/energetic_alloy",
        C: "#forge:storage_blocks/redstone",
    });

    //Reactor Power Tap Passive
    event.remove({ output: "bigreactors:reinforced_reactorpowertapfe_passive" });
    event.shaped("bigreactors:reinforced_reactorpowertapfe_passive", ["ABA", "BCB", "ABA"], {
        A: "bigreactors:reinforced_reactorcasing",
        B: "#forge:storage_blocks/redstone",
        C: "#forge:ingots/energetic_alloy",
    });

    //Reactor Redstone Port
    event.remove({ output: "bigreactors:reinforced_reactorredstoneport" });
    event.shaped("bigreactors:reinforced_reactorredstoneport", ["ABA", "BCB", "ABA"], {
        A: "bigreactors:reinforced_reactorcasing",
        B: "#forge:ingots/redstone_alloy",
        C: "#forge:ingots/gold",
    });

    //Reactor Computer Port
    event.remove({ output: "bigreactors:reinforced_reactorcomputerport" });
    event.shaped("bigreactors:reinforced_reactorcomputerport", ["ABA", "CDC", "AEA"], {
        A: "bigreactors:reinforced_reactorcasing",
        B: "oc2r:bus_interface",
        C: "ae2:basic_card",
        D: "oc2r:cpu_tier_4",
        E: "oc2r:network_interface_card",
    });
    //#endregion

    //#region Turbine Reinforced
    //Turbine Controller
    event.remove({ output: "bigreactors:reinforced_turbinecontroller" });
    event.shaped("bigreactors:reinforced_turbinecontroller", ["ABA", "CDC", "AEA"], {
        A: "bigreactors:basic_turbinecasing",
        B: "computercraft:monitor_advanced",
        C: "#forge:ingots/blutonium",
        D: "bigreactors:basic_turbinecontroller",
        E: "#forge:dusts/redstone",
    });

    //Turbine Casing
    event.remove({ output: "bigreactors:reinforced_turbinecasing" });
    event.shaped(Item.of("bigreactors:reinforced_turbinecasing", 4), ["ABA", "BCB", "ABA"], {
        A: "#forge:ingots/ridiculite",
        B: "#forge:ingots/graphite",
        C: "enderio:void_chassis",
    });

    //Turbine Glass
    event.remove({ output: "bigreactors:reinforced_turbineglass" });
    event.shaped("bigreactors:reinforced_turbineglass", ["ABA"], {
        A: "bigreactors:basic_turbineglass",
        B: "bigreactors:reinforced_turbinecasing",
    });

    //Turbine Bearing
    event.remove({ output: "bigreactors:reinforced_turbinerotorbearing" });
    event.shaped("bigreactors:reinforced_turbinerotorbearing", ["ABA", "ABA", "ABA"], {
        A: "bigreactors:reinforced_turbinecasing",
        B: "bigreactors:reinforced_turbinerotorshaft",
    });

    // Turbine Rotor
    event.remove({ output: "bigreactors:reinforced_turbinerotorshaft" });
    event.shaped("bigreactors:reinforced_turbinerotorshaft", [" A ", "ABA", " A "], {
        A: "bigreactors:basic_turbinerotorblade",
        B: "bigreactors:basic_turbinerotorshaft",
    });

    // Turbine Blade
    event.remove({ output: "bigreactors:reinforced_turbinerotorblade" });
    event.shaped("bigreactors:reinforced_turbinerotorblade", ["AAA"], {
        A: "bigreactors:basic_turbinerotorblade",
    });

    //Reactor Power Tap Active
    event.remove({ output: "bigreactors:reinforced_turbinepowertapfe_active" });
    event.shaped("bigreactors:reinforced_turbinepowertapfe_active", ["ABA", "BCB", "ABA"], {
        A: "bigreactors:reinforced_turbinecasing",
        B: "#forge:ingots/energetic_alloy",
        C: "#forge:storage_blocks/redstone",
    });

    //Reactor Power Tap Passive
    event.remove({ output: "bigreactors:reinforced_turbinepowertapfe_passive" });
    event.shaped("bigreactors:reinforced_turbinepowertapfe_passive", ["ABA", "BCB", "ABA"], {
        A: "bigreactors:reinforced_turbinecasing",
        B: "#forge:storage_blocks/redstone",
        C: "#forge:ingots/energetic_alloy",
    });

    //Reactor Redstone Port
    event.remove({ output: "bigreactors:reinforced_turbineredstoneport" });
    event.shaped("bigreactors:reinforced_turbineredstoneport", ["ABA", "BCB", "ABA"], {
        A: "bigreactors:reinforced_turbinecasing",
        B: "#forge:ingots/redstone_alloy",
        C: "#forge:ingots/gold",
    });

    //Turbine Computer Port
    event.remove({ output: "bigreactors:reinforced_turbinecomputerport" });
    event.shaped("bigreactors:reinforced_turbinecomputerport", ["ABA", "CDC", "AEA"], {
        A: "bigreactors:reinforced_turbinecasing",
        B: "oc2r:bus_interface",
        C: "ae2:basic_card",
        D: "oc2r:cpu_tier_4",
        E: "oc2r:network_interface_card",
    });
    //#endregion
});
