import { useEffect,useState } from "react";
import axios from 'axios';
import User from "../../components/listUsers/User";

export default function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://mecadom.electroniqueclasse.com/api/users')
     .then(response => setData(response.data))
     .catch(error => console.error(error));
  }, []);

  if (!data) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="list flex flex-col gap-3">
                Chargement...
            </div>
        </div>
    );
  }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="list flex flex-col justify-center gap-3">
                <h2 className="my-5 text-3xl font-medium text-center">{data.length} Utilistateurs inscrits </h2>
                {data.map( (user) => (

                    <User key={user.id}
                        ID={user.id}
                        FirstName={user.first_name}
                        Email={user.email}
                    />

                ))}

            </div>
            
        </div>
    );
}
