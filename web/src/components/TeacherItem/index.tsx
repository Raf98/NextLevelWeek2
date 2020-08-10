import React from 'react';

import './styles.css';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

export default function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/20431901?s=460&v=4" alt="User" />
                <div>
                    <strong>
                        Rafael
                            </strong>
                    <br />
                    <span>
                        Computação
                            </span>
                </div>
            </header>

            <p>
                Aulas de programação em C/C++ e Java.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={wppIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
};