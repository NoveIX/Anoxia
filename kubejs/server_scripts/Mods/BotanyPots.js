ServerEvents.recipes((event) => {
    //event.remove({ mod: "botanypots" });
    event.remove({ type: "botanypots:soil" });

    //// # =================================================================================================== #

    //#region Definition Soil
    //Propriety
    //Propriety All Seed
    const GrowthMod = 1;
    const TreeTicks = 2400;
    const AllNotMagicalSoil = ["grass", "dirt", "stone", "mushroom", "soul_sand", "Soil", "T0", "T1", "T2", "T3", "T4", "T5", "T6", "N", "I"];
    const T0GrowthTicks = 2400;
    const T0Soil = ["T0", "T1", "T2", "T3", "T4", "T5", "T6", "N", "I"];
    const T1GrowthTicks = 3300; //Original 3000 * 1.1
    const T1Soil = ["T1", "T2", "T3", "T4", "T5", "T6", "N", "I"];
    const T2GrowthTicks = 4320; //Original 3600 * 1.2
    const T2Soil = ["T2", "T3", "T4", "T5", "T6", "N", "I"];
    const T3GrowthTicks = 5460; //Original 4200 * 1.3
    const T3Soil = ["T3", "T4", "T5", "T6", "N", "I"];
    const T4GrowthTicks = 6720; //Original 4800 * 1.4
    const T4Soil = ["T4", "T5", "T6", "N", "I"];
    const T5GrowthTicks = 8100; //Original 5400 * 1.5
    const T5Soil = ["T5", "T6", "N", "I"];
    const T6GrowthTicks = 9600; //Original 6000 * 1.6
    const T6Soil = ["T6", "N", "I"];

    //Soil
    const GrassSoil = "minecraft:grass_block";
    const DirtSoil = "minecraft:dirt";
    const RichSoil = "farmersdelight:rich_soil";
    const UberousSoil = "twilightforest:uberous_soil";
    const InferiumFarmlandSoil = "mysticalagriculture:inferium_farmland";
    const PrudentiumFarmLandSoil = "mysticalagriculture:prudentium_farmland";
    const TertiumFarmlandSoil = "mysticalagriculture:tertium_farmland";
    const ImperiumFarmlandSoil = "mysticalagriculture:imperium_farmland";
    const SupremiumFarmlandSoil = "mysticalagriculture:supremium_farmland";
    const InsaniumFarmlandSoil = "mysticalagradditions:insanium_farmland";
    const ReNeutroniumSoil = "avaritia:neutron";
    const ReInfinitySoil = "avaritia:infinity";
    //#endregion

    //#region Definition Mystical
    //Tier 0
    //Seed
    const AirSeed = "mysticalagriculture:air_seeds";
    const EarthSeed = "mysticalagriculture:earth_seeds";
    const WaterSeed = "mysticalagriculture:water_seeds";
    const FireSeed = "mysticalagriculture:fire_seeds";
    //Essence
    const AirEssence = "mysticalagriculture:air_essence";
    const EarthEssence = "mysticalagriculture:earth_essence";
    const WaterEssence = "mysticalagriculture:water_essence";
    const FireEssence = "mysticalagriculture:fire_essence";
    //Crop
    const AirCrop = "mysticalagriculture:air_crop";
    const EarthCrop = "mysticalagriculture:earth_crop";
    const WaterCrop = "mysticalagriculture:water_crop";
    const FireCrop = "mysticalagriculture:fire_crop";

    //Tier 1
    //Seed
    const InferiumSeed = "mysticalagriculture:inferium_seeds";
    const StoneSeed = "mysticalagriculture:stone_seeds";
    const DirtSeed = "mysticalagriculture:dirt_seeds";
    const WoodSeed = "mysticalagriculture:wood_seeds";
    const IceSeed = "mysticalagriculture:ice_seeds";
    const DeepslateSeed = "mysticalagriculture:deepslate_seeds";
    //Essence
    const InferiumEssence = "mysticalagriculture:inferium_essence";
    const StoneEssence = "mysticalagriculture:stone_essence";
    const DirtEssence = "mysticalagriculture:dirt_essence";
    const WoodEssence = "mysticalagriculture:wood_essence";
    const IceEssence = "mysticalagriculture:ice_essence";
    const DeepslateEssence = "mysticalagriculture:deepslate_essence";
    //Crop
    const InferiumCrop = "mysticalagriculture:inferium_crop";
    const StoneCrop = "mysticalagriculture:stone_crop";
    const DirtCrop = "mysticalagriculture:dirt_crop";
    const WoodCrop = "mysticalagriculture:wood_crop";
    const IceCrop = "mysticalagriculture:ice_crop";
    const DeepslateCrop = "mysticalagriculture:deepslate_crop";

    //Tier 2
    //Seed
    const NatureSeed = "mysticalagriculture:nature_seeds";
    const DyeSeed = "mysticalagriculture:dye_seeds";
    const NetherSeed = "mysticalagriculture:nether_seeds";
    const CoalSeed = "mysticalagriculture:coal_seeds";
    const CoralSeed = "mysticalagriculture:coral_seeds";
    const HoneySeed = "mysticalagriculture:honey_seeds";
    const AmethystSeed = "mysticalagriculture:amethyst_seeds";
    const PigSeed = "mysticalagriculture:pig_seeds";
    const ChickenSeed = "mysticalagriculture:chicken_seeds";
    const CowSeed = "mysticalagriculture:cow_seeds";
    const SheepSeed = "mysticalagriculture:sheep_seeds";
    const SquidSeed = "mysticalagriculture:squid_seeds";
    const FishSeed = "mysticalagriculture:fish_seeds";
    const SlimeSeed = "mysticalagriculture:slime_seeds";
    const TurtleSeed = "mysticalagriculture:turtle_seeds";
    const RubberSeed = "mysticalagriculture:rubber_seeds";
    const SiliconSeed = "mysticalagriculture:silicon_seeds";
    const SulfurSeed = "mysticalagriculture:sulfur_seeds";
    const AluminumSeed = "mysticalagriculture:aluminum_seeds";
    const SaltpeterSeed = "mysticalagriculture:saltpeter_seeds";
    const ApatiteSeed = "mysticalagriculture:apatite_seeds";
    const GrainsSeed = "mysticalagriculture:grains_of_infinity_seeds";
    const MysticalFlowerSeed = "mysticalagriculture:mystical_flower_seeds";
    const MarbleSeed = "mysticalagriculture:marble_seeds";
    const LimestoneSeed = "mysticalagriculture:limestone_seeds";
    const BasaltSeed = "mysticalagriculture:basalt_seeds";
    //Essence
    const NatureEssence = "mysticalagriculture:nature_essence";
    const DyeEssence = "mysticalagriculture:dye_essence";
    const NetherEssence = "mysticalagriculture:nether_essence";
    const CoalEssence = "mysticalagriculture:coal_essence";
    const CoralEssence = "mysticalagriculture:coral_essence";
    const HoneyEssence = "mysticalagriculture:honey_essence";
    const AmethystEssence = "mysticalagriculture:amethyst_essence";
    const PigEssence = "mysticalagriculture:pig_essence";
    const ChickenEssence = "mysticalagriculture:chicken_essence";
    const CowEssence = "mysticalagriculture:cow_essence";
    const SheepEssence = "mysticalagriculture:sheep_essence";
    const SquidEssence = "mysticalagriculture:squid_essence";
    const FishEssence = "mysticalagriculture:fish_essence";
    const SlimeEssence = "mysticalagriculture:slime_essence";
    const TurtleEssence = "mysticalagriculture:turtle_essence";
    const RubberEssence = "mysticalagriculture:rubber_essence";
    const SiliconEssence = "mysticalagriculture:silicon_essence";
    const SulfurEssence = "mysticalagriculture:sulfur_essence";
    const AluminumEssence = "mysticalagriculture:aluminum_essence";
    const SaltpeterEssence = "mysticalagriculture:saltpeter_essence";
    const ApatiteEssence = "mysticalagriculture:apatite_essence";
    const GrainsEssence = "mysticalagriculture:grains_of_infinity_essence";
    const MysticalFlowerEssence = "mysticalagriculture:mystical_flower_essence";
    const MarbleEssence = "mysticalagriculture:marble_essence";
    const LimestoneEssence = "mysticalagriculture:limestone_essence";
    const BasaltEssence = "mysticalagriculture:basalt_essence";
    //Crop
    const NatureCrop = "mysticalagriculture:nature_crop";
    const DyeCrop = "mysticalagriculture:dye_crop";
    const NetherCrop = "mysticalagriculture:nether_crop";
    const CoalCrop = "mysticalagriculture:coal_crop";
    const CoralCrop = "mysticalagriculture:coral_crop";
    const HoneyCrop = "mysticalagriculture:honey_crop";
    const AmethystCrop = "mysticalagriculture:amethyst_crop";
    const PigCrop = "mysticalagriculture:pig_crop";
    const ChickenCrop = "mysticalagriculture:chicken_crop";
    const CowCrop = "mysticalagriculture:cow_crop";
    const SheepCrop = "mysticalagriculture:sheep_crop";
    const SquidCrop = "mysticalagriculture:squid_crop";
    const FishCrop = "mysticalagriculture:fish_crop";
    const SlimeCrop = "mysticalagriculture:slime_crop";
    const TurtleCrop = "mysticalagriculture:turtle_crop";
    const RubberCrop = "mysticalagriculture:rubber_crop";
    const SiliconCrop = "mysticalagriculture:silicon_crop";
    const SulfurCrop = "mysticalagriculture:sulfur_crop";
    const AluminumCrop = "mysticalagriculture:aluminum_crop";
    const SaltpeterCrop = "mysticalagriculture:saltpeter_crop";
    const ApatiteCrop = "mysticalagriculture:apatite_crop";
    const GrainsCrop = "mysticalagriculture:grains_of_infinity_crop";
    const MysticalFlowerCrop = "mysticalagriculture:mystical_flower_crop";
    const MarbleCrop = "mysticalagriculture:marble_crop";
    const LimestoneCrop = "mysticalagriculture:limestone_crop";
    const BasaltCrop = "mysticalagriculture:basalt_crop";

    //Tier 3
    //Seed
    const IronSeed = "mysticalagriculture:iron_seeds";
    const CopperSeed = "mysticalagriculture:copper_seeds";
    const NetherQuartzSeed = "mysticalagriculture:nether_quartz_seeds";
    const GlowstoneSeed = "mysticalagriculture:glowstone_seeds";
    const RedstoneSeed = "mysticalagriculture:redstone_seeds";
    const ObsidianSeed = "mysticalagriculture:obsidian_seeds";
    const PrismarineSeed = "mysticalagriculture:prismarine_seeds";
    const ZombieSeed = "mysticalagriculture:zombie_seeds";
    const SkeletonSeed = "mysticalagriculture:skeleton_seeds";
    const CreeperSeed = "mysticalagriculture:creeper_seeds";
    const SpiderSeed = "mysticalagriculture:spider_seeds";
    const RabbitSeed = "mysticalagriculture:rabbit_seeds";
    const TinSeed = "mysticalagriculture:tin_seeds";
    const BronzeSeed = "mysticalagriculture:bronze_seeds";
    const ZincSeed = "mysticalagriculture:zinc_seeds";
    const BrassSeed = "mysticalagriculture:brass_seeds";
    const SilverSeed = "mysticalagriculture:silver_seeds";
    const LeadSeed = "mysticalagriculture:lead_seeds";
    const GraphiteSeed = "mysticalagriculture:graphite_seeds";
    const BlizzSeed = "mysticalagriculture:blizz_seeds";
    const BlitzSeed = "mysticalagriculture:blitz_seeds";
    const BasalzSeed = "mysticalagriculture:basalz_seeds";
    const CopperAlloySeed = "mysticalagriculture:copper_alloy_seeds";
    const RedstoneAlloySeed = "mysticalagriculture:redstone_alloy_seeds";
    const ConductiveAlloySeed = "mysticalagriculture:conductive_alloy_seeds";
    const ManasteelSeed = "mysticalagriculture:manasteel_seeds";
    const SteeleafSeed = "mysticalagriculture:steeleaf_seeds";
    const IronWoodSeed = "mysticalagriculture:ironwood_seeds";
    const SkyStoneSeed = "mysticalagriculture:sky_stone_seeds";
    const CertusSeed = "mysticalagriculture:certus_quartz_seeds";
    //Essence
    const IronEssence = "mysticalagriculture:iron_essence";
    const CopperEssence = "mysticalagriculture:copper_essence";
    const NetherQuartzEssence = "mysticalagriculture:nether_quartz_essence";
    const GlowstoneEssence = "mysticalagriculture:glowstone_essence";
    const RedstoneEssence = "mysticalagriculture:redstone_essence";
    const ObsidianEssence = "mysticalagriculture:obsidian_essence";
    const PrismarineEssence = "mysticalagriculture:prismarine_essence";
    const ZombieEssence = "mysticalagriculture:zombie_essence";
    const SkeletonEssence = "mysticalagriculture:skeleton_essence";
    const CreeperEssence = "mysticalagriculture:creeper_essence";
    const SpiderEssence = "mysticalagriculture:spider_essence";
    const RabbitEssence = "mysticalagriculture:rabbit_essence";
    const TinEssence = "mysticalagriculture:tin_essence";
    const BronzeEssence = "mysticalagriculture:bronze_essence";
    const ZincEssence = "mysticalagriculture:zinc_essence";
    const BrassEssence = "mysticalagriculture:brass_essence";
    const SilverEssence = "mysticalagriculture:silver_essence";
    const LeadEssence = "mysticalagriculture:lead_essence";
    const GraphiteEssence = "mysticalagriculture:graphite_essence";
    const BlizzEssence = "mysticalagriculture:blizz_essence";
    const BlitzEssence = "mysticalagriculture:blitz_essence";
    const BasalzEssence = "mysticalagriculture:basalz_essence";
    const CopperAlloyEssence = "mysticalagriculture:copper_alloy_essence";
    const RedstoneAlloyEssence = "mysticalagriculture:redstone_alloy_essence";
    const ConductiveAlloyEssence = "mysticalagriculture:conductive_alloy_essence";
    const ManasteelEssence = "mysticalagriculture:manasteel_essence";
    const SteeleafEssence = "mysticalagriculture:steeleaf_essence";
    const IronWoodEssence = "mysticalagriculture:ironwood_essence";
    const SkyStoneEssence = "mysticalagriculture:sky_stone_essence";
    const CertusEssence = "mysticalagriculture:certus_quartz_essence";
    //Crop
    const IronCrop = "mysticalagriculture:iron_crop";
    const CopperCrop = "mysticalagriculture:copper_crop";
    const NetherQuartzCrop = "mysticalagriculture:nether_quartz_crop";
    const GlowstoneCrop = "mysticalagriculture:glowstone_crop";
    const RedstoneCrop = "mysticalagriculture:redstone_crop";
    const ObsidianCrop = "mysticalagriculture:obsidian_crop";
    const PrismarineCrop = "mysticalagriculture:prismarine_crop";
    const ZombieCrop = "mysticalagriculture:zombie_crop";
    const SkeletonCrop = "mysticalagriculture:skeleton_crop";
    const CreeperCrop = "mysticalagriculture:creeper_crop";
    const SpiderCrop = "mysticalagriculture:spider_crop";
    const RabbitCrop = "mysticalagriculture:rabbit_crop";
    const TinCrop = "mysticalagriculture:tin_crop";
    const BronzeCrop = "mysticalagriculture:bronze_crop";
    const ZincCrop = "mysticalagriculture:zinc_crop";
    const BrassCrop = "mysticalagriculture:brass_crop";
    const SilverCrop = "mysticalagriculture:silver_crop";
    const LeadCrop = "mysticalagriculture:lead_crop";
    const GraphiteCrop = "mysticalagriculture:graphite_crop";
    const BlizzCrop = "mysticalagriculture:blizz_crop";
    const BlitzCrop = "mysticalagriculture:blitz_crop";
    const BasalzCrop = "mysticalagriculture:basalz_crop";
    const CopperAlloyCrop = "mysticalagriculture:copper_alloy_crop";
    const RedstoneAlloyCrop = "mysticalagriculture:redstone_alloy_crop";
    const ConductiveAlloyCrop = "mysticalagriculture:conductive_alloy_crop";
    const ManasteelCrop = "mysticalagriculture:manasteel_crop";
    const SteeleafCrop = "mysticalagriculture:steeleaf_crop";
    const IronWoodCrop = "mysticalagriculture:ironwood_crop";
    const SkyStoneCrop = "mysticalagriculture:sky_stone_crop";
    const CertusCrop = "mysticalagriculture:certus_quartz_crop";

    //Tier 4
    //Seed
    const GoldSeed = "mysticalagriculture:gold_seeds";
    const LapisSeed = "mysticalagriculture:lapis_lazuli_seeds";
    const EndSeed = "mysticalagriculture:end_seeds";
    const ExperienceSeed = "mysticalagriculture:experience_seeds";
    const BlazeSeed = "mysticalagriculture:blaze_seeds";
    const GhastSeed = "mysticalagriculture:ghast_seeds";
    const EndermanSeed = "mysticalagriculture:enderman_seeds";
    const SteelSeed = "mysticalagriculture:steel_seeds";
    const NickelSeed = "mysticalagriculture:nickel_seeds";
    const ConstantanSeed = "mysticalagriculture:constantan_seeds";
    const ElectrumSeed = "mysticalagriculture:electrum_seeds";
    const InvarSeed = "mysticalagriculture:invar_seeds";
    const MithrilSeed = "mysticalagriculture:mithril_seeds";
    const TungstenSeed = "mysticalagriculture:tungsten_seeds";
    const TitaniumSeed = "mysticalagriculture:titanium_seeds";
    const UraniumSeed = "mysticalagriculture:uranium_seeds";
    const ChromeSeed = "mysticalagriculture:chrome_seeds";
    const RubySeed = "mysticalagriculture:ruby_seeds";
    const SapphireSeed = "mysticalagriculture:sapphire_seeds";
    const PeridotSeed = "mysticalagriculture:peridot_seeds";
    const SouliumSeed = "mysticalagriculture:soulium_seeds";
    const SignalumSeed = "mysticalagriculture:signalum_seeds";
    const LumiumSeed = "mysticalagriculture:lumium_seeds";
    const FluxSeed = "mysticalagriculture:flux_infused_ingot_seeds";
    const HopSeed = "mysticalagriculture:hop_graphite_seeds";
    const SoulariumSeed = "mysticalagriculture:soularium_seeds";
    const DarkSteelSeed = "mysticalagriculture:dark_steel_seeds";
    const PulsatingAlloySeed = "mysticalagriculture:pulsating_alloy_seeds";
    const EnergeticAlloySeed = "mysticalagriculture:energetic_alloy_seeds";
    const ElementiumSeed = "mysticalagriculture:elementium_seeds";
    const OsmiumSeed = "mysticalagriculture:osmium_seeds";
    const FlouriteSeed = "mysticalagriculture:fluorite_seeds";
    const RefinedGlowstoneSeed = "mysticalagriculture:refined_glowstone_seeds";
    const RefinedObsidianSeed = "mysticalagriculture:refined_obsidian_seeds";
    const KnightMetalSeed = "mysticalagriculture:knightmetal_seeds";
    const FierySeed = "mysticalagriculture:fiery_ingot_seeds";
    const CompressedIronSeed = "mysticalagriculture:compressed_iron_seeds";
    const FluixSeed = "mysticalagriculture:fluix_seeds";
    const EnergizedSeed = "mysticalagriculture:energized_steel_seeds";
    const BlazingSeed = "mysticalagriculture:blazing_crystal_seeds";
    //Essence
    const GoldEssence = "mysticalagriculture:gold_essence";
    const LapisEssence = "mysticalagriculture:lapis_lazuli_essence";
    const EndEssence = "mysticalagriculture:end_essence";
    const ExperienceEssence = "mysticalagriculture:experience_essence";
    const BlazeEssence = "mysticalagriculture:blaze_essence";
    const GhastEssence = "mysticalagriculture:ghast_essence";
    const EndermanEssence = "mysticalagriculture:enderman_essence";
    const SteelEssence = "mysticalagriculture:steel_essence";
    const NickelEssence = "mysticalagriculture:nickel_essence";
    const ConstantanEssence = "mysticalagriculture:constantan_essence";
    const ElectrumEssence = "mysticalagriculture:electrum_essence";
    const InvarEssence = "mysticalagriculture:invar_essence";
    const MithrilEssence = "mysticalagriculture:mithril_essence";
    const TungstenEssence = "mysticalagriculture:tungsten_essence";
    const TitaniumEssence = "mysticalagriculture:titanium_essence";
    const UraniumEssence = "mysticalagriculture:uranium_essence";
    const ChromeEssence = "mysticalagriculture:chrome_essence";
    const RubyEssence = "mysticalagriculture:ruby_essence";
    const SapphireEssence = "mysticalagriculture:sapphire_essence";
    const PeridotEssence = "mysticalagriculture:peridot_essence";
    const SouliumEssence = "mysticalagriculture:soulium_essence";
    const SignalumEssence = "mysticalagriculture:signalum_essence";
    const LumiumEssence = "mysticalagriculture:lumium_essence";
    const FluxEssence = "mysticalagriculture:flux_infused_ingot_essence";
    const HopEssence = "mysticalagriculture:hop_graphite_essence";
    const SoulariumEssence = "mysticalagriculture:soularium_essence";
    const DarkSteelEssence = "mysticalagriculture:dark_steel_essence";
    const PulsatingAlloyEssence = "mysticalagriculture:pulsating_alloy_essence";
    const EnergeticAlloyEssence = "mysticalagriculture:energetic_alloy_essence";
    const ElementiumEssence = "mysticalagriculture:elementium_essence";
    const OsmiumEssence = "mysticalagriculture:osmium_essence";
    const FlouriteEssence = "mysticalagriculture:fluorite_essence";
    const RefinedGlowstoneEssence = "mysticalagriculture:refined_glowstone_essence";
    const RefinedObsidianEssence = "mysticalagriculture:refined_obsidian_essence";
    const KnightMetalEssence = "mysticalagriculture:knightmetal_essence";
    const FieryEssence = "mysticalagriculture:fiery_ingot_essence";
    const CompressedIronEssence = "mysticalagriculture:compressed_iron_essence";
    const FluixEssence = "mysticalagriculture:fluix_essence";
    const EnergizedEssence = "mysticalagriculture:energized_steel_essence";
    const BlazingEssence = "mysticalagriculture:blazing_crystal_essence";
    //Crop
    const GoldCrop = "mysticalagriculture:gold_crop";
    const LapisCrop = "mysticalagriculture:lapis_lazuli_crop";
    const EndCrop = "mysticalagriculture:end_crop";
    const ExperienceCrop = "mysticalagriculture:experience_crop";
    const BlazeCrop = "mysticalagriculture:blaze_crop";
    const GhastCrop = "mysticalagriculture:ghast_crop";
    const EndermanCrop = "mysticalagriculture:enderman_crop";
    const SteelCrop = "mysticalagriculture:steel_crop";
    const NickelCrop = "mysticalagriculture:nickel_crop";
    const ConstantanCrop = "mysticalagriculture:constantan_crop";
    const ElectrumCrop = "mysticalagriculture:electrum_crop";
    const InvarCrop = "mysticalagriculture:invar_crop";
    const MithrilCrop = "mysticalagriculture:mithril_crop";
    const TungstenCrop = "mysticalagriculture:tungsten_crop";
    const TitaniumCrop = "mysticalagriculture:titanium_crop";
    const UraniumCrop = "mysticalagriculture:uranium_crop";
    const ChromeCrop = "mysticalagriculture:chrome_crop";
    const RubyCrop = "mysticalagriculture:ruby_crop";
    const SapphireCrop = "mysticalagriculture:sapphire_crop";
    const PeridotCrop = "mysticalagriculture:peridot_crop";
    const SouliumCrop = "mysticalagriculture:soulium_crop";
    const SignalumCrop = "mysticalagriculture:signalum_crop";
    const LumiumCrop = "mysticalagriculture:lumium_crop";
    const FluxCrop = "mysticalagriculture:flux_infused_ingot_crop";
    const HopCrop = "mysticalagriculture:hop_graphite_crop";
    const SoulariumCrop = "mysticalagriculture:soularium_crop";
    const DarkSteelCrop = "mysticalagriculture:dark_steel_crop";
    const PulsatingAlloyCrop = "mysticalagriculture:pulsating_alloy_crop";
    const EnergeticAlloyCrop = "mysticalagriculture:energetic_alloy_crop";
    const ElementiumCrop = "mysticalagriculture:elementium_crop";
    const OsmiumCrop = "mysticalagriculture:osmium_crop";
    const FlouriteCrop = "mysticalagriculture:fluorite_crop";
    const RefinedGlowstoneCrop = "mysticalagriculture:refined_glowstone_crop";
    const RefinedObsidianCrop = "mysticalagriculture:refined_obsidian_crop";
    const KnightMetalCrop = "mysticalagriculture:knightmetal_crop";
    const FieryCrop = "mysticalagriculture:fiery_ingot_crop";
    const CompressedIronCrop = "mysticalagriculture:compressed_iron_crop";
    const FluixCrop = "mysticalagriculture:fluix_crop";
    const EnergizedCrop = "mysticalagriculture:energized_steel_crop";
    const BlazingCrop = "mysticalagriculture:blazing_crystal_crop";

    //Tier 5
    //Seed
    const DiamondSeed = "mysticalagriculture:diamond_seeds";
    const EmeraldSeed = "mysticalagriculture:emerald_seeds";
    const NetheriteSeed = "mysticalagriculture:netherite_seeds";
    const WitherSeed = "mysticalagriculture:wither_skeleton_seeds";
    const PlatinumSeed = "mysticalagriculture:platinum_seeds";
    const IridiumSeed = "mysticalagriculture:iridium_seeds";
    const EnderiumSeed = "mysticalagriculture:enderium_seeds";
    const FluxInfusedSeed = "mysticalagriculture:flux_infused_gem_seeds";
    const VibrantAlloySeed = "mysticalagriculture:vibrant_alloy_seeds";
    const EndSteelSeed = "mysticalagriculture:end_steel_seeds";
    const TerrasteelSeed = "mysticalagriculture:terrasteel_seeds";
    const YelloriumSeed = "mysticalagriculture:yellorium_seeds";
    const CynaiteSeed = "mysticalagriculture:cyanite_seeds";
    const NioticSeed = "mysticalagriculture:niotic_crystal_seeds";
    const SpiritedSeed = "mysticalagriculture:spirited_crystal_seeds";
    const UraniniteSeed = "mysticalagriculture:uraninite_seeds";
    //Essence
    const DiamondEssence = "mysticalagriculture:diamond_essence";
    const EmeraldEssence = "mysticalagriculture:emerald_essence";
    const NetheriteEssence = "mysticalagriculture:netherite_essence";
    const WitherEssence = "mysticalagriculture:wither_skeleton_essence";
    const PlatinumEssence = "mysticalagriculture:platinum_essence";
    const IridiumEssence = "mysticalagriculture:iridium_essence";
    const EnderiumEssence = "mysticalagriculture:enderium_essence";
    const FluxInfusedEssence = "mysticalagriculture:flux_infused_gem_essence";
    const VibrantAlloyEssence = "mysticalagriculture:vibrant_alloy_essence";
    const EndSteelEssence = "mysticalagriculture:end_steel_essence";
    const TerrasteelEssence = "mysticalagriculture:terrasteel_essence";
    const YelloriumEssence = "mysticalagriculture:yellorium_essence";
    const CynaiteEssence = "mysticalagriculture:cyanite_essence";
    const NioticEssence = "mysticalagriculture:niotic_crystal_essence";
    const SpiritedEssence = "mysticalagriculture:spirited_crystal_essence";
    const UraniniteEssence = "mysticalagriculture:uraninite_essence";
    //Crop
    const DiamondCrop = "mysticalagriculture:diamond_crop";
    const EmeraldCrop = "mysticalagriculture:emerald_crop";
    const NetheriteCrop = "mysticalagriculture:netherite_crop";
    const WitherCrop = "mysticalagriculture:wither_skeleton_crop";
    const PlatinumCrop = "mysticalagriculture:platinum_crop";
    const IridiumCrop = "mysticalagriculture:iridium_crop";
    const EnderiumCrop = "mysticalagriculture:enderium_crop";
    const FluxInfusedCrop = "mysticalagriculture:flux_infused_gem_crop";
    const VibrantAlloyCrop = "mysticalagriculture:vibrant_alloy_crop";
    const EndSteelCrop = "mysticalagriculture:end_steel_crop";
    const TerrasteelCrop = "mysticalagriculture:terrasteel_crop";
    const YelloriumCrop = "mysticalagriculture:yellorium_crop";
    const CynaiteCrop = "mysticalagriculture:cyanite_crop";
    const NioticCrop = "mysticalagriculture:niotic_crystal_crop";
    const SpiritedCrop = "mysticalagriculture:spirited_crystal_crop";
    const UraniniteCrop = "mysticalagriculture:uraninite_crop";

    //Tier 6
    //Seed
    const NetherStarSeed = "mysticalagriculture:nether_star_seeds";
    const DragonEggSeed = "mysticalagriculture:dragon_egg_seeds";
    const GaiaSpiritSeed = "mysticalagriculture:gaia_spirit_seeds";
    const NeutroniumSeed = "mysticalagriculture:neutronium_seeds";
    const NitroSeed = "mysticalagriculture:nitro_crystal_seeds";
    //Essence
    const NetherStarEssence = "mysticalagriculture:nether_star_essence";
    const DragonEggEssence = "mysticalagriculture:dragon_egg_essence";
    const GaiaSpiritEssence = "mysticalagriculture:gaia_spirit_essence";
    const NeutroniumEssence = "mysticalagriculture:neutronium_essence";
    const NitroEssence = "mysticalagriculture:nitro_crystal_essence";
    //Crop
    const NetherStarCrop = "mysticalagriculture:nether_star_crop";
    const DragonEggCrop = "mysticalagriculture:dragon_egg_crop";
    const GaiaSpiritCrop = "mysticalagriculture:gaia_spirit_crop";
    const NeutroniumCrop = "mysticalagriculture:neutronium_crop";
    const NitroCrop = "mysticalagriculture:nitro_crystal_crop";

    //Extra
    const FertilizedEssence = "mysticalagriculture:fertilized_essence";
    //#endregion

    //#region Definition Tree
    ////Sapling
    //Vanilla
    const OakSpg = "minecraft:oak_sapling";
    const SpruceSpg = "minecraft:spruce_sapling";
    const BirchSpg = "minecraft:birch_sapling";
    const JungleSpg = "minecraft:jungle_sapling";
    const AcaciaSpg = "minecraft:acacia_sapling";
    const DarkOakSpg = "minecraft:dark_oak_sapling";
    const MangroveSpg = "minecraft:mangrove_propagule";
    const CherrySpg = "minecraft:cherry_sapling";
    //Architects Palette
    const TwistedSpg = "architects_palette:twisted_sapling";
    //Ars
    const YellowArsSpg = "ars_elemental:yellow_archwood_sapling";
    const BlueArsSpg = "ars_nouveau:blue_archwood_sapling";
    const RedArsSpg = "ars_nouveau:red_archwood_sapling";
    const PurpleArsSpg = "ars_nouveau:purple_archwood_sapling";
    const GreenArsSpg = "ars_nouveau:green_archwood_sapling";
    //Quark
    const AncientSpg = "quark:ancient_sapling";
    const BlueBlossomSpg = "quark:blue_blossom_sapling";
    const LavenderBlossomSpg = "quark:lavender_blossom_sapling";
    const OrangeBlossomSpg = "quark:orange_blossom_sapling";
    const YellowBlossomSpg = "quark:yellow_blossom_sapling";
    const RedBlossomSpg = "quark:red_blossom_sapling";
    //Twilight
    const OakTwilightSpg = "twilightforest:twilight_oak_sapling";
    const CanopySpg = "twilightforest:canopy_sapling";
    const MangroveTwilightSpg = "twilightforest:mangrove_sapling";
    const DarkwoodSpg = "twilightforest:darkwood_sapling";
    const TimeSpg = "twilightforest:time_sapling";
    const TransformationSpg = "twilightforest:transformation_sapling";
    const MiningSpg = "twilightforest:mining_sapling";
    const SortingSpg = "twilightforest:sorting_sapling";
    const RainbowOakSpg = "twilightforest:rainbow_oak_sapling";
    const HollowOakSpg = "twilightforest:hollow_oak_sapling";
    //Thermal
    const RubberwoodSpg = "thermal:rubberwood_sapling";

    ////Log
    //Vanilla
    const OakLog = "minecraft:oak_log";
    const SpruceLog = "minecraft:spruce_log";
    const BirchLog = "minecraft:birch_log";
    const JungleLog = "minecraft:jungle_log";
    const AcaciaLog = "minecraft:acacia_log";
    const DarkOakLog = "minecraft:dark_oak_log";
    const MangroveLog = "minecraft:mangrove_log";
    const CherryLog = "minecraft:cherry_log";
    //Architects Palette
    const TwistedLog = "architects_palette:twisted_log";
    //Ars
    const YellowArsLog = "ars_elemental:yellow_archwood_log";
    const BlueArsLog = "ars_nouveau:blue_archwood_log";
    const RedArsLog = "ars_nouveau:red_archwood_log";
    const PurpleArsLog = "ars_nouveau:purple_archwood_log";
    const GreenArsLog = "ars_nouveau:green_archwood_log";
    //Quark
    const AncientLog = "quark:ancient_log";
    const BlossomLog = "quark:blossom_log";
    //Twilight
    const OakTwilightLog = "twilightforest:twilight_oak_log";
    const CanopyLog = "twilightforest:canopy_log";
    const MangroveTwilightLog = "twilightforest:mangrove_log";
    const DarkwoodLog = "twilightforest:dark_log";
    const TimeLog = "twilightforest:time_log";
    const TransformationLog = "twilightforest:transformation_log";
    const MiningLog = "twilightforest:mining_log";
    const SortingLog = "twilightforest:sorting_log";
    //Thermal
    const RubberwoodLog = "thermal:rubberwood_log";

    ////Leaves
    //Vanilla
    const OakLvs = "minecraft:oak_leaves";
    const SpruceLvs = "minecraft:spruce_leaves";
    const BirchLvs = "minecraft:birch_leaves";
    const JungleLvs = "minecraft:jungle_leaves";
    const AcaciaLvs = "minecraft:acacia_leaves";
    const DarkOakLvs = "minecraft:dark_oak_leaves";
    const MangroveLvs = "minecraft:mangrove_leaves";
    const CherryLvs = "minecraft:cherry_leaves";
    //Architects Palette
    const TwistedLvs = "architects_palette:twisted_leaves";
    //Ars
    const YellowArsLvs = "ars_elemental:yellow_archwood_leaves";
    const BlueArsLvs = "ars_nouveau:blue_archwood_leaves";
    const RedArsLvs = "ars_nouveau:red_archwood_leaves";
    const PurpleArsLvs = "ars_nouveau:purple_archwood_leaves";
    const GreenArsLvs = "ars_nouveau:green_archwood_leaves";
    //Quark
    const AncientLvs = "quark:ancient_leaves";
    const BlueBlossomLvs = "quark:blue_blossom_leaves";
    const LavenderBlossomLvs = "quark:lavender_blossom_leaves";
    const OrangeBlossomLvs = "quark:orange_blossom_leaves";
    const YellowBlossomLvs = "quark:yellow_blossom_leaves";
    const RedBlossomLvs = "quark:red_blossom_leaves";
    //Twilight
    const OakTwilightLvs = "twilightforest:twilight_oak_leaves";
    const CanopyLvs = "twilightforest:canopy_leaves";
    const MangroveTwilightLvs = "twilightforest:mangrove_leaves";
    const DarkwoodLvs = "twilightforest:dark_leaves";
    const TimeLvs = "twilightforest:time_leaves";
    const TransformationLvs = "twilightforest:transformation_leaves";
    const MiningLvs = "twilightforest:mining_leaves";
    const SortingLvs = "twilightforest:sorting_leaves";
    const rainbowOakLvs = "twilightforest:rainbow_oak_leaves";
    //Thermal
    const RubberwoodLvs = "thermal:rubberwood_leaves";

    ////Extra
    const Twig = "twigs:twig";
    const Apple = "minecraft:apple";
    const CocoaBeans = "minecraft:cocoa_beans";
    const ElderBerry = "rootsclassic:elderberry";
    const NightShade = "rootsclassic:nightshade";
    const BlackCurrant = "rootsclassic:blackcurrant";
    const RedCurrant = "rootsclassic:redcurrant";
    const WhiteCurrant = "rootsclassic:whitecurrant";
    const GreenTeaLeaf = "delightful:green_tea_leaf";
    const MangroveRoot = "minecraft:mangrove_roots";
    const TwilightLiveroot = "twilightforest:liveroot";
    const MangroveTwilightRoot = "twilightforest:mangrove_root";
    const TimeLogCore = "twilightforest:time_log_core";
    const TransformationLogCore = "twilightforest:transformation_log_core";
    const MiningLogCore = "twilightforest:mining_log_core";
    const SortingLogCore = "twilightforest:sorting_log_core";
    const TinyRubber = "industrialforegoing:tinydryrubber";

    //Fertilizer
    const BoneMeal = "minecraft:bone_meal";
    const MysticalFertilizer = "mysticalagriculture:mystical_fertilizer";
    //#endregion

    //========================================================================================================================================

    //#region Recipes Soil
    //Soil Type
    const SoilPattern = [
        { type: GrassSoil, category: ["grass", "dirt", "stone", "mushroom", "soul_sand", "Soil"], multiplier: 0.8 },
        { type: DirtSoil, category: ["grass", "dirt", "stone", "mushroom", "soul_sand", "Soil"], multiplier: 0.8 },
        { type: RichSoil, category: ["grass", "dirt", "stone", "mushroom", "soul_sand", "Soil"], multiplier: 0.9 },
        { type: UberousSoil, category: ["grass", "dirt", "stone", "mushroom", "soul_sand", "T0"], multiplier: 1 },
        { type: InferiumFarmlandSoil, category: ["grass", "dirt", "stone", "mushroom", "soul_sand", "T1"], multiplier: 1.1 },
        { type: PrudentiumFarmLandSoil, category: ["grass", "dirt", "stone", "mushroom", "soul_sand", "T2"], multiplier: 1.2 },
        { type: TertiumFarmlandSoil, category: ["grass", "dirt", "stone", "mushroom", "soul_sand", "T3"], multiplier: 1.3 },
        { type: ImperiumFarmlandSoil, category: ["grass", "dirt", "stone", "mushroom", "soul_sand", "T4"], multiplier: 1.4 },
        { type: SupremiumFarmlandSoil, category: ["grass", "dirt", "stone", "mushroom", "soul_sand", "T5"], multiplier: 1.5 },
        { type: InsaniumFarmlandSoil, category: ["grass", "dirt", "stone", "mushroom", "soul_sand", "T6"], multiplier: 1.6 },
        { type: ReNeutroniumSoil, category: ["grass", "dirt", "stone", "mushroom", "soul_sand", "N"], multiplier: 2 },
        { type: ReInfinitySoil, category: ["grass", "dirt", "stone", "mushroom", "soul_sand", "I"], multiplier: 3 },
    ];
    SoilPattern.forEach((soil) => {
        event.recipes.botanypots.soil(soil.type, { block: soil.type }, soil.category, -1, soil.multiplier);
    });
    //#endregion

    //#region Recipes Mystical
    //Seed
    const MysticalPattern = [
        // Tier 0
        { seed: AirSeed, essence: AirEssence, crop: AirCrop, tier: T0Soil, growth: T0GrowthTicks },
        { seed: EarthSeed, essence: EarthEssence, crop: EarthCrop, tier: T0Soil, growth: T0GrowthTicks },
        { seed: WaterSeed, essence: WaterEssence, crop: WaterCrop, tier: T0Soil, growth: T0GrowthTicks },
        { seed: FireSeed, essence: FireEssence, crop: FireCrop, tier: T0Soil, growth: T0GrowthTicks },

        // Tier 1
        { seed: InferiumSeed, essence: InferiumEssence, crop: InferiumCrop, tier: T1Soil, growth: T1GrowthTicks },
        { seed: StoneSeed, essence: StoneEssence, crop: StoneCrop, tier: T1Soil, growth: T1GrowthTicks },
        { seed: DirtSeed, essence: DirtEssence, crop: DirtCrop, tier: T1Soil, growth: T1GrowthTicks },
        { seed: WoodSeed, essence: WoodEssence, crop: WoodCrop, tier: T1Soil, growth: T1GrowthTicks },
        { seed: IceSeed, essence: IceEssence, crop: IceCrop, tier: T1Soil, growth: T1GrowthTicks },
        { seed: DeepslateSeed, essence: DeepslateEssence, crop: DeepslateCrop, tier: T1Soil, growth: T1GrowthTicks },

        // Tier 2
        { seed: NatureSeed, essence: NatureEssence, crop: NatureCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: DyeSeed, essence: DyeEssence, crop: DyeCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: NetherSeed, essence: NetherEssence, crop: NetherCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: CoalSeed, essence: CoalEssence, crop: CoalCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: CoralSeed, essence: CoralEssence, crop: CoralCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: HoneySeed, essence: HoneyEssence, crop: HoneyCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: AmethystSeed, essence: AmethystEssence, crop: AmethystCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: PigSeed, essence: PigEssence, crop: PigCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: ChickenSeed, essence: ChickenEssence, crop: ChickenCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: CowSeed, essence: CowEssence, crop: CowCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: SheepSeed, essence: SheepEssence, crop: SheepCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: SquidSeed, essence: SquidEssence, crop: SquidCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: FishSeed, essence: FishEssence, crop: FishCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: SlimeSeed, essence: SlimeEssence, crop: SlimeCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: TurtleSeed, essence: TurtleEssence, crop: TurtleCrop, tier: T2Soil, growth: T2GrowthTicks },
        //{ seed: RubberSeed, essence: RubberEssence, crop: RubberCrop, tier: T2Soil, growth: T2GrowthTicks },
        //{ seed: SiliconSeed, essence: SiliconEssence, crop: SiliconCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: SulfurSeed, essence: SulfurEssence, crop: SulfurCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: AluminumSeed, essence: AluminumEssence, crop: AluminumCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: SaltpeterSeed, essence: SaltpeterEssence, crop: SaltpeterCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: ApatiteSeed, essence: ApatiteEssence, crop: ApatiteCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: GrainsSeed, essence: GrainsEssence, crop: GrainsCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: MysticalFlowerSeed, essence: MysticalFlowerEssence, crop: MysticalFlowerCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: MarbleSeed, essence: MarbleEssence, crop: MarbleCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: LimestoneSeed, essence: LimestoneEssence, crop: LimestoneCrop, tier: T2Soil, growth: T2GrowthTicks },
        { seed: BasaltSeed, essence: BasaltEssence, crop: BasaltCrop, tier: T2Soil, growth: T2GrowthTicks },

        // Tier 3
        { seed: IronSeed, essence: IronEssence, crop: IronCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: CopperSeed, essence: CopperEssence, crop: CopperCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: NetherQuartzSeed, essence: NetherQuartzEssence, crop: NetherQuartzCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: GlowstoneSeed, essence: GlowstoneEssence, crop: GlowstoneCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: RedstoneSeed, essence: RedstoneEssence, crop: RedstoneCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: ObsidianSeed, essence: ObsidianEssence, crop: ObsidianCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: PrismarineSeed, essence: PrismarineEssence, crop: PrismarineCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: ZombieSeed, essence: ZombieEssence, crop: ZombieCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: SkeletonSeed, essence: SkeletonEssence, crop: SkeletonCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: CreeperSeed, essence: CreeperEssence, crop: CreeperCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: SpiderSeed, essence: SpiderEssence, crop: SpiderCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: RabbitSeed, essence: RabbitEssence, crop: RabbitCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: TinSeed, essence: TinEssence, crop: TinCrop, tier: T3Soil, growth: T3GrowthTicks },
        //{ seed: BronzeSeed, essence: BronzeEssence, crop: BronzeCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: ZincSeed, essence: ZincEssence, crop: ZincCrop, tier: T3Soil, growth: T3GrowthTicks },
        //{ seed: BrassSeed, essence: BrassEssence, crop: BrassCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: SilverSeed, essence: SilverEssence, crop: SilverCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: LeadSeed, essence: LeadEssence, crop: LeadCrop, tier: T3Soil, growth: T3GrowthTicks },
        //{ seed: GraphiteSeed, essence: GraphiteEssence, crop: GraphiteCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: BlizzSeed, essence: BlizzEssence, crop: BlizzCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: BlitzSeed, essence: BlitzEssence, crop: BlitzCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: BasalzSeed, essence: BasalzEssence, crop: BasalzCrop, tier: T3Soil, growth: T3GrowthTicks },
        //{ seed: CopperAlloySeed, essence: CopperAlloyEssence, crop: CopperAlloyCrop, tier: T3Soil, growth: T3GrowthTicks },
        //{ seed: RedstoneAlloySeed, essence: RedstoneAlloyEssence, crop: RedstoneAlloyCrop, tier: T3Soil, growth: T3GrowthTicks },
        //{ seed: ConductiveAlloySeed, essence: ConductiveAlloyEssence, crop: ConductiveAlloyCrop, tier: T3Soil, growth: T3GrowthTicks },
        //{ seed: ManasteelSeed, essence: ManasteelEssence, crop: ManasteelCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: SteeleafSeed, essence: SteeleafEssence, crop: SteeleafCrop, tier: T3Soil, growth: T3GrowthTicks },
        //{ seed: IronWoodSeed, essence: IronWoodEssence, crop: IronWoodCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: SkyStoneSeed, essence: SkyStoneEssence, crop: SkyStoneCrop, tier: T3Soil, growth: T3GrowthTicks },
        { seed: CertusSeed, essence: CertusEssence, crop: CertusCrop, tier: T3Soil, growth: T3GrowthTicks },

        // Tier 4
        { seed: GoldSeed, essence: GoldEssence, crop: GoldCrop, tier: T4Soil, growth: T4GrowthTicks },
        { seed: LapisSeed, essence: LapisEssence, crop: LapisCrop, tier: T4Soil, growth: T4GrowthTicks },
        { seed: EndSeed, essence: EndEssence, crop: EndCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: ExperienceSeed, essence: ExperienceEssence, crop: ExperienceCrop, tier: T4Soil, growth: T4GrowthTicks },
        { seed: BlazeSeed, essence: BlazeEssence, crop: BlazeCrop, tier: T4Soil, growth: T4GrowthTicks },
        { seed: GhastSeed, essence: GhastEssence, crop: GhastCrop, tier: T4Soil, growth: T4GrowthTicks },
        { seed: EndermanSeed, essence: EndermanEssence, crop: EndermanCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: SteelSeed, essence: SteelEssence, crop: SteelCrop, tier: T4Soil, growth: T4GrowthTicks },
        { seed: NickelSeed, essence: NickelEssence, crop: NickelCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: ConstantanSeed, essence: ConstantanEssence, crop: ConstantanCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: ElectrumSeed, essence: ElectrumEssence, crop: ElectrumCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: InvarSeed, essence: InvarEssence, crop: InvarCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: MithrilSeed, essence: MithrilEssence, crop: MithrilCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: TungstenSeed, essence: TungstenEssence, crop: TungstenCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: TitaniumSeed, essence: TitaniumEssence, crop: TitaniumCrop, tier: T4Soil, growth: T4GrowthTicks },
        { seed: UraniumSeed, essence: UraniumEssence, crop: UraniumCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: ChromeSeed, essence: ChromeEssence, crop: ChromeCrop, tier: T4Soil, growth: T4GrowthTicks },
        { seed: RubySeed, essence: RubyEssence, crop: RubyCrop, tier: T4Soil, growth: T4GrowthTicks },
        { seed: SapphireSeed, essence: SapphireEssence, crop: SapphireCrop, tier: T4Soil, growth: T4GrowthTicks },
        { seed: PeridotSeed, essence: PeridotEssence, crop: PeridotCrop, tier: T4Soil, growth: T4GrowthTicks },
        { seed: SouliumSeed, essence: SouliumEssence, crop: SouliumCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: SignalumSeed, essence: SignalumEssence, crop: SignalumCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: LumiumSeed, essence: LumiumEssence, crop: LumiumCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: FluxSeed, essence: FluxEssence, crop: FluxCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: HopSeed, essence: HopEssence, crop: HopCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: SoulariumSeed, essence: SoulariumEssence, crop: SoulariumCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: DarkSteelSeed, essence: DarkSteelEssence, crop: DarkSteelCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: PulsatingAlloySeed, essence: PulsatingAlloyEssence, crop: PulsatingAlloyCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: EnergeticAlloySeed, essence: EnergeticAlloyEssence, crop: EnergeticAlloyCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: ElementiumSeed, essence: ElementiumEssence, crop: ElementiumCrop, tier: T4Soil, growth: T4GrowthTicks },
        { seed: OsmiumSeed, essence: OsmiumEssence, crop: OsmiumCrop, tier: T4Soil, growth: T4GrowthTicks },
        { seed: FlouriteSeed, essence: FlouriteEssence, crop: FlouriteCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: RefinedGlowstoneSeed, essence: RefinedGlowstoneEssence, crop: RefinedGlowstoneCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: RefinedObsidianSeed, essence: RefinedObsidianEssence, crop: RefinedObsidianCrop, tier: T4Soil, growth: T4GrowthTicks },
        { seed: KnightMetalSeed, essence: KnightMetalEssence, crop: KnightMetalCrop, tier: T4Soil, growth: T4GrowthTicks },
        { seed: FierySeed, essence: FieryEssence, crop: FieryCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: CompressedIronSeed, essence: CompressedIronEssence, crop: CompressedIronCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: FluixSeed, essence: FluixEssence, crop: FluixCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: EnergizedSeed, essence: EnergizedEssence, crop: EnergizedCrop, tier: T4Soil, growth: T4GrowthTicks },
        //{ seed: BlazinugSeed, essence: BlazingEssence, crop: BlazingCrop, tier: T4Soil, growth: T4GrowthTicks },

        // Tier 5
        { seed: DiamondSeed, essence: DiamondEssence, crop: DiamondCrop, tier: T5Soil, growth: T5GrowthTicks },
        { seed: EmeraldSeed, essence: EmeraldEssence, crop: EmeraldCrop, tier: T5Soil, growth: T5GrowthTicks },
        { seed: NetheriteSeed, essence: NetheriteEssence, crop: NetheriteCrop, tier: T5Soil, growth: T5GrowthTicks },
        { seed: WitherSeed, essence: WitherEssence, crop: WitherCrop, tier: T5Soil, growth: T5GrowthTicks },
        //{ seed: PlatinumSeed, essence: PlatinumEssence, crop: PlatinumCrop, tier: T5Soil, growth: T5GrowthTicks },
        //{ seed: IridiumSeed, essence: IridiumEssence, crop: IridiumCrop, tier: T5Soil, growth: T5GrowthTicks },
        //{ seed: EnderiumSeed, essence: EnderiumEssence, crop: EnderiumCrop, tier: T5Soil, growth: T5GrowthTicks },
        //{ seed: FluxInfusedSeed, essence: FluxInfusedEssence, crop: FluxInfusedCrop, tier: T5Soil, growth: T5GrowthTicks },
        //{ seed: VibrantAlloySeed, essence: VibrantAlloyEssence, crop: VibrantAlloyCrop, tier: T5Soil, growth: T5GrowthTicks },
        //{ seed: EndSteelSeed, essence: EndSteelEssence, crop: EndSteelCrop, tier: T5Soil, growth: T5GrowthTicks },
        //{ seed: TerrasteelSeed, essence: TerrasteelEssence, crop: TerrasteelCrop, tier: T5Soil, growth: T5GrowthTicks },
        //{ seed: YelloriumSeed, essence: YelloriumEssence, crop: YelloriumCrop, tier: T5Soil, growth: T5GrowthTicks },
        //{ seed: CynaiteSeed, essence: CynaiteEssence, crop: CynaiteCrop, tier: T5Soil, growth: T5GrowthTicks },
        //{ seed: NioticSeed, essence: NioticEssence, crop: NioticCrop, tier: T5Soil, growth: T5GrowthTicks },
        //{ seed: SpiritedSeed, essence: SpiritedEssence, crop: SpiritedCrop, tier: T5Soil, growth: T5GrowthTicks },
        //{ seed: UraniniteSeed, essence: UraniniteEssence, crop: UraniniteCrop, tier: T5Soil, growth: T5GrowthTicks },

        // Tier 6
        { seed: NetherStarSeed, essence: NetherStarEssence, crop: NetherStarCrop, tier: T6Soil, growth: T6GrowthTicks },
        { seed: DragonEggSeed, essence: DragonEggEssence, crop: DragonEggCrop, tier: T6Soil, growth: T6GrowthTicks },
        { seed: GaiaSpiritSeed, essence: GaiaSpiritEssence, crop: GaiaSpiritCrop, tier: T6Soil, growth: T6GrowthTicks },
        //{ seed: NeutroniumSeed, essence: NeutroniumEssence, crop: NeutroniumCrop, tier: T6Soil, growth: T6GrowthTicks },
        //{ seed: NitroSeed, essence: NitroEssence, crop: NitroCrop, tier: T6Soil, growth: T6GrowthTicks },
    ];
    function MysticalRecipe({ seed, essence, crop, tier, growth }) {
        event.remove({ input: seed, type: "botanypots:crop" });
        const drops = [Item.of(essence).withChance(1).withRolls(1), Item.of(seed).withChance(0.01).withRolls(1), Item.of(FertilizedEssence).withChance(0.1).withRolls(1)];
        event.recipes.botanypots.crop(seed, tier, { block: crop }, drops, growth, GrowthMod);
    }
    MysticalPattern.forEach(MysticalRecipe);
    //#endregion

    //#region Recipes Tree
    //Twilight Extra
    const Twilight = [OakTwilightSpg, CanopySpg, MangroveTwilightSpg, DarkwoodSpg, TimeSpg, TransformationSpg, MiningSpg, SortingSpg, RainbowOakSpg];

    const TreesPattern = [
        //Vanilla
        { sapling: OakSpg, log: OakLog, leaves: OakLvs, extra: Item.of(Apple).withChance(0.05).withRolls(1, 2) },
        { sapling: SpruceSpg, log: SpruceLog, leaves: SpruceLvs },
        { sapling: BirchSpg, log: BirchLog, leaves: BirchLvs },
        { sapling: JungleSpg, log: JungleLog, leaves: JungleLvs, extra: Item.of(CocoaBeans).withChance(0.05).withRolls(1) },
        { sapling: AcaciaSpg, log: AcaciaLog, leaves: AcaciaLvs },
        { sapling: DarkOakSpg, log: DarkOakLog, leaves: DarkOakLvs, extra: Item.of(Apple).withChance(0.05).withRolls(1, 2) },
        { sapling: MangroveSpg, log: MangroveLog, leaves: MangroveLvs, extra: Item.of(MangroveRoot).withChance(0.1).withRolls(1, 2) },
        { sapling: CherrySpg, log: CherryLog, leaves: CherryLvs },
        //Architects Palette
        { sapling: TwistedSpg, log: TwistedLog, leaves: TwistedLvs },
        //Ars
        { sapling: YellowArsSpg, log: YellowArsLog, leaves: YellowArsLvs },
        { sapling: BlueArsSpg, log: BlueArsLog, leaves: BlueArsLvs },
        { sapling: RedArsSpg, log: RedArsLog, leaves: RedArsLvs },
        { sapling: PurpleArsSpg, log: PurpleArsLog, leaves: PurpleArsLvs },
        { sapling: GreenArsSpg, log: GreenArsLog, leaves: GreenArsLvs },
        //Quark
        { sapling: AncientSpg, log: AncientLog, leaves: AncientLvs },
        { sapling: BlueBlossomSpg, log: BlossomLog, leaves: BlueBlossomLvs },
        { sapling: LavenderBlossomSpg, log: BlossomLog, leaves: LavenderBlossomLvs },
        { sapling: OrangeBlossomSpg, log: BlossomLog, leaves: OrangeBlossomLvs },
        { sapling: YellowBlossomSpg, log: BlossomLog, leaves: YellowBlossomLvs },
        { sapling: RedBlossomSpg, log: BlossomLog, leaves: RedBlossomLvs },
        //Twilight
        { sapling: OakTwilightSpg, log: OakTwilightLog, leaves: OakTwilightLvs },
        { sapling: CanopySpg, log: CanopyLog, leaves: CanopyLvs },
        { sapling: MangroveTwilightSpg, log: MangroveTwilightLog, leaves: MangroveTwilightLvs, extra: Item.of(MangroveTwilightRoot).withChance(0.2).withRolls(1, 2) },
        { sapling: DarkwoodSpg, log: DarkwoodLog, leaves: DarkwoodLvs },
        { sapling: TimeSpg, log: TimeLog, leaves: TimeLvs },
        { sapling: TransformationSpg, log: TransformationLog, leaves: TransformationLvs },
        { sapling: MiningSpg, log: MiningLog, leaves: MiningLvs },
        { sapling: SortingSpg, log: SortingLog, leaves: SortingLvs },
        { sapling: RainbowOakSpg, log: OakTwilightLog, leaves: rainbowOakLvs },
        //{ sapling: HollowOakSpg },
        //Thermal
        { sapling: RubberwoodSpg, log: RubberwoodLog, leaves: RubberwoodLvs },
    ];

    function TreeRecipes({ sapling, log, leaves, extra }) {
        const drops = [Item.of(log).withChance(1).withRolls(2, 4), Item.of(sapling).withChance(0.15).withRolls(1, 2), Item.of(leaves).withChance(0.3).withRolls(1, 2)];

        // Core
        if (sapling === TimeSpg) {
            drops.push(Item.of(TimeLogCore).withChance(0.01).withRolls(1));
        }
        if (sapling === TransformationSpg) {
            drops.push(Item.of(TransformationLogCore).withChance(0.01).withRolls(1));
        }
        if (sapling === MiningSpg) {
            drops.push(Item.of(MiningLogCore).withChance(0.01).withRolls(1));
        }
        if (sapling === SortingSpg) {
            drops.push(Item.of(SortingLogCore).withChance(0.01).withRolls(1));
        }

        // Twigs
        const dropsTwigs = Item.of(Twig).withChance(0.1).withRolls(1, 2);
        drops.push(dropsTwigs); // Aggiungi Twigs ai drops

        // LivingRoot
        if (Twilight.includes(sapling)) {
            drops.push(Item.of(TwilightLiveroot).withChance(0.05).withRolls(1, 2));
        }

        // Extra
        if (extra) {
            drops.push(extra);
        }

        // Rubber
        if (sapling === RubberwoodSpg) {
            drops.push(Item.of(TinyRubber).withChance(0.05).withRolls(1, 2));
        }

        // Roots
        const Roots = [
            Item.of(ElderBerry).withChance(0.05).withRolls(1, 2),
            Item.of(NightShade).withChance(0.05).withRolls(1, 2),
            Item.of(BlackCurrant).withChance(0.05).withRolls(1, 2),
            Item.of(RedCurrant).withChance(0.05).withRolls(1, 2),
            Item.of(WhiteCurrant).withChance(0.05).withRolls(1, 2),
            Item.of(GreenTeaLeaf).withChance(0.05).withRolls(1, 2),
        ];
        for (const i of Roots) {
            drops.push(i);
        }

        // Create recipes
        event.remove({ input: sapling, type: "botanypots:crop" });
        event.recipes.botanypots.crop(sapling, AllNotMagicalSoil, { block: sapling }, drops, TreeTicks, GrowthMod);
    }
    TreesPattern.forEach(TreeRecipes);
    //#endregion

    //#region Recipes - Fertilizer
    event.recipes.botanypots.fertilizer(BoneMeal, 200, 300);
    event.recipes.botanypots.fertilizer(MysticalFertilizer, 15000, 15000);
    //#endregion
});
