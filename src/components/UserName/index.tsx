import React, { useState } from 'react'

import './userName.css'

type PropsUserName = {
    setName: React.Dispatch<React.SetStateAction<string>>
}

function UserName(props: PropsUserName) {

    const [name, setName] = useState<string>("");

    const onSaveName = (name: string) => {
        props.setName(name);
    }

    const onSubmitForm = (ev: any) => {
        ev.preventDefault();
        const nameValue = ev.target[0].value;
        onSaveName(nameValue);
        setName(nameValue);
    }

    return (
        <div className='Container-user-name'>
            <div className="Card-user">
                <h3
                    style={{ marginTop: "auto" }}
                >Defina seu nome</h3>

                <div className='Card-user-Content'>
                    <form
                        className='Form-name'
                        method="post"
                        onSubmit={onSubmitForm}
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder='Nome:'
                            required
                        />
                        <input
                            placeholder='Entrar'
                            className='meu-botao'
                            type="submit"
                            value="Entrar"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserName

