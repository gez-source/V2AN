package main

import (
	"bufio"
	"fmt"
	"html/template"
	"log"
	"net"
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

type Index struct {
}

var indexIn = Index{}

func index(w http.ResponseWriter, r *http.Request) {
	log.Printf("Func: index(). Method:%s IP:%s r.URL.Path:%s", r.Method, r.RemoteAddr, r.URL.Path)
	//log.Printf("Func: index(). ")

	if r.Method == "GET" {
		addr := r.URL.Query().Get("addr")

		if r.URL.Path == "/api/GetTransactions" {
			w.Header().Set("Content-Type", "application/json")

			// connect to server
			conn, err := net.Dial("tcp", "127.0.0.1:8000")

			if err == nil {
				// Send request to blockchain RPC service.
				fmt.Fprintf(conn, "GetTransactions:"+addr+"\n")

				// Wait for reply from service.
				message, _ := bufio.NewReader(conn).ReadString('\n')
				fmt.Print("Message from server: " + message)

				fmt.Fprintf(w, message)
			} else {
				fmt.Printf("Error connecting to blockchain RPC socket: %s", err)
				fmt.Fprintf(w, "[{'error': 'Error connecting to blockchain RPC socket'}]")
			}
		} else if r.URL.Path == "/api/GetTransaction" {
			w.Header().Set("Content-Type", "application/json")

			// connect to server
			conn, err := net.Dial("tcp", "127.0.0.1:8000")

			if err == nil {
				// Send request to blockchain RPC service.
				fmt.Fprintf(conn, "GetTransaction:"+addr+"\n")

				// Wait for reply from service.
				message, _ := bufio.NewReader(conn).ReadString('\n')
				fmt.Print("Message from server: " + message)

				fmt.Fprintf(w, message)
			} else {
				fmt.Printf("Error connecting to blockchain RPC socket: %s", err)
				fmt.Fprintf(w, "[{'error': 'Error connecting to blockchain RPC socket'}]")
			}
		} else if r.URL.Path == "/api/GetBlock" {
			w.Header().Set("Content-Type", "application/json")

			// connect to server
			conn, err := net.Dial("tcp", "127.0.0.1:8000")

			if err == nil {
				// Send request to blockchain RPC service.
				fmt.Fprintf(conn, "GetBlock:"+addr+"\n")

				// Wait for reply from service.
				message, _ := bufio.NewReader(conn).ReadString('\n')
				fmt.Print("Message from server: " + message)

				fmt.Fprintf(w, message)
			} else {
				fmt.Printf("Error connecting to blockchain RPC socket: %s", err)
				fmt.Fprintf(w, "[{'error': 'Error connecting to blockchain RPC socket'}]")
			}
		} else if r.URL.Path == "/api/GetBlocks" {
			w.Header().Set("Content-Type", "application/json")

			// connect to server
			conn, err := net.Dial("tcp", "127.0.0.1:8000")

			if err == nil {
				// Send request to blockchain RPC service.
				fmt.Fprintf(conn, "GetBlocks:"+addr+"\n")

				// Wait for reply from service.
				message, _ := bufio.NewReader(conn).ReadString('\n')
				fmt.Print("Message from server: " + message)

				fmt.Fprintf(w, message)
			} else {
				fmt.Printf("Error connecting to blockchain RPC socket: %s", err)
				fmt.Fprintf(w, "[{'error': 'Error connecting to blockchain RPC socket'}]")
			}
		} else if r.URL.Path == "/blocks" {
			t, err := template.ParseFiles("web/blocks.html")
			if err != nil {
				log.Printf("ERROR:%s", err)
			} else {
				t.Execute(w, indexIn)
			}
		} else if r.URL.Path == "/transactions" {
			t, err := template.ParseFiles("web/indexStart.html")
			if err != nil {
				log.Printf("ERROR:%s", err)
			} else {
				t.Execute(w, indexIn)
			}
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
