BlockEvents.modification(event => {
    //Cobble for day require tools
    const BlockPattern = [
        { id: "cobblefordays:tier_1", material: "wood", hardeness: 4 },
        { id: "cobblefordays:tier_2", material: "cobblestone", hardeness: 4 },
        { id: "cobblefordays:tier_3", material: "iron", hardeness: 10 },
        { id: "cobblefordays:tier_4", material: "gold", hardeness: 6 },
        { id: "cobblefordays:tier_5", material: "diamond", hardeness: 10 },
    ];
    BlockPattern.forEach((block) => {
        event.modify(block.id, data => {
            data.material = block.material
            data.destroySpeed = 1
            data.requiredTool = true
        });
    })
});