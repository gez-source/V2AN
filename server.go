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
	OrderID     string
	OrderDate   string
	Freight     float32
	ShipCity    string
	ShipCountry string
}

type Index struct {
}

var indexIn = Index{}

func index(w http.ResponseWriter, r *http.Request) {
	log.Printf("Func: index(). Method:%s IP:%s r.RequestURI:%s", r.Method, r.RemoteAddr, r.RequestURI)
	//log.Printf("Func: index(). ")

	if r.Method == "GET" {
		if r.RequestURI == "/GetTransactions" {
			w.Header().Set("Content-Type", "application/json")

			var p = []Payload{
				Payload{
					OrderID:     "0009",
					OrderDate:   "01/03/1979",
					Freight:     11.34,
					ShipCity:    "TEST CITY",
					ShipCountry: "Test Country",
				},
				Payload{
					OrderID:     "00010",
					OrderDate:   "05/12/1983",
					Freight:     23.98,
					ShipCity:    "TEST CITY 2",
					ShipCountry: "Test Country 2",
				},
				Payload{
					OrderID:     "00010",
					OrderDate:   "05/12/1983",
					Freight:     23.98,
					ShipCity:    "TEST CITY 2",
					ShipCountry: "Test Country 2",
				},
				Payload{
					OrderID:     "00010",
					OrderDate:   "05/12/1983",
					Freight:     23.98,
					ShipCity:    "TEST CITY 2",
					ShipCountry: "Test Country 2",
				},

				Payload{
					OrderID:     "00010",
					OrderDate:   "05/12/1983",
					Freight:     23.98,
					ShipCity:    "TEST CITY 2",
					ShipCountry: "Test Country 2",
				},
				Payload{
					OrderID:     "00010",
					OrderDate:   "05/12/1983",
					Freight:     23.98,
					ShipCity:    "TEST CITY 2",
					ShipCountry: "Test Country 2",
				},
				Payload{
					OrderID:     "00010",
					OrderDate:   "05/12/1983",
					Freight:     23.98,
					ShipCity:    "TEST CITY 2",
					ShipCountry: "Test Country 2",
				},
				Payload{
					OrderID:     "00010",
					OrderDate:   "05/12/1983",
					Freight:     23.98,
					ShipCity:    "TEST CITY 2",
					ShipCountry: "Test Country 2",
				},
				Payload{
					OrderID:     "00010",
					OrderDate:   "05/12/1983",
					Freight:     23.98,
					ShipCity:    "TEST CITY 2",
					ShipCountry: "Test Country 2",
				},
				Payload{
					OrderID:     "00010",
					OrderDate:   "05/12/1983",
					Freight:     23.98,
					ShipCity:    "TEST CITY 2",
					ShipCountry: "Test Country 2",
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
