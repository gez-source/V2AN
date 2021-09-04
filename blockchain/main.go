package main

import (
	"atomic/staging"

	"fmt"
)

func main() {
	fmt.Printf("hello")
	staging.IShitBroken()

}
