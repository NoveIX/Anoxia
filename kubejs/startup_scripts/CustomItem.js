StartupEvents.registry("item", (event) => {
    //Misc
    event.create("anoxia:tiny_coal").displayName("Tiny Coal");
    event.create("anoxia:tiny_charcoal").displayName("Tiny Charcoal");
    event.create("anoxia:aethersteel_mesh").displayName("Aethersteel Mesh");
    event.create("anoxia:osmium_pieces").displayName("Osmium Pieces");
    event.create("anoxia:modularium").displayName("Modularium");
    event.create("anoxia:amongus").displayName("Among Us");
    event.create("anoxia:sugoma").displayName("Sugoma");

    //Create Sifter
    event.create("anoxia:create_string_mesh", "createsifter:mesh").displayName("String Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "anoxia:item/create_string_mesh");
    event.create("anoxia:create_flint_mesh", "createsifter:mesh").displayName("Flint Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "anoxia:item/create_flint_mesh");
    event.create("anoxia:create_iron_mesh", "createsifter:mesh").displayName("Iron Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "anoxia:item/create_iron_mesh");
    event.create("anoxia:create_diamond_mesh", "createsifter:mesh").displayName("Diamond Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "anoxia:item/create_diamond_mesh");
    event.create("anoxia:create_emerald_mesh", "createsifter:mesh").displayName("Emerald Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "anoxia:item/create_emerald_mesh");
    event.create("anoxia:create_netherite_mesh", "createsifter:mesh").displayName("Netherite Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "anoxia:item/create_netherite_mesh");
    event.create("anoxia:create_aethersteel_mesh", "createsifter:mesh").displayName("Aethersteel Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "anoxia:item/create_aethersteel_mesh");
});
