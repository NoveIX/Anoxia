ClientEvents.lang('en_us', (event) => {
  //#region Rename Item
  const RenamePattern = [
    { item: 'quark:sturdy_stone', new: 'Stasis Stone (Za Warudo! Toki wo tomare!)' },
    { item: 'thermal:coal_coke_block', new: 'Block of Coal Coke' },
    { item: 'industrialforegoing:tinydryrubber', new: 'Tiny Dry Rubber' },
    { item: 'create:white_sail', new: 'Solar Wind Sail' },
    { item: 'create:sail_frame', new: 'Solar Wind Sail Frame' },
    { item: 'create:windmill_bearing', new: 'Solar Wind Bearing' },
    { item: 'mekanismgenerators:wind_generator', new: 'Solar Wind Generator' },
    { item: 'thermal:coal_coke', new: 'Coal Coke' },
    { item: 'extendedcrafting:handheld_table', new: 'Crafting Table On A Stick' },
  ];
  RenamePattern.forEach((name) => event.renameItem(name.item, name.new));
  //#endregion

  //#region Rename Disk
  const SizePattern = ['1k', '4k', '16k', '64k', '256k'];

  const DiskTypePattern = [
    //Drive
    { prefix: 'ae2:item_storage_cell_', new: 'ME Item Disk Drive' },
    { prefix: 'ae2:fluid_storage_cell_', new: 'ME Fluid Disk Drive' },
    { prefix: 'appmek:chemical_storage_cell_', new: 'ME Chemical Disk Drive' },
    { prefix: 'appflux:fe_', new: 'ME Energy Disk Drive', suffix: '_cell' },
    { prefix: 'appbot:mana_storage_cell_', new: 'ME Mana Disk Drive' },
    { prefix: 'arseng:source_storage_cell_', new: 'ME Source Disk Drive' },
    { prefix: 'ae2things:disk_drive_', new: 'ME DISK Drive' },

    //Portable
    { prefix: 'ae2:portable_item_cell_', new: 'Portable Item Disk Drive' },
    { prefix: 'ae2:portable_fluid_cell_', new: 'Portable Fluid Disk Drive' },
    { prefix: 'appmek:portable_chemical_storage_cell_', new: 'Portable Chemical Disk Drive' },
    { prefix: 'appflux:fe_', new: 'Portable Energy Disk Drive', suffix: '_portable_cell' },
    { prefix: 'appbot:portable_mana_storage_cell_', new: 'Portable Mana Disk Drive' },
    { prefix: 'arseng:portable_source_cell_', new: 'Portable Source Disk Drive' },
  ];

  const DiskRaname = [];

  DiskTypePattern.forEach((type) => {
    SizePattern.forEach((size) => {
      const itemID = type.prefix + size + (type.suffix ?? '');
      const newName = size + ' ' + type.label;
      DiskRaname.push({ item: itemID, new: newName });
    });
  });

  DiskRaname.forEach((name) => event.renameItem(name.item, name.new));
  //#endregion

  //# ====================================================================================== #

  //#region Biome
  event.renameBiome('hyperbox:hyperbox', 'Hyperbox');
  //#endregion

  //# ====================================================================================== #

  //#region Pots definition
  //Define tiers with their display names
  const tiers = [
    { id: null, name: null },
    { id: 'elite', name: 'Saffron' },
    { id: 'ultra', name: 'Shadow' },
    { id: 'creative', name: 'Crimson' },
  ];

  //Define material types
  const materials = [
    { id: 'terracotta', name: 'Terracotta' },
    { id: 'concrete', name: 'Concrete' },
    { id: 'glazed_terracotta', name: 'Glazed' },
  ];

  //Define color variants
  const colors = [
    { id: 'white', name: 'White' },
    { id: 'orange', name: 'Orange' },
    { id: 'magenta', name: 'Magenta' },
    { id: 'light_blue', name: 'Light Blue' },
    { id: 'yellow', name: 'Yellow' },
    { id: 'lime', name: 'Lime' },
    { id: 'pink', name: 'Pink' },
    { id: 'gray', name: 'Gray' },
    { id: 'light_gray', name: 'Light Gray' },
    { id: 'cyan', name: 'Cyan' },
    { id: 'purple', name: 'Purple' },
    { id: 'blue', name: 'Blue' },
    { id: 'brown', name: 'Brown' },
    { id: 'green', name: 'Green' },
    { id: 'red', name: 'Red' },
    { id: 'black', name: 'Black' },
  ];

  //Define pot types
  const types = [
    { id: 'botany_pot', name: 'Botany Pot' },
    { id: 'hopper_botany_pot', name: 'Hopper Botany Pot' },
  ];
  //#endregion

  //#region Botany post
  /**
   * Helper function to rename botany pots without tier specification
   * @param {Object} event - The lang event object
   * @param {string} materialId - The material ID (terracotta, concrete, glazed_terracotta)
   * @param {string} materialName - The display name for the material
   * @param {string} colorId - The color ID (white, orange, etc.)
   * @param {string} colorName - The display name for the color
   * @param {string} typeId - The pot type ID (botany_pot, hopper_botany_pot)
   * @param {string} typeName - The display name for the pot type
   */
  function renameBotanyPots(event, materialId, materialName, colorId, colorName, typeId, typeName) {
    //Botany Pots
    //For default terracotta pots without color specification
    if (!colorId) {
      event.renameItem(`botanypots:${materialId}_${typeId}`, `${typeName}`);
    }

    //For colored pots
    //Special case for terracotta - we use a shorter name format
    if (materialId === 'terracotta') {
      event.renameItem(`botanypots:${colorId}_${materialId}_${typeId}`, `${colorName} ${typeName}`);
    } else {
      //For Glazed and concrete with colors
      event.renameItem(`botanypots:${colorId}_${materialId}_${typeId}`, `${colorName} ${materialName} ${typeName}`);
    }
  }

  //Process standard botany pots (without tier)
  types.forEach((type) => {
    //Handle base terracotta pots (without color)
    renameBotanyPots(event, 'terracotta', 'Terracotta', null, null, type.id, type.name);

    //Handle all material and color combinations
    materials.forEach((material) => {
      colors.forEach((color) => {
        renameBotanyPots(event, material.id, material.name, color.id, color.name, type.id, type.name);
      });
    });
  });
  //#endregion

  //#region Botany tiers
  /**
   * Helper function to rename botany pots based on their tier, material, color and type
   * @param {Object} event - The lang event object
   * @param {string} tierId - The tier ID (elite, ultra, creative)
   * @param {string} tierName - The display name for the tier (Advanced, Elite, Ultimate)
   * @param {string} materialId - The material ID (terracotta, concrete, glazed_terracotta)
   * @param {string} materialName - The display name for the material
   * @param {string} colorId - The color ID (white, orange, etc.)
   * @param {string} colorName - The display name for the color
   * @param {string} typeId - The pot type ID (botany_pot, hopper_botany_pot)
   * @param {string} typeName - The display name for the pot type
   */
  function renameBotanyPotsTier(event, tierId, tierName, materialId, materialName, colorId, colorName, typeId, typeName) {
    //Botany Pots
    //For default terracotta pots without color specification
    if (!colorId) {
      event.renameItem(`botanypots:${tierId}_${materialId}_${typeId}`, `${tierName} ${typeName}`);
    }

    //For colored pots
    //Special case for terracotta - we use a shorter name format
    if (materialId === 'terracotta') {
      event.renameItem(`botanypots:${tierId}_${colorId}_${materialId}_${typeId}`, `${tierName} ${colorName} ${typeName}`);
    } else {
      //For Glazed and concrete with colors
      event.renameItem(`botanypots:${tierId}_${colorId}_${materialId}_${typeId}`, `${tierName} ${colorName} ${materialName} ${typeName}`);
    }

    //Botany Pots Tier
    //For default terracotta pots without color specification
    if (!colorId) {
      event.renameItem(`botanypotstiers:${tierId}_${materialId}_${typeId}`, `${tierName} ${typeName}`);
    }

    //For colored pots
    //Special case for terracotta - we use a shorter name format
    if (materialId === 'terracotta') {
      event.renameItem(`botanypotstiers:${tierId}_${colorId}_${materialId}_${typeId}`, `${tierName} ${colorName} ${typeName}`);
    } else {
      //For Glazed and concrete with colors
      event.renameItem(`botanypotstiers:${tierId}_${colorId}_${materialId}_${typeId}`, `${tierName} ${colorName} ${materialName} ${typeName}`);
    }
  }

  //Process all tiered botany pot combinations
  tiers.forEach((tier) => {
    types.forEach((type) => {
      //Handle base terracotta pots (without color)
      renameBotanyPotsTier(event, tier.id, tier.name, 'terracotta', 'Terracotta', null, null, type.id, type.name);

      //Handle all material and color combinations
      materials.forEach((material) => {
        colors.forEach((color) => {
          renameBotanyPotsTier(event, tier.id, tier.name, material.id, material.name, color.id, color.name, type.id, type.name);
        });
      });
    });
  });
  //#endregion
});
