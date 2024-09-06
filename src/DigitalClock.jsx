import React, { useState, useEffect } from 'react';

function DigitalClock(){

    const [time, setTime] = useState(new Date());

///          function , [dependencies]
    useEffect(() =>{               /// callback
        const intervalId = setInterval(() => {
            setTime(new Date()); // after every second we will update the time with new/current time every seccond minute hour
        }, 1000);

        //Clean up
        return () => {
            clearInterval(intervalId); // when we unmount the component clear that interval CLEAN UP
        }
    }, []);


    // function for hours minutes seconds
    function formatTime(){  // no parameters
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "P.M" : "A.M";   // A.M or P.M   - Military time

        hours = hours % 12 || 12; //kung ayaw ng Military time use this 

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    //function para sa single digit sa Seconds may 0
    function padZero (number){
        return (number < 10 ? "0" : "") + number;

    }


    //---------------------------------------------------MILITARY TIME
    function formatTime1(){  // no parameters
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "P.M" : "A.M";   // A.M or P.M   - Military time

        // hours = hours % 12 || 12; //kung ayaw ng Military time use this 

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }



    
    return(
        <div className='clock-container'>
            <div className='clock'>
                <span>{formatTime()}</span>
            </div>

            <div className='clock' style={{padding: 30}}>
                <span>{formatTime1()}</span>
            </div>

        </div>
    );

}


export default DigitalClock;