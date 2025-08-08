ServerEvents.recipes((event) => {
    //Restore ChestBoat => Aurum Chest Boat
    event.remove({ id: "forbidden_arcanus:aurum_chest_boat" });
    event.shapeless("forbidden_arcanus:aurum_chest_boat", ["forbidden_arcanus:aurum_boat", "#forge:chests/wooden"]);

    //Restore ChestBoat => edel Chest Boat
    event.remove({ id: "forbidden_arcanus:edelwood_chest_boat" });
    event.shapeless("forbidden_arcanus:edelwood_chest_boat", ["forbidden_arcanus:edelwood_boat", "#forge:chests/wooden"]);
});
