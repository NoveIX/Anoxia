ItemEvents.rightClicked("minecraft:water_bucket", (event) => {
    let currentDimension = event.player.level.dimension;
    // Sostituisci 'minecraft:the_nether' e 'minecraft:the_end' con le dimensioni che vuoi limitare
    if (currentDimension === "minecraft:the_nether" || currentDimension === "minecraft:the_end") {
        event.player.tell("Non puoi usare il secchio d'acqua in questa dimensione!");
        event.cancel(); // Annulla l'azione del click destro
    }
});
