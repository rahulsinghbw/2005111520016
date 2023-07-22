import client from './client';

const getTrains = async () => {
    try {
        const { data } = await client.get("/trains");

        return data;
    } catch(error) {
        return error;
    }
}

export default getTrains;