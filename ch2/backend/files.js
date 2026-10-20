import { writeFileSync, readFileSync } from 'node:fs'

const users = [{name: 'Adam Ondra', email: 'adam.ondra@climb.in'}]

const userJson = JSON.stringify(users)

writeFileSync('backend/users.json', userJson)

const readUsersJson = readFileSync('backend/users.json')
const readUsers = JSON.parse(readUsersJson)
console.log(readUsers);

// We have noticed that we write writeFileSync means asynchronously it runs because if we only write
// writeFile then what happen is that if you run the file may be the file never created
// the async doesnot run in fix order so first he create the file then print it 


