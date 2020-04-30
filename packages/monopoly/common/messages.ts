import { Coordinate, PropertyInfo, GamePlayerInfo, Encounter, Payment } from './types';

export enum Action {
    UNSPECIFIED = '',

    // request/response
    // initiate from client
    DEBUG = 'debug',

    // request/response
    // initiate from client
    ROLL = 'roll',

    // packet from server
    // include encounters of current player after moved.
    ENCOUNTER = 'encounter',

    // request/response
    // initiate from client
    // deprecated
    PURCHASE = 'purchase',

    // request/response
    // initiate from server
    PROMPT_PURCHASE = 'promp_purchase',

    // request/response
    // initiate from client
    END_TURN = 'endturn',

    // from client
    GET_INITIAL_STATE = 'get_initial_state',

    // from client. After receiving ANNOUNCE_END_TURN, client should flush any
    // animation about current player, and pan view to the next player. Then
    // send READY_TO_START_TURN to server. Server will synchronize and broadcase
    // ANNOUNCE_START_TURN to all clients.
    READY_TO_START_TURN = 'ready_to_start_turn',

    // packet to annouce a player to start a turn.
    ANNOUNCE_START_TURN = 'announce_start_turn',
    ANNOUNCE_ROLL = 'announce_roll',
    ANNOUNCE_PURCHASE = 'announce_purchase',

    // announce a player pay rent to another player. Although this information
    // is available in ANNOUNCE_ROLL's encounter, we still need a message to
    // tell the landlord player their new networth.
    ANNOUNCE_PAY_RENT = 'announce_pay_rent',
    // packet to announce a player finished turn.
    // this immediately follows END_TURN response from current player. After
    // receiving this packet, Other players should send back READY_TO_START_TURN
    // when they finish animations of current player and pan to the next player.
    ANNOUNCE_END_TURN = 'announce_end_turn',
}

export interface PromptPurchasePayload {
    property: PropertyInfo;
    moneyAfterPurchase: number;
}

export interface PromptPurchaseResponsePayload {
    purchase: boolean;
}

export interface RollResponsePayload {
    steps: number;
    path: Coordinate[]; // not including the current position
    encounters?: Encounter[];
}

export interface EncounterPayload {
    playerId: string;
    encounters: Encounter[];
    myMoney: number;
}

export interface PurchasePayload {
    propertyPos: Coordinate;
}

export interface PurchaseResponsePayload {
    property: PropertyInfo;
    remainingMoney: number;
}

export interface PlayerEndTurnPayload {
    currentPlayerId: string;
    nextPlayerId: string;
}

export interface PlayerStartTurnPayload {
    id: string;
}

export interface PlayerPurchasePayload {
    id: string;
    property: PropertyInfo;
}

export interface PlayerRollPayload {
    id: string;
    steps: number;
    path: Coordinate[];
    encounters?: Encounter[];
    myMoney: number;
}

export interface PlayerPayRentPayload {
    id: string;
    payments: Payment[];
    myCurrentMoney: number; // the updated money of the current player. This normally only affect payer and payee. All other players will receive an unchanged amount.
}

export interface InitialStatePayload {
    gamePlayers: GamePlayerInfo[];
    firstPlayerId: string;
}

// Server Client
// <- GET_INITIAL_STATE
// -> GET_INITIAL_STATE response

// <= READY_TO_START_TURN
// => PLAYER_START_TURN (first player)
// <- ROLL
// -> ROLL response, including charge, new property info
// => ANNOUNCE_ROLL
// <- PURCHASE
// -> PURCHASE response
// => ANNOUNC_PURCHASE
// <- END_TURN
// -> END_TURN response
// => PLAYER_END_TURN

// <= READY_TO_START_TURN
// => PLAYER_START_TURN (second player)
// <- ROLL
// (assuming this player need to pay rent)
// -> ROLL response, including charge
//
// ...
// => PLAYER_BANKRUPT
