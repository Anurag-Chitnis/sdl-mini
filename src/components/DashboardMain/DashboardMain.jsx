import React from 'react';
import './DashboardMain.scss';
import { Doughnut } from 'react-chartjs-2';

export default class DashboardMain extends React.Component {
  render() {
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    };
    return (
      <div className="dash-wrapper">
        <div className="left-dash">
          <div className="left-dash-item"></div>
          <div className="left-dash-item"></div>
          <div className="left-dash-item"></div>
          <div className="left-dash-item"></div>
        </div>
        <div className="right-dash">
          <div className="info">
            <div>
              My balance
              <h1>$0.0</h1>
            </div>
            <div>
              Total shares
              <h1>002</h1>
            </div>
            <div>
              Portfolio worth
              <h1>$0.00</h1>
            </div>
          </div>
          <div className="personal-pie-ch">
            <Doughnut data={data} height={80} width={80} legend={false} />
          </div>
          <div className="market-ch">Market</div>
          <div className="personal-ch">Your investments</div>
          <div className="bulls">
            Bulls and Bucks
            <div>
              <div>GE</div>
              <div>GE</div>
              <div>GM</div>
              <div>FORD</div>
              <div>TSL</div>
            </div>
            <div>
              <div>GE</div>
              <div>GE</div>
              <div>GM</div>
              <div>FORD</div>
              <div>TSL</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
