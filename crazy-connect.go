package main

import (
    "fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/widget"
	"fyne.io/fyne/v2/layout"

    // "fyne.io/fyne/v2/driver/desktop"
    "fyne.io/x/fyne/wrapper"

    "image/color"
    "fmt"
)

type gridObject struct {
    circ (*canvas.Circle)
    colorIndex int
    colIndex  int
    rowIndex int
}
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
            // colorTOBEIMPLEMENTED := gameState[i][j]
            // fmt.Println(colorTOBEIMPLEMENTED)
            circlea := gridObject{canvas.NewCircle(color.White), 0, i, j}
            wrapped := wrapper.MakeTappable(circlea.circ, func(e *fyne.PointEvent) {
                
                fmt.Println(circlea.rowIndex, circlea.colIndex, gameState)
                
                switch colorSet := gameState[circlea.rowIndex][circlea.colIndex]; colorSet {
                case 1:
                    fmt.Println("a");
                    gameState[circlea.rowIndex][circlea.colIndex] = 2;
                    circlea.circ.FillColor=color.RGBA{255, 0, 61 ,128}
                case 2:
                    fmt.Println("A");
                    gameState[circlea.rowIndex][circlea.colIndex] = 0;
                    circlea.circ.FillColor=color.White
                default:
                    fmt.Println(colorSet);
                    gameState[circlea.rowIndex][circlea.colIndex] = 1;
                    circlea.circ.FillColor=color.RGBA{10, 15, 222 ,128}
                }
                circlea.circ.Refresh()

            })
            grid.Add(wrapped)
        }
    }
    grid.Add(hello)
    w.SetContent(grid)



	w.ShowAndRun()
}