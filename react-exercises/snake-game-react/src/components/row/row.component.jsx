import React from 'react';
import Cell from '../cell/cell.component';
import './row.styles.css';

const Row = ({ rowData }) => (
  <div className="row">
    {rowData.map((cell, index) => (
      <Cell key={index} cellData={cell} />
    ))}
  </div>
);

export default Row;
