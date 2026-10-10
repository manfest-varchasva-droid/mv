"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2027-02-05T00:00:00+05:30");
const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;

type TimeLeft = {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  complete: boolean;
};

function getTimeLeft(now = new Date()): TimeLeft {
  if (now >= TARGET) {
    return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0, complete: true };
  }

  // Shift both instants to IST and use UTC getters/setters so calendar-month
  // arithmetic stays tied to the event timezone.
  const start = new Date(now.getTime() + IST_OFFSET_MS);
  const end = new Date(TARGET.getTime() + IST_OFFSET_MS);

  let months =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    (end.getUTCMonth() - start.getUTCMonth());

  const cursor = new Date(start);
  cursor.setUTCMonth(cursor.getUTCMonth() + months);

  if (cursor > end) {
    months -= 1;
    cursor.setTime(start.getTime());
    cursor.setUTCMonth(cursor.getUTCMonth() + months);
  }

  let remaining = end.getTime() - cursor.getTime();
  const days = Math.floor(remaining / 86_400_000);
  remaining %= 86_400_000;
  const hours = Math.floor(remaining / 3_600_000);
  remaining %= 3_600_000;
  const minutes = Math.floor(remaining / 60_000);
  const seconds = Math.floor((remaining % 60_000) / 1000);

  return { months, days, hours, minutes, seconds, complete: false };
}

const INITIAL_TIME: TimeLeft = {
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  complete: false,
};

export function Countdown() {
  // Keep the server and first client render identical. The real countdown is
  // filled immediately after hydration, avoiding a one-second text mismatch.
  const [time, setTime] = useState<TimeLeft>(INITIAL_TIME);

  useEffect(() => {
    const tick = () => setTime(getTimeLeft());
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (time.complete) {
    return <div className="countdown-live">MANFEST-VARCHASVA 2027 IS LIVE</div>;
  }

  const units = [
    ["Months", time.months],
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds],
  ] as const;

  return (
    <div className="countdown-wrap" aria-label="Countdown to Manfest-Varchasva 2027">
      <div className="countdown-label">COUNTDOWN TO MV 2027</div>
      <div className="countdown-grid">
        {units.map(([label, value]) => (
          <div className="countdown-unit" key={label}>
            <strong>{String(value).padStart(2, "0")}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
