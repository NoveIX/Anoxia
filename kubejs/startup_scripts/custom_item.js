StartupEvents.registry("item", (event) => {
    //Misc
    event.create("anoxia:tiny_coal").displayName("Tiny Coal").texture("anoxia:item/tiny_coal");
    event.create("anoxia:tiny_charcoal").displayName("Tiny Charcoal").texture("anoxia:item/tiny_charcoal");
    //event.create("anoxia:aethersteel_mesh").displayName("Aethersteel Mesh").texture("anoxia:item/aethersteel_mesh");
    event.create("anoxia:osmium_pieces").displayName("Osmium Pieces").texture("anoxia:item/osmium_pieces");
    event.create("anoxia:desh_pieces").displayName("Desh Pieces").texture("anoxia:item/desh_pieces");
    event.create("anoxia:ostrum_pieces").displayName("Ostrum Pieces").texture("anoxia:item/ostrum_pieces");
    event.create("anoxia:calorite_pieces").displayName("Calorite Pieces").texture("anoxia:item/calorite_pieces");
    event.create("anoxia:demonite_pieces").displayName("Demonite Pieces").texture("anoxia:item/demonite_pieces");
    event.create("anoxia:modularium").displayName("Modularium").texture("anoxia:item/modularium");
    event.create("anoxia:amongus").displayName("Among Us").texture("anoxia:item/amongus");
    event.create("anoxia:sugoma").displayName("Sugoma").texture("anoxia:item/sugoma");
    event.create("anoxia:human_soul").displayName("Human Soul").texture("anoxia:item/human_soul");
    event.create("anoxia:press_rod_die").displayName("Rod Die").texture("anoxia:item/press_rod_die");
    event.create("anoxia:obsidian_with_iron").displayName("Obsidian With Iron").texture("anoxia:item/obsidian_with_iron");
    event.create("anoxia:obsidian_ingot").displayName("Obsidian Ingot").texture("anoxia:item/obsidian_ingot");

    //Create Sifter
    event.create("anoxia:create_string_mesh", "createsifter:mesh").displayName("String Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "anoxia:item/create_string_mesh");
    event.create("anoxia:create_flint_mesh", "createsifter:mesh").displayName("Flint Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "anoxia:item/create_flint_mesh");
    event.create("anoxia:create_iron_mesh", "createsifter:mesh").displayName("Iron Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "anoxia:item/create_iron_mesh");
    event.create("anoxia:create_diamond_mesh", "createsifter:mesh").displayName("Diamond Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "anoxia:item/create_diamond_mesh");
    event.create("anoxia:create_emerald_mesh", "createsifter:mesh").displayName("Emerald Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "anoxia:item/create_emerald_mesh");
    event.create("anoxia:create_netherite_mesh", "createsifter:mesh").displayName("Netherite Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "anoxia:item/create_netherite_mesh");
    event.create("anoxia:create_aethersteel_mesh", "createsifter:mesh").displayName("Aethersteel Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "anoxia:item/create_aethersteel_mesh");

    //Storage Component
    event.create("anoxia:mana_cell_component_1k").displayName("1k ME Mana Storage Component").texture("anoxia:item/mana_cell_component_1k");
    //event.create("anoxia:mana_cell_component_1m").displayName("1M ME Mana Storage Component").texture("anoxia:item/mana_cell_component_1m");
    event.create("anoxia:mana_cell_component_4k").displayName("4k ME Mana Storage Component").texture("anoxia:item/mana_cell_component_4k");
    //event.create("anoxia:mana_cell_component_4m").displayName("4M ME Mana Storage Component").texture("anoxia:item/mana_cell_component_4m");
    event.create("anoxia:mana_cell_component_16k").displayName("16k ME Mana Storage Component").texture("anoxia:item/mana_cell_component_16k");
    //event.create("anoxia:mana_cell_component_16m").displayName("16M ME Mana Storage Component").texture("anoxia:item/mana_cell_component_16m");
    event.create("anoxia:mana_cell_component_64k").displayName("64k ME Mana Storage Component").texture("anoxia:item/mana_cell_component_64k");
    //event.create("anoxia:mana_cell_component_64m").displayName("64M ME Mana Storage Component").texture("anoxia:item/mana_cell_component_64m");
    event.create("anoxia:mana_cell_component_256k").displayName("256k ME Mana Storage Component").texture("anoxia:item/mana_cell_component_256k");
    //event.create("anoxia:mana_cell_component_256m").displayName("256M ME Mana Storage Component").texture("anoxia:item/mana_cell_component_256m");

    event.create("anoxia:source_cell_component_1k").displayName("1k ME Source Storage Component").texture("anoxia:item/source_cell_component_1k");
    //event.create("anoxia:source_cell_component_1m").displayName("1M ME Source Storage Component").texture("anoxia:item/source_cell_component_1m");
    event.create("anoxia:source_cell_component_4k").displayName("4k ME Source Storage Component").texture("anoxia:item/source_cell_component_4k");
    //event.create("anoxia:source_cell_component_4m").displayName("4M ME Source Storage Component").texture("anoxia:item/source_cell_component_4m");
    event.create("anoxia:source_cell_component_16k").displayName("16k ME Source Storage Component").texture("anoxia:item/source_cell_component_16k");
    //event.create("anoxia:source_cell_component_16m").displayName("16M ME Source Storage Component").texture("anoxia:item/source_cell_component_16m");
    event.create("anoxia:source_cell_component_64k").displayName("64k ME Source Storage Component").texture("anoxia:item/source_cell_component_64k");
    //event.create("anoxia:source_cell_component_64m").displayName("64M ME Source Storage Component").texture("anoxia:item/source_cell_component_64m");
    event.create("anoxia:source_cell_component_256k").displayName("256k ME Source Storage Component").texture("anoxia:item/source_cell_component_256k");
    //event.create("anoxia:source_cell_component_256m").displayName("256M ME Source Storage Component").texture("anoxia:item/source_cell_component_256m");

    event.create("anoxia:mana_integration_processor").displayName("Mana Integration Processor").texture("anoxia:item/mana_integration_processor");
    event.create("anoxia:source_integration_processor").displayName("Source Integration Processor").texture("anoxia:item/source_integration_processor");
});
