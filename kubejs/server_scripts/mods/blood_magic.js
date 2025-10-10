ServerEvents.recipes((event) => {
    //#region Remove ID
    const RmRecipeID = [
        //Botania
        "botanicadds:flowers/floating/necroidus",
        "botanicadds:flowers/floating/apicaria",
        "botanicadds:flowers/floating/tempestea",
        "botanicadds:flowers/floating/rainute",
        "botanicadds:flowers/floating/glaciflora",
        "botanicadds:flowers/floating/vibrantia",
        "botanicadds:flowers/floating/energizera",
    ];
    RmRecipeID.forEach((id) => event.remove({ id: id }));
    //#endregion

    //// # =================================================================================================== #

    //#region Altar
    const AltarPattern = [
        //Mekanism
        { get: { item: "mekanism:ultimate_tier_installer" }, put: { item: "mekanism:elite_tier_installer" }, syphon: 40000, consumption: 400, drain: 40, level: 4 },

        //Botania Floating Flower
        { get: { item: "botania:white_floating_flower" }, put: { item: "botania:white_shiny_flower" }, syphon: 500, consumption: 10, drain: 5, level: 0 },
        { get: { item: "botania:light_gray_floating_flower" }, put: { item: "botania:light_gray_shiny_flower" }, syphon: 500, consumption: 10, drain: 5, level: 0 },
        { get: { item: "botania:gray_floating_flower" }, put: { item: "botania:gray_shiny_flower" }, syphon: 500, consumption: 10, drain: 5, level: 0 },
        { get: { item: "botania:black_floating_flower" }, put: { item: "botania:black_shiny_flower" }, syphon: 500, consumption: 10, drain: 5, level: 0 },
        { get: { item: "botania:brown_floating_flower" }, put: { item: "botania:brown_shiny_flower" }, syphon: 500, consumption: 10, drain: 5, level: 0 },
        { get: { item: "botania:red_floating_flower" }, put: { item: "botania:red_shiny_flower" }, syphon: 500, consumption: 10, drain: 5, level: 0 },
        { get: { item: "botania:orange_floating_flower" }, put: { item: "botania:orange_shiny_flower" }, syphon: 500, consumption: 10, drain: 5, level: 0 },
        { get: { item: "botania:yellow_floating_flower" }, put: { item: "botania:yellow_shiny_flower" }, syphon: 500, consumption: 10, drain: 5, level: 0 },
        { get: { item: "botania:lime_floating_flower" }, put: { item: "botania:lime_shiny_flower" }, syphon: 500, consumption: 10, drain: 5, level: 0 },
        { get: { item: "botania:green_floating_flower" }, put: { item: "botania:green_shiny_flower" }, syphon: 500, consumption: 10, drain: 5, level: 0 },
        { get: { item: "botania:cyan_floating_flower" }, put: { item: "botania:cyan_shiny_flower" }, syphon: 500, consumption: 10, drain: 5, level: 0 },
        { get: { item: "botania:light_blue_floating_flower" }, put: { item: "botania:light_blue_shiny_flower" }, syphon: 500, consumption: 10, drain: 5, level: 0 },
        { get: { item: "botania:blue_floating_flower" }, put: { item: "botania:blue_shiny_flower" }, syphon: 500, consumption: 10, drain: 5, level: 0 },
        { get: { item: "botania:purple_floating_flower" }, put: { item: "botania:purple_shiny_flower" }, syphon: 500, consumption: 10, drain: 5, level: 0 },
        { get: { item: "botania:magenta_floating_flower" }, put: { item: "botania:magenta_shiny_flower" }, syphon: 500, consumption: 10, drain: 5, level: 0 },
        { get: { item: "botania:pink_floating_flower" }, put: { item: "botania:pink_shiny_flower" }, syphon: 500, consumption: 10, drain: 5, level: 0 },

        { get: { item: "botania:floating_pure_daisy" }, put: { item: "botania:pure_daisy" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_manastar" }, put: { item: "botania:manastar" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_hydroangeas" }, put: { item: "botania:hydroangeas" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_endoflame" }, put: { item: "botania:endoflame" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_thermalily" }, put: { item: "botania:thermalily" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_rosa_arcana" }, put: { item: "botania:rosa_arcana" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_munchdew" }, put: { item: "botania:munchdew" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_entropinnyum" }, put: { item: "botania:entropinnyum" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_kekimurus" }, put: { item: "botania:kekimurus" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_gourmaryllis" }, put: { item: "botania:gourmaryllis" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_narslimmus" }, put: { item: "botania:narslimmus" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_spectrolus" }, put: { item: "botania:spectrolus" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_dandelifeon" }, put: { item: "botania:dandelifeon" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_rafflowsia" }, put: { item: "botania:rafflowsia" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_shulk_me_not" }, put: { item: "botania:shulk_me_not" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_bellethorn" }, put: { item: "botania:bellethorn" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_bellethorn_chibi" }, put: { item: "botania:bellethorn_chibi" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_bergamute" }, put: { item: "botania:bergamute" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_dreadthorn" }, put: { item: "botania:dreadthorn" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_heisei_dream" }, put: { item: "botania:heisei_dream" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_tigerseye" }, put: { item: "botania:tigerseye" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_jaded_amaranthus" }, put: { item: "botania:jaded_amaranthus" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_orechid" }, put: { item: "botania:orechid" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_fallen_kanade" }, put: { item: "botania:fallen_kanade" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_exoflame" }, put: { item: "botania:exoflame" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_agricarnation" }, put: { item: "botania:agricarnation" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_agricarnation_chibi" }, put: { item: "botania:agricarnation_chibi" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_hopperhock" }, put: { item: "botania:hopperhock" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_hopperhock_chibi" }, put: { item: "botania:hopperhock_chibi" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_tangleberrie" }, put: { item: "botania:tangleberrie" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_tangleberrie_chibi" }, put: { item: "botania:tangleberrie_chibi" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_jiyuulia" }, put: { item: "botania:jiyuulia" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_jiyuulia_chibi" }, put: { item: "botania:jiyuulia_chibi" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_rannuncarpus" }, put: { item: "botania:rannuncarpus" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_rannuncarpus_chibi" }, put: { item: "botania:rannuncarpus_chibi" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_hyacidus" }, put: { item: "botania:hyacidus" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_pollidisiac" }, put: { item: "botania:pollidisiac" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_clayconia" }, put: { item: "botania:clayconia" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_clayconia_chibi" }, put: { item: "botania:clayconia_chibi" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_loonium" }, put: { item: "botania:loonium" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_daffomill" }, put: { item: "botania:daffomill" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_vinculotus" }, put: { item: "botania:vinculotus" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_spectranthemum" }, put: { item: "botania:spectranthemum" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_medumone" }, put: { item: "botania:medumone" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_marimorphosis" }, put: { item: "botania:marimorphosis" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_marimorphosis_chibi" }, put: { item: "botania:marimorphosis_chibi" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_bubbell" }, put: { item: "botania:bubbell" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_bubbell_chibi" }, put: { item: "botania:bubbell_chibi" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_solegnolia" }, put: { item: "botania:solegnolia" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_solegnolia_chibi" }, put: { item: "botania:solegnolia_chibi" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_orechid_ignem" }, put: { item: "botania:orechid_ignem" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botania:floating_labellia" }, put: { item: "botania:labellia" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botanicadds:flowers/floating/necroidus" }, put: { item: "botanicadds:flowers/necroidus" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botanicadds:flowers/floating/apicaria" }, put: { item: "botanicadds:flowers/apicaria" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botanicadds:flowers/floating/tempestea" }, put: { item: "botanicadds:flowers/tempestea" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botanicadds:flowers/floating/rainute" }, put: { item: "botanicadds:flowers/rainute" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botanicadds:flowers/floating/glaciflora" }, put: { item: "botanicadds:flowers/glaciflora" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botanicadds:flowers/floating/vibrantia" }, put: { item: "botanicadds:flowers/vibrantia" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
        { get: { item: "botanicadds:flowers/floating/energizera" }, put: { item: "botanicadds:flowers/energizera" }, syphon: 1000, consumption: 20, drain: 5, level: 1 },
    ];
    AltarPattern.forEach((recipe) => {
        event.remove({ output: recipe.get.item });
        event.custom({
            type: "bloodmagic:altar",
            altarSyphon: recipe.syphon,
            consumptionRate: recipe.consumption,
            drainRate: recipe.drain,
            input: recipe.put,
            output: recipe.get,
            upgradeLevel: recipe.level,
        });
    });
    //#endregion
});
