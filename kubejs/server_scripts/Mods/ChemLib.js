ServerEvents.recipes((event) => {
    //Benitonite
    event.custom({
        type: "alchemistry:combiner",
        group: "alchemistry:combiner",
        input: [
            { count: 1, ingredient: { item: "chemlib:barium" } },
            { count: 1, ingredient: { item: "chemlib:titanium" } },
            { count: 1, ingredient: { item: "chemlib:silicon" } },
        ],
        result: { item: "bigreactors:benitoite_crystal" },
    });

    //Anglesite
    event.custom({
        type: "alchemistry:combiner",
        group: "alchemistry:combiner",
        input: [
            { count: 1, ingredient: { item: "chemlib:lead" } },
            { count: 1, ingredient: { item: "chemlib:sulfur" } },
            { count: 4, ingredient: { item: "chemlib:oxygen" } },
        ],
        result: { item: "bigreactors:anglesite_crystal" },
    });

    //Reverse Benitonite
    event.custom({
        type: "alchemistry:dissolver",
        group: "alchemistry:dissolver",
        input: { count: 1, ingredient: { item: "bigreactors:benitoite_crystal" } },
        output: {
            groups: [
                {
                    probability: 100.0,
                    results: [
                        { count: 1, item: "chemlib:barium" },
                        { count: 1, item: "chemlib:titanium" },
                        { count: 1, item: "chemlib:silicon" },
                    ],
                },
            ],
            rolls: 1,
            weighted: false,
        },
    });

    //Anglesite
    event.custom({
        type: "alchemistry:dissolver",
        group: "alchemistry:dissolver",
        input: { count: 1, ingredient: { item: "bigreactors:anglesite_crystal" } },
        output: {
            groups: [
                {
                    probability: 100.0,
                    results: [
                        { count: 1, item: "chemlib:lead" },
                        { count: 1, item: "chemlib:sulfur" },
                        { count: 4, item: "chemlib:oxygen" },
                    ],
                },
            ],
            rolls: 1,
            weighted: false,
        },
    });

    event.custom({
        type: "alchemistry:liquifier",
        group: "alchemistry:liquifier",
        input: { count: 8, ingredient: { item: "chemlib:oxygen" } },
        result: { amount: "500", fluid: "mekanism:oxygen" },
    });
});
