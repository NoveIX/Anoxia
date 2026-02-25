//priority:960

//#region Generic
Anoxia.Function.Generic = {
  // Return tag helper
  ToTag(value) {
    return `#${value}`;
  },

  // Return tag helper
  FromTag(value) {
    return value.startsWith('#') ? value.slice(1) : value;
  },

  ItemOf(item, count) {
    // Calculate the logic before creating the object
    const isTag = item.startsWith('#');

    // Prepare the base object according to the type
    // If it is a tag, use { tag: ... }, otherwise { item: ... }
    const baseData = isTag ? { tag: this.FromTag(item) } : { item: item };

    // (Optional) Add count if it is defined and not equal to 1
    if (count && count > 0) baseData.count = count;

    // Return the builder object
    return {
      _json: baseData,

      chance(chance) {
        // 'this' refers to the returned object, so _json is accessible.
        this._json.chance = chance;
        return this;
      },

      nbt(nbt) {
        this._json.nbt = nbt;
        return this;
      },
    };
  },

  FluidOf(fluid, amount) {
    // Calculate the logic before creating the object
    const isTag = fluid.startsWith('#');

    // Prepare the base object according to the type
    // If it is a tag, use { tag: ... }, otherwise { item: ... }
    const baseData = isTag ? { fluidTag: this.fromTag(fluid) } : { fluid: fluid };

    // (Optional) Add count if it is defined and not equal to 1
    if (amount && amount > 0) baseData.amount = amount;

    return {
      _json: baseData,

      nbt(nbt) {
        this._json.nbt = nbt;
        return this;
      },
    };
  },

  //# =================================================================================================== #

  //TODO Delete

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
//#endregion

//# =================================================================================================== #

//#region Create
Anoxia.Function.Create = {
  Compacting(event) {
    return {
      _json: {
        type: 'create:compacting',
        ingredients: [],
        results: [],
      },

      // Add recipe input
      input(value, count, customTag) {
        const entry = this._resolveItem(value, count, customTag);
        this._json.ingredients.push(entry);
        return this;
      },

      inputFluid(value, amount, customTag) {
        const entry = this._resolveFluid(value, amount, customTag);
        this._json.ingredients.push(entry);
        return this;
      },

      // Add recipe output
      output(value, count, customTag) {
        const entry = this._resolveItem(value, count, customTag);
        this._json.results.push(entry);
        return this;
      },

      // Resolve value
      _resolveItem(value, count, customTag) {
        return getItemOrTag(value, count, customTag);
      },

      // Resolve value
      _resolveFluid(value, amount, customTag) {
        return getFluidOrTag(value, amount, customTag);
      },

      // Register the recipe
      build() {
        event.custom(this._json);
        return this;
      },
    };
  },
};
//#endregion

//# =================================================================================================== #

//#region EnderIO
Anoxia.Function.EnderIO = {
  EnderIOSmelter(event) {
    return {
      _json: {
        type: 'enderio:alloy_smelting',
        inputs: [],
        result: {},
        experience: 0,
        energy: 0,
        is_smelting: false,
      },

      // Add recipe input
      input(value, count, customTag) {
        const entry = this._resolveInput(value, count, customTag);
        this._json.inputs.push(entry);
        return this;
      },

      // Add recipe output
      output(value, count, customTag) {
        this._json.result = this._resolveOutput(value, count, customTag);
        return this;
      },

      // Add recipe Experience
      experience(value) {
        this._json.experience = value;
        return this;
      },

      // Add recipe energy
      energy(value) {
        this._json.energy = value;
        return this;
      },

      // Enable furnace mode
      isSmelting() {
        this._json.is_smelting = true;
        return this;
      },

      // Resolve input value
      _resolveInput(value, count, customTag) {
        return { count: count, ingredient: getItemOrTag(value, customTag) };
      },

      // Resolve output value
      _resolveOutput(value, count, customTag) {
        return getItemOrTag(value, count, customTag);
      },

      // Register the recipe
      build() {
        event.custom(this._json);
        return this;
      },
    };
  },
};
//#endregion

//# =================================================================================================== #

//#region Immersive Engineering
Anoxia.Function.ImmersiveEngineering = {
  // Resolve immersive engineering value
  resolveImmersive(value, count, customTag) {
    return { base_ingredient: getItemOrTag(value, customTag), count: count };
  },

  ImmersiveAlloyKiln(event) {
    return {
      _json: {
        type: 'immersiveengineering:alloy',
        input0: {},
        input1: {},
        result: {},
        time: 200,
      },

      // Add recipe input 0
      input0(value, count, customTag) {
        this._json.input0 = this._resolve(value, count, customTag);
        return this;
      },

      // Add recipe input 1
      input1(value, count, customTag) {
        this._json.input1 = this._resolve(value, count, customTag);
        return this;
      },

      // Add recipe output
      output(value, count, customTag) {
        this._json.result = this._resolve(value, count, customTag);
        return this;
      },

      //Add recipe time
      time(value) {
        this._json.time = value;
        return this;
      },

      // Resolve value
      _resolve(value, count, customTag) {
        return { base_ingredient: getItemOrTag(value, customTag), count: count };
      },

      // Register the recipe
      build() {
        event.custom(this._json);
        return this;
      },
    };
  },

  //# =================================================================================================== #

  ImmersiveArcFurnace(event) {
    return {
      _json: {
        type: 'immersiveengineering:arc_furnace',
        input: {},
        additives: [],
        results: [],
        energy: 0,
        time: 100,
      },

      // Add recipe input
      input(value, count, customTag) {
        this._json.input = this._resolve(value, count, customTag);
        return this;
      },

      // Add recipe input 1
      additives(value, count, customTag) {
        const entry = this._resolve(value, count, customTag);
        this._json.additives.push(entry);
        return this;
      },

      // Add recipe output
      output(value, count, customTag) {
        const entry = this._resolve(value, count, customTag);
        this._json.results.push(entry);
        return this;
      },

      // Add recipe energy
      energy(value) {
        this._json.energy = value;
        return this;
      },

      //Add recipe time
      time(value) {
        this._json.time = value;
        return this;
      },

      // Resolve value
      _resolve(value, count, customTag) {
        return { base_ingredient: getItemOrTag(value, customTag), count: count };
      },

      // Register the recipe
      build() {
        event.custom(this._json);
        return this;
      },
    };
  },

  //# =================================================================================================== #

  ImmersiveMetalPress(event) {
    return {
      _json: {
        type: 'immersiveengineering:metal_press',
        input: { base_ingredient: { tag: recipe.put }, count: 4 },
        result: { item: recipe.get },
        mold: 'immersiveengineering:mold_gear',
        energy: recipe.rsflux,
      },

      // Add recipe input
      input(value, count, customTag) {
        this._json.input = this._resolve(value, count, customTag);
        return this;
      },

      // Add recipe output
      output(value, count, customTag) {
        this._json.result = this._resolve(value, count, customTag);
        return this;
      },

      // Add recipe energy
      mold(value) {
        this._json.mold = value;
        return this;
      },

      // Add recipe energy
      energy(value) {
        this._json.energy = value;
        return this;
      },

      // Resolve value
      _resolveOutput(value, count, customTag) {
        return getItemOrTag(value, count, customTag);
      },

      // Resolve value
      _resolveInput(value, count, customTag) {
        return { base_ingredient: getItemOrTag(value, customTag), count: count };
      },

      // Register the recipe
      build() {
        event.custom(this._json);
        return this;
      },
    };
  },
};
//#endregion

//# =================================================================================================== #

//#region Thermal Series
Anoxia.Function.ThermalSeries = {
  Smelter(event) {
    return {
      _json: {
        type: 'thermal:smelter',
        ingredients: [],
        result: [],
        energy: 0,
      },

      // Add recipe input
      input(value, count) {
        const entry = Item.of(value, count);
        this._json.ingredients.push(entry);
        return this;
      },

      // Add recipe output
      output(value, count) {
        const entry = Item.of(value, count);
        this._json.result.push(entry);
        return this;
      },

      // Add recipe energy
      energy(value) {
        this._json.energy = value;
        return this;
      },

      // Register the recipe
      build() {
        event.custom(this._json);
        return this;
      },
    };
  },
};
anoxia.function.ThermalSeries = {
  ThermalAlloySmelter(event) {
    return {
      _json: {
        type: 'thermal:smelter',
        ingredients: [],
        result: [],
        energy: 0,
      },

      // Add recipe input
      input(value, count, customTag) {
        const entry = this._resolve(value, count, customTag);
        this._json.ingredients.push(entry);
        return this;
      },

      // Add recipe output
      output(value, count, customTag) {
        const entry = this._resolve(value, count, customTag);
        this._json.result.push(entry);
        return this;
      },

      // Add recipe energy
      energy(value) {
        this._json.energy = value;
        return this;
      },

      // Resolve value
      _resolve(value, count, customTag) {
        return getItemOrTag(value, count, customTag);
      },

      // Register the recipe
      build() {
        event.custom(this._json);
        return this;
      },
    };
  },

  //# =================================================================================================== #

  ThermalPress(event) {
    return {
      _json: {
        type: 'thermal:press',
        ingredients: [],
        result: [],
        energy: 0,
      },

      // Add recipe input
      input(value, count, customTag) {
        const entry = this._resolve(value, count, customTag);
        this._json.ingredients.push(entry);
        return this;
      },

      pressDie(value, count, customTag) {
        const entry = this._resolve(value, count, customTag);
        this._json.ingredients.push(entry);
        return this;
      },

      // Add recipe output
      output(value, count, customTag) {
        const entry = this._resolve(value, count, customTag);
        this._json.result.push(entry);
        return this;
      },

      // Add recipe energy
      energy(value) {
        this._json.energy = value;
        return this;
      },

      // Resolve value
      _resolve(value, count, customTag) {
        return getItemOrTag(value, count, customTag);
      },

      // Register the recipe
      build() {
        event.custom(this._json);
        return this;
      },
    };
  },
};
//#endregion

//# =================================================================================================== #

//Constant
const SmeltingFactor = Anoxia.Constant.TinkerConstruct.SmeltingFactor;

const Furnace = SmeltingFactor.Furnace;
const Dimension = SmeltingFactor.Dimension;
const Environment = SmeltingFactor.Environment;

const AmountType = Anoxia.Constant.TinkerConstruct.AmountType;

//# =================================================================================================== #

Anoxia.Function.TinkerConstruct = {
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

  AddDualCastRecipe(castType, json, event) {
    const castMaterial = [
      { type: 'multi_use', consumed: false },
      { type: 'single_use', consumed: true },
    ];

    castMaterial.forEach((variant) => {
      // Check cast type
      json.cast = { tag: `tconstruct:casts/${variant.type}/${castType}` };
      if (variant.consumed) json.cast_consumed = true;

      // Ad recipe
      event.custom(json);
    });
  },
};
