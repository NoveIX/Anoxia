//priority:960

//Constant
const BaseFactor = Anoxia.Constant.Tinker.BaseFactor;

const RadiationFact = BaseFactor.radiation_factor;
const ConductionFact = BaseFactor.conduction_factor;
const HeatFact = BaseFactor.heat_factor;
const CoolingTime = BaseFactor.base_cooling_time;
const MeltTime = BaseFactor.base_melting_time;

//# =================================================================================================== #

Anoxia.Function.Generic = {
  toPascalCase(str) {
    return str.replace(/^./, (c) => c.toUpperCase());
  },

  toDisplayName(id) {
    return id
      .split('_')
      .map((word) => this.toPascalCase(word))
      .join(' ');
  },

  toDisplayNameFromId(id) {
    return this.toDisplayName(id.split(':').pop());
  },
};

//# =================================================================================================== #

Anoxia.Function.Tinker = {
  getAmbientFactor() {
    return (RadiationFact + ConductionFact) / 2;
  },

  getBaseFactor(material, ingot) {
    return (material.meltPoint / 900) * Math.sqrt(ingot) * this.getAmbientFactor();
  },

  getCoolingTick(material, ingot) {
    return Math.round(CoolingTime * this.getBaseFactor(material, ingot));
  },

  getMeltingTick(material, ingot) {
    return Math.round((MeltTime * this.getBaseFactor(material, ingot)) / HeatFact);
  },
};
