Login_Url="HI PIdor"
if [ "${SFDX_AUTH_URL}" != "" ]
then
sudo npm install -global sfdx-cli
sudo npm install -g json
sudo npm install -g slack-cli
FILE_NAME="sfdx-auth-url.txt"
# Creation of a temp file that contains Sfdx Auth Url
echo ${SFDX_AUTH_URL} > ${FILE_NAME}
# Lo
echo "Authenticating..."
sfdx force:auth:sfdxurl:store -f ${FILE_NAME} -d -a Org
Login_Url=`sfdx force:org:open -u Org --json | json result.url`
# Removing the file
rm ${FILE_NAME}
else
    echo "No SFDX_AUTH_URL variable. The test are run only for public available pages"
fi
echo "$Login_Url"
key=true
for i in Amount.js;
do 
   sed -ie '/^it/a await driver.get("https://beyondblue--dev.my.salesforce.com/secur/frontdoor.jsp?sid=00D0l0000008obj!AR8AQD.7j9OvRwydfqGwk1u7fDN7ERPJ4Vwn7qdD0mF3HZ3gm36DCprXbHf3NJ3882NgNcKmbx.IaU3BdHK4nSOWq_nKY.tP")' "$i"
   sed 's#Builder().forBrowser('"'"'firefox'"'"')#Builder().usingServer('"'"'http://localhost:4444/wd/hub'"'"').forBrowser('"'"'chrome'"'"')#g' "$i" > index-updated.js
   mocha index-updated.js || key=false 
done
if [ "$key" = "false" ]
then
echo"Cool Beans"
fi
