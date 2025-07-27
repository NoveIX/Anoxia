StartupEvents.registry("item", (event) => {
	//Misc
	event.create("moonbase:tiny_coal").displayName("Tiny Coal");
	event.create("moonbase:tiny_charcoal").displayName("Tiny Charcoal");
	event.create("moonbase:aethersteel_mesh").displayName("Aethersteel Mesh");
	event.create("moonbase:osmium_pieces").displayName("Osmium Pieces");
	event.create("moonbase:modularium").displayName("Modularium");
	event.create("moonbase:amongus").displayName("Among Us");
	
	//Create Sifter
	event.create("moonbase:create_string_mesh", "createsifter:mesh").displayName("String Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "moonbase:item/create_string_mesh");
	event.create("moonbase:create_flint_mesh", "createsifter:mesh").displayName("Flint Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "moonbase:item/create_flint_mesh");
	event.create("moonbase:create_iron_mesh", "createsifter:mesh").displayName("Iron Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "moonbase:item/create_iron_mesh");
	event.create("moonbase:create_diamond_mesh", "createsifter:mesh").displayName("Diamond Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "moonbase:item/create_diamond_mesh");
	event.create("moonbase:create_emerald_mesh", "createsifter:mesh").displayName("Emerald Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "moonbase:item/create_emerald_mesh");
	event.create("moonbase:create_netherite_mesh", "createsifter:mesh").displayName("Netherite Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "moonbase:item/create_netherite_mesh");
	event.create("moonbase:create_aethersteel_mesh", "createsifter:mesh").displayName("Aethersteel Mesh").parentModel("createsifter:block/meshes/mesh").texture("mesh", "moonbase:item/create_aethersteel_mesh");
});
