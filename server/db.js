const faker = require("faker");

const groupsCount = 10;
const usersCount = 100;

module.exports = () => {
  const data = { groups: [], users: [] };

  // Create 10 groups
  for (let id = 0; id < groupsCount; id++) {
    data.groups.push({
      id: id,
      name: faker.commerce.department(),
      color: faker.commerce.color(),
      description: faker.lorem.sentences(2)
    });
  }

  // Create 1000 users
  for (let id = 0; id < usersCount; id++) {
    data.users.push({
      id: id,
      groupId: faker.random.number({ min: 0, max: groupsCount }),
      ...faker.helpers.contextualCard()
    });
  }

  return data
}