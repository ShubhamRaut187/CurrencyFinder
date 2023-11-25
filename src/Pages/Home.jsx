import React from 'react';
import './Home.css'
import { useState } from 'react';
import CountryCard from '../Components/CountryCard';
import Plane from "../Images/Plane.gif"
import NotFound from '../Components/NotFound';
import Loading from '../Components/Loading';
import { useSelector,useDispatch } from 'react-redux';
import { handelRequesting,handelRequestSuccess,handelRequestFail } from '../Redux/action';
import Clear from '../Components/Clear';

function Home(props) {
    let[Code,SetCode] = useState("");
    let dispatch = useDispatch();
    
    let Status=useSelector((store)=>{
        return store.Status
    })
    let Countries=useSelector((store)=>{
        return store.Countries
    })
 
    
    let GetCountry=(event)=>{
        event.preventDefault();
        dispatch(handelRequesting());
        
        if(Code.length !== 3){
            alert("Wrong currency code, must be of three letters ")
            dispatch(handelRequestFail())
            return
        }
        
        fetch(`https://restcountries.com/v3.1/currency/${Code}`).then((response)=>{
            return response.json();
        }).then((response)=>{
            // console.log(response)
            if(response.status === 404 || response.message === "Page Not Found"){
                alert("Wrong Country Code")
                dispatch(handelRequestFail())
            }
            else{
                dispatch(handelRequestSuccess(response))
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
                        <img src={Plane} alt="airplane" />
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
                    
                    {
                        Status === "RequestSuccess" ? <Clear/> : <p>All the countries using above currency will be displayed below.</p>
                    }
               </div>
            </div>
            {/* {
                 Countries.length > 0 ? 
                    <div className='country_cards_main'>
                        {
                            Countries.map((elem,index)=>{
                                 return <CountryCard key={index} Name={elem.name.common} Capital={elem.capital[0]} Region={elem.region} Flag={elem.flags.png}/>
                            }) 
                        } 
                    </div> :<NotFound/>
            } */}
            {
                
                Status === "Requesting" ? <Loading/> : Status === "RequestSuccess" ? 
                <div className='country_cards_main'>
                {
                    Countries.map((elem,index)=>{
                         return <CountryCard key={index} Name={elem.name.common} Capital={elem.capital[0]} Region={elem.region} Flag={elem.flags.png}/>
                    }) 
                } 
                </div> : <NotFound/>
            }
        </div>
    );
}

export default Home;