import style from './style.module.css'

async function fetchUserAPI() {
    let data = await fetch("https://dummyjson.com/users")
    data = await data.json()
    return data.users
}

export default async function User() {

    let users = await fetchUserAPI()
    // console.log(users)
    return (
        <>
            <div className={style.container}>
                <h1 className={style.heading}>User Page</h1>
                <div>
                    {
                        users.map(user => (
                            <>
                                <div className={style.card}>
                                    <h2 className={style.card_title}>
                                        {user.firstName}
                                    </h2>
                                    <div>
                                        <div>
                                            <b>Username:</b> {user.username}
                                        </div>
                                        <div>
                                            <b>Email:</b> {user.email}
                                        </div>
                                        <div>
                                            <b>Phone:</b> {user.phone}
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}