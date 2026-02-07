//priority:960

//Constant
const SmeltingFactor = Anoxia.Constant.Tinker.SmeltingFactor;

const BaseTime = SmeltingFactor.BaseTime;
const Furnace = SmeltingFactor.Furnace;
const Env = SmeltingFactor.Environment;
const EnvWeight = SmeltingFactor.Environment;

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
  GetAmbientFactor() {
    return Env.Conduction * EnvWeight.Conduction + Env.Convection * EnvWeight.Convection + Env.Radiation * EnvWeight.Radiation;
  },

  GetBaseFactor(material, ingot) {
    return (material.MeltPoint / 900) * Math.sqrt(ingot) * this.GetAmbientFactor();
  },

  GetCoolingTick(material, ingot) {
    return Math.round(BaseTime.Cooling * this.GetBaseFactor(material, ingot));
  },

  GetMeltingTick(material, ingot) {
    return Math.round((BaseTime.Melting * this.GetBaseFactor(material, ingot)) / Furnace.Heat);
  },
};
