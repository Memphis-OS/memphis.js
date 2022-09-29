import memphis from "memphis-dev"

(async function () {
    let memphisConnection
    try {
        memphisConnection = await memphis.connect({
            host: "<memphis-host>",
            username: "<application type username>",
            connectionToken: "<broker-token>"
        });

        await memphis.produce({ stationName: "<station-name>", producerName: "<producer-name>", message: Buffer.from("Message"), ackWaitSec: 5 });

        console.log("All messages sent");
        memphisConnection.close();
    } catch (ex) {
        console.log(ex);
        if (memphisConnection) memphisConnection.close();
    }
})();