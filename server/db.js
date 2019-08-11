const faker = require("faker");

const groupsCount = 100;
const usersCount = 10000;

// https://blueprintjs.com/docs/#core/colors
const groupColors = [
  "vermilion", "rose", "violet", "indigo", "cobalt",
  "turquoise", "forest", "lime", "gold", "sepia",
];

// Create groups
const groups = Array.from(
  { length: groupsCount },
  (value, index) => ({
    id: index,
    name: faker.commerce.productName(),
    color: faker.helpers.randomize(groupColors),
    description: faker.lorem.sentences(),
  })
);

// Create users
const users = Array
  // We are going to use only a subset of this
  .from({ length: usersCount }, () => faker.helpers.contextualCard())
  .map((user, index) => ({
    id: index,
    groupId: faker.random.number({ min: 0, max: groups.length - 1 }),
    name: user.name,
    email: user.email,
    avatar: user.avatar,
  }));

module.exports = () => ({ groups, users });
