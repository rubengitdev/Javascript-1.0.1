// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

// Goal:
// - remove duplicated sku
// - zone default = "general"
// - convert qty value into number

// Steps
// 1. Parse Shipment raw data
function parseShipment(rawData) {
  const result = [];
  const seenSku = new Set();

  for (let i = 0; i < rawData.length; i++) {
    const item = rawData[i];
    const parts = item.split("|");
    const sku = parts[0];
    const name = parts[1];
    const qty = parts[2];
    const expires = parts[3];
    let zone = parts[4];

    // default zone
    if (zone === undefined || zone === "") {
      zone = "general";
    }

    // duplicate check
    if (seenSku.has(sku)) {
      continue;
    } else {
      seenSku.add(sku);
    }

    result.push({
      sku: sku,
      name: name,
      qty: Number(qty),
      expires: expires,
      zone: zone,
    });
  }
  return result;
}

// 2. clone pantry
function clonePantry(pantry) {
  const copy = [];

  for (let i = 0; i < pantry.length; i++) {
    const item = pantry[i];

    const newItem = {
      sku: item.sku,
      name: item.name,
      qty: item.qty,
      expires: item.expires,
      zone: item.zone,
    };
    copy.push(newItem);
  }
  return copy;
}

// 3. planRestock
function planRestock(pantry, shipment) {
  const actions = [];
  const pantryMap = new Map();

  for (let i = 0; i < pantry.length; i++) {
    const item = pantry[i];
    pantryMap.set(item.sku, item);
  }

  for (let i = 0; i < shipment.length; i++) {
    const item = shipment[i];
    let type;

    if (item.qty <= 0) {
      type = "discard";
    } else {
      if (pantryMap.has(item.sku)) {
        type = "restock";
      } else {
        type = "donate";
      }
    }

    actions.push({
      type: type,
      item: item,
    });
  }
  return actions;
}

// 4. groupByZone
function groupByZone(actions) {
  const grouped = {};
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const zone = action.item.zone;

    if (grouped[zone] === undefined) {
      grouped[zone] = [];
    } else {
      //nothing to do here
    }
    grouped[zone].push(action);
  }
  return grouped;
}

// 5. processShipment (MAIN FLOW)
function processShipment(rawData, pantry) {
  const shipment = parseShipment(rawData);
  const pantryCopy = clonePantry(pantry);

  const actions = planRestock(pantryCopy, shipment);
  const grouped = groupByZone(actions);

  return grouped;
}

console.log(processShipment(rawData, pantry));
