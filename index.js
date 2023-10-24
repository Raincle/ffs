#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, process.argv[2])
const cssContent = fs.readFileSync(filePath, "utf-8")

const lines = cssContent.split("\n")
let newCss = []
for (let i = 0; i < lines.length; i++) {
    const element = lines[i];
    if (!element || element.indexOf(': "') > 0) {
        newCss.push(element)
    } else if (element && !element.startsWith("/*")) {
        const kv = element.split("/*")[0].split(": ")
        const key = kv[0].split("-")
        let newKey = ""
        for (let j = 0; j < key.length; j++) {
            const name = key[j];
            if (j > 0) {
                newKey += name[0].toUpperCase() + name.slice(1)
            } else {
                newKey = name
            }
        }
        const value = kv[1]
        const p = `${newKey}: "${value}`.replace(";", '",')
        newCss.push(p)
    }
}

const processedCss = newCss.join("\n")
fs.writeFileSync(filePath, processedCss)