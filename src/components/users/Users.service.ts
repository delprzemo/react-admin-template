export class UserModel {
    constructor(public id: number,
        public firstName: string,
        public lastName: string,
        public email: string) { }
}

export type HttpResponse<T> = { result: T, status: HttpResponseCode };

export enum HttpResponseCode {
    Ok,
    Bad
}


export function GetUsers(): HttpResponse<UserModel[]> {
    const usersData: UserModel[] = [
        { id: 1, firstName: "John", lastName: "Smith", email: "jsmith@em.pl", },
        { id: 3, firstName: "Jannice", lastName: "Bing", email: "ohmy@fr.pl" }];

    return { result: usersData, status: 200 };
}

export function GetAdmins(): HttpResponse<UserModel[]>  {
    const adminData: UserModel[]  = [
        { id: 2, firstName: "Eva", lastName: "Lopez", email: "eval@em.pl" }
    ];

    return { result: adminData, status: 200 };
}

export function GetSuperAdmin(fieldName: keyof UserModel): HttpResponse<string | null>  {
    if (fieldName === "firstName") { return { result: "William", status: 200 } }
    if (fieldName === "lastName") { return { result: "Shekspir", status: 200 } }
    if (fieldName === "email") { return { result: "wShekspir@poet.com", status: 200 } }
    return { result: null, status: 200 };
}