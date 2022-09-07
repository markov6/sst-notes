export function calculateCost(storage) {
  const rage = storage <= 10 ? 4 : storage <= 100 ? 2 : 1;
  return rage * storage * 100;
}

