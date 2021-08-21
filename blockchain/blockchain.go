package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"net"
)

type Payload struct {
	TransactionHash string
	BlockID         string
	Age             float32
	FromAddress     string
	ToAddress       string
	KeyValue        string
}

func main() {
	fmt.Println("Start server...")

	// listen on port 8000
	ln, _ := net.Listen("tcp", ":8000")

	// run loop forever (or until ctrl-c)
	for {

		// accept connection
		conn, _ := ln.Accept()

		// get message, output
		message, _ := bufio.NewReader(conn).ReadString('\n')
		fmt.Print("Message Received:", string(message))

		var p = []Payload{
			Payload{
				TransactionHash: "0009",
				BlockID:         "01/03/1979",
				Age:             11.34,
				FromAddress:     "TEST CITY",
				ToAddress:       "Test Country",
				KeyValue:        "Rawr",
			},
			Payload{
				TransactionHash: "00010",
				BlockID:         "05/12/1983",
				Age:             23.98,
				FromAddress:     "TEST CITY 2",
				ToAddress:       "Test Country 2",
			},
			Payload{
				TransactionHash: "00010",
				BlockID:         "05/12/1983",
				Age:             23.98,
				FromAddress:     "TEST CITY 2",
				ToAddress:       "Test Country 2",
			},
			Payload{
				TransactionHash: "00010",
				BlockID:         "05/12/1983",
				Age:             23.98,
				FromAddress:     "TEST CITY 2",
				ToAddress:       "Test Country 2",
			},

			Payload{
				TransactionHash: "00010",
				BlockID:         "05/12/1983",
				Age:             23.98,
				FromAddress:     "TEST CITY 2",
				ToAddress:       "Test Country 2",
			},
			Payload{
				TransactionHash: "00010",
				BlockID:         "05/12/1983",
				Age:             23.98,
				FromAddress:     "TEST CITY 2",
				ToAddress:       "Test Country 2",
			},
			Payload{
				TransactionHash: "00010",
				BlockID:         "05/12/1983",
				Age:             23.98,
				FromAddress:     "TEST CITY 2",
				ToAddress:       "Test Country 2",
			},
			Payload{
				TransactionHash: "00010",
				BlockID:         "05/12/1983",
				Age:             23.98,
				FromAddress:     "TEST CITY 2",
				ToAddress:       "Test Country 2",
			},
			Payload{
				TransactionHash: "00010",
				BlockID:         "05/12/1983",
				Age:             23.98,
				FromAddress:     "TEST CITY 2",
				ToAddress:       "Test Country 2",
			},
			Payload{
				TransactionHash: "00010",
				BlockID:         "05/12/1983",
				Age:             23.98,
				FromAddress:     "TEST CITY 2",
				ToAddress:       "Test Country 2",
			},
		}

		json_msg, err := json.Marshal(p)
		if err != nil {
			fmt.Printf("Error: %s", err)
			fmt.Fprintf(conn, "{error: 'Error: converting to json'}"+"\n")
		} else {
			fmt.Fprintf(conn, string(json_msg)+"\n")
		}
	}
}
