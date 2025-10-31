import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Error fetching employees" });
  }
};

export const addEmployee = async (req, res) => {
  try {
    const { name, email, department } = req.body;
    const newEmp = await prisma.employee.create({
      data: { name, email },
    });
    res.status(201).json(newEmp);
  } catch (error) {
    res.status(500).json({ error: "Error adding employee" });
  }
};