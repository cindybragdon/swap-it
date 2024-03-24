import React from 'react';
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import BackToTopButton from "../components/BackToTopButton";



function Piges() {


    const navigate = useNavigate();

    const [listUserPige, setListUserPige] = useState([]);
    const [idUser, setUserId] = useState(1);

    const [selectedPige, setSelectedPige] = useState(null);


    //Olivier :
    //https://designcode.io/react-hooks-handbook-fetch-data-from-an-api


    useEffect(() => {
        const url = `http://localhost:9281/api/getListUserPigeFromIdUser?idUser=${idUser}`;

        const fecthData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setListUserPige(data);

            } catch (error) {
                console.log("error", error);
            }
        }
        fecthData();
    }, []);


    const handleClick = () => {
        navigate('/piges/creation-piges');
        alert('Button clicked');
        console.log('Button clicked')
    }

    const handlePigeClick = (userPige) => {
        setSelectedPige(userPige);
        navigate(`/piges/${userPige.pige.pigeName}`, {state: userPige});
        console.log(userPige);
    }





    return (
        <div className='renderingElement oui'>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card" onClick={handleClick} >
                            <div className="card-body" >
                                <h5 className="card-title">Créer une nouvelle pige</h5>
                                <p className="card-text"><i className="bi bi-plus-lg"></i></p>
                            </div>
                    </div>
                </div>


                {listUserPige.map(userPige =>
                        <div className="col" onClick={() => handlePigeClick(userPige)}>
                            <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{userPige.pige.pigeName}</h5>
                                        <p className="card-text">{userPige.pige.pigeEndDate}</p>
                                        {console.log(userPige[0])}
                                    </div>
                            </div>
                        </div>
                )}






            </div>
            <BackToTopButton />
        </div>
    );
}

export default Piges;