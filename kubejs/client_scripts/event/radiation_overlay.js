const MAX_RADIATION = 100;

// Creiamo l'overlay
StartupEvents.init(event => {
  Overlay.create("radiation_bar", true) // nome, visibile di default
    .position("bottom_right", -5, -35) // posizione in basso a destra, con offset
    .size(102, 12) // larghezza/altezza della barra
    .background("minecraft:textures/gui/widgets.png", 0, 46, 182, 5) // texture di base (puoi cambiare)
    .foreground("minecraft:textures/gui/widgets.png", 0, 52, 182, 5); // parte riempita
});

// Ogni tick aggiorniamo il valore
ClientEvents.tick(event => {
  let player = Client.player;
  if (!player) return;

  let data = player.persistentData;
  let rad = data.radiation || 0;

  let overlay = Overlay.get("radiation_bar");
  if (overlay) {
    overlay.value(rad / MAX_RADIATION); // valore normalizzato (0–1)
    overlay.visible = rad > 0; // si vede solo se hai radiazioni
  }
});
