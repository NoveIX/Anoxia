ServerEvents.recipes((event) => {
  //#region Remove ID
  const rmRecipeId = [
    //Botania
    'botanicadds:flowers/floating/necroidus',
    'botanicadds:flowers/floating/apicaria',
    'botanicadds:flowers/floating/tempestea',
    'botanicadds:flowers/floating/rainute',
    'botanicadds:flowers/floating/glaciflora',
    'botanicadds:flowers/floating/vibrantia',
    'botanicadds:flowers/floating/energizera',
  ];
  rmRecipeId.forEach((id) => event.remove({ id: id }));
  //#endregion

  //# ====================================================================================== #

  //#region Altar
  const altarPattern = [
    //Mekanism
    { get: 'mekanism:ultimate_tier_installer', put: 'mekanism:elite_tier_installer', syphon: 40000, consumption: 400, drain: 40, level: 4 },

    //Botania Floating Flower
    { get: 'botania:white_floating_flower', put: 'botania:white_shiny_flower', syphon: 500, consumption: 10, drain: 5, level: 0 },
    { get: 'botania:light_gray_floating_flower', put: 'botania:light_gray_shiny_flower', syphon: 500, consumption: 10, drain: 5, level: 0 },
    { get: 'botania:gray_floating_flower', put: 'botania:gray_shiny_flower', syphon: 500, consumption: 10, drain: 5, level: 0 },
    { get: 'botania:black_floating_flower', put: 'botania:black_shiny_flower', syphon: 500, consumption: 10, drain: 5, level: 0 },
    { get: 'botania:brown_floating_flower', put: 'botania:brown_shiny_flower', syphon: 500, consumption: 10, drain: 5, level: 0 },
    { get: 'botania:red_floating_flower', put: 'botania:red_shiny_flower', syphon: 500, consumption: 10, drain: 5, level: 0 },
    { get: 'botania:orange_floating_flower', put: 'botania:orange_shiny_flower', syphon: 500, consumption: 10, drain: 5, level: 0 },
    { get: 'botania:yellow_floating_flower', put: 'botania:yellow_shiny_flower', syphon: 500, consumption: 10, drain: 5, level: 0 },
    { get: 'botania:lime_floating_flower', put: 'botania:lime_shiny_flower', syphon: 500, consumption: 10, drain: 5, level: 0 },
    { get: 'botania:green_floating_flower', put: 'botania:green_shiny_flower', syphon: 500, consumption: 10, drain: 5, level: 0 },
    { get: 'botania:cyan_floating_flower', put: 'botania:cyan_shiny_flower', syphon: 500, consumption: 10, drain: 5, level: 0 },
    { get: 'botania:light_blue_floating_flower', put: 'botania:light_blue_shiny_flower', syphon: 500, consumption: 10, drain: 5, level: 0 },
    { get: 'botania:blue_floating_flower', put: 'botania:blue_shiny_flower', syphon: 500, consumption: 10, drain: 5, level: 0 },
    { get: 'botania:purple_floating_flower', put: 'botania:purple_shiny_flower', syphon: 500, consumption: 10, drain: 5, level: 0 },
    { get: 'botania:magenta_floating_flower', put: 'botania:magenta_shiny_flower', syphon: 500, consumption: 10, drain: 5, level: 0 },
    { get: 'botania:pink_floating_flower', put: 'botania:pink_shiny_flower', syphon: 500, consumption: 10, drain: 5, level: 0 },

    { get: 'botania:floating_pure_daisy', put: 'botania:pure_daisy', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_manastar', put: 'botania:manastar', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_hydroangeas', put: 'botania:hydroangeas', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_endoflame', put: 'botania:endoflame', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_thermalily', put: 'botania:thermalily', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_rosa_arcana', put: 'botania:rosa_arcana', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_munchdew', put: 'botania:munchdew', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_entropinnyum', put: 'botania:entropinnyum', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_kekimurus', put: 'botania:kekimurus', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_gourmaryllis', put: 'botania:gourmaryllis', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_narslimmus', put: 'botania:narslimmus', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_spectrolus', put: 'botania:spectrolus', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_dandelifeon', put: 'botania:dandelifeon', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_rafflowsia', put: 'botania:rafflowsia', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_shulk_me_not', put: 'botania:shulk_me_not', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_bellethorn', put: 'botania:bellethorn', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_bellethorn_chibi', put: 'botania:bellethorn_chibi', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_bergamute', put: 'botania:bergamute', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_dreadthorn', put: 'botania:dreadthorn', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_heisei_dream', put: 'botania:heisei_dream', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_tigerseye', put: 'botania:tigerseye', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_jaded_amaranthus', put: 'botania:jaded_amaranthus', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_orechid', put: 'botania:orechid', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_fallen_kanade', put: 'botania:fallen_kanade', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_exoflame', put: 'botania:exoflame', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_agricarnation', put: 'botania:agricarnation', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_agricarnation_chibi', put: 'botania:agricarnation_chibi', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_hopperhock', put: 'botania:hopperhock', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_hopperhock_chibi', put: 'botania:hopperhock_chibi', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_tangleberrie', put: 'botania:tangleberrie', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_tangleberrie_chibi', put: 'botania:tangleberrie_chibi', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_jiyuulia', put: 'botania:jiyuulia', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_jiyuulia_chibi', put: 'botania:jiyuulia_chibi', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_rannuncarpus', put: 'botania:rannuncarpus', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_rannuncarpus_chibi', put: 'botania:rannuncarpus_chibi', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_hyacidus', put: 'botania:hyacidus', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_pollidisiac', put: 'botania:pollidisiac', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_clayconia', put: 'botania:clayconia', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_clayconia_chibi', put: 'botania:clayconia_chibi', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_loonium', put: 'botania:loonium', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_daffomill', put: 'botania:daffomill', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_vinculotus', put: 'botania:vinculotus', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_spectranthemum', put: 'botania:spectranthemum', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_medumone', put: 'botania:medumone', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_marimorphosis', put: 'botania:marimorphosis', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_marimorphosis_chibi', put: 'botania:marimorphosis_chibi', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_bubbell', put: 'botania:bubbell', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_bubbell_chibi', put: 'botania:bubbell_chibi', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_solegnolia', put: 'botania:solegnolia', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_solegnolia_chibi', put: 'botania:solegnolia_chibi', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_orechid_ignem', put: 'botania:orechid_ignem', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botania:floating_labellia', put: 'botania:labellia', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botanicadds:flowers/floating/necroidus', put: 'botanicadds:flowers/necroidus', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botanicadds:flowers/floating/apicaria', put: 'botanicadds:flowers/apicaria', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botanicadds:flowers/floating/tempestea', put: 'botanicadds:flowers/tempestea', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botanicadds:flowers/floating/rainute', put: 'botanicadds:flowers/rainute', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botanicadds:flowers/floating/glaciflora', put: 'botanicadds:flowers/glaciflora', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botanicadds:flowers/floating/vibrantia', put: 'botanicadds:flowers/vibrantia', syphon: 1000, consumption: 20, drain: 5, level: 1 },
    { get: 'botanicadds:flowers/floating/energizera', put: 'botanicadds:flowers/energizera', syphon: 1000, consumption: 20, drain: 5, level: 1 },
  ];
  altarPattern.forEach((recipe) => {
    event.remove({ output: recipe.get });

    const json = {
      type: 'bloodmagic:altar',
      altarSyphon: recipe.syphon,
      consumptionRate: recipe.consumption,
      drainRate: recipe.drain,
      output: { item: recipe.get },
      upgradeLevel: recipe.level,
    };

    //Input: tag o item
    json.input = recipe.put.startsWith('forge:') ? { tag: recipe.put } : { item: recipe.put };

    event.custom(json);
  });
  //#endregion
});
