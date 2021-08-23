export interface User {
    userId: string;
    username: string;
    email: string;
    preferences: Preferences;
    miners: Miners[]
}
