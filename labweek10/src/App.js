import React, { useState } from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        address1: '',
        address2: '',
        city: '',
        province: '',
        postalCode: '',
        agreed: false,
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div className="App">
            <form className="form-container" onSubmit={handleSubmit}>
                <h1>Data Entry Form</h1>
                <div className="form-row">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label>Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <label>Address</label>
                <input
                    type="text"
                    name="address1"
                    placeholder="1234 Main St"
                    value={formData.address1}
                    onChange={handleChange}
                />
                <label>Address 2</label>
                <input
                    type="text"
                    name="address2"
                    placeholder="Apartment, studio, or floor"
                    value={formData.address2}
                    onChange={handleChange}
                />
                <div className="form-row">
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    <label>Province</label>
                    <select
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                    >
                        <option value="">Choose...</option>
                        <option value="Alberta">Alberta</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                        <option value="Northwest Territories">Northwest Territories</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="Nunavut">Nunavut</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Prince Edward Island">Prince Edward Island</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                        <option value="Yukon">Yukon</option>
                    </select>
                    <label>Postal Code</label>
                    <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal Code"
                        value={formData.postalCode}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-row">
                    <input
                        type="checkbox"
                        name="agreed"
                        checked={formData.agreed}
                        onChange={handleChange}
                    />
                    <label>Agree to Terms & Conditions?</label>
                </div>
                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <div className="submitted-data">
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Full Name:</strong> {submittedData.fullName}</p>
                    <p><strong>Address:</strong> {submittedData.address1}</p>
                    <p><strong>Address 2:</strong> {submittedData.address2}</p>
                    <p><strong>City:</strong> {submittedData.city}</p>
                    <p><strong>Province:</strong> {submittedData.province}</p>
                    <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
                </div>
            )}
        </div>
    );
}

export default App;
