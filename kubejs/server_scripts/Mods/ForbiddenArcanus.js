ServerEvents.recipes((event) => {
    //Restore ChestBoat => Aurum Chest Boat
    event.shapeless("forbidden_arcanus:aurum_chest_boat", ["forbidden_arcanus:aurum_boat", "#forge:chests/wooden"]);

    //Restore ChestBoat => edel Chest Boat
    event.shapeless("forbidden_arcanus:edelwood_chest_boat", ["forbidden_arcanus:edelwood_boat", "#forge:chests/wooden"]);
});
