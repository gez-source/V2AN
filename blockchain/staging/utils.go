package staging

import "log"

// chk quick error checking
func chk(err error) {
	if err != nil {
		log.Printf("Chk Error:%s\n", err)
	}
}
