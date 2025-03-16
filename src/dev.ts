import { startRelay, trimAddresses, startHeliaRelay } from "../index.ts";

 const node = await startRelay("16f851cd2c9e1f321559b64bdc78fde2f30b7d6086602c8bd071fceb61974cda")
const helia = await startHeliaRelay(node)


helia.libp2p.getMultiaddrs().forEach((addr) => {
    console.log(`  - ${addr.toString()}`);
    });

    while(helia.libp2p !== null) {
        await new Promise((resolve) => setTimeout(resolve, 65000));
        console.clear();
      console.log("Node details:");
      console.log(`Peer ID: ${helia.libp2p.peerId.toString()}`);
      console.log("Addresses:");
      trimAddresses(helia.libp2p.getMultiaddrs()).forEach((addr) => {
          console.log(`  - ${addr.toString()}`);
      });
      console.log("Protocols:");
      helia.libp2p.getProtocols().forEach((protocol) => {
          console.log(`  - ${protocol}`);
      });
      console.log("Connections:");
      helia.libp2p.getConnections().forEach((connection, peerId) => {
          console.log(`  - Peer: ${peerId.toString()}`);
          console.log(`    - Status: ${connection.status}`);
          console.log(`    - RemoteAddr: ${connection.remoteAddr}`);
      });
      }