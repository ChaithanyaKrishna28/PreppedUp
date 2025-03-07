import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="text-xl mt-4 text-gray-700">Oops! The page you're looking for doesn't exist.</p>
        <p className="mt-4">
          Go back to <Link to="/" className="text-blue-500 hover:underline">Home</Link>.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
