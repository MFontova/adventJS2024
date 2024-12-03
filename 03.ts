type Inventory = Array<
  { name: string, quantity: number, category: string }
>

type OrganizedInventory = {
  [category: string]: {
    [itemName: string]: number;
  };
};

function organizeInventory(inventory: Inventory): object {

  let organized: OrganizedInventory = {}

  inventory.forEach(item => {
    organized[item.category] ??= {}
    organized[item.category][item.name] ??= 0
    organized[item.category][item.name] += item.quantity
  })

  return organized
}

const inventary = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

organizeInventory(inventary)