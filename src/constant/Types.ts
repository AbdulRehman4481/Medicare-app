export interface PatientDataType {
  foreName: string;
  diagnosis: string;
  status: string;
  gender: string;
  id:string;
}
export interface AppointmentDataType {
  consultation: string;
  dateTime: string;
}
export type Change = {
    target: {
      name: string;
      value: string;
    };
  };
  export interface UserData {
    fullName: string;
    email: string;
    password: string;
    companyName: string;
    employees: string;
  }
  export interface EditProfileFormProps {
    isOpen: boolean;
    onClose: () => void;
  }