import React from 'react';
import './CountryCard.css'
function CountryCard({Name,Capital,Region,Flag}) {
    return (
        <div className='country_card'>
            <div className='flag_div'>
                <img src={Flag} alt="India" />
            </div>
            <div className='card_info_div'>
                <p className='country_name'>Name:{Name}</p>
                <p className='country_capital'>Capital:{Capital}</p>
                <p className='country_currency'>Region:{Region}</p>
            </div>
        </div>
    );
}

export default CountryCard;