import axios from 'axios'
import EthPrice from 'get-eth-price'
import { Miner, MiningStats, Worker } from './interfaces'

const getEthermineData = async (uris: string[]) : Promise<Record<string, unknown>> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!uris) reject(new Error('Invalid mining address provided.'))

            const ethermine = 'https://api.ethermine.org/'
            const url = 'https://cors-anywhere-app.herokuapp.com/' + ethermine + uris.join('/')

            axios.get(url)
                .then(res => { resolve(res.data.data) })
                .catch((err: Error) => { reject(err) })
        }, 1000)
    })
}

export const fetchWorkers = async (address: string) : Promise<Worker[]> => {
    const data = await getEthermineData(['miner', address, 'workers'])
    if (!data) throw new Error('Could not fetch Worker data.')
    return data as unknown as Worker[]
}

export const fetchWorkerStats = async (address: string, worker: string) : Promise<MiningStats> => {
    const data = await getEthermineData(['miner', address, 'worker', worker, 'currentStats'])
    if (!data) throw new Error('Could not fetch Worker statistics.')
    return data as unknown as MiningStats
}

export const fetchMiner = async (address: string) : Promise<Miner> => {
    const data = await getEthermineData(['miner', address, 'dashboard'])
    if (!data) throw new Error('Could not fetch Miner data.')
    const stats: MiningStats = data.currentStatistics as MiningStats
    const workers: Worker[] = data.workers as Worker[]
    return { address, workers, ...stats } as Miner
}

export const Currencies = ['ETH', 'BTC', 'USD', 'EUR', 'AUD', 'CHF', 'CAD', 'GBP']
export type Currency = typeof Currencies[number]

export const fetchEthValueByCurrency = async (currency: Currency) : Promise<[Currency, number]> => {
    /* eslint-disable */

    const res = await EthPrice.getEthPriceNow() as Record<string, any>
    const data: Record<Currency, number> = Object.values(res)[0]['ETH']

    data['ETH'] = 1 // add default ETH multiplier

    // return currency provided from paramters & its corresponding value
    return [currency, data[currency] || data['ETH']]
}
