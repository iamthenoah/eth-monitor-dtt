import { MiningStats, Worker } from './MiningStats'

export interface Miner extends MiningStats {
    address: string;
    activeWorkers?: number;
    unpaid?: number;
    workers?: Worker[];
}
