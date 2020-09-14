import Axios from 'axios';

const defConfig = Axios.create({
  baseURL:"https://api.unsplash.com",
  headers:{
     Authorization: "Client-ID 49wNRVo1wsP4xoS1xmu3RZs6Kuy7QJnKnAoX0oNVu9k"
  }
});

export default async (term) =>{
  const response =await defConfig.get("/search/photos",{
    params:{query:term,per_page:100}
  });
  return (response.data.results);
}
