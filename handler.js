const fs = require('fs');
const templateFiles = fs.readdirSync('./template').filter(file => file.endsWith('.js'));
const { exec } = require('child_process');

const generateTemplate = (name) => {
    for (const file of templateFiles) {
        const template = require(`./template/${file}`);

        if (template.name.includes(name)) {
            console.log(clc.yellow('[YURD] Install Template...'))
            console.log(clc.yellow('[YURD] Creating Project...'))

            if (template.inizializeCommand) {
                exec(template.inizializeCommand, (err, stdout, stderr) => {
                    if (err) {
                        console.log(clc.red('[YURD] Unexpected Error!'))
                        return;
                    }
                });
            }

            if (template.dependenciesCommand) {
                console.log(clc.yellow('[YURD] Installing Package...'))

                exec(template.dependenciesCommand, (err, stdout, stderr) => {
                    if (err) {
                        console.log(clc.red('[YURD] Unexpected Error!'))
                        return;
                    }
                });

            }

            console.log(clc.yellow('[YURD] Creating Files...'))

            template.code.forEach(file => {
                if (template.supportTypescript && template.supportTypescript === true) {
                    if(file.fileName.endsWith('.js')) {
                        fs.appendFile(file.fileName.split('.js').join('.ts'), file.fileCode, function (err, data) {
                            if (err) {
                                console.log(clc.red('[YURD] Unexpected Error!'))
                            }
                        })
                    }
                } else {
                    fs.appendFile(file.fileName, file.fileCode, function (err, data) {
                        if (err) {
                            console.log(clc.red('[YURD] Unexpected Error!'))
                        }
                    })
                }
            })

            if (options.code) {
                exec('code .', (err, stdout, stderr) => {
                    if (err) {
                        console.log(clc.red('[YURD] Unexpected Error!'))
                        return;
                    }
                });
            }
            console.log(clc.green('[YURD] Template Installed. Happy Coding!'))
        }
    }
}

module.exports = {
    generateTemplate
}