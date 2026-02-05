//priority:940

//Constant
const GameItem = Anoxia.Game.Item;
const GameFluid = Anoxia.Game.Fluid;
const GameRecipe = Anoxia.Game.Recipe;
const Material = Anoxia.Constant.Tinker.Material;

//region Fx Generic
const Generic = Anoxia.Function.Generic;
const toPascalCase = Generic.toPascalCase.bind(Generic);
const toDisplayName = Generic.toDisplayName.bind(Generic);
const toDisplayNameFromId = Generic.toDisplayNameFromId.bind(Generic);
//#endregion

//region Fx Tinker
const Tinker = Anoxia.Function.Tinker;
const getCoolingTick = Tinker.getCoolingTick.bind(Tinker);
const getMeltingTick = Tinker.getMeltingTick.bind(Tinker);
//#endregion
