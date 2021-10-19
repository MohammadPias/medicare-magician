import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Medicine from '../Medicine/Medicine';

const MedicineShop = () => {
    const { medicines } = useServices();
    return (
        <Container className="my-5 py-5">
            <Row xs={1} md={2} className="g-4">
                    {
                        medicines?.map(medicine => <Medicine
                        key={medicine.id}
                        medicine={medicine}
                        ></Medicine>)
                    }
            </Row>
        </Container>
    );
};

export default MedicineShop;