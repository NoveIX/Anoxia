//priority:1000

//Game item fluid and recipe
const anoxia = global.anoxia;
const gameItem = anoxia.game.item;
const gameFluid = anoxia.game.fluid;
const gameRecipe = anoxia.game.recipe;

//Define tinker const
const material = anoxia.constant.tinkerConstruct.material;

//Define generic func
const funcGeneric = anoxia.function.generic;
const toTag = funcGeneric.toTag.bind(funcGeneric);
const itemOf = funcGeneric.itemOf.bind(funcGeneric);
const fluidOf = funcGeneric.fluidOf.bind(funcGeneric);

//Define immersive func
const funcImmersive = anoxia.function.immersiveEngineering;
const itemOfImmersive = funcImmersive.itemOfImmersive.bind(funcImmersive);

//Define tinker func
const funcTinker = anoxia.function.tinkerConstruct;
const getIngot = funcTinker.getIngot.bind(funcTinker);
const fromAmount = funcTinker.fromAmount.bind(funcTinker);
const getCoolingTick = funcTinker.getCoolingTick.bind(funcTinker);
const getMeltingTick = funcTinker.getMeltingTick.bind(funcTinker);
const addDualCastRecipe = funcTinker.addDualCastRecipe.bind(funcTinker);
