const maingo = `package main

import "fmt"

import "rsc.io/quote"

func main() {
    fmt.Println(quote.Go())
}`

module.exports = {
    code: [{fileName: 'main.go', fileCode: maingo}],
    name: ['go'],
}