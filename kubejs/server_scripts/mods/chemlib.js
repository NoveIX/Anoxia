ServerEvents.recipes((event) => {
  //Benitonite
  event.custom({
    type: 'alchemistry:combiner',
    group: 'alchemistry:combiner',
    input: [
      { count: 1, ingredient: { item: 'chemlib:barium' } },
      { count: 1, ingredient: { item: 'chemlib:titanium' } },
      { count: 1, ingredient: { item: 'chemlib:silicon' } },
    ],
    result: { item: 'bigreactors:benitoite_crystal' },
  });

  //Anglesite
  event.custom({
    type: 'alchemistry:combiner',
    group: 'alchemistry:combiner',
    input: [
      { count: 1, ingredient: { item: 'chemlib:lead' } },
      { count: 1, ingredient: { item: 'chemlib:sulfur' } },
      { count: 4, ingredient: { item: 'chemlib:oxygen' } },
    ],
    result: { item: 'bigreactors:anglesite_crystal' },
  });

  //Reverse Benitonite
  event.custom({
    type: 'alchemistry:dissolver',
    group: 'alchemistry:dissolver',
    input: { count: 1, ingredient: { item: 'bigreactors:benitoite_crystal' } },
    output: {
      groups: [
        {
          probability: 100.0,
          results: [
            { count: 1, item: 'chemlib:barium' },
            { count: 1, item: 'chemlib:titanium' },
            { count: 1, item: 'chemlib:silicon' },
          ],
        },
      ],
      rolls: 1,
      weighted: false,
    },
  });

  //Reverse Anglesite
  event.custom({
    type: 'alchemistry:dissolver',
    group: 'alchemistry:dissolver',
    input: { count: 1, ingredient: { item: 'bigreactors:anglesite_crystal' } },
    output: {
      groups: [
        {
          probability: 100.0,
          results: [
            { count: 1, item: 'chemlib:lead' },
            { count: 1, item: 'chemlib:sulfur' },
            { count: 4, item: 'chemlib:oxygen' },
          ],
        },
      ],
      rolls: 1,
      weighted: false,
    },
  });

  event.remove({ id: 'alchemistry:dissolver/carpets' });
  event.custom({
    type: 'alchemistry:dissolver',
    group: 'alchemistry:dissolver',
    input: { count: 1, ingredient: { tag: 'minecraft:wool_carpets' } },
    output: {
      groups: [
        { probability: 66.66666666666666, results: [{ count: 2, item: 'chemlib:keratin' }, { item: 'chemlib:triglyceride' }] },
        { probability: 33.33333333333334, results: [{ item: 'minecraft:air' }] },
      ],
      rolls: 1,
      weighted: false,
    },
  });
});
