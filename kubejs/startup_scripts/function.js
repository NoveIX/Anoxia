//priority:960

//Constant
const SmeltingFactor = Anoxia.Constant.Tinker.SmeltingFactor;

const Furnace = SmeltingFactor.Furnace;
const Dimension = SmeltingFactor.Dimension;
const Environment = SmeltingFactor.Environment;

const AmountType = Anoxia.Constant.Tinker.AmountType;

//# =================================================================================================== #

Anoxia.Function.Generic = {
  ToTag(str) {
    return `#${str}`;
  },

  FromTag(str) {
    return str.startsWith('#') ? str.slice(1) : str;
  },

  GetItem(put, count) {
    return count !== undefined ? { item: put, count: count } : { item: put };
  },

  GetTag(put, count) {
    return count !== undefined ? { tag: put, count: count } : { tag: put };
  },

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
};
