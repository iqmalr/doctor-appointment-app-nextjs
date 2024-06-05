"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Appointment } from "../../type"; // Assuming you have a type defined for Appointment

const AppointmentDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [editAppointment, setEditAppointment] =
    useState<Partial<Appointment> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchAppointment = async () => {
        try {
          const res = await axios.get(
            `https://strapi-production-946a.up.railway.app/api/appointments/${slug}`
          );
          setAppointment(res.data.data);
          setEditAppointment(res.data.data.attributes);
        } catch (err: any) {
          setError(err.message);
        }
      };

      fetchAppointment();
    }
  }, [slug]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditAppointment((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Edited Appointment Data:", editAppointment);

    try {
      if (editAppointment) {
        const response = await axios.put(
          `https://strapi-production-946a.up.railway.app/api/appointments/${slug}`,
          { data: editAppointment }
        );
        console.log("Response from server:", response.data);
        console.log("Updated Appointment Data:", response.data.data.attributes);
        // Uncomment the following line to redirect after a successful update
        // router.push("/appointments");
      }
    } catch (err: any) {
      console.error("Error during PUT request:", err);
      setError(err.message);
    }
  };

  const handleCancel = () => {
    router.push("/appointment");
  };

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  if (!appointment || !editAppointment) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="font-bold">Appointment Details</CardTitle>
        </CardHeader>
        <CardContent className="rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                <strong>UserName:</strong>
                <Input
                  type="text"
                  name="UserName"
                  value={editAppointment.UserName || ""}
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
                  value={editAppointment.Email || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Date:</strong>
                <Input
                  type="text"
                  name="Date"
                  value={editAppointment.Date || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Time:</strong>
                <Input
                  type="text"
                  name="Time"
                  value={editAppointment.Time || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Note:</strong>
                <Input
                  type="text"
                  name="Note"
                  value={editAppointment.Note || ""}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                <strong>Status:</strong>
                <Input
                  type="text"
                  name="Status"
                  value={editAppointment.Status || ""}
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

export default AppointmentDetailPage;
