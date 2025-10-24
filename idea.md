# 🧾 HR Attendance Tracker – Project Documentation

---

## 📌 Project Title & Overview

### **Title:**  
**HR Attendance Tracker**

### **Overview:**  
The **HR Attendance Tracker** is a web-based system designed to streamline the process of tracking employee attendance, managing leaves, and monitoring working hours.  
The system aims to reduce manual paperwork, prevent data loss, and provide real-time insights into attendance patterns, helping HR teams manage workforce productivity more efficiently.

It enables employees to check in/out digitally, apply for leaves, and view their personal records, while HR administrators can manage employee data, monitor attendance, and generate reports.

---

## ⚙️ Key Features / Modules

1. **Employee Attendance Management**
   - Employees can mark check-in and check-out.
   - Tracks total working hours automatically.
   - Displays attendance status for each day.

2. **Leave Management**
   - Employees can apply for leaves with a reason.
   - HR/Admin can approve or reject leave requests.
   - Displays available leave balance (future scope).

3. **User Authentication & Authorization**
   - Role-based login for Admin and Employee.
   - Secure authentication using **JWT tokens**.
   - Passwords are stored in encrypted form.

4. **Dashboard & Analytics**
   - **Admin Dashboard:** Displays total employees, active users, leave requests, and attendance statistics.
   - **Employee Dashboard:** Displays personal attendance history, total hours, and leave status.

5. **Report Generation**
   - HR/Admin can generate monthly or weekly attendance reports.
   - Export reports as CSV/PDF (future scope).

6. **Notifications (Optional / Future Scope)**
   - Email or in-app notifications for leave approval/rejection.
   - Automated reminders for check-in and check-out.

---

## 👥 User Roles

| **Role** | **Permissions / Responsibilities** |
|-----------|-----------------------------------|
| **Admin / HR** | Add and manage employee records, view all attendance and leave data, approve/reject leaves, generate reports, manage roles. |
| **Employee** | Mark attendance, apply for leaves, view attendance history, update personal information. |
| **Guest (Optional)** | View login page or landing information (no system access). |

---

## 🧭 Page / Screen List (Frontend)

| **Page / Component** | **Description** |
|------------------------|----------------|
| **Login Page** | Authentication page for both Admin and Employees. |
| **Admin Dashboard** | Overview of company-wide attendance stats and leave requests. |
| **Employee Dashboard** | Shows attendance record, total work hours, and leave status. |
| **Attendance Page** | Button to check-in and check-out; shows daily logs. |
| **Leave Management Page** | Employees apply for leave and view status; admin views all requests. |
| **Employee Management Page (Admin only)** | Admin adds/edits/deletes employee data. |
| **Reports Page (Admin only)** | Generate and export attendance or leave reports. |
| **Profile Page** | View or update user profile and change password. |
| **Logout Functionality** | Secure logout that removes JWT token. |

---

## 🗃️ Database Schema (Rough Draft)

### **1. users Table**
Stores all registered employees and admin data.

| **Field** | **Type** | **Description** |
|------------|-----------|----------------|
| user_id | INT (PK) | Unique user ID |
| name | VARCHAR(100) | Full name of employee |
| email | VARCHAR(100) | Employee’s login email |
| password | VARCHAR(255) | Encrypted password |
| role | ENUM('admin', 'employee') | Defines access level |
| department | VARCHAR(100) | Department name |
| date_joined | DATE | Joining date |
| status | ENUM('active', 'inactive') | Current employment status |

---

### **2. attendance Table**
Stores employee attendance logs for each day.

| **Field** | **Type** | **Description** |
|------------|-----------|----------------|
| attendance_id | INT (PK) | Unique record ID |
| user_id | INT (FK) | Links to users.user_id |
| date | DATE | Attendance date |
| check_in | TIME | Time when employee checks in |
| check_out | TIME | Time when employee checks out |
| total_hours | DECIMAL(5,2) | Total hours worked |
| status | ENUM('Present','Absent','Leave') | Attendance status |

**Relationship:**  
`users.user_id → attendance.user_id` (One-to-Many)

---

### **3. leaves Table**
Stores all leave requests made by employees.

| **Field** | **Type** | **Description** |
|------------|-----------|----------------|
| leave_id | INT (PK) | Unique leave ID |
| user_id | INT (FK) | Employee ID |
| start_date | DATE | Leave start date |
| end_date | DATE | Leave end date |
| reason | TEXT | Reason for leave |
| status | ENUM('Pending','Approved','Rejected') | Leave approval status |
| applied_on | DATE | Date of application |

**Relationship:**  
`users.user_id → leaves.user_id` (One-to-Many)

---

## 🧰 Tech Stack (Tentative)

| **Layer** | **Technology** |
|------------|----------------|
| **Frontend** | React.js, HTML5, CSS3, JavaScript (Tailwind) |
| **Backend** | Node.js with Express.js |
| **Database** | MySQL (SQL) |
| **Authentication** | JWT (JSON Web Token) |
| **Version Control** | Git & GitHub |
| **Deployment** | Render / Vercel (Frontend), Railway / AWS / Render (Backend) |
| **Tools** | Postman (API testing), VS Code (Development) |

---

## 🔄 Workflow

### **User Flow (Simplified):**
1. **Login Phase**
   - User logs in using email and password.
   - JWT is generated and stored in local storage.
   - Redirected based on role (Admin → Admin Dashboard, Employee → Employee Dashboard).

2. **Attendance Flow**
   - Employee clicks **“Check-In”** → system logs time.
   - On clicking **“Check-Out”**, total hours are calculated.
   - Attendance record saved in the database.

3. **Leave Management Flow**
   - Employee submits leave request → status = “Pending”.
   - Admin reviews and changes status to “Approved” or “Rejected”.
   - Employee receives notification (future scope).

4. **Report Flow**
   - Admin selects a date range → system generates report (attendance or leave summary).
   - Option to export report (future scope).

5. **Logout**
   - JWT is cleared → user session ends securely.

---

## 🎯 Expected Outcomes

- A **functional HR Attendance Management System** with:
  - Role-based login and authentication.
  - Attendance marking system (check-in/check-out).
  - Leave management system.
  - Admin dashboard with employee insights.
  - Real-time data storage and analytics.
- **Clean and responsive UI** built with React.
- **Backend APIs** built with Node.js and Express.js.
- **Database integration** with MongoDB/MySQL for persistence.
- Option for **future scalability** (notifications, payroll integration, etc.).


---

## 🗓️ Timeline (Tentative)

| **Phase** | **Duration** | **Tasks** |
|------------|---------------|-----------|
| Week 1 | Requirement Gathering & Design | UI wireframes, database schema |
| Week 2 | Frontend Development | React components, basic routing |
| Week 3 | Backend Development | REST APIs, database connection |
| Week 4 | Integration & Testing | End-to-end testing, debugging |
| Week 5 | Final Submission | Documentation, demo video, deployment |

---

## ✅ Final Deliverables

- Complete source code (Frontend + Backend).  
- Working demo or hosted link.  
- Database schema diagram.  
- This documentation file (`HR_Attendance_Tracker_Documentation.md`).  
- Presentation / PPT (for evaluation).  

---

> **Author:** Vinayak Singh  
> **Institution:** Newton School of Technology  
> **Year:** B.Tech (2nd Year)  
> **Project Type:** College Mini Project  
> **Version:** 1.0  
> **Date:** October 2025  

---
