import {useEffect, useState} from "react";

const initialForm = {name: '', constellation: '', id: null};
const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {

    const [form, setForm] = useState(initialForm);

    // Ejecutar esta funcion de efecto cuando la variable dataToEdit haya cambiado
    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit)
        } else {
            setForm(initialForm);
        }
    }, [dataToEdit]);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.constellation) {
            alert('Datos incompletos');
            return;
        }
        if (form.id === null) {
            createData(form);
        } else {
            updateData(form);
        }
        handleReset();
    }
    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    }
    return (
        <div>
            <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
            <form>
                <input type="text" name="name" placeholder="Nombre" value={form.name} onChange={handleChange}/>
                <input type="text" name="constellation" placeholder="Contelación" value={form.constellation}
                       onChange={handleChange}/>
                <input type="submit" value="Enviar" onClick={handleSubmit}/>
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </div>
    );
}
export default CrudForm;
