/**
 * A tiny util library to pluck and group data at one loop (used to remove boilerplate codes)
 * Copyright(c) 2021 Baskar Selvan R
 * MIT Licensed
*/
'use strict';
/**
 * To pluck and group data at one loop (used to remove boilerplate codes)
 * @param {Array} arrayOfObjects 
 * @param {Array} pluckKeys 
 * @param {Array} groupByKeys 
 * @returns {Object} pluckedGroupedData
 */
exports.pluckAndGroup = (arrayOfObjects = {}, pluckKeys = [], groupByKeys = [], groupByMultiKeys = []) => {
    const pluckedData = {};
    const groupedByData = {};
    const gropedByMultiKeyData = {};
    const pluckedGroupedData = { pluckedData, groupedByData, gropedByMultiKeyData };
    const groupByMultiKey = groupByMultiKeys.join("_");
    for (let i = arrayOfObjects.length - 1; i >= 0; i--) {
        if (groupByMultiKey.length) {
            let splKey = "";
            groupByMultiKeys.forEach(key => { splKey += arrayOfObjects[i][key] + "_"; });
            const splkeyFinal = splKey.slice(0, -1);
            if (!gropedByMultiKeyData[groupByMultiKey + "multiGrp"])
                gropedByMultiKeyData[groupByMultiKey + "multiGrp"] = {};
            gropedByMultiKeyData[groupByMultiKey + "multiGrp"][splkeyFinal] = arrayOfObjects[i];
        }

        for (let grp = groupByKeys.length - 1; grp >= 0; grp--) {
            if (!groupedByData[groupByKeys[grp] + "grp"])
                groupedByData[groupByKeys[grp] + "grp"] = {};
            groupedByData[groupByKeys[grp] + "grp"][arrayOfObjects[i][groupByKeys[grp]]] = arrayOfObjects[i];
        }

        for (let pluck = pluckKeys.length - 1; pluck >= 0; pluck--) {
            if (!pluckedData[pluckKeys[pluck] + "s"])
                pluckedData[pluckKeys[pluck] + "s"] = {};
            pluckedData[pluckKeys[pluck] + "s"][arrayOfObjects[i][pluckKeys[pluck]]] = true;
        }

    }

    for (const plucked in pluckedData) {
        pluckedData[plucked] = Object.keys(pluckedData[plucked]);
    }

    return pluckedGroupedData;
}
