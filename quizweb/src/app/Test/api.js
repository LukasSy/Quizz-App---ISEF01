import axios from "axios";
export async function fetchQuestion() {
    console.log('Fetching question...');

    const config = {
        method: 'get',
        url: 'http://quiztime.redirectme.net:56730/QuizTime/api/Quiz/testquestion',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT, DELETE",
            "Access-Control-Max-Age": "86400"
        },
        maxBodyLength: Infinity,
    };

    try {
        const response = await axios.request(config);
        console.log('API Response:', response.data);
        return response.data;
        /**return {
            "Id": 1,
            "question": "Welcher Studiengang existiert wirklich?",
            "answer1": "Bierseminar 101",
            "answer2": "Pausology",
            "answer3": "Wirtschaftsinformatik",
            "answer4": "Schnitzelkunde",
            "solution": "answer3"
        };
            */
    } catch (error) {
        console.error('Error in fetchQuestion:', error);
        throw new Error('Fehler beim Abrufen der Frage');
    }
}
