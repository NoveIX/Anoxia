ServerEvents.recipes((event) => {
    //Wither Bone
    event.remove({ output: "bhc:wither_bone" });
    event.shaped("bhc:wither_bone", ["  A", " A ", "A  "], { A: "architects_palette:withered_bone" });

    //Heart Canister
    event.remove({ output: "bhc:canister" });
    event.shaped("bhc:canister", [" A ", "ABA", " A "], { A: "#forge:plates/iron", B: "minecraft:bone" });

    //Soul Crystal
    event.remove({ output: "bhc:soul_heart_crystal" });
    event.shaped("bhc:soul_heart_crystal", ["ABA", "CDE", "AFA"], { A: "minecraft:echo_shard", B: "bhc:red_heart", C: "bhc:yellow_heart", D: "cyclic:soulstone", E: "bhc:green_heart", F: "bhc:blue_heart" });

    //relic Apple
    event.remove({ output: "bhc:relic_apple" });
    event.shaped("bhc:relic_apple", ["DED", "EAE", "DED"], { D: "#forge:gems/diamond", E: "#forge:gems/emerald", A: "minecraft:apple" });

    //Red Heart Canister
    event.remove({ output: "bhc:red_heart_canister" });
    event.shaped("bhc:red_heart_canister", ["CB", "HA"], { C: "bhc:canister", H: "bhc:red_heart", B: "bhc:wither_bone", A: "minecraft:golden_apple" });

    //Yellow Heart Canister
    event.remove({ output: "bhc:yellow_heart_canister" });
    event.shaped("bhc:yellow_heart_canister", ["CB", "HA"], { C: "bhc:red_heart_canister", H: "bhc:yellow_heart", B: "minecraft:blaze_rod", A: "bhc:relic_apple" });

    //Green Heart Canister
    event.remove({ output: "bhc:green_heart_canister" });
    event.shaped("bhc:green_heart_canister", ["CB", "HA"], { C: "bhc:yellow_heart_canister", H: "bhc:green_heart", B: "minecraft:shulker_shell", A: "minecraft:enchanted_golden_apple" });

    //Blue Heart Canister
    event.remove({ output: "bhc:blue_heart_canister" });
    event.shaped("bhc:blue_heart_canister", ["CB", "HA"], { C: "bhc:green_heart_canister", H: "bhc:blue_heart", B: "minecraft:echo_shard", A: "minecraft:wither_rose" });
});
