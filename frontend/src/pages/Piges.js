import React from 'react';
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";


function Piges() {

    const navigate = useNavigate();

    const [pigesT, setPiges] = useState([]);
    const [idUser, setUserId] = useState(1);

    const [selectedPige, setSelectedPige] = useState(null);



    useEffect(() => {
        fetch(`http://localhost:9281/api/getListUserPigeFromIdUser?idUser=${idUser}`)
            .then(response => response.json())
            .then(data => setPiges(data))
            .catch(error => console.error(error))
    }, [idUser]);



    const handleClick = () => {
        navigate('/piges/creation-piges');
        alert('Button clicked');
        console.log('Button clicked')
    }

    const handlePigeClick = (pige) => {
        setSelectedPige(pige);
        navigate(`/piges/${pige.pige.pigeName}`, {state: {selectedPige: pige} });
        console.log(pige);
    }
    return (
        <div className='hero oui'>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card" onClick={handleClick} >
                            <div className="card-body" >
                                <h5 className="card-title">Créer une nouvelle pige</h5>
                                <p className="card-text"><i className="bi bi-plus-lg"></i></p>
                            </div>
                    </div>
                </div>

                {pigesT.map(pige => (
                    <div className="col" onClick={() => handlePigeClick(pige)}>
                        <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{pige.pige.pigeName}</h5>
                                    <p className="card-text">{pige.pige.pigeEndDate}</p>
                                </div>
                        </div>
                    </div>
                ))}
                {console.log(pigesT)}

            </div>
        </div>
    );
}

export default Piges;


/**
 * <div className="col">
 *                     <div className="card">
 *
 *                             <div className="card-body">
 *                                 <h5 className="card-title">Card title</h5>
 *                                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
 *                             </div>
 *                     </div>
 *                 </div>
 *                 <div className="col">
 *                     <div className="card">
 *
 *                             <div className="card-body">
 *                                 <h5 className="card-title">Card title</h5>
 *                                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
 *                             </div>
 *                     </div>
 *                 </div>
 *                 <div className="col">
 *                     <div className="card">
 *                             <div className="card-body">
 *                                 <h5 className="card-title">Card title</h5>
 *                                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
 *                             </div>
 *                     </div>
 *                 </div>
 */