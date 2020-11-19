import React from 'react';

import { BsCheck } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';

const ComparisonTable = () => {
  return (
    <>
      <div className="pricing-sections-comparison-table">
        <table>
          <thead>
            <tr>
              <th>Plans</th>
              <th>Lite</th>
              <th>Standard</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Pricing</th>
              <td>
                <div>
                  <p>
                    <span>$9</span>
                    
                  </p>
                  <p>Quis suspendisse ut fermentum neque vivamus non tellus.</p>
                  <button>Buy Basic</button>
                </div>
              </td>
              <td>
                <div>
                  <p>
                    <span>$29</span>
                    
                  </p>
                  <p>Quis suspendisse ut fermentum neque vivamus non tellus.</p>
                  <button>Buy Essential</button>
                </div>
              </td>
              <td>
                <div>
                  <p>
                    <span>$59</span>
                    
                  </p>
                  <p>Quis suspendisse ut fermentum neque vivamus non tellus.</p>
                  <button>Buy Premium</button>
                </div>
              </td>
            </tr>
            <tr>
              <th>Features</th>
            </tr>
            <tr>
              <th>Molestie lobortis massa.</th>
              <td data-label="Molestie lobortis massa.">
                <BsCheck />
              </td>
              <td data-label="Molestie lobortis massa.">
                <BsCheck />
              </td>
              <td data-label="Molestie lobortis massa.">
                <BsCheck />
              </td>
            </tr>
            <tr>
              <th>Urna purus felis</th>
              <td data-label="Urna purus felis">
                <BsCheck />
              </td>
              <td data-label="Urna purus felis">
                <BsCheck />
              </td>
              <td data-label="Urna purus felis">
                <BsCheck />
              </td>
            </tr>
            <tr>
              <th>Tellus pulvinar sit dictum</th>
              <td data-label="Tellus pulvinar sit dictum">
                <BiMinus />
              </td>
              <td data-label="Tellus pulvinar sit dictum">
                <BsCheck />
              </td>
              <td data-label="Tellus pulvinar sit dictum">
                <BsCheck />
              </td>
            </tr>
            <tr>
              <th>Convallis.</th>
              <td data-label="Convallis.">
                <BiMinus />
              </td>
              <td data-label="Convallis.">
                <span>Up to 20 users</span>
              </td>
              <td data-label="Convallis.">
                <span>Up to 50 users</span>
              </td>
            </tr>
            <tr>
              <th>Reporting</th>
            </tr>
            <tr>
              <th>Adipiscing</th>
              <td>
                <BsCheck />
              </td>
              <td>
                <BsCheck />
              </td>
              <td>
                <BsCheck />
              </td>
            </tr>
            <tr>
              <th>Eget risus integer.</th>
              <td>
                <BiMinus />
              </td>
              <td>
                <BsCheck />
              </td>
              <td>
                <BsCheck />
              </td>
            </tr>
            <tr>
              <th>Garavida leo urna velit.</th>
              <td>
                <BiMinus />
              </td>
              <td>
                <BiMinus />
              </td>
              <td>
                <BsCheck />
              </td>
            </tr>
            <tr>
              <th>elementum ut dapibus mi feugiat cras nisl.</th>
              <td>
                <BiMinus />
              </td>
              <td>
                <BiMinus />
              </td>
              <td>
                <BsCheck />
              </td>
            </tr>
            <tr>
              <th>Support</th>
            </tr>
            <tr>
              <th>Sit dignissim.</th>
              <td>
                <BsCheck />
              </td>
              <td>
                <BsCheck />
              </td>
              <td>
                <BsCheck />
              </td>
            </tr>
            <tr>
              <th>Congue at nibh et.</th>
              <td>
                <BiMinus />
              </td>
              <td>
                <BsCheck />
              </td>
              <td>
                <BsCheck />
              </td>
            </tr>
            <tr>
              <th>Volutpat feguiat mattis.</th>
              <td>
                <BiMinus />
              </td>
              <td>
                <BsCheck />
              </td>
              <td>
                <BsCheck />
              </td>
            </tr>
            <tr>
              <th>Tirstique pellentesque ornare diam sapien.</th>
              <td>
                <BiMinus />
              </td>
              <td>
                <BiMinus />
              </td>
              <td>
                <BsCheck />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Buy Basic</td>
            </tr>
            <tr>
              <td>Buy Essential</td>
            </tr>
            <tr>
              <td>Buy Premium</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default ComparisonTable;
