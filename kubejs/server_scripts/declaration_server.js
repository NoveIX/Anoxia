//priority:1000

//#region Game Const
const Anoxia = global.Anoxia;
const GameItem = Anoxia.Game.Item;
const GameFluid = Anoxia.Game.Fluid;
const GameRecipe = Anoxia.Game.Recipe;
//#endregion

//#region Func Generic
const FuncGeneric = Anoxia.Function.Generic;
const ToTag = FuncGeneric.ToTag.bind(FuncGeneric);
//#endregion

//#region Const Tinker
const Material = Anoxia.Constant.Tinker.Material;
//#endregion

//#region Func Tinker
const FuncTinker = Anoxia.Function.Tinker;
const GetIngot = FuncTinker.GetIngot.bind(FuncTinker);
const FromAmount = FuncTinker.FromAmount.bind(FuncTinker);
const GetCoolingTick = FuncTinker.GetCoolingTick.bind(FuncTinker);
const GetMeltingTick = FuncTinker.GetMeltingTick.bind(FuncTinker);
const AddDualCastRecipe = FuncTinker.AddDualCastRecipe.bind(FuncTinker);
//#endregion
