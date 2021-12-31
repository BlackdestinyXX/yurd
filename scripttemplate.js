const code = `code here`

// const code2 = `code here`
// const typescriptCode = `typescript code here`

module.exports = {
    code: [{fileName: 'file name', fileCode: code, /*typescriptCode: typescriptCode*/}, /*{fileName: 'file name 2', fileCode: code2}*/],
    name: ['template name', 'template name2'],
    inizializeCommand: 'npm init -y',
    dependenciesCommand: 'npm install dep1 dep2',
    typescriptDependiencesCommand: 'npm install @types/node',
    supportTypescript: true /*or false*/,
}
