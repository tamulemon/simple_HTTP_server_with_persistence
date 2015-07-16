- To run superagent-cli for the routes:
get: superagent localhost:8080/api/post
post: superagent localhost:8080/api/post post '{"name":"abc"}'
get one post: superagent localhost:8080/api/post/file_0.json 
put: superagent localhost:8080/api/post/file_0.json put '{"name":"cat"}'
delete: superagent localhost:8080/api/post/file_0.json delete 

