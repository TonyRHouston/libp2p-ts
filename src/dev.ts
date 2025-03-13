import { startRelay, trimAddresses } from "../index.ts";

const node = await startRelay("16f851cd2c9e1f321559b64bdc78fde2f30b7d6086602c8bd071fceb61974cda")
node.getMultiaddrs().forEach((addr) => {
    console.log(`  - ${addr.toString()}`);
    });

    while(node !== null) {
        await new Promise((resolve) => setTimeout(resolve, 65000));
        console.clear();
      console.log("Node details:");
      console.log(`Peer ID: ${node.peerId.toString()}`);
      console.log("Addresses:");
      trimAddresses(node.getMultiaddrs()).forEach((addr) => {
          console.log(`  - ${addr.toString()}`);
      });
      console.log("Protocols:");
      node.getProtocols().forEach((protocol) => {
          console.log(`  - ${protocol}`);
      });
      console.log("Connections:");
      node.getConnections().forEach((connection, peerId) => {
          console.log(`  - Peer: ${peerId.toString()}`);
          console.log(`    - Status: ${connection.status}`);
          console.log(`    - RemoteAddr: ${connection.remoteAddr}`);
      });
      }