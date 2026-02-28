//priority:960

//Constant
const smeltingFactor = anoxia.constant.tinkerConstruct.smeltingFactor;

const furnace = smeltingFactor.furnace;
const dimension = smeltingFactor.dimension;
const environment = smeltingFactor.environment;

const amountType = anoxia.constant.tinkerConstruct.amountType;

//# ====================================================================================== #

//#region Generic
anoxia.function.generic = {
  toTag(str) {
    return `#${str}`;
  },

  // Return tag helper
  fromTag(value) {
    return value.startsWith('#') ? value.slice(1) : value;
  },

  itemOf(item, count, forceTag) {
    // Reassign parameters accordingly: treat 'count' as forceTag and unset count.
    if (typeof count !== 'boolean') {
      forceTag = count;
      count = undefined;
    }

    // Calculate the logic before creating the object
    const isTag = forceTag || value.startsWith('forge:') || (value.includes('/') && !value.startsWith('minecraft:'));

    // Prepare the base object according to the type
    // If it is a tag, use { tag: ... }, otherwise { item: ... }
    const baseData = isTag ? { tag: this.fromTag(item) } : { item: item };

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

  fluidOf(fluid, amount, forceTag) {
    // Reassign parameters accordingly: treat 'amount' as forceTag and unset amount.
    if (typeof amount !== 'boolean') {
      forceTag = amount;
      amount = undefined;
    }

    // Calculate the logic before creating the object
    const isTag = forceTag || value.startsWith('forge:') || (value.includes('/') && !value.startsWith('minecraft:'));

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
};
//#endregion

//#region Create
anoxia.function.create = {
  /*   compacting(event) {
    return {
      _json: {
        type: 'create:compacting',
        ingredients: [],
        results: [],
      },

      // Add recipe input
      input(value, count, forceTag) {
        const entry = itemOf(value, count, forceTag);
        this._json.ingredients.push(entry);
        return this;
      },

      // Add recipe input fluid
      inputFluid(value, amount, forceTag) {
        const entry = fluidOf(value, amount, forceTag);
        this._json.ingredients.push(entry);
        return this;
      },

      // Add recipe output
      output(value, amount, forceTag) {
        const entry = itemOf(value, amount, forceTag);
        this._json.results.push(entry);
        return this;
      },

      // Add recipe output fluid
      outputFluid(value, amount, forceTag) {
        const entry = fluidOf(value, amount, forceTag);
        this._json.results.push(entry);
        return this;
      },

      // Register the recipe
      build() {
        event.custom(this._json);
        return this;
      },
    };
  }, */
};
//#endregion

//# ====================================================================================== #

//#region Immersive
anoxia.function.immersiveEngineering = {
  itemOfImmersive(value, count, forceTag) {
    return { base_ingredient: itemOf(value, forceTag), count: count };
  },

  alloyKiln(event) {
    return {
      _json: {
        type: 'immersiveengineering:alloy',
        input0: {},
        input1: {},
        result: {},
        time: 200,
      },

      // Add recipe input 0
      input0(value, count, forceTag) {
        this._json.input0 = this.itemOfImmersive(value, count, forceTag);
        return this;
      },

      // Add recipe input 1
      input1(value, count, forceTag) {
        this._json.input1 = this.itemOfImmersive(value, count, forceTag);
        return this;
      },

      // Add recipe output
      output(value, count, forceTag) {
        this._json.result = this.itemOfImmersive(value, count, forceTag);
        return this;
      },

      //Add recipe time
      time(value) {
        this._json.time = value;
        return this;
      },

      // Register the recipe
      build() {
        event.custom(this._json);
        return this;
      },
    };
  },

  arcFurnace(event) {
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
      input(value, count) {
        this._json.input = this.itemOfImmersive(value, count);
        return this;
      },

      // Add recipe input 1
      additives(value, count) {
        const entry = this.itemOfImmersive(value, count);
        this._json.additives.push(entry);
        return this;
      },

      // Add recipe output
      output(value, count) {
        const entry = this.itemOfImmersive(value, count);
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

      // Register the recipe
      build() {
        event.custom(this._json);
        return this;
      },
    };
  },
};
//#endregion

//# ====================================================================================== #

//#region EnderIO
anoxia.function.enderIO = {
  itemOfEnderIO(value, count, forceTag) {
    return { count: count, ingredient: itemOf(value, forceTag) };
  },

  alloySmelter(event) {
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
      input(value, count, forceTag) {
        const entry = itemOfEnderIO(value, count, forceTag);
        this._json.inputs.push(entry);
        return this;
      },

      // Add recipe output
      output(value, count) {
        this._json.result = itemOf(value, count, forceTag);
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

      // Register the recipe
      build() {
        event.custom(this._json);
        return this;
      },
    };
  },

  /*   sagMilling(event) {
    return {
      _json: {
        type: 'enderio:sag_milling',
        input: {},
        outputs: [],
        energy: 0,
        bonus: 'none',
      },

      // Add recipe input
      input(value) {
        this._json.input = itemOf(value);
        return this;
      },

      // Add recipe output
      output(value, chance, optional, count) {
        // Reassign parameters accordingly: treat 'optional' as forceTag and unset count.
        if (typeof optional !== 'boolean') {
          count = optional;
          optional = undefined;
        }

        // Build l'entry
        const entry = { item: itemOf(value, count) };

        // Optional only if it is true (I avoid writing optional: false)
        if (optional === true) entry.optional = true;

        // Chance only if defined and not null.
        if (chance !== undefined && chance !== null) entry.chance = chance;

        this._json.outputs.push(entry);
        return this;
      },

      // Add recipe energy
      energy(value) {
        this._json.energy = value;
        return this;
      },

      bonus(value) {
        this._json.bonus = value;
        return this;
      },

      // Register the recipe
      build() {
        event.custom(this._json);
        return this;
      },
    };
  }, */
};
//#endregion

//# ====================================================================================== #

//#region Thermal Series
anoxia.function.thermalSeries = {
  //Induction Smelter
  smelter(event) {
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

  // Multiservo Press
  press(event) {
    return {
      _json: {
        type: 'thermal:press',
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

      pressDie(value, count) {
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
//#endregion

//# ====================================================================================== #

//#region Tinker
anoxia.function.tinkerConstruct = {
  fromAmount(qty) {
    return qty / 90;
  },

  getIngot(amount, type) {
    return amount * (amountType[type] / amountType.ingot);
  },

  getCoolingTick(material, ingot) {
    const base = ((material.meltPoint - dimension.moon) / environment.value) * ingot;
    return Math.ceil(base / 20) * 20; // rounded to the nearest multiple of 20
  },

  getMeltingTick(material, ingot) {
    const base = ((material.meltPoint - dimension.moon) / (environment.value * furnace.heat)) * ingot;
    return Math.ceil(base / 20) * 20; // rounded to the nearest multiple of 20
  },

  addDualCastRecipe(castType, json, event) {
    const castmaterial = [
      { type: 'multi_use', consumed: false },
      { type: 'single_use', consumed: true },
    ];

    castmaterial.forEach((variant) => {
      // Check cast type
      json.cast = { tag: `tconstruct:casts/${variant.type}/${castType}` };
      if (variant.consumed) json.cast_consumed = true;

      // Ad recipe
      event.custom(json);
    });
  },
};
//#endregion
