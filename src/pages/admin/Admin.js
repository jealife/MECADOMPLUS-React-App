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
            <div className="list flex flex-col gap-3">
                {data.map( (user) => (

                    <User key={user.id}
                        ID={user.id}
                        FirstName={user.full_name}
                        Email={user.email}
                    />

                ))}
            </div>
        </div>
    );
}
