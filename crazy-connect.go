package main

import (
    "fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/widget"
	"fyne.io/fyne/v2/layout"

 
    "image/color"
    "fmt"
)


func main() {
	a := app.New()
	w := a.NewWindow("Crazy-Connect")
    circle := canvas.NewCircle(color.White)
    // circlea := canvas.NewCircle(color.White)

    // circler := canvas.NewCircle(color.RGBA{10, 15, 222 ,128})
    // circleb := canvas.NewCircle(color.RGBA{255, 0, 61 ,128})
    const rowsNum, colsNum int = 6, 6

    var gameState = make([][]int, rowsNum, colsNum)

    for rowIndex := 0; rowIndex < rowsNum; rowIndex++{
        gameState[rowIndex] = make([]int, colsNum)
    }


    fmt.Println(gameState)

	circle.StrokeColor = color.Gray{0x99}
	circle.StrokeWidth = 5

	w.Resize(fyne.NewSize(800, 800))
	hello := widget.NewLabel("Hello Fyne!")
	grid := container.New(layout.NewGridLayout(6))
    for i := 0; i < rowsNum; i++ {
        for j := 0; j < colsNum; j++{
            colorTOBEIMPLEMENTED := gameState[i][j]
            fmt.Println(colorTOBEIMPLEMENTED)
            circlea := canvas.NewCircle(color.RGBA{10, 15, 222 ,128})
            grid.Add(circlea)
        }
    }
    grid.Add(hello)
    w.SetContent(grid)
	w.ShowAndRun()
}