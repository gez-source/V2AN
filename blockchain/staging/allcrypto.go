package staging

import (
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/rand"
	"fmt"
	"log"
)

func IShitBroken() {
	fmt.Printf("No, its working :D\n")
}

func TestKeys() {
	/* We can always get the curve from elliptic.P256(), don't have to store unless we need reuse.
	its consistant during program life.
	*/
	// secp256r1
	curve := elliptic.P256()

	// The Elliptic Curve Digital Signature Algorithm (ECDSA)
	// Use curve to gen a private key with X: Y: of curve
	privkey, err := ecdsa.GenerateKey(curve, rand.Reader)
	if err != nil {
		log.Printf("ERROR: Generating keys failed. %s\n", err)
	}
	// We can access more fields at privkey.Params().<field> but likely unnecessary for out application.

	fmt.Printf("public:%+v\n\n", privkey.Public())

	// Get a new key in this programs life
	privkey, err = ecdsa.GenerateKey(curve, rand.Reader)
	chk(err)
	fmt.Printf("newpub:%+v\n\n", privkey.Public())

	privkey, err = ecdsa.GenerateKey(curve, rand.Reader)
	fmt.Printf("newpub:%+v\n\n", privkey.Public())
	chk(err)

	privkey, err = ecdsa.GenerateKey(curve, rand.Reader)
	chk(err)
	fmt.Printf("newpub:%+v\n\n", privkey.Public())

}
