import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [medicines, setMedicines] = useState([]);

    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    // console.log(services)

    useEffect(()=>{
        fetch('/doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[]);

    useEffect(()=>{
        fetch('/medicines.json')
        .then(res => res.json())
        .then(data => setMedicines(data))
    },[])

    return {
        services,
        doctors,
        medicines
    };
    
}
export default useServices;