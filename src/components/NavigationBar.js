import React from 'react';
import {Link} from 'react-router-dom';
const NavigatorBar = ({items}) => {
    return (
        <nav>
            <ul>
                {/* El componente link se ocupa para las rutas personales, si quieres usar rutas externas a tu codigo ocua la etiqueta "<a>" */}
                <li>
                    <Link to="/">Home</Link>
                </li>
                {items.map((value) => (
                    <li>
                        <Link to={value.path}>{value.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default NavigatorBar;