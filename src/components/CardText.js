import React from 'react'
import text from './json-data/text'

// This CardText component is used in HomePage component
const CardText = () => {
    return (
        <>
            <div className="row">
                {text.map((item,index) => (
                    <div className="col-lg-6 mb-4" key={index}>
                        <div className={item.classname}>
                            <div className="card-body">
                                {item.title}
                                <div className="text-white-50 small">{item.text}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
        
    )
}

export default CardText
