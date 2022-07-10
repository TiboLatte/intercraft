# Intercraft
It's a simple api that you can use to write code from your ide directly to computercraft

## Installation
Just clone the repo into a file on your machine or a server.


## Usage
Just run in the directory where you cloned the repo
```bash
node index.js
```
The code.lua file is where you'll write the code. You just need to save it when you want to send it.

On the computer you'll need to copy/paste the interCraftSourceCode.txt into it.

Then you launch the program with this syntax :
```lua
[nameOfYourPastebinFile] destinationFile urlAddressOfYourServer
```

You can let the args empty and the destination file will be on default to "code" and the urlAddress to "localhost:3000", if you want to specify an address please make sure to write the address with "http://" in front of it. 


## License
[MIT](https://choosealicense.com/licenses/mit/)
