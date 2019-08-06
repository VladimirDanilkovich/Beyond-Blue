
VERSION_ID = "vova"
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
# Removing the file
rm ${FILE_NAME}
VERSION_ID=`sfdx force:org:open -u "ORG_NAME" --json | json result.url`
else
    echo "No SFDX_AUTH_URL variable. The test are run only for public available pages"
fi
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
