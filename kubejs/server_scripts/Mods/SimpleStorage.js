ServerEvents.recipes((event) => {
    event.remove({ output: "storagenetwork:master" });
    event.shaped("storagenetwork:master", ["ABA", "BCB", "ABA"], { A: "#forge:plates/tin", B: "storagenetwork:kabel", C: "advgenerators:controller" });
});
