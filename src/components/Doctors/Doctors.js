import React from 'react';
import useServices from '../../Hooks/useServices';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const {doctors} = useServices();
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 container mx-auto mt-5 p-3 g-4">
            {
                doctors?.map(doctor => <Doctor
                key={doctor.id}
                doctor={doctor}
                ></Doctor>)
            }
        </div>
    );
};

export default Doctors;