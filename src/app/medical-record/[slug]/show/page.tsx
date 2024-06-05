// src/app/medical-record/[slug]/show/page.tsx
"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MedicalRecord } from "../../type";

const MedicalRecordDetailPage = () => {
  const params = useParams();
  // const router = useRouter();

  const { slug } = params;
  const [medicalRecord, setMedicalRecord] = useState<MedicalRecord | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchMedicalRecord = async () => {
        try {
          const res = await axios.get(
            `https://strapi-production-946a.up.railway.app/api/medical-records/${slug}`
          );
          setMedicalRecord(res.data.data);
        } catch (err: any) {
          setError(err.message);
        }
      };

      fetchMedicalRecord();
    }
  }, [slug]);

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  if (!medicalRecord) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bold ">Medical Record Details</CardTitle>
      </CardHeader>
      <CardHeader className="  rounded-lg shadow-lg">
        <CardTitle>
          <strong>Medical Record ID:</strong>{" "}
          {medicalRecord.attributes.MedicalRecordId}
        </CardTitle>
        <p>
          <strong>Name:</strong> {medicalRecord.attributes.Name}
        </p>
        <p>
          <strong>Date of Birth:</strong> {medicalRecord.attributes.DateOfBirth}
        </p>
        <p>
          <strong>Admission Diagnosis:</strong>{" "}
          {medicalRecord.attributes.AdmissionDiagnosis}
        </p>
        <p>
          <strong>Primary Diagnosis:</strong>{" "}
          {medicalRecord.attributes.PrimaryDiagnosis}
        </p>
        <p>
          <strong>Email:</strong> {medicalRecord.attributes.Email}
        </p>
        <p>
          <strong>PhysicalExamination</strong>{" "}
          {medicalRecord.attributes.PhysicalExamination}
        </p>
        <p>
          <strong>TreatmentHistory</strong>{" "}
          {medicalRecord.attributes.TreatmentHistory}
        </p>
        <p>
          <strong>SecondaryDiagnosis</strong>{" "}
          {medicalRecord.attributes.SecondaryDiagnosis}
        </p>
        <p>
          <strong>ComplicationDiagnosis</strong>{" "}
          {medicalRecord.attributes.ComplicationDiagnosis}
        </p>
        <p>
          <strong>ProcedureName</strong>{" "}
          {medicalRecord.attributes.ProcedureName}
        </p>
        <p>
          <strong>AnesthesiaType</strong>{" "}
          {medicalRecord.attributes.AnesthesiaType}
        </p>
        <p>
          <strong>DischargeCondition</strong>{" "}
          {medicalRecord.attributes.DischargeCondition}
        </p>
        <p>
          <strong>DischargeMethod</strong>{" "}
          {medicalRecord.attributes.DischargeMethod}
        </p>
        <p>
          <strong>DischargeStatus</strong>{" "}
          {medicalRecord.attributes.DischargeStatus}
        </p>
        <p>
          <strong>FollowUpPlan</strong> {medicalRecord.attributes.FollowUpPlan}
        </p>
      </CardHeader>
    </Card>
  );
};

export default MedicalRecordDetailPage;
