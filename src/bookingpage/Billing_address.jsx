import React from 'react';
import './billing_address.css';

function BillingAddress({ customerInfo, setCustomerInfo, errors }) {
  return (
    <div>
      <form>
        <div id="bill_box">
          <input 
            className="input1" 
            type="text" 
            placeholder="Street Address" 
            value={customerInfo.street}
            onChange={e => setCustomerInfo({ ...customerInfo, street: e.target.value })} 
          />
          <hr />
          <input 
            className="input1" 
            type="text" 
            placeholder="Apartment/Room" 
            value={customerInfo.apartment}
            onChange={e => setCustomerInfo({ ...customerInfo, apartment: e.target.value })} 
          />
          <hr />
          <input 
            className="input1" 
            type="text" 
            placeholder="City" 
            value={customerInfo.city}
            onChange={e => setCustomerInfo({ ...customerInfo, city: e.target.value })} 
          />
        
          <input 
            className="input1" 
            type="text" 
            placeholder="Zip" 
            value={customerInfo.zip}
            onChange={e => setCustomerInfo({ ...customerInfo, zip: e.target.value })} 
          />
          <hr />
          <input 
            className="input1" 
            type="text" 
            placeholder="Postal Code" 
            value={customerInfo.postalCode}
            onChange={e => setCustomerInfo({ ...customerInfo, postalCode: e.target.value })} 
          />
        </div>  
        <div>
          
          <br/><br/>
          <hr />
          <select 
            className="input1" 
            value={customerInfo.country}
            onChange={e => setCustomerInfo({ ...customerInfo, country: e.target.value })}
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            {/* Add more countries as needed */}
          </select>
          <hr />
          <br/><br/>
          {errors && <div className="error">{errors}</div>}
        </div>
      </form>
    </div>
  );
}

export default BillingAddress;
