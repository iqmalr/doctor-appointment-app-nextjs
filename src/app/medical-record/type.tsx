export interface MedicalRecord {
  id: number;
  attributes: {
    MedicalRecordId: string;
    Name: string;
    DateOfBirth: string;
    AdmissionDiagnosis: string;
    PhysicalExamination: string;
    TreatmentHistory: string;
    PrimaryDiagnosis: string;
    SecondaryDiagnosis: string;
    ComplicationDiagnosis: string;
    ProcedureName: string;
    AnesthesiaType: string;
    Address: string;
    DischargeCondition: string;
    DischargeMethod: string;
    DischargeStatus: string;
    FollowUpPlan: string;
    Email: string;
    createdAt: string;
    updatedAt: string;
  };
}
