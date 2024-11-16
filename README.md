# **Healthcare Services API**

A simple Node.js and Express-based REST API to manage healthcare services. The API provides functionalities to add, retrieve, update, and delete healthcare services.

---

## **Features**
- Add new healthcare services.
- Retrieve all available services.
- Update existing services.
- Delete a service by its ID.

---

## **Technology Stack**
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Validation:** Mongoose Schema Validation

---

## **Setup Instructions**

### **1. Prerequisites**
- Node.js installed (v14 or higher recommended).
- MongoDB installed and running (or use MongoDB Atlas for cloud-based databases).
- Git installed (optional).

### **2. Clone the Repository**
```bash
git clone https://github.com/KAMRANKHANALWI/Healthcare-Services-API.git
cd Healthcare-Services-API
```

### **3. Install Dependencies**
```bash
npm install
```

### **4. Configure MongoDB**
- If running MongoDB locally, ensure it is started with the default port (`27017`).
- Update the MongoDB connection string in `src/config/database.js` if necessary:
  ```javascript
  const url = "mongodb://127.0.0.1:27017/healthcare";
  ```

- For MongoDB Atlas, use the connection string provided in your cluster setup.

### **5. Start the Server**
- For development:
  ```bash
  npm run dev
  ```
- For production:
  ```bash
  npm start
  ```

### **6. Test the API**
- The server will start and listen on `http://localhost:5000` by default.
- Use tools like **Postman** or **cURL** to interact with the endpoints.

---

## **API Endpoints**

### **Base URL:** `http://localhost:5000/api`

### **1. Add a Service**
**Endpoint:** `POST /services`  
**Description:** Add a new healthcare service.  
**Request Body:**
```json
{
  "name": "General Consultation",
  "description": "Consultation with a general physician.",
  "price": 500
}
```
**Response:**  
Status `201`  
```json
{
  "_id": "64a77c3fb13a2b001ff61111",
  "name": "General Consultation",
  "description": "Consultation with a general physician.",
  "price": 500,
  "createdAt": "2024-11-15T10:00:00.000Z",
  "updatedAt": "2024-11-15T10:00:00.000Z"
}
```

---

### **2. Get All Services**
**Endpoint:** `GET /services`  
**Description:** Retrieve a list of all healthcare services.  
**Response:**  
Status `200`  
```json
[
  {
    "_id": "64a77c3fb13a2b001ff61111",
    "name": "General Consultation",
    "description": "Consultation with a general physician.",
    "price": 500,
    "createdAt": "2024-11-15T10:00:00.000Z",
    "updatedAt": "2024-11-15T10:00:00.000Z"
  },
  {
    "_id": "64a77c3fb13a2b001ff61112",
    "name": "Dental Cleaning",
    "description": "Professional cleaning of teeth to remove plaque and tartar.",
    "price": 1200,
    "createdAt": "2024-11-15T10:00:00.000Z",
    "updatedAt": "2024-11-15T10:00:00.000Z"
  }
]
```

---

### **3. Update a Service**
**Endpoint:** `PUT /services/:id`  
**Description:** Update an existing service by its ID.  
**Request Body:**
```json
{
  "name": "Updated Service Name",
  "description": "Updated description.",
  "price": 1500
}
```
**Response:**  
Status `200`  
```json
{
  "_id": "64a77c3fb13a2b001ff61111",
  "name": "Updated Service Name",
  "description": "Updated description.",
  "price": 1500,
  "createdAt": "2024-11-15T10:00:00.000Z",
  "updatedAt": "2024-11-15T11:00:00.000Z"
}
```

---

### **4. Delete a Service**
**Endpoint:** `DELETE /services/:id`  
**Description:** Delete a service by its ID.  
**Response:**  
Status `200`  
```json
{
  "message": "Service deleted successfully"
}
```

---

## **Error Handling**
The API provides appropriate error responses:
- `400 Bad Request`: Invalid input or missing fields.
- `404 Not Found`: Resource not found.
- `500 Internal Server Error`: Database or server issues.

---

### **Contributing**

Feel free to test, use, and improve this API. If you encounter any issues or bugs, please don't hesitate to reach out to me at [khankamranalwi@gmail.com](mailto:khankamranalwi@gmail.com). Your contributions and feedback are always welcome!



