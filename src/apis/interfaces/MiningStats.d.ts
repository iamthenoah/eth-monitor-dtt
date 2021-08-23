export interface MiningStats {
    time: number;
    reportedHashrate: number;
    currentHashrate: number;
    validShares: number;
    invalidShares: number;
    staleShares: number;
    lastSeen: number;
}
