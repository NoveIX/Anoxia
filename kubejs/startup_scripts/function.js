//priority:960

//Constant
const SmeltingFactor = Anoxia.Constant.Tinker.SmeltingFactor;

const Furnace = SmeltingFactor.Furnace;
const Dimension = SmeltingFactor.Dimension;
const Environment = SmeltingFactor.Environment;

//# =================================================================================================== #

Anoxia.Function.Generic = {
  ToPascalCase(str) {
    return str.replace(/^./, (c) => c.toUpperCase());
  },

  ToDisplayName(id) {
    return id
      .split('_')
      .map((word) => this.ToPascalCase(word))
      .join(' ');
  },

  ToDisplayNameFromId(id) {
    return this.ToDisplayName(id.split(':').pop());
  },
};

//# =================================================================================================== #

Anoxia.Function.Tinker = {
  GetCoolingTick(material, ingot) {
    const base = ((material.MeltPoint - Dimension.Moon) / Environment.Value) * ingot;
    return Math.ceil(base / 20) * 20; // rounded to the nearest multiple of 20
  },

  GetMeltingTick(material, ingot) {
    const base = ((material.MeltPoint - Dimension.Moon) / (Environment.Value * Furnace.Heat)) * ingot;
    return Math.ceil(base / 20) * 20; // rounded to the nearest multiple of 20
  },
};
