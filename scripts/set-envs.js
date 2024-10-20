const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config()


const targetPath = './src/environments';
const fileName = 'environment.ts'


const envFileContent = `
    export const environment = {
        BASE_URL: "${process.env['BASE_URL']}",
    };
`;

// create the folder to the variables, if it already exist it will overwrite it 
mkdirSync(targetPath, { recursive: true });

// create the file with the content
writeFileSync( `${targetPath}/${fileName}`, envFileContent );