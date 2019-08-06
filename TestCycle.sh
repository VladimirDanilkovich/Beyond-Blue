sudo npm install -g json
VERSION_ID=`sfdx force:org:open -u "ORG_NAME" --json | json result.url`
echo "$VERSION_ID"
key=true
for i in *.js;
do
   sed 's#Builder().forBrowser('"'"'firefox'"'"')#Builder().usingServer('"'"'http://localhost:4444/wd/hub'"'"').forBrowser('"'"'chrome'"'"')#g' "$i" > index-updated.js
   mocha index-updated.js || key=false 
done
if [ "$key" = "false" ]
then
echo"Cool Beans"
fi
