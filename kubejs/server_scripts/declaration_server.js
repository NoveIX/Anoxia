//priority:1000

//#region Game Const

const gameItem = anoxia.game.item;
const gameFluid = anoxia.game.fluid;
const gameRecipe = anoxia.game.recipe;
//#endregion

//#region Func Generic
const funcGeneric = anoxia.function.generic;
const toTag = funcGeneric.toTag.bind(funcGeneric);
const isTagOrItem = funcGeneric.isTagOrItem.bind(funcGeneric);
//#endregion

//#region Const Tinker
const material = anoxia.constant.tinkerConstruct.material;
//#endregion

//#region Func Tinker
const funcTinker = anoxia.function.tinkerConstruct;
const getIngot = funcTinker.getIngot.bind(funcTinker);
const fromAmount = funcTinker.fromAmount.bind(funcTinker);
const getCoolingTick = funcTinker.getCoolingTick.bind(funcTinker);
const getMeltingTick = funcTinker.getMeltingTick.bind(funcTinker);
const addDualCastRecipe = funcTinker.addDualCastRecipe.bind(funcTinker);
//#endregion
