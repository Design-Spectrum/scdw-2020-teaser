import React from "react";

export function DisplayTimeShort(data) {
  const date = new Date(data);
  const month = new Intl.DateTimeFormat("en-US", {
    month: "numeric",
  }).format(date);

  const day = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
  }).format(date);

  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  }).format(date);

  const hour = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
  }).format(date);

  return `${month}/${day} ${weekday} ${hour}`
}


export function DisplayTimeLong(data) {
    const date = new Date(data);

    const year = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
      }).format(date);

    const month = new Intl.DateTimeFormat("en-US", {
      month: "numeric",
    }).format(date);
  
    const day = new Intl.DateTimeFormat("en-US", {
      day: "numeric",
    }).format(date);
  
    const weekday = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    }).format(date);
  
    const hour = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
    }).format(date);
  
    return `${year}/${month}/${day} ${weekday} ${hour}`
  }
  