"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MedicalRecord } from "../../type"; // Assuming you have a type defined for MedicalRecord

const MedicalRecordDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;
  const [medicalRecord, setMedicalRecord] = useState<MedicalRecord | null>(
    null
  );
  const [editMedicalRecord, setEditMedicalRecord] = useState<
    MedicalRecord["attributes"] | null
  >(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchMedicalRecord = async () => {
        try {
          const res = await axios.get(
            `https://strapi-production-946a.up.railway.app/api/medical-records/${slug}`
          );
          setMedicalRecord(res.data.data);
          setEditMedicalRecord(res.data.data.attributes);
        } catch (err: any) {
          setError(err.message);
        }
      };

      fetchMedicalRecord();
    }
  }, [slug]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditMedicalRecord((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Edited Medical Record Data:", editMedicalRecord);

    try {
      if (editMedicalRecord) {
        const response = await axios.put(
          `https://strapi-production-946a.up.railway.app/api/medical-records/${slug}`,
          { data: { attributes: editMedicalRecord } }
        );
        console.log("Response from server:", response.data);
        console.log(
          "Updated Medical Record Data:",
          response.data.data.attributes
        );
        // Uncomment the following line to redirect after a successful update
        router.push("/medical-record");
      }
    } catch (err: any) {
      console.error("Error during PUT request:", err);
      setError(err.message);
    }
  };

  const handleCancel = () => {
    router.push("/medical-record");
  };

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  if (!medicalRecord || !editMedicalRecord) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="font-bold">Medical Record Details</CardTitle>
        </CardHeader>
        <CardContent className="rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                <strong>Medical Record ID:</strong>
                <Input
                  type="text"
                  name="MedicalRecordId"
                  value={editMedicalRecord.MedicalRecordId || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Name:</strong>
                <Input
                  type="text"
                  name="Name"
                  value={editMedicalRecord.Name || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Address:</strong>
                <Input
                  type="text"
                  name="Address"
                  value={editMedicalRecord.Address || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Date of Birth:</strong>
                <Input
                  type="text"
                  name="DateOfBirth"
                  value={editMedicalRecord.DateOfBirth || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Admission Diagnosis:</strong>
                <Input
                  type="text"
                  name="AdmissionDiagnosis"
                  value={editMedicalRecord.AdmissionDiagnosis || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Primary Diagnosis:</strong>
                <Input
                  type="text"
                  name="PrimaryDiagnosis"
                  value={editMedicalRecord.PrimaryDiagnosis || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Email:</strong>
                <Input
                  type="email"
                  name="Email"
                  value={editMedicalRecord.Email || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Physical Examination:</strong>
                <Input
                  type="text"
                  name="PhysicalExamination"
                  value={editMedicalRecord.PhysicalExamination || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Treatment History:</strong>
                <Input
                  type="text"
                  name="TreatmentHistory"
                  value={editMedicalRecord.TreatmentHistory || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Secondary Diagnosis:</strong>
                <Input
                  type="text"
                  name="SecondaryDiagnosis"
                  value={editMedicalRecord.SecondaryDiagnosis || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Complication Diagnosis:</strong>
                <Input
                  type="text"
                  name="ComplicationDiagnosis"
                  value={editMedicalRecord.ComplicationDiagnosis || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Procedure Name:</strong>
                <Input
                  type="text"
                  name="ProcedureName"
                  value={editMedicalRecord.ProcedureName || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Anesthesia Type:</strong>
                <Input
                  type="text"
                  name="AnesthesiaType"
                  value={editMedicalRecord.AnesthesiaType || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Discharge Condition:</strong>
                <Input
                  type="text"
                  name="DischargeCondition"
                  value={editMedicalRecord.DischargeCondition || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Discharge Method:</strong>
                <Input
                  type="text"
                  name="DischargeMethod"
                  value={editMedicalRecord.DischargeMethod || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Discharge Status:</strong>
                <Input
                  type="text"
                  name="DischargeStatus"
                  value={editMedicalRecord.DischargeStatus || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Follow Up Plan:</strong>
                <Input
                  type="text"
                  name="FollowUpPlan"
                  value={editMedicalRecord.FollowUpPlan || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="flex space-x-4 mt-4">
              <Button type="submit">Submit</Button>
              <Button type="button" variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default MedicalRecordDetailPage;
