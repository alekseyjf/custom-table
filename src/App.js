import {useEffect, useState} from "react";
import './App.css';
// подключаем библиотеку Table
import {Table} from "table_library_by_alex";
import Services from "./services";

function App() {
    const services = Services.getInstance();

    const [table, setTable] = useState([]);
    const [table2, setTable2] = useState([]);

    const onEdit = (val) => {
        console.log(val);
    }
    const onAdd = (val) => {
        console.log(val);
    }
    const onRemove = (val) => {
        console.log(val);
    }

    useEffect(() => {
        services.getDefaultTable((data) => {
            setTable(data);
        });
        services.getCustomTable((data) => {
            setTable2(data);
        });
    }, []);

    return (
        <div className="App">
            <Table
                data={table}
                onAdd={onAdd}
                onEdit={onEdit}
                onRemove={onRemove}
            />
            <Table
                data={table2}
                onAdd={onAdd}
                onEdit={onEdit}
                onRemove={onRemove}
            />
        </div>
    );
}

export default App;
