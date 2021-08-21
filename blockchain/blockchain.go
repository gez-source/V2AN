package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"net"
	"strings"
)

type Block struct {
	Block     int32
	Age       float32
	Txn       string
	Validator string
}

type Transaction struct {
	TransactionHash string
	BlockID         string
	Age             float32
	FromAddress     string
	ToAddress       string
	Key             string
	Value           string
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

		s := strings.Split(message, ":")
		var command = s[0]
		//addr = s[1]

		if command == "GetBlocks" {
			var b = []Block{
				Block{
					Block:     5120034,
					Age:       4.0,
					Txn:       "sjdsdjasjkdjskjdkksjk",
					Validator: "validator-Z89293432838218382393A",
				},
				Block{
					Block:     5120034,
					Age:       3.0,
					Txn:       "sjdsdjasjkdjskjdkksjk",
					Validator: "validator-Z89293432838218382393A",
				},
				Block{
					Block:     5120034,
					Age:       8.0,
					Txn:       "sjdsdjasjkdjskjdkksjk",
					Validator: "validator-Z89293432838218382393A",
				},
				Block{
					Block:     5120034,
					Age:       5.0,
					Txn:       "sjdsdjasjkdjskjdkksjk",
					Validator: "validator-Z89293432838218382393A",
				},
			}

			json_msg, err := json.Marshal(b)
			if err != nil {
				fmt.Printf("Error: %s", err)
				fmt.Fprintf(conn, "{error: 'Error: converting to json'}"+"\n")
			} else {
				fmt.Fprintf(conn, string(json_msg)+"\n")
			}
		} else if command == "GetTransactions" {
			var p = []Transaction{
				Transaction{
					TransactionHash: "0009",
					BlockID:         "01/03/1979",
					Age:             11.34,
					FromAddress:     "TEST CITY",
					ToAddress:       "Test Country",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
				Transaction{
					TransactionHash: "00010",
					BlockID:         "05/12/1983",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
				Transaction{
					TransactionHash: "00010",
					BlockID:         "05/12/1983",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
				Transaction{
					TransactionHash: "00010",
					BlockID:         "05/12/1983",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},

				Transaction{
					TransactionHash: "00010",
					BlockID:         "05/12/1983",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
				Transaction{
					TransactionHash: "00010",
					BlockID:         "05/12/1983",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
				Transaction{
					TransactionHash: "00010",
					BlockID:         "05/12/1983",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
				Transaction{
					TransactionHash: "00010",
					BlockID:         "05/12/1983",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
				Transaction{
					TransactionHash: "00010",
					BlockID:         "05/12/1983",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
				Transaction{
					TransactionHash: "00010",
					BlockID:         "05/12/1983",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
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
}
