
    // Security, Encryption, and Authorization: SEA.js
    // MANDATORY READING: https://gun.eco/explainers/data/security.html
    // IT IS IMPLEMENTED IN A POLYFILL/SHIM APPROACH.
    // THIS IS AN EARLY ALPHA!

    if(typeof self !== "undefined"){ module.window = self } // should be safe for at least browser/worker/nodejs, need to check other envs like RN etc.
    if(typeof window !== "undefined"){ module.window = window }

    var tmp = module.window || module, u;
    var SEA = tmp.SEA || {};

    if(SEA.window = module.window){ SEA.window.SEA = SEA }

    try{ if(u+'' !== typeof MODULE){ MODULE.exports = SEA } }catch(e){}
    module.exports = SEA;
  