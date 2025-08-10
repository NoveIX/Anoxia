ServerEvents.recipes((event) => {
    //Unobtanium
    event.remove({ output: "architects_palette:unobtanium" });
    event.shapeless(Item.of("architects_palette:unobtanium", 4), ["architects_palette:unobtanium_block"]);
});
