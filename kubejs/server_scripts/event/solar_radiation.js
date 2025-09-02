const MAX_RADIATION = 100;

// Aumenta radiazioni se sei sulla Luna
ServerEvents.tick(event => {
  if (event.server.getTickCount() % 100 == 0) {
    event.server.players.forEach(player => {
      let data = player.persistentData;

      if (player.level.dimension == "yourmoonmod:moon") {
        data.radiation = (data.radiation || 0) + 1;
        if (data.radiation > MAX_RADIATION) data.radiation = MAX_RADIATION;

        if (data.radiation >= MAX_RADIATION) {
          player.attack(1); // danno mezzo cuore
        }
      }
    });
  }
});

// Bevendo pozione dimezza radiazioni
ItemEvents.foodEaten(event => {
  let item = event.item.id;
  let player = event.player;
  if (!player) return;

  if (item.includes("potion")) {
    let data = player.persistentData;
    if (data.radiation) {
      data.radiation = Math.floor(data.radiation / 2);
      player.tell("§aLe radiazioni sono diminuite!");
    }
  }
});
