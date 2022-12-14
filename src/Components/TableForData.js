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
  console.log(caption);
  return (
    <table className="tableForData">
      <caption className={types[1]}>
        <span className={types[0]}>{UpperCaseFirstLetter(name)}</span> {caption}
      </caption>
      <tbody>
        <tr className={`${types[0]} ${caption}`}>
          {tableHeader.map((header, i) => {
            return <th key={i}>{Object.keys(header)}</th>;
          })}
        </tr>
        {map ? (
          <>
            <tr>
              <td>x1</td>
              <td>x2</td>
              <td>x3</td>
              <td>x4</td>
              <td>x5</td>
            </tr>
            <tr>
              <td>y1</td>
              <td>y2</td>
              <td>y3</td>
              <td>y4</td>
              <td>y5</td>
            </tr>
            <tr>
              <td>z1</td>
              <td>z2</td>
              <td>z3</td>
              <td>z4</td>
              <td>z5</td>
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

/*
 <tr>
              <td className={types[1]}>{data[0]["Type(s)"][0]}</td>
              <td className={types[1]}>{data[1]["Move(s)"][0]}</td>
              <td className={types[1]}>{data[2]["Abilitie(s)"][0]}</td>
            </tr>
            <tr>
              <td className={types[1]}>
                {data[0]["Type(s)"][1] ? (
                  data[0]["Type(s)"][1]
                ) : (
                  <span> &nbsp;</span>
                )}
              </td>
              <td className={types[1]}>{data[1]["Move(s)"][1]}</td>
              <td className={types[1]}>
                {data[2]["Abilitie(s)"][1] ? (
                  data[2]["Abilitie(s)"][1]
                ) : (
                  <span> &nbsp;</span>
                )}
              </td>
            </tr>
            <tr>
              <td className={types[1]}>&nbsp;</td>
              <td className={types[1]}>{data[1]["Move(s)"][2]}</td>
              <td className={types[1]}>
                {data[2]["Abilitie(s)"][2] ? (
                  data[2]["Abilitie(s)"][2]
                ) : (
                  <span> &nbsp;</span>
                )}
              </td>
            </tr>
            <tr>
              <td className={types[1]}>&nbsp;</td>
              <td className={types[1]}>{data[1]["Move(s)"][3]}</td>
              <td className={types[1]}>
                {data[2]["Abilitie(s)"][3] ? (
                  data[2]["Abilitie(s)"][3]
                ) : (
                  <span> &nbsp;</span>
                )}
              </td>
            </tr>
*/
