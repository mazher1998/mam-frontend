// import React from 'react'
// import { NavLink } from 'react-router-dom';

// import Pdata from './Pdata';
// import CardP from './CardP';
// import './Packagess.css';

// export const Services = () => {
//     return (
//     <section id= 'packages'>
    
//     <div className= "container-fluid mb-5" id= 'packages'  >

//         <div className='row'>
        
//         <div className='col-10 mx-auto'>
//             <div className='row gy-5 gx-5 ' >
//             {
//                 Pdata.map((val, index) => {
//                     return <CardP key={index} 
//                     imgsrc={val.imgsrc}
//                         title={val.title}
//                         link = {val.link}
//                         dis = {val.dis}
//                     />      
//                             })
//             }    
            
//         </div>

//             </div>
//             <h1 className='Packagess'>Our Packages</h1>
//         </div>
//         </div>

    


//     </section>
//     )
// }
// export default Services;



import React from 'react'


import Sdata from './Pdata';
import Card from './CardP';
import './Packagess.css';

export const Services = () => {
    return (
    <section id= 'services'>
    
    <div className= "container-fluid mb-5" id= 'Services' >

        <div className='row'>
        <div className='col-10 mx-auto'>
            <div className='row gy-5 gx-5' >
            {
                Sdata.map((val, index) => {
        return <Card key={index} 
        imgsrc={val.imgsrc}
            title={val.title}
            link = {val.link}
            dis = {val.dis}
        />      
                })
            }    
            
        </div>

            </div>
            <h1 className='Servicess'>Our Services</h1>
        </div>
        </div>

    


    </section>
    )
}
export default Services;
