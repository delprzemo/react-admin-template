export function GetUsers() {
    const usersData = [
        { id: 1, firstName: 'John', lastName: 'Smith', email: 'jsmith@em.pl', },
        { id: 3, firstName: 'Jannice', lastName: 'Bing', email: 'ohmy@fr.pl' }]

    return {result: usersData, status: 200} 
}

export function GetAdmins() {
    const adminData = [
        { id: 2, firstName: 'Eva', lastName: 'Lopez', email: 'eval@em.pl', isAdmin: true }
      ];

    return {result: adminData, status: 200} 
}

export function GetSuperAdmin(fieldName) {
    if(fieldName === "firstName")  return {result: "William", status: 200} 
    if(fieldName === "lastName")  return {result: "Shekspir", status: 200} 
    if(fieldName === "email")  return {result: "wShekspir@poet.com", status: 200} 
    return {result: null, status: 200} 
}