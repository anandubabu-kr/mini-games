import React from 'react'
import { NavContainer } from '../design/main'
import avatar from  '../assets/avatar.png'
export const NavBar = () => {
    return (
        <NavContainer>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#96e072">
                    <path d="M24 24q0-4.55 3.225-7.775Q30.45 13 35 13q4.55 0 7.775 3.225Q46 19.45 46 24ZM13 35q-4.55 0-7.775-3.225Q2 28.55 2 24h22q0 4.55-3.225 7.775Q17.55 35 13 35Zm11-11q-4.55 0-7.775-3.225Q13 17.55 13 13q0-4.55 3.225-7.775Q19.45 2 24 2Zm0 22V24q4.55 0 7.775 3.225Q35 30.45 35 35q0 4.55-3.225 7.775Q28.55 46 24 46Z" />
                </svg>
                <p>
                    Bambooo
                </p>
            </div>
            <div>
                <img src={avatar} alt='User'/>
            </div>
        </NavContainer>
    )
}
