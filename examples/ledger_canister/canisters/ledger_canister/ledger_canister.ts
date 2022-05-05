// TODO query_blocks is the only thing without basic tests
// TODO I don't think query_blocks will work right now, some changes are needed in Azle (we need to support Candid functions)

// TODO we should test all possible errors that can be returned

import {
    CanisterResult,
    nat32,
    nat64,
    ic,
    UpdateAsync,
    Variant
} from 'azle';
import {
    Address,
    Archives,
    binary_address_from_address,
    DecimalsResult,
    Ledger,
    NameResult,
    SymbolResult,
    Tokens,
    TransferFee,
    TransferResult
} from 'azle/canisters/ledger';

const ICPCanister = ic.canisters.Ledger<Ledger>('r7inp-6aaaa-aaaaa-aaabq-cai');

type ExecuteTransferResult = Variant<{
    ok?: boolean;
    err?: string;
}>;

export function* execute_transfer(to: Address, amount: nat64): UpdateAsync<ExecuteTransferResult> {
    const transfer_result_canister_result: CanisterResult<TransferResult> = yield ICPCanister.transfer({
        memo: 0n,
        amount: {
            e8s: amount,
        },
        fee: {
            e8s: 10_000n
        },
        from_subaccount: null,
        to: binary_address_from_address(to),
        created_at_time: null
    });

    if (transfer_result_canister_result.ok === undefined) {
        return {
            err: transfer_result_canister_result.err
        };
    }

    return {
        ok: true
    };
}

type GetAccountBalanceResult = Variant<{
    ok?: Tokens;
    err?: string;
}>;

export function* get_account_balance(address: Address): UpdateAsync<GetAccountBalanceResult> {
    const tokens_canister_result: CanisterResult<Tokens> = yield ICPCanister.account_balance({
        account: binary_address_from_address(address)
    });

    if (tokens_canister_result.ok === undefined) {
        return {
            err: tokens_canister_result.err
        };
    }

    const tokens = tokens_canister_result.ok;

    return {
        ok: tokens
    };
}

type GetTransferFeeResult = Variant<{
    ok?: TransferFee;
    err?: string;
}>;

export function* get_transfer_fee(): UpdateAsync<GetTransferFeeResult> {
    const transfer_fee_canister_result: CanisterResult<TransferFee> = yield ICPCanister.transfer_fee({});

    if (transfer_fee_canister_result.ok === undefined) {
        return {
            err: transfer_fee_canister_result.err
        };
    }

    const transfer_fee = transfer_fee_canister_result.ok;

    return {
        ok: transfer_fee
    };
}

type GetSymbolResult = Variant<{
    ok?: string;
    err?: string;
}>;

export function* get_symbol(): UpdateAsync<GetSymbolResult> {
    const symbol_result_canister_result: CanisterResult<SymbolResult> = yield ICPCanister.symbol();

    if (symbol_result_canister_result.ok === undefined) {
        return {
            err: symbol_result_canister_result.err
        };
    }

    const symbol_result = symbol_result_canister_result.ok;

    return {
        ok: symbol_result.symbol
    };
}

type GetNameResult = Variant<{
    ok?: string;
    err?: string;
}>;

export function* get_name(): UpdateAsync<GetNameResult> {
    const name_result_canister_result: CanisterResult<NameResult> = yield ICPCanister.name();

    if (name_result_canister_result.ok === undefined) {
        return {
            err: name_result_canister_result.err
        };
    }

    const name_result = name_result_canister_result.ok;

    return {
        ok: name_result.name
    };
}

type GetDecimalsResult = Variant<{
    ok?: nat32;
    err?: string;
}>;

export function* get_decimals(): UpdateAsync<GetDecimalsResult> {
    const decimals_result_canister_result: CanisterResult<DecimalsResult> = yield ICPCanister.decimals();

    if (decimals_result_canister_result.ok === undefined) {
        return {
            err: decimals_result_canister_result.err
        };
    }

    const decimals_result = decimals_result_canister_result.ok;

    return {
        ok: decimals_result.decimals
    };
}

type GetArchivesResult = Variant<{
    ok?: Archives;
    err?: string;
}>;

export function* get_archives(): UpdateAsync<GetArchivesResult> {
    const archives_canister_result: CanisterResult<Archives> = yield ICPCanister.archives();

    if (archives_canister_result.ok === undefined) {
        return {
            err: archives_canister_result.err
        };
    }

    const archives = archives_canister_result.ok;

    return {
        ok: archives
    };
}