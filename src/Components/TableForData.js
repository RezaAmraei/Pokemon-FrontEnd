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
  return (
    <table className={`tableForData table_${caption}`}>
      <caption className={types[1]}>
        <span className={types[0]}>{UpperCaseFirstLetter(name)}'s</span>{" "}
        {caption}
      </caption>
      <tbody className={caption}>
        {!map && (
          <tr className={`${types[0]} ${caption}`}>
            {tableHeader.map((header, i) => {
              return <th key={i}>{Object.keys(header)}</th>;
            })}
          </tr>
        )}
        {map ? (
          <>
            <tr>
              <td className={types[0]}>Type(s)</td>
              <td className={types[1]}>{data[0]["Type(s)"][0]}</td>
              <td className={types[1]}>
                {data[0]["Type(s)"][1] ? (
                  data[0]["Type(s)"][1]
                ) : (
                  <span> &nbsp;</span>
                )}
              </td>
            </tr>
            <tr>
              <td className={types[0]}>Move(s)</td>
              <td className={types[1]}>{data[1]["Move(s)"][0]}</td>
              <td className={types[1]}>{data[1]["Move(s)"][1]}</td>
              <td className={types[1]}>{data[1]["Move(s)"][2]}</td>
              <td className={types[1]}>{data[1]["Move(s)"][3]}</td>
            </tr>
            <tr>
              <td className={types[0]}>Abilitie(s)</td>
              <td className={types[1]}>{data[2]["Abilitie(s)"][0]}</td>
              <td className={types[1]}>
                {data[2]["Abilitie(s)"][1] ? (
                  data[2]["Abilitie(s)"][1]
                ) : (
                  <span> &nbsp;</span>
                )}
              </td>
              <td className={types[1]}>
                {data[2]["Abilitie(s)"][2] ? (
                  data[2]["Abilitie(s)"][2]
                ) : (
                  <span> &nbsp;</span>
                )}
              </td>
              <td className={types[1]}>
                {data[2]["Abilitie(s)"][3] ? (
                  data[2]["Abilitie(s)"][3]
                ) : (
                  <span> &nbsp;</span>
                )}
              </td>
            </tr>
          </>
        ) : (
          <tr className={types[1]}>
            {data.map((dataEntry, i) => {
              return <td key={i}>{dataEntry.base_stat}</td>;
            })}
          </tr>
        )}
      </tbody>
    </table>
  );
}
