
export const saveToken = (token: string) => {
    localStorage.setItem('token', token );
}

export const setUser = (user:User) => {
    localStorage.setItem('user',JSON.stringify(user))
}

type User = {
    role : string
}

export const getUser = () => (JSON.parse( localStorage.getItem('user') || '{}' ))

export const getRole = () => {
    const user = getUser();
    if(user && user.role){
        return user.role[0]
    }
    return ''
}

export const isAuth = () => {
    const user = getUser();
    return (!!user)
}