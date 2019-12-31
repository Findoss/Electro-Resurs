npm start;
git add -A .;
git commit -m 'update bundle';
npm version patch;
git push origin master;
git checkout dev;