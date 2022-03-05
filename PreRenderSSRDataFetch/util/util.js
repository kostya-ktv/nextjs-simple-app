export const getData = async() => {
   const fs = require('fs/promises')
   const path = require('path')
   const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
   const data = JSON.parse(await fs.readFile(filePath))
return data
}