
import React, { Fragment, useState } from "react";
import Card from "../../common/elements/Card";

const Users = () => {
  const usersData = [
    { id: 1, firstName: 'John', lastName: 'Smith', email: 'jsmith@em.pl', },
    { id: 3, firstName: 'Jannice', lastName: 'Bing', email: 'ohmy@fr.pl' }]

  const adminData = [
    { id: 2, firstName: 'Eva', lastName: 'Lopez', email: 'eval@em.pl', isAdmin: true }
  ];

  const [users, setUsers] = useState(usersData);
  const [admins, setAdmins] = useState(adminData);

  function setUserAdmin(user) {
    setUsers([...users.filter(x=>x.id !== user.id)]);
    setAdmins([...admins, user]);
  }
  function setUserNotAdmin(admin) {
    setUsers([...users, admin]);
    setAdmins([...admins.filter(x=>x.id !== admin.id)]);
  }

  const userElements = users.map(user => {
    return (
      <tr className={`table-row`}
        key={`user_${user.id}`}>
        <th scope="row">{user.id}</th>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td><button className="btn btn-success" onClick={() => setUserAdmin(user)}>Set admin</button> </td>
      </tr>);
  });

  const adminElements = admins.map(admin => {
    return (
      <tr className={`table-row`}
        key={`user_${admin.id}`}>
        <th scope="row">{admin.id}</th>
        <td>{admin.firstName}</td>
        <td>{admin.lastName}</td>
        <td>{admin.email}</td>
        <td><button className="btn btn-danger" onClick={() => setUserNotAdmin(admin)}>Revert admin</button> </td>
      </tr>);
  });


  return (
    <Fragment>
      <h1 className="h3 mb-2 text-gray-800">Users</h1>
      <p className="mb-4">Users here</p>

      <div className="row">
        <Card title="ADMINS" text={admins.length} icon="calendar" className="primary" />
        <Card title="USER" text={users.length} icon="pen" className="danger" />
        <Card title="SUMMARY PRICE" text={`44`} icon="store" className="success" />
      </div>

      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">User List</h6>
              <div className="header-buttons">
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive portlet">
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First name</th>
                      <th scope="col">Last name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Admin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminElements}
                    {userElements}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment >
  );
};

export default Users;
