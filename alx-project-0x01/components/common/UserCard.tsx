import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-2">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>
      <p className="text-gray-600 mb-2">Email: {email}</p>
      <p className="text-gray-600 mb-2">Phone: {phone}</p>
      <p className="text-gray-600 mb-2">
        Website:{" "}
        <a
          href={`https://${website}`}
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {website}
        </a>
      </p>
      <div className="mt-4">
        <h3 className="font-bold">Address</h3>
        <p className="text-gray-600">
          {address.street}, {address.suite}, {address.city}, {address.zipcode}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="font-bold">Company</h3>
        <p className="text-gray-600">{company.name}</p>
        <p className="text-gray-500 italic">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
