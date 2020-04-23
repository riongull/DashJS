import 'mocha';
import create from "../documents/create";
import {expect} from "chai";

describe('Client - Platform - Documents - .create()', () => {
    it('should create a document', async function () {
        let profile: Promise<any>;
        const mockedContext = {
            apps : {
                dpns: {
                    contractId: '77w8Xqn25HwJhjodrHW133aXhjuTsTv9ozQaYpSHACE3'
                },
                dashpay:{
                    contractId: '77w8Xqn25HwJhjodrHW133aXhjuTsTv9ozQaYpSHACE4'
                }
            },
            contracts:{
              get:(contractId)=>{

              }
            }
        };
        const identity = null;
        // @ts-ignore
        profile = create.call(mockedContext, 'dashpay.profile', identity, {
            avatarUrl: 'http://test.com/bob.jpg',
            about: 'This is story about me',
        });
        console.log(profile)

    });

});
