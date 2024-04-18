import React from "react";

const noteList = {
    listStyleType: "none",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "0px",
    margin: "0px",
}

const notaDiseno = {
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb",
    color: "#000000",
    width: "100px",
    height: "100px",
    padding: "10px",
    margin: "10px",

}

const Nota = ({ nota }) => {
    return(
        <ul style={noteList}>
            {nota.map((nota) => (
                <li key={nota.id} style={notaDiseno}>{nota.content}</li>
            ))
            }
        </ul>

    )
}

export default Nota;