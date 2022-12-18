/** Import local modules */
const idGenerator = require('../modules/idminator'),
    usernameGenerator = require('username-generator');

/** Import users data */
const users = require('./users.json');

/** ID generator */
const generateId = idGenerator(1)

/** Users table. just image */
const usersTable = users.filter((user) => user && user).map(user => createUser(user))



console.table(usersTable, ['id', 'username', 'fullname', 'age']);

/** 
 * @name createUserMethod
 * @param {({fullname: string, age: number})} user
 * @returns {({id: string, username: string, fullname: string, age: number})}
*/
function createUser({ fullname, age }) {
    const id = generateId.next().value
    const username = usernameGenerator(fullname);

    const newUser = {
        id,
        username,
        fullname,
        age
    };

    return newUser;
}