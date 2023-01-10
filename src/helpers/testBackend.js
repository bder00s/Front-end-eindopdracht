import axios from "axios";

export async function testBackend() {
    try { const test = await axios.get('https://frontend-educational-backend.herokuapp.com/api/test/all');
        console.log(test)
    } catch (error) {
console.error(error)
    }
}