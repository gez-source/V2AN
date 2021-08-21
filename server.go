package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func hello(w http.ResponseWriter, req *http.Request) {

	fmt.Fprintf(w, "hello\n")
}

func headers(w http.ResponseWriter, req *http.Request) {

	for name, headers := range req.Header {
		for _, h := range headers {
			fmt.Fprintf(w, "%v: %v\n", name, h)
		}
	}
}

func checkerr(err error) {
	if err != nil {
		fmt.Printf("ERROR: %s\n", err)
	}

}

type Payload struct {
	TransactionHash string
	BlockID         string
	Age             float32
	FromAddress     string
	ToAddress       string
	KeyValue        string
}

type Index struct {
}

var indexIn = Index{}

func index(w http.ResponseWriter, r *http.Request) {
	log.Printf("Func: index(). Method:%s IP:%s r.URL.Path:%s", r.Method, r.RemoteAddr, r.URL.Path)
	//log.Printf("Func: index(). ")

	if r.Method == "GET" {
		//addr := r.URL.Query().Get("addr")

		if r.URL.Path == "/GetTransactions" {
			w.Header().Set("Content-Type", "application/json")

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

			json.NewEncoder(w).Encode(p)
		} else {

			// Opening html tags
			t, err := template.ParseFiles("web/indexStart.html")
			if err != nil {
				log.Printf("ERROR:%s", err)
			} else {
				t.Execute(w, indexIn)
			}

			// Closing html tags
			t, err = template.ParseFiles("web/indexEnd.html")
			if err != nil {
				log.Printf("ERROR:%s", err)
			} else {
				t.Execute(w, nil)
			}
		}

	} else if r.Method == "POST" {

		// save the values intered by the users so they don't dissapear on submit
		err := r.ParseForm()
		checkerr(err)

		// Opening html tags
		t, err := template.ParseFiles("web/indexStart.html")
		if err != nil {
			log.Printf("ERROR:%s", err)
		} else {
			t.Execute(w, indexIn)
		}

		// Closing html tags
		t, err = template.ParseFiles("web/indexEnd.html")
		if err != nil {
			log.Printf("ERROR:%s", err)
		} else {
			t.Execute(w, nil)
		}
	}
}

func main() {

	// Live pages
	http.HandleFunc("/", index)

	// Server static files
	http.Handle("/web/", http.StripPrefix("/web/", http.FileServer(http.Dir("web"))))

	http.HandleFunc("/hello", hello)
	http.HandleFunc("/headers", headers)

	http.ListenAndServe(":8090", nil)
}
