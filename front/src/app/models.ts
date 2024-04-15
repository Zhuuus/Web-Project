export interface PersonalData {
    full_name: string;
    date_of_birth: Date;
    blood_group: string;
    diagnosis: string;
    allergies?: string;
    contraindications?: string;
    guardian_contact: string;
    hospital: string;
}
 

export interface UserRegister {
    id: Number;
    name: string;
    surename: string;
    email: string;
    phone_number: Number;
    date_of_birth: Date;
    gender: string;
    password: string;
}