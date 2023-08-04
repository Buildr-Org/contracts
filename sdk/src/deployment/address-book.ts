import { AssertionError } from 'assert'
import fs from 'fs'
import { assertObject } from '../utils/assertions'

import type { AddressBookJson, AddressBookEntry } from './types/address-book'

/**
 * A class to manage the address book
 */
export class AddressBook {
  // The path to the address book file
  public file: string

  // The chain id of the network the address book should be loaded for
  public chainId: string

  // The raw contents of the address book file
  public addressBook: AddressBookJson

  /**
   * Constructor for the `AddressBook` class
   *
   * @param _file the path to the address book file
   * @param _chainId the chain id of the network the address book should be loaded for
   *
   * @throws AssertionError if the target file is not a valid address book
   * @throws Error if the target file does not exist
   */
  constructor(_file: string, _chainId: string | number) {
    this.file = _file
    this.chainId = typeof _chainId === 'number' ? _chainId.toString() : _chainId

    if (!fs.existsSync(this.file)) throw new Error(`Address book path provided does not exist!`)

    // Ensure file is a valid address book
    this.addressBook = JSON.parse(fs.readFileSync(this.file, 'utf8') || '{}')
    assertAddressBookJson(this.addressBook)

    // If the address book is empty for this chain id, initialize it with an empty object
    if (!this.addressBook[this.chainId]) {
      this.addressBook[this.chainId] = {}
    }
  }

  /**
   * List entry names in the address book
   *
   * @returns a list with all the names of the entries in the address book
   */
  listEntries(): Array<string> {
    return Object.keys(this.addressBook[this.chainId])
  }

  /**
   * Get an entry from the address book
   *
   * @param name the name of the contract to get
   * @returns the address book entry for the contract
   * Returns an empty address book entry if the contract is not found
   */
  getEntry(name: string): AddressBookEntry {
    try {
      return this.addressBook[this.chainId][name]
    } catch (e) {
      // TODO: should we throw instead?
      // We could use ethers.constants.AddressZero but it's a costly import
      return { address: '0x0000000000000000000000000000000000000000' }
    }
  }

  /**
   * Save an entry to the address book
   *
   * @param name the name of the contract to save
   * @param entry the address book entry for the contract
   */
  setEntry(name: string, entry: AddressBookEntry): void {
    this.addressBook[this.chainId][name] = entry
    try {
      fs.writeFileSync(this.file, JSON.stringify(this.addressBook, null, 2))
    } catch (e) {
      console.log(`Error saving artifacts: ${e.message}`)
    }
  }
}

function assertAddressBookJson(json: unknown): asserts json is AddressBookJson {
  assertObject(json)

  for (const chainId of Object.keys(json)) {
    const contractList = json[chainId]
    assertObject(contractList)

    const contractNames = Object.keys(contractList)
    for (const contractName of contractNames) {
      assertAddressBookEntry(contractList[contractName])
    }
  }
}

function assertAddressBookEntry(json: unknown): asserts json is AddressBookEntry {
  assertObject(json)

  if (typeof json.address !== 'string') throw new AssertionError({ message: 'Invalid address' })
  if (json.constructorArgs && !Array.isArray(json.constructorArgs))
    throw new AssertionError({ message: 'Invalid constructorArgs' })
  if (json.initArgs && !Array.isArray(json.initArgs))
    throw new AssertionError({ message: 'Invalid initArgs' })
  if (json.creationCodeHash && typeof json.creationCodeHash !== 'string')
    throw new AssertionError({ message: 'Invalid creationCodeHash' })
  if (json.runtimeCodeHash && typeof json.runtimeCodeHash !== 'string')
    throw new AssertionError({ message: 'Invalid runtimeCodeHash' })
  if (json.txHash && typeof json.txHash !== 'string')
    throw new AssertionError({ message: 'Invalid txHash' })
  if (json.proxy && typeof json.proxy !== 'boolean')
    throw new AssertionError({ message: 'Invalid proxy' })
  if (json.implementation && typeof json.implementation !== 'object')
    throw new AssertionError({ message: 'Invalid implementation' })
  if (json.libraries && typeof json.libraries !== 'object')
    throw new AssertionError({ message: 'Invalid libraries' })
}
