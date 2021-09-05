package main

import (
	"bufio"
	"encoding/csv"
	"encoding/json"
	"fmt"
	"log"
	"net"
	"os"
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

func populate(filepath string) [][]string {
	csvfile, err := os.Open(filepath)
	if err != nil {
		log.Printf("ERROR: failed to read .csv file. %s", err)
	}

	csvreader := csv.NewReader(csvfile)
	records, err := csvreader.ReadAll()
	if err != nil {
		log.Printf("ERROR: failed to read whole csv records. %s", err)
	}

	csvfile.Close()
	return records

}

func notmain() {
	fmt.Println("Start server...")

	myrecords := populate("dataset.csv")

	// example
	fmt.Printf("%s\n\n", myrecords)
	fmt.Printf("%s\n", myrecords[1][0:7])
	fmt.Printf("%s\n", myrecords[1][4])
	fmt.Printf("%s\n", len(myrecords))
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
		//addr = s[1] // Get the address parameter.

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
		} else if command == "GetTransaction" {
			var b = Transaction{
				TransactionHash: "0009",
				BlockID:         "5120034",
				Age:             11.34,
				FromAddress:     "TEST CITY",
				ToAddress:       "Test Country",
				Key:             "Rawr",
				Value:           "Rawr value",
			}
			json_msg, err := json.Marshal(b)
			if err != nil {
				fmt.Printf("Error: %s", err)
				fmt.Fprintf(conn, "{error: 'Error: converting to json'}"+"\n")
			} else {
				fmt.Fprintf(conn, string(json_msg)+"\n")
			}
		} else if command == "GetBlock" {
			var b = Block{
				Block:     5120034,
				Age:       4.0,
				Txn:       "sjdsdjasjkdjskjdkksjk",
				Validator: "validator-Z89293432838218382393A",
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
					BlockID:         "5120034",
					Age:             11.34,
					FromAddress:     "TEST CITY",
					ToAddress:       "Test Country",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
				Transaction{
					TransactionHash: "00010",
					BlockID:         "5120021",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
				Transaction{
					TransactionHash: "00010",
					BlockID:         "5120021",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
				Transaction{
					TransactionHash: "00010",
					BlockID:         "5120021",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},

				Transaction{
					TransactionHash: "00010",
					BlockID:         "5120021",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
				Transaction{
					TransactionHash: "00010",
					BlockID:         "5120021",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
				Transaction{
					TransactionHash: "00010",
					BlockID:         "5120021",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
				Transaction{
					TransactionHash: "00010",
					BlockID:         "5120021",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
				Transaction{
					TransactionHash: "00010",
					BlockID:         "5120021",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
				Transaction{
					TransactionHash: "00010",
					BlockID:         "5120021",
					Age:             23.98,
					FromAddress:     "TEST CITY 2",
					ToAddress:       "Test Country 2",
					Key:             "Rawr",
					Value:           "Rawr value",
				},
			}

			_ = p

			/* 			k := []Transaction{}
			   			for i := 1; i < len(myrecords); i++ {
			   				postCode := myrecords[i][4]
			   				begin := myrecords[i][0:7]

			   				txn := Transaction{
			   					TransactionHash: "1a61742484b0aa134d330dc19ab64e4909621e7c9f576e112142e25b7853d0dc",
			   					BlockID:         "5120021",
			   					Age:             4,
			   					FromAddress:     "4f980a3ef05eaf6eb2395d8a48594b08502b9033",
			   					ToAddress:       "22ff293e14f1ec3a09b137e9e06084afd63addf9",
			   					Key:             postCode,
			   					Value:           begin[0] + begin[1] + begin[3] + begin[5] + begin[6],
			   				}

			   				k = append(k, txn)
			   			} */

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
