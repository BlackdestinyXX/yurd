const maingo = `package main
import ("fmt")

func main() {
    var number int

    fmt.Print("Insert a number... ")
    fmt.Scan(&number)

    for i := 1; i <= 10; i++ {
        fmt.Println(i*number)
    }
}`

module.exports = {
    code: [{fileName: 'main.go', fileCode: maingo}],
    name: ['go-multiplication-table']
}