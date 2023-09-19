import { products } from "../../data/products"
import { persons } from "../../data/persons"

export function Table() {
  const toggleCheckbox = (e) => {
    let td = e.target.closest("td")
    td.classList.toggle("checked")
  }

  return (
    <table className="table">
      <thead>
        <tr className="table-names">
          <th colSpan={2}></th>
          {persons.map((person, idx) => {
            return (
              <th className="table-cell-name">
                {person.name}
                <img className="person-img" src={person.img} alt="" />
              </th>
            )
          })}
          <th>Сумма (руб.)</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, idx) => {
          return (
            <tr>
              <td>{idx + 1}</td>
              <td>{product.name}</td>
              {persons.map((person) => {
                return (
                  <td className="td-checkbox">
                    <label>
                      <input onClick={toggleCheckbox} type="checkbox" />
                    </label>
                  </td>
                )
              })}
              <td>{product.price}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
