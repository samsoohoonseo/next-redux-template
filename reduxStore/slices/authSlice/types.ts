export enum UserRole {
    ADMIN = 'ADMINISTRATOR',
    INVESTIGATOR = 'INVESTIGATOR',
    GUEST = 'guest',
}
export interface AuthState {
    userEmail: string | undefined
    userRole: UserRole | undefined
    accessToken: null | string
    logoutState: false | 'expired' | 'logout'
}
export interface AuthJwt {
    sub: number
    scopes: string[]
    exp: number
    userType: UserRole | UserRole.GUEST
}
