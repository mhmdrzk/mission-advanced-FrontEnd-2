const API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function getData() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addData(newData) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  });
  return res.json();
}

export async function editData(id, updatedData) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return res.json();
}

export async function deleteData(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return id;
}
