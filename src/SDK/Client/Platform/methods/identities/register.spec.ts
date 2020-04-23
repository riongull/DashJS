import {expect} from 'chai';
import {HDPrivateKey, Transaction} from '@dashevo/dashcore-lib'
import 'mocha';
import register from "./register";
import expectThrowsAsync from "../../../../../utils/expectThrowsAsync";
import {stubConstructor} from "ts-sinon";
import {SDK} from "../../../../SDK";
import Account = SDK.Account;
import Wallet = SDK.Wallet;

describe('Client - Platform - Identities - .register()', () => {
    const wallet = stubConstructor(Wallet, {});
    let result
    const mockedContext = {
        dpp: {},
        documents: {
            create: (): null => null,
            get: (): null => null,
            broadcast: (): null => null
        },
        identities: {
            get: (): null => null,
            register: (): null => null
        },
        names: {
            get: (): boolean => true,
            register: (): boolean => true
        },
        contracts: {
            create: (): null => null,
            get: (): null => null,
            broadcast: (): null => null,
        },
        client: {},
        apps: {},
        account: stubConstructor(Account, wallet)
    };
    it('should ensure a wallet exist', function () {
        expectThrowsAsync(async () => {
            await register.call(mockedContext, 'USER')
        }, 'A initialized wallet is required to create an Identity.');
    });
    // @ts-ignore
    mockedContext.account.getUnusedAddress = () => {
        return {"address": 'yf9m6ofxfeHbGSuN1tYofWMZGcEzLpwRoV'}
    }
    // @ts-ignore
    mockedContext.account.getIdentityHDKey = () => {
        return new HDPrivateKey('tprv8nBPojmna7i2R4LSZ4jbpR6EucKhWjLAg7ggFWWdqN1ERKqrmy3ZBLeDnfCup4WZ5y11GBWLLbxozZCftqbt5bXtx7gTRoejn7qmymvA4Ub')
    };
    // @ts-ignore
    mockedContext.account.getPrivateKeys = () => {
        return [new HDPrivateKey('tprv8kYka5Hrc7DXtgYzqzshRttr6rwVHHLFcRXwwNu1GSJw6999PtmioNfMDZWosQE8U5xrtGpL262qiSSuFAMTwoobMuEmexQ9qsuAoSsyQ4S')]
    };
    // @ts-ignore
    mockedContext.account.getUTXOS = () => {
        // @ts-ignore
        return [new Transaction.UnspentOutput({
            "address": "yT6CTuQXY7BnMSxChpLUmsS1L8rtSDioq5",
            "txid": "a3fac795499cbc3fe5e7d3237f2b2188c975fc936a01ac57174b517873831feb",
            "vout": 0,
            "scriptPubKey": "76a9144a4777271b2eaeac9c2cc2984b6bf0a73940d5ea88ac",
            "amount": 10
        })];
    };
    // @ts-ignore
    mockedContext.client.applyStateTransition = (identityStateTransition) => {
        console.log({identityStateTransition})
    }
    it('should register an identity', async function () {
        const registered = await register.call(mockedContext, 'USER');
        expect(registered).to.deep.equal("n8rYJFT2P9ZYufgZvcpGzM7ZtDXtY8hRzP5YfuE8wsY");
        console.log(registered)
    });
});
