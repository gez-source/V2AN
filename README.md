# ATOMIC blockchain explorer and blockchain prototype
Prototype for GovHack 2021, Australia

![alt text](screenhot-explorer.png "Screenshot of blockchain explorer")

We extracted data from the heritage register entries dataset and cleaned it up to use it 
as a test case for our blockchain to see if it was possible to digitise this type of data on the blockchain.
Here is the dataset we used: 

Heritage.tas.gov.au. 2021. Tasmanian Heritage Register Entries as at January 2021. [online] Available at: <https://heritage.tas.gov.au/Documents/THROnline_Jan2021.pdf> [Accessed 22 August 2021].

This PDF document provides a list of the permanent and provisional entries on the Tasmanian Heritage Register by name and address. 

# Prerequisites 

Go version 1.17

Install instructions: https://golang.org/doc/install

# Starting Web Server and blockchain node

To start the web server:

$ go run server.go


To start the blockchain:

$ cd blockchain

$ go run blockchain.go
