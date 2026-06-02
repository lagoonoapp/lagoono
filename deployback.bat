rem only deploys the backend

call git add .
call git commit -m %1
call git push origin master