// @generated by protobuf-ts 1.0.12 with parameters disable_service_client
// @generated from protobuf file "monopoly/game_player.proto" (package "monopoly", syntax proto3)
// tslint:disable
import { BinaryWriteOptions } from "@protobuf-ts/runtime";
import { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import { BinaryReadOptions } from "@protobuf-ts/runtime";
import { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Coordinate } from "./coordinate";
/**
 * @generated from protobuf message monopoly.GamePlayer
 */
export interface GamePlayer {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: int32 money = 2;
     */
    money: number;
    /**
     * @generated from protobuf field: monopoly.Coordinate pos = 3;
     */
    pos?: Coordinate;
    /**
     * character determine the sprite set, or color client side use to
     * denote the player
     *
     * @generated from protobuf field: int32 character = 4;
     */
    character: number;
}
/**
 * Type for protobuf message monopoly.GamePlayer
 */
class GamePlayer$Type extends MessageType<GamePlayer> {
    constructor() {
        super("monopoly.GamePlayer", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "money", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "pos", kind: "message", T: () => Coordinate },
            { no: 4, name: "character", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<GamePlayer>): GamePlayer {
        const message = { id: "", money: 0, character: 0 };
        if (value !== undefined)
            reflectionMergePartial<GamePlayer>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GamePlayer): GamePlayer {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* int32 money */ 2:
                    message.money = reader.int32();
                    break;
                case /* monopoly.Coordinate pos */ 3:
                    message.pos = Coordinate.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* int32 character */ 4:
                    message.character = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GamePlayer, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* int32 money = 2; */
        if (message.money !== 0)
            writer.tag(2, WireType.Varint).int32(message.money);
        /* monopoly.Coordinate pos = 3; */
        if (message.pos)
            Coordinate.internalBinaryWrite(message.pos, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* int32 character = 4; */
        if (message.character !== 0)
            writer.tag(4, WireType.Varint).int32(message.character);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
export const GamePlayer = new GamePlayer$Type();
