import { randomUUID } from "node:crypto";

export class UniqueEntityID {
    private value: string

    toString() {
        this.value
    }

    toValue() {
        this.value
    }

    constructor(value?: string) {
        this.value = value ?? randomUUID()
    }
}