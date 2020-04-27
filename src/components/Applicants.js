import React from "react";

function List(props) {
  return (
    <div style={{ height: "100vh" }}>
      <h3>All the applicants so far</h3>
      <table className="table table-sm table-hover table-bordered">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Available from:</th>
            <th>Way of communication</th>
            <th>English level</th>
            <th>Technical skills</th>
            <th>Description</th>
            <th></th>
          </tr>
          {props.data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.date}</td>
              <td>{item.communication}</td>
              <td>{item.english}</td>
              <td>{item.skills}</td>
              <td>{item.description}</td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => props.delPerson(item.id)}
              >
                <svg
                  class="bi bi-trash"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    clip-rule="evenodd"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
