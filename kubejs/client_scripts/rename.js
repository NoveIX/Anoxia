ClientEvents.lang("en_us", (event) => {
    // Basic Items
    const RenamePattern = [
        { item: "quark:sturdy_stone", new: "Stasis Stone (Za Warudo! Toki wo tomare!)" },
        { item: "thermal:coal_coke_block", new: "Block of Coal Coke" },
        { item: "industrialforegoing:tinydryrubber", new: "Tiny Dry Rubber" },
        { item: "create:white_sail", new: "Solar Wind Sail" },
        { item: "create:sail_frame", new: "Solar Wind Sail Frame" },
        { item: "create:windmill_bearing", new: "Solar Wind Bearing" },
        { item: "thermal:coal_coke", new: "Coal Coke" },

        //Drive
        { item: "ae2:item_storage_cell_1k", new: "1k ME Item Drive" },
        { item: "ae2:item_storage_cell_4k", new: "4k ME Item Drive" },
        { item: "ae2:item_storage_cell_16k", new: "16k ME Item Drive" },
        { item: "ae2:item_storage_cell_64k", new: "64k ME Item Drive" },
        { item: "ae2:item_storage_cell_256k", new: "256k ME Item Drive" },
        { item: "ae2:fluid_storage_cell_1k", new: "1k ME Fluid Drive" },
        { item: "ae2:fluid_storage_cell_4k", new: "4k ME Fluid Drive" },
        { item: "ae2:fluid_storage_cell_16k", new: "16k ME Fluid Drive" },
        { item: "ae2:fluid_storage_cell_64k", new: "64k ME Fluid Drive" },
        { item: "ae2:fluid_storage_cell_256k", new: "256k ME Fluid Drive" },
        { item: "appmek:chemical_storage_cell_1k", new: "1k ME Chemical Drive" },
        { item: "appmek:chemical_storage_cell_4k", new: "4k ME Chemical Drive" },
        { item: "appmek:chemical_storage_cell_16k", new: "16k ME Chemical Drive" },
        { item: "appmek:chemical_storage_cell_64k", new: "64k ME Chemical Drive" },
        { item: "appmek:chemical_storage_cell_256k", new: "256k ME Chemical Drive" },
        { item: "appflux:fe_1k_cell", new: "1k ME Energy Drive" },
        { item: "appflux:fe_4k_cell", new: "4k ME Energy Drive" },
        { item: "appflux:fe_16k_cell", new: "16k ME Energy Drive" },
        { item: "appflux:fe_64k_cell", new: "64k ME Energy Drive" },
        { item: "appflux:fe_256k_cell", new: "256k ME Energy Drive" },
        { item: "appbot:mana_storage_cell_1k", new: "1k ME Mana Drive" },
        { item: "appbot:mana_storage_cell_4k", new: "4k ME Mana Drive" },
        { item: "appbot:mana_storage_cell_16k", new: "16k ME Mana Drive" },
        { item: "appbot:mana_storage_cell_64k", new: "64k ME Mana Drive" },
        { item: "appbot:mana_storage_cell_256k", new: "256k ME Mana Drive" },
        { item: "arseng:source_storage_cell_1k", new: "1k ME Source Drive" },
        { item: "arseng:source_storage_cell_4k", new: "4k ME Source Drive" },
        { item: "arseng:source_storage_cell_16k", new: "16k ME Source Drive" },
        { item: "arseng:source_storage_cell_64k", new: "64k ME Source Drive" },
        { item: "arseng:source_storage_cell_256k", new: "256k ME Source Drive" },
        { item: "ae2things:disk_drive_1k", new: "1k ME DISK Drive" },
        { item: "ae2things:disk_drive_4k", new: "4k ME DISK Drive" },
        { item: "ae2things:disk_drive_16k", new: "16k ME DISK Drive" },
        { item: "ae2things:disk_drive_64k", new: "64k ME DISK Drive" },
        { item: "ae2things:disk_drive_256k", new: "256k ME DISK Drive" },

        //Portable
        { item: "ae2:portable_item_cell_1k", new: "1k Portable Item Drive" },
        { item: "ae2:portable_item_cell_4k", new: "4k Portable Item Drive" },
        { item: "ae2:portable_item_cell_16k", new: "16k Portable Item Drive" },
        { item: "ae2:portable_item_cell_64k", new: "64k Portable Item Drive" },
        { item: "ae2:portable_item_cell_256k", new: "256k Portable Item Drive" },
        { item: "ae2:portable_fluid_cell_1k", new: "1k Portable Fluid Drive" },
        { item: "ae2:portable_fluid_cell_4k", new: "4k Portable Fluid Drive" },
        { item: "ae2:portable_fluid_cell_16k", new: "16k Portable Fluid Drive" },
        { item: "ae2:portable_fluid_cell_64k", new: "64k Portable Fluid Drive" },
        { item: "ae2:portable_fluid_cell_256k", new: "256k Portable Fluid Drive" },
        { item: "appmek:portable_chemical_storage_cell_1k", new: "1k Portable Chemical Drive" },
        { item: "appmek:portable_chemical_storage_cell_4k", new: "4k Portable Chemical Drive" },
        { item: "appmek:portable_chemical_storage_cell_16k", new: "16k Portable Chemical Drive" },
        { item: "appmek:portable_chemical_storage_cell_64k", new: "64k Portable Chemical Drive" },
        { item: "appmek:portable_chemical_storage_cell_256k", new: "256k Portable Chemical Drive" },
        { item: "appflux:fe_1k_portable_cell", new: "1k Portable Energy Drive" },
        { item: "appflux:fe_4k_portable_cell", new: "4k Portable Energy Drive" },
        { item: "appflux:fe_16k_portable_cell", new: "16k Portable Energy Drive" },
        { item: "appflux:fe_64k_portable_cell", new: "64k Portable Energy Drive" },
        { item: "appflux:fe_256k_portable_cell", new: "256k Portable Energy Drive" },
        { item: "appbot:portable_mana_storage_cell_1k", new: "1k Portable Mana Drive" },
        { item: "appbot:portable_mana_storage_cell_4k", new: "4k Portable Mana Drive" },
        { item: "appbot:portable_mana_storage_cell_16k", new: "16k Portable Mana Drive" },
        { item: "appbot:portable_mana_storage_cell_64k", new: "64k Portable Mana Drive" },
        { item: "appbot:portable_mana_storage_cell_256k", new: "256k Portable Mana Drive" },
        { item: "arseng:portable_source_cell_1k", new: "1k Portable Source Drive" },
        { item: "arseng:portable_source_cell_4k", new: "4k Portable Source Drive" },
        { item: "arseng:portable_source_cell_16k", new: "16k Portable Source Drive" },
        { item: "arseng:portable_source_cell_64k", new: "64k Portable Source Drive" },
        { item: "arseng:portable_source_cell_256k", new: "256k Portable Source Drive" },
    ];
    RenamePattern.forEach((name) => {
        event.renameItem(name.item, name.new);
    });

    //// # =================================================================================================== #

    // Biomes
    event.renameBiome("hyperbox:hyperbox", "Hyperbox");

    //// # =================================================================================================== #

    //#region Pots definition
    // Define tiers with their display names
    const tiers = [
        { id: null, name: null },
        { id: "elite", name: "Saffron" },
        { id: "ultra", name: "Shadow" },
        { id: "creative", name: "Crimson" },
    ];

    // Define material types
    const materials = [
        { id: "terracotta", name: "Terracotta" },
        { id: "concrete", name: "Concrete" },
        { id: "glazed_terracotta", name: "Glazed" },
    ];

    // Define color variants
    const colors = [
        { id: "white", name: "White" },
        { id: "orange", name: "Orange" },
        { id: "magenta", name: "Magenta" },
        { id: "light_blue", name: "Light Blue" },
        { id: "yellow", name: "Yellow" },
        { id: "lime", name: "Lime" },
        { id: "pink", name: "Pink" },
        { id: "gray", name: "Gray" },
        { id: "light_gray", name: "Light Gray" },
        { id: "cyan", name: "Cyan" },
        { id: "purple", name: "Purple" },
        { id: "blue", name: "Blue" },
        { id: "brown", name: "Brown" },
        { id: "green", name: "Green" },
        { id: "red", name: "Red" },
        { id: "black", name: "Black" },
    ];

    // Define pot types
    const types = [
        { id: "botany_pot", name: "Botany Pot" },
        { id: "hopper_botany_pot", name: "Hopper Botany Pot" },
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
        //// Botany Pots
        // For default terracotta pots without color specification
        if (!colorId) {
            event.renameItem(`botanypots:${materialId}_${typeId}`, `${typeName}`);
        }

        // For colored pots
        // Special case for terracotta - we use a shorter name format
        if (materialId === "terracotta") {
            event.renameItem(`botanypots:${colorId}_${materialId}_${typeId}`, `${colorName} ${typeName}`);
        } else {
            // For Glazed and concrete with colors
            event.renameItem(`botanypots:${colorId}_${materialId}_${typeId}`, `${colorName} ${materialName} ${typeName}`);
        }
    }

    // Process standard botany pots (without tier)
    types.forEach((type) => {
        // Handle base terracotta pots (without color)
        renameBotanyPots(event, "terracotta", "Terracotta", null, null, type.id, type.name);

        // Handle all material and color combinations
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
        //// Botany Pots
        // For default terracotta pots without color specification
        if (!colorId) {
            event.renameItem(`botanypots:${tierId}_${materialId}_${typeId}`, `${tierName} ${typeName}`);
        }

        // For colored pots
        // Special case for terracotta - we use a shorter name format
        if (materialId === "terracotta") {
            event.renameItem(`botanypots:${tierId}_${colorId}_${materialId}_${typeId}`, `${tierName} ${colorName} ${typeName}`);
        } else {
            // For Glazed and concrete with colors
            event.renameItem(`botanypots:${tierId}_${colorId}_${materialId}_${typeId}`, `${tierName} ${colorName} ${materialName} ${typeName}`);
        }

        //// Botany Pots Tier
        // For default terracotta pots without color specification
        if (!colorId) {
            event.renameItem(`botanypotstiers:${tierId}_${materialId}_${typeId}`, `${tierName} ${typeName}`);
        }

        // For colored pots
        // Special case for terracotta - we use a shorter name format
        if (materialId === "terracotta") {
            event.renameItem(`botanypotstiers:${tierId}_${colorId}_${materialId}_${typeId}`, `${tierName} ${colorName} ${typeName}`);
        } else {
            // For Glazed and concrete with colors
            event.renameItem(`botanypotstiers:${tierId}_${colorId}_${materialId}_${typeId}`, `${tierName} ${colorName} ${materialName} ${typeName}`);
        }
    }

    // Process all tiered botany pot combinations
    tiers.forEach((tier) => {
        types.forEach((type) => {
            // Handle base terracotta pots (without color)
            renameBotanyPotsTier(event, tier.id, tier.name, "terracotta", "Terracotta", null, null, type.id, type.name);

            // Handle all material and color combinations
            materials.forEach((material) => {
                colors.forEach((color) => {
                    renameBotanyPotsTier(event, tier.id, tier.name, material.id, material.name, color.id, color.name, type.id, type.name);
                });
            });
        });
    });
    //#endregion
});
