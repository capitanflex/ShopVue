import axios from "axios";

export class PostService{
    static fetchPosts = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: 4
                }
            });
            return response.data;

        }
        catch (e){
            console.log(e)
        }
    };


}



