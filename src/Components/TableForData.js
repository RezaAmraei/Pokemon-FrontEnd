import React from "react";
import UpperCaseFirstLetter from "../Utils/UpperCaseFirstLetter";
import "../CSS/TableForData.css";

export default function BasicTable({
  name,
  caption,
  types,
  tableHeader,
  data,
  map,
}) {
  if (caption == "Information") console.log(data);

  return (
    <table className="tableForData">
      <caption className={types[1]}>
        <span className={types[0]}>{UpperCaseFirstLetter(name)}</span> {caption}
      </caption>
      <thead>
        <tr className={types[0]}>
          {tableHeader.map((header, i) => {
            return <th key={i}>{Object.keys(header)}</th>;
          })}
        </tr>
        {map ? (
          data.map((information) => {
            return <tr></tr>;
          })
        ) : (
          <tr className={types[1]}>
            {data.map((dataEntry, i) => {
              return <td key={i}>{dataEntry.base_stat}</td>;
            })}
          </tr>
        )}
      </thead>
    </table>
  );
}
