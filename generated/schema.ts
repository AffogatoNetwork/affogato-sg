// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class CoffeeBatch extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CoffeeBatch entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CoffeeBatch entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CoffeeBatch", id.toString(), this);
  }

  static load(id: string): CoffeeBatch | null {
    return store.get("CoffeeBatch", id) as CoffeeBatch | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class OwnerBalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OwnerBalance entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OwnerBalance entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OwnerBalance", id.toString(), this);
  }

  static load(id: string): OwnerBalance | null {
    return store.get("OwnerBalance", id) as OwnerBalance | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get balance(): i32 {
    let value = this.get("balance");
    return value.toI32();
  }

  set balance(value: i32) {
    this.set("balance", Value.fromI32(value));
  }
}
