import { EmailValidator } from "@angular/forms"

export interface PersonalData {
    full_name :         string
    date_of_birth:      string
    blood_group:        string
    diagnosis:          string
    allergies:          string
    contraindications:  string
    guardian_contact:   string
    hospital:           string
}


export interface signUp {
    id:                 number
    email:              string
    password:           string
    full_name :         string
    date_of_birth:      string
    blood_group:        string
    diagnosis:          string
    allergies:          string
    contraindications:  string
    guardian_contact:   string
    hospital:           string
    image:              string
}

export interface Token {
    access:            string;
    refresh:           string;
  }
