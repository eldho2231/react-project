import React from 'react'
import './Plans.css'

function Plans() {
    const pricingData=[
        {
            title:'Regular Member',
            price:'$0',
            duration:'/month',
            color:'#fff',
            features:[
                'Limited access to courses',
                'Customer Support',
                
                '2 Classes Per week'
            ]
        },

        {
            title:'Premium Member',
            price:'$100',
            duration:'/month',
            color:'#6f55f2',
            features:[
                'Unlimited access to courses',
                'Customer Support',
                'Personal Mentor',
                '10 Classes Per week'
            ]
        },

        {
            title:'Standard Member',
            price:'$10',
            duration:'/month',
            color:'#fff',
            features:[
                'Unlimited access to courses',
                'Customer Support',
                
                '3 Classes Per week'
            ]
        },


    ]
  return (
    <div className='container'>
        <div className='pricing_top'>
            <h2 className='section_title'>Premium Pricing Plans
            </h2>
            <p>Unlock the elite tech services with our Premium Plan
            </p>
        </div>
        <div className='pricing_wrapper'>
            {pricingData.map((pricingItem,index)=>(
                <div className='pricing_item' key={index}>
                    <div className='pricing_card-top' style={{background:pricingItem.color}}>
                        <h2 className='section_title'>{pricingItem.title}</h2>
                        <h2 className='pricing_section_title'>
                            {pricingItem.price}<span>{pricingItem.duration}</span>
                        </h2>
                    </div>
                    <div className='services'>
                        <ul>
                            {pricingItem.features.map((feature,index)=>(
                                <li key={index}>{feature}</li>

                            ))}
                        </ul>
                        <button className='register_btn'>Join</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans