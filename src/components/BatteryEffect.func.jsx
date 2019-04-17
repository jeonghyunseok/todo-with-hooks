import React, { useState, useEffect } from 'react';
import Battery from './Battery';

export default function BatteryEffect2() {
  const [level, setLevel] = useState(0);
  const [charging, setCharging] = useState(false);

  function handleChange({ target: { level, charging } }) {
    setLevel(level);
    setCharging(charging);
  }

  useEffect(() => {
    navigator.getBattery().then(battery => {
      battery.addEventListener('levelchange', handleChange);
      battery.addEventListener('chargingchange', handleChange);
      handleChange({ target: battery });

      return () => {
        battery.removeEventListener('levelchange', handleChange);
        battery.removeEventListener('chargingchange', handleChange);
      };
    });
  }, []);

  return (
    <section>
      <Battery charging={charging} level={level} />
    </section>
  );
}
