import React, {useState} from 'react';

const App = () => {
    const [city, setCity] = useState(['Dhaka','Rangpur','Chittagong','Sylhet','Pabna']);
    return (
        <div>
            <ul>
                {
                    city.map((item,i)=>{
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default App;