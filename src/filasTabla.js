
function TableRows({ filasDatos }) {
    return filasDatos.map((datos, index) => {
        const { num ,
        distancia,
        tiempo,
        velocidad} = datos;
        return (
            <tr key={index}>
                <td>{num}</td>
                <td>{distancia}</td>
                <td>{tiempo}   
                </td>
                <td>{velocidad}</td>
            </tr>
        );
    });
}
export default TableRows;
