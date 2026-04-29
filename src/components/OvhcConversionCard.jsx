import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertCircle, Activity, Award, TrendingDown } from 'lucide-react';
import './OvhcConversionCard.css';

const OvhcConversionCard = () => {
  const navigate = useNavigate();

  return (
    <div className="ovhc-card">
      <div className="ovhc-header">
        <h3 className="ovhc-title">Your cover ends in 2 months</h3>
      </div>

      <div className="ovhc-compact-value">
        <div className="ovhc-value-row-flex">
          <div className="ovhc-val-item">
            <Activity size={16} className="ovhc-val-icon red" />
            <span><strong>78</strong> Health Score</span>
          </div>
          <div className="ovhc-val-divider" />
          <div className="ovhc-val-item">
            <Award size={16} className="ovhc-val-icon gold" />
            <span><strong>2,400 pts</strong> earned</span>
          </div>
        </div>
        <div className="ovhc-val-item bottom">
          <TrendingDown size={16} className="ovhc-val-icon green" />
          <span>Up to <strong>$18/month</strong> advantage</span>
        </div>
      </div>

      <div className="ovhc-messaging">
        <div className="ovhc-msg-row">
          <CheckCircle2 size={18} className="ovhc-msg-icon positive" />
          <p>Stay with Medibank to keep your rewards and benefits</p>
        </div>
        <div className="ovhc-msg-row">
          <AlertCircle size={18} className="ovhc-msg-icon neutral" />
          <p>Switching means starting over with no activity benefits</p>
        </div>
      </div>

      <button className="ovhc-cta" onClick={() => navigate('/ovhc-transition')}>
        Keep your benefits <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default OvhcConversionCard;
