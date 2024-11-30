Here's an updated README for your "Document Upload Backend" repository based on the stack you've used:

---

# Document Upload Backend

This repository contains a backend for a document upload system, built using **Node.js**, **Express**, and **TypeScript**. It allows users to upload and manage documents securely with **Multer** for file handling and **AWS S3** for storage.

---

## Features
- Upload documents via API.
- Store files in **AWS S3**.
- TypeScript for improved type safety and scalability.

---

## Requirements
Ensure you have the following installed on your system:
- **Node.js** (>= 14.x)
- **npm** or **yarn**
- AWS S3 bucket and access credentials

---

## Setup and Installation

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/Tanmaydeep-Singh/document-upload-backend.git
   cd document-upload-backend
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Set Environment Variables**  
   Create a `.env` file in the root directory with the following keys:
   ```env
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_S3_BUCKET_NAME=your_s3_bucket_name
   AWS_REGION=your_aws_region
   PORT=5000
   ```

4. **Compile TypeScript**  
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```

---

## Running the Application

1. **Start the Server**  
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

2. The server will start on `http://localhost:5000/`.

---

## API Endpoints

### 1. Upload Document  
   **Endpoint:** `/upload`  
   **Method:** `POST`  
   **Payload:**  
   - `file`: The document to upload (multipart/form-data)  
   **Response:**  
   - A success message with the S3 file URL.

### 2. Get Document  
   **Endpoint:** `/document/:key`  
   **Method:** `GET`  
   **Parameters:**  
   - `key`: The S3 object key of the document.  
   **Response:**  
   - The document is returned as a file.

---

## Project Structure
```plaintext
document-upload-backend/
├── src/
│   ├── routes/            # API routes
│   └── app.ts             # Application entry point
├── package.json           # Project metadata and scripts
├── tsconfig.json          # TypeScript configuration
├── .env                   # Environment variables
└── README.md              # Project documentation
```

---

## Scripts

- **Start Development Server**  
   ```bash
   npm run dev
   ```  
   Starts the server in development mode with hot reload.

- **Build Project**  
   ```bash
   npm run build
   ```  
   Compiles TypeScript to JavaScript.

- **Run Tests**  
   ```bash
   npm run test
   ```  

---

## Contributing
Contributions are welcome! Fork the repository, create a branch, and submit a pull request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

--- 

Let me know if you want further refinements or additions!