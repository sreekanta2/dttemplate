import avatar from "@/public/images/avatar/avatar-6.jpg";
export { avatar };

const userData = [
  {
    id: 1,
    name: "John",
    email: "doctor@example.com",
    password: "123456",
    role: "doctor",
  },
  {
    id: 2,
    name: "Jane",
    email: "patient@example.com",
    password: "123456",
    role: "patient",
  },
  {
    id: 2,
    name: "Jane",
    email: "admin@example.com",
    password: "123456",
    role: "admin",
  },
  {
    id: 2,
    name: "Jane",
    email: "pharmacy@example.com",
    password: "123456",
    role: "pharmacy-admin",
  },
];

export const getUserByEmail = async (email: string) => {
  try {
    const user = userData.find((user) => user.email === email);

    return user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
