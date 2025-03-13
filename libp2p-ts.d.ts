import { Libp2pTypeR } from "./index.ts";
import { Multiaddr } from "@multiformats/multiaddr";

declare module 'libp2p-ts' {
  export type { Libp2pTypeR };
  export function startRelay(): Promise<Libp2pTypeR>;
  export function trimAddresses(list: Multiaddr[]): string[];
  }
