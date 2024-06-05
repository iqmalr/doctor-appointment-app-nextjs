// MedicalRecordDialog.tsx
import { MedicalRecord } from "@/app/test/type"; // Import the MedicalRecord type
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";

interface MedicalRecordDialogProps {
  medicalRecord: MedicalRecord; // Prop untuk data medical record
  onClose: () => void; // Prop untuk menutup dialog
}

const MedicalRecordDialog: React.FC<MedicalRecordDialogProps> = ({
  medicalRecord,
  onClose,
}) => {
  return (
    <Dialog open={true}>
      <DialogHeader>
        <DialogTitle>Detail Medical Record</DialogTitle>
        <DialogDescription>Lihat detail rekam medis di sini.</DialogDescription>
      </DialogHeader>
      <DialogContent className="sm:max-w-[425px]">
        {/* Display the medical record details */}
        <div>{`Medical Record ID: ${medicalRecord.attributes.MedicalRecordId}`}</div>
        <div>{`Name: ${medicalRecord.attributes.Name}`}</div>
        <div>{`Date of Birth: ${medicalRecord.attributes.DateOfBirth}`}</div>
        {/* Add more fields for other details */}
      </DialogContent>
      <DialogFooter>
        <Button onClick={onClose}>Close</Button>
        {/* Add additional buttons or actions here */}
      </DialogFooter>
    </Dialog>
  );
};

export default MedicalRecordDialog;
