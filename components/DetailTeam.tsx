import { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/TeamNav";
import Footer from "../components/FooterSection";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
  dob: {
    date: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  phone: string;
}

const Index: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=4");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Head>
        <title>Company_Profile</title>
        <meta name="description" content="Generated by Create Next Stack." />
      </Head>

      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg p-6"
          >
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-center">
              {`${user.name.first} ${user.name.last}`}
            </h2>
            <p className="text-center text-gray-500 mb-4">{user.email}</p>
            <p className="text-center text-gray-500 mb-4">{`Date of Birth: ${new Date(user.dob.date).toLocaleDateString()}`}</p>
            <p className="text-center text-gray-500 mb-4">{`Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}</p>
            <p className="text-center text-gray-500 mb-4">{`Phone: ${user.phone}`}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;
