local arg = { ... }


http.request(arg[2] or "http://localhost:3000")

local requesting = true
while requesting do 
    local event, url, sourceText = os.pullEvent()
    if event == "http_success" then
        local respondedText = sourceText.readAll()

        sourceText.close()
        local file = fs.open(arg[1] or "code", "w")
        file.write(respondedText)
        file.close()
        shell.run(arg[1] or "code")
        requesting = false
    elseif event == "http_failure" then
        print("Can't reach the server")
        requesting = false
    end
end