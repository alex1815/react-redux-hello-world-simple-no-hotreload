echo " You should see version of node and npm. If you don't see it, install node from link: https://nodejs.org/en/ "

git clone https://github.com/alex1815/react-redux-hello-world-simple-no-hotreload.git
cd react-redux-hello-world-simple-no-hotreload
start cmd /c  npm i
timeout 60 /nobreak
git checkout 265a282
npm start