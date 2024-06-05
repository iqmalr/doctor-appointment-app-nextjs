// src/libs/actions/SaveMedicalRecord.ts
export async function saveMedicalRecord(formData: FormData) {
  const id = formData.get("id");
  const response = await fetch(
    `https://strapi-production-946a.up.railway.app/api/medical-records/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          Name: formData.get("name"),
          DateOfBirth: formData.get("dateOfBirth"),
          Address: formData.get("address"),
          // Add other fields as necessary
        },
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to save medical record");
  }

  return await response.json();
}
