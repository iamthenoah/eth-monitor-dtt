import { MiningStats } from './MiningStats'

export interface Worker extends MiningStats {
    averageHashrate: number;
    worker: string;
}
