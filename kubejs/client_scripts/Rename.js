ClientEvents.lang("en_us", (event) => {
    // Basic Items
    event.renameItem("quark:sturdy_stone", "Stasis Stone (Za Warudo! Toki wo tomare!)");
    event.renameItem("thermal:coal_coke_block", "Block of Coal Coke");
    event.renameItem("industrialforegoing:tinydryrubber", "Tiny Dry Rubber");

    // Biomes
    event.renameBiome("hyperbox:hyperbox", "Hyperbox");

    //#region Pots definition
    // Define tiers with their display names
    const tiers = [
        { id: null, name: null },
        { id: "elite", name: "Advanced" },
        { id: "ultra", name: "Elite" },
        { id: "creative", name: "Ultimate" },
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
