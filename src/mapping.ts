import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Transfer
} from "../generated/CoffeeBatch/CoffeeBatch"
import { CoffeeBatch, OwnerBalance } from "../generated/schema"

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export function handleTransfer(event: Transfer): void {

  if (event.params.from === Address.fromString(ZERO_ADDRESS)) {
    let owner = event.params.to.toHexString();
    let coffeeBatch = CoffeeBatch.load(event.params.id.toString());
    if (coffeeBatch !== null) {
      coffeeBatch.id = event.params.id.toString();
      coffeeBatch.owner = owner;
    }
    coffeeBatch.save()

    let ownerBalance = OwnerBalance.load(event.params.to.toHexString());
    if (ownerBalance === null) {
      ownerBalance.id = owner;
      ownerBalance.balance = 1;
    } else {
      ownerBalance.balance = ownerBalance.balance + 1;
    }
    ownerBalance.save();
  }
}
