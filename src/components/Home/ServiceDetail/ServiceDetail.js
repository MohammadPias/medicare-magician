import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../../Hooks/useServices'

const ServiceDetail = () => {
    const { userId } = useParams();
    const { services } = useServices();
    const singleService = services?.find(service => service.id === parseInt(userId));

    console.log(singleService);
    // const { name, info, time, img } = singleService;


    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <div className="card mb-3" style={{ width: '75%', backgroundColor: '#F8F5F2' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={singleService?.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{singleService?.name}</h5>
                                <p className="card-text">{singleService?.info}</p>
                                <h6 className="card-text">Time: {singleService?.time}</h6>
                                <h6 className="card-text">Consulting fee: ${singleService?.fee}</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-75 mx-auto p-5 rounded border" style={{ backgroundColor: '#F8F5F2' }}>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress2" className="form-label">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label for="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceDetail;