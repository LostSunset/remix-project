import * as packageJson from '../../../../../package.json'
import React from 'react' // eslint-disable-line
import { ethers } from 'ethers'
import { ExternalHttpProvider } from './external-http-provider'

const profile = {
  name: 'hardhat-provider',
  displayName: 'Hardhat Provider',
  kind: 'provider',
  description: 'Hardhat provider',
  methods: ['sendAsync', 'displayName'],
  version: packageJson.version
}

export class HardhatProvider extends ExternalHttpProvider {
  constructor (blockchain) {
    super(profile, blockchain)
  }

  displayName () { return profile.displayName }

  body (): JSX.Element {
    return (
      <div> Note: To run Hardhat network node on your system, go to hardhat project folder and run command:
        <div className="p-1 pl-3"><b>npx hardhat node</b></div>       
        <div className="pt-2 pb-4">
          For more info, visit: <a href="https://hardhat.org/getting-started/#connecting-a-wallet-or-dapp-to-hardhat-network" target="_blank">Hardhat Documentation</a>
        </div>
        <div>Hardhat JSON-RPC Endpoint:</div>
      </div>
    )
  }

  instanciateProvider (value): any {
    return new ethers.providers.JsonRpcProvider(value)
  }
}