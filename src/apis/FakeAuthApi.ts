import { v4 as uuidv4 } from 'uuid'
import { Miner, User } from './interfaces'
import { randomInt } from './util'

export type UserCredentials = { email: string; password: string }
export type RegisterPayload = { email: string; passwords: string[] }

export const fakeLoginApiCall = async (payload: UserCredentials) : Promise<User> => {
    return await fakeAuthApi(payload)
}

export const fakeRegisterApiCall = async (payload: RegisterPayload) : Promise<User> => {
    const { email, passwords } = payload
    return await fakeAuthApi({ email, password: passwords[0] })
}

export const fakeLogoutApiCall = async () : Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return await new Promise((resolve, reject) => setTimeout(resolve, 1000))
}

const fakeAuthApi = async (credentials: UserCredentials) : Promise<User> => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!credentials.email || !credentials.password) {
                reject(new Error('Invalid email or password.'))
            } else {
                const colors = ['blue', 'red', 'green', 'orange', 'purple', 'salmon']
                const modes = ['light', 'dim', 'dark']

                const miners = []
                for (const add of getRandomAddresses()) {
                    miners.push({ address: add })
                }

                const user: User = {
                    userId: uuidv4(),
                    username: credentials.email.split('@')[0],
                    email: credentials.email,
                    miners: miners as Miner[],
                    preferences: {
                        theme: {
                            color: colors[Math.floor(Math.random() * modes.length)],
                            mode: modes[Math.floor(Math.random() * colors.length)]
                        }
                    }
                } as User

                resolve(user)
            }
        }, randomInt(1000, 3000))
    })
}

export const getRandomAddresses = (count: number = randomInt(1, randomAddresses.length - 1)) : string[] => {
    const addresses: string[] = []
    for (let i = 0; i < count; i++) {
        const add = randomAddresses[randomInt(0, randomAddresses.length - 1)]
        if (!addresses.includes(add)) addresses.push(add)
    }
    return addresses
}

const randomAddresses = [
    '0xe3fbf80f9a8f69f68f09a87a4f10f9a5f7ccc973',
    '0xa9bd39ca471ba4e32c9089a6cf9c08bceaeeceb4',
    '0xF0e723a27c3599785D54F42dceB3F2B11d9aBD8a',
    '0x2EcAa43CCA29084Ae124F3DAe93a1DC9Fed8d9c1',
    '0xF0e723a27c3599785D54F42dceB3F2B11d9aBD8a',
    '0x62d32819fb87a8e43d717f7e8b36d9b288610bd9',
    '0x7fC63A800c6233c941fc3E8A425d5707cA69742a',
    '0x00a5c79ee25d06d1e179ea1fd0cb29530b107aec',
    '0x44486cf4BbDE21f9a15b2B69b78076D98B4fDDb0',
    '0x8eeE25Cbc7Aa3082B743eABF4bE39691B4AFe6aF',
    '0xcbc7a4f83203097fde8d03f376c8aa30987a5eb2',
    '0x00d4405692b9F4f2Eb9E99Aee053aF257c521343'
]
