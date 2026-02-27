//priority:960

//Constant
const SmeltingFactor = Anoxia.Constant.Tinker.SmeltingFactor;

const Furnace = SmeltingFactor.Furnace;
const Dimension = SmeltingFactor.Dimension;
const Environment = SmeltingFactor.Environment;

const AmountType = Anoxia.Constant.Tinker.AmountType;

//# ====================================================================================== #

Anoxia.Function.Generic = {
  ToTag(str) {
    return `#${str}`;
  },
};

//# ====================================================================================== #

Anoxia.Function.Tinker = {
  FromAmount(qty) {
    return qty / 90;
  },

  GetIngot(amount, type) {
    return amount * (AmountType[type] / AmountType.Ingot);
  },

  GetCoolingTick(material, ingot) {
    const base = ((material.MeltPoint - Dimension.Moon) / Environment.Value) * ingot;
    return Math.ceil(base / 20) * 20; // rounded to the nearest multiple of 20
  },

  GetMeltingTick(material, ingot) {
    const base = ((material.MeltPoint - Dimension.Moon) / (Environment.Value * Furnace.Heat)) * ingot;
    return Math.ceil(base / 20) * 20; // rounded to the nearest multiple of 20
  },

  AddDualCastRecipe(castType, json, event) {
    const castMaterial = [
      { type: 'multi_use', consumed: false },
      { type: 'single_use', consumed: true },
    ];

    castMaterial.forEach((variant) => {
      // Check cast type
      json.cast = { tag: `tconstruct:casts/${variant.type}/${castType}` };
      if (variant.consumed) json.cast_consumed = true;

      // Ad recipe
      event.custom(json);
    });
  },
};
