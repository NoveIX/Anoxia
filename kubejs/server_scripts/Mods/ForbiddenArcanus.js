ServerEvents.recipes((event) => {
    //Aurum Chest Boat
    event.remove({ output: "forbidden_arcanus:aurum_chest_boat" });
    event.shapeless("forbidden_arcanus:aurum_chest_boat", ["forbidden_arcanus:aurum_boat", "#forge:chests/wooden"]);

    //edel Chest Boat
    event.remove({ output: "forbidden_arcanus:edelwood_chest_boat" });
    event.shapeless("forbidden_arcanus:edelwood_chest_boat", ["forbidden_arcanus:edelwood_boat", "#forge:chests/wooden"]);
});
