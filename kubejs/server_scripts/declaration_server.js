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
const FromTag = FuncGeneric.FromTag.bind(FuncGeneric);
const GetItem = FuncGeneric.GetItem.bind(FuncGeneric);
const GetTag = FuncGeneric.GetTag.bind(FuncGeneric);
//#endregion

//#region Func EnderIO
const FuncEnderIO = Anoxia.Function.EnderIO;
const EnderIOSmelter = FuncEnderIO.EnderIOSmelter.bind(FuncEnderIO);
//#endregion

//#region Func Immersive
const FuncImmersive = Anoxia.Function.ImmersiveEngineering;
const ImmersiveAlloyKiln = FuncImmersive.ImmersiveAlloyKiln.bind(FuncImmersive);
const ImmersiveArcFurnace = FuncImmersive.ImmersiveArcFurnace.bind(FuncImmersive);
//#endregion

//#region Func Thermal
const FuncThermal = Anoxia.Function.ThermalSeries;
const ThermalAlloySmelter = FuncThermal.ThermalAlloySmelter.bind(FuncThermal);
const ThermalPress = FuncThermal.ThermalPress.bind(FuncThermal);
//#endregion

//#region Const Tinker
const Material = Anoxia.Constant.TinkerConstruct.Material;
//#endregion

//#region Func Tinker
const FuncTinker = Anoxia.Function.TinkerConstruct;
const GetIngot = FuncTinker.GetIngot.bind(FuncTinker);
const FromAmount = FuncTinker.FromAmount.bind(FuncTinker);
const GetCoolingTick = FuncTinker.GetCoolingTick.bind(FuncTinker);
const GetMeltingTick = FuncTinker.GetMeltingTick.bind(FuncTinker);
const AddDualCastRecipe = FuncTinker.AddDualCastRecipe.bind(FuncTinker);
//#endregion
