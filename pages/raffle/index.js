import 'app/global.css'
import co from 'counter.json'
import { React, useState } from './react'
// import axios from 'node_modules/axios';


export default function RaffleUpdate() {
    // async function getUpdate() {
    //     const res = await axios.post('https://europe-west3-tayau-7ff18.cloudfunctions.net/retCounter');
    //     updateCounter(res.data);
    // }
    // getUpdate();
    let [counter, updateCounter] = useState(co["count"])
    return <div className="w-[100%] h-[100%] fixed flex flex-col p-[20px] items-center justify-center">
        <div className="text-orange text-[30px] text-bold">Solar Car Horror Movie Night Raffle</div>
        <div className="h-[20px]"></div>
        <div className="text-[30px]">Current Raffle</div>
        <div className="text-[60px]">{`${counter * 5} $`}</div>
        <div className="h-[20px]"></div>
        <div className="text-white text-[20px]">1 ticket = 5$</div>
        <div className="h-[20px]"></div>
        <div className="h-[320px] w-[300px] rounded-lg object-cover overflow-hidden">
            <img src="https://i.imgur.com/OaQ8ctW.png" className="h-[320px] w-[300px] object-cover"></img>
        </div>
    </div>;
}