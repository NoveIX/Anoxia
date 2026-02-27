//priority:1960

//Constant
const anoxia = global.anoxia;
const smeltingFactor = anoxia.constant.tinkerConstruct.smeltingFactor;

const furnace = smeltingFactor.furnace;
const dimension = smeltingFactor.dimension;
const environment = smeltingFactor.environment;

const amountType = anoxia.constant.tinkerConstruct.amountType;

//# ====================================================================================== #

anoxia.function.generic = {
  toTag(str) {
    return `#${str}`;
  },

  isTagOrItem(value, count, force) {
    // Determine if it is a tag: starts with ‘forge’ OR contains '/'
    const isTag = value.startsWith('forge') || value.includes('/') || force;

    // Costruisce l'oggetto base
    const result = {
      type: isTag ? 'tag' : 'item',
      id: value,
    };

    // If count is present (not undefined), add it to the object
    // Use !== undefined to also allow count: 0
    if (count !== undefined) result.count = count;

    return result;
  },
};

//# ====================================================================================== #

anoxia.function.tinkerConstruct = {
  fromAmount(qty) {
    return qty / 90;
  },

  getIngot(amount, type) {
    return amount * (amountType[type] / amountType.ingot);
  },

  getCoolingTick(material, ingot) {
    const base = ((material - dimension.moon) / environment.value) * ingot;
    return Math.ceil(base / 20) * 20; // rounded to the nearest multiple of 20
  },

  getMeltingTick(material, ingot) {
    const base = ((material - dimension.moon) / (environment.value * furnace.heat)) * ingot;
    return Math.ceil(base / 20) * 20; // rounded to the nearest multiple of 20
  },

  addDualCastRecipe(castType, json, event) {
    const castmaterial = [
      { type: 'multi_use', consumed: false },
      { type: 'single_use', consumed: true },
    ];

    castmaterial.forEach((variant) => {
      // Check cast type
      json.cast = { tag: `tconstruct:casts/${variant.type}/${castType}` };
      if (variant.consumed) json.cast_consumed = true;

      // Ad recipe
      event.custom(json);
    });
  },
};
