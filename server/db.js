const faker = require("faker");
const icons = require("@blueprintjs/icons/resources/icons/icons.json");

const groupsCount = 55;
const usersCount = 505;

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
    icon: faker.helpers.randomize(icons).iconName,
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
    name: user.name,
    email: user.email,
    avatar: user.avatar,
  }));

// Create many-to-many relationship
const links = Array.from(
  { length: usersCount * Math.round(groupsCount / 3) },
  (value, index) => ({
    id: index,
    groupId: faker.random.number({ min: 0, max: groupsCount }),
    userId: faker.random.number({ min: 0, max: usersCount }),
  })
);

module.exports = () => ({ groups, users, links });
