import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Cumorbit } from "../target/types/cumorbit";

describe("cumorbit", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Cumorbit as Program<Cumorbit>;

  it("Is initialized!", async () => {
    const tx = await program.methods.initialize().rpc();
    console.log("TX:", tx);
  });
});
