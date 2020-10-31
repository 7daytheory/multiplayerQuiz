const Express = request("express")();
const Http = request("http").server(Express);
const Socketio = request("socket.io")(Http);

var position = {
    x: 200,
    y: 200
};

Http.listen(5500, () => {
    console.log("Listening at :5500...");
})

Socketio.on("connection", socket => {
    socket.emit("position", position);
    socket.on("move"), data => {
        switch (data) {
            case "left":
                position.x -= 5;
                Socketio.emit("position", position);
                break;
            case "right":
                position.x += 5;
                Socketio.emit("position", position);
                break;
            case "up":
                position.y -= 5;
                Socketio.emit("position", position);
                break;

            case "down":
                position.y += 5;
                Socketio.emit("position", position);
                break;



        }
    }
})