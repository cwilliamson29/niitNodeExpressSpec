const http = require("http");
const PORT = process.env.PORT || 5000;
const todos = require("./todos");
const getRequestBody = require("./utils");
const server = http.createServer(async (request, response) => {
	if (request.url === "/api/v1/todos" && request.method === "GET") {
		response.writeHead(200, { "Content-Type": "application/json" });
		response.end(JSON.stringify(todos));
	} else if (request.url === "/api/v1/todos" && request.method === "POST") {
		let req_body = await getRequestBody(request);
		todos.push(JSON.parse(req_body));
		response.writeHead(201, { "Content-Type": "application/json" });
		response.end(JSON.stringify(JSON.parse(req_body)));
	} else if (
		request.url.match(/\/api\/v1\/todos\/([0-9])/) &&
		request.method === "DELETE"
	) {
		const id = request.url.split("/")[4];
		const todo = todos.find((t) => t.id === parseInt(id));
		if (!todo) {
			response.writeHead(404, { "Content-Type": "application/json" });
			response.end(JSON.stringify({ error: "Todo not found" }));
		} else {
			todos.splice(todos.indexOf(todo), 1);
			response.writeHead(200, { "Content-Type": "application/json" });
			response.end("delted todo");
		}
	}
});

server.listen(PORT, () => {
	console.log("Server is running on port " + PORT);
});

server.on("error", (err) => {
	if ((err.code = "EADRINUSE")) {
		console.log("Port in use");
	}
});
