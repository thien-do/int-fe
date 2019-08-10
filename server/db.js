const faker = require("faker");

// Create 10 groups
// https://blueprintjs.com/docs/#core/colors
const groups = [
  { "id": 0, "name": "Grocery", "color": "vermilion" },
  { "id": 1, "name": "Home", "color": "rose" },
  { "id": 2, "name": "Electronics", "color": "violet" },
  { "id": 3, "name": "Kids", "color": "indigo" },
  { "id": 4, "name": "Games", "color": "cobalt" },
  { "id": 5, "name": "Beauty", "color": "turquoise" },
  { "id": 6, "name": "Jewelery", "color": "forest" },
  { "id": 7, "name": "Industrial", "color": "lime" },
  { "id": 8, "name": "Tools", "color": "gold" },
  { "id": 9, "name": "Clothing", "color": "sepia" },
];

groups.forEach((group) => {
  group.description = faker.lorem.sentences();
});

// Create 1000 users
const users = Array
  // We are going to use only a subset of this
  .from({ length: 1000 }, () => faker.helpers.contextualCard())
  .map((user, index) => ({
    id: index,
    groupId: faker.random.number({ min: 0, max: groups.length - 1 }),
    name: user.name,
    email: user.email,
    avatar: user.avatar,
  }));

module.exports = () => ({ groups, users });
