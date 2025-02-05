"use client";

import styles from "./../modules/design.module.css";

import { useState } from "react";

const months = [
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
];

export default function HomeWork() {
  const [selectedMonth, setSelectedMonth] = useState("      ^");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.selected}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedMonth}
      </div>
      {isOpen && (
        <ul className={styles.list}>
          {months.map((month) => (
            <li
              key={month.value}
              onClick={() => {
                setSelectedMonth(month.label);
                setIsOpen(false);
              }}
            >
              {month.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
