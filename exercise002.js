import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData =async (apiEndPoint) => {
 try
 {  const response =await fetch(apiEndPoint);
    if(!response.ok){
      throw new error(' HTTP ERROR!');
      }  
   const json = await response.json();
   console.log(json);
    }
    catch(error){
    console.log('An Error Occured',error);
    }

};

fetchData(jsonTypicode);
