exports = async function createNewUserDocument({user}) {
  const cluster = context.services.get("mongodb-atlas");
  const users = cluster.db("Monitop").collection("User");
  return users.insertOne({
    _id: user.id,
    _partition: `project=${user.id}`,
    name: user.data.email,
    canReadPartitions: [`project=${user.id}`],
    canWritePartitions: [`project=${user.id}`],
    memberOf: [
      {"name": "My Project", "partition": `project=${user.id}`}
    ],
    privilege:'',
    privilege_due:'',
    status:'',
    pin:'1234'
  });
};
