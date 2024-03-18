import React, { useState, useEffect } from "react";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  dob?: {
    date: string;
  };
  location?: {
    street: {
      name: string;
    };
  };
  phone?: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const DetailTeam: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        const userData: User = {
          name: {
            first: data.results[0].name.first,
            last: data.results[0].name.last,
          },
          email: data.results[0].email,
          dob: data.results[0].dob,
          location: data.results[0].location,
          phone: data.results[0].phone,
          picture: {
            large: data.results[0].picture?.large || "",
            medium: data.results[0].picture?.medium || "",
            thumbnail: data.results[0].picture?.thumbnail || "",
          },
        };
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Team Member Details
      </h1>
      {user && (
        <div className="mx-auto w-96 bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src={user.picture.medium}
            alt={`${user.name.first} ${user.name.last}`}
            className="w-48 h-auto rounded-full mx-auto"
            style={{ maxWidth: "250px" }}
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">{`${user.name.first} ${user.name.last}`}</h2>
            <p className="mb-2">{`Email: ${user.email}`}</p>
            {user.dob && (
              <p className="mb-2">{`Birthday: ${new Date(
                user.dob.date
              ).toLocaleDateString()}`}</p>
            )}
            {user.location && (
              <p className="mb-2">{`Address: ${user.location.street.name}`}</p>
            )}
            {user.phone && (
              <p className="mb-2">{`Phone Number: ${user.phone}`}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailTeam;
