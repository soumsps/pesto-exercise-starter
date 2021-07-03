const sortByAnimalName = animals => {
  const animalGroup = animals;

  animalGroup.sort((animal1, animal2) => {
    const animal1Name = animal1.name.toLowerCase();
    const animal2Name = animal2.name.toLowerCase();
    if (animal1Name < animal2Name) {
      return -1;
    }
    if (animal1Name > animal2Name) {
      return 1;
    }
    return 0;
  });
  return animalGroup;
};

const sortAnimalGroupByNumberOfLegs = animalsGroupMap => {
  return new Map([...animalsGroupMap.entries()].sort());
};

const groupAnimalsByNumberOfLegs = (animals) => {
  const animalGroupsMap = new Map();
  // eslint-disable-next-line array-callback-return
  animals.map((animal) => {
    if (!animalGroupsMap.has(animal.numberOfLegs)) {
      animalGroupsMap.set(animal.numberOfLegs, []);
    }
    const animalGroup = animalGroupsMap.get(animal.numberOfLegs);
    animalGroupsMap.set(animal.numberOfLegs, animalGroup.concat(animal));
  });

  return animalGroupsMap;
};

const animalSort = animals => {
  const animalsGroupedByLegCount = groupAnimalsByNumberOfLegs(animals);

  const animalsGroupSortedByLegCount = sortAnimalGroupByNumberOfLegs(animalsGroupedByLegCount);

  const sortedAnimalArrayObject = [];

  for (const animalGroup of animalsGroupSortedByLegCount.values()) {
    sortedAnimalArrayObject.push(...sortByAnimalName(animalGroup));
  }

  return sortedAnimalArrayObject;
};

export { animalSort };
