import React, { useState,useEffect } from 'react';

const AddContentForm = () => {
    const [titleContent, setTitleContent] = useState('');
    const [descriptionContent, setDescriptionContent] = useState('');
    const [dataa, setDataa] = useState(null);
    const [errors, setErrors] = useState([]);
    const [Token, setToken] = useState();

    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
      setToken(storedToken);
    }, []);

    const submitContent = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('courseid', 1); // Change to the appropriate course ID
        formData.append('title', titleContent);
        formData.append('description', descriptionContent);
        formData.append('dataa', dataa);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/addcontent', {
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: `Bearer ${Token}`, // Replace with your actual auth token
                  },
            });

            if (!response.ok) {
                const responseData = await response.json();
                setErrors(responseData.errors || ['Failed to add content']);
                return;
            }

            // Clear form fields on successful submission
            setTitleContent('');
            setDescriptionContent('');
            setDataa(null);
            setErrors([]);
            alert('Content added successfully!');
        } catch (error) {
            console.error('Error:', error);
            setErrors(['Failed to add content']);
        }
    };

    return (
        <form onSubmit={submitContent} className="max-w-md mx-auto p-10 py-32">
            <div className="mb-5">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={titleContent}
                    onChange={(e) => setTitleContent(e.target.value)}
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <textarea
                    id="description"
                    rows="3"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={descriptionContent}
                    onChange={(e) => setDescriptionContent(e.target.value)}
                    required
                ></textarea>
            </div>
            <div className="mb-5">
                <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                    File
                </label>
                <input
                    type="file"
                    id="file"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={(e) => setDataa(e.target.files[0])}
                    required
                />
            </div>
            {errors.length > 0 && (
                <div className="mb-5">
                    <ul className="text-red-500">
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default AddContentForm;
