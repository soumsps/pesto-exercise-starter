import React from 'react';
import './cell.styles.css';

const Cell = ({ cellData }) => <div className={`${cellData.class} ${cellData.type}`}></div>;

export default Cell;
