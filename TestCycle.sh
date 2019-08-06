VERSION_ID="HI PIdor"
if [ "${SFDX_AUTH_URL}" != "" ]
then
sudo npm install -global sfdx-cli
sudo npm install -g json
sudo npm install -g slack-cli
FILE_NAME="sfdx-auth-url.txt"
# Creation of a temp file that contains Sfdx Auth Url
echo ${SFDX_AUTH_URL} > ${FILE_NAME}
# Login
echo "Authenticating..."
sfdx force:auth:sfdxurl:store -f ${FILE_NAME} -d -a DevHub
VERSION_ID=`sfdx force:org:open -u DevHub --json | json result.url`
# Removing the file
rm ${FILE_NAME}
else
    echo "No SFDX_AUTH_URL variable. The test are run only for public available pages"
fi
echo "$VERSION_ID"
key=true
for i in *.js;
do 
   sed 's#Builder().forBrowser('"'"'firefox'"'"')#Builder().usingServer('"'"'http://localhost:4444/wd/hub'"'"').forBrowser('"'"'chrome'"'"')#g' "$i" > "$i"
   SFLOGIN="await driver.get('$VERSION_ID')"
   sed 's#var={}#$SFLOGIN#g' "$i" > index-updated.txt
   cat index-updated.txt
  # mocha index-updated.js || key=false 
done
if [ "$key" = "false" ]
then
echo"Cool Beans"
fi
