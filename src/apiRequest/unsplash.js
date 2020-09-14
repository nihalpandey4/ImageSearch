import Axios from 'axios';

const defConfig = Axios.create({
  baseURL:"https://api.unsplash.com",
  headers:{
     Authorization: "Client-ID MSnW8LaigEr3oXlCm8sQbdFb-B9bIQZNgPE_MdckF2g"
  }
});

export default async (term) =>{
  const response =await defConfig.get("/search/photos",{
    params:{query:term,per_page:100}
  });
  return (response.data.results);
}
