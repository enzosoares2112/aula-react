function ComponenciaCompetencia(props) {
    return (
        <div
        style={{
background:"#000",
color:"#fff",
width:"40%",
marginLeft:"30%"

        }}
        >
<div>{props.name}</div>
<div>{props.descricao}</div>
        </div>
    );
}

export {ComponenciaCompetencia };