ServerEvents.recipes((event) => {
	/* 	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  });
	event.remove({ id:  }); */

	//#region Dust
	const DustPattern = [
		//ChemLib
		{
			//Lithium
			hardeness: "metal",
			get: "chemlib:lithium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{

			//Beryllium
			hardeness: "metal",
			get: "chemlib:beryllium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Boron
			hardeness: "metal",
			get: "chemlib:boron_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Sodium
			hardeness: "metal",
			get: "chemlib:sodium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Magnesium
			hardeness: "metal",
			get: "chemlib:magnesium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Aluminum
			hardeness: "metal",
			get: "chemlib:aluminum_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Silicon
			hardeness: "metal",
			get: "chemlib:silicon_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Phosphorus
			hardeness: "metal",
			get: "chemlib:phosphorus_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Sulfur
			hardeness: "metal",
			get: "chemlib:sulfur_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Potassium
			hardeness: "metal",
			get: "chemlib:potassium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Calcium
			hardeness: "metal",
			get: "chemlib:calcium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Scandium
			hardeness: "metal",
			get: "chemlib:scandium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Titanium
			hardeness: "metal",
			get: "chemlib:titanium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Vanadium
			hardeness: "metal",
			get: "chemlib:vanadium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Chromium
			hardeness: "metal",
			get: "chemlib:chromium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Manganese
			hardeness: "metal",
			get: "chemlib:manganese_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Iron
			hardeness: "metal",
			get: "chemlib:iron_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Cobalt
			hardeness: "metal",
			get: "chemlib:cobalt_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Nickel
			hardeness: "metal",
			get: "chemlib:nickel_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Copper
			hardeness: "metal",
			get: "chemlib:copper_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Zinc
			hardeness: "metal",
			get: "chemlib:zinc_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Gallium
			hardeness: "metal",
			get: "chemlib:gallium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Germanium
			hardeness: "metal",
			get: "chemlib:germanium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{

			//Arsenic
			hardeness: "metal",
			get: "chemlib:arsenic_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//selenium
			hardeness: "metal",
			get: "chemlib:selenium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Rubidium
			hardeness: "metal",
			get: "chemlib:rubidium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Strontium
			hardeness: "metal",
			get: "chemlib:strontium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Yttrium
			hardeness: "metal",
			get: "chemlib:yttrium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Zirconium
			hardeness: "metal",
			get: "chemlib:zirconium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Niobium
			hardeness: "metal",
			get: "chemlib:niobium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Molybdenum
			hardeness: "metal",
			get: "chemlib:molybdenum_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Ruthenium
			hardeness: "metal",
			get: "chemlib:ruthenium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Rhodium
			hardeness: "metal",
			get: "chemlib:rhodium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Palladium
			hardeness: "metal",
			get: "chemlib:palladium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Silver
			hardeness: "metal",
			get: "chemlib:silver_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Cadium
			hardeness: "metal",
			get: "chemlib:cadmium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Indium
			hardeness: "metal",
			get: "chemlib:indium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Tin
			hardeness: "metal",
			get: "chemlib:tin_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Antimony
			hardeness: "metal",
			get: "chemlib:antimony_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Tellurium
			hardeness: "metal",
			get: "chemlib:tellurium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Iodine
			hardeness: "metal",
			get: "chemlib:iodine_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Cesium
			hardeness: "metal",
			get: "chemlib:cesium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Barium
			hardeness: "metal",
			get: "chemlib:barium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Lanthanum
			hardeness: "metal",
			get: "chemlib:lanthanum_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Cerium
			hardeness: "metal",
			get: "chemlib:cerium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Praseodymium
			hardeness: "metal",
			get: "chemlib:praseodymium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Neodymium
			hardeness: "metal",
			get: "chemlib:neodymium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Samarium
			hardeness: "metal",
			get: "chemlib:samarium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Europium
			hardeness: "metal",
			get: "chemlib:europium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Gadolinium
			hardeness: "metal",
			get: "chemlib:gadolinium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Terbium
			hardeness: "metal",
			get: "chemlib:terbium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Dyspronium
			hardeness: "metal",
			get: "chemlib:dysprosium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Holmium
			hardeness: "metal",
			get: "chemlib:holmium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Erbium
			hardeness: "metal",
			get: "chemlib:erbium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Thulmium
			hardeness: "metal",
			get: "chemlib:thulium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Ytterbium
			hardeness: "metal",
			get: "chemlib:ytterbium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Lutetium
			hardeness: "metal",
			get: "chemlib:lutetium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Hafnium
			hardeness: "metal",
			get: "chemlib:hafnium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Tantanium
			hardeness: "metal",
			get: "chemlib:tantalum_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Tungsten
			hardeness: "metal",
			get: "chemlib:tungsten_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Rhenium
			hardeness: "metal",
			get: "chemlib:rhenium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Osmium
			hardeness: "metal",
			get: "chemlib:osmium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Iridium
			hardeness: "metal",
			get: "chemlib:iridium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Platinum
			hardeness: "metal",
			get: "chemlib:platinum_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Gold
			hardeness: "metal",
			get: "chemlib:gold_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Thallium
			hardeness: "metal",
			get: "chemlib:thallium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Lead
			hardeness: "metal",
			get: "chemlib:lead_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Bismuth
			hardeness: "metal",
			get: "chemlib:bismuth_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Polonium
			hardeness: "metal",
			get: "chemlib:polonium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Astatine
			hardeness: "metal",
			get: "chemlib:astatine_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Francium
			hardeness: "metal",
			get: "chemlib:francium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Radium
			hardeness: "metal",
			get: "chemlib:radium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Actinium
			hardeness: "metal",
			get: "chemlib:actinium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Thorium
			hardeness: "metal",
			get: "chemlib:thorium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Protactinium
			hardeness: "metal",
			get: "chemlib:protactinium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Uranium
			hardeness: "metal",
			get: "chemlib:uranium_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		//Thermal
		{
			//Apatite
			hardeness: "gem",
			get: "thermal:apatite_dust",
			put: "forge:gems/apatite",
			process: 200,
			rsflux: 1,
		},
		{
			//Cinnabar
			hardeness: "gem",
			get: "thermal:cinnabar_dust",
			put: "forge:gems/cinnabar",
			process: 200,
			rsflux: 1,
		},
		{
			//Niter
			hardeness: "gem",
			get: "thermal:niter_dust",
			put: "forge:gems/niter",
			process: 200,
			rsflux: 1,
		},
		{
			//Sulfur
			hardeness: "gem",
			get: "thermal:sulfur_dust",
			put: "forge:gems/sulfur",
			process: 200,
			rsflux: 1,
		},
		{
			//Ender pearl
			hardeness: "gem",
			get: "thermal:ender_pearl_dust",
			put: "forge:ender_pearls",
			process: 200,
			rsflux: 1,
		},
		{
			//Iron
			hardeness: "metal",
			get: "thermal:iron_dust",
			put: "forge:ingots/iron",
			plate: "forge:plates/iron",
			process: 200,
			rsflux: 1,
		},
		{
			//Gold
			hardeness: "metal",
			get: "thermal:gold_dust",
			put: "forge:ingots/gold",
			plate: "forge:plates/gold",
			process: 200,
			rsflux: 1,
		},
		{
			//Copper
			hardeness: "metal",
			get: "thermal:copper_dust",
			put: "forge:ingots/copper",
			plate: "forge:plates/copper",
			process: 200,
			rsflux: 1,
		},
		{
			//Netherite
			hardeness: "metal",
			get: "thermal:netherite_dust",
			put: "forge:ingots/netherite",
			plate: "forge:plates/netherite",
			process: 200,
			rsflux: 1,
		},
		{
			//Tin
			hardeness: "metal",
			get: "thermal:tin_dust",
			put: "forge:ingots/tin",
			plate: "forge:plates/tin",
			process: 200,
			rsflux: 1,
		},
		{
			//Lead
			hardeness: "metal",
			get: "thermal:lead_dust",
			put: "forge:ingots/lead",
			plate: "forge:plates/lead",
			process: 200,
			rsflux: 1,
		},
		{
			//Silver
			hardeness: "metal",
			get: "thermal:silver_dust",
			put: "forge:ingots/silver",
			plate: "forge:plates/silver",
			process: 200,
			rsflux: 1,
		},
		{
			//Nickel
			hardeness: "metal",
			get: "thermal:nickel_dust",
			put: "forge:ingots/nickel",
			plate: "forge:plates/nickel",
			process: 200,
			rsflux: 1,
		},
		{
			//Lapis
			hardeness: "gem",
			get: "thermal:lapis_dust",
			put: "forge:gems/lapis",
			process: 200,
			rsflux: 1,
		},
		{
			//Diamond
			hardeness: "gem",
			get: "thermal:diamond_dust",
			put: "forge:gems/diamond",
			process: 200,
			rsflux: 1,
		},
		{
			//Emerald
			hardeness: "gem",
			get: "thermal:emerald_dust",
			put: "forge:gems/emerald",
			process: 200,
			rsflux: 1,
		},
		{
			//Quartz
			hardeness: "gem",
			get: "thermal:quartz_dust",
			put: "forge:gems/quartz",
			process: 200,
			rsflux: 1,
		},
		{
			//Ruby
			hardeness: "gem",
			get: "thermal:ruby_dust",
			put: "forge:gems/ruby",
			process: 200,
			rsflux: 1,
		},
		{
			//Sapphire
			hardeness: "gem",
			get: "thermal:sapphire_dust",
			put: "forge:gems/sapphire",
			process: 200,
			rsflux: 1,
		},
		{
			//Signalum
			hardeness: "metal",
			get: "thermal:signalum_dust",
			put: "forge:ingots/signalum",
			plate: "forge:plates/signalum",
			process: 200,
			rsflux: 1,
		},
		{
			//Lumium
			hardeness: "metal",
			get: "thermal:lumium_dust",
			put: "forge:ingots/lumium",
			plate: "forge:plates/lumium",
			process: 200,
			rsflux: 1,
		},
		{
			//Enderium
			hardeness: "metal",
			get: "thermal:enderium_dust",
			put: "forge:ingots/enderium",
			plate: "forge:plates/enderium",
			process: 200,
			rsflux: 1,
		},
		{
			//Steel
			hardeness: "metal",
			get: "thermal:steel_dust",
			put: "forge:ingots/steel",
			plate: "forge:plates/steel",
			process: 200,
			rsflux: 1,
		},
		{
			//Rose Gold
			hardeness: "metal",
			get: "thermal:rose_gold_dust",
			put: "forge:ingots/rose_gold",
			plate: "forge:plates/rose_gold",
			process: 200,
			rsflux: 1,
		},
		{
			//Bronze
			hardeness: "metal",
			get: "thermal:bronze_dust",
			put: "forge:ingots/bronze",
			plate: "forge:plates/bronze",
			process: 200,
			rsflux: 1,
		},
		{
			//Electrum
			hardeness: "metal",
			get: "thermal:electrum_dust",
			put: "forge:ingots/electrum",
			plate: "forge:plates/electrum",
			process: 200,
			rsflux: 1,
		},
		{
			//Invar
			hardeness: "metal",
			get: "thermal:invar_dust",
			put: "forge:ingots/invar",
			plate: "forge:plates/invar",
			process: 200,
			rsflux: 1,
		},
		{
			//Constantan
			hardeness: "metal",
			get: "thermal:constantan_dust",
			put: "forge:ingots/constantan",
			plate: "forge:plates/constantan",
			process: 200,
			rsflux: 1,
		},
		//Redstone Arsenal
		{
			//Flux
			hardeness: "plateless",
			get: "redstone_arsenal:flux_dust",
			put: "forge:ingots/flux",
			process: 200,
			rsflux: 1,
		},
		//Thermal Endergy
		{
			//Prismalium
			hardeness: "plateless",
			get: "thermalendergy:prismalium_dust",
			put: "forge:ingots/prismalium",
			plate: "forge:plates/prismalium",
			process: 200,
			rsflux: 1,
		},
		{
			//Melodium
			hardeness: "plateless",
			get: "thermalendergy:melodium_dust",
			put: "forge:ingots/melodium",
			plate: "forge:plates/melodium",
			process: 200,
			rsflux: 1,
		},
		{
			//Stellarium
			hardeness: "plateless",
			get: "thermalendergy:stellarium_dust",
			put: "forge:ingots/stellarium",
			plate: "forge:plates/stellarium",
			process: 200,
			rsflux: 1,
		},
		//Thermal Extra
		{
			//Soul Infused
			hardeness: "metal",
			get: "thermal_extra:soul_infused_dust",
			put: "forge:ingots/soul_infused",
			plate: "forge:plates/soul_infused",
			process: 200,
			rsflux: 1,
		},
		{
			//Twinite
			hardeness: "metal",
			get: "thermal_extra:twinite_dust",
			put: "forge:ingots/twinite_dust",
			plate: "forge:plates/twinite_dust",
			process: 200,
			rsflux: 1,
		},
		{
			//Shellite
			hardeness: "metal",
			get: "thermal_extra:shellite_dust",
			put: "forge:ingots/shellite_dust",
			plate: "forge:plates/shellite_dust",
			process: 200,
			rsflux: 1,
		},
		{
			//Dragonsteel
			hardeness: "metal",
			get: "thermal_extra:dragonsteel_dust",
			put: "forge:ingots/dragonsteel",
			plate: "forge:plates/dragonsteel",
			process: 200,
			rsflux: 1,
		},
		{
			//Abyssal
			hardeness: "metal",
			get: "thermal_extra:abyssal_dust",
			put: "forge:ingots/abyssal",
			plate: "forge:plates/abyssal",
			process: 200,
			rsflux: 1,
		},
	];
	function DustRecipes({ get, put, plate, rsflux }) {
		//remove Recipes
		event.remove({ output: get });

		/* 		//Arc Bloodmagic
		event.custom({
			type: "bloodmagic:arc",
			consumeingredient: false,
			input: { tag: put },
			inputsize: 1,
			mainoutputchance: 0.0,
			output: { item: get },
			tool: { tag: "bloodmagic:arc/explosive" },
		});

		//Create
		event.custom({
			type: "create:milling",
			ingredients: [{ tag: put }],
			results: [{ item: get }],
			processingTime: 200,
		});

		//Immersive
		event.custom({
			type: "immersiveengineering:crusher",
			input: { tag: put },
			result: { item: get },
			secondaries: [],
			energy: rsflux,
		});

		//MekaCrusher
		event.custom({
			type: "mekanism:crushing",
			input: { ingredient: { tag: put } },
			output: { item: get },
		});

		//Pulverizer
		event.custom({
			type: "thermal:pulverizer",
			ingredient: { tag: put },
			result: [{ item: get, count: 1 }],
		}); */
		//Crusher Spirit
	}
	DustPattern.forEach(DustRecipes);
	//#endregion
});
