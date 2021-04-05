export interface User{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    passwordSalt:string;
    passwordHash:string;
    findeksScore:number;

}