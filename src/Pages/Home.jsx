import React from 'react';
import './Home.css'
import { useState } from 'react';
import CountryCard from '../Components/CountryCard';



function Home(props) {
    let[Code,SetCode] = useState("");
    let[Countries,SetCountries] = useState([]);
    let GetCountry=(event)=>{
        event.preventDefault();
        fetch(`https://restcountries.com/v3.1/currency/${Code}`).then((response)=>{
            return response.json();
        }).then((response)=>{
            console.log(response)
            if(response.status === 404){
                alert("Wrong Country Code")
            }
            else{
                SetCountries(response);
            }
        }).catch((error)=>{
            console.log(error);
        })
    }
return (
        <div className='home_main'>
            <div className='home_welcome_div'>
               <div className='home_welcometext_div'>
                    <div className='home_animation_div'>
                        <img src="https://i.pinimg.com/originals/5a/65/ee/5a65ee278cd557143f05a4ba91abbfa8.gif" alt="airplane" />
                    </div>
                    <h1>Welcome to World by Currency!</h1>
                    <p>Explore the globe through the lens of currencies with our interactive web app. Simply enter the name of a currency, and uncover a wealth of information about the country associated with it. From economic insights to cultural highlights, we've curated a comprehensive database to provide you with a fascinating journey into the diverse world of currencies.</p>
               </div>
               <div className='home_search_div'> 
                    <p>To unveil the mysteries of the world, please enter the currency code in the search box below. Our web app will then reveal insightful information about the country associated with the currency you're curious about. </p>
                    <form className='home_search_form' onSubmit={GetCountry}>
                        <input type="text" placeholder='Enter Currency Code' className='home_search_box' onChange={(event)=>{SetCode(event.target.value)}}/>
                        <input type="submit" value="Search" className='search_btn'/>
                    </form>
               </div>
            </div>
            <div className='country_cards_main'>
                {
                    Countries.map((elem,index)=>{
                        return <CountryCard key={index} Name={elem.name.common} Capital={elem.capital[0]} Currency={Code} Flag={elem.flags.png}/>
                    })
                }
                
            </div>
        </div>
    );
}

export default Home;