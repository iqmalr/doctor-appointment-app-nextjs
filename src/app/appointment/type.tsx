export interface Appointment {
  id: string;
  attributes: {
    UserName: string;
    Email: string;
    Date: string;
    Time: string;
    Note: string;
    Status: string;
  };
}
