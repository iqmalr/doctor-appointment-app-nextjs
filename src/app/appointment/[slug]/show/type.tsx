// src/app/test/type.ts

export interface MedicalRecordAttributes {
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
  DischargeCondition: string;
  DischargeMethod: string;
  DischargeStatus: string;
  FollowUpPlan: string;
  Email: string;
  createdAt: string;
  updatedAt: string;
}

export interface MedicalRecord {
  id: string;
  attributes: MedicalRecordAttributes;
}
