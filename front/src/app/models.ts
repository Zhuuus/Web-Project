export interface PersonalData {
    image:              string
    name :              string
    sur_name:           string
    email:              string
    phone_number:       string
    date_of_birth:      string
    blood_group:        string
    diagnosis:          string
    allergies:          string
    contraindications:  string
    guardian_contact:   string
    hospital:           string
}

export interface Token {
    access:            string;
    refresh:           string;
  }
