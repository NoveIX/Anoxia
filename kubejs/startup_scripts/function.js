//priority:960

//Constant
var BaseFactor = Anoxia.Constant.Tinker.BaseFactor;

var RadiationFact = BaseFactor.radiation_factor;
var ConductionFact = BaseFactor.conduction_factor;
var HeatFact = BaseFactor.heat_factor;
var CoolingTime = BaseFactor.base_cooling_time;
var MeltTime = BaseFactor.base_melting_time;

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

  toDisplayNameFromId: function (id) {
    return this.toDisplayName(id.split(':').pop());
  },
};

//# =================================================================================================== #

Anoxia.Function.Tinker = {
  getAmbientFactor() {
    return (RadiationFact + ConductionFact) / 2;
  },

  getBaseFactor(meltPoint, ingot) {
    return (meltPoint / 900) * Math.sqrt(ingot) * this.getAmbientFactor();
  },

  getCoolingTick(meltPoint, ingot) {
    return Math.round(CoolingTime * this.getBaseFactor(meltPoint, ingot));
  },

  getMeltingTick(meltPoint, ingot) {
    return Math.round((MeltTime * this.getBaseFactor(meltPoint, ingot)) / HeatFact);
  },
};
