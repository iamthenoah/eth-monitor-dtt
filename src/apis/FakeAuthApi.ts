import { v4 as uuidv4 } from 'uuid'
import { Miner, User } from './interfaces'
import { randomInt } from './util/Format'

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
    '0xf386faD96c429feA836Df329AD79875E2d031dA0',
    '0xA797FAb85521F8DDBD6EFD5Ed26608515ACE8F8E',
    '0x62d32819fb87a8e43d717f7e8b36d9b288610bd9',
    '0x7fC63A800c6233c941fc3E8A425d5707cA69742a',
    '0x6289A33Be20d126231D1EffA37CC116835E7d260',
    '0x0A8F78e6CD2Fd5Ae5d5c34a1ac98840bb76ce1B4',
    '0x00a5c79ee25d06d1e179ea1fd0cb29530b107aec',
    '0x312f6bd8451ae4ee8f46abd124c4f9e9da3adf5a',
    '0x44486cf4BbDE21f9a15b2B69b78076D98B4fDDb0',
    '0x8eeE25Cbc7Aa3082B743eABF4bE39691B4AFe6aF',
    '0x20189eaF9852abC59da211002EFab03c19E98246',
    '0xf0dea9a710abd5b16f4c9aff4497ec73a8500f22',
    '0xcbc7a4f83203097fde8d03f376c8aa30987a5eb2',
    '0x00d4405692b9F4f2Eb9E99Aee053aF257c521343'
]
