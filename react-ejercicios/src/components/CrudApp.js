import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import {useState} from "react";

const initialDb = [
    {id: 1, name: 'Seiya', constellation: 'Pegaso'},
    {id: 2, name: 'Shiryu', constellation: 'Dragón'},
    {id: 3, name: 'Hyoga', constellation: 'Cisne'},
    {id: 4, name: 'Shun', constellation: 'Andrómeda'},
    {id: 5, name: 'Ikki', constellation: 'Fénix'},
];
const CrudApp = () => {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);
    const createData = (data) => {
        data.id = Date.now();
        console.log(data);
        setDb([...db, data]);
    }
    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
    }
    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el regitro con el id '${id}'`);
        if (isDelete) {
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
        }
    }
    return (
        <>
            <h2>CRUD APP</h2>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit}
                      setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </>
    );
}
export default CrudApp;
