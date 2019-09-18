import axios from 'axios';

export default async (dept)=>{
    const getDairyUrl = `${window.apiHost}/dairy-inv`
    const data = await axios.get(getDairyUrl);
    return {
        type: `getInv-${dept}`,
        payload: data
    }
}
