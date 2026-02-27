//priority:10

PlayerEvents.loggedIn((event) => {
  //Definition
  const akashicTome = Item.of('akashictome:tome', '{"akashictome:data":{ftbquests:{Count:1b,id:"ftbquests:book"}}}');
  const helmet = Item.of('ad_astra:space_helmet', '{Damage:0}');
  const suit = Item.of('ad_astra:space_suit', '{BotariumData:{StoredFluids:[{Amount:2500L,Fluid:"ad_astra:oxygen"}]},Damage:0}');
  const pants = Item.of('ad_astra:space_pants', '{Damage:0}');
  const boots = Item.of('ad_astra:space_boots', '{Damage:0}');

  //# ====================================================================================== #

  //Starting Item
  if (!event.player.stages.has('starting_item')) {
    event.player.stages.add('starting_item');
    event.entity.setItemSlot(5, helmet);
    event.entity.setItemSlot(4, suit);
    event.entity.setItemSlot(3, pants);
    event.entity.setItemSlot(2, boots);
    event.player.give(akashicTome);
  }
});
