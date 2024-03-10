// src/components/JsonNode.js
import React from 'react';

const JsonNode = ({ data }) => {
  return (
    <div className="json-node">
      <h2>ID: {data.id}</h2>
      <p>Nombre: {data.nombre}</p>
      <p>Altura: {data.altura}</p>
      <p>Departamento: {data.departamento}</p>
      <img src={data.imagen} alt={`Imagen de ${data.nombre}`} />
      <p>Características: {data.caracteristicas.join(', ')}</p>
    </div>
  );
};

export default JsonNode;
